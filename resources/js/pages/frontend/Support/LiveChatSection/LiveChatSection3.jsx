// page/frontend/Support/LiveChatSection/LiveChatSection3.jsx

// React
import { useState, useEffect, useRef, useMemo } from 'react';

// Icons
import { AiOutlineRobot as HiOutlineRobot, } from "react-icons/ai";
import {
  HiOutlineChat,
  HiOutlineChatAlt2,
  HiOutlineSearch,
  HiOutlineX,
  HiOutlineCheckCircle,
  HiOutlinePaperClip,
  HiOutlinePaperAirplane,
  HiOutlineCog,
  HiOutlineUserAdd,
  HiOutlineSparkles,
  HiOutlineTemplate,
  HiOutlineChartBar,
  HiOutlineEmojiHappy as HappyIcon,
  HiOutlineEmojiSad as SadIcon,
  HiOutlineShare as ScreenShareIcon,
  HiOutlineVideoCamera as VideoIcon,
  HiOutlinePhone as PhoneIcon,
  HiOutlineDesktopComputer as DesktopIcon,
  HiOutlineCursorClick as CursorIcon,
  HiOutlineChip,
  HiOutlineCloudUpload,
} from 'react-icons/hi';
import { HiOutlineUserCircle, } from 'react-icons/hi2';

