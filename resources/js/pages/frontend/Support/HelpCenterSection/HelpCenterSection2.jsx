// page/frontend/Support/HelpCenterSection/HelpCenterSection2.jsx

/**
 * Help Center Section II - Advanced Support Hub with AI & Community Features
 *
 * Unique Design Elements:
 * - Stats Cards for Support Metrics (Articles, Satisfaction, Response Time, Solutions)
 * - AI-Powered Search with Live Suggestions
 * - Multi-view Interface (FAQs, Knowledge Base, Guides, Community)
 * - Live Chat Widget with Typing Indicator
 * - Guided Interactive Tour for New Users
 * - Community Forum with Post Creation
 * - Knowledge Base Articles with Categories
 * - Video Tutorials Gallery with Play Button
 * - Support Options Grid (Documentation, Live Chat, Submit Ticket)
 * - Contact Information Cards
 * - Submit Ticket Modal with Priority Selection
 * - Helpful Feedback Storage in localStorage
 * - Animated Blur Background Orbs
 * - Fully Responsive Layout
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineSearch,
  HiOutlineQuestionMarkCircle,
  HiOutlineDocumentText,
  HiOutlineMail,
  HiOutlineChat,
  HiOutlinePhone,
  HiOutlineBookOpen,
  HiOutlineAcademicCap,
  HiOutlineChip,
  HiOutlineUsers,
  HiOutlineGlobe,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineArrowRight,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineLightBulb,
  HiOutlineSupport,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUser,
  HiOutlinePlay,
} from 'react-icons/hi';
import { HiOutlineTicket, HiOutlineLifebuoy } from 'react-icons/hi2';

const HelpCenterSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [tourStep, setTourStep] = useState(0);
  const [showTour, setShowTour] = useState(false);
  const [forumPosts, setForumPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState('faq');
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [ticketNumber, setTicketNumber] = useState('');
  const [newForumPost, setNewForumPost] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [helpfulFeedback, setHelpfulFeedback] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');
  const [showForumModal, setShowForumModal] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [showAiSuggestions, setShowAiSuggestions] = useState(false);
  const [knowledgeBaseArticles, setKnowledgeBaseArticles] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', category: 'general', message: '', priority: 'normal', attachment: null, });

  // ==================== REFERENCE ELEMENTS ====================
  const modalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);

  const categories = config?.categories || [
    { id: 'all', name: 'All Topics', icon: 'question', count: faqs.length },
    { id: 'getting-started', name: 'Getting Started', icon: 'rocket', count: faqs.filter(f => f.category === 'getting-started').length },
    { id: 'account', name: 'Account & Billing', icon: 'user', count: faqs.filter(f => f.category === 'account').length },
    { id: 'features', name: 'Features', icon: 'chip', count: faqs.filter(f => f.category === 'features').length },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: 'wrench', count: faqs.filter(f => f.category === 'troubleshooting').length },
    { id: 'security', name: 'Security', icon: 'shield', count: faqs.filter(f => f.category === 'security').length },
  ];
  const stats = config?.stats || [];
  const contactInfo = config?.contactInfo || {
    email: 'support@supplychainpro.com',
    phone: '+1 (800) 555-0123',
    chat: 'Available 24/7',
    hours: 'Mon-Fri, 9am-6pm EST',
  };
  const knowledgeBase = useMemo(() => config?.knowledgeBase || [], [config?.knowledgeBase]);
  const guides = useMemo(() => config?.guides || [], [config?.guides]);
  const communityForums = useMemo(() => config?.communityForums || [], [config?.communityForums]);

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    setKnowledgeBaseArticles(knowledgeBase);
  }, [knowledgeBase]);

  useEffect(() => {
    setForumPosts(communityForums);
  }, [communityForums]);

  // Generate AI suggestions based on search query
  useEffect(() => {
    if (searchQuery.length > 2) {
      const faqSuggestions = faqs
        .filter(faq =>
          faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 3)
        .map(faq => ({ type: 'faq', title: faq.question, id: faq.id }));

      const articleSuggestions = knowledgeBaseArticles
        .filter(article =>
          article.title?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 2)
        .map(article => ({ type: 'article', title: article.title, id: article.id }));

      setAiSuggestions([...faqSuggestions, ...articleSuggestions]);
      setShowAiSuggestions(true);
    } else {
      setShowAiSuggestions(false);
    }
  }, [searchQuery, faqs, knowledgeBaseArticles]);

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchQuery === '' ||
        faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [faqs, searchQuery, activeCategory]);

  // Filter knowledge base articles
  const filteredArticles = useMemo(() => {
    return knowledgeBaseArticles.filter(article => {
      const matchesSearch = searchQuery === '' ||
        article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [knowledgeBaseArticles, searchQuery, activeCategory]);

  // Filter guides
  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      const matchesSearch = searchQuery === '' ||
        guide.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.description?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSearch;
    });
  }, [guides, searchQuery]);

  // Load helpful feedback from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('faqHelpfulFeedback');
    if (saved) setHelpfulFeedback(JSON.parse(saved));

    const savedChat = localStorage.getItem('chatMessages');
    if (savedChat) setChatMessages(JSON.parse(savedChat));
  }, []);

  useEffect(() => {
    localStorage.setItem('faqHelpfulFeedback', JSON.stringify(helpfulFeedback));
  }, [helpfulFeedback]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  // ==================== FORM HANDLERS ====================
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newTicketNumber = `TKT-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
    setTicketNumber(newTicketNumber);
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubmitted(false);
      setShowTicketModal(false);
      setFormData({
        name: '', email: '', subject: '', category: 'general',
        message: '', priority: 'normal', attachment: null
      });
      setTicketNumber('');
    }, 3000);
  };

  // ==================== FORUM FUNCTIONS ====================
  const createForumPost = () => {
    if (!newForumPost.trim()) return;

    const newPost = {
      id: Date.now(),
      title: newForumPost,
      author: formData.name || 'Anonymous',
      date: new Date().toISOString(),
      replies: 0,
      likes: 0,
      isPinned: false,
    };

    setForumPosts(prev => [newPost, ...prev]);
    setNewForumPost('');
    setShowForumModal(false);
  };

  // ==================== HELPER FUNCTIONS ====================
  const markHelpful = (faqId, isHelpful) => {
    setHelpfulFeedback(prev => ({
      ...prev,
      [faqId]: { helpful: isHelpful, timestamp: new Date().toISOString() }
    }));
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  // ==================== GUIDED TOUR ====================
  const tourSteps = [
    { target: '#search-bar', title: 'Search for Answers', content: 'Use the search bar to find answers to your questions quickly.' },
    { target: '#categories', title: 'Browse by Category', content: 'Filter FAQs by topic to find relevant information.' },
    { target: '#faq-section', title: 'Explore FAQs', content: 'Click on any question to reveal the answer.' },
    { target: '#support-options', title: 'Get Help', content: 'Contact our support team via chat, email, or ticket.' },
  ];

  const startTour = () => {
    setShowTour(true);
    setTourStep(0);
  };

  const nextTourStep = () => {
    if (tourStep < tourSteps.length - 1) {
      setTourStep(tourStep + 1);
    } else {
      setShowTour(false);
    }
  };

  const prevTourStep = () => {
    if (tourStep > 0) {
      setTourStep(tourStep - 1);
    }
  };

  // Get category icon
  const getCategoryIcon = (iconName) => {
    const icons = {
      question: <HiOutlineQuestionMarkCircle className="w-5 h-5" />,
      rocket: <HiOutlineSparkles className="w-5 h-5" />,
      user: <HiOutlineUser className="w-5 h-5" />,
      chip: <HiOutlineChip className="w-5 h-5" />,
      wrench: <HiOutlineSupport className="w-5 h-5" />,
      shield: <HiOutlineShieldCheck className="w-5 h-5" />,
    };
    return icons[iconName] || <HiOutlineQuestionMarkCircle className="w-5 h-5" />;
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Help Center Hub"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />



      {/* ==================== GUIDED TOUR OVERLAY ==================== */}
      {showTour && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setShowTour(false)}>
          <div className="absolute bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm" style={{
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -30%)',
          }} onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <HiOutlineLifebuoy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{tourSteps[tourStep].title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{tourSteps[tourStep].content}</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                {tourSteps.map((_, idx) => (
                  <div key={idx} className={`w-2 h-2 rounded-full ${idx === tourStep ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`} />
                ))}
              </div>
              <div className="flex gap-2">
                {tourStep > 0 && (
                  <button onClick={prevTourStep} className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" aria-label="Previous step">
                    Back
                  </button>
                )}
                <button onClick={nextTourStep} className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors" aria-label={tourStep === tourSteps.length - 1 ? "Finish tour" : "Next step"}>
                  {tourStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-6">
            <HiOutlineLifebuoy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{config?.badge || "Help Center"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Welcome to the"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Help Center"}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{config?.description || "Find answers, browse guides, or connect with our support team. We're here to help you succeed."}</p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'articles' ? <HiOutlineDocumentText className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                    stat.icon === 'users' ? <HiOutlineUsers className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                      stat.icon === 'clock' ? <HiOutlineClock className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                        <HiOutlineCheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== AI SEARCH BAR ==================== */}
        <div id="search-bar" className="max-w-2xl mx-auto mb-12 relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask a question or search for help..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm text-gray-900 dark:text-white"
              aria-label="Search for help"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
              aria-label="Search"
            >
              Search
            </button>
          </div>
          {showAiSuggestions && aiSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-10 animate-fadeIn">
              <div className="p-2 border-b border-gray-100 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">AI Suggestions</p>
              </div>
              {aiSuggestions.map((suggestion, idx) => (
                <div
                  key={idx}
                  className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  onClick={() => setSearchQuery(suggestion.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSearchQuery(suggestion.title)}
                >
                  <div className="flex items-center gap-2">
                    <HiOutlineLightBulb className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{suggestion.title}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ==================== VIEW TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveView('faq')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeView === 'faq' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            aria-label="View FAQs"
          >
            <HiOutlineQuestionMarkCircle className="w-4 h-4" />FAQs
          </button>
          <button
            onClick={() => setActiveView('knowledge-base')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeView === 'knowledge-base' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            aria-label="View knowledge base"
          >
            <HiOutlineBookOpen className="w-4 h-4" />Knowledge Base
          </button>
          <button
            onClick={() => setActiveView('guides')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeView === 'guides' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            aria-label="View guides"
          >
            <HiOutlineAcademicCap className="w-4 h-4" />Guides & Tutorials
          </button>
          <button
            onClick={() => setActiveView('community')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeView === 'community' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            aria-label="View community"
          >
            <HiOutlineUsers className="w-4 h-4" />Community
          </button>
        </div>

        {/* ==================== CATEGORY TABS ==================== */}
        {activeView !== 'community' && (
          <div id="categories" className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                aria-label={`Filter by ${category.name}`}
              >
                {getCategoryIcon(category.icon)}
                {category.name}
                {category.count > 0 && (
                  <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>
                    {category.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* ==================== FAQ VIEW ==================== */}
        {activeView === 'faq' && (
          <div id="faq-section" className="space-y-8 mb-12">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <HiOutlineQuestionMarkCircle className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No FAQs found.</p>
                <button onClick={clearFilters} className="mt-4 text-blue-600 dark:text-blue-400 hover:underline" aria-label="Clear filters">Clear filters</button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800">
                    <button
                      onClick={() => setSelectedFaq(selectedFaq === faq.id ? null : faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                      aria-label={`Toggle answer for ${faq.question}`}
                    >
                      <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                      <span className="text-gray-400 dark:text-gray-500 text-xl">{selectedFaq === faq.id ? '−' : '+'}</span>
                    </button>
                    {selectedFaq === faq.id && (
                      <div className="px-6 pb-4 pt-0 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{faq.answer}</p>
                        {faq.tags && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {faq.tags.map((tag, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Was this helpful?</span>
                          <button
                            onClick={() => markHelpful(faq.id, true)}
                            className={`p-1 rounded-lg transition-all duration-300 ${helpfulFeedback[faq.id]?.helpful === true ? 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-600 dark:hover:text-green-400'}`}
                            aria-label="Mark as helpful"
                          >
                            <HiOutlineThumbUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => markHelpful(faq.id, false)}
                            className={`p-1 rounded-lg transition-all duration-300 ${helpfulFeedback[faq.id]?.helpful === false ? 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30' : 'text-gray-400 hover:text-red-600 dark:hover:text-red-400'}`}
                            aria-label="Mark as not helpful"
                          >
                            <HiOutlineThumbDown className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== KNOWLEDGE BASE VIEW ==================== */}
        {activeView === 'knowledge-base' && (
          <div className="mb-12">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <HiOutlineDocumentText className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No articles found.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                        <HiOutlineDocumentText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{article.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{article.description}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs text-gray-400 dark:text-gray-500">Updated {article.updatedAt}</span>
                          <span className="text-xs text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">Read more →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== GUIDES VIEW ==================== */}
        {activeView === 'guides' && (
          <div className="mb-12">
            {filteredGuides.length === 0 ? (
              <div className="text-center py-12">
                <HiOutlineAcademicCap className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No guides found.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {filteredGuides.map((guide) => (
                  <div key={guide.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                    <div className="relative h-40 overflow-hidden">
                      <img src={guide.image} alt={guide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <HiOutlinePlay className="w-6 h-6 text-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{guide.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{guide.duration}</span>
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">Start Guide →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== COMMUNITY VIEW ==================== */}
        {activeView === 'community' && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community Discussions</h3>
              <button onClick={() => setShowForumModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors" aria-label="Create new post">
                New Post
              </button>
            </div>
            <div className="space-y-3">
              {forumPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 cursor-pointer"
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{post.title}</h4>
                        {post.isPinned && (
                          <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded-full">Pinned</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Posted by {post.author} • {new Date(post.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400">
                      <span>💬 {post.replies} replies</span>
                      <span>❤️ {post.likes} likes</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== SUPPORT OPTIONS GRID ==================== */}
        <div id="support-options" className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
              <HiOutlineDocumentText className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Browse our detailed documentation and user guides.</p>
            <button className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-all duration-300 group" aria-label="Browse documentation">
              Browse Docs <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          <div className="bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-purple-600 text-white flex items-center justify-center mx-auto mb-4">
              <HiOutlineChat className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Chat with our support team for immediate assistance.</p>
            <button className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-all duration-300 group" aria-label="Start live chat">
              Start Chat <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          <div className="bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-green-600 text-white flex items-center justify-center mx-auto mb-4">
              <HiOutlineTicket className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Submit Ticket</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Get personalized help from our support specialists.</p>
            <button onClick={() => setShowTicketModal(true)} className="text-green-600 dark:text-green-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-all duration-300 group" aria-label="Submit support ticket">
              Submit Request <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* ==================== GUIDED TOUR CTA ==================== */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center mb-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-semibold">New to the platform?</h3>
              <p className="text-blue-100 text-sm">Take a guided tour to get started quickly.</p>
            </div>
            <button onClick={startTour} className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105" aria-label="Start guided tour">
              Start Guided Tour →
            </button>
          </div>
        </div>

        {/* ==================== CONTACT INFO CARDS ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlineMail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email Support</p>
              <p className="font-medium text-gray-900 dark:text-white">{contactInfo.email}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Response within 24h</p>
            </div>
            <div className="transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlinePhone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone Support</p>
              <p className="font-medium text-gray-900 dark:text-white">{contactInfo.phone}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{contactInfo.hours}</p>
            </div>
            <div className="transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlineChat className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Live Chat</p>
              <p className="font-medium text-gray-900 dark:text-white">{contactInfo.chat}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Instant response</p>
            </div>
            <div className="transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlineGlobe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Community Forum</p>
              <p className="font-medium text-gray-900 dark:text-white">Join Discussion</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Connect with peers</p>
            </div>
          </div>
        </div>

        {/* ==================== TICKET MODAL ==================== */}
        {showTicketModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowTicketModal(false)}
            role="dialog"
            aria-label="Submit Support Ticket"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="bg-linear-to-r from-green-600 to-teal-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Submit Support Ticket</h3>
                  <button onClick={() => setShowTicketModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {ticketSubmitted ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ticket Created!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      Your ticket number: <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{ticketNumber}</span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">We'll email you updates on your request.</p>
                  </div>
                ) : (
                  <form onSubmit={handleTicketSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full name *"
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                          aria-label="Your full name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email *"
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                          aria-label="Your email address"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                        aria-label="Subject"
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white"
                        aria-label="Select priority"
                      >
                        <option value="low">Low Priority</option>
                        <option value="normal">Normal Priority</option>
                        <option value="high">High Priority</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your issue *"
                        rows="5"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-gray-900 dark:text-white placeholder-gray-500 ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                        aria-label="Describe your issue"
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Attachments (optional)</label>
                      <input
                        type="file"
                        name="attachment"
                        onChange={handleInputChange}
                        className="w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-900/30 dark:file:text-blue-400 hover:file:bg-blue-100 dark:hover:file:bg-blue-800/40 transition-colors"
                        aria-label="Attach file"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      aria-label="Submit ticket"
                    >
                      Submit Ticket
                      <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== FORUM MODAL ==================== */}
        {showForumModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowForumModal(false)}
            role="dialog"
            aria-label="Create New Post"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-orange-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Create New Post</h3>
                  <button onClick={() => setShowForumModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <textarea
                  value={newForumPost}
                  onChange={(e) => setNewForumPost(e.target.value)}
                  placeholder="What would you like to discuss?"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Forum post content"
                />
                <button
                  onClick={createForumPost}
                  className="w-full mt-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition-all duration-300"
                  aria-label="Publish post"
                >
                  Post to Community
                </button>
              </div>
            </div>
          </div>
        )}
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
          50% { opacity: 0.5; }
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
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default HelpCenterSection2;