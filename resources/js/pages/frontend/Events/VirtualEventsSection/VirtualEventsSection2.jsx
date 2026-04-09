// page/frontend/Events/VirtualEventsSection/VirtualEventsSection2.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineTicket,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineChat,
  HiOutlineVideoCamera,
  HiOutlineChartBar,
  HiOutlineBell,
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
  HiOutlineQrcode,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import {
  HiOutlineUser,
  HiOutlineTrophy,
} from 'react-icons/hi2';

const VirtualEventsSection2 = ({ config }) => {
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
  const [lobbyTab, setLobbyTab] = useState('stream');
  const [pollResults, setPollResults] = useState({});
  const [, setNetworkingRooms] = useState({});
  const [currentRoom, setCurrentRoom] = useState(null);
  const [chatMessages, setChatMessages] = useState({});
  const [newChatMessage, setNewChatMessage] = useState('');
  const [selectedExhibitor, setSelectedExhibitor] = useState(null);
  const [showExhibitorModal, setShowExhibitorModal] = useState(false);
  const [, setRaisedHands] = useState({});
  const [, setNetworkingRequests] = useState([]);
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
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowRegisterModal(false);
      setFormData({
        name: '', email: '', company: '', role: '', country: '',
        interests: [], questions: '', newsletter: false, terms: false
      });
    }, 3000);
  };

  // Handle networking room join
  const joinNetworkingRoom = (eventId, roomId) => {
    setCurrentRoom(roomId);
    setNetworkingRooms(prev => ({
      ...prev,
      [`${eventId}-${roomId}`]: {
        participants: (prev[`${eventId}-${roomId}`]?.participants || 0) + 1,
        active: true
      }
    }));
  };

  const leaveNetworkingRoom = (eventId, roomId) => {
    setCurrentRoom(null);
    setNetworkingRooms(prev => ({
      ...prev,
      [`${eventId}-${roomId}`]: {
        participants: Math.max(0, (prev[`${eventId}-${roomId}`]?.participants || 1) - 1),
        active: false
      }
    }));
  };

  // Handle chat message
  const sendChatMessage = (eventId) => {
    if (!newChatMessage.trim()) return;
    setChatMessages(prev => ({
      ...prev,
      [eventId]: [...(prev[eventId] || []), {
        id: Date.now(),
        message: newChatMessage,
        author: formData.name || 'Attendee',
        timestamp: new Date().toISOString(),
      }]
    }));
    setNewChatMessage('');
  };

  const raiseHand = (eventId) => {
    setRaisedHands(prev => ({
      ...prev,
      [eventId]: [...(prev[eventId] || []), {
        id: Date.now(),
        author: formData.name || 'Attendee',
        timestamp: new Date().toISOString(),
      }]
    }));
    alert('Hand raised! The moderator will address you shortly.');
  };

  const requestNetworking = (attendeeId) => {
    setNetworkingRequests(prev => [...prev, {
      id: Date.now(),
      from: formData.name || 'Attendee',
      to: attendeeId,
      status: 'pending',
      timestamp: new Date().toISOString(),
    }]);
    alert('Networking request sent!');
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
      case 'panel': return 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const interestOptions = [
    'Supply Chain Strategy', 'Digital Transformation', 'Sustainability',
    'AI & Machine Learning', 'Logistics', 'Inventory Management', 'Procurement'
  ];

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Virtual Events Center"
    >
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineVideoCamera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Virtual Experience"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Immersive"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Virtual Events"}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Experience interactive virtual events with live streaming, networking lounges, exhibitor booths, and real-time engagement tools."}
            </p>
          </div>
          {stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
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
                {featuredEvent.hasNetworking && <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">🤝 Networking</span>}
                {featuredEvent.hasExhibitors && <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">🏢 Exhibitors</span>}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredEvent.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredEvent.description}</p>
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredEvent.startDate && <div className="flex items-center gap-2"><HiOutlineCalendar className="w-4 h-4" /><span>{formatDateRange(featuredEvent.startDate, featuredEvent.endDate)}</span></div>}
                {featuredEvent.time && <div className="flex items-center gap-2"><HiOutlineClock className="w-4 h-4" /><span>{formatTime(featuredEvent.time)}</span></div>}
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
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search events by title, description, or speaker..." className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">{categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}</select></div>
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region/Time Zone</label><select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">{regions.map(r => <option key={r} value={r}>{r === 'all' ? 'All Regions' : r}</option>)}</select></div>
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
                      {event.hasNetworking && <span className="absolute top-4 right-4 text-xs bg-purple-500 text-white px-2 py-1 rounded-full">🤝 Networking</span>}
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
                      {event.time && <div className="flex items-center gap-1"><HiOutlineClock className="w-4 h-4" />{formatTime(event.time)}</div>}
                    </div>
                    <button onClick={() => { setSelectedEvent(event); setShowRegisterModal(true); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">Register</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Event Lobby Modal */}
        {showEventLobby && currentEvent && (
          <div className="fixed inset-0 z-50 flex flex-col bg-black/95" onClick={() => setShowEventLobby(false)}>
            <div className="relative flex-1 flex flex-col bg-white dark:bg-gray-900" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div><h3 className="text-white font-bold text-lg">{currentEvent.title}</h3><p className="text-blue-100 text-xs">Virtual Event Lobby</p></div>
                <button onClick={() => setShowEventLobby(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
              </div>
              <div className="flex h-full">
                {/* Sidebar Navigation */}
                <div className="w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 p-4">
                  <nav className="space-y-2">
                    <button onClick={() => setLobbyTab('stream')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'stream' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineVideoCamera className="w-5 h-5" />Live Stream</button>
                    {currentEvent.hasNetworking && <button onClick={() => setLobbyTab('networking')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'networking' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineUserGroup className="w-5 h-5" />Networking</button>}
                    {currentEvent.hasExhibitors && <button onClick={() => setLobbyTab('exhibitors')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'exhibitors' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineOfficeBuilding className="w-5 h-5" />Exhibitors</button>}
                    <button onClick={() => setLobbyTab('polls')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'polls' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineChartBar className="w-5 h-5" />Live Polls</button>
                    <button onClick={() => setLobbyTab('chat')} className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${lobbyTab === 'chat' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}><HiOutlineChat className="w-5 h-5" />Chat</button>
                  </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  {lobbyTab === 'stream' && (
                    <div>
                      <div className="aspect-video bg-black rounded-xl flex items-center justify-center mb-4">
                        <div className="text-center text-gray-400"><HiOutlineVideoCamera className="w-16 h-16 mx-auto mb-2" /><p>Live stream will appear here</p><p className="text-sm mt-2">🎤 Speaker is presenting • 128 attendees</p></div>
                      </div>
                      <div className="flex gap-2"><button onClick={() => raiseHand(currentEvent.id)} className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm">✋ Raise Hand</button><button className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm">📝 Take Notes</button></div>
                    </div>
                  )}

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
                      <div className="mt-6"><h5 className="font-semibold mb-3">Attendees ({Math.floor(Math.random() * 100) + 50})</h5><div className="space-y-2 max-h-64 overflow-y-auto">{['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez', 'David Kim'].map((name, idx) => (<div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"><span>{name}</span><button onClick={() => requestNetworking(name)} className="px-2 py-1 bg-blue-600 text-white rounded text-xs">Connect</button></div>))}</div></div>
                    </div>
                  )}

                  {lobbyTab === 'exhibitors' && (
                    <div>
                      <h4 className="text-lg font-bold mb-4">Exhibitor Booths</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {['TechCorp Solutions', 'LogiSync', 'SupplyChain AI', 'Green Logistics'].map((exhibitor, idx) => (
                          <div key={idx} className="p-4 bg-gray-50 rounded-xl cursor-pointer hover:shadow-lg transition-all" onClick={() => { setSelectedExhibitor(exhibitor); setShowExhibitorModal(true); }}>
                            <div className="flex items-center gap-3"><div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"><HiOutlineOfficeBuilding className="w-6 h-6 text-blue-600" /></div><div><h5 className="font-semibold">{exhibitor}</h5><p className="text-xs text-gray-500">Click to visit booth →</p></div></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {lobbyTab === 'polls' && (
                    <div>
                      <h4 className="text-lg font-bold mb-4">Live Polls</h4>
                      <div className="p-4 bg-gray-50 rounded-xl mb-4">
                        <p className="font-semibold mb-2">What's your biggest supply chain challenge right now?</p>
                        <div className="space-y-2">{['Inventory management', 'Transportation delays', 'Demand forecasting', 'Supplier reliability'].map((opt, idx) => (<label key={idx} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-lg"><input type="radio" name="poll" className="w-4 h-4" /><span>{opt}</span></label>))}</div>
                        <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">Submit Vote</button>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl"><p className="font-semibold mb-2">Poll Results</p><div><p>Inventory management: 45%</p><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }} /></div></div></div>
                    </div>
                  )}

                  {lobbyTab === 'chat' && (
                    <div className="flex flex-col h-full">
                      <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-96">
                        {(chatMessages[currentEvent.id] || []).map(msg => (<div key={msg.id} className="p-2 bg-gray-50 rounded-lg"><p className="text-xs font-semibold">{msg.author}</p><p className="text-sm">{msg.message}</p></div>))}
                      </div>
                      <div className="flex gap-2"><input type="text" value={newChatMessage} onChange={(e) => setNewChatMessage(e.target.value)} placeholder="Type a message..." className="flex-1 px-4 py-2 border rounded-lg" onKeyPress={(e) => e.key === 'Enter' && sendChatMessage(currentEvent.id)} /><button onClick={() => sendChatMessage(currentEvent.id)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Send</button></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Registration Modal with Interests */}
        {showRegisterModal && selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowRegisterModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()} ref={modalRef}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 sticky top-0"><div className="flex items-center justify-between"><div><h3 className="text-white font-bold text-lg">Register for Event</h3><p className="text-blue-100 text-xs">{selectedEvent.title}</p></div><button onClick={() => setShowRegisterModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-green-600" /></div><h4 className="text-xl font-bold mb-2">Registration Confirmed!</h4><p className="text-gray-600 text-sm">Check your email for event access details.</p><button onClick={() => { setShowRegisterModal(false); setCurrentEvent(selectedEvent); setShowEventLobby(true); }} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Enter Lobby →</button></div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.name ? 'border-red-500' : 'border-gray-200'}`} />{errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}</div>
                    <div><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email *" className={`w-full px-4 py-3 bg-gray-50 border rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-200'}`} />{errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}</div>
                    <div className="grid grid-cols-2 gap-3"><input type="text" name="company" placeholder="Company" className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /><input type="text" name="role" placeholder="Job title" className="w-full px-4 py-3 bg-gray-50 border rounded-xl" /></div>
                    <select name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl"><option value="">Select country</option>{['United States', 'Canada', 'UK', 'Australia', 'Germany'].map(c => <option key={c} value={c}>{c}</option>)}</select>
                    <div><label className="block text-sm font-medium mb-2">Areas of Interest</label><div className="flex flex-wrap gap-2">{interestOptions.map(interest => (<button key={interest} type="button" onClick={() => handleInputChange({ target: { name: 'interests', value: interest, type: 'checkbox', checked: !formData.interests.includes(interest) } })} className={`text-xs px-3 py-1 rounded-full transition-all ${formData.interests.includes(interest) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{interest}</button>))}</div></div>
                    <textarea name="questions" placeholder="Questions for speakers?" rows="2" className="w-full px-4 py-3 bg-gray-50 border rounded-xl resize-none" />
                    <label className="flex items-center gap-2"><input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="w-4 h-4" /><span className="text-sm">Subscribe to event updates</span></label>
                    <label className={`flex items-start gap-2 ${errors.terms ? 'text-red-500' : ''}`}><input type="checkbox" name="terms" checked={formData.terms} onChange={handleInputChange} className="w-4 h-4 mt-0.5" /><span className="text-sm">I agree to the Terms *</span></label>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">Complete Registration<HiOutlineArrowRight className="inline ml-2" /></button>
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
              <div className="p-6 text-center"><div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><HiOutlineOfficeBuilding className="w-12 h-12 text-blue-600" /></div><p className="text-gray-600 mb-4">Leading provider of supply chain solutions. Visit our virtual booth to learn more about our products and services.</p><button className="w-full py-2 bg-blue-600 text-white rounded-lg">Chat with Representative</button></div>
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
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss a Virtual Event</h3>
          <p className="text-blue-100 mb-6">Subscribe to get notified about upcoming virtual events, webinars, and networking opportunities.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all"><HiOutlineMail className="w-5 h-5" />Subscribe to Calendar</button>
        </div>
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-grid-slate-100 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .dark .bg-grid-slate-800 { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
        .bg-grid-white { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
      `}</style>
    </section>
  );
};

export default VirtualEventsSection2; 