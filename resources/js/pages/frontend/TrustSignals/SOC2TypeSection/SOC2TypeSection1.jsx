// page/frontend/TrustSignals/SOC2TypeSection/SOC2TypeSection1.jsx

/**
 * SOC 2 Type II Section - Security & Compliance Certification Hub
 *
 * Unique Design Elements:
 * - Stats Cards for SOC 2 Metrics (Type II, Uptime SLA, Monitoring, Audit Cycle)
 * - What is SOC 2 Type II Explanation Card
 * - Trust Service Criteria Grid with Expandable Controls
 * - Audit Details Grid with Visual Icons
 * - SOC 2 Report Request Form with Validation
 * - Success Message on Form Submission
 * - Contact Security Team Section
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Grid Layout for Trust Services
 * - Interactive Criteria Cards with Click-to-Expand
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
  HiOutlineOfficeBuilding,
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from 'react-icons/md';

const SOC2TypeSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTrustService, setActiveTrustService] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', reason: '' });

  // ==================== MEMOIZED DATA ====================

  const trustServices = config?.trustServices || [
    {
      title: 'Security',
      description: 'The system is protected against unauthorized access, both logical and physical. Our security controls ensure data confidentiality and integrity.',
      icon: 'shield',
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      gradient: 'from-blue-500 to-blue-600',
      controls: [
        'Access controls and authentication',
        'Firewalls and intrusion detection',
        'Encryption for data at rest and in transit',
        'Regular vulnerability assessments',
        'Security incident response plan'
      ]
    },
    {
      title: 'Availability',
      description: 'The system is available for operation and use as committed or agreed. Our infrastructure is designed for high availability and resilience.',
      icon: 'clock',
      color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      gradient: 'from-emerald-500 to-emerald-600',
      controls: [
        '99.9% uptime SLA',
        'Redundant infrastructure',
        'Disaster recovery planning',
        'Performance monitoring',
        'Incident response procedures'
      ]
    },
    {
      title: 'Processing Integrity',
      description: 'System processing is complete, accurate, timely, and authorized. Our processes ensure data processing integrity.',
      icon: 'check',
      color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      gradient: 'from-purple-500 to-purple-600',
      controls: [
        'Data validation checks',
        'Processing monitoring',
        'Error handling procedures',
        'Data quality controls',
        'Audit trails'
      ]
    },
    {
      title: 'Confidentiality',
      description: 'Information designated as confidential is protected as committed or agreed. We maintain strict confidentiality controls.',
      icon: 'lock',
      color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
      gradient: 'from-rose-500 to-rose-600',
      controls: [
        'Data classification policies',
        'Access controls',
        'Encryption standards',
        'Confidentiality agreements',
        'Data loss prevention'
      ]
    },
    {
      title: 'Privacy',
      description: 'Personal information is collected, used, retained, disclosed, and disposed of in conformity with privacy principles.',
      icon: 'users',
      color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
      gradient: 'from-amber-500 to-amber-600',
      controls: [
        'Privacy by design',
        'Consent management',
        'Data subject rights',
        'Privacy impact assessments',
        'GDPR/CCPA compliance'
      ]
    }
  ];

  const stats = config?.stats || [
    { value: 'SOC 2', label: 'Type II', icon: 'certificate' },
    { value: '99.9%', label: 'Uptime SLA', icon: 'clock' },
    { value: '24/7', label: 'Monitoring', icon: 'eye' },
    { value: 'Annual', label: 'Audit Cycle', icon: 'calendar' }
  ];

  const auditDetails = config?.auditDetails || {
    period: 'December 1, 2023 - November 30, 2024',
    auditor: 'Deloitte & Touche LLP',
    scope: 'All core services and infrastructure',
    result: 'Unqualified Opinion'
  };

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
      headphones: <HiOutlineHeadphones className={className} />,
      officeBuilding: <HiOutlineOfficeBuilding className={className} />
    };
    return icons[iconName] || <HiOutlineCertificate className={className} />;
  };

  /**
   * Handle form input change
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        reason: ''
      });
    }, 3000);
  };

  /**
   * Toggle trust service expansion
   */
  const toggleTrustService = (index) => {
    setActiveTrustService(activeTrustService === index ? null : index);
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="SOC 2 Type II - Security & Compliance"
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
            <HiOutlineCertificate className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || 'SOC 2 Type II'}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Validated by'}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || 'SOC 2 Type II'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "Our SOC 2 Type II certification demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy. This independent audit validates our controls over an extended period."}
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

        {/* ==================== WHAT IS SOC 2 TYPE II ==================== */}
        <div className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/3">
              <div className="w-32 h-32 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto">
                <HiOutlineCertificate className="w-16 h-16 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What is SOC 2 Type II?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                SOC 2 (Service Organization Control 2) is an auditing standard developed by the American Institute of
                CPAs (AICPA). It evaluates how we manage customer data based on five trust service criteria.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Type II means our controls are tested over a period of time (not just a point in time), providing greater
                assurance about their effectiveness. Our audit covers security, availability, processing integrity,
                confidentiality, and privacy.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== TRUST SERVICE CRITERIA ==================== */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            SOC 2 Trust Service Criteria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => toggleTrustService(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleTrustService(idx)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center`}>
                    {getIcon(service.icon, 'w-6 h-6')}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                {activeTrustService === idx && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Controls:</p>
                    <ul className="space-y-2">
                      {service.controls.map((control, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <HiOutlineCheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{control}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== AUDIT DETAILS ==================== */}
        <div className="mb-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Audit Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlineCalendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Audit Period</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{auditDetails.period}</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlineBadgeCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Auditor</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{auditDetails.auditor}</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlineGlobe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Scope</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{auditDetails.scope}</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-3">
                <HiOutlineCheckCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Result</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{auditDetails.result}</p>
            </div>
          </div>
        </div>

        {/* ==================== REPORT REQUEST FORM ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <HiOutlineDocumentText className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request SOC 2 Type II Report</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Complete the form below to request access to our SOC 2 Type II report. We'll verify your request and provide
              access within 2 business days.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thank you for your request. Our security team will review and provide access to the SOC 2 Type II report
                within 2 business days.
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
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
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
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="Your Company"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Reason for Request *
                  </label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                    placeholder="Please tell us why you need access to the SOC 2 report..."
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Request Report
                  <HiArrowRight className="inline ml-2 w-4 h-4" />
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">
                  We'll verify your request and provide access to the SOC 2 Type II report within 2 business days.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* ==================== CONTACT SECTION ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Questions About SOC 2?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our security team is available to answer questions about our SOC 2 certification and compliance program.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:security@supplychainpro.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              aria-label="Email security team"
            >
              <HiOutlineMail className="w-4 h-4" />
              security@supplychainpro.com
            </a>
            <a
              href="/security"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Visit Security Center"
            >
              <HiOutlineShieldCheck className="w-4 h-4" />
              Visit Security Center
            </a>
          </div>
        </div>
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
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default SOC2TypeSection1;