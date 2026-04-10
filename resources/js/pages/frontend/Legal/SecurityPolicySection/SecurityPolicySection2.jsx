// page/frontend/Legal/SecurityPolicySection/SecurityPolicySection2.jsx

// React
import { useState, useMemo } from 'react';

// Icons
import {
  HiOutlineDocumentText,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineUser,
  HiOutlineClock,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineGlobe,
  HiOutlineDatabase,
  HiOutlineChip,
  HiOutlineCalendar,
  HiOutlineX,
  HiOutlineDownload,
  HiOutlinePrinter,
  HiOutlineSearch,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineEye,
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineExternalLink,
  HiOutlineInformationCircle,
  HiOutlineViewGrid,
  HiOutlineBell,
  HiOutlineServer,
  HiOutlineKey,
  HiOutlineFingerPrint,
} from 'react-icons/hi';
import { HiOutlineUserGroup, HiOutlineDocumentDuplicate, HiOutlineBuildingOffice } from 'react-icons/hi2';

const SecurityPolicySection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Tabs configuration
  const tabs = [
    { id: 'overview', label: 'Security Overview', icon: 'shield' },
    { id: 'controls', label: 'Security Controls', icon: 'view-grid' },
    { id: 'certifications', label: 'Certifications', icon: 'check' },
    { id: 'incidents', label: 'Incident Response', icon: 'bell' },
    { id: 'faq', label: 'FAQ', icon: 'chat' },
  ];

  // Quick facts
  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'calendar', color: 'cyan', trend: 'Version 2.0' },
    { label: 'Security Certifications', value: 'SOC 2, ISO 27001', icon: 'shield', color: 'green', trend: 'Annual audits' },
    { label: 'Encryption Standard', value: '256-bit AES, TLS 1.3', icon: 'lock', color: 'blue', trend: 'At rest and in transit' },
    { label: 'MFA Required', value: 'Yes', icon: 'fingerprint', color: 'purple', trend: 'For all users' },
    { label: 'Penetration Testing', value: 'Quarterly', icon: 'search', color: 'amber', trend: 'Third-party' },
    { label: 'Breach Notification', value: '24 hours', icon: 'bell', color: 'red', trend: 'Guaranteed SLA' },
  ];

  // Company information
  const company = config?.company || {
    name: "SupplyChainPro Inc.",
    address: "123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105",
    email: "security@supplychainpro.com",
    phone: "+1 (800) 555-0123",
    securityTeam: "security@supplychainpro.com",
    CISOName: "John Anderson",
  };

  // Security certifications
  const securityCertifications = useMemo(() => config?.securityCertifications || [
    {
      name: "SOC 2 Type II",
      issuer: "AICPA",
      description: "Service Organization Control 2 certification for security, availability, processing integrity, confidentiality, and privacy.",
      validUntil: "December 2026",
      status: "Active",
      reportUrl: "/security/soc2-report.pdf",
    },
    {
      name: "ISO 27001",
      issuer: "International Organization for Standardization",
      description: "Information Security Management System (ISMS) certification.",
      validUntil: "September 2026",
      status: "Active",
      reportUrl: "/security/iso27001-cert.pdf",
    },
    {
      name: "ISO 27017",
      issuer: "International Organization for Standardization",
      description: "Code of practice for information security controls for cloud services.",
      validUntil: "September 2026",
      status: "Active",
      reportUrl: "/security/iso27017-cert.pdf",
    },
    {
      name: "ISO 27018",
      issuer: "International Organization for Standardization",
      description: "Code of practice for protection of personally identifiable information (PII) in public clouds.",
      validUntil: "September 2026",
      status: "Active",
      reportUrl: "/security/iso27018-cert.pdf",
    },
    {
      name: "PCI DSS Level 1",
      issuer: "PCI Security Standards Council",
      description: "Payment Card Industry Data Security Standard compliance for payment processing.",
      validUntil: "March 2027",
      status: "Active",
      reportUrl: "/security/pci-dss.pdf",
    },
  ], [config?.securityCertifications]);

  // Security controls by domain with metrics
  const securityControls = useMemo(() => config?.securityControls || [
    {
      domain: "Access Control",
      icon: "lock",
      metrics: "99.9% MFA adoption",
      controls: [
        "Multi-factor authentication (MFA) for all users",
        "Role-based access control (RBAC)",
        "Principle of least privilege",
        "Regular access reviews (quarterly)",
        "Automated deprovisioning",
        "Password complexity requirements (12+ characters)",
        "Account lockout after 5 failed attempts",
      ],
    },
    {
      domain: "Data Protection",
      icon: "database",
      metrics: "256-bit encryption",
      controls: [
        "256-bit AES encryption for data at rest",
        "TLS 1.3 encryption for data in transit",
        "Data pseudonymization where possible",
        "Secure key management (90-day rotation)",
        "Data loss prevention (DLP) controls",
        "Secure backup with 30-day retention",
        "Data minimization by design",
      ],
    },
    {
      domain: "Network Security",
      icon: "globe",
      metrics: "24/7 monitoring",
      controls: [
        "Next-generation firewalls with IPS",
        "DDoS protection and mitigation",
        "Network segmentation",
        "VPN required for remote access",
        "Weekly vulnerability scanning",
        "Quarterly penetration testing",
        "24/7 Security Operations Center (SOC)",
      ],
    },
    {
      domain: "Application Security",
      icon: "chip",
      metrics: "Zero critical vulnerabilities",
      controls: [
        "Secure SDLC with security gates",
        "Code review for all changes",
        "Static Application Security Testing (SAST)",
        "Dynamic Application Security Testing (DAST)",
        "Software Composition Analysis (SCA)",
        "Bug bounty program",
        "Regular security training for developers",
      ],
    },
    {
      domain: "Incident Response",
      icon: "bell",
      metrics: "24-hour notification",
      controls: [
        "24/7 security incident response team",
        "Incident response plan (tested quarterly)",
        "Breach notification within 24 hours",
        "Forensic investigation capabilities",
        "Customer notification procedures",
        "Post-incident review and remediation",
      ],
    },
    {
      domain: "Physical Security",
      icon: "building",
      metrics: "Biometric access",
      controls: [
        "24/7 on-site security guards",
        "Biometric access controls",
        "CCTV surveillance (90-day retention)",
        "Two-factor authentication for data center access",
        "Visitor logging and escort requirements",
        "Environmental controls (fire suppression, UPS)",
      ],
    },
  ], [config?.securityControls]);

  // Incident response timeline
  const incidentResponseTimeline = config?.incidentResponseTimeline || [
    { phase: "Detection", time: "Real-time", description: "Automated monitoring and alerting systems detect potential security events." },
    { phase: "Analysis", time: "< 15 minutes", description: "Security team triages and analyzes the event to determine severity." },
    { phase: "Containment", time: "< 1 hour", description: "Immediate actions taken to contain the incident and prevent spread." },
    { phase: "Eradication", time: "< 4 hours", description: "Root cause identified and threat completely removed from environment." },
    { phase: "Recovery", time: "< 8 hours", description: "Systems restored to normal operation from verified clean backups." },
    { phase: "Notification", time: "24 hours", description: "Affected customers notified with details and remediation plan." },
  ];

  // Third-party security assessments
  const thirdPartyAssessments = config?.thirdPartyAssessments || [
    {
      provider: "Ernst & Young",
      assessmentType: "SOC 2 Type II Audit",
      frequency: "Annual",
      lastPerformed: "March 2026",
      nextScheduled: "March 2027",
      reportAvailable: true,
    },
    {
      provider: "Bishop Fox",
      assessmentType: "Penetration Testing",
      frequency: "Quarterly",
      lastPerformed: "February 2026",
      nextScheduled: "May 2026",
      reportAvailable: true,
    },
    {
      provider: "TrustArc",
      assessmentType: "GDPR Compliance Assessment",
      frequency: "Annual",
      lastPerformed: "January 2026",
      nextScheduled: "January 2027",
      reportAvailable: true,
    },
    {
      provider: "Internal Security Team",
      assessmentType: "Vulnerability Scanning",
      frequency: "Weekly",
      lastPerformed: "Ongoing",
      nextScheduled: "Ongoing",
      reportAvailable: false,
    },
  ];

  // FAQ data
  const faqs = config?.faqs || [
    {
      question: 'What security certifications does SupplyChainPro hold?',
      answer: 'We maintain SOC 2 Type II, ISO 27001, ISO 27017, ISO 27018, and PCI DSS Level 1 certifications. These are audited annually by independent third-party firms.',
    },
    {
      question: 'How is my data encrypted?',
      answer: 'We use 256-bit AES encryption for data at rest and TLS 1.3 for data in transit. Encryption keys are managed securely and rotated every 90 days. Enterprise customers can use customer-managed keys (CMK).',
    },
    {
      question: 'Do you perform penetration testing?',
      answer: 'Yes, we conduct quarterly penetration tests by third-party security firms like Bishop Fox. We also perform weekly automated vulnerability scans and maintain a bug bounty program for responsible disclosure.',
    },
    {
      question: 'How quickly do you notify customers of a breach?',
      answer: 'We commit to notifying affected customers within 24 hours of confirming a personal data breach. Our incident response plan is tested quarterly to ensure we meet this SLA.',
    },
    {
      question: 'Where can I access your security reports?',
      answer: 'Security reports, including our SOC 2 Type II report and penetration test summaries, are available to customers under NDA. Please contact our security team at security@supplychainpro.com to request access.',
    },
    {
      question: 'How do I report a security vulnerability?',
      answer: 'Please report security vulnerabilities to security@supplychainpro.com. We will acknowledge receipt within 24 hours and provide regular updates on remediation progress. We have a bug bounty program for qualifying findings.',
    },
  ];

  // Filter controls based on search
  const filteredControls = useMemo(() => {
    if (!searchQuery) return securityControls;
    const query = searchQuery.toLowerCase();
    return securityControls.filter(control =>
      control.domain.toLowerCase().includes(query) ||
      control.controls.some(c => c.toLowerCase().includes(query))
    );
  }, [securityControls, searchQuery]);

  const filteredCertifications = useMemo(() => {
    if (!searchQuery) return securityCertifications;
    const query = searchQuery.toLowerCase();
    return securityCertifications.filter(cert =>
      cert.name.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      cert.description.toLowerCase().includes(query)
    );
  }, [securityCertifications, searchQuery]);

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      info: <HiOutlineInformationCircle className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      user: <HiOutlineUser className={className} />,
      'user-group': <HiOutlineUserGroup className={className} />,
      chip: <HiOutlineChip className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      bell: <HiOutlineBell className={className} />,
      eye: <HiOutlineEye className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      clock: <HiOutlineClock className={className} />,
      scale: <HiOutlineScale className={className} />,
      mail: <HiOutlineMail className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      database: <HiOutlineDatabase className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      heart: <HiOutlineHeart className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      'view-grid': <HiOutlineViewGrid className={className} />,
      chat: <HiOutlineBell className={className} />,
      server: <HiOutlineServer className={className} />,
      key: <HiOutlineKey className={className} />,
      fingerprint: <HiOutlineFingerPrint className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
    };
    return icons[iconName] || <HiOutlineShieldCheck className={className} />;
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Security Policy Center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-900/30 rounded-full px-4 py-2 mb-6">
            <HiOutlineShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
              {config?.badge || "Security Policy"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Security"} <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Policy"}</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {config?.description || "At SupplyChainPro, security is our top priority. This policy outlines the technical and organizational measures we implement to protect your data."}
          </p>

          {/* Quick Facts Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {quickFacts.map((fact, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                <div className={`w-6 h-6 rounded-full bg-${fact.color}-100 dark:bg-${fact.color}-900/30 flex items-center justify-center`}>
                  {getIcon(fact.icon, `w-3 h-3 text-${  fact.color  }-600`)}
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  <strong>{fact.label}:</strong> {fact.value}
                </span>
                {fact.trend && (
                  <span className="text-xs text-gray-400 hidden sm:inline">{fact.trend}</span>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
            >
              <HiOutlineDownload className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-sm font-medium"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {tab.icon === 'shield' ? <HiOutlineShieldCheck className="w-4 h-4" /> :
                tab.icon === 'view-grid' ? <HiOutlineViewGrid className="w-4 h-4" /> :
                  tab.icon === 'check' ? <HiOutlineCheckCircle className="w-4 h-4" /> :
                    tab.icon === 'bell' ? <HiOutlineBell className="w-4 h-4" /> :
                      <HiOutlineBell className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Security Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Introduction Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                  <HiOutlineShieldCheck className="w-5 h-5 text-cyan-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Our Security Commitment</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                At SupplyChainPro, we understand that security is critical to your business. We are committed to protecting the confidentiality, integrity, and availability of your data through a comprehensive security program.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl text-center">
                  <HiOutlineLockClosed className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 dark:text-white">Confidentiality</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Data accessible only to authorized parties</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl text-center">
                  <HiOutlineDatabase className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 dark:text-white">Integrity</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Data remains accurate and unaltered</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl text-center">
                  <HiOutlineRefresh className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900 dark:text-white">Availability</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Data accessible when needed</p>
                </div>
              </div>
            </div>

            {/* Security Team Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Security Leadership</h2>
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                  <HiOutlineUser className="w-8 h-8 text-cyan-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{company.CISOName}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Chief Information Security Officer (CISO)</p>
                  <p className="text-xs text-gray-500 mt-1">20+ years of security experience | Former CISO at Fortune 500</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
                Our security team is available 24/7/365 to monitor, detect, and respond to security events. We maintain a dedicated Security Operations Center (SOC) with redundant shift coverage.
              </p>
            </div>

            {/* Key Security Metrics Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Security Metrics</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                  <p className="text-2xl font-bold text-cyan-600">99.9%</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">MFA Adoption Rate</p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                  <p className="text-2xl font-bold text-cyan-600">&lt;15 min</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Mean Time to Detect (MTTD)</p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                  <p className="text-2xl font-bold text-cyan-600">&lt;1 hr</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Mean Time to Respond (MTTR)</p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                  <p className="text-2xl font-bold text-cyan-600">100%</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Critical Patch Compliance</p>
                </div>
              </div>
            </div>

            {/* Data Centers Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                  <HiOutlineServer className="w-5 h-5 text-cyan-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Data Center Security</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                We use AWS and GCP data centers with the following security features:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>SOC 2, ISO 27001, PCI DSS certified facilities</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>24/7 on-site security with biometric access</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Multi-region deployment for redundancy</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Data stored in US, EU, and APAC regions based on customer preference</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Security Controls Tab */}
        {activeTab === 'controls' && (
          <>
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search security controls..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Controls Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredControls.map((control, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => setExpandedSection(expandedSection === idx ? null : idx)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                        {getIcon(control.icon, "w-5 h-5 text-cyan-600")}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{control.domain}</h3>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{control.metrics}</span>
                  </div>

                  {expandedSection === idx && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <ul className="space-y-2">
                        {control.controls.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-3 text-right">
                    <span className="text-cyan-600 text-xs font-semibold">
                      {expandedSection === idx ? 'Show less ↑' : 'Show details ↓'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredControls.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
                <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-gray-500">No security controls match your search.</p>
              </div>
            )}
          </>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <>
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search certifications..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredCertifications.map((cert, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                        <p className="text-xs text-gray-500">Issuer: {cert.issuer}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{cert.status}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Valid until: {cert.validUntil}</span>
                    {cert.reportUrl && (
                      <button className="text-cyan-600 text-xs font-semibold hover:underline flex items-center gap-1">
                        View Report <HiOutlineExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Third-Party Assessments Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mt-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Third-Party Security Assessments</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-900/50">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Provider</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Assessment Type</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Frequency</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Last Performed</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    {thirdPartyAssessments.map((assessment, idx) => (
                      <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="p-3 text-gray-600 dark:text-gray-400">{assessment.provider}</td>
                        <td className="p-3 text-gray-600 dark:text-gray-400">{assessment.assessmentType}</td>
                        <td className="p-3 text-gray-600 dark:text-gray-400">{assessment.frequency}</td>
                        <td className="p-3 text-gray-600 dark:text-gray-400">{assessment.lastPerformed}</td>
                        <td className="p-3">
                          {assessment.reportAvailable ? (
                            <button className="text-cyan-600 text-xs font-semibold hover:underline">Request →</button>
                          ) : (
                            <span className="text-xs text-gray-400">Internal</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Incident Response Tab */}
        {activeTab === 'incidents' && (
          <div className="space-y-6">
            {/* Timeline Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                  <HiOutlineClock className="w-5 h-5 text-cyan-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Incident Response Timeline</h2>
              </div>
              <div className="space-y-4">
                {incidentResponseTimeline.map((phase, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-24 shrink-0">
                      <span className="inline-block px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-lg text-xs font-semibold">
                        {phase.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{phase.phase}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{phase.description}</p>
                    </div>
                    {idx < incidentResponseTimeline.length - 1 && (
                      <div className="w-px h-8 bg-gray-200 dark:bg-gray-700 ml-12" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Incident Response Team Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Incident Response Team</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our incident response team is composed of security professionals available 24/7/365:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                  Security Operations Center (SOC) Analysts
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                  Forensic Investigators
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                  Legal and Compliance
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                  Communications Lead
                </div>
              </div>
            </div>

            {/* Breach Notification Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <HiOutlineBell className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Breach Notification Commitment</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                In the event of a personal data breach affecting your data, we commit to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Notify affected customers within <strong>24 hours</strong> of confirmation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Provide detailed information about the breach and affected data</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Assign a dedicated incident manager for communication</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Provide regular updates until resolution</span>
                </li>
              </ul>
            </div>

            {/* Responsible Disclosure */}
            <div className="bg-linear-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 text-white">
              <HiOutlineHeart className="w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold mb-2">Responsible Disclosure Program</h3>
              <p className="text-cyan-100 mb-4">
                We value the security research community. If you discover a security vulnerability, please report it to us responsibly.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  <HiOutlineMail className="w-4 h-4" />
                  Report Vulnerability
                </button>
                <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                  <HiOutlineDocumentText className="w-4 h-4" />
                  View Policy
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                    {expandedFaq === idx ? (
                      <HiOutlineChevronUp className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                    ) : (
                      <HiOutlineChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                    )}
                  </button>
                  {expandedFaq === idx && (
                    <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Still have security questions? Contact our security team at{' '}
                <a href="mailto:security@supplychainpro.com" className="text-cyan-600 font-medium hover:underline">
                  security@supplychainpro.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Contact Footer */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>For security inquiries or to report a vulnerability, contact:</p>
          <p className="mt-1">
            <a href="mailto:security@supplychainpro.com" className="text-cyan-600 hover:underline">security@supplychainpro.com</a>
          </p>
        </div>

        {/* Print/Download Modal */}
        {showPrintModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowPrintModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-cyan-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Download Security Policy</h3>
                  <button onClick={() => setShowPrintModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <HiOutlineDocumentDuplicate className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Choose your preferred format to download the complete Security Policy.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                    <HiOutlineDownload className="w-4 h-4" />
                    PDF
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                    <HiOutlinePrinter className="w-4 h-4" />
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

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
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default SecurityPolicySection2;