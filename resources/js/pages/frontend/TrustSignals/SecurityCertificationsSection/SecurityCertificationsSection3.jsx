// page/frontend/TrustSignals/SecurityCertificationsSection/SecurityCertificationsSection3.jsx

/**
 * Security Certifications Section III - Full Trust & Compliance Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Security Metrics (Uptime, Monitoring, Encryption, Compliance)
 * - Multi-tab UI (Certifications, Customer Stories, Resources)
 * - Customer Stories Carousel with Auto-play and Manual Navigation
 * - Certification Cards with Gradient Headers and Status Badges
 * - Compliance Roadmap Timeline with Year Filtering
 * - Compliance Resources Grid with Download CTAs
 * - Video Modal for Customer Testimonial Playback
 * - Certification Modal with Detailed Information
 * - Circuit Board Background Pattern
 * - Animated Pulse Badge in Header
 * - Responsive Grid Layout for All Tabs
 * - Contact Security Team Section
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

const SecurityCertificationsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeTab, setActiveTab] = useState('certifications');

  // ==================== REFERENCE MANAGEMENT ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================

  const tabs = [
    { id: 'certifications', label: 'Certifications', icon: 'certificate' },
    { id: 'stories', label: 'Customer Stories', icon: 'users' },
    { id: 'resources', label: 'Resources', icon: 'document' }
  ];

  const certifications = config?.certifications || [
    {
      id: 'soc2',
      name: 'SOC 2 Type II',
      issuer: 'AICPA',
      type: 'compliance',
      description: 'SOC 2 Type II certification demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy.',
      scope: 'All core services, infrastructure, and supporting systems',
      validity: 'Annual audit',
      status: 'active',
      lastAudit: 'December 2023',
      nextAudit: 'December 2024',
      reportUrl: '/security/soc2-report.pdf',
      features: [
        'Security controls validated quarterly',
        'Availability monitoring and incident response',
        'Confidentiality and privacy protections',
        'Processing integrity verification'
      ],
      icon: 'shield',
      gradient: 'from-blue-500 to-blue-600',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
    },
    {
      id: 'iso27001',
      name: 'ISO 27001:2022',
      issuer: 'International Organization for Standardization',
      type: 'security',
      description: 'ISO 27001 is the international standard for information security management systems (ISMS).',
      scope: 'Global operations, all products and services',
      validity: '3 years with annual surveillance audits',
      status: 'active',
      lastAudit: 'October 2023',
      nextAudit: 'October 2024',
      reportUrl: '/security/iso27001-report.pdf',
      features: [
        'Information security management system',
        'Risk assessment and treatment',
        'Continuous improvement framework',
        'Security policy and controls'
      ],
      icon: 'certificate',
      gradient: 'from-emerald-500 to-emerald-600',
      badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
    },
    {
      id: 'gdpr',
      name: 'GDPR Compliant',
      issuer: 'European Union',
      type: 'privacy',
      description: 'We maintain full compliance with the General Data Protection Regulation (GDPR).',
      scope: 'All EU customer data processing',
      validity: 'Ongoing compliance',
      status: 'active',
      lastAudit: 'January 2024',
      nextAudit: 'January 2025',
      reportUrl: '/security/gdpr-compliance.pdf',
      features: [
        'Data protection by design and default',
        'Right to access and erasure',
        'Data processing agreements',
        'Breach notification procedures'
      ],
      icon: 'globe',
      gradient: 'from-purple-500 to-purple-600',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
    },
    {
      id: 'hipaa',
      name: 'HIPAA Ready',
      issuer: 'U.S. Department of Health and Human Services',
      type: 'industry',
      description: 'Our platform is built to support HIPAA compliance for healthcare organizations.',
      scope: 'Healthcare customer deployments',
      validity: 'Ongoing compliance',
      status: 'active',
      lastAudit: 'February 2024',
      nextAudit: 'February 2025',
      reportUrl: '/security/hipaa-readiness.pdf',
      features: [
        'Business Associate Agreements',
        'Administrative safeguards',
        'Physical and technical safeguards',
        'Audit controls and integrity'
      ],
      icon: 'shield',
      gradient: 'from-rose-500 to-rose-600',
      badgeColor: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'
    }
  ];

  const customerStories = config?.customerStories || [
    {
      id: 1,
      name: 'Global Retail Corp',
      industry: 'Retail',
      logo: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=80&h=80&fit=crop',
      quote: "SupplyChainPro's security certifications gave us the confidence to migrate our entire supply chain operations to their platform. The SOC 2 and ISO 27001 certifications were critical for our compliance requirements.",
      author: 'Sarah Johnson, CTO',
      metrics: [
        { label: 'Compliance Time', value: '-75%' },
        { label: 'Audit Preparation', value: '-60%' }
      ],
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 2,
      name: 'HealthTech Solutions',
      industry: 'Healthcare',
      logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=80&h=80&fit=crop',
      quote: "As a healthcare provider, HIPAA compliance is non-negotiable. SupplyChainPro's HIPAA-ready platform and their commitment to security made them the obvious choice for our supply chain needs.",
      author: 'Michael Chen, VP of Operations',
      metrics: [
        { label: 'Security Incidents', value: '0' },
        { label: 'Compliance Score', value: '100%' }
      ]
    },
    {
      id: 3,
      name: 'EuroLogistics',
      industry: 'Logistics',
      logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=80&h=80&fit=crop',
      quote: "GDPR compliance was a major concern for our European operations. SupplyChainPro's comprehensive approach to data privacy and their transparent compliance framework gave us peace of mind.",
      author: 'Elena Rodriguez, Data Protection Officer',
      metrics: [
        { label: 'Data Protection', value: '100%' },
        { label: 'Customer Trust', value: '+45%' }
      ],
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ];

  const complianceResources = config?.complianceResources || [
    {
      title: 'Security Whitepaper',
      description: 'Comprehensive overview of our security architecture and controls',
      icon: 'document',
      link: '/security/whitepaper',
      type: 'pdf'
    },
    {
      title: 'Data Processing Agreement',
      description: 'Standard contractual clauses for GDPR compliance',
      icon: 'document',
      link: '/security/dpa',
      type: 'pdf'
    },
    {
      title: 'Subprocessor List',
      description: 'Current list of subprocessors and their roles',
      icon: 'users',
      link: '/security/subprocessors',
      type: 'list'
    },
    {
      title: 'Penetration Testing Report',
      description: 'Summary of latest third-party penetration tests',
      icon: 'shield',
      link: '/security/pen-test',
      type: 'pdf'
    },
    {
      title: 'Incident Response Plan',
      description: 'Overview of our incident response procedures',
      icon: 'bolt',
      link: '/security/incident-response',
      type: 'pdf'
    },
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your data',
      icon: 'lock',
      link: '/privacy',
      type: 'page'
    }
  ];

  const stats = config?.stats || [
    { value: '99.99%', label: 'Uptime SLA', icon: 'bolt' },
    { value: '24/7', label: 'Security Monitoring', icon: 'eye' },
    { value: '256-bit', label: 'Encryption', icon: 'lock' },
    { value: '100%', label: 'Compliance Rate', icon: 'check' }
  ];

  const timeline = config?.timeline || [
    { year: '2024', event: 'ISO 27001:2022 Recertification', completed: true, quarter: 'Q1', status: 'completed' },
    { year: '2024', event: 'SOC 2 Type II Audit', completed: false, quarter: 'Q2', status: 'in-progress' },
    { year: '2024', event: 'HIPAA Security Assessment', completed: false, quarter: 'Q3', status: 'upcoming' },
    { year: '2025', event: 'FedRAMP Readiness Review', completed: false, quarter: 'Q1', status: 'planned' }
  ];

  const filteredTimeline = timeline.filter(t => t.year === selectedYear);

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
   * Get certification badge color based on type
   */
  const getCertBadgeColor = (type) => {
    const colors = {
      'compliance': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      'security': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'privacy': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      'industry': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'
    };
    return colors[type] || colors.security;
  };

  /**
   * Open certification modal
   */
  const openModal = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  /**
   * Close certification modal
   */
  const closeModal = () => {
    setShowModal(false);
    setSelectedCert(null);
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

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Security Certifications Hub"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-security" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-security)" />
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
            <span className="text-sm font-medium">{config?.badge || 'Security & Compliance'}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Enterprise-Grade'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Security'}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              "We're committed to the highest standards of security and compliance. Our certifications demonstrate our dedication to protecting your data and meeting global regulatory requirements."}
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

        {/* ==================== CERTIFICATIONS TAB ==================== */}
        {activeTab === 'certifications' && (
          <>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => openModal(cert)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(cert)}
                >
                  <div className={`h-1 bg-linear-to-r ${cert.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${cert.gradient} flex items-center justify-center`}>
                          {getIcon(cert.icon, 'w-6 h-6 text-white')}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                          <p className="text-xs text-gray-500">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getCertBadgeColor(cert.type)}`}>
                        {cert.type.charAt(0).toUpperCase() + cert.type.slice(1)}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {cert.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <HiOutlineClock className="w-3 h-3" />
                        <span>Last: {cert.lastAudit}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiOutlineCalendar className="w-3 h-3" />
                        <span>Next: {cert.nextAudit}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-xs text-emerald-600 flex items-center gap-1">
                        <HiOutlineCheckCircle className="w-3 h-3" />
                        Active
                      </span>
                      <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300">
                        View Details
                        <HiArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Roadmap */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Compliance Roadmap</h3>
                <div className="flex gap-2">
                  {['2024', '2025'].map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedYear === year
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      aria-label={`Show ${year} timeline`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {filteredTimeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${item.status === 'completed'
                        ? 'bg-emerald-500'
                        : item.status === 'in-progress'
                          ? 'bg-blue-500'
                          : 'bg-gray-400'
                        } text-white`}
                    >
                      {item.status === 'completed' ? (
                        <HiOutlineCheckCircle className="w-5 h-5" />
                      ) : item.status === 'in-progress' ? (
                        <HiOutlineRefresh className="w-5 h-5" />
                      ) : (
                        <HiOutlineCalendar className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-sm font-semibold text-blue-600">{item.quarter}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${item.status === 'completed'
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                            : item.status === 'in-progress'
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                            }`}
                        >
                          {item.status === 'completed'
                            ? 'Completed'
                            : item.status === 'in-progress'
                              ? 'In Progress'
                              : 'Planned'}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.event}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ==================== CUSTOMER STORIES CAROUSEL TAB ==================== */}
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
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={story.logo}
                            alt={story.name}
                            className="w-16 h-16 rounded-xl object-cover"
                            loading="lazy"
                          />
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{story.name}</h3>
                            <p className="text-sm text-gray-500">{story.industry}</p>
                          </div>
                        </div>
                        <div className="flex gap-1 text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <HiOutlineStar key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <p className="text-gray-600 dark:text-gray-400 italic text-lg">"{story.quote}"</p>
                        <p className="text-sm text-gray-500 mt-3">— {story.author}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {story.metrics?.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="text-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl"
                          >
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        ))}
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

        {/* ==================== RESOURCES TAB ==================== */}
        {activeTab === 'resources' && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {complianceResources.map((resource, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 cursor-pointer"
                  onClick={() => window.open(resource.link, '_blank')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && window.open(resource.link, '_blank')}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {getIcon(resource.icon, 'w-6 h-6 text-blue-600 dark:text-blue-400')}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
                  <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all">
                    {resource.type === 'pdf' ? 'Download PDF' : resource.type === 'page' ? 'View Page' : 'View List'}
                    <HiArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Security Team */}
            <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
              <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Need Compliance Documentation?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our security team is available to answer questions and provide additional compliance documentation upon
                request.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:security@supplychainpro.com"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                >
                  <HiOutlineMail className="w-4 h-4" />
                  security@supplychainpro.com
                </a>
                <a
                  href="/security/request"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                >
                  <HiOutlineDocumentText className="w-4 h-4" />
                  Request Documentation
                </a>
              </div>
            </div>
          </>
        )}

        {/* ==================== CERTIFICATION MODAL ==================== */}
        {showModal && selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={closeModal}
            role="dialog"
            aria-label={`${selectedCert.name} certification details`}
            aria-modal="true"
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-2 bg-linear-to-r ${selectedCert.gradient}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${selectedCert.gradient} flex items-center justify-center`}>
                      {getIcon(selectedCert.icon, 'w-6 h-6 text-white')}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selectedCert.name}</h2>
                      <p className="text-sm text-gray-500">{selectedCert.issuer}</p>
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

                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedCert.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-medium text-gray-500">Scope</p>
                    <p className="text-sm text-gray-900 dark:text-white">{selectedCert.scope}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Validity</p>
                    <p className="text-sm text-gray-900 dark:text-white">{selectedCert.validity}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Last Audit</p>
                    <p className="text-sm text-gray-900 dark:text-white">{selectedCert.lastAudit}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Next Audit</p>
                    <p className="text-sm text-gray-900 dark:text-white">{selectedCert.nextAudit}</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</p>
                  <ul className="space-y-2">
                    {selectedCert.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a
                    href={selectedCert.reportUrl}
                    className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    aria-label="Download certification report"
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

export default SecurityCertificationsSection3;