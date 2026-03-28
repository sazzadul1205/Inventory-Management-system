// frontend/Contact/LiveChatOptionSection/LiveChatOptionSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
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
} from 'react-icons/hi';

const LiveChatOptionSection2 = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [chatConnected, setChatConnected] = useState(false);
  const [chatTyping, setChatTyping] = useState(false);
  const [chatName, setChatName] = useState('');
  const [chatEmail, setChatEmail] = useState('');
  const [chatStarted, setChatStarted] = useState(false);
  const [chatQueue, setChatQueue] = useState(false);
  const [queuePosition, setQueuePosition] = useState(0);
  const [agentName, setAgentName] = useState('');
  const [chatSound, setChatSound] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [savedFaqs, setSavedFaqs] = useState([]);
  const [showTranscriptModal, setShowTranscriptModal] = useState(false);
  const [transcript, setTranscript] = useState([]);
  const chatContainerRef = useRef(null);
  const searchRef = useRef(null);
  const audioRef = useRef(null);

  const faqs = config?.faqs || [];
  const categories = config?.categories || [];
  const stats = config?.stats || [];
  const chatHours = config?.chatHours || [];
  const languages = config?.languages || [];
  const quickResponses = config?.quickResponses || [];

  useEffect(() => {
    const savedVotes = localStorage.getItem('chatFaqHelpfulVotes');
    if (savedVotes) {
      setHelpfulVotes(JSON.parse(savedVotes));
    }
    const saved = localStorage.getItem('savedChatFaqs');
    if (saved) {
      setSavedFaqs(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleHelpful = (faqId, isHelpful) => {
    setHelpfulVotes(prev => {
      const newVotes = { ...prev, [faqId]: isHelpful };
      localStorage.setItem('chatFaqHelpfulVotes', JSON.stringify(newVotes));
      return newVotes;
    });
  };

  const handleSaveFaq = (faqId) => {
    setSavedFaqs(prev => {
      const newSaved = prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId];
      localStorage.setItem('savedChatFaqs', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const playNotificationSound = () => {
    if (chatSound && audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const startChat = (e) => {
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
  };

  const sendMessage = () => {
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
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const endChat = () => {
    setTranscript(chatMessages);
    setShowTranscriptModal(true);
  };

  const downloadTranscript = () => {
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
  };

  const closeTranscript = () => {
    setShowTranscriptModal(false);
    setChatStarted(false);
    setChatConnected(false);
    setChatMessages([]);
    setChatName('');
    setChatEmail('');
    setTranscript([]);
  };

  const handleExport = () => {
    const exportData = filteredFaqs.map(faq => ({
      question: faq.question,
      answer: faq.answer,
      category: categories.find(c => c.id === faq.category)?.name || faq.category,
      tags: faq.tags
    }));
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'chat-faq-export.json');
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

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Live Chat Support Center"
    >
      {/* Hidden audio element for notifications */}
      <audio ref={audioRef} src="/notification.mp3" preload="auto" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
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
            <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Live Chat CTA */}
        <div className="mb-12">
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-2">Chat with Support</h3>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              Get instant answers from our support team. Available during business hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowChatModal(true)}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <HiOutlineChat className="w-5 h-5" />
                Start Live Chat
              </button>
              <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4">
                <HiOutlineUsers className="w-4 h-4" />
                <span className="text-sm">{config?.agentsOnline || "5"} agents online</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-blue-200 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1">
                <HiOutlineClock className="w-3 h-3" />
                Avg response: &lt; 2 min
              </span>
              <button
                onClick={() => setChatSound(!chatSound)}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                {chatSound ? <HiOutlineVolumeUp className="w-3 h-3" /> : <HiOutlineVolumeOff className="w-3 h-3" />}
                {chatSound ? "Sound on" : "Sound off"}
              </button>
            </div>
          </div>
        </div>

        {/* Chat Hours & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineClock className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Live Chat Hours</h3>
            </div>
            <div className="space-y-3">
              {chatHours.map((hour, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <span className="text-gray-600 dark:text-gray-400">{hour.days}</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{hour.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineTranslate className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Supported Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    selectedLanguage === lang.code
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Select your preferred language and we'll connect you with an available agent.
            </p>
          </div>
        </div>

        {/* Quick Responses */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
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
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 transition-all"
              >
                {response}
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
              placeholder="Search chat FAQs..."
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

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-start gap-3 pr-4">
                  <div className="text-xl mt-0.5">{faq.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {highlightedText(faq.question, searchQuery)}
                    </div>
                    {faq.tags && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {faq.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSaveFaq(faq.id);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleSaveFaq(faq.id);
                      }
                    }}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label={savedFaqs.includes(faq.id) ? 'Remove bookmark' : 'Save bookmark'}
                  >
                    <HiOutlineBookmark className={`w-4 h-4 ${savedFaqs.includes(faq.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                  </span>
                  <div className="text-blue-500">
                    {openFaq === index ? (
                      <HiOutlineChevronUp className="w-5 h-5" />
                    ) : (
                      <HiOutlineChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
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

        {/* Empty State */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => setShowChatModal(true)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Start Live Chat
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
                          setSearchQuery(faq.question.substring(0, 30));
                          setOpenFaq(null);
                        }}
                        className="text-xs text-blue-600 mt-1 hover:underline"
                      >
                        View Answer
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

        {/* Chat Modal */}
        {showChatModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowChatModal(false)}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-lg h-150 flex flex-col" onClick={(e) => e.stopPropagation()}>
              {/* Chat Header */}
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-4 rounded-t-3xl flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <HiOutlineChat className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Live Support</h3>
                    <div className="flex items-center gap-1 text-xs text-blue-100">
                      {chatConnected ? (
                        <>
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
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
                <button onClick={() => setShowChatModal(false)} className="text-white hover:text-gray-200">
                  <HiOutlineX className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              {!chatStarted ? (
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💬</div>
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={chatEmail}
                        onChange={(e) => setChatEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                        required
                      />
                      <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                      >
                        {languages.map((lang, idx) => (
                          <option key={idx} value={lang.code}>{lang.name}</option>
                        ))}
                      </select>
                      <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                      >
                        Start Chat
                      </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-4">
                      By starting a chat, you agree to our Privacy Policy. Chat transcripts are saved for quality assurance.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3">
                    {chatQueue && !chatConnected && (
                      <div className="text-center py-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
                          <span className="text-sm text-blue-600">Connecting you with an agent...</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Queue position: {queuePosition}</p>
                      </div>
                    )}
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-2xl ${
                            msg.type === 'user'
                              ? 'bg-blue-600 text-white rounded-br-none'
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
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Chat Input */}
                  <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <HiOutlinePaperClip className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <HiOutlineEmojiHappy className="w-5 h-5" />
                      </button>
                      <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!chatMessage.trim()}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <HiOutlinePaperAirplane className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
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

        {/* Transcript Modal */}
        {showTranscriptModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => closeTranscript()}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-lg w-full max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <HiOutlineDocumentText className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Chat Transcript</h3>
                </div>
                <button onClick={() => closeTranscript()} className="text-gray-500 hover:text-gray-700">
                  <HiOutlineX className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {transcript.map((msg, idx) => (
                  <div key={idx} className="border-b border-gray-100 dark:border-gray-700 pb-2">
                    <div className="flex justify-between text-xs text-gray-500">
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
                  className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  <HiOutlineDownload className="w-4 h-4" />
                  Download Transcript
                </button>
                <button
                  onClick={() => closeTranscript()}
                  className="flex-1 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineQuestionMarkCircle className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.contactText || "Need immediate assistance? Start a live chat with our support team."}
            </span>
            <button
              onClick={() => setShowChatModal(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <HiOutlineChat className="w-4 h-4" />
              {config?.contactButtonText || "Start Live Chat"}
            </button>
          </div>
        </div>

        {/* Chat Guarantee */}
        {config?.showGuarantee && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
              <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {config?.guaranteeText || "Enterprise customers get priority chat routing and 24/7 live chat support"}
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
