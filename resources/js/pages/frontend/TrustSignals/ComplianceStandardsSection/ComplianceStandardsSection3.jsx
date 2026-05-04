// page/frontend/TrustSignals/ComplianceStandardsSection/ComplianceStandardsSection3.jsx

/**
 * Compliance Standards Section III - Full Compliance Hub with Stories & Resources
 *
 * Unique Design Elements:
 * - Multi-tab UI (Standards, Success Stories, Resources)
 * - Stats Cards for Compliance Metrics (Global Standards, Audit Pass Rate, Monitoring, Audits)
 * - Search Functionality to Filter Compliance Standards
 * - Region, Category, and Status Filters with Active Filter Indicators
 * - Sort Dropdown (Featured First, Name, Last Audit)
 * - Standards Grid with Gradient Headers and Status Badges
 * - Success Stories Carousel with Auto-play and Manual Navigation
 * - Resources Section with Downloadable Documentation
 * - Standard Detail Modal with Key Requirements and Audit Info
 * - Download Report and Request Documentation CTAs
 * - Video Modal for Success Story Playback
 * - Circuit Board Background Pattern
 * - Animated Pulse Badge in Header
 * - Responsive Grid Layout for Standards
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

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
  HiOutlineClipboardList,
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

const ComplianceStandardsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [sortBy, setSortBy] = useState('featured');
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== REFERENCE MANAGEMENT ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================

  const tabs = [
    { id: 'overview', label: 'Standards', icon: 'shield' },
    { id: 'stories', label: 'Success Stories', icon: 'users' },
    { id: 'resources', label: 'Resources', icon: 'document' }
  ];

  const standards = useMemo(() => config?.standards || [
    {
      id: 'gdpr',
      name: 'GDPR',
      fullName: 'General Data Protection Regulation',
      region: 'European Union',
      regionFlag: '🇪🇺',
      category: 'Data Privacy',
      status: 'Compliant',
      description: 'The GDPR is a comprehensive data protection law that sets guidelines for the collection, processing, and storage of personal information of individuals within the European Union.',
      keyRequirements: [
        'Data protection by design and default',
        'Right to access, rectification, and erasure',
        'Data breach notification within 72 hours',
        'Data Protection Officer (DPO) appointment',
        'Data Processing Agreements (DPAs)'
      ],
      certifications: ['GDPR Compliant'],
      icon: 'globe',
      gradient: 'from-blue-500 to-blue-600',
      lastAudit: 'January 2024',
      nextAudit: 'January 2025',
      documentation: '/compliance/gdpr-report.pdf',
      isFeatured: true
    },
    {
      id: 'soc2',
      name: 'SOC 2 Type II',
      fullName: 'Service Organization Control 2 Type II',
      region: 'Global',
      regionFlag: '🌐',
      category: 'Security Compliance',
      status: 'Certified',
      description: 'SOC 2 Type II certification demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy over an extended period.',
      keyRequirements: [
        'Security controls validated quarterly',
        'Availability monitoring and incident response',
        'Confidentiality and privacy protections',
        'Processing integrity verification',
        'Continuous monitoring and auditing'
      ],
      certifications: ['SOC 2 Type II'],
      icon: 'certificate',
      gradient: 'from-purple-500 to-purple-600',
      lastAudit: 'December 2023',
      nextAudit: 'December 2024',
      documentation: '/compliance/soc2-report.pdf',
      isFeatured: true
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      fullName: 'ISO/IEC 27001:2022',
      region: 'Global',
      regionFlag: '🌐',
      category: 'Security Management',
      status: 'Certified',
      description: 'ISO 27001 is the international standard for information security management systems (ISMS), specifying requirements for establishing, implementing, maintaining, and improving security controls.',
      keyRequirements: [
        'Information security management system',
        'Risk assessment and treatment',
        'Security policy and controls',
        'Continuous improvement framework',
        'Management review and internal audits'
      ],
      certifications: ['ISO 27001:2022'],
      icon: 'badge',
      gradient: 'from-amber-500 to-amber-600',
      lastAudit: 'October 2023',
      nextAudit: 'October 2024',
      documentation: '/compliance/iso27001-report.pdf',
      isFeatured: true
    },
    {
      id: 'hipaa',
      name: 'HIPAA',
      fullName: 'Health Insurance Portability and Accountability Act',
      region: 'United States',
      regionFlag: '🇺🇸',
      category: 'Healthcare Compliance',
      status: 'Ready',
      description: 'HIPAA establishes national standards to protect sensitive patient health information from being disclosed without patient consent or knowledge.',
      keyRequirements: [
        'Privacy Rule compliance',
        'Security Rule safeguards',
        'Breach notification procedures',
        'Business Associate Agreements',
        'Administrative, physical, and technical safeguards'
      ],
      certifications: ['HIPAA Ready'],
      icon: 'shield',
      gradient: 'from-rose-500 to-rose-600',
      lastAudit: 'March 2024',
      nextAudit: 'March 2025',
      documentation: '/compliance/hipaa-readiness.pdf'
    },
    {
      id: 'pci-dss',
      name: 'PCI DSS',
      fullName: 'Payment Card Industry Data Security Standard',
      region: 'Global',
      regionFlag: '🌐',
      category: 'Payment Security',
      status: 'Compliant',
      description: 'PCI DSS is a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment.',
      keyRequirements: [
        'Secure network infrastructure',
        'Cardholder data protection',
        'Vulnerability management',
        'Access control measures',
        'Regular monitoring and testing'
      ],
      certifications: ['PCI DSS Level 1'],
      icon: 'credit',
      gradient: 'from-indigo-500 to-indigo-600',
      lastAudit: 'November 2023',
      nextAudit: 'November 2024',
      documentation: '/compliance/pci-dss-report.pdf'
    }
  ], [config?.standards]);

  const successStories = config?.successStories || [
    {
      id: 1,
      company: 'Global Retail Corp',
      industry: 'Retail',
      logo: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=80&h=80&fit=crop',
      quote: 'SupplyChainPro\'s compliance with SOC 2 and ISO 27001 made them an easy choice for our enterprise security requirements.',
      author: 'Sarah Johnson, CTO',
      standardsMet: ['SOC 2 Type II', 'ISO 27001'],
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 2,
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=80&h=80&fit=crop',
      quote: 'Their HIPAA readiness and GDPR compliance gave us confidence in handling sensitive healthcare data.',
      author: 'Michael Chen, VP of Security',
      standardsMet: ['HIPAA', 'GDPR'],
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 3,
      company: 'EuroLogistics',
      industry: 'Logistics',
      logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=80&h=80&fit=crop',
      quote: 'Managing cross-border compliance is complex, but SupplyChainPro\'s framework made it straightforward.',
      author: 'Elena Rodriguez, DPO',
      standardsMet: ['GDPR', 'PCI DSS'],
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ];

  const stats = config?.stats || [
    { value: '5+', label: 'Global Standards', icon: 'globe' },
    { value: '100%', label: 'Audit Pass Rate', icon: 'check' },
    { value: '24/7', label: 'Compliance Monitoring', icon: 'eye' },
    { value: 'Annual', label: 'Third-Party Audits', icon: 'calendar' }
  ];

  const regions = [
    { id: 'all', label: 'All Regions', flag: '🌐' },
    { id: 'European Union', label: 'European Union', flag: '🇪🇺' },
    { id: 'United States', label: 'United States', flag: '🇺🇸' },
    { id: 'Global', label: 'Global', flag: '🌐' }
  ];

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'Data Privacy', label: 'Data Privacy' },
    { id: 'Security Compliance', label: 'Security Compliance' },
    { id: 'Security Management', label: 'Security Management' },
    { id: 'Healthcare Compliance', label: 'Healthcare Compliance' },
    { id: 'Payment Security', label: 'Payment Security' }
  ];

  const statuses = [
    { id: 'all', label: 'All Statuses' },
    { id: 'Certified', label: 'Certified' },
    { id: 'Compliant', label: 'Compliant' },
    { id: 'Ready', label: 'Ready' }
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
      clipboard: <HiOutlineClipboardList className={className} />,
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
   * Get category badge color
   */
  const getCategoryBadgeColor = (category) => {
    const colors = {
      'Data Privacy': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'Security Compliance': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      'Security Management': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      'Healthcare Compliance': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
      'Payment Security': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
  };

  /**
   * Get status badge color
   */
  const getStatusBadgeColor = (status) => {
    const colors = {
      'Certified': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      'Compliant': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'Ready': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
      'In Progress': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
    };
    return colors[status] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
  };

  /**
   * Open standard modal
   */
  const openModal = (standard) => {
    setSelectedStandard(standard);
    setShowModal(true);
  };

  /**
   * Close standard modal
   */
  const closeModal = () => {
    setShowModal(false);
    setSelectedStandard(null);
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
   * Clear all filters
   */
  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedCategory('all');
    setSelectedStatus('all');
    setSortBy('featured');
  };

  // Filter standards
  const getFilteredStandards = useCallback(() => {
    let filtered = [...standards];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(query) ||
        s.fullName.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query)
      );
    }

    if (selectedRegion !== 'all') {
      filtered = filtered.filter(s => s.region === selectedRegion);
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(s => s.status === selectedStatus);
    }

    if (sortBy === 'featured') {
      filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'lastAudit') {
      filtered.sort((a, b) => new Date(b.lastAudit) - new Date(a.lastAudit));
    }

    return filtered;
  }, [standards, searchQuery, selectedRegion, selectedCategory, selectedStatus, sortBy]);

  const filteredStandards = getFilteredStandards();
  const activeFiltersCount = [selectedRegion !== 'all', selectedCategory !== 'all', selectedStatus !== 'all', searchQuery !== ''].filter(Boolean).length;

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
      aria-label="Compliance Standards Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-compliance" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-compliance)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineShieldCheck className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || 'Compliance Standards'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Meeting Global'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Compliance'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              "We adhere to the highest industry standards and regulations to ensure your data is protected and your business remains compliant."}
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

        {/* ==================== STANDARDS TAB ==================== */}
        {activeTab === 'overview' && (
          <>
            {/* Search and Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search compliance standards..."
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search compliance standards"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by region"
                >
                  {regions.map(region => (
                    <option key={region.id} value={region.id === 'all' ? 'all' : region.label}>
                      {region.flag} {region.label}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by category"
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id === 'all' ? 'all' : cat.label}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Filter by status"
                >
                  {statuses.map(status => (
                    <option key={status.id} value={status.id === 'all' ? 'all' : status.label}>
                      {status.label}
                    </option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  aria-label="Sort standards"
                >
                  <option value="featured">Featured First</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="lastAudit">Last Audit Date</option>
                </select>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  aria-label="Toggle filters"
                >
                  <HiOutlineFilter className="w-4 h-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Expanded Filters Panel */}
            {showFilters && (
              <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    >
                      {regions.map(region => (
                        <option key={region.id} value={region.id === 'all' ? 'all' : region.label}>
                          {region.flag} {region.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    >
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id === 'all' ? 'all' : cat.label}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status</label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    >
                      {statuses.map(status => (
                        <option key={status.id} value={status.id === 'all' ? 'all' : status.label}>
                          {status.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    >
                      <option value="featured">Featured First</option>
                      <option value="name">Name (A-Z)</option>
                      <option value="lastAudit">Last Audit Date</option>
                    </select>
                  </div>
                </div>
                {activeFiltersCount > 0 && (
                  <div className="mt-4 flex justify-end">
                    <button onClick={clearAllFilters} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing{' '}
                <span className="font-semibold text-gray-900 dark:text-white">{filteredStandards.length}</span>{' '}
                compliance standards
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* Standards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredStandards.map((standard) => (
                <div
                  key={standard.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => openModal(standard)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(standard)}
                >
                  <div className={`h-1.5 bg-linear-to-r ${standard.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${standard.gradient} flex items-center justify-center`}>
                          {getIcon(standard.icon, 'w-6 h-6 text-white')}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">{standard.name}</h3>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <span>{standard.regionFlag}</span> {standard.region}
                          </p>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeColor(standard.status)}`}>
                        {standard.status}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {standard.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <HiOutlineCalendar className="w-3 h-3" />
                        <span>Last: {standard.lastAudit}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiOutlineClock className="w-3 h-3" />
                        <span>Next: {standard.nextAudit}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadgeColor(standard.category)}`}>
                        {standard.category}
                      </span>
                      {standard.certifications.map((cert, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-xs text-gray-500">Third-Party Audited</span>
                      <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300">
                        View Details
                        <HiArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredStandards.length === 0 && (
              <div className="text-center py-12">
                <HiOutlineShieldCheck className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No standards found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                <button onClick={clearAllFilters} className="mt-4 text-blue-600 hover:underline">
                  Clear all filters
                </button>
              </div>
            )}
          </>
        )}

        {/* ==================== SUCCESS STORIES CAROUSEL TAB ==================== */}
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
                          src={story.logo}
                          alt={story.company}
                          className="w-16 h-16 rounded-xl object-cover"
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{story.company}</h3>
                          <p className="text-sm text-gray-500">{story.industry}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex gap-1 text-amber-500 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 italic text-lg">"{story.quote}"</p>
                        <p className="text-sm text-gray-500 mt-3">— {story.author}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {story.standardsMet?.map((std, sid) => (
                          <span key={sid} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                            {std}
                          </span>
                        ))}
                      </div>
                      {story.videoUrl && (
                        <button
                          onClick={() => openVideoModal(story.videoUrl)}
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                          aria-label="Watch full story"
                        >
                          <HiOutlinePlay className="w-4 h-4" />
                          Watch Full Story
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

        {/* ==================== RESOURCES TAB ==================== */}
        {activeTab === 'resources' && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <HiOutlineDocumentText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Compliance Documentation</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-between">
                    <span>SOC 2 Type II Report</span>
                    <HiOutlineDownload className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-between">
                    <span>ISO 27001 Certificate</span>
                    <HiOutlineDownload className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-between">
                    <span>GDPR Compliance Statement</span>
                    <HiOutlineDownload className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-between">
                    <span>PCI DSS Attestation</span>
                    <HiOutlineDownload className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <HiOutlineMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Request Documentation</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Need specific compliance documentation? Contact our compliance team.
              </p>
              <a
                href="mailto:compliance@supplychainpro.com"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                aria-label="Email compliance team"
              >
                compliance@supplychainpro.com
                <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* ==================== STANDARD DETAIL MODAL ==================== */}
        {showModal && selectedStandard && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={closeModal}
            role="dialog"
            aria-label={`${selectedStandard.name} standard details`}
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-2 bg-linear-to-r ${selectedStandard.gradient}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${selectedStandard.gradient} flex items-center justify-center`}>
                      {getIcon(selectedStandard.icon, 'w-6 h-6 text-white')}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selectedStandard.name}</h2>
                      <p className="text-sm text-gray-500">{selectedStandard.fullName}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeColor(selectedStandard.status)}`}>
                    {selectedStandard.status}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadgeColor(selectedStandard.category)}`}>
                    {selectedStandard.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <span>{selectedStandard.regionFlag}</span> {selectedStandard.region}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedStandard.description}</p>

                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Requirements:</p>
                  <ul className="space-y-2">
                    {selectedStandard.keyRequirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-medium text-gray-500">Last Audit</p>
                    <p className="text-sm text-gray-900 dark:text-white">{selectedStandard.lastAudit}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Next Audit</p>
                    <p className="text-sm text-gray-900 dark:text-white">{selectedStandard.nextAudit}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={selectedStandard.documentation}
                    className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    aria-label="Download compliance report"
                  >
                    Download Report
                  </a>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
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

export default ComplianceStandardsSection3;