// page/frontend/Events/IndustryConferencesSection/IndustryConferencesSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineTicket,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineMail,
  HiOutlineLink,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineDocumentText,
  HiOutlineDesktopComputer,
  HiOutlineBadgeCheck,
} from 'react-icons/hi';
import { HiOutlineUser, HiOutlineTrophy, HiOutlineBuildingOffice } from 'react-icons/hi2';

const IndustryConferencesSection3 = ({ config }) => {
  const [selectedConference, setSelectedConference] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registrationStep, setRegistrationStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    country: '',
    ticketType: 'standard',
    dietary: '',
    questions: '',
    newsletter: false,
    terms: false,
    sessions: [],
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('upcoming');
  const [countdowns, setCountdowns] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedConferences, setBookmarkedConferences] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareConference, setShareConference] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [showAgendaModal, setShowAgendaModal] = useState(false);
  const [agendaConference, setAgendaConference] = useState(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [showSpeakerModal, setShowSpeakerModal] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [showNetworkingModal, setShowNetworkingModal] = useState(false);
  const [networkingConference, setNetworkingConference] = useState(null);
  const [selectedSessions, setSelectedSessions] = useState([]);
  const [showVirtualLobby, setShowVirtualLobby] = useState(false);
  const [virtualConference, setVirtualConference] = useState(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [certificateConference, setCertificateConference] = useState(null);
  const [liveStreamActive, setLiveStreamActive] = useState(false);
  const [activeLiveConference, setActiveLiveConference] = useState(null);
  const modalRef = useRef(null);
  const videoRef = useRef(null);

  // Get data from config
  const conferences = useMemo(() => config?.conferences || [], [config?.conferences]);
  const stats = config?.stats || [];
  const featuredConferenceId = config?.featuredConferenceId || (conferences[0]?.id);

  // Featured conference
  const featuredConference = conferences.find(c => c.id === featuredConferenceId) || conferences[0];

  // Get unique regions and types from conferences
  const regions = useMemo(() => {
    const reg = new Set(conferences.map(c => c.region).filter(Boolean));
    return ['all', ...Array.from(reg)];
  }, [conferences]);

  const conferenceTypes = useMemo(() => {
    const types = new Set(conferences.map(c => c.type).filter(Boolean));
    return ['all', ...Array.from(types)];
  }, [conferences]);

  const tabs = config?.tabs || [
    { id: 'upcoming', label: 'Upcoming', icon: 'calendar' },
    { id: 'featured', label: 'Featured', icon: 'star' },
    { id: 'virtual', label: 'Virtual Events', icon: 'desktop' },
    { id: 'past', label: 'Past Events', icon: 'archive' },
  ];

  // Calculate countdown for each conference
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
      conferences.forEach((conference) => {
        if (conference.startDate) {
          newCountdowns[conference.id] = calculateCountdown(conference.startDate);
        }
      });
      setCountdowns(newCountdowns);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, [conferences, calculateCountdown]);

  // Check for live streams
  useEffect(() => {
    const checkLiveStreams = () => {
      const now = new Date();
      const liveConference = conferences.find(c => {
        if (!c.startDate || !c.endDate) return false;
        const start = new Date(c.startDate);
        const end = new Date(c.endDate);
        return now >= start && now <= end && c.liveStreamUrl;
      });
      setLiveStreamActive(!!liveConference);
      setActiveLiveConference(liveConference || null);
    };
    checkLiveStreams();
    const interval = setInterval(checkLiveStreams, 60000);
    return () => clearInterval(interval);
  }, [conferences]);

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('conferenceBookmarks');
    if (saved) setBookmarkedConferences(JSON.parse(saved));
    const savedCompare = localStorage.getItem('conferenceCompare');
    if (savedCompare) setCompareList(JSON.parse(savedCompare));
  }, []);

  useEffect(() => {
    localStorage.setItem('conferenceBookmarks', JSON.stringify(bookmarkedConferences));
  }, [bookmarkedConferences]);

  useEffect(() => {
    localStorage.setItem('conferenceCompare', JSON.stringify(compareList));
  }, [compareList]);

  // Filter conferences
  const now = new Date();
  const upcomingConferences = conferences.filter((c) => {
    if (!c.startDate) return false;
    const conferenceEndDate = c.endDate ? new Date(c.endDate) : new Date(c.startDate);
    return conferenceEndDate >= now;
  });

  const pastConferences = conferences.filter((c) => {
    if (!c.startDate) return false;
    const conferenceEndDate = c.endDate ? new Date(c.endDate) : new Date(c.startDate);
    return conferenceEndDate < now;
  });

  const virtualConferences = conferences.filter(c => c.type === 'Virtual' || c.isVirtual);
  const featuredConferences = conferences.filter(c => c.isFeatured || c.id === featuredConferenceId);

  const filterConferences = (conferenceList) => {
    return conferenceList.filter((c) => {
      const matchesSearch = searchQuery === '' ||
        c.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.location?.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.location?.country?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion = selectedRegion === 'all' || c.region === selectedRegion;
      const matchesType = selectedType === 'all' || c.type === selectedType;

      return matchesSearch && matchesRegion && matchesType;
    });
  };

  let displayedConferences = [];
  if (activeTab === 'upcoming') {
    displayedConferences = filterConferences(upcomingConferences);
  } else if (activeTab === 'past') {
    displayedConferences = filterConferences(pastConferences);
  } else if (activeTab === 'featured') {
    displayedConferences = filterConferences(featuredConferences);
  } else if (activeTab === 'virtual') {
    displayedConferences = filterConferences(virtualConferences);
  }

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Handle session selection
  const handleSessionToggle = (sessionId) => {
    setSelectedSessions(prev =>
      prev.includes(sessionId)
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  // Handle multi-step registration
  const handleNextStep = (e) => {
    e.preventDefault();

    if (registrationStep === 1) {
      const newErrors = {};
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
      if (!formData.company) newErrors.company = 'Company is required';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setRegistrationStep(2);
    } else if (registrationStep === 2) {
      if (!formData.terms) {
        setErrors({ terms: 'You must agree to the terms' });
        return;
      }
      const newRegistrationId = `CONF-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
      setRegistrationId(newRegistrationId);
      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
        setShowRegisterModal(false);
        setRegistrationStep(1);
        setFormData({
          name: '', email: '', company: '', role: '', phone: '', country: '',
          ticketType: 'standard', dietary: '', questions: '', newsletter: false, terms: false, sessions: []
        });
        setSelectedSessions([]);
      }, 3000);
    }
  };

  const handlePrevStep = () => {
    setRegistrationStep(1);
    setErrors({});
  };

  // Toggle bookmark
  const toggleBookmark = (conferenceId, e) => {
    e.stopPropagation();
    if (bookmarkedConferences.includes(conferenceId)) {
      setBookmarkedConferences(bookmarkedConferences.filter(id => id !== conferenceId));
    } else {
      setBookmarkedConferences([...bookmarkedConferences, conferenceId]);
    }
  };

  // Toggle compare
  const toggleCompare = (conferenceId, e) => {
    e.stopPropagation();
    if (compareList.includes(conferenceId)) {
      setCompareList(compareList.filter(id => id !== conferenceId));
    } else if (compareList.length < 4) {
      setCompareList([...compareList, conferenceId]);
    } else {
      alert('You can compare up to 4 conferences at a time');
    }
  };

  // Share conference
  const shareConferenceHandler = (conference, e) => {
    e.stopPropagation();
    setShareConference(conference);
    setShowShareModal(true);
  };

  const copyLink = () => {
    if (shareConference) {
      navigator.clipboard.writeText(`${window.location.origin}/conferences/${shareConference.id}`);
      alert('Link copied to clipboard!');
    }
  };

  // Format date range
  const formatDateRange = (startDate, endDate) => {
    if (!startDate) return '';
    const start = new Date(startDate);
    if (!endDate) return start.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const end = new Date(endDate);
    if (start.getMonth() === end.getMonth()) {
      return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.getDate()}, ${end.getFullYear()}`;
    }
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  };

  const getTicketPrice = (tickets) => {
    if (!tickets || tickets.length === 0) return 'Free';
    const prices = tickets.map(t => t.price).filter(p => p > 0);
    if (prices.length === 0) return 'Free';
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    if (minPrice === maxPrice) return `$${minPrice}`;
    return `$${minPrice} - $${maxPrice}`;
  };

  const getEarlyBirdPrice = (tickets) => {
    if (!tickets) return null;
    const earlyBird = tickets.find(t => t.name?.toLowerCase().includes('early'));
    return earlyBird ? earlyBird.price : null;
  };

  // Countries list
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
    'France', 'Japan', 'China', 'India', 'Brazil', 'Mexico', 'Spain',
    'Italy', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Singapore'
  ];

  // Download certificate
  const downloadCertificate = () => {
    alert('Certificate download started!');
    setShowCertificateModal(false);
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry Conferences Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-conf" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-conf)" />
        </svg>
      </div>

      {/* Live Stream Indicator */}
      {liveStreamActive && activeLiveConference && (
        <div className="fixed bottom-4 right-4 z-50 animate-bounce">
          <button
            onClick={() => setShowVirtualLobby(true)}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-red-700 transition-all"
          >
            <div className="w-3 h-3 bg-red-300 rounded-full animate-pulse" />
            <HiOutlineVideoCamera className="w-5 h-5" />
            <span className="font-semibold">LIVE: {activeLiveConference.title}</span>
          </button>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineBuildingOffice className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Global Summit"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "World-Class"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Conferences"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Join the world's leading supply chain and logistics conferences. Network with industry experts, discover cutting-edge solutions, and shape the future."}
          </p>

          {/* Stats Row */}
          {stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {stat.icon === 'users' ? <HiOutlineUsers className="w-4 h-4 text-blue-600" /> :
                      stat.icon === 'calendar' ? <HiOutlineCalendar className="w-4 h-4 text-blue-600" /> :
                        stat.icon === 'globe' ? <HiOutlineGlobe className="w-4 h-4 text-blue-600" /> :
                          <HiOutlineBuildingOffice className="w-4 h-4 text-blue-600" />}
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

        {/* Featured Conference Banner with Live Stream Option */}
        {featuredConference && activeTab === 'upcoming' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-grid-white" /></div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Conference</span>
                {featuredConference.isVirtual && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">Virtual Event</span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredConference.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredConference.description}</p>

              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredConference.startDate && (
                  <div className="flex items-center gap-2"><HiOutlineCalendar className="w-4 h-4" /><span>{formatDateRange(featuredConference.startDate, featuredConference.endDate)}</span></div>
                )}
                {featuredConference.location && (
                  <div className="flex items-center gap-2"><HiOutlineLocationMarker className="w-4 h-4" /><span>{featuredConference.location.city}, {featuredConference.location.country}</span></div>
                )}
                {featuredConference.expectedAttendees && (
                  <div className="flex items-center gap-2"><HiOutlineUserGroup className="w-4 h-4" /><span>{featuredConference.expectedAttendees.toLocaleString()}+ Attendees</span></div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => { setSelectedConference(featuredConference); setShowRegisterModal(true); setRegistrationStep(1); }} className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                  <HiOutlineTicket className="w-5 h-5" />Register Now<HiOutlineArrowRight className="w-4 h-4" />
                </button>
                {featuredConference.isVirtual && featuredConference.liveStreamUrl && (
                  <button onClick={() => { setVirtualConference(featuredConference); setShowVirtualLobby(true); }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all">
                    <HiOutlineVideoCamera className="w-5 h-5" />Join Virtual Lobby
                  </button>
                )}
                <button onClick={() => { setAgendaConference(featuredConference); setShowAgendaModal(true); }} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all">
                  <HiOutlineDocumentText className="w-5 h-5" />View Agenda
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
              {tab.icon === 'calendar' ? <HiOutlineCalendar className="w-4 h-4" /> : tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> : tab.icon === 'desktop' ? <HiOutlineDesktopComputer className="w-4 h-4" /> : <HiOutlineBuildingOffice className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        {activeTab !== 'compare' && (
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><HiOutlineSearch className="w-5 h-5 text-gray-400" /></div>
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search conferences by name, location..." className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label><select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">{regions.map(r => <option key={r} value={r}>{r === 'all' ? 'All Regions' : r}</option>)}</select></div>
                  <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Conference Type</label><select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">{conferenceTypes.map(t => <option key={t} value={t}>{t === 'all' ? 'All Types' : t}</option>)}</select></div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Conferences Grid/List */}
        {displayedConferences.length === 0 ? (
          <div className="text-center py-12"><HiOutlineBuildingOffice className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" /><p className="text-gray-500 dark:text-gray-400">No conferences found matching your criteria.</p><button onClick={() => { setSearchQuery(''); setSelectedRegion('all'); setSelectedType('all'); }} className="mt-4 text-blue-600 hover:underline">Clear filters</button></div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedConferences.map((conference) => {
              const countdown = countdowns[conference.id];
              const isUpcoming = activeTab === 'upcoming' && countdown && !countdown.expired;
              const isBookmarked = bookmarkedConferences.includes(conference.id);
              const isCompared = compareList.includes(conference.id);
              const earlyBirdPrice = getEarlyBirdPrice(conference.tickets);

              return (
                <div key={conference.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  {conference.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img src={conference.image} alt={conference.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {conference.type && <span className="absolute top-4 left-4 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">{conference.type}</span>}
                      {conference.isVirtual && <span className="absolute top-4 left-20 text-xs bg-purple-600 text-white px-2 py-1 rounded-full">Virtual</span>}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button onClick={(e) => toggleCompare(conference.id, e)} className={`w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors ${isCompared ? 'bg-green-600 text-white' : 'bg-black/50 text-white hover:bg-black/70'}`} title={isCompared ? 'Remove from compare' : 'Add to compare'}><HiOutlineChartBar className="w-4 h-4" /></button>
                        <button onClick={(e) => toggleBookmark(conference.id, e)} className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70"><HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-400' : ''}`} /></button>
                        <button onClick={(e) => shareConferenceHandler(conference, e)} className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70"><HiOutlineShare className="w-4 h-4" /></button>
                      </div>
                      {isUpcoming && countdown && (<div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-center"><div className="flex gap-2 text-xs"><div><span className="font-bold text-lg">{countdown.days}</span><span className="text-xs ml-0.5">d</span></div><div><span className="font-bold text-lg">{countdown.hours}</span><span className="text-xs ml-0.5">h</span></div></div></div>)}
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{conference.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{conference.description}</p>
                    <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      {conference.startDate && (<div className="flex items-center gap-2"><HiOutlineCalendar className="w-4 h-4 shrink-0" /><span>{formatDateRange(conference.startDate, conference.endDate)}</span></div>)}
                      {conference.location && (<div className="flex items-center gap-2"><HiOutlineLocationMarker className="w-4 h-4 shrink-0" /><span>{conference.location.city}, {conference.location.country}</span></div>)}
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {conference.expectedAttendees && (<div className="flex items-center gap-1 text-xs text-gray-500"><HiOutlineUserGroup className="w-3 h-3" /><span>{conference.expectedAttendees.toLocaleString()}+</span></div>)}
                      {conference.speakers && conference.speakers.length > 0 && (<div className="flex items-center gap-1 text-xs text-gray-500"><HiOutlineMicrophone className="w-3 h-3" /><span>{conference.speakers.length}+ Speakers</span></div>)}
                    </div>
                    <div className="mb-4">
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{getTicketPrice(conference.tickets)}</span>
                      {earlyBirdPrice && earlyBirdPrice > 0 && (<span className="ml-2 text-xs text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">Early Bird ${earlyBirdPrice}</span>)}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button onClick={() => { setSelectedConference(conference); setShowRegisterModal(true); setRegistrationStep(1); }} className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm"><HiOutlineTicket className="w-4 h-4" />Register</button>
                      {conference.isVirtual && conference.liveStreamUrl && (<button onClick={() => { setVirtualConference(conference); setShowVirtualLobby(true); }} className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-semibold text-sm"><HiOutlineVideoCamera className="w-4 h-4" />Join</button>)}
                      <button onClick={() => { setAgendaConference(conference); setShowAgendaModal(true); }} className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm"><HiOutlineDocumentText className="w-4 h-4" /></button>
                      <button onClick={() => setSelectedConference(selectedConference === conference.id ? null : conference.id)} className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">{selectedConference === conference.id ? 'Less' : 'More'}</button>
                    </div>
                    {selectedConference === conference.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        {conference.speakers && conference.speakers.length > 0 && (
                          <div className="mb-3"><p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Featured Speakers:</p><div className="flex flex-wrap gap-2">{conference.speakers.slice(0, 3).map((speaker, idx) => (<button key={idx} onClick={() => { setSelectedSpeaker(speaker); setShowSpeakerModal(true); }} className="flex items-center gap-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200">{speaker.avatar ? <img src={speaker.avatar} alt={speaker.name} className="w-6 h-6 rounded-full" /> : <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"><HiOutlineUser className="w-3 h-3 text-blue-600" /></div>}<span className="text-xs text-gray-700 dark:text-gray-300">{speaker.name}</span></button>))}{conference.speakers.length > 3 && <span className="text-xs text-gray-500">+{conference.speakers.length - 3} more</span>}</div></div>
                        )}
                        {conference.agenda && conference.agenda.length > 0 && (<div className="mb-3"><p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Sessions:</p><ul className="space-y-1">{conference.agenda.slice(0, 2).map((item, idx) => (<li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"><HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" /><span>{typeof item === 'string' ? item : item.topic}</span></li>))}</ul></div>)}
                        <div className="flex flex-wrap gap-2 mt-2">
                          <button onClick={() => { setNetworkingConference(conference); setShowNetworkingModal(true); }} className="text-xs text-blue-600 hover:underline flex items-center gap-1"><HiOutlineUserGroup className="w-3 h-3" />Networking</button>
                          {conference.certificateAvailable && (<button onClick={() => { setCertificateConference(conference); setShowCertificateModal(true); }} className="text-xs text-green-600 hover:underline flex items-center gap-1"><HiOutlineBadgeCheck className="w-3 h-3" />Get Certificate</button>)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {displayedConferences.map((conference) => {
              const isBookmarked = bookmarkedConferences.includes(conference.id);
              const isCompared = compareList.includes(conference.id);
              return (
                <div key={conference.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row gap-6">
                    {conference.image && (<div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0"><img src={conference.image} alt={conference.title} className="w-full h-full object-cover" /></div>)}
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{conference.title}</h3>
                        <div className="flex gap-2">
                          <button onClick={(e) => toggleCompare(conference.id, e)} className={`p-2 rounded-lg transition-colors ${isCompared ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}><HiOutlineChartBar className="w-4 h-4" /></button>
                          <button onClick={(e) => toggleBookmark(conference.id, e)} className={`p-2 rounded-lg transition-colors ${isBookmarked ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'}`}><HiOutlineBookmark className="w-4 h-4" /></button>
                          <button onClick={(e) => shareConferenceHandler(conference, e)} className="p-2 rounded-lg bg-gray-100 text-gray-600"><HiOutlineShare className="w-4 h-4" /></button>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{conference.description}</p>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                        {conference.startDate && <div className="flex items-center gap-1"><HiOutlineCalendar className="w-4 h-4" />{formatDateRange(conference.startDate, conference.endDate)}</div>}
                        {conference.location && <div className="flex items-center gap-1"><HiOutlineLocationMarker className="w-4 h-4" />{conference.location.city}, {conference.location.country}</div>}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button onClick={() => { setSelectedConference(conference); setShowRegisterModal(true); setRegistrationStep(1); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">Register</button>
                        {conference.isVirtual && conference.liveStreamUrl && (<button onClick={() => { setVirtualConference(conference); setShowVirtualLobby(true); }} className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold">Join Virtual</button>)}
                        <button onClick={() => { setAgendaConference(conference); setShowAgendaModal(true); }} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold">View Agenda</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Multi-Step Registration Modal */}
        {showRegisterModal && selectedConference && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowRegisterModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()} ref={modalRef}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <div><h3 className="text-white font-bold text-lg">Register for Conference</h3><p className="text-blue-100 text-xs mt-1 line-clamp-1">{selectedConference.title}</p></div>
                  <button onClick={() => setShowRegisterModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className={`w-2 h-2 rounded-full transition-all ${registrationStep === 1 ? 'w-6 bg-white' : 'bg-white/50'}`} />
                  <div className={`w-2 h-2 rounded-full transition-all ${registrationStep === 2 ? 'w-6 bg-white' : 'bg-white/50'}`} />
                </div>
              </div>
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineCheckCircle className="w-8 h-8 text-green-600" /></div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Registration Confirmed!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">We've sent the conference details to your email address.</p>
                    <p className="text-xs text-gray-500">Registration ID: <span className="font-mono">{registrationId}</span></p>
                  </div>
                ) : (
                  <form>
                    {registrationStep === 1 && (
                      <div className="space-y-4">
                        <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"><p className="text-sm text-gray-600 dark:text-gray-400">{formatDateRange(selectedConference.startDate, selectedConference.endDate)} • {selectedConference.location?.city}, {selectedConference.location?.country}</p></div>
                        <div><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}</div>
                        <div><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email address *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}</div>
                        <div><input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.company ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />{errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}</div>
                        <div className="grid grid-cols-2 gap-3">
                          <input type="text" name="role" value={formData.role} onChange={handleInputChange} placeholder="Job title" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl" />
                          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl" />
                        </div>
                        <select name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl"><option value="">Select country</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select>
                      </div>
                    )}
                    {registrationStep === 2 && (
                      <div className="space-y-4">
                        <select name="ticketType" value={formData.ticketType} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl"><option value="standard">Standard Ticket - {getTicketPrice(selectedConference.tickets)}</option><option value="vip">VIP Ticket</option><option value="exhibitor">Exhibitor Pass</option></select>
                        <select name="dietary" value={formData.dietary} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl"><option value="">Dietary preferences</option><option value="vegetarian">Vegetarian</option><option value="vegan">Vegan</option><option value="gluten-free">Gluten-free</option><option value="halal">Halal</option></select>
                        {selectedConference.sessions && selectedConference.sessions.length > 0 && (
                          <div><p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Sessions to Attend:</p><div className="space-y-2 max-h-48 overflow-y-auto">{selectedConference.sessions.map(session => (<label key={session.id} className="flex items-start gap-2 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"><input type="checkbox" checked={selectedSessions.includes(session.id)} onChange={() => handleSessionToggle(session.id)} className="w-4 h-4 mt-0.5" /><div><p className="text-sm font-medium text-gray-800 dark:text-gray-200">{session.title}</p><p className="text-xs text-gray-500">{session.time} • {session.speaker}</p></div></label>))}</div></div>
                        )}
                        <textarea name="questions" value={formData.questions} onChange={handleInputChange} placeholder="Any questions for the organizers?" rows="2" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl resize-none" />
                        <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="w-4 h-4" /><span className="text-sm text-gray-600 dark:text-gray-400">Subscribe to conference updates</span></label>
                        <label className={`flex items-start gap-2 cursor-pointer ${errors.terms ? 'text-red-500' : ''}`}><input type="checkbox" name="terms" checked={formData.terms} onChange={handleInputChange} className="w-4 h-4 mt-0.5" /><span className="text-sm text-gray-600 dark:text-gray-400">I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> *</span></label>
                        {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
                      </div>
                    )}
                    <div className="flex gap-3 mt-6">
                      {registrationStep === 2 && (<button type="button" onClick={handlePrevStep} className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50">Back</button>)}
                      <button type="button" onClick={handleNextStep} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all">{registrationStep === 1 ? 'Next' : 'Complete Registration'}<HiOutlineArrowRight className="inline ml-2 w-4 h-4" /></button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Virtual Lobby Modal */}
        {showVirtualLobby && virtualConference && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowVirtualLobby(false)}>
            <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                <div><h3 className="text-white font-bold text-lg">Virtual Lobby - {virtualConference.title}</h3><p className="text-blue-100 text-xs">Live streaming now</p></div>
                <button onClick={() => setShowVirtualLobby(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
              </div>
              <div className="relative">
                {virtualConference.liveStreamUrl ? (
                  <video ref={videoRef} src={virtualConference.liveStreamUrl} className="w-full aspect-video" controls autoPlay playsInline />
                ) : (
                  <div className="aspect-video bg-gray-900 flex items-center justify-center">
                    <div className="text-center"><div className="w-20 h-20 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-4"><div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" /></div><p className="text-white">Live stream will begin soon</p><p className="text-gray-400 text-sm mt-2">{formatDateRange(virtualConference.startDate, virtualConference.endDate)}</p></div>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="flex gap-2"><button className="px-3 py-1 bg-white/20 rounded-lg text-white text-sm">Chat</button><button className="px-3 py-1 bg-white/20 rounded-lg text-white text-sm">Q&A</button><button className="px-3 py-1 bg-white/20 rounded-lg text-white text-sm">Networking</button></div>
                  <div><button className="px-3 py-1 bg-white/20 rounded-lg text-white text-sm">Exit Lobby</button></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Agenda Modal */}
        {showAgendaModal && agendaConference && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAgendaModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4 flex items-center justify-between"><h3 className="text-white font-bold text-lg">Agenda - {agendaConference.title}</h3><button onClick={() => setShowAgendaModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {agendaConference.agenda && agendaConference.agenda.length > 0 ? (
                  <div className="space-y-4">{agendaConference.agenda.map((item, idx) => (<div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">{typeof item === 'object' ? (<><div className="flex items-center gap-2 mb-1"><HiOutlineClock className="w-4 h-4 text-gray-400" /><span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.time}</span>{item.location && <span className="text-xs text-gray-500">- {item.location}</span>}</div><p className="text-gray-800 dark:text-gray-200 font-medium">{item.topic}</p>{item.speaker && <p className="text-sm text-gray-500">Speaker: {item.speaker}</p>}{item.description && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>}</>) : (<p className="text-gray-800 dark:text-gray-200">{item}</p>)}</div>))}</div>
                ) : (<p className="text-center text-gray-500 py-8">Full agenda will be announced soon.</p>)}
              </div>
            </div>
          </div>
        )}

        {/* Networking Modal */}
        {showNetworkingModal && networkingConference && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowNetworkingModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4 flex items-center justify-between"><h3 className="text-white font-bold text-lg">Networking - {networkingConference.title}</h3><button onClick={() => setShowNetworkingModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div>
              <div className="p-6">
                <div className="text-center mb-4"><div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto"><HiOutlineUserGroup className="w-8 h-8 text-green-600" /></div><h4 className="text-lg font-bold text-gray-900 dark:text-white mt-3">Connect with Attendees</h4><p className="text-sm text-gray-500">Meet fellow professionals and expand your network</p></div>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {networkingConference.attendees?.slice(0, 5).map((attendee, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3">{attendee.avatar ? <img src={attendee.avatar} className="w-10 h-10 rounded-full" /> : <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><HiOutlineUser className="w-5 h-5 text-blue-600" /></div>}<div><p className="font-medium text-gray-900 dark:text-white text-sm">{attendee.name}</p><p className="text-xs text-gray-500">{attendee.title}, {attendee.company}</p></div></div>
                      <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-semibold">Connect</button>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg font-semibold">Join Networking Lounge</button>
              </div>
            </div>
          </div>
        )}

        {/* Speaker Modal */}
        {showSpeakerModal && selectedSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSpeakerModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4 flex items-center justify-between"><h3 className="text-white font-bold text-lg">Speaker Details</h3><button onClick={() => setShowSpeakerModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div>
              <div className="p-6 text-center">
                {selectedSpeaker.avatar ? <img src={selectedSpeaker.avatar} className="w-24 h-24 rounded-full mx-auto mb-4" /> : <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4"><HiOutlineUser className="w-12 h-12 text-blue-600" /></div>}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{selectedSpeaker.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{selectedSpeaker.title}, {selectedSpeaker.company}</p>
                {selectedSpeaker.verified && (<div className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full mb-3"><HiOutlineBadgeCheck className="w-3 h-3" />Verified Speaker</div>)}
                <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedSpeaker.bio}</p>
                {selectedSpeaker.session && (<div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-left"><p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Session:</p><p className="text-sm text-gray-600 dark:text-gray-400">{selectedSpeaker.session}</p></div>)}
              </div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareConference && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4"><div className="flex items-center justify-between"><h3 className="font-bold text-gray-900 dark:text-white">Share Conference</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div>
              <div className="p-6"><p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareConference.title}</p><div className="flex flex-col gap-3"><button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"><HiOutlineLink className="w-4 h-4" />Copy Link</button><button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareConference.title)}&body=${encodeURIComponent(`${shareConference.title}\n${shareConference.description}\n\n${window.location.origin}/conferences/${shareConference.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200"><HiOutlineMail className="w-4 h-4" />Share via Email</button></div></div>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {showCertificateModal && certificateConference && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCertificateModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Certificate of Attendance</h3><button onClick={() => setShowCertificateModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 text-center"><div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineBadgeCheck className="w-10 h-10 text-green-600" /></div><h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{certificateConference.title}</h4><p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Complete the conference survey to download your certificate of attendance.</p><button onClick={downloadCertificate} className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"><HiOutlineDownload className="w-5 h-5" />Download Certificate</button></div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-grid-white { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
      `}</style>
    </section>
  );
};

export default IndustryConferencesSection3;