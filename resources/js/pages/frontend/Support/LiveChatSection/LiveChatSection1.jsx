// page/frontend/Support/LiveChatSection/LiveChatSection1.jsx

// React
import { useState, useEffect, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineChat,
  HiOutlineChatAlt2,
  HiOutlineSearch,
  HiOutlineX,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlinePaperClip,
  HiOutlineEmojiHappy,
  HiOutlinePaperAirplane,
  HiOutlineCog,
  HiOutlineUserAdd,
  HiOutlineStar,
} from 'react-icons/hi';
import { HiOutlineUserCircle } from 'react-icons/hi2';

const LiveChatSection1 = ({ config }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [activeTab, setActiveTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [chats, setChats] = useState([]);
  const [agents, setAgents] = useState([]);
  const [onlineVisitors, setOnlineVisitors] = useState([]);
  const [agentStatus, setAgentStatus] = useState('online');
  const [typingStatus, setTypingStatus] = useState({});
  const [stats, setStats] = useState({
    activeChats: 0,
    waiting: 0,
    resolved: 0,
    avgResponseTime: '1.2m',
    satisfaction: 4.9,
  });
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Get data from config
  const configChats = useMemo(() => config?.chats || [], [config]);

  const configAgents = useMemo(() => config?.agents || [
    { id: 'agent1', name: 'Sarah Johnson', avatar: null, role: 'Senior Support Agent', status: 'online', activeChats: 2, email: 'sarah@example.com' },
    { id: 'agent2', name: 'Michael Chen', avatar: null, role: 'Support Agent', status: 'online', activeChats: 1, email: 'michael@example.com' },
    { id: 'agent3', name: 'Emily Rodriguez', avatar: null, role: 'Support Agent', status: 'away', activeChats: 0, email: 'emily@example.com' },
    { id: 'agent4', name: 'David Kim', avatar: null, role: 'Technical Specialist', status: 'offline', activeChats: 0, email: 'david@example.com' },
  ], [config]);

  const configVisitors = useMemo(() => config?.visitors || [
    { id: 'visitor1', name: 'John Doe', email: 'john@example.com', page: '/pricing', timeOnSite: '2m', country: 'US' },
    { id: 'visitor2', name: 'Jane Smith', email: 'jane@example.com', page: '/support', timeOnSite: '5m', country: 'UK' },
    { id: 'visitor3', name: 'Bob Wilson', email: 'bob@example.com', page: '/product', timeOnSite: '1m', country: 'Canada' },
  ], [config]);

  // Initialize chats and agents
  useEffect(() => {
    const savedChats = localStorage.getItem('liveChats');
    if (savedChats && JSON.parse(savedChats).length > 0) {
      setChats(JSON.parse(savedChats));
    } else {
      setChats(configChats);
    }

    const savedAgents = localStorage.getItem('chatAgents');
    if (savedAgents) {
      setAgents(JSON.parse(savedAgents));
    } else {
      setAgents(configAgents);
    }

    setOnlineVisitors(configVisitors);
  }, [configAgents, configChats, configVisitors]);

  useEffect(() => {
    localStorage.setItem('liveChats', JSON.stringify(chats));
    updateStats();
  }, [chats, updateStats]);

  useEffect(() => {
    localStorage.setItem('chatAgents', JSON.stringify(agents));
  }, [agents]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedChat?.messages]);

  // Update statistics
  const updateStats = useMemo(() => () => {
    const activeChats = chats.filter(c => c.status === 'active').length;
    const waiting = chats.filter(c => c.status === 'waiting').length;
    const resolved = chats.filter(c => c.status === 'resolved').length;

    setStats({
      activeChats,
      waiting,
      resolved,
      avgResponseTime: '1.2m',
      satisfaction: 4.9,
    });
  }, [chats]);

  // Send message
  const sendMessage = () => {
    if (!messageInput.trim() || !selectedChat) return;

    const newMessage = {
      id: Date.now(),
      text: messageInput,
      sender: 'agent',
      senderName: 'You',
      timestamp: new Date().toISOString(),
      read: true,
    };

    setChats(prev => prev.map(chat =>
      chat.id === selectedChat.id
        ? {
          ...chat,
          messages: [...(chat.messages || []), newMessage],
          lastMessage: messageInput,
          lastMessageTime: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        : chat
    ));

    setSelectedChat(prev => ({
      ...prev,
      messages: [...(prev.messages || []), newMessage],
      lastMessage: messageInput,
      lastMessageTime: new Date().toISOString(),
    }));

    setMessageInput('');

    // Simulate typing indicator
    setTypingStatus(prev => ({ ...prev, [selectedChat.id]: true }));
    setTimeout(() => {
      setTypingStatus(prev => ({ ...prev, [selectedChat.id]: false }));

      // Auto-response for demo
      const autoResponse = {
        id: Date.now() + 1,
        text: "Thanks for your message. I'll help you with that right away.",
        sender: 'customer',
        senderName: selectedChat.customerName,
        timestamp: new Date().toISOString(),
        read: false,
      };

      setChats(prev => prev.map(chat =>
        chat.id === selectedChat.id
          ? { ...chat, messages: [...(chat.messages || []), autoResponse] }
          : chat
      ));

      setSelectedChat(prev => ({
        ...prev,
        messages: [...(prev.messages || []), autoResponse],
      }));
    }, 2000);
  };

  // Start new chat
  const startNewChat = (visitor) => {
    const newChat = {
      id: `chat_${Date.now()}`,
      customerId: visitor.id,
      customerName: visitor.name,
      customerEmail: visitor.email,
      customerAvatar: null,
      status: 'active',
      messages: [],
      assignedAgent: 'agent1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      page: visitor.page,
    };

    setChats(prev => [newChat, ...prev]);
    setSelectedChat(newChat);
    setOnlineVisitors(prev => prev.filter(v => v.id !== visitor.id));

    // Add welcome message
    const welcomeMessage = {
      id: Date.now(),
      text: `Hello ${visitor.name}! Welcome to support. How can I help you today?`,
      sender: 'agent',
      senderName: 'You',
      timestamp: new Date().toISOString(),
      read: true,
    };

    setTimeout(() => {
      setChats(prev => prev.map(chat =>
        chat.id === newChat.id
          ? { ...chat, messages: [welcomeMessage] }
          : chat
      ));
      setSelectedChat(prev => ({ ...prev, messages: [welcomeMessage] }));
    }, 100);
  };

  // Transfer chat to another agent
  const transferChat = (chatId, agentId) => {
    setChats(prev => prev.map(chat =>
      chat.id === chatId
        ? { ...chat, assignedAgent: agentId, status: 'active' }
        : chat
    ));

    if (selectedChat?.id === chatId) {
      setSelectedChat(prev => ({ ...prev, assignedAgent: agentId }));
    }

    setShowTransferModal(false);

    // Add system message
    const agent = agents.find(a => a.id === agentId);
    const transferMessage = {
      id: Date.now(),
      text: `This conversation has been transferred to ${agent?.name}.`,
      sender: 'system',
      senderName: 'System',
      timestamp: new Date().toISOString(),
      read: true,
      isSystem: true,
    };

    setChats(prev => prev.map(chat =>
      chat.id === chatId
        ? { ...chat, messages: [...(chat.messages || []), transferMessage] }
        : chat
    ));
  };

  // Close chat
  const closeChat = (chatId) => {
    setChats(prev => prev.map(chat =>
      chat.id === chatId
        ? { ...chat, status: 'resolved', resolvedAt: new Date().toISOString() }
        : chat
    ));

    if (selectedChat?.id === chatId) {
      setSelectedChat(null);
    }

    setShowCloseModal(false);
  };

  // Update agent status
  const updateAgentStatus = (status) => {
    setAgentStatus(status);
    setAgents(prev => prev.map(agent =>
      agent.id === 'agent1'
        ? { ...agent, status }
        : agent
    ));
  };

  // Format time
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  // Filter chats based on search and tab
  const filteredChats = useMemo(() => {
    let filtered = chats;

    if (activeTab === 'active') {
      filtered = filtered.filter(c => c.status === 'active');
    } else if (activeTab === 'waiting') {
      filtered = filtered.filter(c => c.status === 'waiting');
    } else if (activeTab === 'resolved') {
      filtered = filtered.filter(c => c.status === 'resolved');
    }

    if (searchQuery) {
      filtered = filtered.filter(chat =>
        chat.customerName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.customerEmail?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.lastMessage?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [chats, activeTab, searchQuery]);

  const getAgentName = (agentId) => {
    const agent = agents.find(a => a.id === agentId);
    return agent?.name || 'Unassigned';
  };

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
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Live Chat Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineChatAlt2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Live Chat"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Real-time"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Customer Support"}</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Connect with customers in real-time, resolve issues faster, and provide exceptional support experience."}
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between"><HiOutlineChat className="w-8 h-8 text-blue-500" /><span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.activeChats}</span></div>
            <p className="text-sm text-gray-500 mt-1">Active Chats</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between"><HiOutlineClock className="w-8 h-8 text-yellow-500" /><span className="text-2xl font-bold text-gray-900">{stats.waiting}</span></div>
            <p className="text-sm text-gray-500 mt-1">Waiting</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between"><HiOutlineCheckCircle className="w-8 h-8 text-green-500" /><span className="text-2xl font-bold text-gray-900">{stats.resolved}</span></div>
            <p className="text-sm text-gray-500 mt-1">Resolved Today</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between"><HiOutlineClock className="w-8 h-8 text-purple-500" /><span className="text-2xl font-bold text-gray-900">{stats.avgResponseTime}</span></div>
            <p className="text-sm text-gray-500 mt-1">Avg Response</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between"><HiOutlineStar className="w-8 h-8 text-yellow-500" /><span className="text-2xl font-bold text-gray-900">{stats.satisfaction}</span></div>
            <p className="text-sm text-gray-500 mt-1">Satisfaction</p>
          </div>
        </div>

        {/* Agent Status Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getAgentStatusColor(agentStatus)}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Status: {agentStatus.charAt(0).toUpperCase() + agentStatus.slice(1)}</span>
              </div>
              <select
                value={agentStatus}
                onChange={(e) => updateAgentStatus(e.target.value)}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="online">Online</option>
                <option value="away">Away</option>
                <option value="offline">Offline</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setShowSettingsModal(true)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors" title="Settings">
                <HiOutlineCog className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            {agents.map(agent => (
              <div key={agent.id} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${getAgentStatusColor(agent.status)}`} />
                <span className="text-sm text-gray-700 dark:text-gray-300">{agent.name}</span>
                {agent.activeChats > 0 && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">{agent.activeChats}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Interface */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex h-150">
            {/* Chat List Sidebar */}
            <div className="w-80 border-r border-gray-200 dark:border-gray-700 flex flex-col">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center"><HiOutlineSearch className="w-4 h-4 text-gray-400" /></div>
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search conversations..." className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="flex gap-1 p-2 border-b border-gray-200 dark:border-gray-700">
                {['active', 'waiting', 'resolved'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                  >
                    {tab === 'active' ? 'Active' : tab === 'waiting' ? 'Waiting' : 'Resolved'}
                    <span className="ml-1 text-xs">
                      ({tab === 'active' ? chats.filter(c => c.status === 'active').length : tab === 'waiting' ? chats.filter(c => c.status === 'waiting').length : chats.filter(c => c.status === 'resolved').length})
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex-1 overflow-y-auto">
                {filteredChats.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <HiOutlineChat className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-sm">No conversations found</p>
                  </div>
                ) : (
                  filteredChats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat)}
                      className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-all hover:bg-gray-50 dark:hover:bg-gray-700 ${selectedChat?.id === chat.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                          <HiOutlineUserCircle className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                              {chat.customerName}
                            </p>
                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${getChatStatusColor(chat.status)}`}>
                              {chat.status}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">{chat.customerEmail}</p>
                          <p className="text-xs text-gray-400 mt-1 truncate">{chat.lastMessage || 'No messages yet'}</p>
                          <p className="text-xs text-gray-400 mt-1">{formatTime(chat.lastMessageTime)}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {/* Online Visitors Section */}
              {onlineVisitors.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Online Visitors ({onlineVisitors.length})</p>
                  <div className="space-y-2">
                    {onlineVisitors.map((visitor) => (
                      <div key={visitor.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{visitor.name}</span>
                          <span className="text-xs text-gray-400">{visitor.timeOnSite}</span>
                        </div>
                        <button
                          onClick={() => startNewChat(visitor)}
                          className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                          Start Chat
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <HiOutlineUserCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{selectedChat.customerName}</p>
                        <p className="text-xs text-gray-500">Agent: {getAgentName(selectedChat.assignedAgent)}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setShowTransferModal(true)}
                        className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Transfer"
                      >
                        <HiOutlineUserAdd className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setShowCloseModal(true)}
                        className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Close Chat"
                      >
                        <HiOutlineCheckCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Messages Area */}
                  <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                    {selectedChat.messages?.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-2xl px-4 py-2 ${message.sender === 'agent'
                            ? 'bg-blue-600 text-white'
                            : message.sender === 'system'
                              ? 'bg-gray-100 dark:bg-gray-700 text-gray-500 text-center text-sm'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                            }`}
                        >
                          {message.sender !== 'system' && (
                            <p className="text-xs opacity-75 mb-1">
                              {message.sender === 'agent' ? 'You' : selectedChat.customerName}
                            </p>
                          )}
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs opacity-75 mt-1 text-right">{formatTime(message.timestamp)}</p>
                        </div>
                      </div>
                    ))}
                    {typingStatus[selectedChat.id] && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                        <HiOutlinePaperClip className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                        <HiOutlineEmojiHappy className="w-5 h-5" />
                      </button>
                      <input
                        ref={inputRef}
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!messageInput.trim()}
                        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <HiOutlinePaperAirplane className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <HiOutlineChatAlt2 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-500">Select a conversation to start chatting</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Transfer Chat Modal */}
        {showTransferModal && selectedChat && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowTransferModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Transfer Chat</h3><button onClick={() => setShowTransferModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-4">Transfer this conversation to another agent:</p>
                <div className="space-y-2">
                  {agents.filter(a => a.id !== selectedChat.assignedAgent && a.status === 'online').map(agent => (
                    <button
                      key={agent.id}
                      onClick={() => transferChat(selectedChat.id, agent.id)}
                      className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <p className="font-medium">{agent.name}</p>
                      <p className="text-xs text-gray-500">{agent.role}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Close Chat Modal */}
        {showCloseModal && selectedChat && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCloseModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Close Chat</h3><button onClick={() => setShowCloseModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-4">Are you sure you want to close this conversation?</p>
                <div className="flex gap-3">
                  <button onClick={() => closeChat(selectedChat.id)} className="flex-1 py-2 bg-green-600 text-white rounded-lg font-semibold">Yes, Close</button>
                  <button onClick={() => setShowCloseModal(false)} className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Modal */}
        {showSettingsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSettingsModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4"><div className="flex items-center justify-between"><h3 className="font-bold text-gray-900 dark:text-white">Chat Settings</h3><button onClick={() => setShowSettingsModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div>
              <div className="p-6 space-y-4">
                <div><label className="block text-sm font-medium mb-1">Auto-Response Message</label><textarea rows="3" className="w-full px-4 py-2 bg-gray-50 border rounded-lg resize-none" placeholder="Auto-response message when away..." defaultValue="Thanks for your message. I'm currently away but will respond shortly." /></div>
                <div><label className="block text-sm font-medium mb-1">Default Greeting</label><input type="text" className="w-full px-4 py-2 bg-gray-50 border rounded-lg" defaultValue="Hello! How can I help you today?" /></div>
                <div className="flex items-center justify-between"><label className="text-sm font-medium">Enable Typing Indicators</label><input type="checkbox" defaultChecked className="w-4 h-4" /></div>
                <div className="flex items-center justify-between"><label className="text-sm font-medium">Enable Message Sounds</label><input type="checkbox" defaultChecked className="w-4 h-4" /></div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold">Save Settings</button>
              </div>
            </div>
          </div>
        )}
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
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce { animation: bounce 1s infinite; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default LiveChatSection1;