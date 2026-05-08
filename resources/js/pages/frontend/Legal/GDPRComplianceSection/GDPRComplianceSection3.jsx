// page/frontend/Legal/GDPRComplianceSection/GDPRComplianceSection3.jsx

/**
 * GDPR Compliance Section III - AI-Powered Data Protection Hub
 *
 * Unique Design Elements:
 * - Video Integration for Key GDPR Concepts
 * - Multi-Tab Interface (Overview, Highlights, Rights, Request, FAQ, Certifications)
 * - Interactive Highlights Carousel with Video Demos
 * - Interactive Data Subject Rights Cards with Expandable Details
 * - DSAR (Data Subject Access Request) Submission Form with Validation
 * - Legal Bases for Processing Grid
 * - Security Measures Progress Bars
 * - Customer Testimonials Section
 * - Certifications Showcase with Validity Dates
 * - Quick Stats Dashboard with Trend Indicators
 * - FAQ Accordion with Video Explanations
 * - Search Functionality for Rights
 * - Animated Background Circuit Pattern
 * - Print/Download Modal for Legal Documents
 * - Fully Responsive Layout with Dark Mode Support
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
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
  HiOutlineInformationCircle,
  HiOutlineViewGrid,
  HiOutlineBell,
  HiOutlineFlag,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlay,
  HiOutlineStar,
} from 'react-icons/hi';
import { HiOutlineUserGroup, HiOutlineBuildingOffice, HiOutlineDocumentDuplicate, HiOutlineUserCircle, HiOutlineArrowRight } from 'react-icons/hi2';

const GDPRComplianceSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [requestType, setRequestType] = useState('');
  const [requestName, setRequestName] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [requestEmail, setRequestEmail] = useState('');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [requestErrors, setRequestErrors] = useState({});
  const [selectedRight, setSelectedRight] = useState(null);
  const [requestDetails, setRequestDetails] = useState('');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // ==================== REFS ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  const highlights = config?.highlights || [
    {
      title: "Your Data, Your Control",
      description: "You have full control over your personal data. Access, update, or delete your information at any time.",
      icon: "user",
      color: "from-blue-500 to-blue-600",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and security measures protect your data at all times.",
      icon: "shield",
      color: "from-green-500 to-green-600",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      title: "GDPR & CCPA Compliant",
      description: "We adhere to global privacy regulations to protect your rights wherever you are.",
      icon: "globe",
      color: "from-purple-500 to-purple-600",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4"
    },
    {
      title: "Transparent Processing",
      description: "We clearly explain how and why we process your personal data.",
      icon: "eye",
      color: "from-amber-500 to-amber-600",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
    },
    {
      title: "DPO Available 24/7",
      description: "Our Data Protection Officer is available to answer your privacy questions.",
      icon: "mail",
      color: "from-indigo-500 to-indigo-600",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
  ];

  const tabs = [
    { id: 'overview', label: 'GDPR Overview', icon: 'shield' },
    { id: 'highlights', label: 'Key Highlights', icon: 'star' },
    { id: 'rights', label: 'Your Rights', icon: 'user' },
    { id: 'request', label: 'Submit Request', icon: 'mail' },
    { id: 'faq', label: 'FAQ', icon: 'bell' },
    { id: 'certifications', label: 'Certifications', icon: 'check' },
  ];

  const quickFacts = config?.quickFacts || [
    { label: 'GDPR Compliant', value: 'Yes', icon: 'check', color: 'green', trend: 'Certified since 2018' },
    { label: 'Data Subject Rights', value: '8', icon: 'user', color: 'blue', trend: 'Full compliance' },
    { label: 'DPO Appointed', value: 'Dr. Sarah Chen', icon: 'mail', color: 'purple', trend: 'Available 24/7' },
    { label: 'Response Time', value: '30 days', icon: 'clock', color: 'amber', trend: 'Average: 5 days' },
    { label: 'Data Processing Locations', value: 'EU, US, APAC', icon: 'globe', color: 'indigo', trend: 'SCCs in place' },
    { label: 'Security Certifications', value: 'SOC 2, ISO 27001', icon: 'shield', color: 'teal', trend: 'Annual audits' },
  ];

  const company = config?.company || {
    name: "SupplyChainPro Inc.",
    legalName: "SupplyChainPro Inc.",
    address: "123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105",
    email: "privacy@supplychainpro.com",
    phone: "+1 (800) 555-0123",
    dpoName: "Dr. Sarah Chen",
    dpoEmail: "dpo@supplychainpro.com",
    representativeEU: "SupplyChainPro EU Ltd., 123 Dublin Street, Dublin, Ireland",
    registrationNumber: "IE123456",
  };

  const dataSubjectRights = useMemo(() => config?.dataSubjectRights || [
    {
      id: 'access',
      title: "Right to Access",
      description: "You have the right to obtain confirmation from us whether we are processing your personal data, and where that is the case, access to that personal data.",
      articles: "Art. 15 GDPR",
      timeframe: "30 days",
      icon: "eye",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      howToExercise: "Submit a Data Access Request through our privacy portal or email our DPO.",
      limitations: "We may need to verify your identity before processing your request.",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: 'rectification',
      title: "Right to Rectification",
      description: "You have the right to obtain from us the rectification of inaccurate personal data concerning you.",
      articles: "Art. 16 GDPR",
      timeframe: "Immediate",
      icon: "check",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      howToExercise: "Update your information directly in your account settings or contact support.",
      limitations: "We may ask for supporting documentation for certain changes.",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      id: 'erasure',
      title: "Right to Erasure (Right to be Forgotten)",
      description: "You have the right to obtain from us the erasure of personal data concerning you without undue delay.",
      articles: "Art. 17 GDPR",
      timeframe: "30 days",
      icon: "x",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      howToExercise: "Request account deletion through settings or submit an erasure request.",
      limitations: "We may retain data for legal obligations (tax, fraud prevention).",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4"
    },
    {
      id: 'restriction',
      title: "Right to Restriction of Processing",
      description: "You have the right to obtain from us restriction of processing of your personal data.",
      articles: "Art. 18 GDPR",
      timeframe: "15 days",
      icon: "clock",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      howToExercise: "Contact our DPO to request processing restriction.",
      limitations: "We may still store your data but not process it actively.",
    },
    {
      id: 'portability',
      title: "Right to Data Portability",
      description: "You have the right to receive your personal data in a structured, commonly used, and machine-readable format.",
      articles: "Art. 20 GDPR",
      timeframe: "30 days",
      icon: "database",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      howToExercise: "Use the Data Export feature in your account settings.",
      limitations: "Applies only to data you provided, based on consent or contract.",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
    },
    {
      id: 'object',
      title: "Right to Object",
      description: "You have the right to object to processing of your personal data based on our legitimate interests.",
      articles: "Art. 21 GDPR",
      timeframe: "15 days",
      icon: "scale",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      howToExercise: "Opt-out of marketing communications or contact our DPO.",
      limitations: "We may continue processing if we have compelling legitimate grounds.",
    },
    {
      id: 'withdraw-consent',
      title: "Right to Withdraw Consent",
      description: "You have the right to withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.",
      articles: "Art. 7(3) GDPR",
      timeframe: "Immediate",
      icon: "heart",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      howToExercise: "Manage cookie preferences or update marketing preferences.",
      limitations: "Withdrawal doesn't affect past processing.",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: 'complaint',
      title: "Right to Lodge a Complaint",
      description: "You have the right to lodge a complaint with a supervisory authority if you believe our processing infringes the GDPR.",
      articles: "Art. 77 GDPR",
      timeframe: "Anytime",
      icon: "flag",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      howToExercise: "Contact your local supervisory authority directly.",
      limitations: "We encourage you to contact us first to resolve any issues.",
    },
  ], [config?.dataSubjectRights]);

  const legalBases = config?.legalBases || [
    {
      basis: "Consent",
      article: "Art. 6(1)(a) GDPR",
      description: "The data subject has given consent to the processing of their personal data for one or more specific purposes.",
      examples: ["Marketing communications", "Cookie preferences", "Optional profiling"],
      icon: "heart",
    },
    {
      basis: "Contract",
      article: "Art. 6(1)(b) GDPR",
      description: "Processing is necessary for the performance of a contract to which the data subject is party.",
      examples: ["Account creation", "Service delivery", "Payment processing"],
      icon: "document",
    },
    {
      basis: "Legal Obligation",
      article: "Art. 6(1)(c) GDPR",
      description: "Processing is necessary for compliance with a legal obligation to which the controller is subject.",
      examples: ["Tax records", "Regulatory reporting", "Fraud prevention"],
      icon: "scale",
    },
    {
      basis: "Vital Interests",
      article: "Art. 6(1)(d) GDPR",
      description: "Processing is necessary to protect the vital interests of the data subject or another natural person.",
      examples: ["Emergency situations", "Health emergencies"],
      icon: "shield",
    },
    {
      basis: "Public Interest",
      article: "Art. 6(1)(e) GDPR",
      description: "Processing is necessary for the performance of a task carried out in the public interest.",
      examples: ["Public health", "Scientific research"],
      icon: "globe",
    },
    {
      basis: "Legitimate Interests",
      article: "Art. 6(1)(f) GDPR",
      description: "Processing is necessary for the purposes of legitimate interests pursued by the controller.",
      examples: ["Security monitoring", "Fraud detection", "Direct marketing"],
      icon: "chart",
    },
  ];

  const securityMeasures = config?.securityMeasures || [
    { name: "Encryption", description: "256-bit AES encryption for data at rest, TLS 1.3 for data in transit", status: "Implemented", percentage: 100 },
    { name: "Access Control", description: "Role-based access control with multi-factor authentication", status: "Implemented", percentage: 100 },
    { name: "Pseudonymization", description: "Personal data is pseudonymized where possible", status: "Implemented", percentage: 95 },
    { name: "Data Minimization", description: "We only collect data necessary for specified purposes", status: "Implemented", percentage: 100 },
    { name: "Regular Audits", description: "Annual GDPR compliance audits by third-party experts", status: "Scheduled", percentage: 75 },
    { name: "Staff Training", description: "Regular GDPR training for all employees handling personal data", status: "Ongoing", percentage: 100 },
  ];

  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "Global Retail Corp",
      quote: "SupplyChainPro's GDPR compliance gave our legal team full confidence. The transparency around data handling is exceptional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      quote: "Submitting a data access request was simple and fast. Received my data export within a week.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Legal Counsel",
      quote: "As a legal professional, I'm impressed with their GDPR compliance framework and DPO responsiveness.",
      rating: 5
    }
  ];

  const faqs = config?.faqs || [
    {
      question: 'What is GDPR and who does it apply to?',
      answer: 'The General Data Protection Regulation (GDPR) is a European Union regulation that protects the personal data of EU residents. It applies to any organization, regardless of location, that processes the personal data of individuals in the EU.',
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      question: 'How do I request a copy of my data?',
      answer: 'You can request a copy of your data through our in-app Privacy Center or by emailing our DPO at dpo@supplychainpro.com. We will provide your data in a structured, machine-readable format within 30 days.',
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      question: 'How long do you keep my data?',
      answer: 'We retain your personal data for as long as your account is active or as needed to provide you services. After account deletion, we retain certain data for up to 90 days for legal compliance. You can request earlier deletion in most cases.',
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4"
    },
    {
      question: 'Is my data transferred outside the EU?',
      answer: 'Yes, we may transfer data to the United States and other countries. We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) adopted by the European Commission.',
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
    },
    {
      question: 'What should I do if I suspect a data breach?',
      answer: 'If you suspect a data breach, please contact our DPO immediately at dpo@supplychainpro.com. We will investigate and notify affected individuals and supervisory authorities as required by law.',
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      question: 'How do I delete my account and all my data?',
      answer: 'You can delete your account from the app settings. Upon deletion, we will remove your personal information within 30 days, though some data may be retained for legal compliance (e.g., transaction records for tax purposes) for up to 7 years.',
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
  ];

  const certifications = config?.certifications || [
    {
      name: "SOC 2 Type II",
      issuer: "AICPA",
      description: "Service Organization Control 2 certification for security, availability, and confidentiality.",
      validUntil: "December 2026",
      icon: "shield",
    },
    {
      name: "ISO 27001",
      issuer: "International Organization for Standardization",
      description: "Information Security Management System certification.",
      validUntil: "September 2026",
      icon: "check",
    },
    {
      name: "GDPR Certified",
      issuer: "EU Data Protection Board",
      description: "GDPR compliance certification for data controllers.",
      validUntil: "January 2027",
      icon: "globe",
    },
    {
      name: "Privacy Shield",
      issuer: "U.S. Department of Commerce",
      description: "EU-US Data Privacy Framework certification.",
      validUntil: "Active",
      icon: "scale",
    },
  ];

  // ==================== CAROUSEL FUNCTIONS ====================
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  }, [highlights.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  }, [highlights.length]);

  // ==================== AUTO-PLAY CAROUSEL EFFECT ====================
  useEffect(() => {
    if (config?.autoPlayCarousel !== false && highlights.length > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, nextSlide, highlights.length]);

  // ==================== FILTER FUNCTIONS ====================
  const filteredRights = useMemo(() => {
    if (!searchQuery) return dataSubjectRights;
    const query = searchQuery.toLowerCase();
    return dataSubjectRights.filter(right =>
      right.title.toLowerCase().includes(query) ||
      right.description.toLowerCase().includes(query)
    );
  }, [dataSubjectRights, searchQuery]);

  // ==================== HELPER FUNCTIONS ====================
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
      'view-grid': <HiOutlineViewGrid className={className} />,
      flag: <HiOutlineFlag className={className} />,
      star: <HiOutlineStar className={className} />,
    };
    return icons[iconName] || <HiOutlineShieldCheck className={className} />;
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!requestName) {
      errors.name = 'Full name is required';
    }
    if (!requestEmail) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(requestEmail)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!requestType) {
      errors.type = 'Please select a request type';
    }

    if (Object.keys(errors).length > 0) {
      setRequestErrors(errors);
      return;
    }

    setRequestSubmitted(true);
    setTimeout(() => {
      setRequestSubmitted(false);
      setRequestName('');
      setRequestEmail('');
      setRequestType('');
      setRequestDetails('');
      setSelectedRight(null);
    }, 3000);
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="GDPR Compliance Hub"
    >
      {/* ==================== BACKGROUND PATTERN ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-gdpr" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-gdpr)" />
        </svg>
      </div>

      {/* ==================== ANIMATED GRADIENT ORBS ==================== */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineShieldCheck className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "GDPR Compliance"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "GDPR"} <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{config?.title?.highlight || "Compliance"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "SupplyChainPro is committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR). This page outlines our GDPR compliance framework and your rights as a data subject."}
          </p>

          {/* ==================== QUICK FACTS ROW ==================== */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {quickFacts.map((fact, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  {getIcon(fact.icon, "w-3 h-3 text-amber-600")}
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  <strong>{fact.label}:</strong> {fact.value}
                </span>
                {fact.trend && (
                  <span className="text-xs text-gray-400 dark:text-gray-500 hidden sm:inline">{fact.trend}</span>
                )}
              </div>
            ))}
          </div>

          {/* ==================== ACTION BUTTONS ==================== */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
              aria-label="Download PDF"
            >
              <HiOutlineDownload className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 text-sm font-medium"
              aria-label="Print"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* ==================== NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {tab.icon === 'shield' ? <HiOutlineShieldCheck className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  tab.icon === 'user' ? <HiOutlineUser className="w-4 h-4" /> :
                    tab.icon === 'mail' ? <HiOutlineMail className="w-4 h-4" /> :
                      tab.icon === 'bell' ? <HiOutlineBell className="w-4 h-4" /> :
                        <HiOutlineCheckCircle className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== KEY HIGHLIGHTS CAROUSEL TAB ==================== */}
        {activeTab === 'highlights' && (
          <div className="relative mb-16">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <div className={`relative h-96 rounded-3xl overflow-hidden bg-linear-to-r ${highlight.color}`}>
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
                        <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                          {getIcon(highlight.icon, "w-10 h-10 text-white")}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{highlight.title}</h2>
                        <p className="text-white/90 text-lg mb-6 max-w-2xl">{highlight.description}</p>
                        {highlight.videoUrl && (
                          <button
                            onClick={() => { setCurrentVideo(highlight.videoUrl); setShowVideoModal(true); }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/30 transition-colors"
                            aria-label="Watch video"
                          >
                            <HiOutlinePlay className="w-5 h-5" />
                            Watch Video
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {highlights.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Previous slide"
                  >
                    <HiOutlineChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Next slide"
                  >
                    <HiOutlineChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {highlights.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ==================== GDPR OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Introduction Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <HiOutlineInformationCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What is GDPR?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect on May 25, 2018. It applies to all organizations that process the personal data of individuals residing in the European Union (EU), regardless of where the organization is located.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Key Principles</p>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Lawfulness, fairness, and transparency</li>
                    <li>• Purpose limitation</li>
                    <li>• Data minimization</li>
                    <li>• Accuracy</li>
                    <li>• Storage limitation</li>
                    <li>• Integrity and confidentiality</li>
                    <li>• Accountability</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Data Controller Information</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{company.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{company.address}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <strong>DPO:</strong> {company.dpoName}<br />
                    <strong>Email:</strong> {company.dpoEmail}
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Bases Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Legal Bases for Processing</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {legalBases.map((basis, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      {getIcon(basis.icon, "w-4 h-4 text-blue-600 dark:text-blue-400")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{basis.basis}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{basis.article}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{basis.description.substring(0, 80)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Measures Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Security Measures</h2>
              <div className="space-y-3">
                {securityMeasures.map((measure, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{measure.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{measure.description}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block text-xs px-2 py-1 rounded-full ${measure.status === 'Implemented' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                          measure.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                            'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        }`}>
                        {measure.status}
                      </span>
                      <div className="w-24 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
                        <div className="h-1.5 rounded-full bg-green-500 dark:bg-green-400" style={{ width: `${measure.percentage}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Transfers Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <HiOutlineGlobe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">International Data Transfers</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                When we transfer personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
                  Standard Contractual Clauses (SCCs) adopted by the European Commission
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
                  EU-US Data Privacy Framework certification
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
                  Data Processing Agreements with all third-party processors
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>EU Representative:</strong> {company.representativeEU}
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-4">What Our Customers Say</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <HiOutlineUserCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <HiOutlineStar key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 italic">"{testimonial.quote.substring(0, 100)}..."</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== YOUR RIGHTS TAB ==================== */}
        {activeTab === 'rights' && (
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
                placeholder="Search rights..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                aria-label="Search rights"
              />
            </div>

            {/* Rights Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredRights.map((right) => (
                <div
                  key={right.id}
                  className={`rounded-xl border ${right.bgColor} border-gray-200 dark:border-gray-700 p-5 transition-all duration-300 cursor-pointer hover:shadow-md`}
                  onClick={() => setSelectedRight(selectedRight === right.id ? null : right.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedRight(selectedRight === right.id ? null : right.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg bg-linear-to-r ${right.color} flex items-center justify-center`}>
                        {getIcon(right.icon, "w-4 h-4 text-white")}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{right.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{right.articles}</span>
                      <span className="text-xs text-blue-600 dark:text-blue-400">{right.timeframe}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{right.description}</p>

                  {selectedRight === right.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">How to exercise this right:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{right.howToExercise}</p>
                      <p className="text-xs text-amber-600 dark:text-amber-400">{right.limitations}</p>
                      {right.videoUrl && (
                        <button
                          onClick={() => { setCurrentVideo(right.videoUrl); setShowVideoModal(true); }}
                          className="mt-3 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                          aria-label="Watch video explanation"
                        >
                          <HiOutlinePlay className="w-4 h-4" />
                          Watch Video Explanation
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setActiveTab('request');
                          setRequestType(right.title);
                        }}
                        className="mt-3 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                        aria-label={`Submit ${right.title} request`}
                      >
                        Submit Request →
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredRights.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
                <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-gray-500 dark:text-gray-400">No rights match your search.</p>
              </div>
            )}
          </>
        )}

        {/* ==================== SUBMIT REQUEST TAB ==================== */}
        {activeTab === 'request' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Submit a Data Subject Request</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Use this form to exercise your GDPR rights. We will respond within 30 days.
              </p>
            </div>

            {requestSubmitted ? (
              <div className="text-center py-8 animate-fadeIn">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We have received your request and will respond within 30 days. A confirmation has been sent to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="max-w-lg mx-auto">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={requestName}
                      onChange={(e) => setRequestName(e.target.value)}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white ${requestErrors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                        }`}
                      aria-label="Your full name"
                    />
                    {requestErrors.name && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{requestErrors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={requestEmail}
                      onChange={(e) => setRequestEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white ${requestErrors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                        }`}
                      aria-label="Your email address"
                    />
                    {requestErrors.email && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{requestErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Request Type *
                    </label>
                    <select
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white ${requestErrors.type ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                        }`}
                      aria-label="Select request type"
                    >
                      <option value="">Select a request type</option>
                      {dataSubjectRights.map((right) => (
                        <option key={right.id} value={right.title}>{right.title}</option>
                      ))}
                      <option value="Other">Other GDPR-related inquiry</option>
                    </select>
                    {requestErrors.type && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{requestErrors.type}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={requestDetails}
                      onChange={(e) => setRequestDetails(e.target.value)}
                      placeholder="Please provide any additional information that may help us process your request..."
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900 dark:text-white placeholder-gray-500"
                      aria-label="Additional details"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    aria-label="Submit request"
                  >
                    Submit Request
                    <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                    By submitting this request, you confirm that you are the data subject or authorized to act on their behalf.
                    We may need to verify your identity before processing your request.
                  </p>
                </div>
              </form>
            )}
          </div>
        )}

        {/* ==================== FAQ TAB ==================== */}
        {activeTab === 'faq' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    aria-label={`Toggle answer for ${faq.question}`}
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                    <div className="flex items-center gap-2">
                      {faq.videoUrl && (
                        <span className="text-blue-500 dark:text-blue-400 text-sm flex items-center gap-1">
                          <HiOutlinePlay className="w-4 h-4" />
                          <span className="hidden sm:inline">Video</span>
                        </span>
                      )}
                      {expandedFaq === idx ? (
                        <HiOutlineChevronUp className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                      ) : (
                        <HiOutlineChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                      )}
                    </div>
                  </button>
                  {expandedFaq === idx && (
                    <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{faq.answer}</p>
                      {faq.videoUrl && (
                        <button
                          onClick={() => { setCurrentVideo(faq.videoUrl); setShowVideoModal(true); }}
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                          aria-label="Watch video explanation"
                        >
                          <HiOutlinePlay className="w-4 h-4" />
                          Watch Video Explanation
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Still have questions? Contact our DPO at{' '}
                <a href="mailto:dpo@supplychainpro.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  dpo@supplychainpro.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* ==================== CERTIFICATIONS TAB ==================== */}
        {activeTab === 'certifications' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      {getIcon(cert.icon, "w-6 h-6 text-green-600 dark:text-green-400")}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Issued by: {cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{cert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Valid until: {cert.validUntil}</span>
                    <button className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline" aria-label="View certificate">
                      View Certificate →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Audit Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Third-Party Audits</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We undergo annual independent audits to verify our GDPR compliance and security controls.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
                  Last Audit: March 2026
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
                  Next Audit: March 2027
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
                  Auditor: Ernst & Young
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CONTACT FOOTER ==================== */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>For GDPR-related inquiries, contact our Data Protection Officer:</p>
          <p className="mt-1">
            <a href="mailto:dpo@supplychainpro.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              dpo@supplychainpro.com
            </a>
          </p>
        </div>

        {/* ==================== PRINT MODAL ==================== */}
        {showPrintModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowPrintModal(false)}
            role="dialog"
            aria-label="Download GDPR Documentation"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Download GDPR Documentation</h3>
                  <button onClick={() => setShowPrintModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <HiOutlineDocumentDuplicate className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Choose your preferred format to download our GDPR compliance documentation.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors" aria-label="Download as PDF">
                    <HiOutlineDownload className="w-4 h-4" />
                    PDF
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="Print">
                    <HiOutlinePrinter className="w-4 h-4" />
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && currentVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setShowVideoModal(false)}
            role="dialog"
            aria-label="Video Player"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
              <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
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
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default GDPRComplianceSection3;