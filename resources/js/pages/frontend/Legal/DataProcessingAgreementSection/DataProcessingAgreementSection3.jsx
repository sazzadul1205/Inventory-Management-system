// page/frontend/Legal/DataProcessingAgreementSection/DataProcessingAgreementSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

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
  HiOutlineFlag,
  HiOutlineOfficeBuilding,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlay,
  HiOutlineStar,
} from 'react-icons/hi';
import { HiOutlineUserGroup, HiOutlineDocumentDuplicate, HiOutlineUserCircle, HiOutlineArrowRight } from 'react-icons/hi2';

const DataProcessingAgreementSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('dpa');
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showSubProcessorModal, setShowSubProcessorModal] = useState(false);
  const [selectedSubProcessor, setSelectedSubProcessor] = useState(null);
  const [dpaRequestSubmitted, setDpaRequestSubmitted] = useState(false);
  const [dpaRequestName, setDpaRequestName] = useState('');
  const [dpaRequestEmail, setDpaRequestEmail] = useState('');
  const [dpaRequestCompany, setDpaRequestCompany] = useState('');
  const [dpaRequestErrors, setDpaRequestErrors] = useState({});
  const carouselRef = useRef(null);
  const videoRef = useRef(null);

  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Carousel navigation for DPA highlights
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (config?.highlights?.length || highlights.length));
  }, [config?.highlights?.length, highlights.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (config?.highlights?.length || highlights.length)) % (config?.highlights?.length || highlights.length));
  }, [config?.highlights?.length, highlights.length]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && (config?.highlights?.length || highlights.length) > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, config?.highlights?.length, highlights.length, nextSlide]);

  // DPA highlights for carousel
  const highlights = config?.highlights || [
    {
      title: "GDPR Compliant Processing",
      description: "We process personal data in strict compliance with GDPR Article 28 requirements.",
      icon: "shield",
      color: "from-indigo-500 to-indigo-600",
      videoUrl: "/videos/dpa-overview.mp4"
    },
    {
      title: "24-Hour Breach Notification",
      description: "We commit to notifying you of any personal data breach within 24 hours of discovery.",
      icon: "bell",
      color: "from-red-500 to-red-600",
      videoUrl: "/videos/breach-notification.mp4"
    },
    {
      title: "Secure SubProcessing",
      description: "All subProcessors are vetted and bound by the same data protection obligations.",
      icon: "chip",
      color: "from-green-500 to-green-600",
      videoUrl: "/videos/subProcessors.mp4"
    },
    {
      title: "International Data Transfers",
      description: "Cross-border transfers protected by Standard Contractual Clauses (SCCs).",
      icon: "globe",
      color: "from-blue-500 to-blue-600",
      videoUrl: "/videos/international-transfers.mp4"
    },
    {
      title: "Audit Rights",
      description: "You have the right to audit our compliance with this DPA annually.",
      icon: "eye",
      color: "from-purple-500 to-purple-600",
      videoUrl: "/videos/audit-rights.mp4"
    },
  ];

  // Tabs configuration
  const tabs = [
    { id: 'dpa', label: 'DPA', icon: 'document' },
    { id: 'highlights', label: 'Key Highlights', icon: 'star' },
    { id: 'subProcessors', label: 'SubProcessors', icon: 'chip' },
    { id: 'security', label: 'Security Measures', icon: 'shield' },
    { id: 'request', label: 'Request DPA', icon: 'mail' },
    { id: 'faq', label: 'FAQ', icon: 'chat' },
  ];

  // Quick facts
  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'calendar', color: 'indigo', trend: 'Version 3.0' },
    { label: 'SubProcessors', value: '5', icon: 'chip', color: 'blue', trend: 'All GDPR compliant' },
    { label: 'Security Certifications', value: 'SOC 2, ISO 27001', icon: 'shield', color: 'green', trend: 'Annual audits' },
    { label: 'Data Locations', value: 'US, EU, APAC', icon: 'globe', color: 'purple', trend: 'SCCs in place' },
    { label: 'Breach Notification', value: '24 hours', icon: 'bell', color: 'amber', trend: 'Without undue delay' },
    { label: 'Audit Rights', value: 'Annual', icon: 'eye', color: 'teal', trend: 'With 30 days notice' },
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

  // Definitions
  const definitions = config?.definitions || [
    { term: "Agreement", definition: "This Data Processing Agreement including all schedules, annexes, and appendices attached hereto." },
    { term: "Controller", definition: "The natural or legal person which determines the purposes and means of the processing of personal data." },
    { term: "Processor", definition: "A natural or legal person which processes personal data on behalf of the controller." },
    { term: "Data Subject", definition: "An identified or identifiable natural person whose personal data is processed." },
    { term: "Personal Data", definition: "Any information relating to an identified or identifiable natural person." },
    { term: "Processing", definition: "Any operation performed on personal data, whether by automated means." },
    { term: "SubProcessor", definition: "Any processor engaged by the Processor to assist in fulfilling its obligations." },
    { term: "Security Incident", definition: "A breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data." },
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
    "Maintain records of processing activities",
    "Cooperate with supervisory authorities",
    "Conduct data protection impact assessments when required",
  ];

  // Controller obligations
  const controllerObligations = config?.controllerObligations || [
    "Have sole responsibility for the accuracy, quality, and legality of personal data processed",
    "Ensure it has obtained all necessary consents and provided all required notices",
    "Respond to data subject requests and provide necessary assistance",
    "Comply with all applicable data protection laws and regulations",
    "Provide documented instructions for processing",
    "Ensure that its instructions do not violate data protection laws",
  ];

  // Authorized subProcessors with detailed information
  const authorizedSubProcessors = useMemo(() => config?.authorizedSubProcessors || [
    {
      id: 1,
      name: "Amazon Web Services (AWS)",
      location: "US, EU, APAC",
      services: "Cloud hosting and infrastructure",
      securityCertifications: "SOC 1, SOC 2, ISO 27001, PCI DSS",
      dataProcessingTerms: "Standard Contractual Clauses",
      breachNotification: "24 hours",
      website: "https://aws.amazon.com/compliance/gdpr-center/",
      videoUrl: "/videos/aws-subProcessor.mp4"
    },
    {
      id: 2,
      name: "Google Cloud Platform (GCP)",
      location: "US, EU",
      services: "Cloud hosting, data analytics",
      securityCertifications: "SOC 2, ISO 27001, ISO 27701",
      dataProcessingTerms: "Standard Contractual Clauses",
      breachNotification: "24 hours",
      website: "https://cloud.google.com/security/gdpr",
      videoUrl: "/videos/gcp-subProcessor.mp4"
    },
    {
      id: 3,
      name: "Stripe",
      location: "US, EU",
      services: "Payment processing",
      securityCertifications: "SOC 1, SOC 2, PCI DSS Level 1",
      dataProcessingTerms: "Standard Contractual Clauses",
      breachNotification: "48 hours",
      website: "https://stripe.com/privacy",
    },
    {
      id: 4,
      name: "Intercom",
      location: "US, EU",
      services: "Customer support and messaging",
      securityCertifications: "SOC 2, ISO 27001",
      dataProcessingTerms: "Standard Contractual Clauses",
      breachNotification: "48 hours",
      website: "https://www.intercom.com/legal/privacy",
    },
    {
      id: 5,
      name: "Mixpanel",
      location: "US",
      services: "Product analytics",
      securityCertifications: "SOC 2, ISO 27001",
      dataProcessingTerms: "Standard Contractual Clauses",
      breachNotification: "72 hours",
      website: "https://mixpanel.com/legal/privacy-policy/",
    },
  ], [config]);

  // Technical and organizational security measures
  const securityMeasures = config?.securityMeasures || [
    {
      category: "Access Control",
      icon: "lock",
      measures: [
        "Role-based access control (RBAC)",
        "Multi-factor authentication (MFA)",
        "Principle of least privilege",
        "Regular access reviews (quarterly)",
        "Password complexity requirements",
        "Automated account lockout after failed attempts"
      ],
      videoUrl: "/videos/access-control.mp4"
    },
    {
      category: "Data Protection",
      icon: "database",
      measures: [
        "256-bit AES encryption at rest",
        "TLS 1.3 encryption in transit",
        "Data pseudonymization where possible",
        "Regular backup and recovery testing",
        "Data minimization by default",
        "Secure key management"
      ],
      videoUrl: "/videos/data-protection.mp4"
    },
    {
      category: "Network Security",
      icon: "globe",
      measures: [
        "Enterprise-grade firewalls",
        "Intrusion detection/prevention systems",
        "DDoS protection",
        "Regular vulnerability scanning (weekly)",
        "Penetration testing (quarterly)",
        "Network segmentation"
      ],
      videoUrl: "/videos/network-security.mp4"
    },
    {
      category: "Organizational Measures",
      icon: "user-group",
      measures: [
        "GDPR and security training for all employees (annual)",
        "Confidentiality agreements for all staff",
        "Incident response plan (tested quarterly)",
        "Regular compliance audits (annual)",
        "Background checks for sensitive roles",
        "Data protection by design and default"
      ],
      videoUrl: "/videos/organizational-measures.mp4"
    },
  ];

  // Testimonials
  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "Global Retail Corp",
      quote: "SupplyChainPro's DPA gave our legal team full confidence. The subProcessor transparency is exceptional.",
      rating: 5,
      avatar: "/testimonials/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      quote: "The 24-hour breach notification commitment and SCCs for data transfers meet our strict compliance requirements.",
      rating: 5,
      avatar: "/testimonials/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Legal Counsel",
      quote: "As a legal professional, I'm impressed with their comprehensive DPA and GDPR compliance framework.",
      rating: 5,
      avatar: "/testimonials/emily.jpg"
    }
  ];

  // FAQ data
  const faqs = config?.faqs || [
    {
      question: 'What is a Data Processing Agreement (DPA)?',
      answer: 'A Data Processing Agreement (DPA) is a legally binding contract between a data controller and a data processor that outlines the terms and conditions for processing personal data. It is required under GDPR Article 28 and ensures that processors implement appropriate security measures and comply with data protection laws.',
      videoUrl: "/videos/what-is-dpa.mp4"
    },
    {
      question: 'Do I need to sign this DPA?',
      answer: 'By using our Services, you agree to the terms of this DPA. No physical signature is required. The DPA is incorporated into our Terms of Service and becomes effective when you create an account or continue using our Services.',
      videoUrl: "/videos/dpa-signature.mp4"
    },
    {
      question: 'How do I add or remove subProcessors?',
      answer: 'We maintain a list of authorized subProcessors on our website. We will notify you of any changes to our subProcessor list via email. You may object to new subProcessors within 10 days of notice. If you have a reasonable objection, we will work to find an alternative solution.',
      videoUrl: "/videos/subProcessor-changes.mp4"
    },
    {
      question: 'What happens to my data if I terminate the agreement?',
      answer: 'Upon termination, we will return all personal data to you in a structured, machine-readable format within 30 days. After return, we will delete all copies of your data from our systems within 90 days, unless we are required to retain data for legal compliance.',
      videoUrl: "/videos/data-deletion.mp4"
    },
    {
      question: 'How do you handle data breaches?',
      answer: 'We have a comprehensive incident response plan. In the event of a personal data breach, we will notify you within 24 hours of becoming aware of the breach, provide all relevant information, and cooperate fully with your investigation and remediation efforts.',
      videoUrl: "/videos/breach-handling.mp4"
    },
    {
      question: 'Where is my data stored?',
      answer: 'Your data may be stored in the United States, European Union, or Asia-Pacific region, depending on your location and service requirements. All cross-border transfers are protected by Standard Contractual Clauses (SCCs) adopted by the European Commission.',
      videoUrl: "/videos/data-storage.mp4"
    }
  ];

  // Filter subProcessors based on search
  const filteredSubProcessors = useMemo(() => {
    if (!searchQuery) return authorizedSubProcessors;
    const query = searchQuery.toLowerCase();
    return authorizedSubProcessors.filter(sub =>
      sub.name.toLowerCase().includes(query) ||
      sub.services.toLowerCase().includes(query) ||
      sub.location.toLowerCase().includes(query)
    );
  }, [authorizedSubProcessors, searchQuery]);

  // Handle DPA request submission
  const handleDpaRequestSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!dpaRequestName) errors.name = 'Full name is required';
    if (!dpaRequestEmail) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(dpaRequestEmail)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!dpaRequestCompany) errors.company = 'Company name is required';

    if (Object.keys(errors).length > 0) {
      setDpaRequestErrors(errors);
      return;
    }

    setDpaRequestSubmitted(true);
    setTimeout(() => {
      setDpaRequestSubmitted(false);
      setDpaRequestName('');
      setDpaRequestEmail('');
      setDpaRequestCompany('');
    }, 3000);
  };

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
      flag: <HiOutlineFlag className={className} />,
      'office-building': <HiOutlineOfficeBuilding className={className} />,
      star: <HiOutlineStar className={className} />,
    };
    return icons[iconName] || <HiOutlineDocumentText className={className} />;
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Data Processing Agreement Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-dpa" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-dpa)" />
        </svg>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineShieldCheck className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Data Processing Agreement"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Data Processing"} <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Agreement"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "This Data Processing Agreement (DPA) reflects the parties' agreement with respect to the processing of personal data under the General Data Protection Regulation (GDPR)."}
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
            >
              {tab.icon === 'document' ? <HiOutlineDocumentText className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  tab.icon === 'chip' ? <HiOutlineChip className="w-4 h-4" /> :
                    tab.icon === 'shield' ? <HiOutlineShieldCheck className="w-4 h-4" /> :
                      tab.icon === 'mail' ? <HiOutlineMail className="w-4 h-4" /> :
                        <HiOutlineBell className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Key Highlights Carousel Tab */}
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
                  <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                    <HiOutlineChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                    <HiOutlineChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {highlights.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50'}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* DPA Tab */}
        {activeTab === 'dpa' && (
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
                placeholder="Search DPA sections..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <HiOutlineDocumentText className="w-4 h-4 text-indigo-600" />
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
                      This Data Processing Agreement ("DPA") is incorporated into and forms part of the Terms of Service between SupplyChainPro Inc. ("Processor") and the Customer ("Controller").
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      This DPA reflects the parties' agreement with respect to the processing of personal data under the General Data Protection Regulation (GDPR) and applicable data protection laws.
                    </p>
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                      <p className="text-sm text-indigo-800 dark:text-indigo-300">
                        <strong>Purpose:</strong> This DPA sets out the rights and obligations of the Controller and Processor regarding the processing of personal data in connection with the provision of SupplyChainPro's services.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Definitions Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'definitions' ? null : 'definitions')}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <HiOutlineInformationCircle className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Definitions</h3>
                  </div>
                  {expandedSection === 'definitions' ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSection === 'definitions' && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <div className="space-y-3">
                      {definitions.map((def, idx) => (
                        <div key={idx} className="border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{def.term}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{def.definition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Processor Obligations */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'processor' ? null : 'processor')}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <HiOutlineShieldCheck className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Processor Obligations</h3>
                  </div>
                  {expandedSection === 'processor' ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSection === 'processor' && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <ul className="space-y-2">
                      {processorObligations.map((obligation, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{obligation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Controller Obligations */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'controller' ? null : 'controller')}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <HiOutlineUser className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Controller Obligations</h3>
                  </div>
                  {expandedSection === 'controller' ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSection === 'controller' && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <ul className="space-y-2">
                      {controllerObligations.map((obligation, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{obligation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Data Breach Notification */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'breach' ? null : 'breach')}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <HiOutlineBell className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Data Breach Notification</h3>
                  </div>
                  {expandedSection === 'breach' ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSection === 'breach' && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      In the event of a personal data breach, the Processor shall:
                    </p>
                    <ul className="space-y-2 mb-3">
                      <li className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Notify the Controller within <strong>24 hours</strong> of becoming aware</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Provide all available information about the breach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Cooperate with the Controller's investigation</span>
                      </li>
                    </ul>
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <p className="text-sm text-red-800 dark:text-red-300">
                        The Processor shall not inform any third party about a personal data breach without the Controller's prior written consent.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* International Transfers */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'transfers' ? null : 'transfers')}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <HiOutlineGlobe className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">International Data Transfers</h3>
                  </div>
                  {expandedSection === 'transfers' ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSection === 'transfers' && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      The Processor may transfer personal data to countries outside the EEA only if appropriate safeguards are in place:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                        Standard Contractual Clauses (SCCs)
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                        EU-US Data Privacy Framework
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                        Adequacy decisions by the European Commission
                      </li>
                    </ul>
                    <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-300">
                        <strong>EU Representative:</strong> {company.representativeEU}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Data Deletion */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'deletion' ? null : 'deletion')}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <HiOutlineRefresh className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Data Deletion & Return</h3>
                  </div>
                  {expandedSection === 'deletion' ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSection === 'deletion' && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Upon termination of the Services or at the Controller's request, the Processor shall:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Return all personal data within <strong>30 days</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Delete all copies of personal data within <strong>90 days</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Provide written certification of deletion upon request</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Audit Rights */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'audit' ? null : 'audit')}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <HiOutlineEye className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Audit Rights</h3>
                  </div>
                  {expandedSection === 'audit' ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSection === 'audit' && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      The Controller has the right to audit the Processor's compliance with this DPA. The Processor shall:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Provide reasonable assistance and access to documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Make available information necessary to demonstrate compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Allow for audits conducted by the Controller or an independent auditor</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                      Audits shall be conducted during normal business hours, with reasonable notice (at least 30 days), and not more than once per year.
                    </p>
                  </div>
                )}
              </div>

              {/* Contact */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'contact' ? null : 'contact')}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <HiOutlineMail className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Contact Information</h3>
                  </div>
                  {expandedSection === 'contact' ? (
                    <HiOutlineChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSection === 'contact' && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 space-y-2">
                      <p className="font-semibold text-gray-900 dark:text-white">{company.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{company.address}</p>
                      <p className="text-sm">
                        <strong>Email:</strong> <a href={`mailto:${company.email}`} className="text-indigo-600 hover:underline">{company.email}</a>
                      </p>
                      <p className="text-sm">
                        <strong>DPO Email:</strong> <a href={`mailto:${company.dpoEmail}`} className="text-indigo-600 hover:underline">{company.dpoEmail}</a>
                      </p>
                      <p className="text-sm"><strong>Phone:</strong> {company.phone}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-4">What Our Customers Say</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                        <HiOutlineUserCircle className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
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
          </>
        )}

        {/* SubProcessors Tab */}
        {activeTab === 'subProcessors' && (
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
                placeholder="Search subProcessors..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* SubProcessors Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredSubProcessors.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => { setSelectedSubProcessor(sub); setShowSubProcessorModal(true); }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                        <HiOutlineChip className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{sub.name}</h3>
                        <p className="text-xs text-gray-500">{sub.location}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{sub.services}</p>
                  <div className="flex flex-wrap gap-1">
                    {sub.securityCertifications.split(', ').slice(0, 2).map((cert, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-400">{cert}</span>
                    ))}
                    {sub.securityCertifications.split(', ').length > 2 && (
                      <span className="text-xs text-gray-400">+{sub.securityCertifications.split(', ').length - 2}</span>
                    )}
                  </div>
                  <div className="mt-3 text-right">
                    <span className="text-indigo-600 text-xs font-semibold">Click for details →</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredSubProcessors.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
                <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-gray-500">No subProcessors match your search.</p>
              </div>
            )}

            {/* SubProcessor Modal */}
            {showSubProcessorModal && selectedSubProcessor && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowSubProcessorModal(false)}>
                <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                  <div className="bg-indigo-600 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-bold text-lg">{selectedSubProcessor.name}</h3>
                      <button onClick={() => setShowSubProcessorModal(false)} className="text-white hover:text-gray-200">
                        <HiOutlineX className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-gray-900 dark:text-white">{selectedSubProcessor.location}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Services Provided</p>
                      <p className="text-gray-900 dark:text-white">{selectedSubProcessor.services}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Security Certifications</p>
                      <p className="text-gray-900 dark:text-white text-sm">{selectedSubProcessor.securityCertifications}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Data Processing Terms</p>
                      <p className="text-gray-900 dark:text-white">{selectedSubProcessor.dataProcessingTerms}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Breach Notification</p>
                      <p className="text-gray-900 dark:text-white">{selectedSubProcessor.breachNotification}</p>
                    </div>
                    {selectedSubProcessor.videoUrl && (
                      <button
                        onClick={() => { setCurrentVideo(selectedSubProcessor.videoUrl); setShowVideoModal(true); setShowSubProcessorModal(false); }}
                        className="inline-flex items-center gap-2 text-indigo-600 text-sm font-semibold hover:underline"
                      >
                        <HiOutlinePlay className="w-4 h-4" />
                        Watch Overview
                      </button>
                    )}
                    <a href={selectedSubProcessor.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-600 text-sm font-semibold hover:underline">
                      View Privacy Policy <HiOutlineExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Security Measures Tab */}
        {activeTab === 'security' && (
          <div className="space-y-4">
            {securityMeasures.map((category, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      {getIcon(category.icon, "w-5 h-5 text-indigo-600")}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.category}</h3>
                  </div>
                  {category.videoUrl && (
                    <button
                      onClick={() => { setCurrentVideo(category.videoUrl); setShowVideoModal(true); }}
                      className="inline-flex items-center gap-2 text-indigo-600 text-sm font-semibold hover:underline"
                    >
                      <HiOutlinePlay className="w-4 h-4" />
                      Watch Demo
                    </button>
                  )}
                </div>
                <ul className="grid md:grid-cols-2 gap-2">
                  {category.measures.map((measure, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {measure}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Request DPA Tab */}
        {activeTab === 'request' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <HiOutlineDocumentText className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request Signed DPA</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below to request a signed copy of our Data Processing Agreement.
              </p>
            </div>

            {dpaRequestSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We have received your request and will send you a signed DPA within 3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDpaRequestSubmit} className="max-w-lg mx-auto">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={dpaRequestName}
                      onChange={(e) => setDpaRequestName(e.target.value)}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${dpaRequestErrors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                    />
                    {dpaRequestErrors.name && <p className="text-red-500 text-xs mt-1">{dpaRequestErrors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={dpaRequestEmail}
                      onChange={(e) => setDpaRequestEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${dpaRequestErrors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                    />
                    {dpaRequestErrors.email && <p className="text-red-500 text-xs mt-1">{dpaRequestErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={dpaRequestCompany}
                      onChange={(e) => setDpaRequestCompany(e.target.value)}
                      placeholder="Enter your company name"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${dpaRequestErrors.company ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                    />
                    {dpaRequestErrors.company && <p className="text-red-500 text-xs mt-1">{dpaRequestErrors.company}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Request Signed DPA
                    <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    By submitting this request, you confirm that you are authorized to request this agreement on behalf of your organization.
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
                    <div className="flex items-center gap-2">
                      {faq.videoUrl && (
                        <span className="text-indigo-500 text-sm flex items-center gap-1">
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
                          className="inline-flex items-center gap-2 text-indigo-600 text-sm font-semibold hover:underline"
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
            <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Still have questions? Contact our DPO at{' '}
                <a href="mailto:dpo@supplychainpro.com" className="text-indigo-600 font-medium hover:underline">
                  dpo@supplychainpro.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Contact Footer */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>For DPA-related inquiries, contact our Data Protection Officer:</p>
          <p className="mt-1">
            <a href="mailto:dpo@supplychainpro.com" className="text-indigo-600 hover:underline">dpo@supplychainpro.com</a>
          </p>
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

        {/* Video Modal */}
        {showVideoModal && currentVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowVideoModal(false)}>
            <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
                <HiOutlineX className="w-6 h-6" />
              </button>
              <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default DataProcessingAgreementSection3;