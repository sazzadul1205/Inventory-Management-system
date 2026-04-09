// page/frontend/Events/IndustryConferencesSection/IndustryConferencesSection1.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineTicket,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineStar,
  HiOutlineMicrophone,
  HiOutlineUsers,
  HiOutlineBell,
  HiOutlineMail,
  HiOutlineLink,
  HiOutlineExternalLink,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from 'react-icons/hi';
import { HiOutlineTrophy, HiOutlineBuildingOffice } from 'react-icons/hi2';

const IndustryConferencesSection1 = ({ config }) => {
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
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('upcoming');
  const [countdowns, setCountdowns] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedConferences, setBookmarkedConferences] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareConference, setShareConference] = useState(null);
  const modalRef = useRef(null);

  // Get data from config
  const conferences = useMemo(() => config?.conferences || [], [config?.conferences]);
  const stats = config?.stats || [];
  const featuredConferenceId = config?.featuredConferenceId || (conferences[0]?.id);

  // Featured conference
  const featuredConference = conferences.find(c => c.id === featuredConferenceId) || conferences[0];

  // Get unique regions from conferences
  const regions = useMemo(() => {
    const reg = new Set(conferences.map(c => c.region).filter(Boolean));
    return ['all', ...Array.from(reg)];
  }, [conferences]);

  const tabs = config?.tabs || [
    { id: 'upcoming', label: 'Upcoming Conferences', icon: 'calendar' },
    { id: 'featured', label: 'Featured', icon: 'star' },
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
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('conferenceBookmarks', JSON.stringify(bookmarkedConferences));
  }, [bookmarkedConferences]);

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

  // Filter by search and region
  const filterConferences = (conferenceList) => {
    return conferenceList.filter((c) => {
      const matchesSearch = searchQuery === '' ||
        c.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.location?.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.location?.country?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.organizer?.name?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion = selectedRegion === 'all' || c.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  };

  let displayedConferences = [];
  if (activeTab === 'upcoming') {
    displayedConferences = filterConferences(upcomingConferences);
  } else if (activeTab === 'past') {
    displayedConferences = filterConferences(pastConferences);
  } else {
    displayedConferences = filterConferences(featuredConferences);
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
        dietary: '', questions: ''
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

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry Conferences Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineBuildingOffice className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Industry Events"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Leading"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Industry Conferences"}</span> {config?.title?.suffix || ""}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Join the world's leading supply chain and logistics conferences. Network with industry experts, discover cutting-edge solutions, and shape the future of supply chain management."}
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
                      stat.icon === 'globe' ? <HiOutlineGlobe className="w-5 h-5 text-blue-600" /> :
                        <HiOutlineBuildingOffice className="w-5 h-5 text-blue-600" />}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Conference Banner */}
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
                  onClick={() => window.open(featuredConference.website, '_blank')}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                >
                  <HiOutlineExternalLink className="w-5 h-5" />
                  Visit Website
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
                  <HiOutlineBuildingOffice className="w-4 h-4" />}
              {tab.label}
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
              </div>
            </div>
          )}
        </div>

        {/* Conferences Grid */}
        {displayedConferences.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineBuildingOffice className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No conferences found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedConferences.map((conference) => {
              const countdown = countdowns[conference.id];
              const isUpcoming = activeTab === 'upcoming' && countdown && !countdown.expired;
              const isBookmarked = bookmarkedConferences.includes(conference.id);

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
                          <span>{conference.location.venue ? `${conference.location.venue}, ` : ''}{conference.location.city}, {conference.location.country}</span>
                        </div>
                      )}
                    </div>

                    {/* Key Metrics */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {conference.expectedAttendees && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <HiOutlineUserGroup className="w-3 h-3" />
                          <span>{conference.expectedAttendees.toLocaleString()}+ Attendees</span>
                        </div>
                      )}
                      {conference.speakers && conference.speakers.length > 0 && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <HiOutlineMicrophone className="w-3 h-3" />
                          <span>{conference.speakers.length}+ Speakers</span>
                        </div>
                      )}
                      {conference.exhibitors && conference.exhibitors > 0 && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <HiOutlineBuildingOffice className="w-3 h-3" />
                          <span>{conference.exhibitors}+ Exhibitors</span>
                        </div>
                      )}
                    </div>

                    {/* Ticket Price */}
                    <div className="mb-4">
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {getTicketPrice(conference.tickets)}
                      </span>
                      {conference.tickets && conference.tickets.length > 0 && conference.tickets[0].price > 0 && (
                        <span className="text-xs text-gray-500 ml-1">starting from</span>
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

                      {conference.website && (
                        <button
                          onClick={() => window.open(conference.website, '_blank')}
                          className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                        >
                          <HiOutlineExternalLink className="w-4 h-4" />
                        </button>
                      )}

                      <button
                        onClick={() => setSelectedConference(selectedConference === conference.id ? null : conference.id)}
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                      >
                        {selectedConference === conference.id ? 'Less' : 'More'}
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {selectedConference === conference.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        {conference.agenda && conference.agenda.length > 0 && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Conference Highlights:</p>
                            <ul className="space-y-1">
                              {conference.agenda.slice(0, 3).map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                  <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {conference.organizer && (
                          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-xs text-gray-500">
                              <span className="font-semibold">Organized by:</span> {conference.organizer.name}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Registration Modal */}
        {showRegisterModal && selectedConference && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowRegisterModal(false)}
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Register for Conference</h3>
                    <p className="text-blue-100 text-xs mt-1 line-clamp-1">{selectedConference.title}</p>
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
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Registration Received!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      We've sent the conference details to your email address. A representative will contact you shortly with ticket information.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">{formatDateRange(selectedConference.startDate, selectedConference.endDate)}</span>
                        {selectedConference.location && <> • {selectedConference.location.city}, {selectedConference.location.country}</>}
                      </p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
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

                      <div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company *"
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.company ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            }`}
                        />
                        {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          placeholder="Job title"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Ticket Type Selection */}
                        <select
                          name="ticketType"
                          value={formData.ticketType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="standard">Standard Ticket</option>
                          <option value="vip">VIP Ticket</option>
                          <option value="exhibitor">Exhibitor Pass</option>
                        </select>
                      </div>

                      <select
                        name="dietary"
                        value={formData.dietary}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Dietary preferences (optional)</option>
                        <option value="none">None</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="gluten-free">Gluten-free</option>
                        <option value="halal">Halal</option>
                        <option value="kosher">Kosher</option>
                      </select>

                      <textarea
                        name="questions"
                        value={formData.questions}
                        onChange={handleInputChange}
                        placeholder="Any questions or special requests?"
                        rows="2"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      />

                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      >
                        Request Registration
                        <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                      </button>
                    </form>

                    <p className="text-center text-xs text-gray-500 mt-4">
                      By registering, you agree to receive conference updates and related information.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareConference && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowShareModal(false)}
          >
            <div
              className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Conference</h3>
                  <button onClick={() => setShowShareModal(false)} className="text-gray-500 hover:text-gray-700">
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">
                  {shareConference.title}
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={copyLink}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <HiOutlineLink className="w-4 h-4" />
                    Copy Link
                  </button>
                  <button
                    onClick={() => {
                      window.open(`mailto:?subject=${encodeURIComponent(shareConference.title)}&body=${encodeURIComponent(`${shareConference.title}\n${shareConference.description}\n\n${shareConference.location?.city}, ${shareConference.location?.country}\n\n${window.location.origin}/conferences/${shareConference.id}`)}`);
                    }}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <HiOutlineMail className="w-4 h-4" />
                    Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't Miss Out on Industry Events</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get notified about upcoming conferences, early bird discounts, and exclusive networking opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <HiOutlineMail className="w-5 h-5" />
              Subscribe to Updates
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

export default IndustryConferencesSection1;