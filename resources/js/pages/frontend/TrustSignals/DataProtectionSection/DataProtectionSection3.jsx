// page/frontend/TrustSignals/DataProtectionSection/DataProtectionSection3.jsx

/**
 * Data Protection Section III - Full Privacy Hub with Multi-step Request Form
 *
 * Unique Design Elements:
 * - Stats Cards for Data Protection Metrics (GDPR Compliance, Encryption, Response Time, Breaches)
 * - Multi-tab UI (Protection Principles, Your Rights, Submit Request, Trust Stories)
 * - Protection Principles Cards with Expandable Details
 * - Data Subject Rights Cards with Direct Request Submission
 * - Multi-step Data Protection Request Form with Progress Indicator
 * - Application ID Generation on Successful Submission
 * - Trust Stories Carousel with Auto-play and Manual Navigation
 * - Form Validation with Error Messages
 * - Video Modal for Customer Testimonial Playback
 * - Circuit Board Background Pattern
 * - Animated Pulse Badge in Header
 * - Responsive Grid Layout for All Tabs
 * - Contact Data Protection Officer Section
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
  HiArrowRight,
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
  HiOutlineClipboardCheck,
  HiOutlineLibrary,
  HiOutlineZoomIn,
  HiOutlineVolumeUp,
  HiOutlineQrcode,
  HiOutlinePrinter,
  HiOutlineTrash,
  HiOutlinePause,
  HiOutlinePencil,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import {
  MdOutlineFullscreen as HiOutlineFullscreen,
  MdOutlineClosedCaption as HiOutlineClosedCaption,
  MdOutlineHeadphones as HiOutlineHeadphones,
} from 'react-icons/md';

const DataProtectionSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [formStep, setFormStep] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [applicationId, setApplicationId] = useState('');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activePrinciple, setActivePrinciple] = useState(null);
  const [formData, setFormData] = useState({
    // Step 1 - Identity
    name: '',
    email: '',
    subjectId: '',
    country: '',
    // Step 2 - Request Details
    requestType: '',
    dataCategories: [],
    specificData: '',
    // Step 3 - Verification
    identificationDoc: null,
    additionalInfo: '',
    // Step 4 - Confirmation
    agreeToTerms: false,
    receiveCopy: false
  });

  // ==================== REFERENCE MANAGEMENT ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================

  const tabs = [
    { id: 'overview', label: 'Protection Principles', icon: 'shield' },
    { id: 'rights', label: 'Your Rights', icon: 'users' },
    { id: 'request', label: 'Submit Request', icon: 'clipboard' },
    { id: 'stories', label: 'Trust Stories', icon: 'chat' }
  ];

  const principles = config?.principles || [
    {
      title: 'Data Minimization',
      description: 'We only collect data that is necessary for providing our services.',
      icon: 'database',
      gradient: 'from-blue-500 to-blue-600',
      stats: '30% less data collected',
      details: [
        'Limited data collection to essential information',
        'Regular data retention reviews',
        'Automatic data deletion policies'
      ]
    },
    {
      title: 'Purpose Limitation',
      description: 'Data is collected for specified, explicit, and legitimate purposes only.',
      icon: 'flag',
      gradient: 'from-emerald-500 to-emerald-600',
      stats: '100% purpose alignment',
      details: [
        'Clear purpose documentation',
        'Consent-based processing',
        'No undisclosed data usage'
      ]
    },
    {
      title: 'Storage Limitation',
      description: 'Data is retained only as long as necessary.',
      icon: 'clock',
      gradient: 'from-purple-500 to-purple-600',
      stats: 'Automated deletion',
      details: [
        'Defined retention periods',
        'Automated deletion schedules',
        'Secure data disposal'
      ]
    },
    {
      title: 'Integrity & Confidentiality',
      description: 'Data is processed securely with appropriate measures.',
      icon: 'shield',
      gradient: 'from-rose-500 to-rose-600',
      stats: 'AES-256 | TLS 1.3',
      details: [
        'AES-256 encryption at rest',
        'TLS 1.3 encryption in transit',
        'Access controls and authentication'
      ]
    }
  ];

  const rights = config?.rights || [
    { title: 'Right to Access', icon: 'eye', description: 'Request a copy of all personal data we hold about you.', processTime: '30 days' },
    { title: 'Right to Rectification', icon: 'edit', description: 'Correct inaccurate or incomplete data.', processTime: '15 days' },
    { title: 'Right to Erasure', icon: 'trash', description: 'Request deletion of your personal data.', processTime: '30 days' },
    { title: 'Right to Restrict Processing', icon: 'pause', description: 'Limit how we use your data.', processTime: '15 days' },
    { title: 'Right to Data Portability', icon: 'download', description: 'Receive your data in a machine-readable format.', processTime: '30 days' },
    { title: 'Right to Object', icon: 'x', description: 'Object to data processing for specific purposes.', processTime: '15 days' }
  ];

  const customerStories = config?.customerStories || [
    {
      id: 1,
      name: 'Global Retail Corp',
      role: 'CTO',
      company: 'Global Retail Corp',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
      quote: "SupplyChainPro's data protection practices gave us the confidence to trust them with our sensitive supply chain data. Their GDPR compliance and transparent approach to data handling set them apart.",
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 2,
      name: 'HealthTech Solutions',
      role: 'VP of Security',
      company: 'HealthTech Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
      quote: "As a healthcare company, data protection is critical. SupplyChainPro's commitment to data minimization and security gave us complete peace of mind.",
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 3,
      name: 'EuroLogistics',
      role: 'DPO',
      company: 'EuroLogistics',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
      quote: "Managing data across EU borders is complex, but SupplyChainPro's data protection framework made compliance straightforward. Their DPO was incredibly helpful.",
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ];

  const stats = config?.stats || [
    { value: '100%', label: 'GDPR Compliant', icon: 'globe' },
    { value: '256-bit', label: 'Encryption', icon: 'lock' },
    { value: '<30', label: 'Days Response', icon: 'clock' },
    { value: '0', label: 'Data Breaches', icon: 'shield' }
  ];

  const requestTypes = [
    'Right to Access',
    'Right to Rectification',
    'Right to Erasure',
    'Right to Restrict Processing',
    'Right to Data Portability',
    'Right to Object'
  ];

  const dataCategories = [
    'Account Information',
    'Usage Data',
    'Transaction History',
    'Communication Records',
    'Technical Data',
    'Preferences'
  ];

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
      clipboard: <HiOutlineClipboardCheck className={className} />,
      library: <HiOutlineLibrary className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      fullscreen: <HiOutlineFullscreen className={className} />,
      volume: <HiOutlineVolumeUp className={className} />,
      caption: <HiOutlineClosedCaption className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      printer: <HiOutlinePrinter className={className} />,
      trash: <HiOutlineTrash className={className} />,
      pause: <HiOutlinePause className={className} />,
      edit: <HiOutlinePencil className={className} />,
      headphones: <HiOutlineHeadphones className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineShieldCheck className={className} />;
  };

  /**
   * Handle form input change
   */
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'checkbox') {
      const current = formData[name] || [];
      if (checked) {
        setFormData({ ...formData, [name]: [...current, value] });
      } else {
        setFormData({ ...formData, [name]: current.filter(item => item !== value) });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  /**
   * Validate current step
   */
  const validateStep = () => {
    const newErrors = {};

    if (formStep === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    } else if (formStep === 2) {
      if (!formData.requestType) newErrors.requestType = 'Request type is required';
    } else if (formStep === 4) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Next step
   */
  const nextStep = () => {
    if (validateStep()) {
      setFormStep(formStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  /**
   * Previous step
   */
  const prevStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Generate application ID
   */
  const generateApplicationId = () => {
    return `DPR-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    const newId = generateApplicationId();
    setApplicationId(newId);
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setFormStep(1);
      setFormData({
        name: '',
        email: '',
        subjectId: '',
        country: '',
        requestType: '',
        dataCategories: [],
        specificData: '',
        identificationDoc: null,
        additionalInfo: '',
        agreeToTerms: false,
        receiveCopy: false
      });
    }, 3000);
  };

  /**
   * Toggle principle expansion
   */
  const togglePrinciple = (index) => {
    setActivePrinciple(activePrinciple === index ? null : index);
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

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Data Protection Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-data" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-data)" />
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
            <span className="text-sm font-medium">{config?.badge || 'Data Protection'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Your Data is'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Protected'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              "We take data protection seriously. Our practices are designed to give you control over your personal information while ensuring the highest level of security."}
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

        {/* ==================== OVERVIEW TAB - PROTECTION PRINCIPLES ==================== */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer group"
                onClick={() => togglePrinciple(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && togglePrinciple(idx)}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-r ${principle.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {getIcon(principle.icon, 'w-7 h-7 text-white')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{principle.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{principle.description}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-400">
                  {principle.stats}
                </div>
                {activePrinciple === idx && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                    <ul className="space-y-2">
                      {principle.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <HiOutlineCheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ==================== YOUR RIGHTS TAB ==================== */}
        {activeTab === 'rights' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {rights.map((right, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(right.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{right.title}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{right.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 flex items-center gap-1">
                    <HiOutlineClock className="w-3 h-3" />
                    {right.processTime}
                  </span>
                  <button
                    onClick={() => {
                      setActiveTab('request');
                      setFormData({ ...formData, requestType: right.title });
                    }}
                    className="text-xs text-emerald-600 font-semibold hover:underline"
                    aria-label={`Submit ${right.title} request`}
                  >
                    Submit Request →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== SUBMIT REQUEST TAB - MULTI-STEP FORM ==================== */}
        {activeTab === 'request' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <HiOutlineClipboardCheck className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Data Protection Request</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Submit a request to exercise your data protection rights.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Reference ID: <span className="font-mono text-blue-600 dark:text-blue-400">{applicationId}</span>
                </p>
                <p className="text-gray-500 text-sm">We'll process your request and respond within 30 days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex justify-between items-center">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex-1 text-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${formStep >= step
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                            }`}
                        >
                          {step}
                        </div>
                        <span className="text-xs text-gray-500 hidden sm:inline">
                          {step === 1 && 'Identity'}
                          {step === 2 && 'Request'}
                          {step === 3 && 'Verify'}
                          {step === 4 && 'Confirm'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-2">
                    <div className="absolute top-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full w-full" />
                    <div
                      className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-300"
                      style={{ width: `${(formStep - 1) * 33.33}%` }}
                    />
                  </div>
                </div>

                {/* Step 1 - Identity */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Identity Verification</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                            } text-gray-900 dark:text-white`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Subject ID (optional)
                        </label>
                        <input
                          type="text"
                          name="subjectId"
                          value={formData.subjectId}
                          onChange={handleInputChange}
                          placeholder="Account ID or reference"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Country of Residence
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                          placeholder="e.g., United States"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2 - Request Details */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Request Details</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Request Type *
                      </label>
                      <select
                        name="requestType"
                        value={formData.requestType}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.requestType ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                          } text-gray-900 dark:text-white`}
                        aria-label="Select request type"
                      >
                        <option value="">Select request type</option>
                        {requestTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.requestType && <p className="text-red-500 text-xs mt-1">{errors.requestType}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Data Categories (select all that apply)
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {dataCategories.map((category) => (
                          <label key={category} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="dataCategories"
                              value={category}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Specific Data Description
                      </label>
                      <textarea
                        name="specificData"
                        value={formData.specificData}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        placeholder="Please describe specific data you're requesting access to..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 3 - Verification */}
                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Verification</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Identification Document (optional)
                      </label>
                      <input
                        type="file"
                        name="identificationDoc"
                        onChange={handleInputChange}
                        accept=".pdf,.jpg,.png"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-gray-200"
                      />
                      <p className="text-xs text-gray-500 mt-1">To help verify your identity (PDF, JPG, PNG - Max 5MB)</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                        placeholder="Any additional information that may help us process your request..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 4 - Confirmation */}
                {formStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Review & Confirm</h3>
                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Request Summary:</p>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">Name:</span> {formData.name || 'Not provided'}
                        </p>
                        <p>
                          <span className="font-medium">Email:</span> {formData.email || 'Not provided'}
                        </p>
                        <p>
                          <span className="font-medium">Request Type:</span> {formData.requestType || 'Not selected'}
                        </p>
                        <p>
                          <span className="font-medium">Data Categories:</span>{' '}
                          {formData.dataCategories.length > 0 ? formData.dataCategories.join(', ') : 'None selected'}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          I confirm that I am the data subject or authorized to make this request on behalf of the data
                          subject. *
                        </span>
                      </label>
                      {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="receiveCopy"
                          checked={formData.receiveCopy}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          I would like to receive a copy of the response via email
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  {formStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  {formStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                    >
                      Next
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                    >
                      Submit Request
                      <HiOutlineCheckCircle className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        )}

        {/* ==================== TRUST STORIES CAROUSEL TAB ==================== */}
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

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Questions About Data Protection?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our Data Protection Officer is available to answer questions about how we handle your personal data.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:dpo@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              aria-label="Email Data Protection Officer"
            >
              <HiOutlineMail className="w-4 h-4" />
              dpo@supplychainpro.com
            </a>
            <a
              href="/privacy-policy"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="View Privacy Policy"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              View Privacy Policy
            </a>
          </div>
        </div>

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

export default DataProtectionSection3;