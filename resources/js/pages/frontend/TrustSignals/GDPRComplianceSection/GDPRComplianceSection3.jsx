// page/frontend/TrustSignals/GDPRComplianceSection/GDPRComplianceSection3.jsx

/**
 * GDPR Compliance Section III - Full GDPR Hub with Multi-step Form & Stories
 *
 * Unique Design Elements:
 * - Multi-tab UI (Principles, Your Rights, Submit Request, Stories)
 * - Stats Cards for GDPR Metrics (Compliance, Breach Notification, Response Time, DPO)
 * - GDPR Principles Grid with Expandable Details and Video Explanations
 * - Data Subject Rights Cards with Process Time and Legal Basis
 * - Multi-step GDPR Request Form with Progress Indicator
 * - Application ID Generation on Successful Submission
 * - Success Stories Carousel with Auto-play and Manual Navigation
 * - Video Modal for Principle Explanations and Testimonials
 * - Data Protection Officer Contact Section
 * - Rights Modal with Detailed Information
 * - Circuit Board Background Pattern
 * - Animated Pulse Badge in Header
 * - Responsive Grid Layout for Principles and Rights
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
  HiOutlineScale,
  HiOutlineUserGroup,
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

const GDPRComplianceSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [formStep, setFormStep] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [applicationId, setApplicationId] = useState('');
  const [selectedRight, setSelectedRight] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activePrinciple, setActivePrinciple] = useState(null);
  const [showRightsModal, setShowRightsModal] = useState(false);
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
    { id: 'overview', label: 'Principles', icon: 'shield' },
    { id: 'rights', label: 'Your Rights', icon: 'users' },
    { id: 'request', label: 'Submit Request', icon: 'document' },
    { id: 'stories', label: 'Stories', icon: 'chat' }
  ];

  const principles = config?.principles || [
    {
      title: 'Lawfulness, Fairness & Transparency',
      description: 'Personal data must be processed lawfully, fairly, and in a transparent manner.',
      icon: 'eye',
      gradient: 'from-blue-500 to-blue-600',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      title: 'Purpose Limitation',
      description: 'Data is collected for specified, explicit, and legitimate purposes only.',
      icon: 'flag',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Data Minimization',
      description: 'We only collect data that is adequate, relevant, and limited to what is necessary.',
      icon: 'database',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Accuracy',
      description: 'We maintain processes to ensure personal data is accurate and kept up to date.',
      icon: 'check',
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      title: 'Storage Limitation',
      description: 'Data is retained only as long as necessary for the purposes for which it was collected.',
      icon: 'clock',
      gradient: 'from-rose-500 to-rose-600'
    },
    {
      title: 'Integrity & Confidentiality',
      description: 'Data is processed securely with appropriate technical and organizational measures.',
      icon: 'shield',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Accountability',
      description: 'We\'re responsible for compliance with GDPR principles and can demonstrate our compliance.',
      icon: 'badge',
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  const rights = config?.rights || [
    {
      title: 'Right to be Informed',
      description: 'You have the right to know how your data is being collected, used, and shared.',
      icon: 'eye',
      processTime: 'Immediate',
      legalBasis: 'Articles 13 & 14'
    },
    {
      title: 'Right of Access',
      description: 'You can request a copy of all personal data we hold about you.',
      icon: 'document',
      processTime: '30 days',
      legalBasis: 'Article 15'
    },
    {
      title: 'Right to Rectification',
      description: 'You can correct inaccurate or incomplete personal data.',
      icon: 'edit',
      processTime: '15 days',
      legalBasis: 'Article 16'
    },
    {
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data (right to be forgotten).',
      icon: 'trash',
      processTime: '30 days',
      legalBasis: 'Article 17'
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You can limit how we use your personal data.',
      icon: 'pause',
      processTime: '15 days',
      legalBasis: 'Article 18'
    },
    {
      title: 'Right to Data Portability',
      description: 'You can receive your data in a machine-readable format.',
      icon: 'download',
      processTime: '30 days',
      legalBasis: 'Article 20'
    },
    {
      title: 'Right to Object',
      description: 'You can object to data processing for specific purposes.',
      icon: 'x',
      processTime: '15 days',
      legalBasis: 'Article 21'
    },
    {
      title: 'Automated Decision Making',
      description: 'You have rights regarding automated decisions and profiling.',
      icon: 'chip',
      processTime: '30 days',
      legalBasis: 'Article 22'
    }
  ];

  const successStories = config?.successStories || [
    {
      id: 1,
      name: 'Global Retail Corp',
      role: 'DPO',
      company: 'Global Retail Corp',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
      quote: 'GDPR compliance was seamless with SupplyChainPro. Their transparent approach to data processing gave us complete confidence.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 2,
      name: 'HealthTech Solutions',
      role: 'Privacy Officer',
      company: 'HealthTech Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
      quote: 'The ability to exercise our data subject rights through their portal made GDPR compliance straightforward and efficient.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 3,
      name: 'EuroLogistics',
      role: 'Data Protection Officer',
      company: 'EuroLogistics',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
      quote: 'Their GDPR compliance framework and DPO support gave us peace of mind for our EU operations.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ];

  const stats = config?.stats || [
    { value: '100%', label: 'GDPR Compliant', icon: 'globe' },
    { value: '72h', label: 'Breach Notification', icon: 'clock' },
    { value: '30', label: 'Days Response', icon: 'calendar' },
    { value: 'DPO', label: 'Appointed', icon: 'badge' }
  ];

  const requestTypes = [
    'Right of Access',
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
      scale: <HiOutlineScale className={className} />,
      usergroup: <HiOutlineUserGroup className={className} />,
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
    return `GDPR-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
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
   * Open rights modal
   */
  const openRightsModal = (right) => {
    setSelectedRight(right);
    setShowRightsModal(true);
  };

  /**
   * Close rights modal
   */
  const closeRightsModal = () => {
    setShowRightsModal(false);
    setSelectedRight(null);
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

  /**
   * Navigate to request tab
   */
  const navigateToRequest = (rightTitle) => {
    setActiveTab('request');
    setFormData({ ...formData, requestType: rightTitle });
    setTimeout(() => {
      document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  /**
   * Toggle principle expansion
   */
  const togglePrinciple = (index) => {
    setActivePrinciple(activePrinciple === index ? null : index);
  };

  // ==================== CAROUSEL NAVIGATION ====================
  const storiesCount = successStories.length;

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

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="GDPR Compliance Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-gdpr" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-gdpr)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineGlobe className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || 'GDPR Compliance'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Committed to'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'GDPR Compliance'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              "We fully comply with the General Data Protection Regulation (GDPR), ensuring your personal data is protected, processed lawfully, and that your privacy rights are respected."}
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

        {/* ==================== PRINCIPLES TAB ==================== */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                {activePrinciple === idx && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                    <p className="text-xs text-gray-500">Click to learn more about how we implement this principle.</p>
                    {principle.videoUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openVideoModal(principle.videoUrl);
                        }}
                        className="mt-3 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                        aria-label="Watch explanation"
                      >
                        <HiOutlinePlay className="w-4 h-4" />
                        Watch Explanation
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ==================== RIGHTS TAB ==================== */}
        {activeTab === 'rights' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {rights.map((right, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => openRightsModal(right)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openRightsModal(right)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {getIcon(right.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{right.title}</h3>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{right.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 flex items-center gap-1">
                    <HiOutlineClock className="w-3 h-3" />
                    {right.processTime}
                  </span>
                  <span className="text-xs text-gray-500">{right.legalBasis}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== SUBMIT REQUEST TAB - MULTI-STEP FORM ==================== */}
        {activeTab === 'request' && (
          <div id="request-form" className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <HiOutlineDocumentText className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Submit a GDPR Request</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Exercise your data protection rights by submitting a request. We'll respond within 30 days.
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
                <p className="text-gray-500 text-sm">Our privacy team will respond within 30 days.</p>
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
                          placeholder="e.g., Germany"
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
                          I confirm that I am the data subject or authorized to make this request. *
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

        {/* ==================== STORIES TAB ==================== */}
        {activeTab === 'stories' && successStories.length > 0 && (
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {successStories.map((story, idx) => (
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

              {successStories.length > 1 && (
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
                    {successStories.map((_, idx) => (
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

        {/* ==================== DATA PROTECTION OFFICER SECTION ==================== */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 text-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
            <HiOutlineBadgeCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Protection Officer (DPO)</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We have appointed a Data Protection Officer to oversee GDPR compliance and serve as your point of contact for
            privacy matters.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:dpo@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              aria-label="Email Data Protection Officer"
            >
              <HiOutlineMail className="w-4 h-4" />
              dpo@supplychainpro.com
            </a>
            <a
              href="/privacy-policy"
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
              aria-label="View Privacy Policy"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              View Privacy Policy
            </a>
          </div>
        </div>

        {/* ==================== RIGHTS MODAL ==================== */}
        {showRightsModal && selectedRight && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={closeRightsModal}
            role="dialog"
            aria-label={`${selectedRight.title} details`}
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getIcon(selectedRight.icon, 'w-5 h-5 text-white')}
                    <h3 className="text-white font-bold text-lg">{selectedRight.title}</h3>
                  </div>
                  <button
                    onClick={closeRightsModal}
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
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Legal Basis:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedRight.legalBasis}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response Time:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedRight.processTime}</p>
                </div>
                <button
                  onClick={() => {
                    closeRightsModal();
                    navigateToRequest(selectedRight.title);
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

export default GDPRComplianceSection3;