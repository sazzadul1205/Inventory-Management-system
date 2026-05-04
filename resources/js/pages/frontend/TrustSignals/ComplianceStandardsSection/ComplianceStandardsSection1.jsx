// page/frontend/TrustSignals/ComplianceStandardsSection/ComplianceStandardsSection1.jsx

/**
 * Compliance Standards Section I - Global Compliance Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Compliance Metrics (Global Standards, Compliance Rate, Monitoring, Audits)
 * - Standards Grid with Gradient Headers and Status Badges
 * - Certification Tags and Audit Timeline Display
 * - Compliance Commitment Banner with CTA Buttons
 * - Standard Detail Modal with Key Requirements and Audit Info
 * - Download Report and Request Documentation CTAs
 * - Contact Compliance Team Section
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Grid Layout for Standard Cards
 * - Status Badges with Visual Indicators
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
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineScale,
  HiOutlineX,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from 'react-icons/md';

const ComplianceStandardsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [showModal, setShowModal] = useState(false);
  const [selectedStandard, setSelectedStandard] = useState(null);

  // ==================== MEMOIZED DATA ====================

  const standards = config?.standards || [
    {
      id: 'gdpr',
      name: 'GDPR',
      fullName: 'General Data Protection Regulation',
      region: 'European Union',
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
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      lastAudit: 'January 2024',
      nextAudit: 'January 2025'
    },
    {
      id: 'ccpa',
      name: 'CCPA',
      fullName: 'California Consumer Privacy Act',
      region: 'California, USA',
      category: 'Data Privacy',
      status: 'Compliant',
      description: 'The CCPA grants California residents new rights regarding their personal information, including the right to know what data is collected, request deletion, and opt-out of data sales.',
      keyRequirements: [
        'Right to know what personal information is collected',
        'Right to delete personal information',
        'Right to opt-out of data sales',
        'Right to non-discrimination for exercising rights',
        'Notice at collection requirements'
      ],
      certifications: ['CCPA Ready'],
      icon: 'shield',
      gradient: 'from-emerald-500 to-emerald-600',
      color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      lastAudit: 'February 2024',
      nextAudit: 'February 2025'
    },
    {
      id: 'soc2',
      name: 'SOC 2 Type II',
      fullName: 'Service Organization Control 2 Type II',
      region: 'Global',
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
      color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      lastAudit: 'December 2023',
      nextAudit: 'December 2024'
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      fullName: 'ISO/IEC 27001:2022',
      region: 'Global',
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
      color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
      lastAudit: 'October 2023',
      nextAudit: 'October 2024'
    },
    {
      id: 'hipaa',
      name: 'HIPAA',
      fullName: 'Health Insurance Portability and Accountability Act',
      region: 'United States',
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
      color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
      lastAudit: 'March 2024',
      nextAudit: 'March 2025'
    },
    {
      id: 'pci-dss',
      name: 'PCI DSS',
      fullName: 'Payment Card Industry Data Security Standard',
      region: 'Global',
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
      color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
      lastAudit: 'November 2023',
      nextAudit: 'November 2024'
    }
  ];

  const stats = config?.stats || [
    { value: '6', label: 'Global Standards', icon: 'globe' },
    { value: '100%', label: 'Compliance Rate', icon: 'check' },
    { value: '24/7', label: 'Monitoring', icon: 'eye' },
    { value: 'Annual', label: 'Audits', icon: 'calendar' }
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
      x: <HiOutlineX className={className} />,
      headphones: <HiOutlineHeadphones className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineShieldCheck className={className} />;
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

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Compliance Standards - Global Compliance"
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
              {config?.badge || 'Compliance Standards'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Meeting Global'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'Compliance'}
            </span>{' '}
            {config?.title?.suffix || 'Standards'}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "We adhere to the highest industry standards and regulations to ensure your data is protected and your business remains compliant."}
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

        {/* ==================== STANDARDS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {standards.map((standard) => (
            <div
              key={standard.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => openModal(standard)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(standard)}
            >
              <div className={`h-2 bg-linear-to-r ${standard.gradient}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${standard.color} flex items-center justify-center`}>
                      {getIcon(standard.icon, 'w-6 h-6')}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{standard.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{standard.region}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <HiOutlineCheckCircle className="w-3 h-3" />
                    {standard.status}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {standard.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
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
                  {standard.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs text-gray-500">{standard.category}</span>
                  <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300">
                    View Details
                    <HiArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== COMPLIANCE COMMITMENT BANNER ==================== */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineShieldCheck className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Our Commitment to Compliance</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We undergo regular third-party audits and maintain continuous compliance monitoring to ensure we meet the
            highest standards of security and privacy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/compliance/report"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              aria-label="Download compliance report"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              Download Compliance Report
            </a>
            <a
              href="/security/request"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Request compliance documentation"
            >
              <HiOutlineMail className="w-4 h-4" />
              Request Compliance Documentation
            </a>
          </div>
        </div>

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
          <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Compliance Questions?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Our compliance team is available to answer questions about our standards and provide documentation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:compliance@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              aria-label="Email compliance team"
            >
              <HiOutlineMail className="w-4 h-4" />
              compliance@supplychainpro.com
            </a>
            <a
              href="/compliance-request"
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Request compliance documents"
            >
              <HiOutlineDocumentText className="w-4 h-4" />
              Request Documents
            </a>
          </div>
        </div>
      </div>

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
                  <div className={`w-12 h-12 rounded-xl ${selectedStandard.color} flex items-center justify-center`}>
                    {getIcon(selectedStandard.icon, 'w-6 h-6')}
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

              <div className="mb-4">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <HiOutlineCheckCircle className="w-3 h-3" />
                    {selectedStandard.status}
                  </span>
                  <span className="text-xs text-gray-500">{selectedStandard.region}</span>
                  <span className="text-xs text-gray-500">{selectedStandard.category}</span>
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
              </div>

              <div className="flex gap-3">
                <a
                  href={`/compliance/${selectedStandard.id}/report`}
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

      {/* ==================== STYLES ==================== */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
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

export default ComplianceStandardsSection1;