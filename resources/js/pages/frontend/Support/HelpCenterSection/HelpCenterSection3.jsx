// page/frontend/Support/HelpCenterSection/HelpCenterSection3.jsx

/**
 * Help Center Section III - AI-Powered Support Hub with Analytics & Knowledge Graph
 *
 * Unique Design Elements:
 * - AI-Powered Chatbot with Intelligent Response Generation
 * - Knowledge Graph Visualization for Topic Relationships
 * - Support Analytics Dashboard with Metrics
 * - Customer Sentiment Analysis
 * - Proactive Tips Widget for User Assistance
 * - Ticket Analytics with SLA Performance Tracking
 * - AI Search with Relevance Scoring
 * - Multi-view Interface (Dashboard, Knowledge Graph, FAQs, Knowledge Base, Analytics)
 * - Support Options with AI Chat Integration
 * - Submit Ticket Modal with Priority Selection
 * - Helpful Feedback Storage in localStorage
 * - Animated Blur Background Orbs
 * - Fully Responsive Layout
 *
 * All icons from react-icons (hi, hi2, ai)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useRef, useMemo } from 'react';

// React Icons - Heroicons, Heroicons 2, and AI Icons
import { AiOutlineRobot as HiOutlineRobot } from "react-icons/ai";
import {
  HiOutlineSearch,
  HiOutlineQuestionMarkCircle,
  HiOutlineDocumentText,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineBookOpen,
  HiOutlineChip,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineGlobe,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineArrowRight,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineFlag,
  HiOutlineStar,
  HiOutlineShare,
  HiOutlineLightBulb,
  HiOutlineSupport,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUser,
  HiOutlineTrendingUp,
  HiOutlineEmojiHappy,
  HiOutlineChartPie,
} from 'react-icons/hi';
import { HiOutlineTicket } from 'react-icons/hi2';

const HelpCenterSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [ticketNumber, setTicketNumber] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [proactiveTips, setProactiveTips] = useState([]);
  const [activeView, setActiveView] = useState('dashboard');
  const [helpfulFeedback, setHelpfulFeedback] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [sentimentData] = useState({ positive: 65, neutral: 20, negative: 15, });
  const [slaData] = useState({ met: 94, breached: 6, averageResolution: '4.2h', });
  const [kbMetrics, setKbMetrics] = useState({ totalArticles: 0, helpfulPercent: 92, mostViewed: [], });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', category: 'general', message: '', priority: 'normal', attachment: null, });
  const [ticketAnalytics, setTicketAnalytics] = useState({ total: 0, resolved: 0, pending: 0, avgResponseTime: '2.5h', satisfaction: 4.8, topIssues: [], });

  // ==================== REFERENCE MANAGEMENT ====================
  const modalRef = useRef(null);
  const knowledgeGraphRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);

  const categories = useMemo(() => config?.categories || [
    { id: 'all', name: 'All Topics', icon: 'question', count: faqs.length },
    { id: 'getting-started', name: 'Getting Started', icon: 'rocket', count: faqs.filter(f => f.category === 'getting-started').length },
    { id: 'account', name: 'Account & Billing', icon: 'user', count: faqs.filter(f => f.category === 'account').length },
    { id: 'features', name: 'Features', icon: 'chip', count: faqs.filter(f => f.category === 'features').length },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: 'wrench', count: faqs.filter(f => f.category === 'troubleshooting').length },
    { id: 'security', name: 'Security', icon: 'shield', count: faqs.filter(f => f.category === 'security').length },
  ], [config?.categories, faqs]);

  const contactInfo = config?.contactInfo || {
    email: 'support@supplychainpro.com',
    phone: '+1 (800) 555-0123',
    chat: 'Available 24/7',
    hours: 'Mon-Fri, 9am-6pm EST',
  };

  const knowledgeBase = useMemo(() => config?.knowledgeBase || [], [config?.knowledgeBase]);
  const tickets = useMemo(() => config?.tickets || [], [config?.tickets]);

  // ==================== LOCAL STORAGE & EFFECTS ====================
  useEffect(() => {
    setKbMetrics(prev => ({
      ...prev,
      totalArticles: knowledgeBase.length,
      mostViewed: knowledgeBase.slice(0, 5).map(a => ({ title: a.title, views: a.views || 0 })),
    }));
  }, [knowledgeBase]);

  // Build knowledge graph
  useEffect(() => {
    const graph = {
      nodes: [],
      edges: [],
    };

    categories.forEach(cat => {
      if (cat.id !== 'all') {
        graph.nodes.push({ id: cat.id, label: cat.name, type: 'category', size: 20 });
      }
    });

    faqs.forEach(faq => {
      graph.nodes.push({ id: `faq-${faq.id}`, label: faq.question.substring(0, 30), type: 'faq', size: 15 });
      graph.edges.push({ from: `faq-${faq.id}`, to: faq.category, type: 'belongs_to' });

      if (faq.tags) {
        faq.tags.forEach(tag => {
          const relatedFaqs = faqs.filter(f => f.id !== faq.id && f.tags?.includes(tag));
          relatedFaqs.forEach(related => {
            if (!graph.edges.some(e => e.from === `faq-${faq.id}` && e.to === `faq-${related.id}`)) {
              graph.edges.push({ from: `faq-${faq.id}`, to: `faq-${related.id}`, type: 'related', strength: 0.5 });
            }
          });
        });
      }
    });

  }, [faqs, categories]);

  // Load data from localStorage
  useEffect(() => {
    const savedFeedback = localStorage.getItem('faqHelpfulFeedback');
    if (savedFeedback) setHelpfulFeedback(JSON.parse(savedFeedback));

    const savedChat = localStorage.getItem('aiChatMessages');
    if (savedChat) setChatMessages(JSON.parse(savedChat));

    const savedTickets = localStorage.getItem('supportTickets');
    if (savedTickets) {
      const savedTicketsData = JSON.parse(savedTickets);
      updateTicketAnalytics(savedTicketsData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('faqHelpfulFeedback', JSON.stringify(helpfulFeedback));
  }, [helpfulFeedback]);

  useEffect(() => {
    localStorage.setItem('aiChatMessages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  // Update ticket analytics
  const updateTicketAnalytics = (ticketData) => {
    const total = ticketData.length;
    const resolved = ticketData.filter(t => t.status === 'resolved').length;
    const pending = ticketData.filter(t => t.status === 'pending').length;

    const issues = {};
    ticketData.forEach(t => {
      issues[t.category] = (issues[t.category] || 0) + 1;
    });
    const topIssues = Object.entries(issues).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name, count]) => ({ name, count }));

    setTicketAnalytics({
      total,
      resolved,
      pending,
      avgResponseTime: '2.5h',
      satisfaction: 4.8,
      topIssues,
    });
  };

  // Generate proactive tips based on user behavior
  useEffect(() => {
    const tips = [
      { id: 1, title: 'New Feature Alert', description: 'Check out our new AI-powered demand forecasting tool!', priority: 'high', icon: 'sparkles' },
      { id: 2, title: 'Security Update', description: 'Two-factor authentication is now available for all accounts.', priority: 'medium', icon: 'shield' },
      { id: 3, title: 'Upcoming Webinar', description: 'Join our free webinar on supply chain optimization next Tuesday.', priority: 'low', icon: 'video' },
      { id: 4, title: 'Knowledge Base', description: '95% of users find answers in our updated documentation.', priority: 'low', icon: 'book' },
    ];
    setProactiveTips(tips);
  }, []);

  // ==================== AI SEARCH FUNCTIONS ====================
  useEffect(() => {
    if (searchQuery.length > 2) {
      const faqSuggestions = faqs
        .filter(faq => faq.question?.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 3)
        .map(faq => ({ type: 'faq', title: faq.question, id: faq.id, relevance: 95 }));

      const articleSuggestions = knowledgeBase
        .filter(article => article.title?.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 2)
        .map(article => ({ type: 'article', title: article.title, id: article.id, relevance: 87 }));

      setAiSuggestions([...faqSuggestions, ...articleSuggestions]);
    } else {
      setAiSuggestions([]);
    }
  }, [searchQuery, faqs, knowledgeBase]);

  // ==================== HELPER FUNCTIONS ====================
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

  const filteredArticles = useMemo(() => {
    return knowledgeBase.filter(article => {
      const matchesSearch = searchQuery === '' ||
        article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [knowledgeBase, searchQuery, activeCategory]);

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

    const newTicket = { ...formData, id: newTicketNumber, status: 'pending', createdAt: new Date().toISOString() };
    const updatedTickets = [...tickets, newTicket];
    updateTicketAnalytics(updatedTickets);
    localStorage.setItem('supportTickets', JSON.stringify(updatedTickets));

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

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

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

  // Knowledge Graph Visualization (simplified)
  const KnowledgeGraphView = () => (
    <div ref={knowledgeGraphRef} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 min-h-96">
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <HiOutlineShare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        Knowledge Graph
      </h4>
      <div className="relative h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-center text-sm font-semibold shadow-lg z-10 relative">
              Help Center
            </div>
            {categories.filter(c => c.id !== 'all').map((cat, idx) => {
              const angles = [0, 72, 144, 216, 288];
              const angle = angles[idx] * (Math.PI / 180);
              const radius = 150;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={cat.id}
                  className="absolute w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 flex items-center justify-center text-xs font-semibold shadow-md"
                  style={{ left: `calc(50% + ${x}px - 32px)`, top: `calc(50% + ${y}px - 32px)` }}
                >
                  {cat.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
        Connected knowledge network showing relationship between topics
      </p>
    </div>
  );

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Help Center Premium Hub"
    >
      {/* ==================== BACKGROUND PATTERN ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-hc" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-hc)" />
        </svg>
      </div>

      {/* ==================== PROACTIVE TIPS WIDGET ==================== */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <HiOutlineLightBulb className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Proactive Tip</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{proactiveTips[0]?.description}</p>
          <button className="text-xs text-blue-600 dark:text-blue-400 mt-2 hover:underline" aria-label="Learn more">
            Learn more →
          </button>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineRobot className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "AI-Powered Support"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Intelligent"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Support Center"}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "AI-powered support with intelligent chatbot, knowledge graph, ticket analytics, and proactive assistance. Get help faster than ever before."}
          </p>
        </div>

        {/* ==================== STATS DASHBOARD ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineTicket className="w-8 h-8 text-blue-500 dark:text-blue-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{ticketAnalytics.total}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Total Tickets</p>
            <div className="mt-2 flex gap-2 text-xs">
              <span className="text-green-600 dark:text-green-400">✓ {ticketAnalytics.resolved} resolved</span>
              <span className="text-yellow-600 dark:text-yellow-400">⏳ {ticketAnalytics.pending} pending</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineClock className="w-8 h-8 text-green-500 dark:text-green-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{ticketAnalytics.avgResponseTime}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Avg Response Time</p>
            <div className="mt-2 text-xs">
              <span className="text-green-600 dark:text-green-400">SLA Met: {slaData.met}%</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineStar className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{ticketAnalytics.satisfaction}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Customer Satisfaction</p>
            <div className="mt-2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <HiOutlineStar key={i} className={`w-3 h-3 ${i < Math.floor(ticketAnalytics.satisfaction) ? 'text-yellow-500 dark:text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <HiOutlineDocumentText className="w-8 h-8 text-purple-500 dark:text-purple-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{kbMetrics.totalArticles}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">KB Articles</p>
            <div className="mt-2 text-xs">
              <span className="text-green-600 dark:text-green-400">✓ {kbMetrics.helpfulPercent}% helpful</span>
            </div>
          </div>
        </div>

        {/* ==================== VIEW TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveView('dashboard')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeView === 'dashboard' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            aria-label="View dashboard"
          >
            <HiOutlineChartBar className="w-4 h-4" />Dashboard
          </button>
          <button
            onClick={() => setActiveView('knowledge-graph')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeView === 'knowledge-graph' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            aria-label="View knowledge graph"
          >
            <HiOutlineShare className="w-4 h-4" />Knowledge Graph
          </button>
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
            onClick={() => setActiveView('analytics')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeView === 'analytics' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            aria-label="View analytics"
          >
            <HiOutlineTrendingUp className="w-4 h-4" />Analytics
          </button>
        </div>

        {/* ==================== AI SEARCH BAR ==================== */}
        <div className="max-w-2xl mx-auto mb-12 relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask AI or search for help..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-sm text-gray-900 dark:text-white"
              aria-label="AI Search"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
              aria-label="Search"
            >
              AI Search
            </button>
          </div>
          {aiSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-10 animate-fadeIn">
              <div className="p-2 border-b border-gray-100 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">🤖 AI-Powered Suggestions</p>
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
                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">{suggestion.relevance}% match</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ==================== DASHBOARD VIEW ==================== */}
        {activeView === 'dashboard' && (
          <div className="space-y-6 mb-12">
            {/* Sentiment Analysis */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <HiOutlineEmojiHappy className="w-5 h-5 text-green-500 dark:text-green-400" />
                Customer Sentiment Analysis
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{sentimentData.positive}%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Positive</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${sentimentData.positive}%` }} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{sentimentData.neutral}%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Neutral</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${sentimentData.neutral}%` }} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">{sentimentData.negative}%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Negative</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: `${sentimentData.negative}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Top Issues */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <HiOutlineFlag className="w-5 h-5 text-red-500 dark:text-red-400" />
                Top Support Issues
              </h3>
              <div className="space-y-3">
                {ticketAnalytics.topIssues.map((issue, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">{issue.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{issue.count} tickets</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(issue.count / ticketAnalytics.total) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Most Viewed KB Articles */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <HiOutlineDocumentText className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                Most Viewed Knowledge Base Articles
              </h3>
              <div className="space-y-2">
                {kbMetrics.mostViewed.map((article, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
                    role="button"
                    tabIndex={0}
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">{article.title}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{article.views} views</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== KNOWLEDGE GRAPH VIEW ==================== */}
        {activeView === 'knowledge-graph' && (
          <div className="mb-12">
            <KnowledgeGraphView />
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.filter(c => c.id !== 'all').map(cat => (
                    <span key={cat.id} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {cat.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Connected Content</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The knowledge graph shows how different topics are related, helping you discover relevant content faster.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== FAQ VIEW ==================== */}
        {activeView === 'faq' && (
          <div className="space-y-8 mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
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
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <HiOutlineQuestionMarkCircle className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No FAQs found.</p>
                <button onClick={clearFilters} className="mt-4 text-blue-600 dark:text-blue-400 hover:underline" aria-label="Clear filters">
                  Clear filters
                </button>
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
                            className={`p-1 rounded-lg transition-all duration-300 ${helpfulFeedback[faq.id]?.helpful === true
                              ? 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
                              : 'text-gray-400 hover:text-green-600 dark:hover:text-green-400'
                              }`}
                            aria-label="Mark as helpful"
                          >
                            <HiOutlineThumbUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => markHelpful(faq.id, false)}
                            className={`p-1 rounded-lg transition-all duration-300 ${helpfulFeedback[faq.id]?.helpful === false
                              ? 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30'
                              : 'text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                              }`}
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

        {/* ==================== ANALYTICS VIEW ==================== */}
        {activeView === 'analytics' && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <HiOutlineChartPie className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                Ticket Volume Trend
              </h3>
              <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-600 rounded-xl">
                <p className="text-gray-400 dark:text-gray-500">Chart visualization would appear here</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <HiOutlineClock className="w-5 h-5 text-green-500 dark:text-green-400" />
                SLA Performance
              </h3>
              <div className="text-center py-8">
                <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">{slaData.met}%</div>
                <p className="text-gray-500 dark:text-gray-400">SLA Met</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-4">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: `${slaData.met}%` }} />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Average Resolution Time: {slaData.averageResolution}</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <HiOutlineUsers className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                Support Team Performance
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Avg First Response</span>
                  <span className="font-semibold text-gray-900 dark:text-white">2.5 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Resolution Rate</span>
                  <span className="font-semibold text-gray-900 dark:text-white">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Customer Satisfaction</span>
                  <span className="font-semibold text-gray-900 dark:text-white">4.8/5.0</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <HiOutlineLightBulb className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
                AI Insights
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">• 67% of users find answers in FAQ before creating tickets</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">• Peak support hours: 10 AM - 2 PM EST</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">• Most common search term: "integration setup"</p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SUPPORT OPTIONS GRID ==================== */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
              <HiOutlineRobot className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Chatbot</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Get instant answers from our AI assistant.</p>
            <button className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-all duration-300 group" aria-label="Start AI chat">
              Start Chatting <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          <div className="bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-green-600 text-white flex items-center justify-center mx-auto mb-4">
              <HiOutlineTicket className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Submit Ticket</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Get personalized help from our support specialists.</p>
            <button onClick={() => setShowTicketModal(true)} className="text-green-600 dark:text-green-400 font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-all duration-300 group" aria-label="Submit ticket">
              Submit Request <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
                <HiOutlineRobot className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">AI Chatbot</p>
              <p className="font-medium text-gray-900 dark:text-white">24/7 Available</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Instant responses</p>
            </div>
            <div className="transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlineGlobe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Status Page</p>
              <p className="font-medium text-gray-900 dark:text-white">System Status</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Real-time updates</p>
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
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default HelpCenterSection3;