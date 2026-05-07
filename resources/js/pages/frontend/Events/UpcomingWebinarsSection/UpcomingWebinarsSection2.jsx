// page/frontend/Events/UpcomingWebinarsSection/UpcomingWebinarsSection2.jsx

/**
 * Upcoming Webinars Section II - Advanced Webinar Hub with Filters & Bookmarking
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators for Webinar Metrics
 * - Multi-tab UI (Upcoming Webinars, Recorded Sessions, Featured)
 * - Featured Webinar Banner with Gradient Background
 * - Search Functionality to Filter Webinars
 * - Category and Level Filter Dropdowns with Expandable Panel
 * - Webinars Grid with Bookmark and Share Functionality
 * - Live Countdown Timers on Upcoming Webinars
 * - localStorage Persistence for Bookmarked Webinars
 * - Registration Modal with Enhanced Form Fields (Phone, Questions)
 * - Share Modal with Copy Link and Email Options
 * - Calendar Integration Dropdown (Google, Outlook, iCal)
 * - Animated Gradient Orbs in Background
 * - Responsive Grid Layout for Webinar Cards
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
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
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineGlobe,
  HiOutlinePhone,
} from 'react-icons/hi';
import { HiOutlinePlay, HiOutlineUser, HiOutlineTrophy, HiOutlineLink } from 'react-icons/hi2';

const UpcomingWebinarsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [countdowns, setCountdowns] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [shareWebinar, setShareWebinar] = useState(null);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarkedWebinars, setBookmarkedWebinars] = useState([]);
  const [selectedWebinarId, setSelectedWebinarId] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '', phone: '', questions: '', });

  // ==================== REFERENCE MANAGEMENT ====================
  const modalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================

  const webinars = useMemo(() => config?.webinars || [
    {
      id: 1,
      title: "Supply Chain Digital Transformation",
      description: "Learn how leading companies are leveraging digital technologies to transform their supply chain operations.",
      longDescription: "This comprehensive webinar covers the digital transformation journey of global supply chains. We'll explore how technologies like AI, IoT, and blockchain are reshaping logistics, inventory management, and demand forecasting.",
      date: "May 15, 2024",
      time: "10:00 AM EST",
      duration: "60 min",
      category: "Digital Transformation",
      level: "Intermediate",
      isFeatured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      speaker: {
        name: "Dr. Sarah Johnson",
        title: "Chief Supply Chain Officer",
        company: "Global Logistics Partners",
        bio: "Dr. Johnson has over 15 years of experience in supply chain digital transformation, leading major initiatives at Fortune 500 companies.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
      },
      tags: ["Digital Transformation", "AI", "IoT", "Blockchain"],
      attendees: 2847,
      calendarLinks: {
        google: "https://calendar.google.com/calendar/render?action=TEMPLATE",
        outlook: "https://outlook.live.com/calendar/",
        ical: "webcal://www.example.com/calendar.ics"
      }
    },
    {
      id: 2,
      title: "Sustainable Supply Chain Strategies",
      description: "Discover how to reduce carbon footprint while improving efficiency and reducing costs.",
      longDescription: "Sustainability is no longer optional—it's a business imperative. This session explores practical strategies for building a greener supply chain.",
      date: "May 22, 2024",
      time: "2:00 PM EST",
      duration: "45 min",
      category: "Sustainability",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      speaker: {
        name: "Michael Chen",
        title: "Sustainability Director",
        company: "EcoLogistics",
        bio: "Michael leads sustainability initiatives across global supply chains, helping companies achieve net-zero targets.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
      },
      tags: ["Sustainability", "Green Logistics", "Carbon Reduction"],
      attendees: 1892,
      calendarLinks: {
        google: "https://calendar.google.com/calendar/render?action=TEMPLATE",
        outlook: "https://outlook.live.com/calendar/"
      }
    },
    {
      id: 3,
      title: "AI in Supply Chain Management",
      description: "Explore real-world applications of artificial intelligence in demand forecasting and inventory optimization.",
      longDescription: "AI is revolutionizing supply chain management. This webinar covers practical AI applications, success stories, and implementation strategies.",
      date: "May 29, 2024",
      time: "11:00 AM EST",
      duration: "60 min",
      category: "Technology",
      level: "Advanced",
      isFeatured: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      speaker: {
        name: "Emily Rodriguez",
        title: "AI Solutions Architect",
        company: "TechSupply AI",
        bio: "Emily specializes in AI-driven supply chain solutions with expertise in machine learning and predictive analytics.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
      },
      tags: ["AI", "Machine Learning", "Predictive Analytics"],
      attendees: 3245,
      calendarLinks: {
        google: "https://calendar.google.com/calendar/render?action=TEMPLATE",
        ical: "webcal://www.example.com/calendar.ics"
      }
    }
  ], [config?.webinars]);

  const stats = config?.stats || [
    { value: "5,000+", label: "Live Attendees", icon: "users", trend: "+25%", trendUp: true },
    { value: "50+", label: "Expert Speakers", icon: "academic", trend: "Global", trendUp: true },
    { value: "24+", label: "Sessions Yearly", icon: "calendar", trend: "Weekly", trendUp: true },
    { value: "100+", label: "Hours of Content", icon: "clock", trend: "Expanding", trendUp: true }
  ];

  const tabs = [
    { id: 'upcoming', label: 'Upcoming Webinars', icon: 'bell' },
    { id: 'recorded', label: 'Recorded Sessions', icon: 'play' },
    { id: 'featured', label: 'Featured', icon: 'star' },
  ];

  const featuredWebinarId = config?.featuredWebinarId || (webinars.find(w => w.isFeatured)?.id || webinars[0]?.id);
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

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons and Heroicons 2 sets
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      bell: <HiOutlineBell className={className} />,
      play: <HiOutlinePlay className={className} />,
      star: <HiOutlineStar className={className} />,
      mail: <HiOutlineMail className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      search: <HiOutlineSearch className={className} />,
      filter: <HiOutlineFilter className={className} />,
      chevronDown: <HiOutlineChevronDown className={className} />,
      chevronUp: <HiOutlineChevronUp className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      phone: <HiOutlinePhone className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      link: <HiOutlineLink className={className} />,
    };
    return icons[iconName] || <HiOutlineVideoCamera className={className} />;
  };

  /**
   * Calculate countdown for a given date
   */
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

  /**
   * Update countdowns for all webinars
   */
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

  /**
   * Load bookmarks from localStorage
   */
  useEffect(() => {
    const saved = localStorage.getItem('webinarBookmarks');
    if (saved) {
      setBookmarkedWebinars(JSON.parse(saved));
    }
  }, []);

  /**
   * Save bookmarks to localStorage
   */
  useEffect(() => {
    localStorage.setItem('webinarBookmarks', JSON.stringify(bookmarkedWebinars));
  }, [bookmarkedWebinars]);

  // Filter webinars based on date
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

  const featuredWebinars = webinars.filter(w => w.isFeatured);

  /**
   * Filter webinars by search, category, and level
   */
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

  /**
   * Format date for display
   */
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  /**
   * Handle form input change
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  /**
   * Validate registration form
   */
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.company) newErrors.company = 'Company is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle registration submission
   */
  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowRegisterModal(false);
      setFormData({ name: '', email: '', company: '', role: '', phone: '', questions: '' });
    }, 3000);
  };

  /**
   * Add to calendar
   */
  const addToCalendar = (webinar, type) => {
    const links = webinar.calendarLinks;
    if (links && links[type]) {
      window.open(links[type], '_blank');
    }
  };

  /**
   * Toggle bookmark for a webinar
   */
  const toggleBookmark = (webinarId, e) => {
    e.stopPropagation();
    if (bookmarkedWebinars.includes(webinarId)) {
      setBookmarkedWebinars(bookmarkedWebinars.filter(id => id !== webinarId));
    } else {
      setBookmarkedWebinars([...bookmarkedWebinars, webinarId]);
    }
  };

  /**
   * Open share modal
   */
  const openShareModal = (webinar, e) => {
    e.stopPropagation();
    setShareWebinar(webinar);
    setShowShareModal(true);
  };

  /**
   * Close share modal
   */
  const closeShareModal = () => {
    setShowShareModal(false);
    setShareWebinar(null);
  };

  /**
   * Copy webinar link to clipboard
   */
  const copyLink = () => {
    if (shareWebinar) {
      navigator.clipboard.writeText(`${window.location.origin}/webinars/${shareWebinar.id}`);
      alert('Link copied to clipboard!');
    }
  };

  /**
   * Open registration modal
   */
  const openRegisterModal = (webinar) => {
    setSelectedWebinar(webinar);
    setShowRegisterModal(true);
  };

  /**
   * Close registration modal
   */
  const closeRegisterModal = () => {
    setShowRegisterModal(false);
    setSelectedWebinar(null);
  };

  /**
   * Toggle expanded details
   */
  const toggleExpanded = (webinarId) => {
    setSelectedWebinarId(selectedWebinarId === webinarId ? null : webinarId);
  };

  /**
   * Clear all filters
   */
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLevel('all');
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Upcoming Webinars Center"
      itemScope
      itemType="https://schema.org/Event"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineVideoCamera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Live & On-Demand"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Knowledge"}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || "Webinars"}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                "Join industry experts as they share insights, strategies, and best practices for supply chain excellence."}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                {stat.trend && (
                  <div className={`text-xs mt-1 ${stat.trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
                    {stat.trend}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== FEATURED WEBINAR BANNER ==================== */}
        {featuredWebinar && activeTab === 'upcoming' && (
          <div className="relative mb-12 rounded-3xl overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white" />
            </div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineTrophy className="w-5 h-5 text-amber-300" />
                <span className="text-sm font-semibold text-amber-300">Featured Webinar</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredWebinar.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredWebinar.description}</p>
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
                onClick={() => openRegisterModal(featuredWebinar)}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Reserve your spot"
              >
                <HiOutlineBell className="w-5 h-5" />
                Reserve Your Spot
                <HiOutlineArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== SEARCH AND FILTERS ==================== */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search webinars by title, description, or speaker..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Search webinars"
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle filters"
            >
              <HiOutlineFilter className="w-5 h-5" />
              Filters
              {showFilters ? <HiOutlineChevronUp className="w-4 h-4" /> : <HiOutlineChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by category"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? 'All Categories' : cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Level Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Level
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by level"
                  >
                    {levels.map((lev) => (
                      <option key={lev} value={lev}>
                        {lev === 'all' ? 'All Levels' : lev}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ==================== WEBINARS GRID ==================== */}
        {displayedWebinars.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineVideoCamera className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No webinars found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              aria-label="Clear filters"
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
              const isExpanded = selectedWebinarId === webinar.id;

              return (
                <div
                  key={webinar.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
                  {/* Image Area */}
                  {webinar.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {webinar.category && (
                        <span className="absolute top-4 left-4 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                          {webinar.category}
                        </span>
                      )}
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
                            <div>
                              <span className="font-bold text-lg">{countdown.minutes}</span>
                              <span className="text-xs ml-0.5">m</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons Overlay */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button
                          onClick={(e) => toggleBookmark(webinar.id, e)}
                          className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                          aria-label={isBookmarked ? "Remove from bookmarks" : "Bookmark this webinar"}
                        >
                          <HiOutlineBookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-amber-400' : ''}`} />
                        </button>
                        <button
                          onClick={(e) => openShareModal(webinar, e)}
                          className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                          aria-label="Share this webinar"
                        >
                          <HiOutlineShare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {webinar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {webinar.description}
                    </p>

                    {/* Date & Time */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      {webinar.date && (
                        <div className="flex items-center gap-1">
                          <HiOutlineCalendar className="w-4 h-4" />
                          <span>{formatDate(webinar.date)}</span>
                        </div>
                      )}
                      {webinar.time && (
                        <div className="flex items-center gap-1">
                          <HiOutlineClock className="w-4 h-4" />
                          <span>{webinar.time}</span>
                        </div>
                      )}
                      {webinar.duration && (
                        <div className="flex items-center gap-1">
                          <HiOutlineClock className="w-4 h-4" />
                          <span>{webinar.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Speaker */}
                    {webinar.speaker && (
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={webinar.speaker.avatar}
                          alt={webinar.speaker.name}
                          className="w-10 h-10 rounded-full object-cover"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">
                            {webinar.speaker.name}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-1">
                            {webinar.speaker.title}, {webinar.speaker.company}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    {webinar.tags && webinar.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Attendees */}
                    {webinar.attendees && (
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                        <HiOutlineUserGroup className="w-3 h-3" />
                        <span>{webinar.attendees.toLocaleString()} registered</span>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => openRegisterModal(webinar)}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                        aria-label={activeTab === 'upcoming' ? "Register for webinar" : "Watch recording"}
                      >
                        {activeTab === 'upcoming' ? (
                          <>
                            <HiOutlineBell className="w-4 h-4" />
                            Register
                          </>
                        ) : (
                          <>
                            <HiOutlinePlay className="w-4 h-4" />
                            Watch Now
                          </>
                        )}
                      </button>

                      {activeTab === 'upcoming' && webinar.calendarLinks && (
                        <div className="relative group/calendar">
                          <button
                            className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                            aria-label="Add to calendar"
                          >
                            <HiOutlineCalendar className="w-4 h-4" />
                          </button>
                          <div className="absolute bottom-full left-0 mb-2 hidden group-hover/calendar:block bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-10 min-w-36">
                            {webinar.calendarLinks.google && (
                              <button
                                onClick={() => addToCalendar(webinar, 'google')}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg"
                                aria-label="Add to Google Calendar"
                              >
                                Google Calendar
                              </button>
                            )}
                            {webinar.calendarLinks.outlook && (
                              <button
                                onClick={() => addToCalendar(webinar, 'outlook')}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                                aria-label="Add to Outlook"
                              >
                                Outlook
                              </button>
                            )}
                            {webinar.calendarLinks.ical && (
                              <button
                                onClick={() => addToCalendar(webinar, 'ical')}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded-b-lg"
                                aria-label="Add to iCal"
                              >
                                iCal
                              </button>
                            )}
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => toggleExpanded(webinar.id)}
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                        aria-label={isExpanded ? "Show less" : "Learn more"}
                      >
                        {isExpanded ? 'Less' : 'More'}
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {isExpanded && webinar.longDescription && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {webinar.longDescription}
                        </p>
                        {webinar.speaker?.bio && (
                          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                            <p className="text-xs text-gray-500 italic dark:text-gray-400">"{webinar.speaker.bio}"</p>
                          </div>
                        )}
                        {webinar.level && (
                          <div className="mt-3 flex items-center gap-2 text-xs">
                            <HiOutlineAcademicCap className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-500">Level: {webinar.level}</span>
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

        {/* ==================== REGISTRATION MODAL ==================== */}
        {showRegisterModal && selectedWebinar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeRegisterModal}
            role="dialog"
            aria-label="Register for webinar"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Register for Webinar</h3>
                    <p className="text-blue-100 text-xs mt-1">{selectedWebinar.title}</p>
                  </div>
                  <button
                    onClick={closeRegisterModal}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Registration Confirmed!</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      We've sent the webinar details to your email address.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">{formatDate(selectedWebinar.date)}</span> • {selectedWebinar.time} • {selectedWebinar.duration}
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
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            }`}
                          aria-label="Full name"
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
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            }`}
                          aria-label="Email address"
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
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.company ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            }`}
                          aria-label="Company name"
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
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                          aria-label="Job title"
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone (optional)"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                          aria-label="Phone number"
                        />
                      </div>

                      <textarea
                        name="questions"
                        value={formData.questions}
                        onChange={handleInputChange}
                        placeholder="Any questions for the speaker?"
                        rows="2"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 resize-none"
                        aria-label="Questions for speaker"
                      />

                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                        aria-label="Complete registration"
                      >
                        Complete Registration
                        <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                      </button>
                    </form>

                    <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
                      By registering, you agree to receive webinar reminders and related content.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SHARE MODAL ==================== */}
        {showShareModal && shareWebinar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeShareModal}
            role="dialog"
            aria-label="Share webinar"
            aria-modal="true"
          >
            <div
              className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">Share Webinar</h3>
                  <button
                    onClick={closeShareModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
                  {shareWebinar.title}
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={copyLink}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="Copy link to clipboard"
                  >
                    <HiOutlineLink className="w-4 h-4" />
                    Copy Link
                  </button>
                  <button
                    onClick={() => {
                      window.open(`mailto:?subject=${encodeURIComponent(shareWebinar.title)}&body=${encodeURIComponent(`${shareWebinar.title}\n${shareWebinar.description}\n\n${window.location.origin}/webinars/${shareWebinar.id}`)}`);
                    }}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Share via email"
                  >
                    <HiOutlineMail className="w-4 h-4" />
                    Share via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-width='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
          -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
        }
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
      `}</style>
    </section>
  );
};

export default UpcomingWebinarsSection2;