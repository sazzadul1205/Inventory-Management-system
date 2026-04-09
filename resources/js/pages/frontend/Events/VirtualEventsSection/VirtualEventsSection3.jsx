// page/frontend/Events/VirtualEventsSection/VirtualEventsSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import { AiOutlineRobot as HiOutlineRobot, } from "react-icons/ai";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineTicket,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineChat,
  HiOutlineVideoCamera,
  HiOutlineUsers,
  HiOutlineMail,
  HiOutlineLink,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineBadgeCheck,
  HiOutlineQrcode,
  HiOutlineOfficeBuilding,
  HiOutlineGift as GiftIcon,
} from 'react-icons/hi';
import {
  HiOutlineUser,
  HiOutlineTrophy,
} from 'react-icons/hi2';

const VirtualEventsSection3 = ({ config }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    country: '',
    interests: [],
    experience: '',
    goals: '',
    questions: '',
    newsletter: false,
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareEvent, setShareEvent] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [countdowns, setCountdowns] = useState({});
  const [showQrModal, setShowQrModal] = useState(false);
  const [qrEvent] = useState(null);
  const [showEventLobby, setShowEventLobby] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [lobbyTab, setLobbyTab] = useState('agenda');
  const [pollResults, setPollResults] = useState({});
  const [, setNetworkingRooms] = useState({});
  const [currentRoom, setCurrentRoom] = useState(null);
  const [chatMessages, setChatMessages] = useState({});
  const [newChatMessage, setNewChatMessage] = useState('');
  const [selectedExhibitor, setSelectedExhibitor] = useState(null);
  const [showExhibitorModal, setShowExhibitorModal] = useState(false);
  const [, setRaisedHands] = useState({});
  const [, setNetworkingRequests] = useState([]);
  const [aiMatches, setAiMatches] = useState([]);
  const [personalizedAgenda, setPersonalizedAgenda] = useState({});
  const [swagBag, setSwagBag] = useState({});
  const [, setLeaderboard] = useState([]);
  const [userPoints, setUserPoints] = useState(0);
  const [userBadges, setUserBadges] = useState([]);
  const modalRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Get data from config
  const virtualEvents = useMemo(() => config?.virtualEvents || [], [config?.virtualEvents]);
  const stats = config?.stats || [];
  const featuredEventId = config?.featuredEventId || (virtualEvents[0]?.id);

  const featuredEvent = virtualEvents.find(e => e.id === featuredEventId) || virtualEvents[0];

  const categories = useMemo(() => {
    const cats = new Set(virtualEvents.map(e => e.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [virtualEvents]);

  const regions = useMemo(() => {
    const reg = new Set(virtualEvents.map(e => e.region).filter(Boolean));
    return ['all', ...Array.from(reg)];
  }, [virtualEvents]);

  const tabs = config?.tabs || [
    { id: 'upcoming', label: 'Upcoming Events', icon: 'calendar' },
    { id: 'featured', label: 'Featured', icon: 'star' },
    { id: 'recorded', label: 'On-Demand', icon: 'video' },
    { id: 'registered', label: 'My Events', icon: 'ticket' },
  ];

  // Calculate countdown
  const calculateCountdown = useCallback((dateStr) => {
    if (!dateStr) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    const eventDate = new Date(dateStr);
    const now = new Date();
    const diff = eventDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds, expired: false };
  }, []);

  useEffect(() => {
    const updateCountdowns = () => {
      const newCountdowns = {};
      virtualEvents.forEach((event) => {
        if (event.startDate) {
          newCountdowns[event.id] = calculateCountdown(event.startDate);
        }
      });
      setCountdowns(newCountdowns);
    };
    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, [virtualEvents, calculateCountdown]);

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('registeredVirtualEvents');
    if (saved) setRegisteredEvents(JSON.parse(saved));

    const savedPollResults = localStorage.getItem('virtualPollResults');
    if (savedPollResults) setPollResults(JSON.parse(savedPollResults));

    const savedChat = localStorage.getItem('virtualEventChat');
    if (savedChat) setChatMessages(JSON.parse(savedChat));

    const savedNetworking = localStorage.getItem('networkingRooms');
    if (savedNetworking) setNetworkingRooms(JSON.parse(savedNetworking));

    const savedSwag = localStorage.getItem('virtualSwagBag');
    if (savedSwag) setSwagBag(JSON.parse(savedSwag));

    const savedPoints = localStorage.getItem('eventUserPoints');
    if (savedPoints) setUserPoints(parseInt(savedPoints));

    const savedBadges = localStorage.getItem('eventUserBadges');
    if (savedBadges) setUserBadges(JSON.parse(savedBadges));

    const savedLeaderboard = localStorage.getItem('eventLeaderboard');
    if (savedLeaderboard) setLeaderboard(JSON.parse(savedLeaderboard));
  }, []);

  useEffect(() => {
    localStorage.setItem('registeredVirtualEvents', JSON.stringify(registeredEvents));
  }, [registeredEvents]);

  useEffect(() => {
    localStorage.setItem('virtualPollResults', JSON.stringify(pollResults));
  }, [pollResults]);

  useEffect(() => {
    localStorage.setItem('virtualEventChat', JSON.stringify(chatMessages));
  }, [chatMessages]);

  useEffect(() => {
    localStorage.setItem('virtualSwagBag', JSON.stringify(swagBag));
  }, [swagBag]);

  useEffect(() => {
    localStorage.setItem('eventUserPoints', userPoints.toString());
  }, [userPoints]);

  useEffect(() => {
    localStorage.setItem('eventUserBadges', JSON.stringify(userBadges));
  }, [userBadges]);

  // Filter events
  const now = new Date();
  const upcomingEvents = virtualEvents.filter((e) => {
    if (!e.startDate) return false;
    return new Date(e.startDate) > now;
  });

  const recordedEvents = virtualEvents.filter((e) => {
    if (!e.startDate) return false;
    return new Date(e.startDate) <= now || e.hasRecording;
  });

  const featuredEvents = virtualEvents.filter(e => e.isFeatured || e.id === featuredEventId);

  const filterEvents = (eventList) => {
    return eventList.filter((e) => {
      const matchesSearch = searchQuery === '' ||
        e.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.speaker?.name?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || e.category === selectedCategory;
      const matchesRegion = selectedRegion === 'all' || e.region === selectedRegion;
      return matchesSearch && matchesCategory && matchesRegion;
    });
  };

  let displayedEvents = [];
  if (activeTab === 'upcoming') {
    displayedEvents = filterEvents(upcomingEvents);
  } else if (activeTab === 'featured') {
    displayedEvents = filterEvents(featuredEvents);
  } else if (activeTab === 'recorded') {
    displayedEvents = filterEvents(recordedEvents);
  } else if (activeTab === 'registered') {
    displayedEvents = filterEvents(virtualEvents.filter(e => registeredEvents.includes(e.id)));
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (type === 'checkbox' && name === 'interests' ?
        (checked ? [...prev.interests, value] : prev.interests.filter(i => i !== value)) :
        checked) : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const addPoints = (points) => {
    setUserPoints(prev => prev + points);
    // Check for badges
    if (userPoints + points >= 100 && !userBadges.some(b => b.name === 'Rookie Attendee')) {
      setUserBadges(prev => [...prev, { name: 'Rookie Attendee', description: 'Earned 100 points', earnedAt: new Date().toISOString() }]);
    }
    if (userPoints + points >= 500 && !userBadges.some(b => b.name === 'Engaged Participant')) {
      setUserBadges(prev => [...prev, { name: 'Engaged Participant', description: 'Earned 500 points', earnedAt: new Date().toISOString() }]);
    }
    if (userPoints + points >= 1000 && !userBadges.some(b => b.name === 'Event Champion')) {
      setUserBadges(prev => [...prev, { name: 'Event Champion', description: 'Earned 1000 points', earnedAt: new Date().toISOString() }]);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.terms) newErrors.terms = 'You must agree to the terms';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (selectedEvent && !registeredEvents.includes(selectedEvent.id)) {
      setRegisteredEvents([...registeredEvents, selectedEvent.id]);
      addPoints(50, `Registered for ${selectedEvent.title}`);

      // Generate AI matches based on interests
      const matches = generateAIMatches(formData.interests);
      setAiMatches(matches);

      // Generate personalized agenda
      const agenda = generatePersonalizedAgenda(selectedEvent, formData.interests);
      setPersonalizedAgenda(prev => ({ ...prev, [selectedEvent.id]: agenda }));
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowRegisterModal(false);
      setFormData({
        name: '', email: '', company: '', role: '', country: '',
        interests: [], experience: '', goals: '', questions: '', newsletter: false, terms: false
      });
    }, 3000);
  };

  const generateAIMatches = (interests) => {
    // Simulate AI matchmaking
    const mockAttendees = [
      { name: 'Sarah Johnson', title: 'Supply Chain Director', company: 'Global Corp', interests: ['Strategy', 'AI'], matchScore: 92 },
      { name: 'Michael Chen', title: 'Logistics Manager', company: 'TechLogistics', interests: ['Logistics', 'Automation'], matchScore: 88 },
      { name: 'Emily Rodriguez', title: 'Procurement Lead', company: 'Manufacturing Inc', interests: ['Procurement', 'Sustainability'], matchScore: 85 },
      { name: 'David Kim', title: 'Data Analyst', company: 'Analytics Co', interests: ['Analytics', 'AI'], matchScore: 78 },
    ];
    return mockAttendees.filter(m => m.interests.some(i => interests.includes(i))).slice(0, 3);
  };

  const generatePersonalizedAgenda = (event, interests) => {
    if (!event.agenda) return [];
    // Prioritize agenda items matching interests
    return [...event.agenda].sort((a, b) => {
      const aMatch = interests.some(i => a.topic?.toLowerCase().includes(i.toLowerCase())) ? 1 : 0;
      const bMatch = interests.some(i => b.topic?.toLowerCase().includes(i.toLowerCase())) ? 1 : 0;
      return bMatch - aMatch;
    });
  };

  const joinNetworkingRoom = (eventId, roomId) => {
    setCurrentRoom(roomId);
    setNetworkingRooms(prev => ({ ...prev, [`${eventId}-${roomId}`]: { participants: (prev[`${eventId}-${roomId}`]?.participants || 0) + 1, active: true } }));
    addPoints(15, `Joined networking room: ${roomId}`);
  };

  const leaveNetworkingRoom = (eventId, roomId) => {
    setCurrentRoom(null);
    setNetworkingRooms(prev => ({ ...prev, [`${eventId}-${roomId}`]: { participants: Math.max(0, (prev[`${eventId}-${roomId}`]?.participants || 1) - 1), active: false } }));
  };

  const sendChatMessage = (eventId) => {
    if (!newChatMessage.trim()) return;
    setChatMessages(prev => ({ ...prev, [eventId]: [...(prev[eventId] || []), { id: Date.now(), message: newChatMessage, author: formData.name || 'Attendee', timestamp: new Date().toISOString() }] }));
    addPoints(5, 'Sent a chat message');
    setNewChatMessage('');
  };

  const raiseHand = (eventId) => {
    setRaisedHands(prev => ({ ...prev, [eventId]: [...(prev[eventId] || []), { id: Date.now(), author: formData.name || 'Attendee', timestamp: new Date().toISOString() }] }));
    addPoints(5, 'Raised hand');
    alert('Hand raised! The moderator will address you shortly.');
  };

  const requestNetworking = (attendeeId) => {
    setNetworkingRequests(prev => [...prev, { id: Date.now(), from: formData.name || 'Attendee', to: attendeeId, status: 'pending', timestamp: new Date().toISOString() }]);
    addPoints(20, 'Sent networking request');
    alert('Networking request sent!');
  };

  const claimSwagItem = (eventId, itemId) => {
    setSwagBag(prev => ({ ...prev, [eventId]: [...(prev[eventId] || []), { id: itemId, claimedAt: new Date().toISOString() }] }));
    addPoints(25, 'Claimed swag item');
    alert('Swag item added to your bag!');
  };

  const shareEventHandler = (event, e) => {
    e.stopPropagation();
    setShareEvent(event);
    setShowShareModal(true);
  };

  const copyLink = () => {
    if (shareEvent) {
      navigator.clipboard.writeText(`${window.location.origin}/virtual-events/${shareEvent.id}`);
      alert('Link copied to clipboard!');
    }
  };

  const formatDateRange = (startDate, endDate) => {
    if (!startDate) return 'TBD';
    const start = new Date(startDate);
    if (!endDate) return start.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const end = new Date(endDate);
    if (start.getMonth() === end.getMonth()) {
      return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.getDate()}, ${end.getFullYear()}`;
    }
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    return timeStr;
  };

  const getCategoryBadge = (category) => {
    switch (category?.toLowerCase()) {
      case 'webinar': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'conference': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'workshop': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'summit': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const interestOptions = [
    'Supply Chain Strategy', 'Digital Transformation', 'Sustainability',
    'AI & Machine Learning', 'Logistics', 'Inventory Management', 'Procurement'
  ];

  const experienceOptions = ['Beginner (0-2 years)', 'Intermediate (3-7 years)', 'Advanced (8+ years)', 'Executive (15+ years)'];

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Virtual Events Premium Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-ve" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-ve)" />
        </svg>
      </div>

      {/* User Stats Bar */}
      <div className="fixed top-20 right-4 z-40 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 min-w-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
            <HiOutlineTrophy className="w-5 h-5 text-yellow-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Your Points</p>
            <p className="text-xl font-bold text-yellow-600">{userPoints}</p>
          </div>
        </div>
        {userBadges.length > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-100">
            <div className="flex gap-1">
              {userBadges.slice(0, 3).map((badge, idx) => (
                <div key={idx} className="group relative">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <HiOutlineBadgeCheck className="w-3 h-3 text-blue-600" />
                  </div>
                  <div className="absolute bottom-full right-0 mb-1 hidden group-hover:block bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">{badge.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineSparkles className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "AI-Powered Events"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Intelligent"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Virtual Events"}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "AI-powered matchmaking, personalized agendas, virtual swag bags, and gamified experiences. The future of virtual events is here."}
          </p>
          {stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {stat.icon === 'users' ? <HiOutlineUsers className="w-4 h-4 text-blue-600" /> :
                      stat.icon === 'calendar' ? <HiOutlineCalendar className="w-4 h-4 text-blue-600" /> :
                        stat.icon === 'video' ? <HiOutlineVideoCamera className="w-4 h-4 text-blue-600" /> :
                          <HiOutlineRobot className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Featured Event Banner */}
        {featuredEvent && activeTab !== 'featured' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-grid-white" /></div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Event</span>
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">🤖 AI Matchmaking</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">🎁 Virtual Swag</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredEvent.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredEvent.description}</p>
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredEvent.startDate && <div className="flex items-center gap-2"><HiOutlineCalendar className="w-4 h-4" /><span>{formatDateRange(featuredEvent.startDate, featuredEvent.endDate)}</span></div>}
                {featuredEvent.speaker?.name && <div className="flex items-center gap-2"><HiOutlineUser className="w-4 h-4" /><span>{featuredEvent.speaker.name}</span></div>}
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => { setSelectedEvent(featuredEvent); setShowRegisterModal(true); }} className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                  <HiOutlineTicket className="w-5 h-5" />Register Now
                </button>
                <button onClick={() => { setCurrentEvent(featuredEvent); setShowEventLobby(true); }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30">
                  <HiOutlineVideoCamera className="w-5 h-5" />Preview Lobby
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
              {tab.icon === 'calendar' ? <HiOutlineCalendar className="w-4 h-4" /> : tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> : tab.icon === 'video' ? <HiOutlineVideoCamera className="w-4 h-4" /> : <HiOutlineTicket className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'registered' && <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">{registeredEvents.length}</span>}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div>
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search events..." className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 transition-all">
              <HiOutlineFilter className="w-5 h-5" />Filters {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>
            <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}><HiOutlineViewGrid className="w-5 h-5" /></button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}><HiOutlineViewList className="w-5 h-5" /></button>
            </div>
          </div>
          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg">{categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label><select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border rounded-lg">{regions.map(r => <option key={r} value={r}>{r === 'all' ? 'All Regions' : r}</option>)}</select></div>
              </div>
            </div>
          )}
        </div>

        {/* Events Grid */}
        {displayedEvents.length === 0 ? (
          <div className="text-center py-12"><HiOutlineVideoCamera className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" /><p className="text-gray-500 dark:text-gray-400">No virtual events found.</p></div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedEvents.map((event) => {
              const countdown = countdowns[event.id];
              const isUpcoming = activeTab === 'upcoming' && countdown && !countdown.expired;
              const isRegistered = registeredEvents.includes(event.id);

              return (
                <div key={event.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  {event.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {event.category && <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getCategoryBadge(event.category)}`}>{event.category}</span>}
                      {event.hasAIMatchmaking && <span className="absolute top-4 right-4 text-xs bg-purple-500 text-white px-2 py-1 rounded-full">🤖 AI Matchmaking</span>}
                      {isUpcoming && countdown && (
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-center">
                          <div className="flex gap-2 text-xs"><div><span className="font-bold text-lg">{countdown.days}</span><span className="text-xs ml-0.5">d</span></div><div><span className="font-bold text-lg">{countdown.hours}</span><span className="text-xs ml-0.5">h</span></div><div><span className="font-bold text-lg">{countdown.minutes}</span><span className="text-xs ml-0.5">m</span></div></div>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>
                    <div className="space-y-2 mb-4 text-sm text-gray-500">
                      {event.startDate && <div className="flex items-center gap-2"><HiOutlineCalendar className="w-4 h-4 shrink-0" /><span>{formatDateRange(event.startDate, event.endDate)}</span></div>}
                      {event.time && <div className="flex items-center gap-2"><HiOutlineClock className="w-4 h-4 shrink-0" /><span>{formatTime(event.time)}</span></div>}
                    </div>
                    {event.speaker && (
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><HiOutlineUser className="w-5 h-5 text-blue-600" /></div>
                        <div><p className="font-semibold text-sm">{event.speaker.name}</p><p className="text-xs text-gray-500">{event.speaker.title}</p></div>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-3">
                      {isRegistered ? (
                        <button onClick={() => { setCurrentEvent(event); setShowEventLobby(true); }} className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-semibold text-sm">
                          <HiOutlineVideoCamera className="w-4 h-4" />Enter Lobby
                        </button>
                      ) : (
                        <button onClick={() => { setSelectedEvent(event); setShowRegisterModal(true); }} className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm">
                          <HiOutlineTicket className="w-4 h-4" />Register
                        </button>
                      )}
                      <button onClick={(e) => shareEventHandler(event, e)} className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm"><HiOutlineShare className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {displayedEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex flex-col md:flex-row gap-6">
                  {event.image && <div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0"><img src={event.image} alt={event.title} className="w-full h-full object-cover" /></div>}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                      {event.startDate && <div className="flex items-center gap-1"><HiOutlineCalendar className="w-4 h-4" />{formatDateRange(event.startDate, event.endDate)}</div>}
                    </div>
                    <button onClick={() => { setSelectedEvent(event); setShowRegisterModal(true); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">Register</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Event Lobby Modal with AI Features */}
        {showEventLobby && currentEvent && (
          <div className="fixed inset-0 z-50 flex flex-col bg-black/95" onClick={() => setShowEventLobby(false)}>
            <div className="relative flex-1 flex flex-col bg-white dark:bg-gray-900" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div><h3 className="text-white font-bold text-lg">{currentEvent.title}</h3><p className="text-blue-100 text-xs">AI-Powered Virtual Event</p></div>
                <button onClick={() => setShowEventLobby(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
              </div>
              <div className="flex h-full">
                {/* Sidebar Navigation */}
                <div className="w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 p-4 overflow-y-auto">
                  <nav className="space-y-2">
                    <button onClick={() => setLobbyTab('agenda')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'agenda' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineCalendar className="w-5 h-5" />Personalized Agenda</button>
                    <button onClick={() => setLobbyTab('matchmaking')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'matchmaking' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineRobot className="w-5 h-5" />AI Matchmaking</button>
                    <button onClick={() => setLobbyTab('stream')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'stream' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineVideoCamera className="w-5 h-5" />Live Stream</button>
                    <button onClick={() => setLobbyTab('networking')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'networking' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineUserGroup className="w-5 h-5" />Networking</button>
                    <button onClick={() => setLobbyTab('exhibitors')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'exhibitors' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineOfficeBuilding className="w-5 h-5" />Exhibitors</button>
                    <button onClick={() => setLobbyTab('swag')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'swag' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><GiftIcon className="w-5 h-5" />Virtual Swag</button>
                    <button onClick={() => setLobbyTab('leaderboard')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'leaderboard' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineTrophy className="w-5 h-5" />Leaderboard</button>
                    <button onClick={() => setLobbyTab('chat')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'chat' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineChat className="w-5 h-5" />Chat</button>
                  </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  {/* Personalized Agenda */}
                  {lobbyTab === 'agenda' && (
                    <div>
                      <h4 className="text-lg font-bold mb-4 flex items-center gap-2"><HiOutlineSparkles className="w-5 h-5 text-purple-600" />Your Personalized Agenda</h4>
                      <div className="space-y-3">
                        {(personalizedAgenda[currentEvent.id] || currentEvent.agenda || []).map((item, idx) => (
                          <div key={idx} className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                            <div><p className="font-semibold">{item.time} - {item.topic}</p><p className="text-sm text-gray-500">{item.speaker}</p></div>
                            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">Add to Calendar</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* AI Matchmaking */}
                  {lobbyTab === 'matchmaking' && (
                    <div>
                      <h4 className="text-lg font-bold mb-4 flex items-center gap-2"><HiOutlineRobot className="w-5 h-5 text-purple-600" />AI-Powered Matches</h4>
                      <p className="text-sm text-gray-500 mb-4">Based on your interests and profile, we've found these attendees you should connect with:</p>
                      <div className="space-y-3">
                        {aiMatches.map((match, idx) => (
                          <div key={idx} className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                            <div><p className="font-semibold">{match.name}</p><p className="text-sm text-gray-500">{match.title} at {match.company}</p><p className="text-xs text-green-600 mt-1">Match score: {match.matchScore}%</p></div>
                            <button onClick={() => requestNetworking(match.name)} className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm">Connect</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Live Stream */}
                  {lobbyTab === 'stream' && (
                    <div>
                      <div className="aspect-video bg-black rounded-xl flex items-center justify-center mb-4">
                        <div className="text-center text-gray-400"><HiOutlineVideoCamera className="w-16 h-16 mx-auto mb-2" /><p>Live stream will appear here</p><p className="text-sm mt-2">🎤 {currentEvent.speaker?.name || 'Featured Speaker'}</p></div>
                      </div>
                      <div className="flex gap-2"><button onClick={() => raiseHand(currentEvent.id)} className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm">✋ Raise Hand</button><button className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm">📝 Take Notes</button></div>
                    </div>
                  )}

                  {/* Networking */}
                  {lobbyTab === 'networking' && (
                    <div>
                      <h4 className="text-lg font-bold mb-4">Networking Lounges</h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {['Supply Chain Strategy', 'Digital Transformation', 'Sustainability', 'Career Growth'].map((room, idx) => (
                          <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                            <h5 className="font-semibold">{room}</h5>
                            <p className="text-sm text-gray-500">{Math.floor(Math.random() * 20) + 5} participants</p>
                            <button onClick={() => joinNetworkingRoom(currentEvent.id, room)} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">Join Room</button>
                          </div>
                        ))}
                      </div>
                      {currentRoom && (<div className="p-4 bg-green-50 rounded-xl"><p className="font-semibold">Currently in: {currentRoom}</p><button onClick={() => leaveNetworkingRoom(currentEvent.id, currentRoom)} className="mt-2 px-3 py-1 bg-red-600 text-white rounded-lg text-sm">Leave Room</button></div>)}
                    </div>
                  )}

                  {/* Exhibitors */}
                  {lobbyTab === 'exhibitors' && (
                    <div>
                      <h4 className="text-lg font-bold mb-4">Exhibitor Booths</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {['TechCorp Solutions', 'LogiSync', 'SupplyChain AI', 'Green Logistics'].map((exhibitor, idx) => (
                          <div key={idx} className="p-4 bg-gray-50 rounded-xl cursor-pointer hover:shadow-lg transition-all" onClick={() => { setSelectedExhibitor(exhibitor); setShowExhibitorModal(true); }}>
                            <div className="flex items-center gap-3"><div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"><HiOutlineOfficeBuilding className="w-6 h-6 text-blue-600" /></div><div><h5 className="font-semibold">{exhibitor}</h5><p className="text-xs text-gray-500">Click to visit →</p></div></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Virtual Swag Bag */}
                  {lobbyTab === 'swag' && (
                    <div>
                      <h4 className="text-lg font-bold mb-4 flex items-center gap-2"><GiftIcon className="w-5 h-5 text-green-600" />Virtual Swag Bag</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {['E-Book: Supply Chain Trends 2024', 'Discount Coupon - 20% Off', 'Free Consultation Voucher', 'Digital Certificate Template'].map((item, idx) => (
                          <div key={idx} className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                            <div><p className="font-semibold">{item}</p><p className="text-xs text-gray-500">Limited time offer</p></div>
                            <button onClick={() => claimSwagItem(currentEvent.id, idx)} className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm">Claim</button>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-purple-50 rounded-xl">
                        <h5 className="font-semibold mb-2">Your Swag Bag ({swagBag[currentEvent.id]?.length || 0} items)</h5>
                        {(swagBag[currentEvent.id] || []).map((item, idx) => (<p key={idx} className="text-sm text-gray-600">• Item #{item.id + 1}</p>))}
                      </div>
                    </div>
                  )}

                  {/* Leaderboard */}
                  {lobbyTab === 'leaderboard' && (
                    <div>
                      <h4 className="text-lg font-bold mb-4 flex items-center gap-2"><HiOutlineTrophy className="w-5 h-5 text-yellow-600" />Event Leaderboard</h4>
                      <div className="space-y-3">
                        {[
                          { name: 'Sarah Johnson', points: 1250, badge: '🏆' },
                          { name: 'Michael Chen', points: 980, badge: '🥈' },
                          { name: 'Emily Rodriguez', points: 745, badge: '🥉' },
                          { name: formData.name || 'You', points: userPoints, badge: '⭐', isCurrentUser: true },
                        ].map((user, idx) => (
                          <div key={idx} className={`p-4 rounded-xl flex items-center justify-between ${user.isCurrentUser ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-50'}`}>
                            <div><p className="font-semibold">{user.badge} {user.name}</p><p className="text-sm text-gray-500">{user.points} points</p></div>
                            {user.isCurrentUser && <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">You</span>}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-4 bg-gray-100 rounded-xl text-center"><p className="text-sm">🎉 Keep participating to earn more points and climb the leaderboard!</p></div>
                    </div>
                  )}

                  {/* Chat */}
                  {lobbyTab === 'chat' && (
                    <div className="flex flex-col h-full">
                      <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-96">
                        {(chatMessages[currentEvent.id] || []).map(msg => (<div key={msg.id} className="p-2 bg-gray-50 rounded-lg"><p className="text-xs font-semibold">{msg.author}</p><p className="text-sm">{msg.message}</p></div>))}
                      </div>
                      <div className="flex gap-2"><input type="text" value={newChatMessage} onChange={(e) => setNewChatMessage(e.target.value)} placeholder="Type a message... (+5 points)" className="flex-1 px-4 py-2 border rounded-lg" onKeyPress={(e) => e.key === 'Enter' && sendChatMessage(currentEvent.id)} /><button onClick={() => sendChatMessage(currentEvent.id)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Send</button></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Registration Modal with AI Profile */}
        {showRegisterModal && selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowRegisterModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()} ref={modalRef}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0"><div className="flex items-center justify-between"><div><h3 className="text-white font-bold text-lg">Register for Event</h3><p className="text-blue-100 text-xs">{selectedEvent.title}</p></div><button onClick={() => setShowRegisterModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-green-600" /></div>
                    <h4 className="text-xl font-bold mb-2">Registration Confirmed! 🎉</h4>
                    <p className="text-gray-600 text-sm mb-3">You've earned 50 points!</p>
                    {aiMatches.length > 0 && (<div className="mt-4 p-3 bg-purple-50 rounded-lg"><p className="text-sm font-semibold text-purple-700">🤖 AI Matchmaking</p><p className="text-xs">We've found {aiMatches.length} attendees with similar interests. Check the AI Matchmaking tab in the event lobby!</p></div>)}
                    <button onClick={() => { setShowRegisterModal(false); setCurrentEvent(selectedEvent); setShowEventLobby(true); }} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Enter Lobby →</button>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.name ? 'border-red-500' : 'border-gray-200'}`} />{errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}</div>
                    <div><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-200'}`} />{errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}</div>
                    <div className="grid grid-cols-2 gap-3"><input type="text" name="company" placeholder="Company" className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /><input type="text" name="role" placeholder="Job title" className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /></div>
                    <select name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl"><option value="">Select country</option>{['United States', 'Canada', 'UK', 'Australia', 'Germany'].map(c => <option key={c} value={c}>{c}</option>)}</select>
                    <select name="experience" value={formData.experience} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl"><option value="">Experience Level (for AI matching)</option>{experienceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}</select>
                    <div><label className="block text-sm font-medium mb-2">Areas of Interest (for AI matchmaking)</label><div className="flex flex-wrap gap-2">{interestOptions.map(interest => (<button key={interest} type="button" onClick={() => handleInputChange({ target: { name: 'interests', value: interest, type: 'checkbox', checked: !formData.interests.includes(interest) } })} className={`text-xs px-3 py-1 rounded-full transition-all ${formData.interests.includes(interest) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{interest}</button>))}</div></div>
                    <textarea name="goals" placeholder="What do you hope to learn or achieve at this event?" rows="2" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" />
                    <textarea name="questions" placeholder="Questions for speakers?" rows="2" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" />
                    <label className="flex items-center gap-2"><input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="w-4 h-4" /><span className="text-sm">Subscribe to event updates</span></label>
                    <label className={`flex items-start gap-2 ${errors.terms ? 'text-red-500' : ''}`}><input type="checkbox" name="terms" checked={formData.terms} onChange={handleInputChange} className="w-4 h-4 mt-0.5" /><span className="text-sm">I agree to the Terms *</span></label>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">Complete Registration (+50 points)<HiOutlineArrowRight className="inline ml-2" /></button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Exhibitor Modal */}
        {showExhibitorModal && selectedExhibitor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowExhibitorModal(false)}>
            <div className="relative max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold">{selectedExhibitor}</h3><button onClick={() => setShowExhibitorModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 text-center"><div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><HiOutlineOfficeBuilding className="w-12 h-12 text-blue-600" /></div><p className="text-gray-600 mb-4">Leading provider of supply chain solutions.</p><button className="w-full py-2 bg-blue-600 text-white rounded-lg">Chat with Representative (+10 points)</button></div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 p-4"><div className="flex items-center justify-between"><h3 className="font-bold">Share Event</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div>
              <div className="p-6"><p className="text-sm text-gray-600 mb-4 text-center">{shareEvent.title}</p><div className="flex flex-col gap-3"><button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg"><HiOutlineLink className="w-4 h-4" />Copy Link</button><button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareEvent.title)}&body=${encodeURIComponent(`${shareEvent.title}\n\n${window.location.origin}/virtual-events/${shareEvent.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"><HiOutlineMail className="w-4 h-4" />Share via Email</button></div></div>
            </div>
          </div>
        )}

        {/* QR Modal */}
        {showQrModal && qrEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowQrModal(false)}>
            <div className="relative max-w-sm w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold">Your Ticket</h3><button onClick={() => setShowQrModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 text-center"><div className="w-48 h-48 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center"><HiOutlineQrcode className="w-32 h-32 text-gray-400" /></div><h4 className="font-bold">{qrEvent.title}</h4><button className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg"><HiOutlineDownload className="inline mr-2" />Save Ticket</button></div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <HiOutlineSparkles className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience the Future of Virtual Events</h3>
          <p className="text-blue-100 mb-6">AI-powered matchmaking, personalized agendas, gamification, and more.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"><HiOutlineMail className="w-5 h-5" />Subscribe for Updates</button>
        </div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .bg-grid-white { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
      `}</style>
    </section>
  );
};

export default VirtualEventsSection3;