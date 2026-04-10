// page/frontend/MobileApp/Legal/AcceptableUsePolicySection/AcceptableUsePolicySection2.jsx

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
  HiOutlineViewGrid,
  HiOutlineBell,
  HiOutlineFlag,
  HiOutlineBan,
  HiOutlineExclamation,
} from 'react-icons/hi';
import { HiOutlineUserGroup, HiOutlineDocumentDuplicate, HiOutlineArrowRight } from 'react-icons/hi2';
import { MdOutlineWarning as HiOutlineWarning, } from "react-icons/md";

const AcceptableUsePolicySection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('policy');
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [reportType, setReportType] = useState('');
  const [reportDescription, setReportDescription] = useState('');
  const [reportEmail, setReportEmail] = useState('');
  const [reportErrors, setReportErrors] = useState({});
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Tabs configuration
  const tabs = [
    { id: 'policy', label: 'AUP', icon: 'document' },
    { id: 'summary', label: 'Quick Summary', icon: 'view-grid' },
    { id: 'prohibited', label: 'Prohibited Activities', icon: 'ban' },
    { id: 'report', label: 'Report Violation', icon: 'flag' },
    { id: 'faq', label: 'FAQ', icon: 'chat' },
  ];

  // Quick facts
  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'calendar', color: 'red', trend: 'Version 2.0' },
    { label: 'Prohibited Categories', value: '6', icon: 'ban', color: 'orange', trend: '15+ activities' },
    { label: 'Content Standards', value: '7', icon: 'document', color: 'blue', trend: 'Strict enforcement' },
    { label: 'Report Response', value: '24 hours', icon: 'clock', color: 'green', trend: 'SLA guaranteed' },
    { label: 'Enforcement Levels', value: '5', icon: 'exclamation', color: 'purple', trend: 'Escalating' },
    { label: 'User Violations', value: '0.01%', icon: 'shield', color: 'teal', trend: 'Low violation rate' },
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
    "Cooperate with our investigation of any suspected violation",
  ];

  // Prohibited activities categories with detailed information
  const prohibitedCategories = useMemo(() => config?.prohibitedCategories || [
    {
      id: 'illegal',
      category: "Illegal Activities",
      icon: "scale",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      activities: [
        "Violating any applicable laws, regulations, or third-party rights",
        "Engaging in fraudulent, deceptive, or misleading activities",
        "Processing illegal or prohibited goods or services",
        "Money laundering or terrorist financing",
        "Export control violations",
        "Tax evasion or fraud",
      ],
      severity: "Critical",
    },
    {
      id: 'security',
      category: "System Abuse",
      icon: "shield",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      activities: [
        "Attempting to gain unauthorized access to our systems",
        "Distributing malware, viruses, or other harmful code",
        "Launching denial-of-service (DoS) attacks",
        "Scanning or probing system vulnerabilities",
        "Bypassing security measures or access controls",
        "Reverse engineering our software",
      ],
      severity: "Critical",
    },
    {
      id: 'content',
      category: "Content Violations",
      icon: "document",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      activities: [
        "Uploading illegal, obscene, or defamatory content",
        "Sharing infringing or unauthorized copyrighted material",
        "Posting hate speech or discriminatory content",
        "Harassing, threatening, or abusing others",
        "Impersonating any person or entity",
        "Posting misleading or false information",
      ],
      severity: "High",
    },
    {
      id: 'resources',
      category: "Resource Misuse",
      icon: "database",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      activities: [
        "Exceeding reasonable API rate limits",
        "Using the Services for cryptocurrency mining",
        "Engaging in web scraping without authorization",
        "Storing excessive amounts of non-business data",
        "Using the Services for competitive analysis",
        "Automated account creation",
      ],
      severity: "Medium",
    },
    {
      id: 'data',
      category: "Data Misuse",
      icon: "database",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      activities: [
        "Accessing data without proper authorization",
        "Sharing account credentials with unauthorized parties",
        "Exporting data in violation of export controls",
        "Processing sensitive data without proper safeguards",
        "Using data for purposes not authorized by the data owner",
        "Selling or renting access to your account",
      ],
      severity: "High",
    },
    {
      id: 'interference',
      category: "Service Interference",
      icon: "globe",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      activities: [
        "Interfering with other users' use of the Services",
        "Disrupting or impairing Service functionality",
        "Circumventing usage limits or restrictions",
        "Reselling or redistributing Services without authorization",
        "Creating multiple accounts to bypass restrictions",
        "Using automated means to access Services",
      ],
      severity: "Medium",
    },
  ], [config?.prohibitedCategories]);

  // Enforcement actions
  const enforcementActions = config?.enforcementActions || [
    {
      level: "Warning",
      description: "Written notice of violation with request for corrective action",
      timeframe: "Immediate",
      icon: "warning",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      level: "Temporary Suspension",
      description: "Limited access to certain features pending investigation",
      timeframe: "24-72 hours",
      icon: "clock",
      color: "from-orange-500 to-orange-600",
    },
    {
      level: "Full Suspension",
      description: "Complete account suspension pending resolution",
      timeframe: "Within 24 hours",
      icon: "x",
      color: "from-red-500 to-red-600",
    },
    {
      level: "Termination",
      description: "Permanent account termination for severe or repeated violations",
      timeframe: "Immediate",
      icon: "ban",
      color: "from-red-700 to-red-800",
    },
    {
      level: "Legal Action",
      description: "Referral to law enforcement for criminal violations",
      timeframe: "As appropriate",
      icon: "scale",
      color: "from-purple-500 to-purple-600",
    },
  ];

  // FAQ data
  const faqs = config?.faqs || [
    {
      question: 'What happens if I accidentally violate the AUP?',
      answer: 'We understand that mistakes can happen. If you accidentally violate the AUP, please contact us immediately at abuse@supplychainpro.com. We will work with you to resolve the issue and may issue a warning instead of suspension for first-time, non-malicious violations.'
    },
    {
      question: 'Can I appeal an enforcement action?',
      answer: 'Yes, you can appeal enforcement actions by contacting our abuse team at abuse@supplychainpro.com. Please provide your account information, details of the action taken, and your explanation. We will review all appeals within 5 business days.'
    },
    {
      question: 'How do I report someone else violating the AUP?',
      answer: 'Use the Report Violation tab on this page or email abuse@supplychainpro.com with details including the violator\'s username, description of the violation, timestamps, and any supporting evidence (screenshots, logs).'
    },
    {
      question: 'What is considered excessive API usage?',
      answer: 'Excessive API usage is defined as exceeding the documented rate limits for your subscription plan. Rate limits are designed to ensure fair usage across all customers. Please refer to our API documentation for specific limits.'
    },
    {
      question: 'Can I use SupplyChainPro for competitive analysis?',
      answer: 'No, using our Services for competitive analysis, benchmarking, or building competing products is strictly prohibited. This includes scraping data, reverse engineering, or using our APIs for competitive intelligence.'
    },
    {
      question: 'What types of content are prohibited?',
      answer: 'Prohibited content includes illegal material, obscene or pornographic content, defamatory statements, hate speech, harassing content, infringing copyrighted material, and misleading or fraudulent information.'
    }
  ];

  // Filter prohibited categories based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery) return prohibitedCategories;
    const query = searchQuery.toLowerCase();
    return prohibitedCategories.filter(category =>
      category.category.toLowerCase().includes(query) ||
      category.activities.some(a => a.toLowerCase().includes(query))
    );
  }, [prohibitedCategories, searchQuery]);

  // Handle abuse report submission
  const handleReportSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!reportType) errors.type = 'Please select a report type';
    if (!reportDescription) errors.description = 'Please provide a description';
    if (!reportEmail) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(reportEmail)) {
      errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(errors).length > 0) {
      setReportErrors(errors);
      return;
    }

    setReportSubmitted(true);
    setTimeout(() => {
      setReportSubmitted(false);
      setReportType('');
      setReportDescription('');
      setReportEmail('');
    }, 3000);
  };

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
      'view-grid': <HiOutlineViewGrid className={className} />,
      chat: <HiOutlineBell className={className} />,
      warning: <HiOutlineWarning className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Acceptable Use Policy Center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-red-200 dark:bg-red-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-200 dark:bg-orange-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/30 rounded-full px-4 py-2 mb-6">
            <HiOutlineShieldCheck className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-medium text-red-700 dark:text-red-300">
              {config?.badge || "Acceptable Use Policy"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Acceptable"} <span className="bg-linear-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">{config?.title?.highlight || "Use Policy"}</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {config?.description || "This Acceptable Use Policy (AUP) outlines the rules and guidelines for using SupplyChainPro's Services. By using our Services, you agree to comply with this policy."}
          </p>

          {/* Quick Facts Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {quickFacts.map((fact, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                <div className={`w-6 h-6 rounded-full bg-${fact.color}-100 dark:bg-${fact.color}-900/30 flex items-center justify-center`}>
                  {getIcon(fact.icon, `w-3 h-3 text-${fact.color}-600`)}
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
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
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {tab.icon === 'document' ? <HiOutlineDocumentText className="w-4 h-4" /> :
                tab.icon === 'view-grid' ? <HiOutlineViewGrid className="w-4 h-4" /> :
                  tab.icon === 'ban' ? <HiOutlineBan className="w-4 h-4" /> :
                    tab.icon === 'flag' ? <HiOutlineFlag className="w-4 h-4" /> :
                      <HiOutlineBell className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* AUP Tab */}
        {activeTab === 'policy' && (
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
                placeholder="Search policy sections..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              {/* Introduction Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'introduction' ? null : 'introduction')}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <HiOutlineDocumentText className="w-4 h-4 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Introduction & Scope</h3>
                  </div>
                  {expandedSection === 'introduction' ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSection === 'introduction' && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      This Acceptable Use Policy ("AUP") governs your use of SupplyChainPro's Services. It is designed to ensure a safe, secure, and reliable environment for all users.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      By accessing or using our Services, you agree to comply with this AUP. Violation of this policy may result in suspension or termination of your access to our Services.
                    </p>
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <p className="text-sm text-red-800 dark:text-red-300">
                        <strong>Important:</strong> This AUP is incorporated into our Terms of Service. Any violation constitutes a breach of the Terms of Service.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Acceptable Use Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'acceptable' ? null : 'acceptable')}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Acceptable Use</h3>
                  </div>
                  {expandedSection === 'acceptable' ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSection === 'acceptable' && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <ul className="space-y-2">
                      {acceptableUse.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Prohibited Activities - Expandable categories */}
              {filteredCategories.map((category, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <button
                    onClick={() => setExpandedSection(expandedSection === category.id ? null : category.id)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-linear-to-r ${category.color} flex items-center justify-center`}>
                        {getIcon(category.icon, "w-4 h-4 text-white")}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{category.category}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${category.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                          category.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                          {category.severity} Severity
                        </span>
                      </div>
                    </div>
                    {expandedSection === category.id ? (
                      <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {expandedSection === category.id && (
                    <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                      <ul className="space-y-2">
                        {category.activities.map((activity, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {filteredCategories.length === 0 && (
                <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
                  <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-500">No prohibited activities match your search.</p>
                </div>
              )}

              {/* Enforcement Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'enforcement' ? null : 'enforcement')}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <HiOutlineExclamation className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Enforcement Actions</h3>
                  </div>
                  {expandedSection === 'enforcement' ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSection === 'enforcement' && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <div className="space-y-3">
                      {enforcementActions.map((action, idx) => (
                        <div key={idx} className={`flex items-start gap-3 p-3 rounded-lg bg-linear-to-r ${action.color} bg-opacity-10`}>
                          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                            {getIcon(action.icon, "w-4 h-4 text-white")}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900 dark:text-white">{action.level}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{action.description}</p>
                            <p className="text-xs text-gray-500 mt-1">Timeframe: {action.timeframe}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Quick Summary Tab */}
        {activeTab === 'summary' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Summary of AUP</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />
                  Acceptable Use
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {acceptableUse.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <HiOutlineBan className="w-5 h-5 text-red-600" />
                  Prohibited Activities
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">• Illegal activities</li>
                  <li className="flex items-start gap-2">• System abuse and hacking</li>
                  <li className="flex items-start gap-2">• Content violations</li>
                  <li className="flex items-start gap-2">• Data misuse</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-center">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                Violations may result in warnings, suspension, termination, or legal action.
              </p>
            </div>
          </div>
        )}

        {/* Prohibited Activities Tab */}
        {activeTab === 'prohibited' && (
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
                placeholder="Search prohibited activities..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Prohibited Categories Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredCategories.map((category, idx) => (
                <div key={idx} className={`rounded-xl ${category.bgColor} border border-gray-200 dark:border-gray-700 p-5 transition-all duration-300 hover:shadow-md`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg bg-linear-to-r ${category.color} flex items-center justify-center`}>
                        {getIcon(category.icon, "w-4 h-4 text-white")}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{category.category}</h3>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${category.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                      category.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                      {category.severity}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {category.activities.slice(0, 4).map((activity, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        {activity}
                      </li>
                    ))}
                    {category.activities.length > 4 && (
                      <li className="text-xs text-gray-500 ml-6">+{category.activities.length - 4} more</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            {filteredCategories.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
                <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-gray-500">No prohibited activities match your search.</p>
              </div>
            )}
          </>
        )}

        {/* Report Violation Tab */}
        {activeTab === 'report' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <HiOutlineFlag className="w-12 h-12 mx-auto text-red-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Report a Violation</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Use this form to report suspected violations of our Acceptable Use Policy.
              </p>
            </div>

            {reportSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Report Submitted!</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for helping us maintain a safe environment. We will investigate your report within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="max-w-lg mx-auto">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Violation Type *
                    </label>
                    <select
                      value={reportType}
                      onChange={(e) => setReportType(e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 ${reportErrors.type ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                    >
                      <option value="">Select violation type</option>
                      <option value="Illegal Activity">Illegal Activity</option>
                      <option value="System Abuse">System Abuse / Hacking</option>
                      <option value="Content Violation">Content Violation</option>
                      <option value="Data Misuse">Data Misuse</option>
                      <option value="Resource Misuse">Resource Misuse</option>
                      <option value="Spam/Abuse">Spam / Abuse</option>
                      <option value="Other">Other</option>
                    </select>
                    {reportErrors.type && <p className="text-red-500 text-xs mt-1">{reportErrors.type}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Description of Violation *
                    </label>
                    <textarea
                      rows={4}
                      value={reportDescription}
                      onChange={(e) => setReportDescription(e.target.value)}
                      placeholder="Please provide detailed information about the violation, including usernames, timestamps, and any relevant context..."
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 ${reportErrors.description ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                    />
                    {reportErrors.description && <p className="text-red-500 text-xs mt-1">{reportErrors.description}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      value={reportEmail}
                      onChange={(e) => setReportEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 ${reportErrors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                    />
                    {reportErrors.email && <p className="text-red-500 text-xs mt-1">{reportErrors.email}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Submit Report
                    <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    All reports are treated confidentially. We will investigate and take appropriate action.
                  </p>
                </div>
              </form>
            )}
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
            <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Still have questions? Contact our abuse team at{' '}
                <a href="mailto:abuse@supplychainpro.com" className="text-red-600 font-medium hover:underline">
                  abuse@supplychainpro.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Contact Footer */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>To report an AUP violation, contact:</p>
          <p className="mt-1">
            <a href="mailto:abuse@supplychainpro.com" className="text-red-600 hover:underline">abuse@supplychainpro.com</a>
          </p>
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

export default AcceptableUsePolicySection2;