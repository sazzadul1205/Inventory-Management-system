// page/frontend/Legal/TermsOfServiceSection/TermsOfServiceSection1.jsx

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
  HiOutlineCreditCard,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineX,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from 'react-icons/hi';
import { HiOutlineUserGroup, HiOutlineDocumentDuplicate } from 'react-icons/hi2';

const TermsOfServiceSection1 = ({ config }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSection, setExpandedSection] = useState(null);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");
  const [effectiveDate] = useState(config?.effectiveDate || "April 8, 2026");

  // Navigation sections
  const sections = config?.sections || [
    { id: 'introduction', label: 'Introduction', icon: 'document' },
    { id: 'acceptance', label: 'Acceptance of Terms', icon: 'check' },
    { id: 'eligibility', label: 'Eligibility', icon: 'user' },
    { id: 'account-registration', label: 'Account Registration', icon: 'briefcase' },
    { id: 'license-grant', label: 'License to Use', icon: 'lock' },
    { id: 'user-obligations', label: 'User Obligations', icon: 'shield' },
    { id: 'prohibited-activities', label: 'Prohibited Activities', icon: 'scale' },
    { id: 'intellectual-property', label: 'Intellectual Property', icon: 'document' },
    { id: 'subscriptions-fees', label: 'Subscriptions & Fees', icon: 'credit-card' },
    { id: 'data-privacy', label: 'Data & Privacy', icon: 'database' },
    { id: 'termination', label: 'Termination', icon: 'x' },
    { id: 'limitations-liability', label: 'Limitations of Liability', icon: 'shield' },
    { id: 'indemnification', label: 'Indemnification', icon: 'scale' },
    { id: 'governing-law', label: 'Governing Law', icon: 'globe' },
    { id: 'changes-to-terms', label: 'Changes to Terms', icon: 'clock' },
    { id: 'contact-us', label: 'Contact Us', icon: 'mail' },
  ];

  // Company information
  const company = config?.company || {
    name: "SupplyChainPro Inc.",
    legalName: "SupplyChainPro Inc., a Delaware corporation",
    address: "123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105",
    email: "legal@supplychainpro.com",
    phone: "+1 (800) 555-0123",
    registration: "Registered in Delaware, USA",
    ein: "XX-XXXXXXX"
  };

  // Quick stats / facts
  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'clock' },
    { label: 'Effective Date', value: effectiveDate, icon: 'calendar' },
    { label: 'Governing Law', value: 'California, USA', icon: 'globe' },
    { label: 'Free Trial', value: '14 days', icon: 'check' },
  ];

  // Subscription plans
  const subscriptionPlans = config?.subscriptionPlans || [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      features: ["Up to 5 users", "1,000 shipments/month", "Basic analytics", "Email support"],
      billingCycle: "Monthly"
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      features: ["Up to 20 users", "10,000 shipments/month", "Advanced analytics", "Priority support", "API access"],
      billingCycle: "Monthly or Annual",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: ["Unlimited users", "Unlimited shipments", "Custom analytics", "24/7 dedicated support", "SLA agreement"],
      billingCycle: "Annual"
    }
  ];

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      scale: <HiOutlineScale className={className} />,
      user: <HiOutlineUser className={className} />,
      'user-group': <HiOutlineUserGroup className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      database: <HiOutlineDatabase className={className} />,
      'credit-card': <HiOutlineCreditCard className={className} />,
      clock: <HiOutlineClock className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      mail: <HiOutlineMail className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      x: <HiOutlineX className={className} />,
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

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Terms of Service Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-indigo-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-indigo-100 dark:border-gray-700">
            <HiOutlineScale className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              {config?.badge || "Legal Agreement"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Terms of"} <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Service"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "These Terms of Service govern your use of SupplyChainPro's mobile application, website, and related services. Please read them carefully."}
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
                onClick={() => setExpandedSection(expandedSection === 'mobile-nav' ? null : 'mobile-nav')}
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
                    Welcome to SupplyChainPro ("Company," "we," "our," "us"). These Terms of Service ("Terms") govern your access to and use of our mobile application, website, and related services (collectively, the "Services").
                  </p>
                  <p>
                    By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800">
                    <p className="text-sm text-indigo-800 dark:text-indigo-300">
                      <strong>Important:</strong> These Terms contain important information about your rights and obligations, including limitations of liability and dispute resolution provisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acceptance of Terms */}
            <div id="acceptance" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineCheckCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    By creating an account, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, including any future modifications.
                  </p>
                  <p>
                    If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                  </p>
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <HiOutlineCheckCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                      Your continued use of our Services following any changes constitutes your acceptance of those changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div id="eligibility" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineUser className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Eligibility</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    To use our Services, you must:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Be at least 18 years of age or the age of majority in your jurisdiction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Have the legal capacity to enter into a binding agreement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Not be prohibited from using our Services under applicable laws</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Provide accurate and complete registration information</span>
                    </li>
                  </ul>
                  <p>
                    By using our Services, you represent and warrant that you meet all eligibility requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Account Registration */}
            <div id="account-registration" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineBriefcase className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Account Registration</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    To access certain features of our Services, you must create an account. You agree to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Provide accurate, current, and complete information during registration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Maintain the security of your password and account credentials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Promptly update your information as needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Accept responsibility for all activities that occur under your account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Notify us immediately of any unauthorized use of your account</span>
                    </li>
                  </ul>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <p className="text-sm text-red-800 dark:text-red-300">
                      <strong>Warning:</strong> We reserve the right to suspend or terminate accounts that violate these Terms or provide false information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* License Grant */}
            <div id="license-grant" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineLockClosed className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">License to Use</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Download and install our mobile application on your device</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Access and use our Services for your internal business purposes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Use our API in accordance with our API documentation</span>
                    </li>
                  </ul>
                  <p>
                    This license does not grant you any ownership rights to our Services or intellectual property.
                  </p>
                </div>
              </div>
            </div>

            {/* User Obligations */}
            <div id="user-obligations" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineShieldCheck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Obligations</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    You agree to use our Services responsibly and in compliance with all applicable laws and regulations. You are responsible for:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>All data, content, and information you upload to our Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Maintaining the confidentiality of your account credentials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>All activities that occur under your account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Complying with our acceptable use policies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div id="prohibited-activities" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineScale className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Prohibited Activities</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    You may not use our Services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our Services. Prohibited activities include:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Violating any applicable laws or regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Attempting to gain unauthorized access to our systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Interfering with other users' use of our Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Reverse engineering or copying our software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Uploading malicious code or harmful content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Reselling or redistributing our Services without authorization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div id="intellectual-property" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineDocumentText className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Intellectual Property</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Our Services and their entire contents, features, and functionality are owned by SupplyChainPro and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You retain ownership of any data or content you submit to our Services. By submitting content, you grant us a license to use, store, and process that content to provide our Services to you.
                  </p>
                  <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <p className="text-sm">
                      <strong>Trademarks:</strong> SupplyChainPro and all related logos are trademarks of SupplyChainPro Inc. You may not use these marks without our prior written consent.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscriptions & Fees */}
            <div id="subscriptions-fees" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineCreditCard className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Subscriptions & Fees</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Certain features of our Services require a paid subscription. By subscribing, you agree to pay all applicable fees as described.
                  </p>

                  {/* Subscription Plans */}
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    {subscriptionPlans.map((plan, idx) => (
                      <div key={idx} className={`border rounded-xl p-4 ${plan.popular ? 'border-indigo-300 bg-indigo-50 dark:bg-indigo-900/20' : 'border-gray-200 dark:border-gray-700'}`}>
                        {plan.popular && (
                          <span className="inline-block text-xs bg-indigo-600 text-white px-2 py-1 rounded-full mb-2">Most Popular</span>
                        )}
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                        <div className="mt-2">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                          <span className="text-sm text-gray-500">/{plan.period}</span>
                        </div>
                        <ul className="mt-3 space-y-1 text-sm">
                          {plan.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-1">
                              <HiOutlineCheckCircle className="w-3 h-3 text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-gray-500 mt-2">{plan.billingCycle}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm mt-4">
                    All fees are non-refundable except as required by law. We may change our fees upon notice. Your continued use after changes constitutes acceptance.
                  </p>
                </div>
              </div>
            </div>

            {/* Data & Privacy */}
            <div id="data-privacy" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineDatabase className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data & Privacy</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Your privacy is important to us. Our <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a> explains how we collect, use, and protect your personal information.
                  </p>
                  <p>
                    By using our Services, you consent to our data practices as described in our Privacy Policy, including the transfer of your data to countries where we operate.
                  </p>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <HiOutlineLockClosed className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      We implement industry-standard security measures to protect your data. However, no method of transmission is 100% secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div id="termination" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineX className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Termination</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    You may terminate your account at any time by following the account deletion process in our app.
                  </p>
                  <p>
                    We may suspend or terminate your access to our Services immediately, without notice, for:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Violation of these Terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Non-payment of fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Illegal or harmful conduct</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineX className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span>Extended inactivity</span>
                    </li>
                  </ul>
                  <p>
                    Upon termination, your right to use our Services will immediately cease, and we may delete your data in accordance with our data retention policies.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitations of Liability */}
            <div id="limitations-liability" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineShieldCheck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Limitations of Liability</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    To the maximum extent permitted by law, SupplyChainPro and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Services.
                  </p>
                  <p>
                    Our total liability for any claims arising from these Terms or your use of our Services shall not exceed the amount you paid us in the past 12 months.
                  </p>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                      Some jurisdictions do not allow certain liability limitations, so some of the above limitations may not apply to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indemnification */}
            <div id="indemnification" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineScale className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Indemnification</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    You agree to indemnify, defend, and hold harmless SupplyChainPro and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Your violation of these Terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Your use of our Services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Your violation of any law or third-party rights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Any content you submit to our Services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div id="governing-law" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineGlobe className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Governing Law</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Any legal action arising from these Terms shall be brought exclusively in the federal or state courts located in San Francisco County, California.
                  </p>
                  <p className="text-sm">
                    <strong>Dispute Resolution:</strong> Before filing a claim, you agree to contact us to attempt to resolve any dispute informally. If we cannot resolve the dispute within 60 days, either party may initiate formal proceedings.
                  </p>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div id="changes-to-terms" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <HiOutlineClock className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Changes to Terms</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify you of material changes by:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Posting the updated Terms on our website</span>
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
                    Your continued use of our Services after the effective date constitutes your acceptance of the modified Terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Us */}
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
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">{company.name}</p>
                    <p className="text-sm">{company.address}</p>
                    <p className="text-sm">
                      <strong>Email:</strong> <a href={`mailto:${company.email}`} className="text-indigo-600 hover:underline">{company.email}</a>
                    </p>
                    <p className="text-sm"><strong>Phone:</strong> {company.phone}</p>
                    <p className="text-xs text-gray-500">{company.registration}</p>
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
                  <h3 className="text-white font-bold text-lg">Download Terms of Service</h3>
                  <button onClick={() => setShowPrintModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <HiOutlineDocumentDuplicate className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Choose your preferred format to download the complete Terms of Service.
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

export default TermsOfServiceSection1;