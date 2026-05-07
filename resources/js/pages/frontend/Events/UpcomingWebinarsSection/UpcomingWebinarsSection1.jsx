// page/frontend/Events/UpcomingWebinarsSection/UpcomingWebinarsSection1.jsx

/**
 * Upcoming Webinars Section I - Live Events & Knowledge Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Webinar Metrics (Attendees, Sessions, Speakers, Hours)
 * - Multi-tab UI (Upcoming Webinars, Recorded Sessions)
 * - Webinars Grid with Countdown Timers for Live Events
 * - Speaker Information with Avatars and Bios
 * - Registration Modal with Form Validation
 * - Success Message on Form Submission
 * - Add to Calendar Dropdown (Google, Outlook, iCal)
 * - Expandable Details for In-depth Information
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
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
  HiOutlineAcademicCap,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlinePlay,
  HiOutlineGlobe,
} from 'react-icons/hi';

const UpcomingWebinarsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [countdowns, setCountdowns] = useState({});
  const [activeTab, setActiveTab] = useState('upcoming');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [selectedWebinarId, setSelectedWebinarId] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '', });

  // ==================== REFERENCE MANAGEMENT ====================
  const modalRef = useRef(null);

  // ==================== MEMOIZED DATA ====================

  const webinars = useMemo(() => config?.webinars || [
    {
      id: 1,
      title: "Supply Chain Digital Transformation",
      description: "Learn how leading companies are leveraging digital technologies to transform their supply chain operations.",
      longDescription: "This comprehensive webinar covers the digital transformation journey of global supply chains. We'll explore how technologies like AI, IoT, and blockchain are reshaping logistics, inventory management, and demand forecasting. Attendees will leave with a clear roadmap for their own digital transformation initiatives.",
      date: "May 15, 2024",
      time: "10:00 AM EST",
      duration: "60 min",
      category: "Digital Transformation",
      level: "Intermediate",
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
        google: "https://calendar.google.com",
        outlook: "https://outlook.com",
        ical: "https://ical.com"
      }
    },
    {
      id: 2,
      title: "Sustainable Supply Chain Strategies",
      description: "Discover how to reduce carbon footprint while improving efficiency and reducing costs.",
      longDescription: "Sustainability is no longer optional—it's a business imperative. This session explores practical strategies for building a greener supply chain, from sustainable sourcing to carbon-neutral logistics.",
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
        google: "https://calendar.google.com",
        outlook: "https://outlook.com"
      }
    },
    {
      id: 3,
      title: "AI in Supply Chain Management",
      description: "Explore real-world applications of artificial intelligence in demand forecasting and inventory optimization.",
      longDescription: "AI is revolutionizing supply chain management. This webinar covers practical AI applications, success stories, and implementation strategies for businesses of all sizes.",
      date: "May 29, 2024",
      time: "11:00 AM EST",
      duration: "60 min",
      category: "Technology",
      level: "Advanced",
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
        google: "https://calendar.google.com",
        ical: "https://ical.com"
      }
    }
  ], [config?.webinars]);

  const stats = config?.stats || [
    { value: "5,000+", label: "Live Attendees", icon: "users" },
    { value: "50+", label: "Expert Speakers", icon: "academic" },
    { value: "24+", label: "Sessions Yearly", icon: "calendar" },
    { value: "100+", label: "Hours of Content", icon: "clock" }
  ];

  const tabs = [
    { id: 'upcoming', label: 'Upcoming Webinars', icon: 'bell' },
    { id: 'recorded', label: 'Recorded Sessions', icon: 'play' },
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons and Heroicons 2 sets
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      users: <HiOutlineUserGroup className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      bell: <HiOutlineBell className={className} />,
      play: <HiOutlinePlay className={className} />,
      star: <HiOutlineStar className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      globe: <HiOutlineGlobe className={className} />,
    };
    return icons[iconName] || <HiOutlineVideoCamera className={className} />;
  };

  /**
   * Calculate countdown for a given date
   */
  const calculateCountdown = useCallback((dateStr) => {
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

  const displayedWebinars = activeTab === 'upcoming' ? upcomingWebinars : recordedWebinars;

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
   * Validate form
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
   * Handle registration
   */
  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowRegisterModal(false);
      setFormData({ name: '', email: '', company: '', role: '' });
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
    setFormSubmitted(false);
    setFormData({ name: '', email: '', company: '', role: '' });
    setErrors({});
  };

  /**
   * Toggle expanded details
   */
  const toggleExpanded = (webinarId) => {
    setSelectedWebinarId(selectedWebinarId === webinarId ? null : webinarId);
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Upcoming Webinars"
      itemScope
      itemType="https://schema.org/Event"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineVideoCamera className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Live Events"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Upcoming"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Webinars"}
            </span>{' '}
            {config?.title?.suffix || ""}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "Join industry experts as they share insights, strategies, and best practices for supply chain excellence."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                {getIcon(stat.icon, "w-5 h-5 text-blue-600 dark:text-blue-400")}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        {/* ==================== WEBINARS GRID ==================== */}
        {displayedWebinars.length === 0 ? (
          <div className="text-center py-12">
            <HiOutlineVideoCamera className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No webinars found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {displayedWebinars.map((webinar) => {
              const countdown = countdowns[webinar.id];
              const isUpcoming = activeTab === 'upcoming' && countdown && !countdown.expired;
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
                          <span>{webinar.date}</span>
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
                          <p className="text-xs text-gray-500">
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
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                        aria-label={activeTab === 'upcoming' ? "Register for webinar" : "Watch recording"}
                      >
                        {activeTab === 'upcoming' ? (
                          <>
                            <HiOutlineBell className="w-4 h-4" />
                            Register Now
                          </>
                        ) : (
                          <>
                            <HiOutlinePlay className="w-4 h-4" />
                            Watch Recording
                          </>
                        )}
                        <HiOutlineArrowRight className="w-3 h-3" />
                      </button>

                      {activeTab === 'upcoming' && webinar.calendarLinks && (
                        <div className="relative group/calendar">
                          <button
                            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm"
                            aria-label="Add to calendar"
                          >
                            <HiOutlineCalendar className="w-4 h-4" />
                            Add to Calendar
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
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                        aria-label={isExpanded ? "Show less" : "Learn more"}
                      >
                        {isExpanded ? 'Show less' : 'Learn more'}
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
                  <h3 className="text-white font-bold text-lg">Register for Webinar</h3>
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
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{selectedWebinar.title}</h4>
                      <p className="text-sm text-gray-500">
                        {selectedWebinar.date} • {selectedWebinar.time}
                      </p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full name"
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
                          placeholder="Email address"
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
                          placeholder="Company"
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.company ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            }`}
                          aria-label="Company name"
                        />
                        {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                      </div>

                      <div>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          placeholder="Job title (optional)"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                          aria-label="Job title"
                        />
                      </div>

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
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default UpcomingWebinarsSection1;