// page/frontend/Legal/PrivacyPolicySection/PrivacyPolicySection1.jsx

// React
import { useState } from 'react';

// Icons
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineDatabase,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineDocumentText,
  HiOutlineMail,
  HiOutlineCheckCircle,
  HiOutlineUser,
  HiOutlineOfficeBuilding,
  HiOutlineScale,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCreditCard,
  HiOutlineClipboardList,
  HiOutlineTrash,
  HiOutlineRefresh,
  HiOutlineBell,
} from 'react-icons/hi';
import { HiOutlineShieldExclamation, HiOutlineUserGroup } from 'react-icons/hi2';

const PrivacyPolicySection1 = ({ config }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Navigation sections
  const sections = config?.sections || [
    { id: 'introduction', label: 'Introduction', icon: 'document' },
    { id: 'information-collection', label: 'Information We Collect', icon: 'database' },
    { id: 'usage-of-information', label: 'How We Use Your Information', icon: 'chip' },
    { id: 'data-sharing', label: 'Data Sharing & Disclosure', icon: 'globe' },
    { id: 'data-security', label: 'Data Security', icon: 'shield' },
    { id: 'user-rights', label: 'Your Rights & Choices', icon: 'user' },
    { id: 'cookies', label: 'Cookies & Tracking', icon: 'eye' },
    { id: 'children-privacy', label: 'Children\'s Privacy', icon: 'user-group' },
    { id: 'international-transfer', label: 'International Data Transfers', icon: 'location' },
    { id: 'policy-updates', label: 'Updates to This Policy', icon: 'refresh' },
    { id: 'contact-us', label: 'Contact Us', icon: 'mail' },
  ];

  // Company information
  const company = config?.company || {
    name: "SupplyChainPro Inc.",
    address: "123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105",
    email: "privacy@supplychainpro.com",
    phone: "+1 (800) 555-0123",
    dpo: "Data Protection Officer: Dr. Sarah Chen",
    registration: "California Consumer Privacy Act (CCPA) compliant",
    certifications: ["SOC 2 Type II", "ISO 27001", "GDPR Ready"]
  };

  // Data collection categories
  const dataCollectionCategories = config?.dataCollectionCategories || [
    {
      title: "Personal Information",
      icon: "user",
      items: [
        "Full name and contact information (email address, phone number)",
        "Billing and shipping addresses",
        "Company name and job title",
        "Government-issued ID for verification purposes"
      ]
    },
    {
      title: "Account Information",
      icon: "briefcase",
      items: [
        "Username and password (encrypted)",
        "Profile preferences and settings",
        "Account activity logs",
        "Team member associations and permissions"
      ]
    },
    {
      title: "Supply Chain Data",
      icon: "clipboard",
      items: [
        "Inventory levels and product information",
        "Shipment tracking details and locations",
        "Supplier and customer information",
        "Order history and transaction records"
      ]
    },
    {
      title: "Technical Information",
      icon: "chip",
      items: [
        "Device information (model, OS version, unique device identifiers)",
        "IP address and network information",
        "App usage statistics and crash reports",
        "Browser type and settings"
      ]
    },
    {
      title: "Location Information",
      icon: "location",
      items: [
        "Precise GPS location (with your consent for shipment tracking)",
        "Approximate location based on IP address",
        "Warehouse and facility check-in/out locations"
      ]
    },
    {
      title: "Payment Information",
      icon: "credit-card",
      items: [
        "Payment method details (processed by secure third-party payment processors)",
        "Billing history and invoices",
        "Subscription plan information"
      ]
    }
  ];

  // Data usage purposes
  const dataUsagePurposes = config?.dataUsagePurposes || [
    {
      title: "Service Delivery",
      description: "To provide, maintain, and improve our supply chain management services",
      items: [
        "Process shipments and track inventory",
        "Generate analytics and reports",
        "Sync data across devices",
        "Provide customer support"
      ]
    },
    {
      title: "Communication",
      description: "To communicate with you about your account and our services",
      items: [
        "Send important updates about your shipments",
        "Respond to support inquiries",
        "Notify you about service changes",
        "Share relevant product announcements"
      ]
    },
    {
      title: "Security & Compliance",
      description: "To protect our services and comply with legal obligations",
      items: [
        "Detect and prevent fraud or unauthorized access",
        "Maintain audit logs for compliance",
        "Enforce our terms of service",
        "Comply with legal and regulatory requirements"
      ]
    },
    {
      title: "Improvement & Development",
      description: "To analyze usage and improve our platform",
      items: [
        "Identify usage trends and patterns",
        "Develop new features and functionalities",
        "Optimize app performance",
        "Conduct research and analytics"
      ]
    }
  ];

  // Data sharing scenarios
  const dataSharingScenarios = config?.dataSharingScenarios || [
    {
      title: "Service Providers",
      icon: "building",
      items: [
        "Cloud hosting providers (AWS, Google Cloud)",
        "Payment processors (Stripe, PayPal)",
        "Customer support platforms",
        "Analytics and monitoring services"
      ],
      note: "These providers are contractually obligated to protect your data and can only use it for specified services."
    },
    {
      title: "Business Partners",
      icon: "office-building",
      items: [
        "Logistics and shipping carriers",
        "Supplier and vendor platforms",
        "Integration partners (ERP, WMS systems)"
      ],
      note: "Data shared is limited to what's necessary for supply chain operations."
    },
    {
      title: "Legal Compliance",
      icon: "scale",
      items: [
        "Law enforcement or government agencies when required by law",
        "Legal proceedings to protect our rights",
        "Regulatory compliance audits"
      ],
      note: "We will notify you of such requests unless prohibited by law."
    }
  ];

  // User rights
  const userRights = config?.userRights || [
    {
      title: "Right to Access",
      description: "You can request a copy of all personal data we hold about you.",
      icon: "eye",
      timeframe: "Respond within 30 days"
    },
    {
      title: "Right to Rectification",
      description: "You can correct inaccurate or incomplete information.",
      icon: "document",
      timeframe: "Immediate update available"
    },
    {
      title: "Right to Deletion",
      description: "You can request deletion of your data (subject to legal retention requirements).",
      icon: "trash",
      timeframe: "90 days for complete removal"
    },
    {
      title: "Right to Restrict Processing",
      description: "You can limit how we use your data in certain circumstances.",
      icon: "shield-exclamation",
      timeframe: "Within 15 days"
    },
    {
      title: "Right to Data Portability",
      description: "You can receive your data in a structured, machine-readable format.",
      icon: "database",
      timeframe: "30 days for export"
    },
    {
      title: "Right to Object",
      description: "You can object to specific data processing activities.",
      icon: "refresh",
      timeframe: "Within 15 days"
    }
  ];

  // Cookie information
  const cookieTypes = config?.cookieTypes || [
    {
      name: "Essential Cookies",
      description: "Required for basic app functionality and security.",
      duration: "Session",
      required: true
    },
    {
      name: "Preference Cookies",
      description: "Remember your settings and preferences.",
      duration: "1 year",
      required: false
    },
    {
      name: "Analytics Cookies",
      description: "Help us understand how you use the app.",
      duration: "2 years",
      required: false
    },
    {
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements.",
      duration: "90 days",
      required: false
    }
  ];

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      database: <HiOutlineDatabase className={className} />,
      chip: <HiOutlineChip className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      user: <HiOutlineUser className={className} />,
      'user-group': <HiOutlineUserGroup className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      'credit-card': <HiOutlineCreditCard className={className} />,
      clipboard: <HiOutlineClipboardList className={className} />,
      briefcase: <HiOutlineBriefcase className={className} />,
      building: <HiOutlineOfficeBuilding className={className} />,
      'office-building': <HiOutlineOfficeBuilding className={className} />,
      scale: <HiOutlineScale className={className} />,
      eye: <HiOutlineEye className={className} />,
      trash: <HiOutlineTrash className={className} />,
      'shield-exclamation': <HiOutlineShieldExclamation className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      mail: <HiOutlineMail className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
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
      aria-label="Privacy Policy Section"
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
              {config?.badge || "Legal & Compliance"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Privacy"} <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{config?.title?.highlight || "Policy"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "At SupplyChainPro, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our mobile application and services."}
          </p>

          {/* Last Updated Badge */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            <HiOutlineCalendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Last Updated: {lastUpdated}
            </span>
          </div>
        </div>

        {/* Navigation Sidebar & Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sticky Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <HiOutlineLockClosed className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">On this page</h3>
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

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction Section */}
            <div id="introduction" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineDocumentText className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Introduction</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Welcome to SupplyChainPro's Privacy Policy. Your privacy is critically important to us. This Privacy Policy applies to all information collected through our mobile application ("App"), website, and related services (collectively, the "Services").
                  </p>
                  <p>
                    By using our Services, you agree to the collection and use of information in accordance with this policy. We are committed to protecting your personal data and being transparent about how we handle it.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Key Principle:</strong> We only collect data that is necessary to provide and improve our supply chain management services. We never sell your personal information to third parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Collection Section */}
            <div id="information-collection" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineDatabase className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {dataCollectionCategories.map((category, idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        {getIcon(category.icon, "w-5 h-5 text-blue-600")}
                        <h3 className="font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Usage of Information Section */}
            <div id="usage-of-information" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineChip className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How We Use Your Information</h2>
                </div>
                <div className="space-y-6">
                  {dataUsagePurposes.map((purpose, idx) => (
                    <div key={idx} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{purpose.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{purpose.description}</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {purpose.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Sharing Section */}
            <div id="data-sharing" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineGlobe className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Sharing & Disclosure</h2>
                </div>
                <div className="space-y-6">
                  {dataSharingScenarios.map((scenario, idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        {getIcon(scenario.icon, "w-5 h-5 text-blue-600")}
                        <h3 className="font-semibold text-gray-900 dark:text-white">{scenario.title}</h3>
                      </div>
                      <ul className="space-y-2 mb-3">
                        {scenario.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-gray-500 italic">{scenario.note}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm text-yellow-800 dark:text-yellow-300">
                    <strong>Important:</strong> We do not sell your personal information to third parties. Any data sharing is strictly for service delivery, legal compliance, or with your explicit consent.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security Section */}
            <div id="data-security" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Security</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <HiOutlineLockClosed className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Encryption</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">256-bit AES encryption for data at rest and TLS 1.3 for data in transit</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <HiOutlineRefresh className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Regular Backups</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Automated daily backups with 30-day retention</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <HiOutlineBell className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Monitoring</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">24/7 security monitoring and intrusion detection</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <HiOutlineUserGroup className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Access Control</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Role-based access and multi-factor authentication</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {company.certifications.map((cert, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-3 h-3 text-green-500" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* User Rights Section */}
            <div id="user-rights" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineUser className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Rights & Choices</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {userRights.map((right, idx) => (
                    <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        {getIcon(right.icon, "w-5 h-5 text-blue-600")}
                        <h3 className="font-semibold text-gray-900 dark:text-white">{right.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{right.description}</p>
                      <span className="inline-block text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500">
                        Response: {right.timeframe}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    To exercise any of these rights, please contact us at <strong>{company.email}</strong>. We will respond to your request within 30 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies Section */}
            <div id="cookies" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineEye className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cookies & Tracking Technologies</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage, and personalize content.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 dark:bg-gray-900/50">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Type</th>
                        <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Description</th>
                        <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Duration</th>
                        <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieTypes.map((cookie, idx) => (
                        <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-3 font-medium text-gray-900 dark:text-white">{cookie.name}</td>
                          <td className="p-3 text-gray-600 dark:text-gray-400">{cookie.description}</td>
                          <td className="p-3 text-gray-600 dark:text-gray-400">{cookie.duration}</td>
                          <td className="p-3">
                            {cookie.required ? (
                              <span className="inline-flex items-center gap-1 text-green-600">
                                <HiOutlineCheckCircle className="w-4 h-4" /> Always
                              </span>
                            ) : (
                              <span className="text-gray-500">Opt-in required</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div id="children-privacy" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineUserGroup className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Children's Privacy</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div id="international-transfer" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineLocationMarker className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">International Data Transfers</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) for transfers from the EEA, UK, or Switzerland.
                </p>
              </div>
            </div>

            {/* Policy Updates */}
            <div id="policy-updates" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineRefresh className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Updates to This Policy</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <HiOutlineBell className="w-4 h-4" />
                  <span>Significant changes will be communicated via email or in-app notification.</span>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div id="contact-us" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-400">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{company.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{company.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Email:</strong> <a href={`mailto:${company.email}`} className="text-blue-600 hover:underline">{company.email}</a>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Phone:</strong> {company.phone}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>DPO:</strong> {company.dpo}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-center pt-2">
                    {company.registration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default PrivacyPolicySection1;