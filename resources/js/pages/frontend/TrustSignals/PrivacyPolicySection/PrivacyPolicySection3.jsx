// page/frontend/TrustSignals/PrivacyPolicySection/PrivacyPolicySection3.jsx

/**
 * Privacy Policy Section III - Full Privacy Hub with Stories & Video
 *
 * Unique Design Elements:
 * - Multi-tab UI (Privacy Policy, Trust Stories, FAQ)
 * - Stats Cards with Gradient Backgrounds for Compliance Metrics
 * - Search Functionality to Filter Policy Sections
 * - Accordion-Style Policy Sections with Expand/Collapse
 * - Interactive Cookie Preference Manager with Toggle Switches
 * - Trust Stories Carousel with Auto-play and Manual Navigation
 * - FAQ Accordion with Video Explanation Links
 * - Privacy Rights Modal with Detailed Instructions
 * - Video Modal for Educational Content
 * - Data Types, Rights, and Security Measures Tags Display
 * - LocalStorage Persistence for Cookie Preferences
 * - Circuit Board Background Pattern
 * - Animated Pulse Badge in Header
 * - Responsive Design with Mobile-Friendly Layout
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useRef } from 'react';

// React Icons - Heroicons, Heroicons 2, FontAwesome, Material Design
import {
  FaQuoteLeft as HiOutlineQuote,
  FaCertificate as HiOutlineCertificate,
} from 'react-icons/fa';
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineCalendar,
  HiOutlineTag,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineBell,
  HiOutlineDownload,
  HiOutlinePlay,
  HiOutlineDocumentText,
  HiOutlineCode,
  HiOutlineCog,
  HiOutlineRefresh,
  HiOutlineStar,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlineThumbUp,
  HiOutlineChat,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineNewspaper,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineCreditCard,
  HiOutlineChartPie,
  HiOutlineTemplate,
  HiOutlineBadgeCheck,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineLibrary,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineQrcode,
  HiOutlinePrinter,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import {
  MdOutlineFullscreen as HiOutlineFullscreen,
  MdOutlineClosedCaption as HiOutlineClosedCaption,
  MdOutlineHeadphones as HiOutlineHeadphones,
} from 'react-icons/md';

const PrivacyPolicySection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('policy');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [preferencesSaved, setPreferencesSaved] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const [cookiePreferences, setCookiePreferences] = useState({ necessary: true, functional: true, analytics: false, marketing: false });

  // ==================== REFERENCE MANAGEMENT ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== LOCAL STORAGE ====================
  useEffect(() => {
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      setCookiePreferences(JSON.parse(saved));
    }
  }, []);

  // ==================== MEMOIZED DATA ====================

  const tabs = [
    { id: 'policy', label: 'Privacy Policy', icon: 'document' },
    { id: 'stories', label: 'Trust Stories', icon: 'users' },
    { id: 'faq', label: 'FAQ', icon: 'chat' }
  ];

  const sections = config?.sections || [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: 'document',
      summary: 'Overview of our privacy commitment and policy scope.',
      content: 'We at SupplyChainPro are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services. Please read this policy carefully to understand our views and practices regarding your personal data.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: 'database',
      summary: 'Types of personal data we collect from users.',
      content: 'We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, phone number, company information, and payment details.',
      dataTypes: ['Account Information', 'Usage Data', 'Device Information', 'Location Data']
    },
    {
      id: 'use-of-information',
      title: 'How We Use Your Information',
      icon: 'cog',
      summary: 'Purposes for processing your personal data.',
      content: 'We use the information we collect to provide, maintain, and improve our services; to process transactions; to communicate with you; to personalize your experience; and to comply with legal obligations.',
      purposes: ['Service Delivery', 'Analytics & Improvement', 'Customer Support', 'Legal Compliance']
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: 'users',
      summary: 'Control you have over your personal data.',
      content: 'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data.',
      rights: [
        { name: 'Right to Access', description: 'Request a copy of your data', action: 'Request Access' },
        { name: 'Right to Rectification', description: 'Correct inaccurate data', action: 'Correct Data' },
        { name: 'Right to Erasure', description: 'Request data deletion', action: 'Request Deletion' },
        { name: 'Right to Portability', description: 'Export your data', action: 'Export Data' }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: 'shield',
      summary: 'Measures we take to protect your data.',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      securityMeasures: ['AES-256 Encryption', 'TLS 1.3', 'Access Controls', 'Regular Audits']
    }
  ];

  const customerStories = config?.customerStories || [
    {
      id: 1,
      name: 'Global Retail Corp',
      role: 'CTO',
      company: 'Global Retail Corp',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
      quote: "SupplyChainPro's transparent privacy policy and commitment to data protection gave us complete confidence in their platform.",
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 2,
      name: 'HealthTech Solutions',
      role: 'VP of Security',
      company: 'HealthTech Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
      quote: "Their GDPR compliance and privacy-first approach made them the obvious choice for our healthcare data.",
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 3,
      name: 'EuroLogistics',
      role: 'DPO',
      company: 'EuroLogistics',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
      quote: "Managing cross-border data is complex, but SupplyChainPro's privacy framework made compliance straightforward.",
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ];

  const faqs = config?.faqs || [
    {
      question: 'How do I request access to my personal data?',
      answer: 'You can submit a data access request through our Privacy Request form or by emailing privacy@supplychainpro.com. We will respond within 30 days.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      question: 'How long do you keep my data?',
      answer: 'We retain data as long as necessary to provide our services and as required by law. Account data is kept for 7 years, usage data for 2 years, and log data for 1 year.'
    },
    {
      question: 'Do you sell my personal information?',
      answer: 'No, we do not sell your personal information. We only share data with service providers who help us deliver our services, under strict confidentiality agreements.'
    },
    {
      question: 'How do I delete my account?',
      answer: 'You can delete your account through your account settings or by contacting our support team. We will permanently delete your data within 30 days of request.'
    }
  ];

  const stats = config?.stats || [
    { value: '100%', label: 'GDPR Compliant', icon: 'globe', gradient: 'from-blue-500 to-blue-600' },
    { value: '256-bit', label: 'Encryption', icon: 'lock', gradient: 'from-emerald-500 to-emerald-600' },
    { value: '24/7', label: 'Monitoring', icon: 'eye', gradient: 'from-purple-500 to-purple-600' },
    { value: '0', label: 'Breaches', icon: 'shield', gradient: 'from-amber-500 to-amber-600' }
  ];

  const lastUpdated = config?.lastUpdated || 'March 15, 2024';

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = (iconName, className = 'w-5 h-5') => {
    const icons = {
      shield: <HiOutlineShieldCheck className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      chip: <HiOutlineChip className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      users: <HiOutlineUsers className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      tag: <HiOutlineTag className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      bell: <HiOutlineBell className={className} />,
      download: <HiOutlineDownload className={className} />,
      play: <HiOutlinePlay className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      code: <HiOutlineCode className={className} />,
      cog: <HiOutlineCog className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      star: <HiOutlineStar className={className} />,
      flag: <HiOutlineFlag className={className} />,
      gift: <HiOutlineGift className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      external: <HiOutlineExternalLink className={className} />,
      mail: <HiOutlineMail className={className} />,
      'thumbs-up': <HiOutlineThumbUp className={className} />,
      chat: <HiOutlineChat className={className} />,
      quote: <HiOutlineQuote className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      newspaper: <HiOutlineNewspaper className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      credit: <HiOutlineCreditCard className={className} />,
      pie: <HiOutlineChartPie className={className} />,
      template: <HiOutlineTemplate className={className} />,
      badge: <HiOutlineBadgeCheck className={className} />,
      certificate: <HiOutlineCertificate className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      phone: <HiOutlinePhone className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      heart: <HiOutlineHeart className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      database: <HiOutlineDatabase className={className} />,
      server: <HiOutlineServer className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      library: <HiOutlineLibrary className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <HiOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <HiOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      headphones: <HiOutlineHeadphones className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineShieldCheck className={className} />;
  };

  /**
   * Handle cookie preference change
   */
  const handleCookieChange = (type) => {
    setCookiePreferences({
      ...cookiePreferences,
      [type]: !cookiePreferences[type]
    });
  };

  /**
   * Save cookie preferences
   */
  const saveCookiePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setPreferencesSaved(true);
    setTimeout(() => setPreferencesSaved(false), 3000);
  };

  /**
   * Open privacy modal
   */
  const openPrivacyModal = (right) => {
    setSelectedRight(right);
    setShowPrivacyModal(true);
  };

  /**
   * Close privacy modal
   */
  const closePrivacyModal = () => {
    setShowPrivacyModal(false);
    setSelectedRight(null);
  };

  /**
   * Toggle FAQ
   */
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  /**
   * Toggle section expansion
   */
  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  /**
   * Open video modal
   */
  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideoModal(true);
  };

  /**
   * Close video modal
   */
  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideo(null);
  };

  // ==================== CAROUSEL NAVIGATION ====================
  const storiesCount = customerStories.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % storiesCount);
  }, [storiesCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + storiesCount) % storiesCount);
  }, [storiesCount]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && storiesCount > 1 && activeTab === 'stories') {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, storiesCount, activeTab, nextSlide]);

  // Filter sections based on search
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Privacy Policy Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-privacy" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-privacy)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineLockClosed className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || 'Privacy Policy'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Your'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Privacy'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              "We are committed to transparency about how we collect, use, and protect your personal information."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 bg-linear-to-r ${stat.gradient} rounded-2xl px-5 py-2 shadow-sm text-white`}
              >
                <div className="text-left">
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs opacity-90">{stat.label}</div>
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

        {/* ==================== POLICY TAB ==================== */}
        {activeTab === 'policy' && (
          <>
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the privacy policy..."
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Search privacy policy"
              />
            </div>

            {/* Policy Sections - Accordion */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-12">
              {filteredSections.map((section) => (
                <div
                  key={section.id}
                  className={`border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${activeSection === section.id ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''
                    }`}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                    aria-label={`Toggle ${section.title} section`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        {getIcon(section.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                        <p className="text-sm text-gray-500">{section.summary}</p>
                      </div>
                    </div>
                    <HiOutlineChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${activeSection === section.id ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {activeSection === section.id && (
                    <div className="px-6 pb-6 pt-0 animate-fadeIn">
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{section.content}</p>

                      {section.dataTypes && (
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Data Types:</p>
                          <div className="flex flex-wrap gap-2">
                            {section.dataTypes.map((type, i) => (
                              <span
                                key={i}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.purposes && (
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Purposes:</p>
                          <div className="flex flex-wrap gap-2">
                            {section.purposes.map((purpose, i) => (
                              <span
                                key={i}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                              >
                                {purpose}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.rights && (
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Rights:</p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {section.rights.map((right, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl"
                              >
                                <div>
                                  <p className="font-medium text-gray-900 dark:text-white text-sm">{right.name}</p>
                                  <p className="text-xs text-gray-500">{right.description}</p>
                                </div>
                                <button
                                  onClick={() => openPrivacyModal(right)}
                                  className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                                  aria-label={`Submit ${right.name} request`}
                                >
                                  {right.action} →
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.securityMeasures && (
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Security Measures:</p>
                          <div className="flex flex-wrap gap-2">
                            {section.securityMeasures.map((measure, i) => (
                              <span
                                key={i}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                              >
                                {measure}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.videoUrl && (
                        <button
                          onClick={() => openVideoModal(section.videoUrl)}
                          className="mt-4 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                          aria-label="Watch video overview"
                        >
                          <HiOutlinePlay className="w-4 h-4" />
                          Watch Video Overview
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Cookie Preferences */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <HiOutlineTag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cookie Preferences</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Manage your cookie preferences. Essential cookies are always enabled as they are necessary for the website
                to function properly.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Necessary Cookies</p>
                    <p className="text-sm text-gray-500">Required for basic site functionality</p>
                  </div>
                  <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-semibold">
                    Always Active
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Functional Cookies</p>
                    <p className="text-sm text-gray-500">Enable enhanced features and personalization</p>
                  </div>
                  <button
                    onClick={() => handleCookieChange('functional')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${cookiePreferences.functional ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    aria-label="Toggle functional cookies"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${cookiePreferences.functional ? 'translate-x-6' : 'translate-x-1'
                        }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Analytics Cookies</p>
                    <p className="text-sm text-gray-500">Help us understand how visitors interact with our site</p>
                  </div>
                  <button
                    onClick={() => handleCookieChange('analytics')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${cookiePreferences.analytics ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    aria-label="Toggle analytics cookies"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${cookiePreferences.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Marketing Cookies</p>
                    <p className="text-sm text-gray-500">Used to deliver relevant advertisements</p>
                  </div>
                  <button
                    onClick={() => handleCookieChange('marketing')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${cookiePreferences.marketing ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    aria-label="Toggle marketing cookies"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${cookiePreferences.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`}
                    />
                  </button>
                </div>
              </div>

              {preferencesSaved && (
                <div className="mb-4 p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-700 dark:text-emerald-400 text-sm text-center animate-fadeIn">
                  Preferences saved successfully!
                </div>
              )}

              <button
                onClick={saveCookiePreferences}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                aria-label="Save cookie preferences"
              >
                Save Cookie Preferences
              </button>
            </div>
          </>
        )}

        {/* ==================== STORIES TAB ==================== */}
        {activeTab === 'stories' && customerStories.length > 0 && (
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {customerStories.map((story, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={story.avatar}
                          alt={story.name}
                          className="w-16 h-16 rounded-full object-cover"
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{story.name}</h3>
                          <p className="text-sm text-gray-500">{story.role}</p>
                          <p className="text-xs text-gray-400">{story.company}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex gap-1 text-amber-500 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 italic text-lg">"{story.quote}"</p>
                      </div>
                      {story.videoUrl && (
                        <button
                          onClick={() => openVideoModal(story.videoUrl)}
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                          aria-label="Watch full testimonial"
                        >
                          <HiOutlinePlay className="w-4 h-4" />
                          Watch Full Testimonial
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {customerStories.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Previous slide"
                  >
                    <HiOutlineChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Next slide"
                  >
                    <HiOutlineChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {customerStories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-400'
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

        {/* ==================== FAQ TAB ==================== */}
        {activeTab === 'faq' && (
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 flex items-center justify-between text-left"
                  aria-label={`Toggle FAQ: ${faq.question}`}
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  <HiOutlineChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 pb-5 animate-fadeIn">
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{faq.answer}</p>
                    {faq.videoUrl && (
                      <button
                        onClick={() => openVideoModal(faq.videoUrl)}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                        aria-label="Watch video explanation"
                      >
                        <HiOutlinePlay className="w-4 h-4" />
                        Watch Video Explanation
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our Data Protection Officer is available to answer your questions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:privacy@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              aria-label="Email privacy team"
            >
              <HiOutlineMail className="w-4 h-4" />
              privacy@supplychainpro.com
            </a>
            <a
              href="/privacy-request"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Submit privacy request"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              Submit Privacy Request
            </a>
          </div>
          <p className="text-blue-100 text-sm mt-4">Last Updated: {lastUpdated}</p>
        </div>

        {/* ==================== PRIVACY RIGHTS MODAL ==================== */}
        {showPrivacyModal && selectedRight && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={closePrivacyModal}
            role="dialog"
            aria-label={`${selectedRight.name} details`}
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">{selectedRight.name}</h3>
                  <button
                    onClick={closePrivacyModal}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedRight.description}</p>
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">How to exercise this right:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Submit a request through our privacy request form or email us at privacy@supplychainpro.com. We will
                    respond within 30 days.
                  </p>
                </div>
                <button
                  onClick={() => {
                    closePrivacyModal();
                    window.location.href = '/privacy-request';
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  aria-label="Submit request"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && currentVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeVideoModal}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
              <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
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
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default PrivacyPolicySection3;