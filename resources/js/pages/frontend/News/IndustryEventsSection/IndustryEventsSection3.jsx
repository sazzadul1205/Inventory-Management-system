// frontend/Blog/IndustryEventsSection/IndustryEventsSection3.jsx

/**
 * Industry Events Section - Events Hub with Registration
 *
 * Unique design elements:
 * - Tabbed interface (Upcoming, Past Events, My Events, Saved)
 * - Featured events carousel with auto-play and manual navigation
 * - Registration modal with form fields
 * - Personal events tracking (My Events tab shows registered events)
 * - Saved events tab with bookmark persistence
 * - Past events tab with recording links
 * - Event registration state management with localStorage
 * - Countdown/relative date badges
 * - Past event indicator with opacity styling
 * - Watch recording link for past virtual events
 * - Speaker avatars with preview
 * - Stats cards for key metrics
 * - Multi-filter system (Event Type, Format, Region)
 * - Search across titles, descriptions, and tags
 * - Responsive grid layout
 * - Animated pulse badge in header
 * - Circuit board background pattern
 *
 * All icons from react-icons (hi, hi2, ai, fa)
 * Fully responsive with dark mode support
 */

import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Ant Design
import { AiOutlineShareAlt } from 'react-icons/ai';
import { FaQuoteLeft, FaCertificate } from 'react-icons/fa';
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineUsers,
  HiOutlineTicket,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlinePresentationChartLine,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineGlobe,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineTag,
  HiOutlineEye,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineArchive,
  HiOutlinePhotograph,
  HiOutlineDocument,
  HiOutlineLink,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineAtSymbol,
  HiOutlinePrinter,
  HiOutlineDuplicate,
  HiOutlineQrcode,
  HiOutlinePlay,
  HiOutlineHeart,
  HiOutlineBadgeCheck,
  HiOutlineLibrary,
  HiOutlineNewspaper,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineRefresh,
  HiOutlineClipboardCheck,
  HiOutlineTemplate,
} from 'react-icons/hi';
import {
  HiOutlinePhone,
  HiOutlineRocketLaunch,
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi2';

const IndustryEventsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [savedEvents, setSavedEvents] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [selectedEventType, setSelectedEventType] = useState('all');
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({ name: '', email: '', company: '', title: '', });

  // ==================== REFS ====================
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const allEvents = useMemo(() => config?.events || [], [config?.events]);
  const featuredEvents = useMemo(() => config?.featuredEvents || [], [config?.featuredEvents]);

  const eventTypes = useMemo(
    () =>
      config?.eventTypes || [
        { id: 'all', label: 'All Events', icon: 'calendar', count: allEvents.length },
        { id: 'conference', label: 'Conferences', icon: 'users' },
        { id: 'webinar', label: 'Webinars', icon: 'video' },
        { id: 'workshop', label: 'Workshops', icon: 'academic' },
        { id: 'summit', label: 'Summits', icon: 'rocket' },
        { id: 'expo', label: 'Expos', icon: 'globe' },
      ],
    [config?.eventTypes, allEvents.length]
  );

  const eventFormats = useMemo(
    () =>
      config?.eventFormats || [
        { id: 'all', label: 'All Formats', icon: 'globe' },
        { id: 'in-person', label: 'In-Person', icon: 'location' },
        { id: 'virtual', label: 'Virtual', icon: 'video' },
        { id: 'hybrid', label: 'Hybrid', icon: 'globe' },
      ],
    [config?.eventFormats]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '25+', label: 'Annual Events', icon: 'calendar' },
        { value: '50+', label: 'Expert Speakers', icon: 'microphone' },
        { value: '10k+', label: 'Attendees', icon: 'users' },
        { value: '30+', label: 'Countries', icon: 'globe' },
      ],
    [config?.stats]
  );

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedEvents');
    if (saved) setSavedEvents(JSON.parse(saved));
    const registered = localStorage.getItem('registeredEvents');
    if (registered) setRegisteredEvents(JSON.parse(registered));
  }, []);

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    localStorage.setItem('registeredEvents', JSON.stringify(registeredEvents));
  }, [registeredEvents]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Ant Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      calendar: <HiOutlineCalendar className={className} />,
      clock: <HiOutlineClock className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      users: <HiOutlineUsers className={className} />,
      ticket: <HiOutlineTicket className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      presentation: <HiOutlinePresentationChartLine className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      search: <HiOutlineSearch className={className} />,
      filter: <HiOutlineFilter className={className} />,
      tag: <HiOutlineTag className={className} />,
      eye: <HiOutlineEye className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      mail: <HiOutlineMail className={className} />,
      bell: <HiOutlineBell className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      rocket: <HiOutlineRocketLaunch className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      arrow: <HiArrowRight className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      star: <HiOutlineStar className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      'thumbs-up': <HiOutlineThumbUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      flag: <HiOutlineFlag className={className} />,
      gift: <HiOutlineGift className={className} />,
      archive: <HiOutlineArchive className={className} />,
      photo: <HiOutlinePhotograph className={className} />,
      doc: <HiOutlineDocument className={className} />,
      link: <HiOutlineLink className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      quote: <FaQuoteLeft className={className} />,
      at: <HiOutlineAtSymbol className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      shareAlt: <AiOutlineShareAlt className={className} />,
      duplicate: <HiOutlineDuplicate className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      play: <HiOutlinePlay className={className} />,
      phone: <HiOutlinePhone className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      heart: <HiOutlineHeart className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <FaCertificate className={className} />,
      library: <HiOutlineLibrary className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      clipboardCheck: <HiOutlineClipboardCheck className={className} />,
      template: <HiOutlineTemplate className={className} />,
    };
    return icons[iconName] || <HiOutlineCalendar className={className} />;
  }, []);

  /**
   * Formats date to short or relative display format
   */
  const formatDate = useCallback((dateString, format = 'full') => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.ceil((date - now) / (1000 * 60 * 60 * 24));

    if (format === 'short') {
      return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
    }
    if (format === 'relative') {
      if (diffDays < 0) return 'Past Event';
      if (diffDays === 0) return 'Today';
      if (diffDays === 1) return 'Tomorrow';
      if (diffDays < 7) return `In ${diffDays} days`;
      if (diffDays < 30) return `In ${Math.floor(diffDays / 7)} weeks`;
      return `In ${Math.floor(diffDays / 30)} months`;
    }
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  }, []);

  /**
   * Returns event type badge configuration with color and label
   */
  const getEventTypeConfig = useCallback((eventType) => {
    const configs = {
      conference: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'users',
        label: 'Conference',
        gradient: 'from-blue-500 to-blue-600',
      },
      webinar: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'video',
        label: 'Webinar',
        gradient: 'from-purple-500 to-purple-600',
      },
      workshop: {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'academic',
        label: 'Workshop',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      summit: {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'rocket',
        label: 'Summit',
        gradient: 'from-orange-500 to-orange-600',
      },
      expo: {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'Expo',
        gradient: 'from-red-500 to-red-600',
      },
      networking: {
        color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
        icon: 'users',
        label: 'Networking',
        gradient: 'from-pink-500 to-pink-600',
      },
    };
    return (
      configs[eventType] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'calendar',
        label: 'Event',
      }
    );
  }, []);

  /**
   * Returns event format badge configuration
   */
  const getFormatConfig = useCallback((format) => {
    const configs = {
      'in-person': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'location',
        label: 'In-Person',
        badge: 'In-Person',
      },
      virtual: {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'video',
        label: 'Virtual',
        badge: 'Virtual',
      },
      hybrid: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'Hybrid',
        badge: 'Hybrid',
      },
    };
    return (
      configs[format] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'calendar',
        label: format,
        badge: format,
      }
    );
  }, []);

  /**
   * Get unique regions from events for filter dropdown
   */
  const getUniqueRegions = useCallback(() => {
    const regions = new Set();
    allEvents.forEach((event) => {
      if (event.region) {
        regions.add(event.region);
      }
    });
    return Array.from(regions);
  }, [allEvents]);

  /**
   * Toggle save/bookmark status for an event
   */
  const handleSaveEvent = useCallback((eventId) => {
    setSavedEvents((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    );
  }, []);

  /**
   * Register for an event
   */
  const handleRegisterEvent = useCallback((eventId) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents([...registeredEvents, eventId]);
    }
    setShowRegistrationModal(false);
    setSelectedEvent(null);
    setRegistrationForm({ name: '', email: '', company: '', title: '' });
  }, [registeredEvents]);

  /**
   * Open registration modal
   */
  const openRegistrationModal = useCallback((event) => {
    setSelectedEvent(event);
    setShowRegistrationModal(true);
  }, []);

  /**
   * Carousel navigation handlers
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (featuredEvents.length || 1));
  }, [featuredEvents.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (featuredEvents.length || 1)) % (featuredEvents.length || 1));
  }, [featuredEvents.length]);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedEventType('all');
    setSelectedFormat('all');
    setSelectedRegion('all');
  }, []);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && featuredEvents.length > 1) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, featuredEvents.length, nextSlide]);

  // ==================== FILTERING LOGIC ====================

  const filteredEvents = useMemo(() => {
    let events = [...allEvents];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      events = events.filter(
        (e) =>
          e.title?.toLowerCase().includes(query) ||
          e.description?.toLowerCase().includes(query) ||
          e.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedEventType !== 'all') {
      events = events.filter((e) => e.type === selectedEventType);
    }

    if (selectedFormat !== 'all') {
      events = events.filter((e) => e.format === selectedFormat);
    }

    if (selectedRegion !== 'all') {
      events = events.filter((e) => e.region === selectedRegion);
    }

    // Filter by tab
    if (activeTab === 'upcoming') {
      events = events.filter((e) => new Date(e.startDate) >= new Date());
    } else if (activeTab === 'past') {
      events = events.filter((e) => new Date(e.endDate || e.startDate) < new Date());
    } else if (activeTab === 'registered') {
      events = events.filter((e) => registeredEvents.includes(e.id));
    } else if (activeTab === 'saved') {
      events = events.filter((e) => savedEvents.includes(e.id));
    }

    // Sort by date
    events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    return events;
  }, [allEvents, searchQuery, selectedEventType, selectedFormat, selectedRegion, activeTab, registeredEvents, savedEvents]);

  const uniqueRegions = getUniqueRegions();
  const activeFiltersCount = [
    selectedEventType !== 'all',
    selectedFormat !== 'all',
    selectedRegion !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry Events Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-events" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80"
                stroke="#9CA3AF"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-events)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('calendar', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Events Hub'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Industry'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Events'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'Discover and register for premier industry events, conferences, and webinars. Connect with supply chain leaders and stay ahead of the curve.'}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, 'w-4 h-4 text-blue-600 dark:text-blue-400')}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'upcoming', label: 'Upcoming', icon: 'calendar' },
            { id: 'past', label: 'Past Events', icon: 'archive' },
            { id: 'registered', label: 'My Events', icon: 'ticket' },
            { id: 'saved', label: 'Saved', icon: 'bookmark' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {getIcon(tab.icon, 'w-4 h-4')}
              {tab.label}
              {tab.id === 'registered' && registeredEvents.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {registeredEvents.length}
                </span>
              )}
              {tab.id === 'saved' && savedEvents.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {savedEvents.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ==================== FEATURED EVENTS CAROUSEL ==================== */}
        {activeTab === 'upcoming' && featuredEvents.length > 0 && (
          <div className="relative mb-16">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredEvents.map((event) => {
                  const eventTypeConfig = getEventTypeConfig(event.type);
                  const formatConfig = getFormatConfig(event.format);
                  return (
                    <div key={event.id} className="w-full shrink-0">
                      <div className="relative h-96 md:h-125 rounded-3xl overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${eventTypeConfig.color}`}
                            >
                              {eventTypeConfig.label}
                            </span>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${formatConfig.color}`}
                            >
                              {formatConfig.badge}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 line-clamp-2">
                            {event.title}
                          </h2>
                          <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                            <div className="flex items-center gap-2">
                              {getIcon('calendar', 'w-4 h-4')}
                              <span>{formatDate(event.startDate, 'short')}</span>
                              {event.endDate && <span>- {formatDate(event.endDate, 'short')}</span>}
                            </div>
                            <div className="flex items-center gap-2">
                              {getIcon('location', 'w-4 h-4')}
                              <span>
                                {event.location ||
                                  (event.format === 'virtual' ? 'Virtual Event' : 'TBD')}
                              </span>
                            </div>
                          </div>
                          <p className="text-white/80 mb-4 max-w-2xl line-clamp-2">
                            {event.description}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <button
                              onClick={() => openRegistrationModal(event)}
                              className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                              {getIcon('ticket', 'w-4 h-4')}
                              Register Now
                            </button>
                            <button
                              onClick={() => handleSaveEvent(event.id)}
                              className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${savedEvents.includes(event.id)
                                ? 'bg-amber-500 text-white'
                                : 'bg-white/20 hover:bg-white/30 text-white'
                                }`}
                              aria-label={
                                savedEvents.includes(event.id) ? 'Remove from saved' : 'Save event'
                              }
                            >
                              {getIcon('bookmark', 'w-4 h-4')}
                              {savedEvents.includes(event.id) ? 'Saved' : 'Save'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Carousel Navigation Arrows */}
              {featuredEvents.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Previous slide"
                  >
                    {getIcon('chevron-left', 'w-6 h-6')}
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Next slide"
                  >
                    {getIcon('chevron-right', 'w-6 h-6')}
                  </button>
                </>
              )}

              {/* Carousel Dots */}
              {featuredEvents.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {featuredEvents.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== SEARCH AND FILTERS ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {getIcon('search', 'w-5 h-5 text-gray-400')}
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events by title, topic, or speaker..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
              aria-label="Search events"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={selectedEventType}
              onChange={(e) => setSelectedEventType(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Filter by event type"
            >
              <option value="all">All Types</option>
              {eventTypes
                .filter((t) => t.id !== 'all')
                .map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
            </select>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              aria-label="Filter by format"
            >
              {eventFormats.map((format) => (
                <option key={format.id} value={format.id}>
                  {format.label}
                </option>
              ))}
            </select>
            {uniqueRegions.length > 0 && (
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                aria-label="Filter by region"
              >
                <option value="all">All Regions</option>
                {uniqueRegions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label="Toggle filters"
            >
              {getIcon('filter', 'w-4 h-4')}
              Filters
              {activeFiltersCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ==================== EXPANDED FILTERS PANEL ==================== */}
        {showFilters && (
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Type
                </label>
                <select
                  value={selectedEventType}
                  onChange={(e) => setSelectedEventType(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                >
                  <option value="all">All Types</option>
                  {eventTypes
                    .filter((t) => t.id !== 'all')
                    .map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.label}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Format
                </label>
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                >
                  {eventFormats.map((format) => (
                    <option key={format.id} value={format.id}>
                      {format.label}
                    </option>
                  ))}
                </select>
              </div>
              {uniqueRegions.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Region
                  </label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  >
                    <option value="all">All Regions</option>
                    {uniqueRegions.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            {activeFiltersCount > 0 && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredEvents.length}
            </span>{' '}
            events
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* ==================== EVENTS GRID ==================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEvents.map((event) => {
            const eventTypeConfig = getEventTypeConfig(event.type);
            const formatConfig = getFormatConfig(event.format);
            const isSaved = savedEvents.includes(event.id);
            const isRegistered = registeredEvents.includes(event.id);
            const dateRelative = formatDate(event.startDate, 'relative');
            const isPast = new Date(event.endDate || event.startDate) < new Date();

            return (
              <div
                key={event.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${isPast ? 'opacity-75' : ''
                  }`}
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${eventTypeConfig.color}`}
                    >
                      {eventTypeConfig.label}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${formatConfig.color}`}
                    >
                      {formatConfig.label}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <div
                      className={`px-2 py-1 rounded-lg text-white text-xs shadow-md ${isPast ? 'bg-gray-700' : 'bg-blue-600'
                        }`}
                    >
                      {isPast ? 'Past Event' : dateRelative}
                    </div>
                  </div>
                  {isRegistered && (
                    <div className="absolute top-3 right-3">
                      <div className="px-2 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-md">
                        Registered
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  {/* Date and Location */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon('calendar', 'w-4 h-4')}
                      <span>{formatDate(event.startDate, 'short')}</span>
                      {event.endDate && <span>- {formatDate(event.endDate, 'short')}</span>}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {getIcon('location', 'w-4 h-4')}
                      <span>
                        {event.location ||
                          (event.format === 'virtual' ? 'Virtual Event' : 'TBD')}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    <Link
                      href={event.link}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {event.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Speaker Preview */}
                  {event.speakers && event.speakers.length > 0 && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex -space-x-2">
                        {event.speakers.slice(0, 3).map((speaker, idx) => (
                          <img
                            key={idx}
                            src={speaker.avatar}
                            alt={speaker.name}
                            className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                            loading="lazy"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        +{event.speakers.length} speakers
                      </span>
                    </div>
                  )}

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleSaveEvent(event.id)}
                        className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                          }`}
                        aria-label={isSaved ? 'Remove from saved' : 'Save event'}
                      >
                        {getIcon('bookmark', 'w-4 h-4')}
                      </button>
                      {!isPast && (
                        <button
                          onClick={() => openRegistrationModal(event)}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${isRegistered
                            ? 'bg-emerald-600 text-white cursor-default'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                          disabled={isRegistered}
                          aria-label={isRegistered ? 'Registered' : 'Register'}
                        >
                          {isRegistered ? 'Registered' : 'Register'}
                        </button>
                      )}
                    </div>
                    {isPast && event.recordingLink && (
                      <Link
                        href={event.recordingLink || event.link}
                        className="text-purple-600 dark:text-purple-400 text-sm font-semibold hover:underline flex items-center gap-1"
                        aria-label="Watch recording"
                      >
                        {getIcon('play', 'w-3 h-3')}
                        Watch Recording
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('calendar', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No events found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {activeTab === 'registered'
                ? "You haven't registered for any events yet."
                : activeTab === 'saved'
                  ? "You haven't saved any events yet."
                  : 'Try adjusting your search or filter criteria'}
            </p>
            {(activeTab === 'registered' || activeTab === 'saved') && (
              <button
                onClick={() => setActiveTab('upcoming')}
                className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Browse Upcoming Events
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline ml-4"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* ==================== REGISTRATION MODAL ==================== */}
        {showRegistrationModal && selectedEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowRegistrationModal(false)}
            role="dialog"
            aria-label="Registration modal"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-32 bg-blue-600">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover opacity-40"
                  loading="lazy"
                />
                <button
                  onClick={() => setShowRegistrationModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                >
                  {getIcon('x', 'w-5 h-5')}
                </button>
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-xl font-bold">Register for Event</h3>
                  <p className="text-sm text-white/80 line-clamp-1">{selectedEvent.title}</p>
                </div>
              </div>
              <div className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={registrationForm.name}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, name: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={registrationForm.email}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      value={registrationForm.company}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, company: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      value={registrationForm.title}
                      onChange={(e) => setRegistrationForm({ ...registrationForm, title: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowRegistrationModal(false)}
                      className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRegisterEvent(selectedEvent.id)}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                  By registering, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== NEWSLETTER SUBSCRIPTION ==================== */}
        {config?.showNewsletter && (
          <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
            {getIcon('bell', 'w-12 h-12 mx-auto mb-4')}
            <h3 className="text-2xl font-bold mb-2">
              {config?.newsletter?.title || 'Get Event Updates'}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {config?.newsletter?.description ||
                'Subscribe to receive notifications about upcoming events, webinars, and industry conferences.'}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const email = formData.get('email');
                if (email && email.includes('@')) {
                  // Handle subscription logic here
                  e.target.reset();
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-xl text-white border border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email for event updates"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustryEventsSection3;