// page/frontend/Legal/DataProcessingAgreementSection/DataProcessingAgreementSection1.jsx

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
import { HiOutlineUserGroup, HiOutlineDocumentDuplicate, HiOutlineBell } from 'react-icons/hi2';

const DataProcessingAgreementSection1 = ({ config }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSection, setExpandedSection] = useState(null);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Navigation sections
  const sections = config?.sections || [
    { id: 'introduction', label: 'Introduction', icon: 'document' },
    { id: 'definitions', label: 'Definitions', icon: 'info' },
    { id: 'scope-application', label: 'Scope & Application', icon: 'globe' },
    { id: 'obligations-processor', label: 'Processor Obligations', icon: 'shield' },
    { id: 'obligations-controller', label: 'Controller Obligations', icon: 'user' },
    { id: 'subProcessing', label: 'SubProcessing', icon: 'chip' },
    { id: 'data-subject-rights', label: 'Data Subject Rights', icon: 'user-group' },
    { id: 'security-measures', label: 'Security Measures', icon: 'lock' },
    { id: 'data-breach', label: 'Data Breach Notification', icon: 'bell' },
    { id: 'international-transfers', label: 'International Transfers', icon: 'globe' },
    { id: 'audit-rights', label: 'Audit Rights', icon: 'eye' },
    { id: 'data-deletion', label: 'Data Deletion & Return', icon: 'refresh' },
    { id: 'term-termination', label: 'Term & Termination', icon: 'clock' },
    { id: 'liability', label: 'Liability', icon: 'scale' },
    { id: 'governing-law', label: 'Governing Law', icon: 'scale' },
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
  };

  // Definitions
  const definitions = config?.definitions || [
    {
      term: "Agreement",
      definition: "This Data Processing Agreement including all schedules, annexes, and appendices attached hereto."
    },
    {
      term: "Controller",
      definition: "The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data."
    },
    {
      term: "Processor",
      definition: "A natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller."
    },
    {
      term: "Data Subject",
      definition: "An identified or identifiable natural person whose personal data is processed."
    },
    {
      term: "Personal Data",
      definition: "Any information relating to an identified or identifiable natural person ('data subject')."
    },
    {
      term: "Processing",
      definition: "Any operation or set of operations performed on personal data, whether by automated means."
    },
    {
      term: "SubProcessor",
      definition: "Any processor engaged by the Processor to assist in fulfilling its obligations under this Agreement."
    },
    {
      term: "Security Incident",
      definition: "A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data."
    },
  ];

  // Processor obligations
  const processorObligations = config?.processorObligations || [
    "Process personal data only on documented instructions from the Controller",
    "Ensure that persons authorized to process personal data have committed themselves to confidentiality",
    "Implement appropriate technical and organizational security measures",
    "Assist the Controller in responding to data subject requests",
    "Notify the Controller without undue delay after becoming aware of a personal data breach",
    "Delete or return all personal data to the Controller after the end of the provision of services",
    "Make available to the Controller all information necessary to demonstrate compliance",
  ];

  // Authorized subProcessors
  const authorizedSubProcessors = config?.authorizedSubProcessors || [
    {
      name: "Amazon Web Services (AWS)",
      location: "US, EU, APAC",
      services: "Cloud hosting and infrastructure",
      securityCertifications: "SOC 1, SOC 2, ISO 27001, PCI DSS",
    },
    {
      name: "Google Cloud Platform (GCP)",
      location: "US, EU",
      services: "Cloud hosting, data analytics",
      securityCertifications: "SOC 2, ISO 27001, ISO 27701",
    },
    {
      name: "Stripe",
      location: "US, EU",
      services: "Payment processing",
      securityCertifications: "SOC 1, SOC 2, PCI DSS Level 1",
    },
    {
      name: "Intercom",
      location: "US, EU",
      services: "Customer support and messaging",
      securityCertifications: "SOC 2, ISO 27001, GDPR compliant",
    },
    {
      name: "Mixpanel",
      location: "US",
      services: "Product analytics",
      securityCertifications: "SOC 2, ISO 27001, Privacy Shield",
    },
  ];

  // Technical and organizational security measures
  const securityMeasures = config?.securityMeasures || [
    {
      category: "Access Control",
      measures: [
        "Role-based access control (RBAC)",
        "Multi-factor authentication (MFA)",
        "Principle of least privilege",
        "Regular access reviews",
        "Password complexity requirements"
      ]
    },
    {
      category: "Data Protection",
      measures: [
        "256-bit AES encryption at rest",
        "TLS 1.3 encryption in transit",
        "Data pseudonymization where possible",
        "Regular backup and recovery testing"
      ]
    },
    {
      category: "Network Security",
      measures: [
        "Firewall and intrusion detection systems",
        "DDoS protection",
        "Regular vulnerability scanning",
        "Penetration testing (quarterly)"
      ]
    },
    {
      category: "Organizational Measures",
      measures: [
        "GDPR and security training for all employees",
        "Confidentiality agreements",
        "Incident response plan",
        "Regular compliance audits"
      ]
    },
  ];

  // Quick facts
  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'calendar', color: 'blue' },
    { label: 'SubProcessors', value: '5+', icon: 'chip', color: 'green' },
    { label: 'Security Certifications', value: 'SOC 2, ISO 27001', icon: 'shield', color: 'purple' },
    { label: 'Data Locations', value: 'US, EU, APAC', icon: 'globe', color: 'amber' },
  ];

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
      aria-label="Data Processing Agreement Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-indigo-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-indigo-100 dark:border-gray-700">
            <HiOutlineShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              {config?.badge || "Data Processing Agreement"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Data Processing"} <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Agreement"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "This Data Processing Agreement (DPA) reflects the parties' agreement with respect to the processing of personal data under the General Data Protection Regulation (GDPR)."}
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors text-sm font-medium"
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
                <HiOutlineDocumentText className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Contents</h3>
              </div>
              <nav className="space-y-1 max-h-96 overflow-y-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${activeSection === section.id
                      ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium'
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
                  <HiOutlineDocumentText className="w-5 h-5 text-indigo-600" />
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
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineDocumentText className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Introduction</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    This Data Processing Agreement ("DPA") is incorporated into and forms part of the Terms of Service between SupplyChainPro Inc. ("Processor") and the Customer ("Controller").
                  </p>
                  <p>
                    This DPA reflects the parties' agreement with respect to the processing of personal data under the General Data Protection Regulation (GDPR) and applicable data protection laws.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800">
                    <p className="text-sm text-indigo-800 dark:text-indigo-300">
                      <strong>Purpose:</strong> This DPA sets out the rights and obligations of the Controller and Processor regarding the processing of personal data in connection with the provision of SupplyChainPro's services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Definitions Section */}
            <div id="definitions" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineInformationCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Definitions</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Capitalized terms not defined herein shall have the meaning ascribed to them in the Terms of Service. The following terms shall have the meanings set out below:
                  </p>
                  <div className="space-y-3">
                    {definitions.map((def, idx) => (
                      <div key={idx} className="border-b border-gray-100 dark:border-gray-700 pb-3 last:border-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{def.term}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{def.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scope & Application Section */}
            <div id="scope-application" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineGlobe className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Scope & Application</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    This DPA applies to the processing of personal data by the Processor on behalf of the Controller in connection with the provision of the Services.
                  </p>
                  <p>
                    The subject-matter, duration, nature, and purpose of the processing, as well as the types of personal data and categories of data subjects, are specified in this DPA.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                      <p className="font-semibold text-gray-900 dark:text-white">Categories of Data Subjects</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Customers, employees, suppliers, and other individuals whose personal data is processed in connection with the Services.</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                      <p className="font-semibold text-gray-900 dark:text-white">Types of Personal Data</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Contact information, account credentials, transaction data, usage data, and any other data provided by the Controller.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Processor Obligations Section */}
            <div id="obligations-processor" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineShieldCheck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Processor Obligations</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    The Processor shall:
                  </p>
                  <ul className="space-y-2 ml-4">
                    {processorObligations.map((obligation, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{obligation}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg mt-4">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      The Processor shall not process personal data for any purpose other than providing the Services as instructed by the Controller.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controller Obligations Section */}
            <div id="obligations-controller" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineUser className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Controller Obligations</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    The Controller shall:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Have sole responsibility for the accuracy, quality, and legality of personal data processed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Ensure it has obtained all necessary consents and provided all required notices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Respond to data subject requests and provide necessary assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Comply with all applicable data protection laws and regulations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SubProcessing Section */}
            <div id="subProcessing" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineChip className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">SubProcessing</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    The Controller grants general authorization for the Processor to engage subProcessors. The Processor shall:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Notify the Controller of any intended changes concerning the addition or replacement of subProcessors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Impose data protection obligations on subProcessors by written contract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Remain fully liable to the Controller for the performance of subProcessors</span>
                    </li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 dark:text-white mt-4">Authorized SubProcessors</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 dark:bg-gray-900/50">
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Name</th>
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Location</th>
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Services</th>
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Certifications</th>
                        </tr>
                      </thead>
                      <tbody>
                        {authorizedSubProcessors.map((sub, idx) => (
                          <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                            <td className="p-3 font-medium text-gray-900 dark:text-white">{sub.name}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-400">{sub.location}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-400">{sub.services}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-400 text-xs">{sub.securityCertifications}</td>
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
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineUserGroup className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Subject Rights</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    The Processor shall assist the Controller in fulfilling its obligations to respond to data subject requests under the GDPR, including:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Right to access personal data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Right to rectification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Right to erasure ("right to be forgotten")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Right to restriction of processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Right to data portability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Right to object to processing</span>
                    </li>
                  </ul>
                  <p>
                    The Processor shall notify the Controller immediately if it receives a request from a data subject.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Measures Section */}
            <div id="security-measures" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineLockClosed className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technical & Organizational Security Measures</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    The Processor implements and maintains appropriate technical and organizational security measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure or access.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {securityMeasures.map((category, idx) => (
                      <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category.category}</h3>
                        <ul className="space-y-1">
                          {category.measures.map((measure, mIdx) => (
                            <li key={mIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                              <span>{measure}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Data Breach Notification Section */}
            <div id="data-breach" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineBell className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Breach Notification</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    In the event of a personal data breach, the Processor shall:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Notify the Controller without undue delay (within 24 hours of becoming aware)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Provide all available information about the breach, including nature, categories of data affected, and mitigation measures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Cooperate with the Controller's investigation and remediation efforts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Document all breaches, including facts, effects, and remedial actions taken</span>
                    </li>
                  </ul>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <p className="text-sm text-red-800 dark:text-red-300">
                      The Processor shall not inform any third party about a personal data breach without the Controller's prior written consent.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* International Transfers Section */}
            <div id="international-transfers" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineGlobe className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">International Data Transfers</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    The Processor may transfer personal data to countries outside the European Economic Area (EEA) only if appropriate safeguards are in place, including:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Standard Contractual Clauses (SCCs) adopted by the European Commission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Binding Corporate Rules (BCRs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Adequacy decisions by the European Commission</span>
                    </li>
                  </ul>
                  <p>
                    The Processor's current subProcessors are located in the US and EU. All cross-border transfers are protected by Standard Contractual Clauses.
                  </p>
                </div>
              </div>
            </div>

            {/* Audit Rights Section */}
            <div id="audit-rights" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineEye className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Audit Rights</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    The Controller has the right to audit the Processor's compliance with this DPA. The Processor shall:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Provide reasonable assistance and access to relevant documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Make available information necessary to demonstrate compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Allow for audits conducted by the Controller or an independent auditor</span>
                    </li>
                  </ul>
                  <p>
                    Audits shall be conducted during normal business hours, with reasonable notice (at least 30 days), and not more than once per year unless required by a supervisory authority.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Deletion & Return Section */}
            <div id="data-deletion" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineRefresh className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Deletion & Return</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Upon termination of the Services or at the Controller's request, the Processor shall:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Return all personal data to the Controller in a structured, commonly used format</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Delete all copies of personal data from its systems within 90 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Provide written certification of deletion upon request</span>
                    </li>
                  </ul>
                  <p>
                    The Processor may retain personal data to the extent required by applicable law (e.g., for tax or fraud prevention purposes).
                  </p>
                </div>
              </div>
            </div>

            {/* Term & Termination Section */}
            <div id="term-termination" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineClock className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Term & Termination</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    This DPA shall remain in effect for as long as the Processor processes personal data on behalf of the Controller.
                  </p>
                  <p>
                    Either party may terminate this DPA upon 30 days' written notice if the other party materially breaches its obligations under this DPA and fails to cure such breach within 30 days of receiving notice.
                  </p>
                  <p>
                    Upon termination, the provisions of this DPA relating to data return, deletion, confidentiality, and liability shall survive.
                  </p>
                </div>
              </div>
            </div>

            {/* Liability Section */}
            <div id="liability" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineScale className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Liability</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Each party shall be liable for damages caused by its violation of the GDPR. The Processor's total liability under this DPA shall be limited as set forth in the Terms of Service.
                  </p>
                  <p>
                    The Processor shall indemnify the Controller for any fines, penalties, or damages imposed by a supervisory authority resulting from the Processor's breach of this DPA or the GDPR.
                  </p>
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      The Processor is not liable for damages caused by the Controller's instructions that violate data protection laws.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Law Section */}
            <div id="governing-law" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineScale className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Governing Law</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    This DPA shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Any disputes arising from this DPA shall be resolved in accordance with the dispute resolution provisions set forth in the Terms of Service.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Us Section */}
            <div id="contact-us" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                </div>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <p>
                    If you have any questions about this Data Processing Agreement, please contact us:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">{company.name}</p>
                    <p className="text-sm">{company.address}</p>
                    <p className="text-sm">
                      <strong>Privacy Inquiries:</strong> <a href={`mailto:${company.email}`} className="text-indigo-600 hover:underline">{company.email}</a>
                    </p>
                    <p className="text-sm">
                      <strong>DPO Email:</strong> <a href={`mailto:${company.dpoEmail}`} className="text-indigo-600 hover:underline">{company.dpoEmail}</a>
                    </p>
                    <p className="text-sm"><strong>Phone:</strong> {company.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Print/Download Modal */}
        {showPrintModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowPrintModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-indigo-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Download Data Processing Agreement</h3>
                  <button onClick={() => setShowPrintModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <HiOutlineDocumentDuplicate className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Choose your preferred format to download the complete Data Processing Agreement.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
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

export default DataProcessingAgreementSection1;