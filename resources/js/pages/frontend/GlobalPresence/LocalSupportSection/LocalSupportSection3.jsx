// page/frontend/GlobalPresence/LocalSupportSection/LocalSupportSection3.jsx

/**
 * Local Support Section - Global Support Hub with Live Chat
 *
 * Unique design elements:
 * - Tabbed interface (Support Map, Contact Directory, Support Features, Live Chat)
 * - Interactive support map with zoom controls
 * - Support features carousel with auto-play and manual navigation
 * - Live chat functionality with message history
 * - Contact detail modal with full information
 * - Favorites/Saved tab with localStorage persistence
 * - Support type filter pills (Technical, Sales, Implementation, Training, Emergency)
 * - Language filter dropdown with flag emojis
 * - Region filter dropdown
 * - Search across cities, countries, languages, and services
 * - Response time badges with color coding
 * - Service tags display
 * - Circuit board background pattern
 * - Stats cards for key metrics
 * - Responsive grid layout
 * - Animated pulse badge in header
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import { FaCertificate as HiOutlineCertificate } from 'react-icons/fa';
import {
  HiOutlineGlobe,
  HiOutlineSupport,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineCalendar,
  HiOutlineEye,
  HiOutlineTag,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineBell,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineStar,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineHeart,
  HiOutlineMap,
  HiOutlineChat,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineLibrary,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineQrcode,
  HiOutlinePrinter,
  HiOutlineChatAlt,
  HiOutlinePhoneIncoming,
  HiOutlineMailOpen,
  HiOutlineVideoCamera,
} from 'react-icons/hi';
import {
  HiOutlineTrophy,
  HiOutlineBuildingOffice,
  HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import { MdOutlineFullscreen, MdOutlineHeadphones, MdOutlineClosedCaption } from 'react-icons/md';

const LocalSupportSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [zoomLevel, setZoomLevel] = useState(1);
  const [chatInput, setChatInput] = useState('');
  const [activeTab, setActiveTab] = useState('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chatMessages, setChatMessages] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [savedContacts, setSavedContacts] = useState([]);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeSupportType, setActiveSupportType] = useState('all');

  // ==================== REFS ====================
  const carouselRef = useRef(null);
  const chatEndRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const allContacts = useMemo(() => config?.supportContacts || [], [config?.supportContacts]);
  const supportFeatures = useMemo(
    () =>
      config?.supportFeatures || [
        {
          title: '24/7 Global Support',
          description: 'Round-the-clock assistance in your time zone',
          icon: 'clock',
          gradient: 'from-blue-500 to-blue-600',
        },
        {
          title: 'Multi-language Support',
          description: '15+ languages supported by native speakers',
          icon: 'globe',
          gradient: 'from-emerald-500 to-emerald-600',
        },
        {
          title: 'Fast Response Times',
          description: 'Average response time under 30 minutes',
          icon: 'bolt',
          gradient: 'from-orange-500 to-orange-600',
        },
        {
          title: 'Expert Technical Team',
          description: 'Certified professionals with deep expertise',
          icon: 'academic',
          gradient: 'from-purple-500 to-purple-600',
        },
        {
          title: 'Video Consultations',
          description: 'Face-to-face support sessions',
          icon: 'video',
          gradient: 'from-red-500 to-red-600',
        },
        {
          title: 'Dedicated Account Managers',
          description: 'Personalized support for enterprise clients',
          icon: 'users',
          gradient: 'from-indigo-500 to-indigo-600',
        },
      ],
    [config?.supportFeatures]
  );

  const regions = useMemo(
    () =>
      config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: allContacts.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' },
      ],
    [config?.regions, allContacts.length]
  );

  const supportTypes = useMemo(
    () =>
      config?.supportTypes || [
        { id: 'all', label: 'All Services', icon: 'support' },
        { id: 'Technical Support', label: 'Technical', icon: 'desktop' },
        { id: 'Sales Support', label: 'Sales', icon: 'briefcase' },
        { id: 'Implementation Services', label: 'Implementation', icon: 'cog' },
        { id: 'Training', label: 'Training', icon: 'academic' },
        { id: 'Emergency Support', label: 'Emergency', icon: 'phoneIncoming' },
      ],
    [config?.supportTypes]
  );

  const tabs = useMemo(
    () =>
      config?.tabs || [
        { id: 'map', label: 'Support Map', icon: 'map' },
        { id: 'contacts', label: 'Contact Directory', icon: 'users' },
        { id: 'features', label: 'Support Features', icon: 'star' },
        { id: 'chat', label: 'Live Chat', icon: 'chatAlt' },
      ],
    [config?.tabs]
  );

  const stats = useMemo(
    () =>
      config?.stats || [
        { value: '24/7', label: 'Global Support', icon: 'clock' },
        { value: '15+', label: 'Languages', icon: 'globe' },
        { value: '30min', label: 'Avg Response', icon: 'clock' },
        { value: '98%', label: 'Satisfaction', icon: 'star' },
      ],
    [config?.stats]
  );

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedSupportContacts');
    if (saved) setSavedContacts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('savedSupportContacts', JSON.stringify(savedContacts));
  }, [savedContacts]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = useCallback((iconName, className = 'w-5 h-5') => {
    const icons = {
      support: <HiOutlineSupport className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      office: <HiOutlineOfficeBuilding className={className} />,
      users: <HiOutlineUsers className={className} />,
      clock: <HiOutlineClock className={className} />,
      phone: <HiOutlinePhone className={className} />,
      mail: <HiOutlineMail className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      eye: <HiOutlineEye className={className} />,
      tag: <HiOutlineTag className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      bell: <HiOutlineBell className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      rocket: <HiOutlineRocket className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      usergroup: <HiOutlineUserGroup className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      lightbulb: <HiOutlineLightBulb className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      arrow: <HiArrowRight className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      presentation: <HiOutlinePresentationChartLine className={className} />,
      star: <HiOutlineStar className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      template: <HiOutlineTemplate className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      heart: <HiOutlineHeart className={className} />,
      map: <HiOutlineMap className={className} />,
      chat: <HiOutlineChat className={className} />,
      headphones: <MdOutlineHeadphones className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      library: <HiOutlineLibrary className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <MdOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <MdOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      chatAlt: <HiOutlineChatAlt className={className} />,
      phoneIncoming: <HiOutlinePhoneIncoming className={className} />,
      mailOpen: <HiOutlineMailOpen className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
    };
    return icons[iconName] || <HiOutlineSupport className={className} />;
  }, []);

  /**
   * Returns region configuration with color and flag
   */
  const getRegionConfig = useCallback((regionId) => {
    const configs = {
      'north-america': {
        color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: 'globe',
        label: 'North America',
        flag: '🇺🇸',
        gradient: 'from-blue-500 to-blue-600',
      },
      europe: {
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: 'globe',
        label: 'Europe',
        flag: '🇪🇺',
        gradient: 'from-purple-500 to-purple-600',
      },
      'asia-pacific': {
        color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        icon: 'globe',
        label: 'Asia Pacific',
        flag: '🌏',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      'latin-america': {
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: 'globe',
        label: 'Latin America',
        flag: '🌎',
        gradient: 'from-orange-500 to-orange-600',
      },
      'middle-east': {
        color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: 'globe',
        label: 'Middle East',
        flag: '🕌',
        gradient: 'from-red-500 to-red-600',
      },
      africa: {
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: 'globe',
        label: 'Africa',
        flag: '🌍',
        gradient: 'from-yellow-500 to-amber-500',
      },
    };
    return (
      configs[regionId] || {
        color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        icon: 'globe',
        label: regionId,
      }
    );
  }, []);

  /**
   * Returns language flag emoji
   */
  const getLanguageFlag = useCallback((language) => {
    const flags = {
      english: '🇺🇸',
      spanish: '🇪🇸',
      french: '🇫🇷',
      german: '🇩🇪',
      portuguese: '🇧🇷',
      mandarin: '🇨🇳',
      japanese: '🇯🇵',
      arabic: '🇦🇪',
    };
    return flags[language] || '🌐';
  }, []);

  /**
   * Get unique languages from contacts for filter dropdown
   */
  const getUniqueLanguages = useCallback(() => {
    const langs = new Set();
    allContacts.forEach((contact) => {
      if (contact.languages) {
        contact.languages.forEach((lang) => langs.add(lang));
      }
    });
    return Array.from(langs);
  }, [allContacts]);

  /**
   * Toggle save/bookmark status for a contact
   */
  const handleSaveContact = useCallback((contactId) => {
    setSavedContacts((prev) =>
      prev.includes(contactId) ? prev.filter((id) => id !== contactId) : [...prev, contactId]
    );
  }, []);

  /**
   * Open contact modal
   */
  const openContactModal = useCallback((contact) => {
    setSelectedContact(contact);
    setShowContactModal(true);
  }, []);

  /**
   * Send chat message
   */
  const sendChatMessage = useCallback(() => {
    if (!chatInput.trim()) return;
    const newMessage = {
      text: chatInput,
      sender: 'user',
      time: new Date().toLocaleTimeString(),
    };
    setChatMessages((prev) => [...prev, newMessage]);
    setChatInput('');
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        text: "Thank you for reaching out! A support agent will be with you shortly. In the meantime, how can I help you?",
        sender: 'bot',
        time: new Date().toLocaleTimeString(),
      };
      setChatMessages((prev) => [...prev, botResponse]);
    }, 1000);
  }, [chatInput]);

  /**
   * Carousel navigation handlers
   */
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (supportFeatures.length || 1));
  }, [supportFeatures.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (supportFeatures.length || 1)) % (supportFeatures.length || 1));
  }, [supportFeatures.length]);

  /**
   * Clear all active filters
   */
  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedLanguage('all');
    setActiveSupportType('all');
  }, []);

  // ==================== AUTO-PLAY CAROUSEL ====================
  useEffect(() => {
    if (config?.autoPlayCarousel && supportFeatures.length > 1 && activeTab === 'features') {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, supportFeatures.length, activeTab, nextSlide]);

  // ==================== AUTO-SCROLL CHAT ====================
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // ==================== FILTERING LOGIC ====================

  const filteredContacts = useMemo(() => {
    let contacts = [...allContacts];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      contacts = contacts.filter(
        (c) =>
          c.city?.toLowerCase().includes(query) ||
          c.country?.toLowerCase().includes(query) ||
          c.languages?.some((lang) => lang.toLowerCase().includes(query)) ||
          c.services?.some((service) => service.toLowerCase().includes(query))
      );
    }

    if (selectedRegion !== 'all') {
      contacts = contacts.filter((c) => c.region === selectedRegion);
    }

    if (selectedLanguage !== 'all') {
      contacts = contacts.filter((c) => c.languages?.includes(selectedLanguage));
    }

    if (activeSupportType !== 'all') {
      contacts = contacts.filter((c) => c.services?.includes(activeSupportType));
    }

    return contacts;
  }, [allContacts, searchQuery, selectedRegion, selectedLanguage, activeSupportType]);

  const uniqueLanguages = getUniqueLanguages();
  const activeFiltersCount = [
    selectedRegion !== 'all',
    selectedLanguage !== 'all',
    activeSupportType !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Local Support Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-support" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-support)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            {getIcon('headphones', 'w-4 h-4')}
            <span className="text-sm font-medium">{config?.badge || 'Local Support'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Global'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Support'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              'Get personalized support in your language and time zone. Our local teams are ready to help you succeed, wherever you are.'}
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
              {getIcon(tab.icon, 'w-4 h-4')}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== SUPPORT MAP TAB ==================== */}
        {activeTab === 'map' && (
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="relative aspect-video bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                {/* Zoom Controls */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <button
                    onClick={() => setZoomLevel(Math.min(zoomLevel + 0.2, 2))}
                    className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Zoom in"
                  >
                    {getIcon('zoom', 'w-4 h-4')}
                  </button>
                  <button
                    onClick={() => setZoomLevel(Math.max(zoomLevel - 0.2, 0.5))}
                    className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Zoom out"
                  >
                    {getIcon('zoom', 'w-4 h-4')}
                  </button>
                </div>

                <svg
                  className="w-full h-full transition-transform duration-300"
                  viewBox="0 0 1200 600"
                  preserveAspectRatio="none"
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
                >
                  <defs>
                    <linearGradient id="map-gradient-support" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <rect width="1200" height="600" fill="url(#map-gradient-support)" />
                  {/* Simplified continent outlines */}
                  <path
                    d="M200,180 L280,140 L370,150 L400,190 L370,240 L280,260 L200,240 L160,200 Z"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M520,200 L620,160 L720,170 L760,210 L720,260 L620,270 L520,240 L490,220 Z"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M920,220 L1020,190 L1100,210 L1120,250 L1070,290 L970,280 L900,250 Z"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M300,380 L420,350 L500,360 L530,400 L490,440 L380,460 L280,430 L250,400 Z"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M720,420 L800,390 L870,410 L900,450 L840,490 L750,480 L690,450 Z"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />

                  {/* Support location markers */}
                  {filteredContacts.map((contact, idx) => {
                    const regionConfig = getRegionConfig(contact.region);
                    const isHovered = hoveredMarker === contact.id;
                    const markerX = contact.mapX || 400 + (idx % 5) * 80;
                    const markerY = contact.mapY || 250 + Math.floor(idx / 5) * 50;
                    return (
                      <g
                        key={idx}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredMarker(contact.id)}
                        onMouseLeave={() => setHoveredMarker(null)}
                        onClick={() => openContactModal(contact)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openContactModal(contact)}
                      >
                        <circle
                          cx={markerX}
                          cy={markerY}
                          r={isHovered ? 12 : 8}
                          fill={regionConfig.color.includes('blue') ? '#3B82F6' : regionConfig.color.includes('purple') ? '#8B5CF6' : '#10B981'}
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />
                        <circle cx={markerX} cy={markerY} r="16" fill="#3B82F6" opacity="0.2">
                          <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                        {isHovered && (
                          <text
                            x={markerX}
                            y={markerY - 15}
                            textAnchor="middle"
                            fill="#1F2937"
                            fontSize="10"
                            fontWeight="bold"
                            className="dark:fill-white"
                          >
                            {contact.city}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-md">
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Support Centers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">Regional Hubs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CONTACT DIRECTORY TAB ==================== */}
        {activeTab === 'contacts' && (
          <>
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  {getIcon('search', 'w-5 h-5 text-gray-400')}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by city, country, language, or service..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search support contacts"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by region"
                >
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.label}
                    </option>
                  ))}
                </select>
                {uniqueLanguages.length > 0 && (
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    aria-label="Filter by language"
                  >
                    <option value="all">All Languages</option>
                    {uniqueLanguages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
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

            {/* Support Type Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {supportTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveSupportType(type.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeSupportType === type.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  aria-label={`Show ${type.label} support`}
                >
                  {getIcon(type.icon, 'w-4 h-4')}
                  {type.label}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {filteredContacts.length}
                </span>{' '}
                support locations
              </p>
            </div>

            {/* Contacts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredContacts.map((contact) => {
                const regionConfig = getRegionConfig(contact.region);
                const isSaved = savedContacts.includes(contact.id);
                return (
                  <div
                    key={contact.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => openContactModal(contact)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openContactModal(contact)}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl ${regionConfig.color} flex items-center justify-center text-2xl`}
                          >
                            {regionConfig.flag}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">
                              {contact.city}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{contact.country}</p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSaveContact(contact.id);
                          }}
                          className={`transition-colors ${isSaved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'
                            }`}
                          aria-label={isSaved ? 'Remove from saved' : 'Save contact'}
                        >
                          {getIcon('bookmark', 'w-4 h-4')}
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${regionConfig.color}`}>
                          {regionConfig.label}
                        </span>
                        {contact.responseTime && (
                          <span className="text-xs text-emerald-600 dark:text-emerald-400">
                            {contact.responseTime} min response
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {getIcon('phone', 'w-4 h-4')}
                        <span>{contact.phone}</span>
                      </div>

                      {/* Languages */}
                      {contact.languages && contact.languages.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {contact.languages.slice(0, 3).map((lang, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1"
                            >
                              <span>{getLanguageFlag(lang)}</span>
                              {lang.charAt(0).toUpperCase() + lang.slice(1)}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {contact.teamSize} support specialists
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ==================== SUPPORT FEATURES TAB - CAROUSEL ==================== */}
        {activeTab === 'features' && (
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {supportFeatures.map((feature, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <div
                      className={`bg-linear-to-br ${feature.gradient} rounded-3xl p-12 text-white text-center`}
                    >
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        {getIcon(feature.icon, 'w-10 h-10 text-white')}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h2>
                      <p className="text-white/90 text-xl max-w-2xl mx-auto">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {supportFeatures.length > 1 && (
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
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {supportFeatures.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ==================== LIVE CHAT TAB ==================== */}
        {activeTab === 'chat' && (
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    {getIcon('chatAlt', 'w-6 h-6')}
                  </div>
                  <div>
                    <h3 className="font-bold">Live Support Chat</h3>
                    <p className="text-xs text-white/80">Typically replies in under 1 minute</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs">Online</span>
                  </div>
                </div>
              </div>
              <div className="h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-700/30">
                {chatMessages.length === 0 ? (
                  <div className="text-center text-gray-500 dark:text-gray-400 mt-32">
                    {getIcon('chatAlt', 'w-12 h-12 mx-auto mb-3 opacity-50')}
                    <p>Start a conversation with our support team</p>
                    <p className="text-sm">We're here to help 24/7</p>
                  </div>
                ) : (
                  chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-2xl ${msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-bl-none shadow'
                          }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                      </div>
                    </div>
                  ))
                )}
                <div ref={chatEndRef} />
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Chat message"
                />
                <button
                  onClick={sendChatMessage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== EMPTY STATE ==================== */}
        {activeTab === 'contacts' && filteredContacts.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl mb-12">
            <div className="flex justify-center mb-4 text-gray-400">
              {getIcon('support', 'w-16 h-16')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No support contacts found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== CONTACT DETAIL MODAL ==================== */}
        {showContactModal && selectedContact && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowContactModal(false)}
            role="dialog"
            aria-label="Contact details"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`p-6 bg-linear-to-r ${getRegionConfig(selectedContact.region).gradient} text-white`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl">{getRegionConfig(selectedContact.region).flag}</div>
                    <h2 className="text-xl font-bold">{selectedContact.city}</h2>
                    <p className="text-sm text-white/80">{selectedContact.country}</p>
                  </div>
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    {getIcon('x', 'w-6 h-6')}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    {getIcon('phone', 'w-5 h-5')}
                    <span>{selectedContact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    {getIcon('mail', 'w-5 h-5')}
                    <span>{selectedContact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    {getIcon('clock', 'w-5 h-5')}
                    <span>{selectedContact.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    {getIcon('location', 'w-5 h-5')}
                    <span className="text-sm">{selectedContact.address}</span>
                  </div>
                </div>
                {selectedContact.languages && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Languages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedContact.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1"
                        >
                          <span>{getLanguageFlag(lang)}</span>
                          {lang.charAt(0).toUpperCase() + lang.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {selectedContact.services && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Services
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedContact.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={`tel:${selectedContact.phone}`}
                    className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-center py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 24/7 SUPPORT BANNER ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="text-blue-100 max-w-2xl">
                Our global support team is available 24/7 to help you with any questions or issues.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+18885550123"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                {getIcon('phone', 'w-4 h-4')}
                Call Now
              </a>
              <button
                onClick={() => {
                  setActiveTab('chat');
                }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              >
                {getIcon('chatAlt', 'w-4 h-4')}
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @media print {
          .no-print, button:not(.print-button) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LocalSupportSection3;