// page/frontend/Legal/SecurityPolicySection/SecurityPolicySection1.jsx

// React
import { useState } from 'react';

// Icons
import {
  HiOutlineDocumentText,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineUser,
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
  HiOutlineOfficeBuilding,
  HiOutlineServer,
  HiOutlineKey,
} from 'react-icons/hi';
import { HiOutlineUserGroup, HiOutlineDocumentDuplicate, HiOutlineBuildingOffice, HiOutlineFingerPrint, HiOutlineBell } from 'react-icons/hi2';

const SecurityPolicySection1 = ({ config }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSection, setExpandedSection] = useState(null);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Navigation sections
  const sections = config?.sections || [
    { id: 'introduction', label: 'Introduction', icon: 'document' },
    { id: 'security-governance', label: 'Security Governance', icon: 'office-building' },
    { id: 'access-control', label: 'Access Control', icon: 'lock' },
    { id: 'data-encryption', label: 'Data Encryption', icon: 'lock' },
    { id: 'network-security', label: 'Network Security', icon: 'globe' },
    { id: 'application-security', label: 'Application Security', icon: 'chip' },
    { id: 'incident-response', label: 'Incident Response', icon: 'bell' },
    { id: 'business-continuity', label: 'Business Continuity', icon: 'refresh' },
    { id: 'third-party-security', label: 'Third-Party Security', icon: 'user-group' },
    { id: 'compliance-audits', label: 'Compliance & Audits', icon: 'check' },
    { id: 'security-training', label: 'Security Training', icon: 'user' },
    { id: 'vulnerability-management', label: 'Vulnerability Management', icon: 'search' },
    { id: 'physical-security', label: 'Physical Security', icon: 'building' },
    { id: 'contact-us', label: 'Contact Us', icon: 'mail' },
  ];

  // Company information
  const company = config?.company || {
    name: "SupplyChainPro Inc.",
    address: "123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105",
    email: "security@supplychainpro.com",
    phone: "+1 (800) 555-0123",
    securityTeam: "security@supplychainpro.com",
  };

  // Quick facts
  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'calendar', color: 'blue' },
    { label: 'Security Certifications', value: 'SOC 2, ISO 27001', icon: 'shield', color: 'green' },
    { label: 'Encryption Standard', value: '256-bit AES, TLS 1.3', icon: 'lock', color: 'purple' },
    { label: 'MFA Required', value: 'Yes', icon: 'fingerprint', color: 'indigo' },
    { label: 'Penetration Testing', value: 'Quarterly', icon: 'search', color: 'amber' },
    { label: 'Data Centers', value: 'US, EU, APAC', icon: 'globe', color: 'teal' },
  ];

  // Security certifications
  const securityCertifications = config?.securityCertifications || [
    {
      name: "SOC 2 Type II",
      issuer: "AICPA",
      description: "Service Organization Control 2 certification for security, availability, processing integrity, confidentiality, and privacy.",
      validUntil: "December 2026",
    },
    {
      name: "ISO 27001",
      issuer: "International Organization for Standardization",
      description: "Information Security Management System (ISMS) certification.",
      validUntil: "September 2026",
    },
    {
      name: "ISO 27017",
      issuer: "International Organization for Standardization",
      description: "Code of practice for information security controls for cloud services.",
      validUntil: "September 2026",
    },
    {
      name: "ISO 27018",
      issuer: "International Organization for Standardization",
      description: "Code of practice for protection of personally identifiable information (PII) in public clouds.",
      validUntil: "September 2026",
    },
  ];

  // Third-party security assessments
  const thirdPartyAssessments = config?.thirdPartyAssessments || [
    {
      provider: "Ernst & Young",
      assessmentType: "SOC 2 Type II Audit",
      frequency: "Annual",
      lastPerformed: "March 2026",
    },
    {
      provider: "Bishop Fox",
      assessmentType: "Penetration Testing",
      frequency: "Quarterly",
      lastPerformed: "February 2026",
    },
    {
      provider: "TrustArc",
      assessmentType: "GDPR Compliance Assessment",
      frequency: "Annual",
      lastPerformed: "January 2026",
    },
    {
      provider: "Internal Security Team",
      assessmentType: "Vulnerability Scanning",
      frequency: "Weekly",
      lastPerformed: "Ongoing",
    },
  ];

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      'office-building': <HiOutlineOfficeBuilding className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      chip: <HiOutlineChip className={className} />,
      bell: <HiOutlineBell className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      'user-group': <HiOutlineUserGroup className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      user: <HiOutlineUser className={className} />,
      search: <HiOutlineSearch className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      mail: <HiOutlineMail className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      fingerprint: <HiOutlineFingerPrint className={className} />,
      server: <HiOutlineServer className={className} />,
      key: <HiOutlineKey className={className} />,
      scale: <HiOutlineScale className={className} />,
      eye: <HiOutlineEye className={className} />,
      database: <HiOutlineDatabase className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      heart: <HiOutlineHeart className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
    };
    return icons[iconName] || <HiOutlineShieldCheck className={className} />;
  };

  // Scroll to section handler
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Toggle section expansion for mobile
  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Security Policy Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-cyan-200 dark:bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-cyan-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-cyan-100 dark:border-gray-700">
            <HiOutlineShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
              {config?.badge || "Security Policy"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Security"} <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Policy"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "At SupplyChainPro, security is our top priority. This policy outlines the technical and organizational measures we implement to protect your data from unauthorized access, disclosure, alteration, and destruction."}
          </p>

          {/* Quick Facts Row */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {quickFacts.map((fact, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                {getIcon(fact.icon, "w-4 h-4 text-gray-500")}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>{fact.label}:</strong> {fact.value}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors text-sm font-medium"
            >
              <HiOutlineDownload className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* Navigation Sidebar & Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sticky Navigation - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <HiOutlineShieldCheck className="w-5 h-5 text-cyan-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Contents</h3>
              </div>
              <nav className="space-y-1 max-h-96 overflow-y-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${activeSection === section.id
                      ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                  >
                    {getIcon(section.icon, "w-4 h-4")}
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Mobile Navigation - Accordion */}
          <div className="lg:hidden mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => toggleSection('mobile-nav')}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <HiOutlineShieldCheck className="w-5 h-5 text-cyan-600" />
                  <span className="font-semibold text-gray-900 dark:text-white">Jump to Section</span>
                </div>
                {expandedSection === 'mobile-nav' ? (
                  <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {expandedSection === 'mobile-nav' && (
                <nav className="mt-4 space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        scrollToSection(section.id);
                        setExpandedSection(null);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {getIcon(section.icon, "w-4 h-4")}
                      {section.label}
                    </button>
                  ))}
                </nav>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction Section */}
            <div id="introduction" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineDocumentText className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Introduction</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    At SupplyChainPro, we understand that security is critical to your business. We are committed to protecting the confidentiality, integrity, and availability of your data through a comprehensive security program.
                  </p>
                  <p>
                    This Security Policy describes the technical and organizational measures we implement to safeguard your information from unauthorized access, disclosure, alteration, and destruction.
                  </p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-xl border border-cyan-100 dark:border-cyan-800">
                    <p className="text-sm text-cyan-800 dark:text-cyan-300">
                      <strong>Our Commitment:</strong> Security is embedded into our culture, processes, and technology. We continuously invest in security to protect your data and maintain your trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Governance Section */}
            <div id="security-governance" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineOfficeBuilding className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Security Governance</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Our security program is governed by a dedicated security team led by our Chief Information Security Officer (CISO), who reports directly to executive leadership and the board of directors.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Dedicated security team available 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Regular security reviews by executive leadership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Annual security strategy and roadmap planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Independent security audits and assessments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Access Control Section */}
            <div id="access-control" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineLockClosed className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Access Control</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We implement strict access controls to ensure that only authorized individuals can access your data:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Multi-Factor Authentication (MFA):</strong> Required for all users accessing our systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Role-Based Access Control (RBAC):</strong> Users are granted only the minimum access necessary</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Regular Access Reviews:</strong> Quarterly reviews of all user access rights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Automated Deprovisioning:</strong> Immediate removal of access upon termination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Password Policy:</strong> Minimum 12 characters with complexity requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Encryption Section */}
            <div id="data-encryption" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineKey className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Encryption</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We protect your data using industry-standard encryption both at rest and in transit:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <HiOutlineDatabase className="w-5 h-5 text-green-600" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">Encryption at Rest</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">256-bit AES encryption for all data stored in our databases, file systems, and backups.</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <HiOutlineGlobe className="w-5 h-5 text-green-600" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">Encryption in Transit</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">TLS 1.3 encryption for all data transmitted between your device and our servers.</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-4 mt-2">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Secure key management with automatic key rotation every 90 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Customer-controlled encryption keys available for enterprise customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Backup encryption with same standards as primary data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Network Security Section */}
            <div id="network-security" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineServer className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Network Security</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Our network infrastructure is protected by multiple layers of security controls:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Next-generation firewalls with intrusion prevention systems (IPS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>DDoS protection and mitigation at the edge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Network segmentation and micro-segmentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>24/7 security monitoring by our Security Operations Center (SOC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Regular vulnerability scanning (weekly) and penetration testing (quarterly)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Application Security Section */}
            <div id="application-security" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineChip className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Application Security</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We build security into every stage of our software development lifecycle:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Secure SDLC with security gates at each phase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Static Application Security Testing (SAST) on all code changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Dynamic Application Security Testing (DAST) before production deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Software Composition Analysis (SCA) for third-party dependencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Bug bounty program for responsible disclosure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Incident Response Section */}
            <div id="incident-response" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineBell className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Incident Response</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We maintain a comprehensive incident response program to quickly detect, respond to, and recover from security incidents:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>24/7 security incident response team on call</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Incident response plan tested quarterly through tabletop exercises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Breach notification to affected customers within 24 hours of confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Forensic investigation capabilities for root cause analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Post-incident reviews with remediation tracking</span>
                    </li>
                  </ul>
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      In the event of a security incident affecting your data, we will notify you within 24 hours and provide regular updates until resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Continuity Section */}
            <div id="business-continuity" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineRefresh className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Business Continuity & Disaster Recovery</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We ensure business continuity through redundant infrastructure and tested disaster recovery procedures:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Multi-region deployment for high availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Automated daily backups with 30-day retention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Disaster recovery tested annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Recovery Time Objective (RTO): 4 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Recovery Point Objective (RPO): 15 minutes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Security Section */}
            <div id="third-party-security" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineUserGroup className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Third-Party Security</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We evaluate the security posture of all third-party vendors before engagement:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Security assessments for all vendors processing customer data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Data Processing Agreements (DPAs) with all subprocessors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Annual review of vendor security certifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Right to audit contractual provisions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compliance & Audits Section */}
            <div id="compliance-audits" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineCheckCircle className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Compliance & Audits</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We maintain industry-recognized security certifications and undergo regular independent audits:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {securityCertifications.map((cert, idx) => (
                      <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                        <p className="font-semibold text-gray-900 dark:text-white">{cert.name}</p>
                        <p className="text-xs text-gray-500">{cert.issuer}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{cert.description.substring(0, 80)}...</p>
                        <p className="text-xs text-cyan-600 mt-1">Valid until: {cert.validUntil}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Third-Party Assessments</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 dark:bg-gray-900/50">
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="text-left p-2 font-semibold text-gray-900 dark:text-white">Provider</th>
                            <th className="text-left p-2 font-semibold text-gray-900 dark:text-white">Assessment Type</th>
                            <th className="text-left p-2 font-semibold text-gray-900 dark:text-white">Frequency</th>
                            <th className="text-left p-2 font-semibold text-gray-900 dark:text-white">Last Performed</th>
                          </tr>
                        </thead>
                        <tbody>
                          {thirdPartyAssessments.map((assessment, idx) => (
                            <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                              <td className="p-2 text-gray-600 dark:text-gray-400">{assessment.provider}</td>
                              <td className="p-2 text-gray-600 dark:text-gray-400">{assessment.assessmentType}</td>
                              <td className="p-2 text-gray-600 dark:text-gray-400">{assessment.frequency}</td>
                              <td className="p-2 text-gray-600 dark:text-gray-400">{assessment.lastPerformed}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Training Section */}
            <div id="security-training" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineUser className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Security Training & Awareness</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We ensure all employees understand their role in protecting your data:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Annual security awareness training for all employees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Role-specific training for engineers and support staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Phishing simulation exercises (quarterly)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Background checks for all employees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Confidentiality agreements signed by all personnel</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vulnerability Management Section */}
            <div id="vulnerability-management" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineSearch className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Vulnerability Management</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We proactively identify and remediate security vulnerabilities:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Weekly automated vulnerability scans of all systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Quarterly third-party penetration testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Bug bounty program for responsible disclosure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Patch management within defined SLAs based on severity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Risk acceptance process for exceptions</span>
                    </li>
                  </ul>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      <strong>Responsible Disclosure:</strong> If you discover a security vulnerability, please contact us at security@supplychainpro.com. We will investigate and remediate promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Security Section */}
            <div id="physical-security" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineBuildingOffice className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Physical Security</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Our facilities and data centers are protected by multiple layers of physical security:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>24/7 on-site security guards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Biometric access controls for all secure areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Comprehensive CCTV surveillance with 90-day retention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Two-factor authentication for data center access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Environmental controls (fire suppression, UPS, generators)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Us Section */}
            <div id="contact-us" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                </div>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <p>
                    If you have any questions about our security practices or need to report a security concern, please contact us:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">{company.name}</p>
                    <p className="text-sm">{company.address}</p>
                    <p className="text-sm">
                      <strong>Security Team Email:</strong> <a href={`mailto:${company.securityTeam}`} className="text-cyan-600 hover:underline">{company.securityTeam}</a>
                    </p>
                    <p className="text-sm"><strong>Phone:</strong> {company.phone}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    For security vulnerabilities, please email security@supplychainpro.com. We will respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
        .scroll-mt-24 {
          scroll-margin-top: 6rem;
        }
      `}</style>
    </section>
  );
};

export default SecurityPolicySection1;