// page/frontend/Legal/SecurityPolicySection/SecurityPolicySection3.jsx

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
  HiOutlineServer,
  HiOutlineKey,
  HiOutlineFingerPrint,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlay,
  HiOutlineStar,
} from 'react-icons/hi';
import { HiOutlineUserGroup, HiOutlineDocumentDuplicate, HiOutlineBuildingOffice, HiOutlineUserCircle, HiOutlineArrowRight } from 'react-icons/hi2';

const SecurityPolicySection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [reportRequestSubmitted, setReportRequestSubmitted] = useState(false);
  const [reportRequestName, setReportRequestName] = useState('');
  const [reportRequestEmail, setReportRequestEmail] = useState('');
  const [reportRequestCompany, setReportRequestCompany] = useState('');
  const [reportRequestType, setReportRequestType] = useState('');
  const [reportRequestErrors, setReportRequestErrors] = useState({});
  const carouselRef = useRef(null);
  const videoRef = useRef(null);

  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Carousel navigation for security highlights
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

  // Security highlights for carousel
  const highlights = config?.highlights || [
    {
      title: "Defense in Depth",
      description: "Multiple layers of security controls protect your data at every level.",
      icon: "shield",
      color: "from-cyan-500 to-cyan-600",
      videoUrl: "/videos/defense-in-depth.mp4"
    },
    {
      title: "Zero Trust Architecture",
      description: "Never trust, always verify. Every access request is fully authenticated and authorized.",
      icon: "lock",
      color: "from-blue-500 to-blue-600",
      videoUrl: "/videos/zero-trust.mp4"
    },
    {
      title: "24/7 Security Monitoring",
      description: "Our Security Operations Center monitors for threats around the clock.",
      icon: "eye",
      color: "from-purple-500 to-purple-600",
      videoUrl: "/videos/security-monitoring.mp4"
    },
    {
      title: "Encryption Everywhere",
      description: "256-bit AES encryption at rest and TLS 1.3 in transit.",
      icon: "key",
      color: "from-green-500 to-green-600",
      videoUrl: "/videos/encryption.mp4"
    },
    {
      title: "Regular Penetration Testing",
      description: "Quarterly third-party penetration tests ensure our defenses remain strong.",
      icon: "search",
      color: "from-amber-500 to-amber-600",
      videoUrl: "/videos/penetration-testing.mp4"
    },
  ];

  // Tabs configuration
  const tabs = [
    { id: 'overview', label: 'Security Overview', icon: 'shield' },
    { id: 'highlights', label: 'Key Highlights', icon: 'star' },
    { id: 'controls', label: 'Security Controls', icon: 'view-grid' },
    { id: 'certifications', label: 'Certifications', icon: 'check' },
    { id: 'reports', label: 'Request Reports', icon: 'mail' },
    { id: 'faq', label: 'FAQ', icon: 'chat' },
  ];

  // Quick facts
  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'calendar', color: 'cyan', trend: 'Version 3.0' },
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
    cisoName: "John Anderson",
    cisoEmail: "ciso@supplychainpro.com",
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
      videoUrl: "/videos/soc2.mp4"
    },
    {
      name: "ISO 27001",
      issuer: "International Organization for Standardization",
      description: "Information Security Management System (ISMS) certification.",
      validUntil: "September 2026",
      status: "Active",
      reportUrl: "/security/iso27001-cert.pdf",
      videoUrl: "/videos/iso27001.mp4"
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
      videoUrl: "/videos/access-control.mp4"
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
      videoUrl: "/videos/data-protection.mp4"
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
      videoUrl: "/videos/network-security.mp4"
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
      videoUrl: "/videos/app-security.mp4"
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
      videoUrl: "/videos/incident-response.mp4"
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
      videoUrl: "/videos/physical-security.mp4"
    },
  ], [config?.securityControls]);

  // Testimonials
  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "Global Retail Corp",
      quote: "SupplyChainPro's security posture gave our compliance team full confidence. The SOC 2 Type II report was thorough.",
      rating: 5,
      avatar: "/testimonials/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      quote: "The transparency around their security controls and regular penetration testing meets our strict requirements.",
      rating: 5,
      avatar: "/testimonials/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Legal Counsel",
      quote: "As a legal professional handling sensitive data, I'm impressed with their comprehensive security framework.",
      rating: 5,
      avatar: "/testimonials/emily.jpg"
    }
  ];

  // FAQ data
  const faqs = config?.faqs || [
    {
      question: 'What security certifications does SupplyChainPro hold?',
      answer: 'We maintain SOC 2 Type II, ISO 27001, ISO 27017, ISO 27018, and PCI DSS Level 1 certifications. These are audited annually by independent third-party firms like Ernst & Young.',
      videoUrl: "/videos/security-certifications.mp4"
    },
    {
      question: 'How is my data encrypted?',
      answer: 'We use 256-bit AES encryption for data at rest and TLS 1.3 for data in transit. Encryption keys are managed securely and rotated every 90 days. Enterprise customers can use customer-managed keys (CMK).',
      videoUrl: "/videos/encryption-explained.mp4"
    },
    {
      question: 'Do you perform penetration testing?',
      answer: 'Yes, we conduct quarterly penetration tests by third-party security firms like Bishop Fox. We also perform weekly automated vulnerability scans and maintain a bug bounty program for responsible disclosure.',
      videoUrl: "/videos/pentesting.mp4"
    },
    {
      question: 'How quickly do you notify customers of a breach?',
      answer: 'We commit to notifying affected customers within 24 hours of confirming a personal data breach. Our incident response plan is tested quarterly to ensure we meet this SLA.',
      videoUrl: "/videos/breach-notification.mp4"
    },
    {
      question: 'Where can I access your security reports?',
      answer: 'Security reports, including our SOC 2 Type II report and penetration test summaries, are available to customers under NDA. Please use the Request Reports tab or contact our security team.',
      videoUrl: "/videos/security-reports.mp4"
    },
    {
      question: 'How do I report a security vulnerability?',
      answer: 'Please report security vulnerabilities to security@supplychainpro.com. We will acknowledge receipt within 24 hours and provide regular updates on remediation progress. We have a bug bounty program for qualifying findings.',
      videoUrl: "/videos/report-vulnerability.mp4"
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

  // Handle report request submission
  const handleReportRequestSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!reportRequestName) errors.name = 'Full name is required';
    if (!reportRequestEmail) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(reportRequestEmail)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!reportRequestCompany) errors.company = 'Company name is required';
    if (!reportRequestType) errors.type = 'Please select a report type';

    if (Object.keys(errors).length > 0) {
      setReportRequestErrors(errors);
      return;
    }

    setReportRequestSubmitted(true);
    setTimeout(() => {
      setReportRequestSubmitted(false);
      setReportRequestName('');
      setReportRequestEmail('');
      setReportRequestCompany('');
      setReportRequestType('');
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
      server: <HiOutlineServer className={className} />,
      key: <HiOutlineKey className={className} />,
      fingerprint: <HiOutlineFingerPrint className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      star: <HiOutlineStar className={className} />,
    };
    return icons[iconName] || <HiOutlineShieldCheck className={className} />;
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Security Policy Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-security" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-security)" />
        </svg>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineShieldCheck className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Security Policy"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Security"} <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{config?.title?.highlight || "Policy"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "At SupplyChainPro, security is our top priority. This policy outlines the technical and organizational measures we implement to protect your data."}
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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
            >
              {tab.icon === 'shield' ? <HiOutlineShieldCheck className="w-4 h-4" /> :
                tab.icon === 'star' ? <HiOutlineStar className="w-4 h-4" /> :
                  tab.icon === 'view-grid' ? <HiOutlineViewGrid className="w-4 h-4" /> :
                    tab.icon === 'check' ? <HiOutlineCheckCircle className="w-4 h-4" /> :
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

            {/* Security Leadership Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Security Leadership</h2>
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                  <HiOutlineUser className="w-8 h-8 text-cyan-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{company.cisoName}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Chief Information Security Officer (CISO)</p>
                  <p className="text-xs text-gray-500 mt-1">20+ years of security experience | Former CISO at Fortune 500</p>
                </div>
              </div>
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

            {/* Testimonials */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-4">What Our Customers Say</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                        <HiOutlineUserCircle className="w-5 h-5 text-cyan-600" />
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
                      {control.videoUrl && (
                        <button
                          onClick={() => { setCurrentVideo(control.videoUrl); setShowVideoModal(true); }}
                          className="mt-3 inline-flex items-center gap-2 text-cyan-600 text-sm font-semibold hover:underline"
                        >
                          <HiOutlinePlay className="w-4 h-4" />
                          Watch Overview
                        </button>
                      )}
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
                    <div className="flex gap-2">
                      {cert.videoUrl && (
                        <button
                          onClick={() => { setCurrentVideo(cert.videoUrl); setShowVideoModal(true); }}
                          className="text-cyan-600 text-xs font-semibold hover:underline flex items-center gap-1"
                        >
                          <HiOutlinePlay className="w-3 h-3" />
                          Watch
                        </button>
                      )}
                      {cert.reportUrl && (
                        <button className="text-cyan-600 text-xs font-semibold hover:underline flex items-center gap-1">
                          View Report <HiOutlineExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Request Reports Tab */}
        {activeTab === 'reports' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <HiOutlineDocumentText className="w-12 h-12 mx-auto text-cyan-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request Security Reports</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below to request access to our security reports, including SOC 2 Type II and penetration testing summaries.
              </p>
            </div>

            {reportRequestSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We have received your request and will send you access to the requested reports within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReportRequestSubmit} className="max-w-lg mx-auto">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={reportRequestName}
                      onChange={(e) => setReportRequestName(e.target.value)}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 ${reportRequestErrors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                    />
                    {reportRequestErrors.name && <p className="text-red-500 text-xs mt-1">{reportRequestErrors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={reportRequestEmail}
                      onChange={(e) => setReportRequestEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 ${reportRequestErrors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                    />
                    {reportRequestErrors.email && <p className="text-red-500 text-xs mt-1">{reportRequestErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={reportRequestCompany}
                      onChange={(e) => setReportRequestCompany(e.target.value)}
                      placeholder="Enter your company name"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 ${reportRequestErrors.company ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                    />
                    {reportRequestErrors.company && <p className="text-red-500 text-xs mt-1">{reportRequestErrors.company}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Report Type *
                    </label>
                    <select
                      value={reportRequestType}
                      onChange={(e) => setReportRequestType(e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 ${reportRequestErrors.type ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                    >
                      <option value="">Select a report type</option>
                      <option value="SOC 2 Type II">SOC 2 Type II Report</option>
                      <option value="ISO 27001">ISO 27001 Certificate</option>
                      <option value="Penetration Testing Summary">Penetration Testing Summary</option>
                      <option value="All Security Reports">All Security Reports</option>
                    </select>
                    {reportRequestErrors.type && <p className="text-red-500 text-xs mt-1">{reportRequestErrors.type}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Request Reports
                    <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    By submitting this request, you confirm that you are authorized to request these reports on behalf of your organization.
                    Reports will be shared under a standard NDA.
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
                        <span className="text-cyan-500 text-sm flex items-center gap-1">
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
                          className="inline-flex items-center gap-2 text-cyan-600 text-sm font-semibold hover:underline"
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

export default SecurityPolicySection3;