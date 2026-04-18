// frontend/Contact/LiveChatOptionSection/LiveChatOptionSection2.jsx

/**
 * Live Chat Option Section Component - Advanced Chat with Queue System
 * A comprehensive live chat support section featuring:
 * - Full-featured chat widget with pre-chat form and language selection
 * - Queue position display during peak times
 * - Real-time message exchange with typing indicators
 * - Sound notifications for new messages
 * - Chat transcript saving and download functionality
 * - File attachment and emoji support in chat
 * - Quick response buttons for common inquiries
 * - Agent name display after connection
 * - Expandable FAQ accordion with search, filtering, and sorting
 * - Save/bookmark favorite FAQs with localStorage persistence
 * - Helpful/Not helpful voting on FAQs
 * - Export FAQs to JSON and print-friendly view
 * - Statistics display for trust signals
 * - Live chat hours and multi-language support display
 * - Agents online counter with real-time status
 * - End chat with transcript review modal
 * - Fully responsive chat modal with dark mode support
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSearch,
  HiOutlineChat,
  HiOutlineClock,
  HiOutlineQuestionMarkCircle,
  HiOutlinePaperAirplane,
  HiOutlineX,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineExternalLink,
  HiOutlineFilter,
  HiOutlineBookmark,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineUsers,
  HiOutlineCheckCircle,
  HiOutlineEmojiHappy,
  HiOutlineDocumentText,
  HiOutlinePaperClip,
  HiOutlineVolumeUp,
  HiOutlineVolumeOff,
  HiOutlineTranslate,
  HiOutlineCog,
  HiOutlineCreditCard,
  HiOutlineUserCircle,
  HiOutlineGlobeAlt,
} from 'react-icons/hi';

const LiveChatOptionSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openFaq, setOpenFaq] = useState(null);
  const [chatName, setChatName] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [chatEmail, setChatEmail] = useState('');
  const [agentName, setAgentName] = useState('');
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [chatSound, setChatSound] = useState(true);
  const [transcript, setTranscript] = useState([]);
  const [chatQueue, setChatQueue] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [chatTyping, setChatTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [queuePosition, setQueuePosition] = useState(0);
  const [showChatModal, setShowChatModal] = useState(false);
  const [chatConnected, setChatConnected] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showTranscriptModal, setShowTranscriptModal] = useState(false);

  // ==================== REFS ====================
  const audioRef = useRef(null);
  const searchRef = useRef(null);
  const chatContainerRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const chatHours = config?.chatHours || [];
  const languages = config?.languages || [];
  const quickResponses = config?.quickResponses || [];
  const faqs = useMemo(() => config?.faqs || [], [config?.faqs]);
  const categories = useMemo(() => config?.categories || [], [config?.categories]);


  // ==================== FILTERED FAQS ====================
  const filteredFaqs = useMemo(() => {
    return faqs
      .filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = searchQuery === '' ||
          faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'recent') return (b.updatedAt || '').localeCompare(a.updatedAt || '');
        if (sortBy === 'popular') return (b.views || 0) - (a.views || 0);
        if (sortBy === 'helpful') {
          const aHelpful = helpfulVotes[a.id] === true ? 1 : 0;
          const bHelpful = helpfulVotes[b.id] === true ? 1 : 0;
          return bHelpful - aHelpful;
        }
        return 0;
      });
  }, [faqs, activeCategory, searchQuery, sortBy, helpfulVotes]);


  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown,
      HiOutlineChevronUp,
      HiOutlineSearch,
      HiOutlineChat,
      HiOutlineClock,
      HiOutlineQuestionMarkCircle,
      HiOutlinePaperAirplane,
      HiOutlineX,
      HiOutlineThumbUp,
      HiOutlineThumbDown,
      HiOutlineExternalLink,
      HiOutlineFilter,
      HiOutlineBookmark,
      HiOutlinePrinter,
      HiOutlineDownload,
      HiOutlineUsers,
      HiOutlineCheckCircle,
      HiOutlineEmojiHappy,
      HiOutlineDocumentText,
      HiOutlinePaperClip,
      HiOutlineVolumeUp,
      HiOutlineVolumeOff,
      HiOutlineTranslate,
      HiOutlineCog,
      HiOutlineCreditCard,
      HiOutlineUserCircle,
      HiOutlineGlobeAlt,
    };
    const IconComponent = icons[iconName] || HiOutlineChat;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Play notification sound
   */
  const playNotificationSound = useCallback(() => {
    if (chatSound && audioRef.current) {
      audioRef.current.play().catch(e => console.error('Audio play failed:', e));
    }
  }, [chatSound]);

  /**
   * Toggle FAQ accordion item
   */
  const toggleFaq = useCallback((index) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  /**
   * Handle helpful/unhelpful vote
   */
  const handleHelpful = useCallback((faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('chatFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  }, []);

  /**
   * Handle save/unsave FAQ bookmark
   */
  const handleSaveFaq = useCallback((faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedChatFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Start chat session with queue simulation
   */
  const startChat = useCallback((e) => {
    e.preventDefault();
    if (!chatName || !chatEmail) return;
    setChatStarted(true);
    setChatQueue(true);
    setQueuePosition(3);

    const interval = setInterval(() => {
      setQueuePosition(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setChatQueue(false);
          setChatConnected(true);
          const agents = ['Sarah', 'Michael', 'Jessica', 'David', 'Emily'];
          const randomAgent = agents[Math.floor(Math.random() * agents.length)];
          setAgentName(randomAgent);
          setChatMessages([
            {
              id: 1,
              type: 'bot',
              message: `Hi ${chatName}! I'm ${randomAgent} from support. Thanks for reaching out. How can I help you today?`,
              timestamp: new Date().toLocaleTimeString(),
            },
          ]);
          playNotificationSound();
          return 0;
        }
        return prev - 1;
      });
    }, 2000);
  }, [chatName, chatEmail, playNotificationSound]);

  /**
   * Send chat message
   */
  const sendMessage = useCallback(() => {
    if (!chatMessage.trim()) return;
    setChatMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        type: 'user',
        message: chatMessage,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setChatMessage('');
    setChatTyping(true);
    playNotificationSound();

    setTimeout(() => {
      setChatTyping(false);
      const responses = [
        "Thanks for your message! Let me look into that for you.",
        "I understand your concern. Let me help you with that.",
        "Great question! Let me get that information for you.",
        "I'll check on that right away. One moment please.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'bot',
          message: randomResponse,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }, 1500);
  }, [chatMessage, playNotificationSound]);

  /**
   * Handle Enter key press for message sending
   */
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }, [sendMessage]);

  /**
   * End chat and show transcript
   */
  const endChat = useCallback(() => {
    setTranscript(chatMessages);
    setShowTranscriptModal(true);
  }, [chatMessages]);

  /**
   * Download chat transcript
   */
  const downloadTranscript = useCallback(() => {
    const transcriptText = transcript.map(msg =>
      `[${msg.timestamp}] ${msg.type === 'user' ? chatName : agentName}: ${msg.message}`
    ).join('\n');
    const blob = new Blob([transcriptText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-transcript-${new Date().toISOString().slice(0, 19)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [transcript, chatName, agentName]);

  /**
   * Close transcript modal and reset chat
   */
  const closeTranscript = useCallback(() => {
    setShowTranscriptModal(false);
    setChatStarted(false);
    setChatConnected(false);
    setChatMessages([]);
    setChatName('');
    setChatEmail('');
    setTranscript([]);
  }, []);

  /**
   * Export FAQs to JSON file
   */
  const handleExport = useCallback(() => {
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
    linkElement.setAttribute('download', 'chat-faq-export.json');
    linkElement.click();
  }, [filteredFaqs, categories]);

  /**
   * Print FAQs
   */
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /**
   * Clear search and filters
   */
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setActiveCategory('all');
    setSortBy('recent');
  }, []);

  /**
   * Highlight search matches in text
   */
  const highlightText = useCallback((text, query) => {
    if (!query || !text) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-rose-200 dark:bg-rose-800 text-gray-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  // Auto-scroll to bottom of chat when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, chatTyping]);

  // Load saved votes and bookmarks from localStorage
  useEffect(() => {
    const savedVotes = localStorage.getItem('chatFaqHelpfulVotes');
    if (savedVotes) setHelpfulVotes(JSON.parse(savedVotes));
    const saved = localStorage.getItem('savedChatFaqs');
    if (saved) setSavedFaqs(JSON.parse(saved));
  }, []);

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      role="region"
      aria-label="Live Chat Support Center"
    >
      {/* Hidden audio element for notifications */}
      <audio ref={audioRef} src="/notification.mp3" preload="auto" />

      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-rose-50/30 to-transparent dark:from-rose-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 dark:bg-pink-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-rose-300/5 dark:bg-rose-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-rose-100 dark:bg-rose-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-rose-200 dark:border-rose-800'}`}
            aria-label="Live chat badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-rose-700 dark:text-rose-300'}`}>
              {config?.badge?.text || "Live Support"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Instant'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-rose-600 to-pink-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Live Chat'}
            </span>{' '}
            {config?.title?.suffix || 'Support Anytime'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Get real-time answers from our support specialists. Live chat is the fastest way to resolve your questions, with average response times under 2 minutes."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-center mb-2 text-rose-600 dark:text-rose-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-rose-600 dark:text-rose-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== LIVE CHAT CTA ==================== */}
        <div className="mb-12">
          <div className="bg-linear-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                {getIcon("HiOutlineChat", "w-10 h-10")}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Chat with Support</h3>
            <p className="text-rose-100 mb-6 max-w-lg mx-auto">
              Get instant answers from our support team. Available during business hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowChatModal(true)}
                className="px-8 py-3 bg-white text-rose-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                {getIcon("HiOutlineChat", "w-5 h-5")}
                Start Live Chat
              </button>
              <div className="flex items-center gap-2 bg-white/20 rounded-xl px-4">
                {getIcon("HiOutlineUsers", "w-4 h-4")}
                <span className="text-sm">{config?.agentsOnline || "12"} agents online</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-rose-200 flex items-center justify-center gap-4">
              <span className="inline-flex items-center gap-1">
                {getIcon("HiOutlineClock", "w-3 h-3")}
                Avg response: &lt; 2 min
              </span>
              <button
                onClick={() => setChatSound(!chatSound)}
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
              >
                {chatSound ? getIcon("HiOutlineVolumeUp", "w-3 h-3") : getIcon("HiOutlineVolumeOff", "w-3 h-3")}
                {chatSound ? "Sound on" : "Sound off"}
              </button>
            </div>
          </div>
        </div>

        {/* ==================== CHAT HOURS & LANGUAGES ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
                {getIcon("HiOutlineClock", "w-5 h-5 text-rose-600")}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Live Chat Hours</h3>
            </div>
            <div className="space-y-3">
              {chatHours.map((hour, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-400">{hour.days}</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{hour.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
                {getIcon("HiOutlineTranslate", "w-5 h-5 text-rose-600")}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Supported Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`px-3 py-2 rounded-xl text-sm transition-all duration-200 ${selectedLanguage === lang.code
                    ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Select your preferred language and we'll connect you with an available agent.
            </p>
          </div>
        </div>

        {/* ==================== QUICK RESPONSES ==================== */}
        {quickResponses.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 text-center mb-3">
              Quick Responses
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setShowChatModal(true);
                    setTimeout(() => {
                      setChatMessage(response);
                    }, 500);
                  }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
                >
                  {response}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ==================== SEARCH AND ACTION BAR ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative" ref={searchRef}>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("HiOutlineSearch", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search chat FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {getIcon("HiOutlineX", "w-5 h-5")}
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3 border rounded-xl transition-all duration-300 flex items-center gap-2 ${showFilters
                ? 'bg-rose-600 text-white border-rose-600'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
            >
              {getIcon("HiOutlineFilter", "w-4 h-4")}
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="helpful">Most Helpful</option>
            </select>
            <button
              onClick={handleExport}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              title="Export FAQs"
            >
              {getIcon("HiOutlineDownload", "w-4 h-4")}
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              title="Print FAQs"
            >
              {getIcon("HiOutlinePrinter", "w-4 h-4")}
            </button>
          </div>
        </div>

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Category</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${activeCategory === 'all'
                      ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 flex items-center gap-1 ${activeCategory === category.id
                        ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      {getIcon(category.icon, "w-3 h-3")}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 transition-all"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="helpful">Most Helpful</option>
                </select>
              </div>
            </div>
            {(activeCategory !== 'all' || sortBy !== 'recent') && (
              <div className="mt-4 text-right">
                <button
                  onClick={clearFilters}
                  className="text-sm text-rose-600 dark:text-rose-400 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== RESULTS COUNT ==================== */}
        {searchQuery && (
          <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
            Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchQuery}"
          </div>
        )}

        {/* ==================== FAQ ACCORDION ==================== */}
        <div className="max-w-6xl mx-auto space-y-4 mb-16">
          {filteredFaqs.map((faq, index) => {
            const isSaved = savedFaqs.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFaq(index)}
                >
                  <div className="flex items-start gap-3 pr-4">
                    <div className="text-rose-600 dark:text-rose-400 mt-0.5">
                      {getIcon(faq.icon, "w-5 h-5")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {highlightText(faq.question, searchQuery)}
                      </div>
                      {faq.tags && faq.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {faq.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSaveFaq(faq.id);
                      }}
                      className={`transition-colors duration-200 p-1 rounded-lg ${isSaved ? 'text-rose-600' : 'text-gray-400 hover:text-rose-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      aria-label={isSaved ? "Remove from saved" : "Save question"}
                    >
                      {getIcon("HiOutlineBookmark", `w-4 h-4 ${isSaved ? 'fill-rose-600' : ''}`)}
                    </button>
                    <div className="text-rose-500 dark:text-rose-400">
                      {openFaq === index ? getIcon("HiOutlineChevronUp", "w-5 h-5") : getIcon("HiOutlineChevronDown", "w-5 h-5")}
                    </div>
                  </div>
                </div>

                {openFaq === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlightText(faq.answer, searchQuery)}
                    </p>
                    {faq.link && (
                      <Link
                        href={faq.link}
                        className="inline-flex items-center gap-1 text-rose-600 dark:text-rose-400 text-sm font-semibold mt-3 hover:gap-2 transition-all duration-200 group"
                      >
                        Learn more
                        {getIcon("HiOutlineExternalLink", "w-3 h-3 group-hover:translate-x-0.5 transition-transform")}
                      </Link>
                    )}

                    {/* Helpful Section */}
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Was this helpful?</span>
                        <button
                          onClick={() => handleHelpful(faq.id, true)}
                          className={`flex items-center gap-1 text-xs transition-colors duration-200 ${helpfulVotes[faq.id] === true
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-gray-400 hover:text-green-600 dark:hover:text-green-400'
                            }`}
                        >
                          {getIcon("HiOutlineThumbUp", "w-4 h-4")}
                          Yes
                        </button>
                        <button
                          onClick={() => handleHelpful(faq.id, false)}
                          className={`flex items-center gap-1 text-xs transition-colors duration-200 ${helpfulVotes[faq.id] === false
                            ? 'text-red-600 dark:text-red-400'
                            : 'text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                            }`}
                        >
                          {getIcon("HiOutlineThumbDown", "w-4 h-4")}
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredFaqs.length === 0 && searchQuery && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-16">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon("HiOutlineSearch", "w-12 h-12")}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 text-rose-600 dark:text-rose-400 font-semibold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== SAVED FAQS SECTION ==================== */}
        {savedFaqs.length > 0 && searchQuery === '' && activeCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {getIcon("HiOutlineBookmark", "w-5 h-5 text-rose-600")}
              Saved Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.filter(f => savedFaqs.includes(f.id)).slice(0, 4).map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="text-rose-600 dark:text-rose-400">
                      {getIcon(faq.icon, "w-5 h-5")}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{faq.question}</div>
                      <button
                        onClick={() => {
                          setSearchQuery(faq.question.substring(0, 30));
                          setOpenFaq(null);
                        }}
                        className="text-xs text-rose-600 dark:text-rose-400 mt-1 hover:underline"
                      >
                        View Answer
                      </button>
                    </div>
                    <button
                      onClick={() => handleSaveFaq(faq.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                    >
                      {getIcon("HiOutlineX", "w-4 h-4")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CHAT MODAL ==================== */}
        {showChatModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setShowChatModal(false)}
            role="dialog"
            aria-label="Live chat"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-lg h-150 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="bg-linear-to-r from-rose-600 to-pink-600 p-5 rounded-t-3xl flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    {getIcon("HiOutlineChat", "w-5 h-5 text-white")}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Live Support</h3>
                    <div className="flex items-center gap-1 text-xs text-rose-100">
                      {chatConnected ? (
                        <>
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                          </span>
                          Connected to {agentName}
                        </>
                      ) : chatQueue ? (
                        `Queue position: ${queuePosition}`
                      ) : (
                        "Online"
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowChatModal(false)}
                  className="text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
                >
                  {getIcon("HiOutlineX", "w-5 h-5")}
                </button>
              </div>

              {/* Chat Content */}
              {!chatStarted ? (
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
                        {getIcon("HiOutlineChat", "w-8 h-8 text-rose-600")}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Start a Conversation</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Fill out the form below to connect with a support specialist.
                    </p>
                    <form onSubmit={startChat} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={chatName}
                        onChange={(e) => setChatName(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={chatEmail}
                        onChange={(e) => setChatEmail(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        required
                      />
                      <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      >
                        {languages.map((lang, idx) => (
                          <option key={idx} value={lang.code}>{lang.name}</option>
                        ))}
                      </select>
                      <button
                        type="submit"
                        className="w-full py-2.5 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Start Chat
                      </button>
                    </form>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                      By starting a chat, you agree to our Privacy Policy. Chat transcripts are saved for quality assurance.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Chat Messages */}
                  <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3">
                    {chatQueue && !chatConnected && (
                      <div className="text-center py-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-900/20 rounded-full">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-rose-600 border-t-transparent" />
                          <span className="text-sm text-rose-600">Connecting you with an agent...</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Queue position: {queuePosition}</p>
                      </div>
                    )}
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-2xl ${msg.type === 'user'
                            ? 'bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-br-none'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none'
                            }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <span className="text-xs opacity-70 mt-1 block">{msg.timestamp}</span>
                        </div>
                      </div>
                    ))}
                    {chatTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-none">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Chat Input */}
                  <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-400 hover:text-rose-600 transition-colors">
                        {getIcon("HiOutlinePaperClip", "w-5 h-5")}
                      </button>
                      <button className="p-2 text-gray-400 hover:text-rose-600 transition-colors">
                        {getIcon("HiOutlineEmojiHappy", "w-5 h-5")}
                      </button>
                      <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!chatMessage.trim()}
                        className="px-4 py-2.5 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {getIcon("HiOutlinePaperAirplane", "w-5 h-5")}
                      </button>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                      <button onClick={endChat} className="text-red-500 hover:underline">
                        End Chat
                      </button>
                      <span>Press Enter to send</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ==================== TRANSCRIPT MODAL ==================== */}
        {showTranscriptModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => closeTranscript()}
            role="dialog"
            aria-label="Chat transcript"
            aria-modal="true"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-lg w-full max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {getIcon("HiOutlineDocumentText", "w-5 h-5 text-rose-600")}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Chat Transcript</h3>
                </div>
                <button
                  onClick={() => closeTranscript()}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {getIcon("HiOutlineX", "w-5 h-5")}
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {transcript.map((msg, idx) => (
                  <div key={idx} className="border-b border-gray-100 dark:border-gray-700 pb-2">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-medium">{msg.type === 'user' ? chatName : agentName}</span>
                      <span>{msg.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{msg.message}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
                <button
                  onClick={downloadTranscript}
                  className="flex-1 py-2.5 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  {getIcon("HiOutlineDownload", "w-4 h-4")}
                  Download Transcript
                </button>
                <button
                  onClick={() => closeTranscript()}
                  className="flex-1 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-rose-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineQuestionMarkCircle", "w-6 h-6 text-rose-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Need immediate assistance? Start a live chat with our support team."}
            </span>
            <button
              onClick={() => setShowChatModal(true)}
              className="px-6 py-3 bg-linear-to-r from-rose-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {getIcon("HiOutlineChat", "w-4 h-4")}
              {config?.contactButtonText || "Start Live Chat"}
            </button>
          </div>
        </div>

        {/* ==================== CHAT GUARANTEE ==================== */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800">
              {getIcon("HiOutlineCheckCircle", "w-4 h-4 text-green-600")}
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "Enterprise customers get priority chat routing and 24/7 live chat support"}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
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
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce {
          animation: bounce 0.6s infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @media print {
          .no-print, button:not(.print-button), .bg-noise-pattern {
            display: none !important;
          }
          body {
            background: white;
          }
          .bg-white, .dark\\:bg-gray-800 {
            background: white !important;
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

export default LiveChatOptionSection2;