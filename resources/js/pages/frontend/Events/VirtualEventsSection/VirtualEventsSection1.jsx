// page/frontend/Events/VirtualEventsSection/VirtualEventsSection1.jsx

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
  HiOutlineVideoCamera,
  HiOutlineUsers,
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
  HiOutlineBadgeCheck,
  HiOutlinePlay,
  HiOutlineQrcode,
} from 'react-icons/hi';
import {
  HiOutlineUser,
  HiOutlineTrophy,
} from 'react-icons/hi2';

const VirtualEventsSection1 = ({ config }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    country: '',
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
  const [qrEvent, setQrEvent] = useState(null);
  const modalRef = useRef(null);

  // Get data from config
  const virtualEvents = useMemo(() => config?.virtualEvents || [], [config?.virtualEvents]);
  const stats = config?.stats || [];
  const featuredEventId = config?.featuredEventId || (virtualEvents[0]?.id);

  // Featured event
  const featuredEvent = virtualEvents.find(e => e.id === featuredEventId) || virtualEvents[0];

  // Get unique categories and regions
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

  // Calculate countdown for each event
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

  // Update countdowns
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

  // Load registered events from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('registeredVirtualEvents');
    if (saved) {
      setRegisteredEvents(JSON.parse(saved));
    }
  }, []);

  // Save registered events to localStorage
  useEffect(() => {
    localStorage.setItem('registeredVirtualEvents', JSON.stringify(registeredEvents));
  }, [registeredEvents]);

  // Filter events
  const now = new Date();
  const upcomingEvents = virtualEvents.filter((e) => {
    if (!e.startDate) return false;
    const eventDate = new Date(e.startDate);
    return eventDate > now;
  });

  const recordedEvents = virtualEvents.filter((e) => {
    if (!e.startDate) return false;
    const eventDate = new Date(e.startDate);
    return eventDate <= now || e.hasRecording;
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

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Handle registration
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
        questions: '', newsletter: false, terms: false
      });
    }, 3000);
  };

  // Share event
  const shareEventHandler = (event, e) => {
    e.stopPropagation();
    setShareEvent(event);
    setShowShareModal(true);
  };

  // Copy link to clipboard
  const copyLink = () => {
    if (shareEvent) {
      navigator.clipboard.writeText(`${window.location.origin}/virtual-events/${shareEvent.id}`);
      alert('Link copied to clipboard!');
    }
  };

  // Format date range
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

  // Format time
  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    return timeStr;
  };

  // Get category badge color
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

  // Countries list
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
    'France', 'Japan', 'China', 'India', 'Brazil', 'Mexico', 'Spain',
    'Italy', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Singapore',
    'United Arab Emirates', 'South Africa', 'Nigeria', 'Kenya'
  ];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Virtual Events Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineVideoCamera className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Virtual Events"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Connect from"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Anywhere"}</span> {config?.title?.suffix || ""}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Join live virtual events, interactive workshops, and on-demand sessions from industry experts. Network with professionals worldwide without leaving your desk."}
          </p>
        </div>

        {/* Stats Row */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'users' ? <HiOutlineUsers className="w-5 h-5 text-blue-600" /> :
                    stat.icon === 'calendar' ? <HiOutlineCalendar className="w-5 h-5 text-blue-600" /> :
                      stat.icon === 'clock' ? <HiOutlineClock className="w-5 h-5 text-blue-600" /> :
                        <HiOutlineVideoCamera className="w-5 h-5 text-blue-600" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Event Banner */}
        {featuredEvent && activeTab !== 'featured' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white" />
            </div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Event</span>
                {featuredEvent.category && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {featuredEvent.category}
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredEvent.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredEvent.description}</p>

              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredEvent.startDate && (
                  <div className="flex items-center gap-2">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span>{formatDateRange(featuredEvent.startDate, featuredEvent.endDate)}</span>
                  </div>
                )}
                {featuredEvent.time && (
                  <div className="flex items-center gap-2">
                    <HiOutlineClock className="w-4 h-4" />
                    <span>{formatTime(featuredEvent.time)}</span>
                  </div>
                )}
                {featuredEvent.speaker?.name && (
                  <div className="flex items-center gap-2">
                    <HiOutlineUser className="w-4 h-4" />
                    <span>{featuredEvent.speaker.name}</span>
                  </div>
                )}
                {featuredEvent.expectedAttendees && (
                  <div className="flex items-center gap-2">
                    <HiOutlineUserGroup className="w-4 h-4" />
                    <span>{featuredEvent.expectedAttendees.toLocaleString()}+ Registered</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setSelectedEvent(featuredEvent);
                    setShowRegisterModal(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <HiOutlineTicket className="w-5 h-5" />
                  Register Now
                  <HiOutlineArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setQrEvent(featuredEvent);
                    setShowQrModal(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                >
                  <HiOutlineQrcode className="w-5 h-5" />
                  Get QR Code
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
            >
              {tab.icon === 'calendar' ? <HiOutlineCalendar className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  tab.icon === 'video' ? <HiOutlineVideoCamera className="w-4 h-4" /> :
                    <HiOutlineTicket className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'registered' && (
                <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">
                  {registeredEvents.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events by title, description, or speaker..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <HiOutlineFilter className="w-5 h-5" />
              Filters
              {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>

            {/* View Toggle */}
            <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="Grid view"
              >
                <HiOutlineViewGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-gray-100 dark:bg-gray-700 shadow-md' : ''}`}
                aria-label="List view"
              >
                <HiOutlineViewList className="w-5 h-5" />
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? 'All Categories' : cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region/Time Zone</label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {region === 'all' ? 'All Regions' : region}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Events Grid/List */}
        {displayedEvents.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineVideoCamera className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No virtual events found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedRegion('all');
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedEvents.map((event) => {
              const countdown = countdowns[event.id];
              const isUpcoming = activeTab === 'upcoming' && countdown && !countdown.expired;
              const isRegistered = registeredEvents.includes(event.id);

              return (
                <div
                  key={event.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
                  {/* Image */}
                  {event.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {event.category && (
                        <span className={`absolute top-4 left-4 text-xs px-2 py-1 rounded-full ${getCategoryBadge(event.category)}`}>
                          {event.category}
                        </span>
                      )}
                      {event.isFree && (
                        <span className="absolute top-4 right-4 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                          Free
                        </span>
                      )}

                      {/* Action Buttons Overlay */}
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <button
                          onClick={(e) => shareEventHandler(event, e)}
                          className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                          <HiOutlineShare className="w-4 h-4" />
                        </button>
                      </div>

                      {isUpcoming && countdown && (
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-center">
                          <div className="flex gap-2 text-xs">
                            <div>
                              <span className="font-bold text-lg">{countdown.days}</span>
                              <span className="text-xs ml-0.5">d</span>
                            </div>
                            <div>
                              <span className="font-bold text-lg">{countdown.hours}</span>
                              <span className="text-xs ml-0.5">h</span>
                            </div>
                            <div>
                              <span className="font-bold text-lg">{countdown.minutes}</span>
                              <span className="text-xs ml-0.5">m</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Date & Time */}
                    <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      {event.startDate && (
                        <div className="flex items-center gap-2">
                          <HiOutlineCalendar className="w-4 h-4 shrink-0" />
                          <span>{formatDateRange(event.startDate, event.endDate)}</span>
                        </div>
                      )}
                      {event.time && (
                        <div className="flex items-center gap-2">
                          <HiOutlineClock className="w-4 h-4 shrink-0" />
                          <span>{formatTime(event.time)} {event.timezone && `(${event.timezone})`}</span>
                        </div>
                      )}
                      {event.duration && (
                        <div className="flex items-center gap-2">
                          <HiOutlineClock className="w-4 h-4 shrink-0" />
                          <span>Duration: {event.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Speaker */}
                    {event.speaker && (
                      <div className="flex items-center gap-3 mb-4">
                        {event.speaker.avatar ? (
                          <img
                            src={event.speaker.avatar}
                            alt={event.speaker.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <HiOutlineUser className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">
                            {event.speaker.name}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-1">
                            {event.speaker.title}, {event.speaker.company}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Attendees Count */}
                    {event.expectedAttendees && (
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                        <HiOutlineUserGroup className="w-3 h-3" />
                        <span>{event.expectedAttendees.toLocaleString()} registered</span>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {isRegistered ? (
                        <>
                          <button
                            onClick={() => {
                              setQrEvent(event);
                              setShowQrModal(true);
                            }}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                          >
                            <HiOutlineQrcode className="w-4 h-4" />
                            My Ticket
                          </button>
                          {event.hasRecording && activeTab !== 'upcoming' && (
                            <button
                              onClick={() => window.open(event.recordingUrl, '_blank')}
                              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                            >
                              <HiOutlinePlay className="w-4 h-4" />
                              Watch
                            </button>
                          )}
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedEvent(event);
                            setShowRegisterModal(true);
                          }}
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                        >
                          <HiOutlineTicket className="w-4 h-4" />
                          Register Now
                        </button>
                      )}
                      <button
                        onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                      >
                        {selectedEvent === event.id ? 'Less' : 'More'}
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {selectedEvent === event.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        {event.agenda && event.agenda.length > 0 && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Event Agenda:</p>
                            <ul className="space-y-1">
                              {event.agenda.slice(0, 3).map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                  <HiOutlineClock className="w-3 h-3 text-blue-500 mt-0.5 shrink-0" />
                                  <span><span className="font-medium">{item.time}</span> - {item.topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {event.certificateAvailable && (
                          <div className="mt-2 flex items-center gap-2 text-xs text-green-600">
                            <HiOutlineBadgeCheck className="w-3 h-3" />
                            <span>Certificate of attendance available</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {displayedEvents.map((event) => {
              const isRegistered = registeredEvents.includes(event.id);

              return (
                <div
                  key={event.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {event.image && (
                      <div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                          {event.category && (
                            <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${getCategoryBadge(event.category)}`}>
                              {event.category}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button onClick={(e) => shareEventHandler(event, e)} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
                            <HiOutlineShare className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                        {event.startDate && (
                          <div className="flex items-center gap-1">
                            <HiOutlineCalendar className="w-4 h-4" />
                            <span>{formatDateRange(event.startDate, event.endDate)}</span>
                          </div>
                        )}
                        {event.time && (
                          <div className="flex items-center gap-1">
                            <HiOutlineClock className="w-4 h-4" />
                            <span>{formatTime(event.time)}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {isRegistered ? (
                          <button onClick={() => { setQrEvent(event); setShowQrModal(true); }} className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold">
                            My Ticket
                          </button>
                        ) : (
                          <button onClick={() => { setSelectedEvent(event); setShowRegisterModal(true); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">
                            Register Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Registration Modal */}
        {showRegisterModal && selectedEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowRegisterModal(false)}
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Register for Event</h3>
                    <p className="text-blue-100 text-xs mt-1 line-clamp-1">{selectedEvent.title}</p>
                  </div>
                  <button onClick={() => setShowRegisterModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Registration Confirmed!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      You're registered for {selectedEvent.title}. Check your email for event details and access link.
                    </p>
                    <button
                      onClick={() => {
                        setShowRegisterModal(false);
                        setQrEvent(selectedEvent);
                        setShowQrModal(true);
                      }}
                      className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      <HiOutlineQrcode className="w-4 h-4" />
                      Get Your QR Ticket
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">{formatDateRange(selectedEvent.startDate, selectedEvent.endDate)}</span>
                        {selectedEvent.time && <> • {formatTime(selectedEvent.time)}</>}
                        {selectedEvent.isFree ? (
                          <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Free Event</span>
                        ) : (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Paid Event</span>
                        )}
                      </p>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full name *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email address *"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="Job title"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select country</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>

                    <textarea
                      name="questions"
                      value={formData.questions}
                      onChange={handleInputChange}
                      placeholder="Any questions for the speaker or organizer?"
                      rows="2"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Subscribe to event updates and future announcements
                      </span>
                    </label>

                    <label className={`flex items-start gap-2 cursor-pointer ${errors.terms ? 'text-red-500' : ''}`}>
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        className="w-4 h-4 mt-0.5"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> *
                      </span>
                    </label>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      Complete Registration
                      <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* QR Code Modal */}
        {showQrModal && qrEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowQrModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Your Event Ticket</h3>
                  <button onClick={() => setShowQrModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="w-48 h-48 bg-gray-100 dark:bg-gray-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <HiOutlineQrcode className="w-32 h-32 text-gray-400" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{qrEvent.title}</h4>
                <p className="text-xs text-gray-500 mb-2">
                  {formatDateRange(qrEvent.startDate, qrEvent.endDate)} • {qrEvent.time}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Ticket for: {formData.name || 'Attendee'}
                </p>
                <button
                  onClick={() => alert('Ticket saved!')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  <HiOutlineDownload className="w-4 h-4" />
                  Save Ticket
                </button>
                <p className="text-xs text-gray-400 mt-3">
                  Show this QR code at the virtual event check-in
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Event</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareEvent.title}</p>
                <div className="flex flex-col gap-3">
                  <button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <HiOutlineLink className="w-4 h-4" />Copy Link
                  </button>
                  <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareEvent.title)}&body=${encodeURIComponent(`${shareEvent.title}\n${shareEvent.description}\n\n${formatDateRange(shareEvent.startDate, shareEvent.endDate)} at ${shareEvent.time}\n\nRegister here: ${window.location.origin}/virtual-events/${shareEvent.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200">
                    <HiOutlineMail className="w-4 h-4" />Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss a Virtual Event</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our event calendar and get notified about upcoming webinars, conferences, and workshops.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <HiOutlineCalendar className="w-5 h-5" />
              Subscribe to Calendar
            </button>
            <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
              <HiOutlineMail className="w-5 h-5" />
              Email Updates
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
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
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default VirtualEventsSection1;