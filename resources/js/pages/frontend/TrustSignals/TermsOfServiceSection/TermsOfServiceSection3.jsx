// page/frontend/TrustSignals/TermsOfServiceSection/TermsOfServiceSection3.jsx

/**
 * Terms of Service Section III - Full Legal Hub with Stories & FAQ
 *
 * Unique Design Elements:
 * - Multi-tab UI (Terms of Service, Customer Stories, FAQ)
 * - Stats Cards for Terms Metrics (Sections, Legal Support, SLA, Jurisdiction)
 * - Search Functionality to Filter Terms Sections
 * - Card Grid Layout for Terms Sections with Click-to-View Details
 * - Active Section Detail Panel with Key Points
 * - Customer Stories Carousel with Auto-play and Manual Navigation
 * - FAQ Accordion with Expandable Answers and Video Explanations
 * - Download PDF and Print Version Buttons
 * - Terms Questions Form with Validation
 * - Video Modal for Educational Content
 * - Effective Date and Version Display
 * - Circuit Board Background Pattern
 * - Animated Pulse Badge in Header
 * - Responsive Card Grid Design
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
  HiOutlineScale,
  HiOutlineClipboardList,
  HiOutlineReceiptTax,
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
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import {
  MdOutlineFullscreen as HiOutlineFullscreen,
  MdOutlineClosedCaption as HiOutlineClosedCaption,
  MdOutlineHeadphones as HiOutlineHeadphones,
} from 'react-icons/md';

const TermsOfServiceSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('terms');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeSection, setActiveSection] = useState('acceptance');
  const [formData, setFormData] = useState({name: '',email: '',question: '',agreeToTerms: false});

  // ==================== REFERENCE MANAGEMENT ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================

  const tabs = [
    { id: 'terms', label: 'Terms of Service', icon: 'scale' },
    { id: 'stories', label: 'Customer Stories', icon: 'users' },
    { id: 'faq', label: 'FAQ', icon: 'chat' }
  ];

  const sections = config?.sections || [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: 'clipboard',
      summary: 'Agreement to be bound by these terms',
      content: 'By accessing or using SupplyChainPro\'s platform, services, or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and SupplyChainPro.',
      keyPoints: ['Legally binding agreement', 'Acceptance by use', 'Right to refuse']
    },
    {
      id: 'account-registration',
      title: 'Account Registration',
      icon: 'users',
      summary: 'Requirements for creating and maintaining an account',
      content: 'To access certain features, you must register for an account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
      keyPoints: ['Accurate information required', 'Account security responsibility', 'Age requirements apply']
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      icon: 'shield',
      summary: 'Your responsibilities when using our platform',
      content: 'You agree to use our services in compliance with all applicable laws and regulations. You shall not: misuse the platform, attempt to gain unauthorized access, interfere with service operations, or use the platform for any illegal purpose.',
      keyPoints: ['Comply with laws', 'No unauthorized access', 'No interference with services']
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: 'badge',
      summary: 'Ownership of platform and user content',
      content: 'SupplyChainPro owns all rights, title, and interest in the platform, including software, trademarks, and content. You retain ownership of your data. You grant us a license to use your data to provide and improve our services.',
      keyPoints: ['Platform owned by SupplyChainPro', 'User retains data ownership', 'License to provide services']
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: 'credit',
      summary: 'Fees, billing, and refund policies',
      content: 'Fees for paid services are described on our pricing page. Payments are due in accordance with your subscription plan. Fees are non-refundable except as required by law. We may change fees with notice.',
      keyPoints: ['Fees as described', 'Non-refundable', 'Fee changes with notice']
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: 'x',
      summary: 'How and when this agreement ends',
      content: 'Either party may terminate this agreement. You may cancel your account at any time. We may suspend or terminate your access for violation of these terms. Upon termination, your right to use the service ends immediately.',
      keyPoints: ['Account cancellation allowed', 'Termination for violation', 'Immediate effect upon termination']
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: 'shield',
      summary: 'Limits on our legal responsibility',
      content: 'To the maximum extent permitted by law, SupplyChainPro shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by you for the services.',
      keyPoints: ['No indirect damages', 'Liability capped at fees paid', 'Exceptions where required by law']
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: 'globe',
      summary: 'Which laws apply to this agreement',
      content: 'These terms shall be governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.',
      keyPoints: ['Delaware law applies', 'Venue in California', 'No conflict of laws']
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: 'mail',
      summary: 'How to reach our legal team',
      content: 'For questions about these Terms of Service, please contact us at legal@supplychainpro.com. Our legal team will respond to inquiries promptly.',
      keyPoints: ['Email: legal@supplychainpro.com', 'Legal team available', 'Prompt responses']
    }
  ];

  const customerStories = config?.customerStories || [
    {
      id: 1,
      name: 'Global Retail Corp',
      role: 'CEO',
      company: 'Global Retail Corp',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
      quote: 'The transparent terms and fair policies made signing up with SupplyChainPro an easy decision. Their commitment to customer success is unmatched.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 2,
      name: 'HealthTech Solutions',
      role: 'COO',
      company: 'HealthTech Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
      quote: 'We reviewed their terms carefully and found them to be fair and customer-friendly. The 99.9% SLA gives us confidence.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 3,
      name: 'EuroLogistics',
      role: 'Legal Counsel',
      company: 'EuroLogistics',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
      quote: 'Their terms are clear, transparent, and aligned with international standards. We appreciate the straightforward language and fair policies.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ];

  const faqs = config?.faqs || [
    {
      question: 'Can I cancel my account at any time?',
      answer: 'Yes, you can cancel your account at any time through your account settings or by contacting our support team. Upon cancellation, your data will be deleted according to our data retention policy.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      question: 'What happens if I violate the terms?',
      answer: 'Violation of these terms may result in suspension or termination of your account. We will notify you of any violations and provide an opportunity to remedy the issue when possible.'
    },
    {
      question: 'Are fees refundable?',
      answer: 'Fees are generally non-refundable except as required by law. If you believe you\'re entitled to a refund, please contact our support team for review.'
    },
    {
      question: 'How are disputes resolved?',
      answer: 'Disputes are resolved through binding arbitration in San Francisco, California, unless you opt out within 30 days of accepting these terms. Small claims court is also available for qualifying disputes.'
    }
  ];

  const stats = config?.stats || [
    { value: '9', label: 'Key Sections', icon: 'document' },
    { value: '24/7', label: 'Legal Support', icon: 'chat' },
    { value: '99.9%', label: 'SLA', icon: 'chart' },
    { value: 'Global', label: 'Jurisdiction', icon: 'globe' }
  ];

  const effectiveDate = config?.effectiveDate || 'January 1, 2024';
  const version = config?.version || 'v3.0';

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
      scale: <HiOutlineScale className={className} />,
      clipboard: <HiOutlineClipboardList className={className} />,
      receipt: <HiOutlineReceiptTax className={className} />,
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
      headphones: <HiOutlineHeadphones className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineScale className={className} />;
  };

  /**
   * Handle form input change
   */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  /**
   * Validate form
   */
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.question) newErrors.question = 'Question is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        question: '',
        agreeToTerms: false
      });
    }, 3000);
  };

  /**
    * Handle download PDF
    */
  const handleDownloadPDF = () => {
    // Minimal valid PDF file structure
    const pdfContent = `%PDF-1.1
        1 0 obj
        << /Type /Catalog /Pages 2 0 R >>
        endobj
        2 0 obj
        << /Type /Pages /Kids [3 0 R] /Count 1 >>
        endobj
        3 0 obj
        << /Type /Page /Parent 2 0 R /MediaBox [0 0 300 144] >>
        endobj
        trailer
        << /Root 1 0 R >>
        %%EOF`;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'privacy-policy.pdf';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  /**
   * Handle print version
   */
  const handlePrint = () => {
    window.print();
  };

  /**
   * Toggle FAQ
   */
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
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
    section.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.keyPoints.some(point => point.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Terms of Service Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-terms" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-terms)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineScale className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || 'Terms of Service'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Our'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Terms'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              "These terms govern your use of SupplyChainPro's platform and services. Please read them carefully before using our platform."}
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
          <div className="mt-4 text-sm text-gray-500">
            Effective Date: {effectiveDate} | Version: {version}
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

        {/* ==================== TERMS TAB ==================== */}
        {activeTab === 'terms' && (
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
                placeholder="Search the terms of service..."
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Search terms of service"
              />
            </div>

            {/* Quick Navigation Pills */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center overflow-x-auto pb-2">
              {filteredSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  aria-label={`Show ${section.title} section`}
                >
                  {getIcon(section.icon, 'w-4 h-4')}
                  {section.title}
                </button>
              ))}
            </div>

            {/* Terms Content - Card Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredSections.map((section) => (
                <div
                  key={section.id}
                  className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border cursor-pointer ${activeSection === section.id
                    ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                    }`}
                  onClick={() => setActiveSection(section.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveSection(section.id)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      {getIcon(section.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{section.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-600 dark:text-blue-400">{section.keyPoints.length} key points</span>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">Read More →</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Section Detail */}
            {activeSection && (
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
                {sections.find(s => s.id === activeSection) && (
                  <>
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        {getIcon(sections.find(s => s.id === activeSection).icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {sections.find(s => s.id === activeSection).title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {sections.find(s => s.id === activeSection).content}
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-5">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
                        Key Points
                      </p>
                      <ul className="space-y-2">
                        {sections.find(s => s.id === activeSection).keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        )}

        {/* ==================== STORIES TAB - CAROUSEL ==================== */}
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

        {/* ==================== DOWNLOAD AND PRINT SECTION ==================== */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            aria-label="Download Terms of Service PDF"
          >
            <HiOutlineDownload className="w-4 h-4" />
            Download PDF
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            aria-label="Print Terms of Service"
          >
            <HiOutlinePrinter className="w-4 h-4" />
            Print Version
          </button>
        </div>

        {/* ==================== QUESTIONS FORM ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
          <div className="text-center mb-8">
            <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Questions About Our Terms?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Submit your questions and our legal team will respond within 5 business days.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Question Submitted!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thank you for reaching out. Our legal team will respond within 5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Question *
                  </label>
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    rows="4"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.question ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      } text-gray-900 dark:text-white placeholder-gray-500`}
                    placeholder="Please describe your question about our terms of service..."
                  />
                  {errors.question && <p className="text-red-500 text-xs mt-1">{errors.question}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      I have read and understand the terms of service. *
                    </span>
                  </label>
                  {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Submit Question
                <HiArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Contact Our Legal Team</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            If you have questions about these Terms of Service or wish to discuss legal matters, contact our legal
            department.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:legal@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              aria-label="Email legal team"
            >
              <HiOutlineMail className="w-4 h-4" />
              legal@supplychainpro.com
            </a>
            <a
              href="/legal-request"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Submit legal request"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              Submit Legal Request
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

export default TermsOfServiceSection3;