// page/frontend/Events/UpcomingWebinarsSection/UpcomingWebinarsSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineVideoCamera,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineX,
  HiOutlineBell,
  HiOutlineMail,
  HiOutlineAcademicCap,
  HiOutlineUsers,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineVolumeUp,
  HiOutlineVolumeOff,
  HiOutlineTicket,
  HiOutlineLink,
  HiOutlineBadgeCheck,
} from 'react-icons/hi';
import { HiOutlineUser, HiOutlineTrophy } from 'react-icons/hi2';

const UpcomingWebinarsSection3 = ({ config }) => {
  const [selectedWebinar, setSelectedWebinar] = useState(null);
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
    questions: '',
    newsletter: false,
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('upcoming');
  const [countdowns, setCountdowns] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedWebinars, setBookmarkedWebinars] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareWebinar, setShareWebinar] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({});
  const [expandedAgenda, setExpandedAgenda] = useState(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [certificateWebinar, setCertificateWebinar] = useState(null);
  const modalRef = useRef(null);
  const videoRefs = useRef({});

  // Get data from config
  const webinars = useMemo(() => config?.webinars || [], [config?.webinars]);
  const stats = config?.stats || [];
  const featuredWebinarId = config?.featuredWebinarId || (webinars[0]?.id);

  // Featured webinar
  const featuredWebinar = webinars.find(w => w.id === featuredWebinarId) || webinars[0];

  // Get unique categories and levels from webinars
  const categories = useMemo(() => {
    const cats = new Set(webinars.map(w => w.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [webinars]);

  const levels = useMemo(() => {
    const lev = new Set(webinars.map(w => w.level).filter(Boolean));
    return ['all', ...Array.from(lev)];
  }, [webinars]);

  const tabs = config?.tabs || [
    { id: 'upcoming', label: 'Upcoming Webinars', icon: 'bell' },
    { id: 'recorded', label: 'Recorded Sessions', icon: 'play' },
    { id: 'featured', label: 'Featured', icon: 'star' },
  ];

  // Calculate countdown for each webinar
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
      webinars.forEach((webinar) => {
        if (webinar.date) {
          newCountdowns[webinar.id] = calculateCountdown(webinar.date);
        }
      });
      setCountdowns(newCountdowns);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, [webinars, calculateCountdown]);

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('webinarBookmarks');
    if (saved) {
      setBookmarkedWebinars(JSON.parse(saved));
    }
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('webinarBookmarks', JSON.stringify(bookmarkedWebinars));
  }, [bookmarkedWebinars]);

  // Filter webinars
  const upcomingWebinars = webinars.filter((w) => {
    if (!w.date) return false;
    const webinarDate = new Date(w.date);
    const now = new Date();
    return webinarDate > now;
  });

  const recordedWebinars = webinars.filter((w) => {
    if (!w.date) return false;
    const webinarDate = new Date(w.date);
    const now = new Date();
    return webinarDate <= now || w.recordingAvailable;
  });

  const featuredWebinars = webinars.filter(w => w.isFeatured || w.id === featuredWebinarId);

  // Filter by search and category/level
  const filterWebinars = (webinarList) => {
    return webinarList.filter((w) => {
      const matchesSearch = searchQuery === '' ||
        w.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.speaker?.name?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || w.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || w.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  };

  let displayedWebinars = [];
  if (activeTab === 'upcoming') {
    displayedWebinars = filterWebinars(upcomingWebinars);
  } else if (activeTab === 'recorded') {
    displayedWebinars = filterWebinars(recordedWebinars);
  } else {
    displayedWebinars = filterWebinars(featuredWebinars);
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
      // Submit registration
      const newRegistrationId = `REG-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
      setRegistrationId(newRegistrationId);
      setFormSubmitted(true);

      // Simulate API call
      setTimeout(() => {
        setFormSubmitted(false);
        setShowRegisterModal(false);
        setRegistrationStep(1);
        setFormData({
          name: '', email: '', company: '', role: '', phone: '',
          country: '', questions: '', newsletter: false, terms: false
        });
      }, 3000);
    }
  };

  const handlePrevStep = () => {
    setRegistrationStep(1);
    setErrors({});
  };

  // Add to calendar
  const addToCalendar = (webinar, type) => {
    const links = webinar.calendarLinks;
    if (links && links[type]) {
      window.open(links[type], '_blank');
    }
  };

  // Toggle bookmark
  const toggleBookmark = (webinarId, e) => {
    e.stopPropagation();
    if (bookmarkedWebinars.includes(webinarId)) {
      setBookmarkedWebinars(bookmarkedWebinars.filter(id => id !== webinarId));
    } else {
      setBookmarkedWebinars([...bookmarkedWebinars, webinarId]);
    }
  };

  // Share webinar
  const shareWebinarHandler = (webinar, e) => {
    e.stopPropagation();
    setShareWebinar(webinar);
    setShowShareModal(true);
  };

  // Copy link to clipboard
  const copyLink = () => {
    if (shareWebinar) {
      navigator.clipboard.writeText(`${window.location.origin}/webinars/${shareWebinar.id}`);
      alert('Link copied to clipboard!');
    }
  };

  // Toggle video mute
  const toggleMute = (webinarId, e) => {
    e.stopPropagation();
    setMutedVideos(prev => ({ ...prev, [webinarId]: !prev[webinarId] }));
    if (videoRefs.current[webinarId]) {
      videoRefs.current[webinarId].muted = !mutedVideos[webinarId];
    }
  };

  // Format date
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Format time
  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    return timeStr;
  };

  // Download certificate
  const downloadCertificate = () => {
    // Simulate certificate download
    alert('Certificate download started!');
    setShowCertificateModal(false);
  };

  // Countries list for dropdown
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
    'France', 'Japan', 'China', 'India', 'Brazil', 'Mexico', 'Spain',
    'Italy', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Singapore'
  ];

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Upcoming Webinars Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-webinar" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-webinar)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineVideoCamera className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Live & Interactive"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Expert"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Webinars"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Join industry experts as they share insights, strategies, and best practices for supply chain excellence. Live Q&A and certificates included."}
          </p>

          {/* Stats Row */}
          {stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {stat.icon === 'users' ? <HiOutlineUsers className="w-4 h-4 text-blue-600" /> :
                      stat.icon === 'calendar' ? <HiOutlineCalendar className="w-4 h-4 text-blue-600" /> :
                        stat.icon === 'clock' ? <HiOutlineClock className="w-4 h-4 text-blue-600" /> :
                          <HiOutlineVideoCamera className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                    {stat.trend && (
                      <div className={`text-xs ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.trend}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Featured Webinar Banner with Video */}
        {featuredWebinar && activeTab === 'upcoming' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white" />
            </div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">Featured Webinar</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredWebinar.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredWebinar.description}</p>

              {/* Featured Webinar Video Trailer */}
              {featuredWebinar.trailerUrl && (
                <div className="mb-6 rounded-xl overflow-hidden max-w-md">
                  <div className="relative">
                    <video
                      src={featuredWebinar.trailerUrl}
                      className="w-full rounded-xl"
                      poster={featuredWebinar.image}
                      controls
                      playsInline
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                {featuredWebinar.date && (
                  <div className="flex items-center gap-2">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span>{formatDate(featuredWebinar.date)}</span>
                  </div>
                )}
                {featuredWebinar.time && (
                  <div className="flex items-center gap-2">
                    <HiOutlineClock className="w-4 h-4" />
                    <span>{featuredWebinar.time}</span>
                  </div>
                )}
                {featuredWebinar.speaker?.name && (
                  <div className="flex items-center gap-2">
                    <HiOutlineUser className="w-4 h-4" />
                    <span>{featuredWebinar.speaker.name}</span>
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  setSelectedWebinar(featuredWebinar);
                  setShowRegisterModal(true);
                  setRegistrationStep(1);
                }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <HiOutlineTicket className="w-5 h-5" />
                Reserve Your Seat
                <HiOutlineArrowRight className="w-4 h-4" />
              </button>
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
              {tab.icon === 'bell' ? <HiOutlineBell className="w-4 h-4" /> :
                tab.icon === 'play' ? <HiOutlinePlay className="w-4 h-4" /> :
                  <HiOutlineStar className="w-4 h-4" />}
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
                placeholder="Search webinars by title, description, or speaker..."
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {levels.map((lev) => (
                      <option key={lev} value={lev}>{lev === 'all' ? 'All Levels' : lev}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Webinars Grid */}
        {displayedWebinars.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineVideoCamera className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No webinars found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedWebinars.map((webinar) => {
              const countdown = countdowns[webinar.id];
              const isUpcoming = activeTab === 'upcoming' && countdown && !countdown.expired;
              const isBookmarked = bookmarkedWebinars.includes(webinar.id);
              const isPlaying = playingVideo === webinar.id;
              const isMuted = mutedVideos[webinar.id] || false;

              return (
                <div
                  key={webinar.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
                  {/* Video Preview */}
                  {webinar.videoPreview ? (
                    <div className="relative h-48 overflow-hidden bg-black">
                      <video
                        ref={el => videoRefs.current[webinar.id] = el}
                        src={webinar.videoPreview}
                        className="w-full h-full object-cover"
                        poster={webinar.image}
                        loop
                        muted={isMuted}
                        playsInline
                        onMouseEnter={() => {
                          if (videoRefs.current[webinar.id]) {
                            videoRefs.current[webinar.id].play();
                            setPlayingVideo(webinar.id);
                          }
                        }}
                        onMouseLeave={() => {
                          if (videoRefs.current[webinar.id]) {
                            videoRefs.current[webinar.id].pause();
                            videoRefs.current[webinar.id].currentTime = 0;
                            setPlayingVideo(null);
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                      {webinar.category && (
                        <span className="absolute top-4 left-4 text-xs bg-blue-600 text-white px-2 py-1 rounded-full z-10">
                          {webinar.category}
                        </span>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute(webinar.id, e);
                        }}
                        className="absolute bottom-4 left-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                      >
                        {isMuted ? <HiOutlineVolumeOff className="w-4 h-4" /> : <HiOutlineVolumeUp className="w-4 h-4" />}
                      </button>

                      <div className="absolute top-4 right-4 flex gap-2 z-10">
                        <button
                          onClick={(e) => toggleBookmark(webinar.id, e)}
                          className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                          <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-400' : ''}`} />
                        </button>
                        <button
                          onClick={(e) => shareWebinarHandler(webinar, e)}
                          className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                          <HiOutlineShare className="w-4 h-4" />
                        </button>
                      </div>

                      {isUpcoming && countdown && (
                        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-center z-10">
                          <div className="flex gap-2 text-xs">
                            <div><span className="font-bold text-lg">{countdown.days}</span><span className="text-xs ml-0.5">d</span></div>
                            <div><span className="font-bold text-lg">{countdown.hours}</span><span className="text-xs ml-0.5">h</span></div>
                            <div><span className="font-bold text-lg">{countdown.minutes}</span><span className="text-xs ml-0.5">m</span></div>
                          </div>
                        </div>
                      )}

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                          {isPlaying ? <HiOutlinePause className="w-6 h-6 text-gray-800" /> : <HiOutlinePlay className="w-6 h-6 text-gray-800 ml-0.5" />}
                        </div>
                      </div>
                    </div>
                  ) : webinar.image ? (
                    <div className="relative h-48 overflow-hidden">
                      <img src={webinar.image} alt={webinar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {webinar.category && <span className="absolute top-4 left-4 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">{webinar.category}</span>}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button onClick={(e) => toggleBookmark(webinar.id, e)} className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                          <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-400' : ''}`} />
                        </button>
                        <button onClick={(e) => shareWebinarHandler(webinar, e)} className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                          <HiOutlineShare className="w-4 h-4" />
                        </button>
                      </div>
                      {isUpcoming && countdown && (
                        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-center">
                          <div className="flex gap-2 text-xs">
                            <div><span className="font-bold text-lg">{countdown.days}</span><span className="text-xs ml-0.5">d</span></div>
                            <div><span className="font-bold text-lg">{countdown.hours}</span><span className="text-xs ml-0.5">h</span></div>
                            <div><span className="font-bold text-lg">{countdown.minutes}</span><span className="text-xs ml-0.5">m</span></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-48 bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <HiOutlineVideoCamera className="w-12 h-12 text-white/50" />
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{webinar.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{webinar.description}</p>

                    {/* Speaker with badge */}
                    {webinar.speaker && (
                      <div className="flex items-center gap-3 mb-4">
                        {webinar.speaker.avatar ? (
                          <img src={webinar.speaker.avatar} alt={webinar.speaker.name} className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <HiOutlineUser className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm flex items-center gap-1">
                            {webinar.speaker.name}
                            {webinar.speaker.verified && <HiOutlineBadgeCheck className="w-4 h-4 text-blue-500" />}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-1">{webinar.speaker.title}, {webinar.speaker.company}</p>
                        </div>
                      </div>
                    )}

                    {/* Date & Time */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      {webinar.date && <div className="flex items-center gap-1"><HiOutlineCalendar className="w-4 h-4" /><span>{formatDate(webinar.date)}</span></div>}
                      {webinar.time && <div className="flex items-center gap-1"><HiOutlineClock className="w-4 h-4" /><span>{formatTime(webinar.time)}</span></div>}
                      {webinar.duration && <div className="flex items-center gap-1"><HiOutlineClock className="w-4 h-4" /><span>{webinar.duration}</span></div>}
                    </div>

                    {/* Tags */}
                    {webinar.tags && webinar.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">{tag}</span>
                        ))}
                      </div>
                    )}

                    {/* Attendees & Certificate */}
                    <div className="flex items-center justify-between mb-4">
                      {webinar.attendees && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <HiOutlineUserGroup className="w-3 h-3" />
                          <span>{webinar.attendees.toLocaleString()} registered</span>
                        </div>
                      )}
                      {webinar.certificateAvailable && (
                        <div className="flex items-center gap-1 text-xs text-green-600">
                          <HiOutlineBadgeCheck className="w-3 h-3" />
                          <span>Certificate included</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => {
                          setSelectedWebinar(webinar);
                          setShowRegisterModal(true);
                          setRegistrationStep(1);
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                      >
                        {activeTab === 'upcoming' ? (
                          <><HiOutlineTicket className="w-4 h-4" />Register</>
                        ) : (
                          <><HiOutlinePlay className="w-4 h-4" />Watch Now</>
                        )}
                      </button>

                      {activeTab === 'upcoming' && webinar.calendarLinks && (
                        <div className="relative group/calendar">
                          <button className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm">
                            <HiOutlineCalendar className="w-4 h-4" />
                          </button>
                          <div className="absolute bottom-full left-0 mb-2 hidden group-hover/calendar:block bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-10 min-w-36">
                            {webinar.calendarLinks.google && (
                              <button onClick={() => addToCalendar(webinar, 'google')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg">Google Calendar</button>
                            )}
                            {webinar.calendarLinks.outlook && (
                              <button onClick={() => addToCalendar(webinar, 'outlook')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700">Outlook</button>
                            )}
                            {webinar.calendarLinks.ical && (
                              <button onClick={() => addToCalendar(webinar, 'ical')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded-b-lg">iCal</button>
                            )}
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => setSelectedWebinar(selectedWebinar === webinar.id ? null : webinar.id)}
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                      >
                        {selectedWebinar === webinar.id ? 'Less' : 'More'}
                      </button>
                    </div>

                    {/* Expanded Details with Agenda */}
                    {selectedWebinar === webinar.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        {webinar.longDescription && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{webinar.longDescription}</p>
                        )}

                        {/* Agenda */}
                        {webinar.agenda && webinar.agenda.length > 0 && (
                          <div className="mb-3">
                            <button
                              onClick={() => setExpandedAgenda(expandedAgenda === webinar.id ? null : webinar.id)}
                              className="flex items-center justify-between w-full text-sm font-semibold text-gray-700 dark:text-gray-300"
                            >
                              <span>Agenda</span>
                              {expandedAgenda === webinar.id ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
                            </button>
                            {expandedAgenda === webinar.id && (
                              <div className="mt-2 space-y-2">
                                {webinar.agenda.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                    <HiOutlineClock className="w-3 h-3 mt-0.5 shrink-0" />
                                    <span><span className="font-medium">{item.time}</span> - {item.topic}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {webinar.speaker?.bio && (
                          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 mb-3">
                            <p className="text-xs text-gray-500 italic">"{webinar.speaker.bio}"</p>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-3 mt-2">
                          {webinar.level && (
                            <div className="flex items-center gap-2 text-xs"><HiOutlineAcademicCap className="w-4 h-4 text-gray-400" /><span className="text-gray-500">Level: {webinar.level}</span></div>
                          )}
                          {webinar.certificateAvailable && (
                            <button
                              onClick={() => { setCertificateWebinar(webinar); setShowCertificateModal(true); }}
                              className="flex items-center gap-1 text-xs text-green-600 hover:underline"
                            >
                              <HiOutlineBadgeCheck className="w-3 h-3" />
                              Get Certificate
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
        )}

        {/* Multi-Step Registration Modal */}
        {showRegisterModal && selectedWebinar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowRegisterModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()} ref={modalRef}>
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Register for Webinar</h3>
                    <p className="text-blue-100 text-xs mt-1 line-clamp-1">{selectedWebinar.title}</p>
                  </div>
                  <button onClick={() => setShowRegisterModal(false)} className="text-white hover:text-gray-200"><HiOutlineX className="w-6 h-6" /></button>
                </div>
                {/* Step indicator */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className={`w-2 h-2 rounded-full transition-all ${registrationStep === 1 ? 'w-6 bg-white' : 'bg-white/50'}`} />
                  <div className={`w-2 h-2 rounded-full transition-all ${registrationStep === 2 ? 'w-6 bg-white' : 'bg-white/50'}`} />
                </div>
              </div>

              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Registration Confirmed!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">We've sent the webinar details to your email address.</p>
                    <p className="text-xs text-gray-500">Registration ID: <span className="font-mono">{registrationId}</span></p>
                  </div>
                ) : (
                  <form>
                    {registrationStep === 1 && (
                      <div className="space-y-4">
                        <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg mb-4">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-semibold">{formatDate(selectedWebinar.date)}</span> • {selectedWebinar.time} • {selectedWebinar.duration}
                          </p>
                        </div>
                        <div><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}</div>
                        <div><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email address *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}</div>
                        <div><input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company *" className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.company ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`} />{errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}</div>
                        <div className="grid grid-cols-2 gap-3">
                          <input type="text" name="role" value={formData.role} onChange={handleInputChange} placeholder="Job title" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <select name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option value="">Select country</option>
                          {countries.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    )}

                    {registrationStep === 2 && (
                      <div className="space-y-4">
                        <textarea name="questions" value={formData.questions} onChange={handleInputChange} placeholder="Any questions for the speaker?" rows="3" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                        <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="w-4 h-4" /><span className="text-sm text-gray-600 dark:text-gray-400">Subscribe to newsletter for future webinars</span></label>
                        <label className={`flex items-start gap-2 cursor-pointer ${errors.terms ? 'text-red-500' : ''}`}><input type="checkbox" name="terms" checked={formData.terms} onChange={handleInputChange} className="w-4 h-4 mt-0.5" /><span className="text-sm text-gray-600 dark:text-gray-400">I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> *</span></label>
                        {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
                      </div>
                    )}

                    <div className="flex gap-3 mt-6">
                      {registrationStep === 2 && (
                        <button type="button" onClick={handlePrevStep} className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">Back</button>
                      )}
                      <button type="button" onClick={handleNextStep} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all">
                        {registrationStep === 1 ? 'Next' : 'Complete Registration'}
                        <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-4">By registering, you agree to receive webinar reminders and related content.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && shareWebinar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowShareModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-100 dark:bg-gray-700 p-4"><div className="flex items-center justify-between"><h3 className="font-bold text-gray-900 dark:text-white">Share Webinar</h3><button onClick={() => setShowShareModal(false)}><HiOutlineX className="w-5 h-5" /></button></div></div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center line-clamp-2">{shareWebinar.title}</p>
                <div className="flex flex-col gap-3">
                  <button onClick={copyLink} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"><HiOutlineLink className="w-4 h-4" />Copy Link</button>
                  <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareWebinar.title)}&body=${encodeURIComponent(`${shareWebinar.title}\n${shareWebinar.description}\n\n${window.location.origin}/webinars/${shareWebinar.id}`)}`)} className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200"><HiOutlineMail className="w-4 h-4" />Share via Email</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {showCertificateModal && certificateWebinar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowCertificateModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4"><div className="flex items-center justify-between"><h3 className="text-white font-bold text-lg">Certificate of Completion</h3><button onClick={() => setShowCertificateModal(false)} className="text-white"><HiOutlineX className="w-6 h-6" /></button></div></div>
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"><HiOutlineBadgeCheck className="w-10 h-10 text-green-600" /></div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{certificateWebinar.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Complete the webinar and pass the assessment to earn your certificate.</p>
                <button onClick={downloadCertificate} className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"><HiOutlineDownload className="w-5 h-5" />Download Certificate</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .bg-grid-white { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
      `}</style>
    </section>
  );
};

export default UpcomingWebinarsSection3;