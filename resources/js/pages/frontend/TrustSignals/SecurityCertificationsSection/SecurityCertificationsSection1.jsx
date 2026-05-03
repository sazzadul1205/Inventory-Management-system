// page/frontend/TrustSignals/SecurityCertificationsSection/SecurityCertificationsSection1.jsx

/**
 * Security Certifications Section I - Trust & Compliance Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Security Metrics (Uptime SLA, Monitoring, Encryption, Audits)
 * - Certifications Grid with Modal Lightbox for Details
 * - Compliance Frameworks Row with Icon Pills
 * - Download Security Whitepaper CTA
 * - Request Audit Report CTA
 * - Contact Security Team Section
 * - Certification Badge with Gradient Header
 * - Key Features Checklist within Modal
 * - Scope & Validity Information Display
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Grid Layout for Certification Cards
 * - Trust Statement Banner
 * - Modal with Detailed Certification Information
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
  HiOutlineX,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from 'react-icons/md';

const SecurityCertificationsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  // ==================== MEMOIZED DATA ====================
  const certifications = config?.certifications || [
    {
      id: 'soc2',
      name: 'SOC 2 Type II',
      issuer: 'AICPA',
      badge: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=80&h=80&fit=crop',
      description: 'SOC 2 Type II certification demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy. This audit validates our controls over a period of time, not just a point in time.',
      scope: 'All core services, infrastructure, and supporting systems',
      validity: 'Annual audit',
      standard: 'Trust Services Criteria',
      features: [
        'Security controls validated quarterly',
        'Availability monitoring and incident response',
        'Confidentiality and privacy protections',
        'Processing integrity verification'
      ],
      icon: 'shield',
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'iso27001',
      name: 'ISO 27001:2022',
      issuer: 'International Organization for Standardization',
      badge: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=80&h=80&fit=crop',
      description: 'ISO 27001 is the international standard for information security management systems (ISMS). This certification validates our systematic approach to managing sensitive company and customer information.',
      scope: 'Global operations, all products and services',
      validity: '3 years with annual surveillance audits',
      standard: 'ISO/IEC 27001:2022',
      features: [
        'Information security management system',
        'Risk assessment and treatment',
        'Continuous improvement framework',
        'Security policy and controls'
      ],
      icon: 'certificate',
      color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'gdpr',
      name: 'GDPR Compliant',
      issuer: 'European Union',
      badge: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=80&h=80&fit=crop',
      description: 'We maintain full compliance with the General Data Protection Regulation (GDPR), ensuring that personal data of EU citizens is processed lawfully, transparently, and with appropriate security measures.',
      scope: 'All EU customer data processing',
      validity: 'Ongoing compliance',
      standard: 'Regulation (EU) 2016/679',
      features: [
        'Data protection by design and default',
        'Right to access and erasure',
        'Data processing agreements',
        'Breach notification procedures'
      ],
      icon: 'globe',
      color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 'hipaa',
      name: 'HIPAA Ready',
      issuer: 'U.S. Department of Health and Human Services',
      badge: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=80&h=80&fit=crop',
      description: 'Our platform is built to support HIPAA compliance for healthcare organizations handling protected health information (PHI). We provide the necessary controls and agreements for covered entities and business associates.',
      scope: 'Healthcare customer deployments',
      validity: 'Ongoing compliance',
      standard: 'HIPAA Security Rule',
      features: [
        'Business Associate Agreements',
        'Administrative safeguards',
        'Physical and technical safeguards',
        'Audit controls and integrity'
      ],
      icon: 'shield',
      color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
      gradient: 'from-rose-500 to-rose-600'
    }
  ];

  const stats = config?.stats || [
    { value: "99.99%", label: "Uptime SLA", icon: "bolt" },
    { value: "24/7", label: "Security Monitoring", icon: "eye" },
    { value: "256-bit", label: "Encryption", icon: "lock" },
    { value: "100+", label: "Security Audits", icon: "check" }
  ];

  const frameworks = config?.frameworks || [
    { name: "NIST Cybersecurity Framework", icon: "shield" },
    { name: "CSA STAR", icon: "cloud" },
    { name: "PCI DSS Level 1", icon: "credit" },
    { name: "FedRAMP Ready", icon: "flag" }
  ];

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
      headphones: <HiOutlineHeadphones className={className} />
    };
    return icons[iconName] || <HiOutlineShieldCheck className={className} />;
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

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Security Certifications - Trust & Compliance"
      itemScope
      itemType="https://schema.org/Organization"
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
          {/* Section Badge */}
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'Security & Compliance'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Enterprise-Grade'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Security'}
            </span>{' '}
            {config?.title?.suffix || 'Certifications'}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "We're committed to the highest standards of security and compliance. Our certifications demonstrate our dedication to protecting your data and meeting global regulatory requirements."}
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
                {getIcon(stat.icon, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== CERTIFICATIONS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => openModal(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(cert)}
            >
              {/* Gradient Header with Icon */}
              <div className={`relative h-24 bg-linear-to-r ${cert.gradient} flex items-center justify-center`}>
                <div className="absolute -bottom-8 left-6 w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                  {getIcon(cert.icon, 'w-8 h-8 text-blue-600 dark:text-blue-400')}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 pt-12">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${cert.color}`}>
                    {cert.validity}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs text-gray-500">{cert.standard}</span>
                  <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300">
                    Learn More
                    <HiArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== COMPLIANCE FRAMEWORKS ==================== */}
        <div className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Additional Compliance Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {frameworks.map((framework, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white dark:bg-gray-700 rounded-full px-4 py-2 shadow-sm"
              >
                {getIcon(framework.icon, 'w-4 h-4 text-blue-600 dark:text-blue-400')}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {framework.name}
                </span>
              </div>
            ))}
          </div>
        </div>

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
              {getIcon('document', 'w-4 h-4')}
              Download Security Whitepaper
            </a>
            <a
              href="/security/report"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
            >
              {getIcon('eye', 'w-4 h-4')}
              Request Audit Report
            </a>
          </div>
        </div>

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
          {getIcon('mail', 'w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4')}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Security Questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Our security team is here to help. Contact us for any security-related questions or to request compliance documentation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:security@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              {getIcon('mail', 'w-4 h-4')}
              security@supplychainpro.com
            </a>
            <a
              href="/security"
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
            >
              {getIcon('shield', 'w-4 h-4')}
              Visit Security Center
            </a>
          </div>
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
            {/* Modal Header */}
            <div className={`relative h-32 bg-linear-to-r ${selectedCert.gradient}`}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Close modal"
              >
                <HiOutlineX className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <div className="flex items-center gap-2">
                  {getIcon(selectedCert.icon, 'w-6 h-6')}
                  <h2 className="text-xl font-bold">{selectedCert.name}</h2>
                </div>
                <p className="text-sm text-white/80">{selectedCert.issuer}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {selectedCert.description}
                </p>

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
                    <p className="text-xs font-medium text-gray-500">Standard</p>
                    <p className="text-sm text-gray-900 dark:text-white">{selectedCert.standard}</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    {getIcon('check', 'w-4 h-4 text-emerald-500')}
                    Key Features:
                  </p>
                  <ul className="space-y-2">
                    {selectedCert.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        {getIcon('check', 'w-4 h-4 text-emerald-500 mt-0.5 shrink-0')}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={`/security/${selectedCert.id}/report`}
                  className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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

      {/* ==================== STYLES ==================== */}
      <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
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

export default SecurityCertificationsSection1;