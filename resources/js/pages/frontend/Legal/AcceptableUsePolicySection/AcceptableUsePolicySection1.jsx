// page/frontend/MobileApp/Legal/AcceptableUsePolicySection/AcceptableUsePolicySection1.jsx

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
  HiOutlineFlag,
  HiOutlineBan,
  HiOutlineExclamation,
} from 'react-icons/hi';
import { HiOutlineUserGroup, HiOutlineDocumentDuplicate } from 'react-icons/hi2';

const AcceptableUsePolicySection1 = ({ config }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSection, setExpandedSection] = useState(null);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Navigation sections
  const sections = config?.sections || [
    { id: 'introduction', label: 'Introduction', icon: 'document' },
    { id: 'purpose-scope', label: 'Purpose & Scope', icon: 'globe' },
    { id: 'acceptable-use', label: 'Acceptable Use', icon: 'check' },
    { id: 'prohibited-activities', label: 'Prohibited Activities', icon: 'ban' },
    { id: 'content-standards', label: 'Content Standards', icon: 'document' },
    { id: 'system-security', label: 'System Security', icon: 'shield' },
    { id: 'data-protection', label: 'Data Protection', icon: 'database' },
    { id: 'intellectual-property', label: 'Intellectual Property', icon: 'scale' },
    { id: 'reporting-violations', label: 'Reporting Violations', icon: 'flag' },
    { id: 'enforcement', label: 'Enforcement', icon: 'exclamation' },
    { id: 'consequences', label: 'Consequences of Violation', icon: 'x' },
    { id: 'policy-updates', label: 'Policy Updates', icon: 'clock' },
    { id: 'contact-us', label: 'Contact Us', icon: 'mail' },
  ];

  // Company information
  const company = config?.company || {
    name: "SupplyChainPro Inc.",
    address: "123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105",
    email: "abuse@supplychainpro.com",
    phone: "+1 (800) 555-0123",
  };

  // Quick facts
  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'calendar', color: 'red' },
    { label: 'Prohibited Activities', value: '15+', icon: 'ban', color: 'orange' },
    { label: 'Content Standards', value: 'Strict', icon: 'document', color: 'blue' },
    { label: 'Report Response', value: '24 hours', icon: 'clock', color: 'green' },
  ];

  // Acceptable use guidelines
  const acceptableUse = config?.acceptableUse || [
    "Use the Services for legitimate supply chain management purposes",
    "Provide accurate and complete information when creating accounts",
    "Maintain the security and confidentiality of your account credentials",
    "Use the Services in compliance with all applicable laws and regulations",
    "Respect the intellectual property rights of SupplyChainPro and third parties",
    "Use the Services in a manner that does not disrupt or interfere with other users",
    "Report any security vulnerabilities or suspected abuse to our abuse team",
  ];

  // Prohibited activities categories
  const prohibitedActivities = config?.prohibitedActivities || [
    {
      category: "Illegal Activities",
      icon: "scale",
      activities: [
        "Violating any applicable laws, regulations, or third-party rights",
        "Engaging in fraudulent, deceptive, or misleading activities",
        "Processing illegal or prohibited goods or services",
        "Money laundering or terrorist financing",
        "Export control violations",
      ],
    },
    {
      category: "System Abuse",
      icon: "shield",
      activities: [
        "Attempting to gain unauthorized access to our systems",
        "Distributing malware, viruses, or other harmful code",
        "Launching denial-of-service (DoS) attacks",
        "Scanning or probing system vulnerabilities",
        "Bypassing security measures or access controls",
      ],
    },
    {
      category: "Content Violations",
      icon: "document",
      activities: [
        "Uploading illegal, obscene, or defamatory content",
        "Sharing infringing or unauthorized copyrighted material",
        "Posting hate speech or discriminatory content",
        "Harassing, threatening, or abusing others",
        "Impersonating any person or entity",
      ],
    },
    {
      category: "Resource Misuse",
      icon: "database",
      activities: [
        "Exceeding reasonable API rate limits",
        "Using the Services for cryptocurrency mining",
        "Engaging in web scraping without authorization",
        "Storing excessive amounts of non-business data",
        "Using the Services for competitive analysis",
      ],
    },
    {
      category: "Data Misuse",
      icon: "database",
      activities: [
        "Accessing data without proper authorization",
        "Sharing account credentials with unauthorized parties",
        "Exporting data in violation of export controls",
        "Processing sensitive data without proper safeguards",
        "Using data for purposes not authorized by the data owner",
      ],
    },
    {
      category: "Interference",
      icon: "globe",
      activities: [
        "Interfering with other users' use of the Services",
        "Disrupting or impairing Service functionality",
        "Circumventing usage limits or restrictions",
        "Reselling or redistributing Services without authorization",
        "Creating multiple accounts to bypass restrictions",
      ],
    },
  ];

  // Content standards
  const contentStandards = config?.contentStandards || [
    "Content must be accurate, truthful, and not misleading",
    "Content must comply with all applicable laws and regulations",
    "Content must not infringe on any third-party rights",
    "Content must not contain malware, viruses, or harmful code",
    "Content must not be defamatory, obscene, or offensive",
    "Content must not promote violence, discrimination, or illegal activities",
    "Content must respect the privacy and confidentiality of others",
  ];

  // Enforcement actions
  const enforcementActions = config?.enforcementActions || [
    { level: "Warning", description: "Written notice of violation with request for corrective action", timeframe: "Immediate" },
    { level: "Temporary Suspension", description: "Limited access to certain features pending investigation", timeframe: "24-72 hours" },
    { level: "Full Suspension", description: "Complete account suspension pending resolution", timeframe: "Within 24 hours" },
    { level: "Termination", description: "Permanent account termination for severe or repeated violations", timeframe: "Immediate" },
    { level: "Legal Action", description: "Referral to law enforcement for criminal violations", timeframe: "As appropriate" },
  ];

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      ban: <HiOutlineBan className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      database: <HiOutlineDatabase className={className} />,
      scale: <HiOutlineScale className={className} />,
      flag: <HiOutlineFlag className={className} />,
      exclamation: <HiOutlineExclamation className={className} />,
      x: <HiOutlineX className={className} />,
      clock: <HiOutlineClock className={className} />,
      mail: <HiOutlineMail className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      user: <HiOutlineUser className={className} />,
      'user-group': <HiOutlineUserGroup className={className} />,
      chip: <HiOutlineChip className={className} />,
      eye: <HiOutlineEye className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      heart: <HiOutlineHeart className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
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
      aria-label="Acceptable Use Policy Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-orange-200 dark:bg-orange-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-red-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-red-100 dark:border-gray-700">
            <HiOutlineShieldCheck className="w-4 h-4 text-red-600 dark:text-red-400 mr-2" />
            <span className="text-sm font-medium text-red-700 dark:text-red-300">
              {config?.badge || "Acceptable Use Policy"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Acceptable"} <span className="bg-linear-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">{config?.title?.highlight || "Use Policy"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "This Acceptable Use Policy (AUP) outlines the rules and guidelines for using SupplyChainPro's Services. By using our Services, you agree to comply with this policy."}
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-sm font-medium"
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
                <HiOutlineDocumentText className="w-5 h-5 text-red-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Contents</h3>
              </div>
              <nav className="space-y-1 max-h-96 overflow-y-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${activeSection === section.id
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 font-medium'
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
                  <HiOutlineDocumentText className="w-5 h-5 text-red-600" />
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
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineDocumentText className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Introduction</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    This Acceptable Use Policy ("AUP") governs your use of SupplyChainPro's Services. It is designed to ensure a safe, secure, and reliable environment for all users.
                  </p>
                  <p>
                    By accessing or using our Services, you agree to comply with this AUP. Violation of this policy may result in suspension or termination of your access to our Services.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-800">
                    <p className="text-sm text-red-800 dark:text-red-300">
                      <strong>Important:</strong> This AUP is incorporated into our Terms of Service. Any violation constitutes a breach of the Terms of Service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Purpose & Scope Section */}
            <div id="purpose-scope" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineGlobe className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Purpose & Scope</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    This AUP applies to all users of SupplyChainPro's Services, including but not limited to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Customers and account holders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>End users accessing our Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>API users and developers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Any other party accessing our Services</span>
                    </li>
                  </ul>
                  <p>
                    The purpose of this AUP is to protect our Services, our users, and the integrity of the supply chain ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* Acceptable Use Section */}
            <div id="acceptable-use" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineCheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Acceptable Use</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    You agree to use our Services in a responsible manner. Acceptable use includes:
                  </p>
                  <ul className="space-y-2 ml-4">
                    {acceptableUse.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Prohibited Activities Section */}
            <div id="prohibited-activities" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineBan className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Prohibited Activities</h2>
                </div>
                <div className="space-y-6">
                  {prohibitedActivities.map((category, idx) => (
                    <div key={idx} className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0">
                      <div className="flex items-center gap-2 mb-3">
                        {getIcon(category.icon, "w-5 h-5 text-red-600")}
                        <h3 className="font-semibold text-gray-900 dark:text-white">{category.category}</h3>
                      </div>
                      <ul className="space-y-2 ml-4">
                        {category.activities.map((activity, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Standards Section */}
            <div id="content-standards" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineDocumentText className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Content Standards</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Any content you upload, post, or transmit through our Services must comply with the following standards:
                  </p>
                  <ul className="space-y-2 ml-4">
                    {contentStandards.map((standard, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{standard}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg mt-4">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      We reserve the right to remove any content that violates these standards without prior notice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* System Security Section */}
            <div id="system-security" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineShieldCheck className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">System Security</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    You may not compromise the security or integrity of our Services. Prohibited security-related activities include:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Attempting to bypass or disable security features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Probing, scanning, or testing system vulnerabilities without authorization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Using any device, software, or routine to interfere with proper functioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Attempting to gain unauthorized access to other user accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Introducing malware, viruses, or other harmful code</span>
                    </li>
                  </ul>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg mt-2">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      <strong>Responsible Disclosure:</strong> If you discover a security vulnerability, please report it to security@supplychainpro.com.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Protection Section */}
            <div id="data-protection" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineDatabase className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Protection</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    You are responsible for protecting the data you process through our Services. You agree to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Comply with all applicable data protection laws (GDPR, CCPA, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Implement appropriate security measures for your data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Not process sensitive data without proper safeguards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Obtain necessary consents for data processing activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intellectual Property Section */}
            <div id="intellectual-property" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineScale className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Intellectual Property</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    You agree to respect the intellectual property rights of SupplyChainPro and third parties:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Do not copy, modify, or distribute our software without permission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Do not remove any copyright or trademark notices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Do not use our trademarks without prior written consent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Do not reverse engineer or decompile our software</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reporting Violations Section */}
            <div id="reporting-violations" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineFlag className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reporting Violations</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    If you become aware of any violation of this AUP, please report it to us immediately:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">Report Abuse To:</p>
                    <p className="text-sm">
                      <strong>Email:</strong> <a href={`mailto:${company.email}`} className="text-red-600 hover:underline">{company.email}</a>
                    </p>
                    <p className="text-sm"><strong>Phone:</strong> {company.phone}</p>
                    <p className="text-xs text-gray-500 mt-2">Please include relevant details such as usernames, timestamps, and evidence.</p>
                  </div>
                  <p>
                    We will investigate all reported violations and take appropriate action. We may contact you for additional information.
                  </p>
                </div>
              </div>
            </div>

            {/* Enforcement Section */}
            <div id="enforcement" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineExclamation className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Enforcement</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We reserve the right to enforce this AUP through the following actions:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 dark:bg-gray-900/50">
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Action Level</th>
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Description</th>
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Timeframe</th>
                        </tr>
                      </thead>
                      <tbody>
                        {enforcementActions.map((action, idx) => (
                          <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                            <td className="p-3 font-medium text-gray-900 dark:text-white">{action.level}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-400">{action.description}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-400">{action.timeframe}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Consequences Section */}
            <div id="consequences" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineX className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Consequences of Violation</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Violation of this AUP may result in, without limitation:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Issuance of a warning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Temporary or permanent suspension of your account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Termination of your access to our Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Legal action and referral to law enforcement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Liability for damages and costs incurred</span>
                    </li>
                  </ul>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <p className="text-sm text-red-800 dark:text-red-300">
                      We reserve the right to investigate suspected violations and cooperate with law enforcement authorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates Section */}
            <div id="policy-updates" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineClock className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Policy Updates</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    We may update this Acceptable Use Policy from time to time. We will notify you of material changes by:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Posting the updated policy on our website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Sending an email to registered users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Displaying an in-app notification</span>
                    </li>
                  </ul>
                  <p>
                    Your continued use of our Services after the effective date constitutes your acceptance of the updated policy.
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Current Version:</strong> {lastUpdated}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Us Section */}
            <div id="contact-us" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                </div>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <p>
                    If you have any questions about this Acceptable Use Policy or need to report a violation, please contact us:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">{company.name}</p>
                    <p className="text-sm">{company.address}</p>
                    <p className="text-sm">
                      <strong>Abuse Reporting Email:</strong> <a href={`mailto:${company.email}`} className="text-red-600 hover:underline">{company.email}</a>
                    </p>
                    <p className="text-sm"><strong>Phone:</strong> {company.phone}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    We aim to respond to all abuse reports within 24 hours.
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
              <div className="bg-red-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Download Acceptable Use Policy</h3>
                  <button onClick={() => setShowPrintModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <HiOutlineDocumentDuplicate className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Choose your preferred format to download the complete Acceptable Use Policy.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
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

export default AcceptableUsePolicySection1;