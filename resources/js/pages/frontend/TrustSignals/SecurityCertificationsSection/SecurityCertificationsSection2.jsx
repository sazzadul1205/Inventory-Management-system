// page/frontend/TrustSignals/SecurityCertificationsSection/SecurityCertificationsSection2.jsx

/**
 * Security Certifications Section II - Advanced Trust & Compliance Hub
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Uptime, Monitoring, Encryption, Audits)
 * - Multi-tab UI (Certifications, Security Controls, Frameworks, Roadmap)
 * - Certification Cards with Gradient Headers and Status Badges
 * - Security Controls Grid with Category Grouping and Status Indicators
 * - Control Frameworks with Expandable Control Lists
 * - Compliance Roadmap Timeline with Quarter Filtering
 * - Year Filter for Timeline Visualization
 * - Download Report and Request Audit CTAs
 * - Certification Modal with Detailed Information
 * - Animated Gradient Orbs in Background
 * - Responsive Grid Layout for All Tabs
 * - Active Tab Highlighting with Shadow Effects
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { useState } from 'react';

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
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from 'react-icons/md';

const SecurityCertificationsSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [activeTab, setActiveTab] = useState('certifications');
  const [expandedControl, setExpandedControl] = useState(null);

  // ==================== MEMOIZED DATA ====================

  const tabs = [
    { id: 'certifications', label: 'Certifications', icon: 'certificate' },
    { id: 'controls', label: 'Security Controls', icon: 'shield' },
    { id: 'frameworks', label: 'Frameworks', icon: 'template' },
    { id: 'timeline', label: 'Roadmap', icon: 'calendar' }
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
      standard: 'Trust Services Criteria',
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
      standard: 'ISO/IEC 27001:2022',
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
      standard: 'Regulation (EU) 2016/679',
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
      standard: 'HIPAA Security Rule',
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

  const controlFrameworks = config?.controlFrameworks || [
    {
      id: 'nist',
      name: 'NIST Cybersecurity Framework',
      description: 'Aligns with NIST CSF for comprehensive cybersecurity risk management.',
      icon: 'shield',
      maturity: 'Advanced',
      controls: [
        'Identify: Asset management, risk assessment',
        'Protect: Access control, awareness training',
        'Detect: Anomalies, continuous monitoring',
        'Respond: Response planning, communications',
        'Recover: Recovery planning, improvements'
      ],
      status: 'implemented'
    },
    {
      id: 'csa',
      name: 'CSA STAR',
      description: 'Cloud Security Alliance STAR Registry self-assessment and continuous monitoring.',
      icon: 'cloud',
      maturity: 'Advanced',
      controls: [
        'Cloud control matrix compliance',
        'Consensus Assessments Initiative',
        'Continuous monitoring program',
        'Transparency reporting'
      ],
      status: 'implemented'
    },
    {
      id: 'pci',
      name: 'PCI DSS Level 1',
      description: 'Payment Card Industry Data Security Standard compliance for payment processing.',
      icon: 'credit',
      maturity: 'Advanced',
      controls: [
        'Secure network infrastructure',
        'Cardholder data protection',
        'Vulnerability management',
        'Access control measures'
      ],
      status: 'implemented'
    }
  ];

  const securityControls = config?.securityControls || [
    {
      category: 'Data Encryption',
      icon: 'lock',
      controls: [
        { name: 'At-rest encryption', status: 'enabled', description: 'AES-256 encryption for all stored data' },
        { name: 'In-transit encryption', status: 'enabled', description: 'TLS 1.3 for all data in transit' },
        { name: 'Key management', status: 'enabled', description: 'Hardware Security Module (HSM) for key management' }
      ]
    },
    {
      category: 'Access Control',
      icon: 'users',
      controls: [
        { name: 'Multi-factor authentication', status: 'enabled', description: 'MFA required for all admin access' },
        { name: 'Role-based access', status: 'enabled', description: 'Granular RBAC with least privilege' },
        { name: 'SSO integration', status: 'enabled', description: 'SAML 2.0 and OIDC support' }
      ]
    },
    {
      category: 'Monitoring & Detection',
      icon: 'eye',
      controls: [
        { name: '24/7 security monitoring', status: 'enabled', description: 'Continuous threat detection' },
        { name: 'Vulnerability scanning', status: 'enabled', description: 'Weekly automated scans' },
        { name: 'Penetration testing', status: 'enabled', description: 'Quarterly third-party tests' }
      ]
    },
    {
      category: 'Incident Response',
      icon: 'bell',
      controls: [
        { name: 'Incident response plan', status: 'enabled', description: 'Documented and tested plan' },
        { name: 'Breach notification', status: 'enabled', description: '24-hour notification commitment' },
        { name: 'Forensic readiness', status: 'enabled', description: 'Preserved logs and audit trails' }
      ]
    }
  ];

  const stats = config?.stats || [
    { value: "99.99%", label: "Uptime SLA", icon: "bolt", trend: "99.99%", trendUp: true },
    { value: "24/7", label: "Security Monitoring", icon: "eye", trend: "24/7", trendUp: true },
    { value: "256-bit", label: "Encryption", icon: "lock", trend: "AES-256", trendUp: true },
    { value: "100+", label: "Security Audits", icon: "check", trend: "+25", trendUp: true }
  ];

  const timeline = config?.timeline || [
    { year: '2024', event: 'ISO 27001:2022 Recertification', completed: true, quarter: 'Q1' },
    { year: '2024', event: 'SOC 2 Type II Audit', completed: false, quarter: 'Q2' },
    { year: '2024', event: 'HIPAA Security Assessment', completed: false, quarter: 'Q3' },
    { year: '2025', event: 'FedRAMP Readiness Review', completed: false, quarter: 'Q1' }
  ];

  const filteredTimeline = timeline.filter(t => t.year === selectedYear);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, Heroicons 2, FontAwesome, and Material Design
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
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
   * Toggle control framework expansion
   */
  const toggleControl = (frameworkId) => {
    setExpandedControl(expandedControl === frameworkId ? null : frameworkId);
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Security Certifications & Controls"
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
              <HiOutlineShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || 'Security & Compliance'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || 'Enterprise-Grade'}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || 'Security'}
              </span>{' '}
              {config?.title?.suffix || 'Certifications'}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                "We're committed to the highest standards of security and compliance. Our certifications demonstrate our dedication to protecting your data and meeting global regulatory requirements."}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
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
                <div className={`h-2 bg-linear-to-r ${cert.gradient}`} />
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

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <HiOutlineClock className="w-3 h-3" />
                      <span>Last Audit: {cert.lastAudit}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HiOutlineCalendar className="w-3 h-3" />
                      <span>Next: {cert.nextAudit}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-emerald-600 flex items-center gap-1">
                        <HiOutlineCheckCircle className="w-3 h-3" />
                        Active
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300">
                      View Details
                      <HiArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== SECURITY CONTROLS TAB ==================== */}
        {activeTab === 'controls' && (
          <div className="space-y-6 mb-12">
            {securityControls.map((category, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-5 bg-gray-50 dark:bg-gray-700/30 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    {getIcon(category.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
                    {category.category}
                  </h3>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {category.controls.map((control, cIdx) => (
                    <div key={cIdx} className="p-5">
                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{control.name}</h4>
                          <p className="text-sm text-gray-500 mt-1">{control.description}</p>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                          <HiOutlineCheckCircle className="w-3 h-3" />
                          {control.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== FRAMEWORKS TAB ==================== */}
        {activeTab === 'frameworks' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {controlFrameworks.map((framework) => (
              <div
                key={framework.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {getIcon(framework.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{framework.name}</h3>
                    <p className="text-xs text-gray-500">{framework.maturity} Maturity</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{framework.description}</p>
                <button
                  onClick={() => toggleControl(framework.id)}
                  className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium"
                  aria-label={expandedControl === framework.id ? 'Show less' : `View ${framework.controls.length} controls`}
                >
                  {expandedControl === framework.id ? 'Show less' : `View ${framework.controls.length} controls`}
                  <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${expandedControl === framework.id ? 'rotate-180' : ''}`} />
                </button>
                {expandedControl === framework.id && (
                  <ul className="mt-3 space-y-2 animate-fadeIn">
                    {framework.controls.map((control, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{control}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ==================== TIMELINE TAB ==================== */}
        {activeTab === 'timeline' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Security & Compliance Roadmap</h3>
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

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
              <div className="space-y-8">
                {filteredTimeline.map((item, idx) => (
                  <div key={idx} className="relative pl-10">
                    <div
                      className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${item.completed ? 'bg-emerald-500' : 'bg-blue-500'
                        } text-white`}
                    >
                      {item.completed ? <HiOutlineCheckCircle className="w-4 h-4" /> : <HiOutlineCalendar className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="text-sm font-semibold text-blue-600">{item.quarter}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${item.completed
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                            : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                            }`}
                        >
                          {item.completed ? 'Completed' : 'In Progress'}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.event}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== TRUST STATEMENT BANNER ==================== */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineShieldCheck className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Your Security is Our Priority</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We undergo regular third-party audits and maintain continuous monitoring to ensure your data remains secure. Our security practices are validated by industry-leading certifications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/security/whitepaper"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              Download Security Whitepaper
            </a>
            <a
              href="/security/report"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
            >
              <HiOutlineEye className="w-4 h-4" />
              Request Audit Report
            </a>
          </div>
        </div>

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
          <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Security Questions?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Our security team is here to help. Contact us for any security-related questions or to request compliance documentation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:security@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <HiOutlineMail className="w-4 h-4" />
              security@supplychainpro.com
            </a>
            <a
              href="/security"
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
            >
              <HiOutlineShieldCheck className="w-4 h-4" />
              Visit Security Center
            </a>
          </div>
        </div>

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
                    className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Close
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
      `}</style>
    </section>
  );
};

export default SecurityCertificationsSection2;