const LiveChatSection3 = ({ config }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [activeTab, setActiveTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [showCannedModal, setShowCannedModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showFileModal, setShowFileModal] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [showScreenShare, setShowScreenShare] = useState(false);
  const [showCoBrowse, setShowCoBrowse] = useState(false);
  const [showSentimentModal, setShowSentimentModal] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [chats, setChats] = useState([]);
  const [agents, setAgents] = useState([]);
  const [onlineVisitors, setOnlineVisitors] = useState([]);
  const [agentStatus, setAgentStatus] = useState('online');
  const [typingStatus] = useState({});
  const [cannedResponses, setCannedResponses] = useState([]);
  const [chatbotEnabled] = useState(true);
  const [chatbotMessages, setChatbotMessages] = useState({});
  const [, setFileAttachments] = useState({});
  const [chatRatings, setChatRatings] = useState({});
  const [sentimentAnalysis, setSentimentAnalysis] = useState({});
  const [smartRouting, setSmartRouting] = useState(true);
  const [, setCallActive] = useState(false);
  const [callType, setCallType] = useState(null);
  const [, setCoBrowseActive] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [analyticsData, setAnalyticsData] = useState({
    totalChats: 0,
    avgDuration: '4m 32s',
    satisfaction: 4.8,
    chatbotDeflections: 127,
    peakHours: [],
    sentimentTrend: { positive: 65, neutral: 25, negative: 10 },
    agentUtilization: [],
  });
  const [stats, setStats] = useState({
    activeChats: 0,
    waiting: 0,
    resolved: 0,
    avgResponseTime: '1.2m',
    satisfaction: 4.9,
    botActive: 3,
    avgSentiment: 'positive',
  });
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);

  // Get data from config
  const configChats = useMemo(() => config?.chats || [], [config]);

  const configAgents = useMemo(() => config?.agents || [
    { id: 'agent1', name: 'Sarah Johnson', avatar: null, role: 'Senior Support Agent', status: 'online', activeChats: 2, email: 'sarah@example.com', efficiency: 95, skills: ['technical', 'billing'], languages: ['en', 'es'] },
    { id: 'agent2', name: 'Michael Chen', role: 'Support Engineer', status: 'online', activeChats: 1, email: 'michael@example.com', efficiency: 88, skills: ['technical', 'api'], languages: ['en', 'zh'] },
    { id: 'agent3', name: 'Emily Rodriguez', role: 'Customer Success', status: 'away', activeChats: 0, email: 'emily@example.com', efficiency: 92, skills: ['account', 'billing'], languages: ['en', 'es'] },
    { id: 'agent4', name: 'David Kim', role: 'Technical Specialist', status: 'offline', activeChats: 0, email: 'david@example.com', efficiency: 96, skills: ['technical', 'security'], languages: ['en', 'ko'] },
  ], [config]);

  const configVisitors = useMemo(() => config?.visitors || [
    { id: 'visitor1', name: 'John Doe', email: 'john@example.com', page: '/pricing', timeOnSite: '2m', country: 'US', device: 'Desktop', sentiment: 'neutral' },
    { id: 'visitor2', name: 'Jane Smith', email: 'jane@example.com', page: '/support', timeOnSite: '5m', country: 'UK', device: 'Mobile', sentiment: 'negative' },
    { id: 'visitor3', name: 'Bob Wilson', email: 'bob@example.com', page: '/product', timeOnSite: '1m', country: 'Canada', device: 'Desktop', sentiment: 'positive' },
  ], [config]);

  const configCannedResponses = useMemo(() => config?.cannedResponses || [
    { id: 'c1', title: 'Welcome Message', content: 'Welcome to our support! How can I help you today?', category: 'greeting', usageCount: 156 },
    { id: 'c2', title: 'Password Reset', content: 'To reset your password, please click on "Forgot Password" on the login page.', category: 'account', usageCount: 89 },
    { id: 'c3', title: 'API Key', content: 'You can generate API keys in your account settings under "Developer Settings".', category: 'technical', usageCount: 234 },
    { id: 'c4', title: 'Billing Inquiry', content: 'For billing inquiries, please visit your account billing page.', category: 'billing', usageCount: 67 },
    { id: 'c5', title: 'Thanks & Close', content: "You're welcome! Have a great day!", category: 'closing', usageCount: 312 },
  ], [config]);

  // Initialize data
  useEffect(() => {
    const savedChats = localStorage.getItem('liveChats');
    if (savedChats && JSON.parse(savedChats).length > 0) setChats(JSON.parse(savedChats));
    else setChats(configChats);

    const savedAgents = localStorage.getItem('chatAgents');
    if (savedAgents) setAgents(JSON.parse(savedAgents));
    else setAgents(configAgents);

    const savedCanned = localStorage.getItem('chatCannedResponses');
    if (savedCanned) setCannedResponses(JSON.parse(savedCanned));
    else setCannedResponses(configCannedResponses);

    const savedRatings = localStorage.getItem('chatRatings');
    if (savedRatings) setChatRatings(JSON.parse(savedRatings));

    const savedSentiment = localStorage.getItem('sentimentAnalysis');
    if (savedSentiment) setSentimentAnalysis(JSON.parse(savedSentiment));

    setOnlineVisitors(configVisitors);
  }, [configAgents, configCannedResponses, configChats, configVisitors]);

  useEffect(() => {
    localStorage.setItem('liveChats', JSON.stringify(chats));
    localStorage.setItem('chatAgents', JSON.stringify(agents));
    localStorage.setItem('chatCannedResponses', JSON.stringify(cannedResponses));
    localStorage.setItem('chatRatings', JSON.stringify(chatRatings));
    localStorage.setItem('sentimentAnalysis', JSON.stringify(sentimentAnalysis));
    updateStats();
    updateAnalytics();
  }, [chats, agents, cannedResponses, chatRatings, sentimentAnalysis, updateStats, updateAnalytics]);

  // Auto-scroll
  useEffect(() => {
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [selectedChat?.messages]);

  // Analyze sentiment of incoming messages
  const analyzeSentiment = (message) => {
    const positiveWords = ['great', 'good', 'awesome', 'love', 'thanks', 'appreciate', 'excellent', 'fantastic', 'helpful'];
    const negativeWords = ['bad', 'terrible', 'awful', 'frustrated', 'angry', 'disappointed', 'horrible', 'useless', 'broken'];

    let positiveScore = 0, negativeScore = 0;
    positiveWords.forEach(word => { if (message.toLowerCase().includes(word)) positiveScore++; });
    negativeWords.forEach(word => { if (message.toLowerCase().includes(word)) negativeScore++; });

    if (positiveScore > negativeScore) return 'positive';
    if (negativeScore > positiveScore) return 'negative';
    return 'neutral';
  };

  // Smart routing based on sentiment and skills
  const smartRouteChat = (visitor, initialMessage) => {
    const sentiment = analyzeSentiment(initialMessage);
    const suitableAgents = agents.filter(a => a.status === 'online' && a.activeChats < 3);

    if (sentiment === 'negative') {
      // Route to most experienced agent
      return suitableAgents.sort((a, b) => b.efficiency - a.efficiency)[0]?.id || 'agent1';
    }

    // Route based on skills (simplified)
    return suitableAgents[0]?.id || 'agent1';
  };

  // Update statistics
  const updateStats = useMemo(() => () => {
    const activeChats = chats.filter(c => c.status === 'active').length;
    const waiting = chats.filter(c => c.status === 'waiting').length;
    const resolved = chats.filter(c => c.status === 'resolved').length;
    const avgSentiment = Object.values(sentimentAnalysis).length > 0 ? 'positive' : 'positive';

    setStats({
      activeChats, waiting, resolved, avgResponseTime: '1.2m', satisfaction: 4.9, botActive: chatbotEnabled ? 3 : 0, avgSentiment,
    });
  }, [chats, sentimentAnalysis, chatbotEnabled]);

  // Update analytics
  const updateAnalytics = useMemo(() => () => {
    const totalChats = chats.length;
    const avgRating = Object.values(chatRatings).reduce((a, b) => a + b, 0) / (Object.values(chatRatings).length || 1);
    const sentimentCounts = { positive: 0, neutral: 0, negative: 0 };
    Object.values(sentimentAnalysis).forEach(s => sentimentCounts[s]++);
    const totalSentiment = Object.values(sentimentCounts).reduce((a, b) => a + b, 1);

    setAnalyticsData({
      totalChats, avgDuration: '4m 32s', satisfaction: avgRating, chatbotDeflections: chatbotMessages ? Object.keys(chatbotMessages).length : 127,
      peakHours: ['10 AM', '2 PM', '3 PM'], sentimentTrend: {
        positive: Math.round((sentimentCounts.positive / totalSentiment) * 100),
        neutral: Math.round((sentimentCounts.neutral / totalSentiment) * 100),
        negative: Math.round((sentimentCounts.negative / totalSentiment) * 100),
      }, agentUtilization: agents.map(a => ({ name: a.name, utilization: Math.round((a.activeChats / 3) * 100) })),
    });
  }, [chats, chatRatings, sentimentAnalysis, chatbotMessages, agents]);

  // Send message with sentiment analysis
  const sendMessage = () => {
    if (!messageInput.trim() || !selectedChat) return;

    const sentiment = analyzeSentiment(messageInput);
    setSentimentAnalysis(prev => ({ ...prev, [Date.now()]: sentiment }));

    const newMessage = {
      id: Date.now(), text: messageInput, sender: 'agent', senderName: 'You', timestamp: new Date().toISOString(), read: true, sentiment,
    };

    updateChatMessages(selectedChat.id, newMessage);
    setMessageInput('');

    // Update chat sentiment
    setChats(prev => prev.map(chat => chat.id === selectedChat.id ? { ...chat, sentiment } : chat));

    // Bot response for certain queries
    if (chatbotEnabled && shouldTriggerBot(messageInput)) {
      setTimeout(() => {
        const botResponse = generateBotResponse(messageInput);
        const botMessage = { id: Date.now() + 1, text: botResponse, sender: 'bot', senderName: 'AI Assistant', timestamp: new Date().toISOString(), read: false, isBot: true, sentiment: 'neutral' };
        updateChatMessages(selectedChat.id, botMessage);
        setChatbotMessages(prev => ({ ...prev, [selectedChat.id]: [...(prev[selectedChat.id] || []), botMessage] }));
      }, 1000);
    }
  };

  const updateChatMessages = (chatId, message) => {
    setChats(prev => prev.map(chat => chat.id === chatId ? { ...chat, messages: [...(chat.messages || []), message], lastMessage: message.text, lastMessageTime: new Date().toISOString(), updatedAt: new Date().toISOString() } : chat));
    setSelectedChat(prev => prev?.id === chatId ? { ...prev, messages: [...(prev.messages || []), message], lastMessage: message.text, lastMessageTime: new Date().toISOString() } : prev);
  };

  const shouldTriggerBot = (message) => {
    const triggers = ['help', 'how to', 'what is', 'price', 'pricing', 'feature', 'capabilities'];
    return triggers.some(trigger => message.toLowerCase().includes(trigger));
  };

  const generateBotResponse = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('price') || msg.includes('pricing')) return "Our pricing starts at $49/month for the Basic plan. Would you like me to connect you with a sales representative?";
    if (msg.includes('feature')) return "SupplyChainPro offers real-time tracking, inventory management, analytics dashboard, and team collaboration features.";
    if (msg.includes('help') || msg.includes('how to')) return "I'd be happy to help! Could you please provide more details about what you're trying to accomplish?";
    return "Thanks for your question! I'm the AI assistant. Could you provide more context so I can assist better?";
  };

  const insertCannedResponse = (response) => {
    setMessageInput(prev => prev + (prev ? '\n\n' : '') + response.content);
    setShowCannedModal(false);
    setCannedResponses(prev => prev.map(cr => cr.id === response.id ? { ...cr, usageCount: (cr.usageCount || 0) + 1 } : cr));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!selectedChat) return;
    files.forEach(file => {
      const fileMessage = { id: Date.now() + Math.random(), text: `📎 Sent file: ${file.name}`, sender: 'agent', senderName: 'You', timestamp: new Date().toISOString(), read: true, isFile: true, fileName: file.name, fileSize: file.size };
      updateChatMessages(selectedChat.id, fileMessage);
      setFileAttachments(prev => ({ ...prev, [selectedChat.id]: [...(prev[selectedChat.id] || []), { name: file.name, size: file.size, url: URL.createObjectURL(file) }] }));
    });
    setShowFileModal(false);
  };

  const rateChat = (chatId, rating) => {
    setChatRatings(prev => ({ ...prev, [chatId]: rating }));
    setShowRatingModal(false);
    const ratingMessage = { id: Date.now(), text: `Customer rated this chat ${rating}/5 stars. Thank you for your feedback!`, sender: 'system', senderName: 'System', timestamp: new Date().toISOString(), read: true, isSystem: true };
    updateChatMessages(chatId, ratingMessage);
  };

  const startNewChat = (visitor) => {
    const assignedAgent = smartRouting ? smartRouteChat(visitor, '') : 'agent1';
    const newChat = {
      id: `chat_${Date.now()}`, customerId: visitor.id, customerName: visitor.name, customerEmail: visitor.email, customerAvatar: null, status: 'active',
      messages: [], assignedAgent, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), page: visitor.page, device: visitor.device, sentiment: visitor.sentiment,
    };
    setChats(prev => [newChat, ...prev]);
    setSelectedChat(newChat);
    setOnlineVisitors(prev => prev.filter(v => v.id !== visitor.id));

    const welcomeMessage = { id: Date.now(), text: `Hello ${visitor.name}! Welcome to SupplyChainPro support. How can I help you today?`, sender: 'agent', senderName: 'You', timestamp: new Date().toISOString(), read: true };
    setTimeout(() => updateChatMessages(newChat.id, welcomeMessage), 100);
  };

  const transferChat = (chatId, agentId) => {
    setChats(prev => prev.map(chat => chat.id === chatId ? { ...chat, assignedAgent: agentId, status: 'active' } : chat));
    if (selectedChat?.id === chatId) setSelectedChat(prev => ({ ...prev, assignedAgent: agentId }));
    setShowTransferModal(false);
    const agent = agents.find(a => a.id === agentId);
    const transferMessage = { id: Date.now(), text: `This conversation has been transferred to ${agent?.name}.`, sender: 'system', senderName: 'System', timestamp: new Date().toISOString(), read: true, isSystem: true };
    updateChatMessages(chatId, transferMessage);
  };

  const closeChat = (chatId) => {
    setChats(prev => prev.map(chat => chat.id === chatId ? { ...chat, status: 'resolved', resolvedAt: new Date().toISOString() } : chat));
    if (selectedChat?.id === chatId) setSelectedChat(null);
    setShowCloseModal(false);
    setShowRatingModal(true);
  };

  const startVideoCall = () => {
    setCallType('video');
    setCallActive(true);
    setShowVideoCall(true);
    // Simulate video stream
    setTimeout(() => {
      if (videoRef.current) videoRef.current.srcObject = null;
    }, 100);
  };

  const startAudioCall = () => {
    setCallType('audio');
    setCallActive(true);
    setShowVideoCall(true);
  };

  const startScreenShare = () => {
    setShowScreenShare(true);
    setCoBrowseActive(true);
  };

  const startCoBrowse = () => {
    setShowCoBrowse(true);
    setCoBrowseActive(true);
  };

  const endCall = () => {
    setCallActive(false);
    setCallType(null);
    setShowVideoCall(false);
    setShowScreenShare(false);
    setShowCoBrowse(false);
    setCoBrowseActive(false);
  };

  const updateAgentStatus = (status) => {
    setAgentStatus(status);
    setAgents(prev => prev.map(agent => agent.id === 'agent1' ? { ...agent, status } : agent));
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'positive': return <HappyIcon className="w-4 h-4 text-green-500" />;
      case 'negative': return <SadIcon className="w-4 h-4 text-red-500" />;
      default: return <HappyIcon className="w-4 h-4 text-gray-400" />;
    }
  };

  const filteredChats = useMemo(() => {
    let filtered = chats;
    if (activeTab === 'active') filtered = filtered.filter(c => c.status === 'active');
    else if (activeTab === 'waiting') filtered = filtered.filter(c => c.status === 'waiting');
    else if (activeTab === 'resolved') filtered = filtered.filter(c => c.status === 'resolved');
    if (searchQuery) filtered = filtered.filter(chat => chat.customerName?.toLowerCase().includes(searchQuery.toLowerCase()) || chat.customerEmail?.toLowerCase().includes(searchQuery.toLowerCase()));
    return filtered;
  }, [chats, activeTab, searchQuery]);

  const getAgentName = (agentId) => agents.find(a => a.id === agentId)?.name || 'Unassigned';
  const getAgentStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };
  const getChatStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'waiting': return 'bg-yellow-100 text-yellow-700';
      case 'resolved': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden" role="region" aria-label="Live Chat Premium Hub">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="circuit-pattern-lc" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" /><circle cx="20" cy="20" r="2" fill="#9CA3AF" /><circle cx="80" cy="20" r="2" fill="#9CA3AF" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-lc)" />
        </svg>
      </div>

      {/* Video Call Modal */}
      {showVideoCall && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => endCall()}>
          <div className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
              <div><h3 className="text-white font-bold text-lg">{callType === 'video' ? 'Video Call' : 'Audio Call'} with {selectedChat?.customerName}</h3></div>
              <button onClick={endCall} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
            </div>
            <div className="p-4">
              <div className="aspect-video bg-black rounded-xl flex items-center justify-center mb-4">
                <div className="text-center text-gray-400"><VideoIcon className="w-16 h-16 mx-auto mb-2" /><p>Video stream would appear here</p><p className="text-sm mt-2">🔴 Call in progress</p></div>
              </div>
              <div className="flex justify-center gap-4"><button onClick={endCall} className="px-6 py-2 bg-red-600 text-white rounded-lg">End Call</button><button className="px-6 py-2 bg-gray-700 text-white rounded-lg">Mute</button></div>
            </div>
          </div>
        </div>
      )}

      {/* Screen Share Modal */}
      {showScreenShare && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => endCall()}>
          <div className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-linear-to-r from-green-600 to-teal-600 p-4 flex items-center justify-between">
              <div><h3 className="text-white font-bold text-lg">Screen Share - {selectedChat?.customerName}</h3></div>
              <button onClick={endCall} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
            </div>
            <div className="p-4">
              <div className="aspect-video bg-black rounded-xl flex items-center justify-center mb-4">
                <div className="text-center text-gray-400"><DesktopIcon className="w-16 h-16 mx-auto mb-2" /><p>Screen share in progress</p><p className="text-sm mt-2">📺 Viewing customer's screen</p></div>
              </div>
              <div className="flex justify-center"><button onClick={endCall} className="px-6 py-2 bg-red-600 text-white rounded-lg">Stop Sharing</button></div>
            </div>
          </div>
        </div>
      )}

      {/* Co-browsing Modal */}
      {showCoBrowse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => endCall()}>
          <div className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-linear-to-r from-orange-600 to-red-600 p-4 flex items-center justify-between">
              <div><h3 className="text-white font-bold text-lg">Co-browsing - {selectedChat?.customerName}</h3></div>
              <button onClick={endCall} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
            </div>
            <div className="p-4">
              <div className="aspect-video bg-black rounded-xl flex items-center justify-center mb-4">
                <div className="text-center text-gray-400"><CursorIcon className="w-16 h-16 mx-auto mb-2" /><p>Co-browsing session active</p><p className="text-sm mt-2">🖱️ Collaborating on customer's browser</p></div>
              </div>
              <div className="flex justify-center"><button onClick={endCall} className="px-6 py-2 bg-red-600 text-white rounded-lg">End Session</button></div>
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
              <HiOutlineSparkles className="w-4 h-4" />
              <span className="text-sm font-medium">{config?.badge || "AI-Powered Live Chat"}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              {config?.title?.prefix || "Intelligent"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Live Chat"}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">{config?.description || "AI-powered sentiment analysis, smart routing, video calls, co-browsing, and advanced analytics."}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-blue-600">{stats.activeChats}</div><div className="text-xs text-gray-500">Active</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-yellow-600">{stats.waiting}</div><div className="text-xs text-gray-500">Waiting</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-green-600">{stats.resolved}</div><div className="text-xs text-gray-500">Resolved</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-purple-600">{stats.avgResponseTime}</div><div className="text-xs text-gray-500">Response</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-yellow-600">{stats.satisfaction}</div><div className="text-xs text-gray-500">Rating</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="text-xl font-bold text-teal-600">{stats.botActive}</div><div className="text-xs text-gray-500">Bot Active</div></div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 text-center shadow-sm border"><div className="flex items-center justify-center gap-1">{getSentimentIcon(stats.avgSentiment)}<span className="text-xs text-gray-500 capitalize">{stats.avgSentiment}</span></div><div className="text-xs text-gray-500">Sentiment</div></div>
          </div>
        </div>

        {/* Smart Routing Toggle */}
        <div className="mb-6 flex items-center justify-between p-4 bg-linear-to-r from-purple-50 to-blue-50 rounded-xl">
          <div className="flex items-center gap-3"><HiOutlineChip className="w-6 h-6 text-purple-600" /><div><p className="font-semibold">AI Smart Routing</p><p className="text-sm text-gray-500">Routes chats based on sentiment analysis and agent skills</p></div></div>
          <label className="relative inline-flex items-center cursor-pointer"><input type="checkbox" checked={smartRouting} onChange={(e) => setSmartRouting(e.target.checked)} className="sr-only peer" /><div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600" /></label>
        </div>

        {/* Agent Status Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4"><div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${getAgentStatusColor(agentStatus)}`} /><span className="text-sm font-medium">Status: {agentStatus.charAt(0).toUpperCase() + agentStatus.slice(1)}</span></div><select value={agentStatus} onChange={(e) => updateAgentStatus(e.target.value)} className="px-3 py-1 text-sm bg-gray-100 rounded-lg"><option value="online">Online</option><option value="away">Away</option><option value="offline">Offline</option></select></div>
            <div className="flex gap-2">
              <button onClick={() => setShowCannedModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="Canned Responses"><HiOutlineTemplate className="w-5 h-5" /></button>
              <button onClick={() => setShowSentimentModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="Sentiment Analysis"><HappyIcon className="w-5 h-5" /></button>
              <button onClick={() => setShowSettingsModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="Settings"><HiOutlineCog className="w-5 h-5" /></button>
              <button onClick={() => setShowAnalyticsModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="Analytics"><HiOutlineChartBar className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-3">{agents.map(agent => (<div key={agent.id} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg"><div className={`w-2 h-2 rounded-full ${getAgentStatusColor(agent.status)}`} /><span className="text-sm">{agent.name}</span>{agent.activeChats > 0 && <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">{agent.activeChats}</span>}<span className="text-xs text-gray-400">{agent.efficiency}% eff</span>{agent.languages && <span className="text-xs text-gray-400">{agent.languages.join(', ')}</span>}</div>))}</div>
        </div>

        {/* Main Chat Interface */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border overflow-hidden">
          <div className="flex h-150">
            {/* Chat List Sidebar */}
            <div className="w-80 border-r flex flex-col">
              <div className="p-4 border-b"><div className="relative"><div className="absolute inset-y-0 left-0 pl-3 flex items-center"><HiOutlineSearch className="w-4 h-4 text-gray-400" /></div><input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search conversations..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div></div>
              <div className="flex gap-1 p-2 border-b"><button onClick={() => setActiveTab('active')} className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-lg ${activeTab === 'active' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>Active ({chats.filter(c => c.status === 'active').length})</button><button onClick={() => setActiveTab('waiting')} className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-lg ${activeTab === 'waiting' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>Waiting ({chats.filter(c => c.status === 'waiting').length})</button><button onClick={() => setActiveTab('resolved')} className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-lg ${activeTab === 'resolved' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>Resolved</button></div>
              <div className="flex-1 overflow-y-auto">{filteredChats.length === 0 ? (<div className="p-8 text-center text-gray-500"><HiOutlineChat className="w-12 h-12 mx-auto mb-3 text-gray-300" /><p className="text-sm">No conversations found</p></div>) : (filteredChats.map((chat) => (<div key={chat.id} onClick={() => setSelectedChat(chat)} className={`p-4 border-b cursor-pointer transition-all hover:bg-gray-50 ${selectedChat?.id === chat.id ? 'bg-blue-50' : ''}`}><div className="flex items-start gap-3"><div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0"><HiOutlineUserCircle className="w-6 h-6 text-blue-600" /></div><div className="flex-1 min-w-0"><div className="flex items-center justify-between"><p className="text-sm font-medium truncate">{chat.customerName}</p><span className={`text-xs px-1.5 py-0.5 rounded-full ${getChatStatusColor(chat.status)}`}>{chat.status}</span></div><div className="flex items-center gap-1 mt-0.5">{getSentimentIcon(chat.sentiment)}<p className="text-xs text-gray-500">{chat.customerEmail}</p></div><p className="text-xs text-gray-400 mt-1 truncate">{chat.lastMessage || 'No messages yet'}</p><p className="text-xs text-gray-400 mt-1">{formatTime(chat.lastMessageTime)}</p></div></div></div>)))}</div>
              {onlineVisitors.length > 0 && (<div className="border-t p-4"><p className="text-xs font-semibold text-gray-400 uppercase mb-3">Online Visitors ({onlineVisitors.length})</p><div className="space-y-2">{onlineVisitors.map((visitor) => (<div key={visitor.id} className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /><span className="text-sm">{visitor.name}</span>{getSentimentIcon(visitor.sentiment)}<span className="text-xs text-gray-400">{visitor.timeOnSite}</span></div><button onClick={() => startNewChat(visitor)} className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">Start Chat</button></div>))}</div></div>)}
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedChat ? (
                <>
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><HiOutlineUserCircle className="w-6 h-6 text-blue-600" /></div><div><p className="font-medium">{selectedChat.customerName}</p><div className="flex items-center gap-2"><p className="text-xs text-gray-500">Agent: {getAgentName(selectedChat.assignedAgent)}</p>{getSentimentIcon(selectedChat.sentiment)}</div></div></div>
                    <div className="flex gap-1">
                      <button onClick={startVideoCall} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="Video Call"><VideoIcon className="w-4 h-4" /></button>
                      <button onClick={startAudioCall} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="Audio Call"><PhoneIcon className="w-4 h-4" /></button>
                      <button onClick={startScreenShare} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="Screen Share"><ScreenShareIcon className="w-4 h-4" /></button>
                      <button onClick={startCoBrowse} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="Co-browsing"><CursorIcon className="w-4 h-4" /></button>
                      <button onClick={() => setShowTransferModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="Transfer"><HiOutlineUserAdd className="w-4 h-4" /></button>
                      <button onClick={() => setShowCannedModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="Canned"><HiOutlineTemplate className="w-4 h-4" /></button>
                      <button onClick={() => setShowFileModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="File"><HiOutlinePaperClip className="w-4 h-4" /></button>
                      <button onClick={() => setShowCloseModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg" title="Close"><HiOutlineCheckCircle className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                    {selectedChat.messages?.map((message) => (
                      <div key={message.id} className={`flex ${message.sender === 'agent' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] rounded-2xl px-4 py-2 ${message.sender === 'agent' ? 'bg-blue-600 text-white' : message.sender === 'bot' ? 'bg-purple-100 text-purple-800 border border-purple-200' : message.sender === 'system' ? 'bg-gray-100 text-gray-500 text-center text-sm' : 'bg-gray-100 text-gray-900'}`}>
                          {message.sender !== 'system' && (<div className="flex items-center gap-1 mb-1">{message.sender === 'agent' ? <span className="text-xs opacity-75">You</span> : message.sender === 'bot' ? <><HiOutlineRobot className="w-3 h-3" /><span className="text-xs opacity-75">AI Assistant</span></> : <><span className="text-xs opacity-75">{selectedChat.customerName}</span>{getSentimentIcon(message.sentiment)}</>}</div>)}
                          {message.isFile ? (<div className="flex items-center gap-2"><HiOutlinePaperClip className="w-4 h-4" /><span>{message.text}</span></div>) : (<p className="text-sm whitespace-pre-wrap">{message.text}</p>)}
                          <p className="text-xs opacity-75 mt-1 text-right">{formatTime(message.timestamp)}</p>
                        </div>
                      </div>
                    ))}
                    {typingStatus[selectedChat.id] && (<div className="flex justify-start"><div className="bg-gray-100 rounded-2xl px-4 py-2"><div className="flex gap-1"><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} /><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} /><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} /></div></div></div>)}
                    <div ref={messagesEndRef} />
                  </div>
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <button onClick={() => setShowCannedModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"><HiOutlineTemplate className="w-5 h-5" /></button>
                      <button onClick={() => setShowFileModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"><HiOutlinePaperClip className="w-5 h-5" /></button>
                      <input ref={inputRef} type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} placeholder="Type your message..." className="flex-1 px-4 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                      <button onClick={sendMessage} disabled={!messageInput.trim()} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"><HiOutlinePaperAirplane className="w-5 h-5" /></button>
                    </div>
                    {chatbotEnabled && <p className="text-xs text-gray-400 mt-2 text-center">🤖 AI chatbot is active • Sentiment analysis enabled • Smart routing active</p>}
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center"><div className="text-center"><HiOutlineChatAlt2 className="w-16 h-16 mx-auto mb-4 text-gray-300" /><p className="text-gray-500">Select a conversation to start chatting</p></div></div>
              )}
            </div>
          </div>
        </div>

        {/* Canned Responses Modal */}
        {showCannedModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCannedModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-purple-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Canned Responses</h3><button onClick={() => setShowCannedModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6 max-h-96 overflow-y-auto"><div className="space-y-3">{cannedResponses.map((cr) => (<div key={cr.id} className="p-3 bg-gray-50 rounded-lg"><div className="flex items-center justify-between"><p className="font-medium text-sm">{cr.title}</p><button onClick={() => insertCannedResponse(cr)} className="text-xs text-blue-600">Insert</button></div><p className="text-xs text-gray-500 mt-1">{cr.content.substring(0, 100)}...</p><p className="text-xs text-gray-400 mt-1">Used {cr.usageCount || 0} times</p></div>))}</div></div></div></div>)}

        {/* Transfer Modal */}
        {showTransferModal && selectedChat && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowTransferModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-blue-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Transfer Chat</h3><button onClick={() => setShowTransferModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><p className="text-sm text-gray-600 mb-4">Transfer to another agent:</p><div className="space-y-2">{agents.filter(a => a.id !== selectedChat.assignedAgent && a.status === 'online').map(agent => (<button key={agent.id} onClick={() => transferChat(selectedChat.id, agent.id)} className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100"><p className="font-medium">{agent.name}</p><p className="text-xs text-gray-500">{agent.role} • {agent.efficiency}% eff</p></button>))}</div></div></div></div>)}

        {/* Close Chat Modal */}
        {showCloseModal && selectedChat && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCloseModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Close Chat</h3><button onClick={() => setShowCloseModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><p className="text-sm text-gray-600 mb-4">Close this conversation?</p><div className="flex gap-3"><button onClick={() => closeChat(selectedChat.id)} className="flex-1 py-2 bg-green-600 text-white rounded-lg">Yes, Close</button><button onClick={() => setShowCloseModal(false)} className="flex-1 py-2 bg-gray-100 rounded-lg">Cancel</button></div></div></div></div>)}

        {/* File Upload Modal */}
        {showFileModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowFileModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-cyan-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Upload File</h3><button onClick={() => setShowFileModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><label className="block w-full p-8 text-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"><input type="file" multiple onChange={handleFileUpload} ref={fileInputRef} className="hidden" /><HiOutlineCloudUpload className="w-12 h-12 mx-auto mb-2 text-gray-400" /><p className="text-sm text-gray-500">Click or drag files to upload</p><p className="text-xs text-gray-400 mt-1">Images, PDFs, Documents up to 10MB</p></label></div></div></div>)}

        {/* Rating Modal */}
        {showRatingModal && selectedChat && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowRatingModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-yellow-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Rate Your Experience</h3><button onClick={() => setShowRatingModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6 text-center"><p className="text-sm text-gray-600 mb-4">How would you rate this support experience?</p><div className="flex justify-center gap-2 mb-4">{[1, 2, 3, 4, 5].map(star => (<button key={star} onClick={() => rateChat(selectedChat.id, star)} className="text-3xl transition-all hover:scale-110 text-gray-300 hover:text-yellow-500">★</button>))}</div></div></div></div>)}

        {/* Sentiment Analysis Modal */}
        {showSentimentModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSentimentModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-pink-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Sentiment Analysis</h3><button onClick={() => setShowSentimentModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><div className="space-y-4"><div><div className="flex items-center justify-between mb-2"><span className="text-sm">Positive</span><span className="text-sm font-semibold">{analyticsData.sentimentTrend.positive}%</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: `${analyticsData.sentimentTrend.positive}%` }} /></div></div><div><div className="flex items-center justify-between mb-2"><span className="text-sm">Neutral</span><span className="text-sm font-semibold">{analyticsData.sentimentTrend.neutral}%</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${analyticsData.sentimentTrend.neutral}%` }} /></div></div><div><div className="flex items-center justify-between mb-2"><span className="text-sm">Negative</span><span className="text-sm font-semibold">{analyticsData.sentimentTrend.negative}%</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-red-500 h-2 rounded-full" style={{ width: `${analyticsData.sentimentTrend.negative}%` }} /></div></div></div><div className="mt-4 p-3 bg-gray-50 rounded-lg"><p className="text-sm font-medium mb-2">Recent Trends</p><p className="text-xs text-gray-600">Positive sentiment increased by 12% this week</p></div></div></div></div>)}

        {/* Settings Modal */}
        {showSettingsModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSettingsModal(false)}><div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Chat Settings</h3><button onClick={() => setShowSettingsModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div><div className="p-6 space-y-4"><div><label className="block text-sm font-medium mb-1">Auto-Response Message</label><textarea rows="3" className="w-full px-4 py-2 bg-gray-50 border rounded-lg" placeholder="Auto-response when away..." defaultValue="Thanks for your message. I'm currently away but will respond shortly." /></div><div><label className="block text-sm font-medium mb-1">Default Greeting</label><input type="text" className="w-full px-4 py-2 bg-gray-50 border rounded-lg" defaultValue="Hello! How can I help you today?" /></div><div className="flex items-center justify-between"><label className="text-sm font-medium">Enable Typing Indicators</label><input type="checkbox" defaultChecked className="w-4 h-4" /></div><div className="flex items-center justify-between"><label className="text-sm font-medium">Enable Message Sounds</label><input type="checkbox" className="w-4 h-4" /></div><div className="flex items-center justify-between"><label className="text-sm font-medium">Enable Sentiment Analysis</label><input type="checkbox" defaultChecked className="w-4 h-4" /></div><button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold">Save Settings</button></div></div></div>)}

        {/* Analytics Modal */}
        {showAnalyticsModal && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowAnalyticsModal(false)}><div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="bg-teal-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Advanced Analytics</h3><button onClick={() => setShowAnalyticsModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div><div className="p-6"><div className="grid grid-cols-2 gap-4 mb-6"><div className="p-4 bg-blue-50 rounded-xl text-center"><div className="text-2xl font-bold text-blue-600">{analyticsData.totalChats}</div><p className="text-sm text-gray-500">Total Chats</p></div><div className="p-4 bg-purple-50 rounded-xl text-center"><div className="text-2xl font-bold text-purple-600">{analyticsData.avgDuration}</div><p className="text-sm text-gray-500">Avg Duration</p></div><div className="p-4 bg-yellow-50 rounded-xl text-center"><div className="text-2xl font-bold text-yellow-600">{analyticsData.satisfaction.toFixed(1)}</div><p className="text-sm text-gray-500">Satisfaction</p></div><div className="p-4 bg-green-50 rounded-xl text-center"><div className="text-2xl font-bold text-green-600">{analyticsData.chatbotDeflections}</div><p className="text-sm text-gray-500">Bot Deflections</p></div></div><div className="mb-6"><h4 className="font-semibold mb-3">Agent Utilization</h4><div className="space-y-2">{analyticsData.agentUtilization.map((agent, idx) => (<div key={idx}><div className="flex justify-between text-sm"><span>{agent.name}</span><span>{agent.utilization}%</span></div><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{ width: `${agent.utilization}%` }} /></div></div>))}</div></div><div><h4 className="font-semibold mb-3">Sentiment Trend</h4><div className="flex gap-2"><div className="flex-1 text-center p-2 bg-green-50 rounded-lg"><div className="text-lg font-bold text-green-600">{analyticsData.sentimentTrend.positive}%</div><p className="text-xs text-gray-500">Positive</p></div><div className="flex-1 text-center p-2 bg-yellow-50 rounded-lg"><div className="text-lg font-bold text-yellow-600">{analyticsData.sentimentTrend.neutral}%</div><p className="text-xs text-gray-500">Neutral</p></div><div className="flex-1 text-center p-2 bg-red-50 rounded-lg"><div className="text-lg font-bold text-red-600">{analyticsData.sentimentTrend.negative}%</div><p className="text-xs text-gray-500">Negative</p></div></div></div></div></div></div>)}

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"><HiOutlineRobot className="w-12 h-12 mx-auto mb-4" /><h3 className="text-2xl md:text-3xl font-bold mb-4">Experience the Future of Customer Support</h3><p className="text-blue-100 mb-6">AI-powered sentiment analysis, smart routing, video calls, and co-browsing.</p><button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"><HiOutlineChat className="w-5 h-5" />Start Free Trial</button></div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .animate-bounce { animation: bounce 1s infinite; }
        .bg-grid-white { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
      `}</style>
    </section >
  );
};

export default LiveChatSection3;