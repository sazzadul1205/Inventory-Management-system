// page/frontend/Legal/GDPRComplianceSection/GDPRComplianceSection1.jsx

// React
import { useState } from 'react';

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
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineEye,
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineInformationCircle,
} from 'react-icons/hi';
import { HiOutlineUserGroup, HiOutlineBuildingOffice, HiOutlineDocumentDuplicate, HiOutlineBell } from 'react-icons/hi2';

const GDPRComplianceSection1 = ({ config }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSection, setExpandedSection] = useState(null);
  const [showPrintModal, setShowPrintModal] = useState(false);

  // Navigation sections
  const sections = config?.sections || [
    { id: 'introduction', label: 'Introduction to GDPR', icon: 'document' },
    { id: 'data-controller', label: 'Data Controller', icon: 'building' },
    { id: 'legal-basis', label: 'Legal Basis for Processing', icon: 'scale' },
    { id: 'data-subject-rights', label: 'Data Subject Rights', icon: 'user' },
    { id: 'lawful-processing', label: 'Lawful Processing Conditions', icon: 'check' },
    { id: 'consent-management', label: 'Consent Management', icon: 'heart' },
    { id: 'data-security', label: 'Data Security Measures', icon: 'shield' },
    { id: 'data-breach', label: 'Data Breach Procedures', icon: 'bell' },
    { id: 'international-transfers', label: 'International Transfers', icon: 'globe' },
    { id: 'data-retention', label: 'Data Retention Policy', icon: 'clock' },
    { id: 'dpo-information', label: 'DPO Information', icon: 'mail' },
    { id: 'supervisory-authority', label: 'Supervisory Authority', icon: 'scale' },
    { id: 'compliance-certifications', label: 'Compliance Certifications', icon: 'shield' },
    { id: 'contact-us', label: 'Contact Us', icon: 'mail' },
  ];

  // Company information
  const company = config?.company || {
    name: "SupplyChainPro Inc.",
    legalName: "SupplyChainPro Inc.",
    address: "123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105",
    email: "privacy@supplychainpro.com",
    phone: "+1 (800) 555-0123",
    dpoName: "Dr. Sarah Chen",
    dpoEmail: "dpo@supplychainpro.com",
    representativeEU: "SupplyChainPro EU Ltd., 123 Dublin Street, Dublin, Ireland",
  };

  // Quick facts
  const quickFacts = config?.quickFacts || [
    { label: 'GDPR Compliant', value: 'Yes', icon: 'check', color: 'green' },
    { label: 'Data Subject Rights', value: '8', icon: 'user', color: 'blue' },
    { label: 'DPO Appointed', value: 'Yes', icon: 'mail', color: 'purple' },
    { label: 'EU Representative', value: 'Appointed', icon: 'globe', color: 'amber' },
  ];

  // Data subject rights
  const dataSubjectRights = config?.dataSubjectRights || [
    {
      title: "Right to Access",
      description: "You have the right to obtain confirmation from us whether we are processing your personal data, and where that is the case, access to that personal data.",
      articles: "Art. 15 GDPR",
      timeframe: "30 days",
      icon: "eye",
    },
    {
      title: "Right to Rectification",
      description: "You have the right to obtain from us the rectification of inaccurate personal data concerning you.",
      articles: "Art. 16 GDPR",
      timeframe: "Immediate",
      icon: "check",
    },
    {
      title: "Right to Erasure (Right to be Forgotten)",
      description: "You have the right to obtain from us the erasure of personal data concerning you without undue delay.",
      articles: "Art. 17 GDPR",
      timeframe: "30 days",
      icon: "x",
    },
    {
      title: "Right to Restriction of Processing",
      description: "You have the right to obtain from us restriction of processing of your personal data.",
      articles: "Art. 18 GDPR",
      timeframe: "15 days",
      icon: "clock",
    },
    {
      title: "Right to Data Portability",
      description: "You have the right to receive your personal data in a structured, commonly used, and machine-readable format.",
      articles: "Art. 20 GDPR",
      timeframe: "30 days",
      icon: "database",
    },
    {
      title: "Right to Object",
      description: "You have the right to object to processing of your personal data based on our legitimate interests.",
      articles: "Art. 21 GDPR",
      timeframe: "15 days",
      icon: "scale",
    },
    {
      title: "Right to Withdraw Consent",
      description: "You have the right to withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.",
      articles: "Art. 7(3) GDPR",
      timeframe: "Immediate",
      icon: "heart",
    },
    {
      title: "Right to Lodge a Complaint",
      description: "You have the right to lodge a complaint with a supervisory authority if you believe our processing infringes the GDPR.",
      articles: "Art. 77 GDPR",
      timeframe: "Anytime",
      icon: "mail",
    },
  ];

  // Legal bases for processing
  const legalBases = config?.legalBases || [
    {
      basis: "Consent",
      article: "Art. 6(1)(a) GDPR",
      description: "The data subject has given consent to the processing of their personal data for one or more specific purposes.",
      examples: ["Marketing communications", "Cookie preferences", "Optional profiling"],
    },
    {
      basis: "Contract",
      article: "Art. 6(1)(b) GDPR",
      description: "Processing is necessary for the performance of a contract to which the data subject is party.",
      examples: ["Account creation", "Service delivery", "Payment processing"],
    },
    {
      basis: "Legal Obligation",
      article: "Art. 6(1)(c) GDPR",
      description: "Processing is necessary for compliance with a legal obligation to which the controller is subject.",
      examples: ["Tax records", "Regulatory reporting", "Fraud prevention"],
    },
    {
      basis: "Vital Interests",
      article: "Art. 6(1)(d) GDPR",
      description: "Processing is necessary to protect the vital interests of the data subject or another natural person.",
      examples: ["Emergency situations", "Health emergencies"],
    },
    {
      basis: "Public Interest",
      article: "Art. 6(1)(e) GDPR",
      description: "Processing is necessary for the performance of a task carried out in the public interest.",
      examples: ["Public health", "Scientific research"],
    },
    {
      basis: "Legitimate Interests",
      article: "Art. 6(1)(f) GDPR",
      description: "Processing is necessary for the purposes of legitimate interests pursued by the controller.",
      examples: ["Security monitoring", "Fraud detection", "Direct marketing"],
    },
  ];

  // Security measures
  const securityMeasures = config?.securityMeasures || [
    { name: "Encryption", description: "256-bit AES encryption for data at rest, TLS 1.3 for data in transit", status: "Implemented" },
    { name: "Access Control", description: "Role-based access control with multi-factor authentication", status: "Implemented" },
    { name: "Pseudonymization", description: "Personal data is pseudonymized where possible", status: "Implemented" },
    { name: "Data Minimization", description: "We only collect data necessary for specified purposes", status: "Implemented" },
    { name: "Regular Audits", description: "Annual GDPR compliance audits by third-party experts", status: "Scheduled" },
    { name: "Staff Training", description: "Regular GDPR training for all employees handling personal data", status: "Ongoing" },
  ];

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      scale: <HiOutlineScale className={className} />,
      user: <HiOutlineUser className={className} />,
      'user-group': <HiOutlineUserGroup className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      heart: <HiOutlineHeart className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      bell: <HiOutlineBell className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      clock: <HiOutlineClock className={className} />,
      mail: <HiOutlineMail className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      database: <HiOutlineDatabase className={className} />,
      chip: <HiOutlineChip className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      x: <HiOutlineX className={className} />,
      eye: <HiOutlineEye className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      info: <HiOutlineInformationCircle className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
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
      aria-label="GDPR Compliance Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "GDPR Compliance"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "GDPR"} <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{config?.title?.highlight || "Compliance"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "SupplyChainPro is committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR). This page outlines our GDPR compliance framework and your rights as a data subject."}
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium"
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
                <HiOutlineShieldCheck className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Contents</h3>
              </div>
              <nav className="space-y-1 max-h-96 overflow-y-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${activeSection === section.id
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
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
                  <HiOutlineShieldCheck className="w-5 h-5 text-blue-600" />
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
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineDocumentText className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Introduction to GDPR</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect on May 25, 2018. It applies to all organizations that process the personal data of individuals residing in the European Union (EU), regardless of where the organization is located.
                  </p>
                  <p>
                    SupplyChainPro is fully committed to GDPR compliance. We have implemented technical and organizational measures to ensure that your personal data is processed in accordance with GDPR requirements.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Key GDPR Principles:</strong> Lawfulness, fairness, and transparency; purpose limitation; data minimization; accuracy; storage limitation; integrity and confidentiality; accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Controller Section */}
            <div id="data-controller" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineBuildingOffice className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Controller</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    For the purposes of the GDPR, SupplyChainPro acts as a Data Controller for the personal data we collect and process through our Services.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">{company.name}</p>
                    <p className="text-sm">{company.address}</p>
                    <p className="text-sm">
                      <strong>Email:</strong> <a href={`mailto:${company.email}`} className="text-blue-600 hover:underline">{company.email}</a>
                    </p>
                    <p className="text-sm"><strong>Phone:</strong> {company.phone}</p>
                  </div>
                  <p>
                    <strong>EU Representative:</strong> {company.representativeEU}
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Basis for Processing Section */}
            <div id="legal-basis" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineScale className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Legal Basis for Processing</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Under the GDPR, we must have a legal basis for processing your personal data. The table below outlines the legal bases we rely on:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 dark:bg-gray-900/50">
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Legal Basis</th>
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Article</th>
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Description</th>
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Examples</th>
                        </tr>
                      </thead>
                      <tbody>
                        {legalBases.map((basis, idx) => (
                          <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                            <td className="p-3 font-medium text-gray-900 dark:text-white">{basis.basis}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-400 text-xs">{basis.article}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-400 text-xs">{basis.description.substring(0, 80)}...</td>
                            <td className="p-3 text-gray-600 dark:text-gray-400 text-xs">
                              <div className="flex flex-wrap gap-1">
                                {basis.examples.slice(0, 2).map((ex, eIdx) => (
                                  <span key={eIdx} className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">{ex}</span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Subject Rights Section */}
            <div id="data-subject-rights" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineUser className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Subject Rights</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Under the GDPR, you have the following rights regarding your personal data:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {dataSubjectRights.map((right, idx) => (
                      <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-2">
                          {getIcon(right.icon, "w-5 h-5 text-blue-600")}
                          <h3 className="font-semibold text-gray-900 dark:text-white">{right.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{right.description.substring(0, 100)}...</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">{right.articles}</span>
                          <span className="text-blue-600">Response: {right.timeframe}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      To exercise any of these rights, please contact our Data Protection Officer at <strong>{company.dpoEmail}</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lawful Processing Conditions Section */}
            <div id="lawful-processing" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineCheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Lawful Processing Conditions</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    We ensure that all personal data processing activities meet at least one of the following lawful processing conditions under Article 6 of the GDPR:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Consent:</strong> You have given clear consent for us to process your data for a specific purpose.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Contract:</strong> Processing is necessary for a contract we have with you, or because you have asked us to take specific steps before entering into a contract.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Legal Obligation:</strong> Processing is necessary for us to comply with the law (not including contractual obligations).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Vital Interests:</strong> Processing is necessary to protect someone's life.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Public Task:</strong> Processing is necessary for us to perform a task in the public interest or for our official functions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests or the legitimate interests of a third party, unless there is a good reason to protect your personal data.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Consent Management Section */}
            <div id="consent-management" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineHeart className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Consent Management</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Where we rely on your consent as the legal basis for processing, we ensure that:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Consent is freely given, specific, informed, and unambiguous</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>We obtain consent through a clear affirmative action (opt-in)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>We keep records of consent to demonstrate compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>You can withdraw consent at any time, as easily as you gave it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>We do not make processing based on consent a precondition of service</span>
                    </li>
                  </ul>
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      You can manage your consent preferences at any time through your account settings or by contacting our DPO.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security Measures Section */}
            <div id="data-security" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Security Measures</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {securityMeasures.map((measure, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                        <HiOutlineShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{measure.name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{measure.description}</p>
                          <span className={`inline-block text-xs mt-1 px-2 py-0.5 rounded-full ${measure.status === 'Implemented' ? 'bg-green-100 text-green-700' : measure.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                            {measure.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Data Breach Procedures Section */}
            <div id="data-breach" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineBell className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Breach Procedures</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    In the event of a personal data breach, we have established procedures to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Assess the risk to data subjects' rights and freedoms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Notify the relevant supervisory authority within 72 hours (where required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Communicate the breach to affected data subjects without undue delay (where required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Document all breaches, including facts, effects, and remedial actions taken</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Implement measures to prevent future breaches</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* International Transfers Section */}
            <div id="international-transfers" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineGlobe className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">International Data Transfers</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    When we transfer personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place, including:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Standard Contractual Clauses (SCCs) adopted by the European Commission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Binding Corporate Rules (BCRs) for intra-group transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Transfers to countries with adequacy decisions from the European Commission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Explicit consent from data subjects for specific transfers</span>
                    </li>
                  </ul>
                  <p>
                    Our primary data processing infrastructure is located in the EU and United States, with appropriate safeguards in place for cross-border transfers.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Retention Policy Section */}
            <div id="data-retention" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineClock className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Retention Policy</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Account Data:</strong> Retained for the duration of your account plus 30 days after deletion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Transaction Data:</strong> Retained for 7 years to comply with tax and legal obligations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Marketing Data:</strong> Retained until consent is withdrawn or 2 years of inactivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Support Communications:</strong> Retained for 3 years to maintain service quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Usage Analytics:</strong> Anonymized after 26 months</span>
                    </li>
                  </ul>
                  <p>
                    After the retention period expires, personal data is securely deleted or anonymized.
                  </p>
                </div>
              </div>
            </div>

            {/* DPO Information Section */}
            <div id="dpo-information" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Protection Officer (DPO)</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    We have appointed a Data Protection Officer (DPO) who is responsible for overseeing our GDPR compliance efforts.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">{company.dpoName}</p>
                    <p className="text-sm">
                      <strong>Email:</strong> <a href={`mailto:${company.dpoEmail}`} className="text-blue-600 hover:underline">{company.dpoEmail}</a>
                    </p>
                    <p className="text-sm">
                      <strong>Address:</strong> {company.address}
                    </p>
                  </div>
                  <p>
                    You may contact our DPO with any questions or concerns regarding our data protection practices or to exercise your data subject rights.
                  </p>
                </div>
              </div>
            </div>

            {/* Supervisory Authority Section */}
            <div id="supervisory-authority" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineScale className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Supervisory Authority</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    You have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal data infringes the GDPR. Our lead supervisory authority is:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 dark:text-white">Data Protection Commission (DPC) - Ireland</p>
                    <p className="text-sm">21 Fitzwilliam Square South</p>
                    <p className="text-sm">Dublin 2, D02 RD28</p>
                    <p className="text-sm">Ireland</p>
                    <p className="text-sm mt-2">
                      <strong>Website:</strong> <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.dataprotection.ie</a>
                    </p>
                  </div>
                  <p>
                    As our EU representative is based in Ireland, the DPC is our lead supervisory authority. However, you may also lodge complaints with your local supervisory authority.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance Certifications Section */}
            <div id="compliance-certifications" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Compliance Certifications</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We maintain the following certifications and attestations to demonstrate our commitment to data protection:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">SOC 2 Type II</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">ISO 27001</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">GDPR Certified</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">Privacy Shield (US-EU Data Framework)</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Our compliance certifications are audited annually by independent third-party firms. Copies of our certifications are available upon request.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Us Section */}
            <div id="contact-us" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                </div>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <p>
                    If you have any questions about our GDPR compliance or data protection practices, please contact us:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">{company.name}</p>
                    <p className="text-sm">{company.address}</p>
                    <p className="text-sm">
                      <strong>GDPR Queries Email:</strong> <a href={`mailto:${company.email}`} className="text-blue-600 hover:underline">{company.email}</a>
                    </p>
                    <p className="text-sm">
                      <strong>DPO Email:</strong> <a href={`mailto:${company.dpoEmail}`} className="text-blue-600 hover:underline">{company.dpoEmail}</a>
                    </p>
                    <p className="text-sm"><strong>Phone:</strong> {company.phone}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    We aim to respond to all GDPR-related inquiries within 30 days.
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
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Download GDPR Compliance Documentation</h3>
                  <button onClick={() => setShowPrintModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <HiOutlineDocumentDuplicate className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Choose your preferred format to download our GDPR compliance documentation.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
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

export default GDPRComplianceSection1;