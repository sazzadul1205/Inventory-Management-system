// page/frontend/Events/IndustryConferencesSection/IndustryConferencesSection2.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
  HiOutlineTicket,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineMap,
  HiOutlineStar,
  HiOutlineMicrophone,
  HiOutlineChartBar,
  HiOutlineMail,
  HiOutlineLink,
  HiOutlineExternalLink,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineDocumentText,
  HiOutlineBadgeCheck,
} from 'react-icons/hi';
import { HiOutlineUser, HiOutlineTrophy, HiOutlineBuildingOffice, } from 'react-icons/hi2';

const IndustryConferencesSection2 = ({ config }) => {
  const [selectedConference, setSelectedConference] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    ticketType: 'standard',
    dietary: '',
    questions: '',
    newsletter: false,
    terms: false,
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
  const [showMapModal, setShowMapModal] = useState(false);
  const [mapConference, setMapConference] = useState(null);
  const [showAgendaModal, setShowAgendaModal] = useState(false);
  const [agendaConference, setAgendaConference] = useState(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [showSpeakerModal, setShowSpeakerModal] = useState(false);
  const [compareList, setCompareList] = useState([]);

  const modalRef = useRef(null);

  // Get data from config
  const conferences = useMemo(() => config?.conferences || [], [config?.conferences]);
  const stats = config?.stats || [];
  const featuredConferenceId = config?.featuredConferenceId || (conferences[0]?.id);

  // Featured conference
  const featuredConference = conferences.find(c => c.id === featuredConferenceId) || conferences[0];

  // Get unique regions and types from conferences
  const regions = useMemo(() => {
    const regs = new Set(conferences.map(c => c.region).filter(Boolean));
    return ['all', ...Array.from(regs)];
  }, [conferences]);

  const conferenceTypes = useMemo(() => {
    const types = new Set(conferences.map(c => c.type).filter(Boolean));
    return ['all', ...Array.from(types)];
  }, [conferences]);

  const tabs = config?.tabs || [
    { id: 'upcoming', label: 'Upcoming Conferences', icon: 'calendar' },
    { id: 'featured', label: 'Featured', icon: 'star' },
    { id: 'compare', label: 'Compare', icon: 'chart' },
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

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('conferenceBookmarks');
    if (saved) {
      setBookmarkedConferences(JSON.parse(saved));
    }
    const savedCompare = localStorage.getItem('conferenceCompare');
    if (savedCompare) {
      setCompareList(JSON.parse(savedCompare));
    }
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('conferenceBookmarks', JSON.stringify(bookmarkedConferences));
  }, [bookmarkedConferences]);

  // Save compare list to localStorage
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

  const featuredConferences = conferences.filter(c => c.isFeatured || c.id === featuredConferenceId);

  // Filter by search, region, and type
  const filterConferences = (conferenceList) => {
    return conferenceList.filter((c) => {
      const matchesSearch = searchQuery === '' ||
        c.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.location?.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.location?.country?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.organizer?.name?.toLowerCase().includes(searchQuery.toLowerCase());

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
  } else if (activeTab === 'compare') {
    displayedConferences = conferences.filter(c => compareList.includes(c.id));
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
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.terms) newErrors.terms = 'You must agree to the terms';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowRegisterModal(false);
      setFormData({
        name: '', email: '', company: '', role: '', ticketType: 'standard',
        dietary: '', questions: '', newsletter: false, terms: false
      });
    }, 3000);
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

  // Copy link to clipboard
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

  // Get ticket price display
  const getTicketPrice = (tickets) => {
    if (!tickets || tickets.length === 0) return 'Free';
    const prices = tickets.map(t => t.price).filter(p => p > 0);
    if (prices.length === 0) return 'Free';
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    if (minPrice === maxPrice) return `$${minPrice}`;
    return `$${minPrice} - $${maxPrice}`;
  };

  // Get early bird price if available
  const getEarlyBirdPrice = (tickets) => {
    if (!tickets) return null;
    const earlyBird = tickets.find(t => t.name?.toLowerCase().includes('early'));
    return earlyBird ? earlyBird.price : null;
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Industry Conferences Center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineBuildingOffice className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Global Events"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Premier"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Industry Conferences"}</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Join the world's leading supply chain and logistics conferences. Network with industry experts, discover cutting-edge solutions, and shape the future of supply chain management."}
            </p>
          </div>

          {/* Stats Cards */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  {stat.trend && (
                    <div className={`text-xs mt-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.trend}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Featured Conference Banner with Map */}
        {featuredConference && activeTab === 'upcoming' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white" />
            </div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Conference</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredConference.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredConference.description}</p>

              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredConference.startDate && (
                  <div className="flex items-center gap-2">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span>{formatDateRange(featuredConference.startDate, featuredConference.endDate)}</span>
                  </div>
                )}
                {featuredConference.location && (
                  <div className="flex items-center gap-2">
                    <HiOutlineLocationMarker className="w-4 h-4" />
                    <span>{featuredConference.location.city}, {featuredConference.location.country}</span>
                  </div>
                )}
                {featuredConference.expectedAttendees && (
                  <div className="flex items-center gap-2">
                    <HiOutlineUserGroup className="w-4 h-4" />
                    <span>{featuredConference.expectedAttendees.toLocaleString()}+ Attendees</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setSelectedConference(featuredConference);
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
                    setMapConference(featuredConference);
                    setShowMapModal(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                >
                  <HiOutlineMap className="w-5 h-5" />
                  View Venue Map
                </button>
                <button
                  onClick={() => {
                    setAgendaConference(featuredConference);
                    setShowAgendaModal(true);
                  }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                >
                  <HiOutlineDocumentText className="w-5 h-5" />
                  View Agenda
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
                  tab.icon === 'chart' ? <HiOutlineChartBar className="w-4 h-4" /> :
                    <HiOutlineBuildingOffice className="w-4 h-4" />}
              {tab.label}
              {tab.id === 'compare' && compareList.length > 0 && (
                <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">
                  {compareList.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        {activeTab !== 'compare' && (
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
                  placeholder="Search conferences by name, location, or organizer..."
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
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Conference Type</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {conferenceTypes.map((type) => (
                        <option key={type} value={type}>
                          {type === 'all' ? 'All Types' : type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Compare Tab */}
        {activeTab === 'compare' && (
          <div className="mb-12">
            {compareList.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <HiOutlineChartBar className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400 mb-4">No conferences selected for comparison</p>
                <p className="text-sm text-gray-400">Click the compare icon on any conference card to add it here</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="p-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                      {compareList.map(id => {
                        const conf = conferences.find(c => c.id === id);
                        return (
                          <th key={id} className="p-4 text-left min-w-64">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-gray-900 dark:text-white">{conf?.title}</span>
                              <button
                                onClick={() => setCompareList(compareList.filter(i => i !== id))}
                                className="text-gray-400 hover:text-red-500"
                              >
                                <HiOutlineX className="w-4 h-4" />
                              </button>
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400 font-medium">Dates</td>
                      {compareList.map(id => {
                        const conf = conferences.find(c => c.id === id);
                        return (
                          <td key={id} className="p-4 text-sm text-gray-600 dark:text-gray-400">
                            {formatDateRange(conf?.startDate, conf?.endDate)}
                          </td>
                        );
                      })}
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400 font-medium">Location</td>
                      {compareList.map(id => {
                        const conf = conferences.find(c => c.id === id);
                        return (
                          <td key={id} className="p-4 text-sm text-gray-600 dark:text-gray-400">
                            {conf?.location?.city}, {conf?.location?.country}
                          </td>
                        );
                      })}
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400 font-medium">Attendees</td>
                      {compareList.map(id => {
                        const conf = conferences.find(c => c.id === id);
                        return (
                          <td key={id} className="p-4 text-sm text-gray-600 dark:text-gray-400">
                            {conf?.expectedAttendees?.toLocaleString() || 'N/A'}+
                          </td>
                        );
                      })}
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400 font-medium">Speakers</td>
                      {compareList.map(id => {
                        const conf = conferences.find(c => c.id === id);
                        return (
                          <td key={id} className="p-4 text-sm text-gray-600 dark:text-gray-400">
                            {conf?.speakers?.length || 0}+
                          </td>
                        );
                      })}
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400 font-medium">Ticket Price</td>
                      {compareList.map(id => {
                        const conf = conferences.find(c => c.id === id);
                        return (
                          <td key={id} className="p-4 text-sm text-gray-600 dark:text-gray-400">
                            {getTicketPrice(conf?.tickets)}
                          </td>
                        );
                      })}
                    </tr>
                    <tr>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400 font-medium">Actions</td>
                      {compareList.map(id => {
                        const conf = conferences.find(c => c.id === id);
                        return (
                          <td key={id} className="p-4">
                            <button
                              onClick={() => {
                                setSelectedConference(conf);
                                setShowRegisterModal(true);
                              }}
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                            >
                              Register
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Conferences Grid/List */}
        {activeTab !== 'compare' && (
          <div>
            {displayedConferences.length === 0 ? (
              <div className="text-center py-12">
                <HiOutlineBuildingOffice className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No conferences found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedRegion('all');
                    setSelectedType('all');
                  }}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {displayedConferences.map((conference) => {
                  const countdown = countdowns[conference.id];
                  const isUpcoming = activeTab === 'upcoming' && countdown && !countdown.expired;
                  const isBookmarked = bookmarkedConferences.includes(conference.id);
                  const isCompared = compareList.includes(conference.id);
                  const earlyBirdPrice = getEarlyBirdPrice(conference.tickets);

                  return (
                    <div
                      key={conference.id}
                      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                    >
                      {/* Image */}
                      {conference.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={conference.image}
                            alt={conference.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {conference.type && (
                            <span className="absolute top-4 left-4 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                              {conference.type}
                            </span>
                          )}

                          {/* Action Buttons Overlay */}
                          <div className="absolute top-4 right-4 flex gap-2">
                            <button
                              onClick={(e) => toggleCompare(conference.id, e)}
                              className={`w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors ${isCompared
                                ? 'bg-green-600 text-white'
                                : 'bg-black/50 text-white hover:bg-black/70'
                                }`}
                              title={isCompared ? 'Remove from compare' : 'Add to compare'}
                            >
                              <HiOutlineChartBar className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => toggleBookmark(conference.id, e)}
                              className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                            >
                              <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-400' : ''}`} />
                            </button>
                            <button
                              onClick={(e) => shareConferenceHandler(conference, e)}
                              className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                            >
                              <HiOutlineShare className="w-4 h-4" />
                            </button>
                          </div>

                          {isUpcoming && countdown && (
                            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-center">
                              <div className="flex gap-2 text-xs">
                                <div>
                                  <span className="font-bold text-lg">{countdown.days}</span>
                                  <span className="text-xs ml-0.5">d</span>
                                </div>
                                <div>
                                  <span className="font-bold text-lg">{countdown.hours}</span>
                                  <span className="text-xs ml-0.5">h</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="p-6">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                          {conference.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                          {conference.description}
                        </p>

                        {/* Date & Location */}
                        <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                          {conference.startDate && (
                            <div className="flex items-center gap-2">
                              <HiOutlineCalendar className="w-4 h-4 shrink-0" />
                              <span>{formatDateRange(conference.startDate, conference.endDate)}</span>
                            </div>
                          )}
                          {conference.location && (
                            <div className="flex items-center gap-2">
                              <HiOutlineLocationMarker className="w-4 h-4 shrink-0" />
                              <span>{conference.location.city}, {conference.location.country}</span>
                            </div>
                          )}
                        </div>

                        {/* Key Metrics */}
                        <div className="flex flex-wrap gap-3 mb-4">
                          {conference.expectedAttendees && (
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <HiOutlineUserGroup className="w-3 h-3" />
                              <span>{conference.expectedAttendees.toLocaleString()}+</span>
                            </div>
                          )}
                          {conference.speakers && conference.speakers.length > 0 && (
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <HiOutlineMicrophone className="w-3 h-3" />
                              <span>{conference.speakers.length}+ Speakers</span>
                            </div>
                          )}
                        </div>

                        {/* Ticket Price with Early Bird */}
                        <div className="mb-4">
                          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            {getTicketPrice(conference.tickets)}
                          </span>
                          {earlyBirdPrice && earlyBirdPrice > 0 && (
                            <span className="ml-2 text-xs text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                              Early Bird ${earlyBirdPrice}
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                          <button
                            onClick={() => {
                              setSelectedConference(conference);
                              setShowRegisterModal(true);
                            }}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                          >
                            <HiOutlineTicket className="w-4 h-4" />
                            {activeTab === 'upcoming' ? 'Register' : 'View Details'}
                          </button>

                          <button
                            onClick={() => {
                              setAgendaConference(conference);
                              setShowAgendaModal(true);
                            }}
                            className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                          >
                            <HiOutlineDocumentText className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => setSelectedConference(selectedConference === conference.id ? null : conference.id)}
                            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                          >
                            {selectedConference === conference.id ? 'Less' : 'More'}
                          </button>
                        </div>

                        {/* Expanded Details with Speakers */}
                        {selectedConference === conference.id && (
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                            {conference.speakers && conference.speakers.length > 0 && (
                              <div className="mb-3">
                                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Featured Speakers:</p>
                                <div className="flex flex-wrap gap-2">
                                  {conference.speakers.slice(0, 3).map((speaker, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => {
                                        setSelectedSpeaker(speaker);
                                        setShowSpeakerModal(true);
                                      }}
                                      className="flex items-center gap-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                      {speaker.avatar ? (
                                        <img src={speaker.avatar} alt={speaker.name} className="w-6 h-6 rounded-full object-cover" />
                                      ) : (
                                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                          <HiOutlineUser className="w-3 h-3 text-blue-600" />
                                        </div>
                                      )}
                                      <span className="text-xs text-gray-700 dark:text-gray-300">{speaker.name}</span>
                                    </button>
                                  ))}
                                  {conference.speakers.length > 3 && (
                                    <span className="text-xs text-gray-500">+{conference.speakers.length - 3} more</span>
                                  )}
                                </div>
                              </div>
                            )}

                            {conference.agenda && conference.agenda.length > 0 && (
                              <div className="mb-3">
                                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Sessions:</p>
                                <ul className="space-y-1">
                                  {conference.agenda.slice(0, 2).map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                      <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                      <span>{typeof item === 'string' ? item : item.topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="flex flex-wrap gap-2 mt-2">
                              <button
                                onClick={() => {
                                  setMapConference(conference);
                                  setShowMapModal(true);
                                }}
                                className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                              >
                                <HiOutlineMap className="w-3 h-3" />
                                View Venue
                              </button>
                              {conference.website && (
                                <button
                                  onClick={() => window.open(conference.website, '_blank')}
                                  className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                                >
                                  <HiOutlineExternalLink className="w-3 h-3" />
                                  Official Website
                                </button>
                              )}
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
                    <div
                      key={conference.id}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        {conference.image && (
                          <div className="md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                            <img src={conference.image} alt={conference.title} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{conference.title}</h3>
                            <div className="flex gap-2">
                              <button onClick={(e) => toggleCompare(conference.id, e)} className={`p-2 rounded-lg transition-colors ${isCompared ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                                <HiOutlineChartBar className="w-4 h-4" />
                              </button>
                              <button onClick={(e) => toggleBookmark(conference.id, e)} className={`p-2 rounded-lg transition-colors ${isBookmarked ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'}`}>
                                <HiOutlineBookmark className="w-4 h-4" />
                              </button>
                              <button onClick={(e) => shareConferenceHandler(conference, e)} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
                                <HiOutlineShare className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{conference.description}</p>
                          <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                            {conference.startDate && <div className="flex items-center gap-1"><HiOutlineCalendar className="w-4 h-4" />{formatDateRange(conference.startDate, conference.endDate)}</div>}
                            {conference.location && <div className="flex items-center gap-1"><HiOutlineLocationMarker className="w-4 h-4" />{conference.location.city}, {conference.location.country}</div>}
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <button onClick={() => { setSelectedConference(conference); setShowRegisterModal(true); }} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700">Register</button>
                            <button onClick={() => { setAgendaConference(conference); setShowAgendaModal(true); }} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold">View Agenda</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Registration Modal */}
        {showRegisterModal && selectedConference && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowRegisterModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()} ref={modalRef}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Register for Conference</h3>
                    <p className="text-blue-100 text-xs mt-1 line-clamp-1">{selectedConference.title}</p>
                  </div>
                  <button onClick={() => setShowRegisterModal(false)} className="text-white hover:text-gray-200"><HiOutlineX className="w-6 h-6" /></button>
                </div>
              </div>

              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Registration Received!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">We've sent the conference details to your email address.</p>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}</div>
                    <div><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email address *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}</div>
                    <div><input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.company ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />{errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}</div>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" name="role" value={formData.role} onChange={handleInputChange} placeholder="Job title" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <select name="ticketType" value={formData.ticketType} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="standard">Standard Ticket</option>
                        <option value="vip">VIP Ticket</option>
                        <option value="exhibitor">Exhibitor Pass</option>
                      </select>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="w-4 h-4" /><span className="text-sm text-gray-600 dark:text-gray-400">Subscribe to conference updates</span></label>
                    <label className={`flex items-start gap-2 cursor-pointer ${errors.terms ? 'text-red-500' : ''}`}><input type="checkbox" name="terms" checked={formData.terms} onChange={handleInputChange} className="w-4 h-4 mt-0.5" /><span className="text-sm text-gray-600 dark:text-gray-400">I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> *</span></label>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">Complete Registration<HiOutlineArrowRight className="inline ml-2 w-4 h-4" /></button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Venue Map Modal */}
        {showMapModal && mapConference && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowMapModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4 flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">Venue Map - {mapConference.title}</h3>
                <button onClick={() => setShowMapModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
              </div>
              <div className="p-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl h-96 flex items-center justify-center">
                  {mapConference.mapImage ? (
                    <img src={mapConference.mapImage} alt="Venue Map" className="w-full h-full object-contain" />
                  ) : (
                    <div className="text-center">
                      <HiOutlineMap className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-500">Interactive venue map will be available closer to the event date.</p>
                      <p className="text-sm text-gray-400 mt-2">{mapConference.location?.venue}, {mapConference.location?.city}</p>
                    </div>
                  )}
                </div>
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400"><span className="font-semibold">Venue:</span> {mapConference.location?.venue || 'TBA'}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1"><span className="font-semibold">Address:</span> {mapConference.location?.address || mapConference.location?.city}, {mapConference.location?.country}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Agenda Modal */}
        {showAgendaModal && agendaConference && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowAgendaModal(false)}>
            <div className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-purple-600 p-4 flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">Conference Agenda - {agendaConference.title}</h3>
                <button onClick={() => setShowAgendaModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {agendaConference.agenda && agendaConference.agenda.length > 0 ? (
                  <div className="space-y-4">
                    {agendaConference.agenda.map((item, idx) => (
                      <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                        {typeof item === 'object' ? (
                          <>
                            <div className="flex items-center gap-2 mb-1">
                              <HiOutlineClock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.time}</span>
                              {item.location && <span className="text-xs text-gray-500">- {item.location}</span>}
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 font-medium">{item.topic}</p>
                            {item.speaker && <p className="text-sm text-gray-500">Speaker: {item.speaker}</p>}
                            {item.description && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>}
                          </>
                        ) : (
                          <p className="text-gray-800 dark:text-gray-200">{item}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-8">Full agenda will be announced soon.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Speaker Modal */}
        {showSpeakerModal && selectedSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSpeakerModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4 flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">Speaker Details</h3>
                <button onClick={() => setShowSpeakerModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button>
              </div>
              <div className="p-6 text-center">
                {selectedSpeaker.avatar ? (
                  <img src={selectedSpeaker.avatar} alt={selectedSpeaker.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <HiOutlineUser className="w-12 h-12 text-blue-600" />
                  </div>
                )}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{selectedSpeaker.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{selectedSpeaker.title}, {selectedSpeaker.company}</p>
                {selectedSpeaker.verified && (
                  <div className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full mb-3">
                    <HiOutlineBadgeCheck className="w-3 h-3" />
                    Verified Speaker
                  </div>
                )}
                <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedSpeaker.bio}</p>
                {selectedSpeaker.session && (
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-left">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Session:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedSpeaker.session}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareConference && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4"><div className="flex items-center justify-between"><h3 className="font-bold text-gray-900 dark:text-white">Share Conference</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareConference.title}</p>
                <div className="flex flex-col gap-3">
                  <button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"><HiOutlineLink className="w-4 h-4" />Copy Link</button>
                  <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareConference.title)}&body=${encodeURIComponent(`${shareConference.title}\n${shareConference.description}\n\n${shareConference.location?.city}, ${shareConference.location?.country}\n\n${window.location.origin}/conferences/${shareConference.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200"><HiOutlineMail className="w-4 h-4" />Share via Email</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default IndustryConferencesSection2;