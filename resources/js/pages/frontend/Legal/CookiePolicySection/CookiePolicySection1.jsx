// page/frontend/Legal/CookiePolicySection/CookiePolicySection1.jsx

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
} from 'react-icons/hi';
import { MdOutlineCookie as HiOutlineCookie, } from "react-icons/md";

const CookiePolicySection1 = ({ config }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSection, setExpandedSection] = useState(null);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false,
  });
  const [preferencesSaved, setPreferencesSaved] = useState(false);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Navigation sections
  const sections = config?.sections || [
    { id: 'introduction', label: 'Introduction', icon: 'document' },
    { id: 'what-are-cookies', label: 'What Are Cookies?', icon: 'cookie' },
    { id: 'types-of-cookies', label: 'Types of Cookies We Use', icon: 'chip' },
    { id: 'cookie-purposes', label: 'Why We Use Cookies', icon: 'chart' },
    { id: 'third-party-cookies', label: 'Third-Party Cookies', icon: 'globe' },
    { id: 'cookie-preferences', label: 'Manage Your Preferences', icon: 'user' },
    { id: 'consent', label: 'Your Consent', icon: 'check' },
    { id: 'policy-updates', label: 'Updates to This Policy', icon: 'clock' },
    { id: 'contact-us', label: 'Contact Us', icon: 'mail' },
  ];

  // Company information
  const company = config?.company || {
    name: "SupplyChainPro Inc.",
    address: "123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105",
    email: "privacy@supplychainpro.com",
    phone: "+1 (800) 555-0123",
  };

  // Cookie types
  const cookieTypes = config?.cookieTypes || [
    {
      name: "Essential Cookies",
      icon: "lock",
      description: "These cookies are necessary for our Services to function properly. They enable core functionality such as security, network management, and accessibility.",
      examples: ["Authentication tokens", "Session identifiers", "Security verification", "Load balancing"],
      duration: "Session to 1 year",
      required: true,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Functional Cookies",
      icon: "user",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
      examples: ["Language preferences", "Theme settings", "Saved filters", "Recent searches"],
      duration: "1 year",
      required: false,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Analytics Cookies",
      icon: "chart",
      description: "These cookies help us understand how visitors interact with our Services by collecting and reporting information anonymously.",
      examples: ["Page views", "Click tracking", "Session duration", "User flow analysis"],
      duration: "2 years",
      required: false,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Marketing Cookies",
      icon: "heart",
      description: "These cookies track your online activity to help us deliver more relevant advertising and limit how many times you see an ad.",
      examples: ["Ad performance", "Retargeting", "Campaign attribution", "Audience segmentation"],
      duration: "90 days",
      required: false,
      color: "from-orange-500 to-orange-600",
    },
  ];

  // Third-party cookies
  const thirdPartyCookies = config?.thirdPartyCookies || [
    {
      name: "Google Analytics",
      purpose: "Website and app usage analytics",
      dataCollected: ["Page views", "User interactions", "Device information", "Traffic sources"],
      optOut: "https://tools.google.com/dlpage/gaoptout",
      policy: "https://policies.google.com/privacy",
    },
    {
      name: "Mixpanel",
      purpose: "Product analytics and user behavior",
      dataCollected: ["Feature usage", "User journeys", "Event tracking", "Retention metrics"],
      optOut: "https://mixpanel.com/optout",
      policy: "https://mixpanel.com/legal/privacy-policy/",
    },
    {
      name: "Intercom",
      purpose: "Customer support and messaging",
      dataCollected: ["Chat interactions", "Support tickets", "User identification", "Conversation history"],
      optOut: "https://www.intercom.com/legal/privacy",
      policy: "https://www.intercom.com/legal/privacy",
    },
    {
      name: "Stripe",
      purpose: "Payment processing",
      dataCollected: ["Payment information", "Transaction data", "Fraud prevention", "Billing details"],
      optOut: "N/A (essential for payments)",
      policy: "https://stripe.com/privacy",
    },
  ];

  // Cookie purposes
  const cookiePurposes = config?.cookiePurposes || [
    {
      title: "Security & Authentication",
      description: "Protect your account and verify your identity when you log in.",
      icon: "shield",
    },
    {
      title: "Performance & Analytics",
      description: "Understand how you use our Services to improve functionality and user experience.",
      icon: "chart",
    },
    {
      title: "Preferences & Settings",
      description: "Remember your choices and personalize your experience.",
      icon: "user",
    },
    {
      title: "Marketing & Advertising",
      description: "Show relevant content and measure campaign effectiveness.",
      icon: "heart",
    },
  ];

  // Quick facts
  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'calendar' },
    { label: 'Cookie Categories', value: '4', icon: 'chip' },
    { label: 'Third-Party Cookies', value: '4+', icon: 'globe' },
    { label: 'Opt-Out Available', value: 'Yes', icon: 'user' },
  ];

  // Helper function to render icons
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      document: <HiOutlineDocumentText className={className} />,
      cookie: <HiOutlineCookie className={className} />,
      chip: <HiOutlineChip className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      user: <HiOutlineUser className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      clock: <HiOutlineClock className={className} />,
      mail: <HiOutlineMail className={className} />,
      lock: <HiOutlineLockClosed className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      heart: <HiOutlineHeart className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      scale: <HiOutlineScale className={className} />,
      eye: <HiOutlineEye className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
    };
    return icons[iconName] || <HiOutlineCookie className={className} />;
  };

  // Handle cookie preference changes
  const handlePreferenceChange = (type) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Save preferences
  const savePreferences = () => {
    setPreferencesSaved(true);
    setTimeout(() => setPreferencesSaved(false), 3000);
    // In a real implementation, you would save these preferences to localStorage or send to server
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
      aria-label="Cookie Policy Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-amber-200 dark:bg-amber-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-orange-200 dark:bg-orange-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-amber-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-amber-100 dark:border-gray-700">
            <HiOutlineCookie className="w-4 h-4 text-amber-600 dark:text-amber-400 mr-2" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
              {config?.badge || "Cookie Notice"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Cookie"} <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{config?.title?.highlight || "Policy"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "This Cookie Policy explains how SupplyChainPro uses cookies and similar technologies to recognize you when you visit our website and use our mobile application."}
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors text-sm font-medium"
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
                <HiOutlineCookie className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Contents</h3>
              </div>
              <nav className="space-y-1 max-h-96 overflow-y-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${activeSection === section.id
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-medium'
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
                  <HiOutlineCookie className="w-5 h-5 text-amber-600" />
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
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineDocumentText className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Introduction</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Welcome to SupplyChainPro's Cookie Policy. This policy explains how we use cookies and similar tracking technologies on our website and mobile application.
                  </p>
                  <p>
                    By using our Services, you consent to the use of cookies in accordance with this policy. You can manage your cookie preferences at any time through our cookie consent manager.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-100 dark:border-amber-800">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      <strong>Important:</strong> Essential cookies cannot be disabled as they are necessary for the basic functionality of our Services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Are Cookies Section */}
            <div id="what-are-cookies" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineCookie className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What Are Cookies?</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website or use a mobile application. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                  </p>
                  <p>
                    Cookies can be "persistent" (remain on your device after you close your browser) or "session" (deleted when you close your browser). They help us remember your preferences, analyze how you use our Services, and improve your overall experience.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mt-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">First-Party Cookies</p>
                      <p className="text-sm">Set directly by SupplyChainPro when you visit our Services.</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Third-Party Cookies</p>
                      <p className="text-sm">Set by external services we integrate with, such as analytics providers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Cookies Section */}
            <div id="types-of-cookies" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineChip className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Types of Cookies We Use</h2>
                </div>
                <div className="space-y-6">
                  {cookieTypes.map((cookie, idx) => (
                    <div key={idx} className={`border-l-4 border-${cookie.color.split('-')[1]}-500 pl-4`}>
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cookie.name}</h3>
                        {cookie.required ? (
                          <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                            <HiOutlineLockClosed className="w-3 h-3" />
                            Always Active
                          </span>
                        ) : (
                          <span className="text-xs text-gray-500">Optional</span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{cookie.description}</p>
                      <div className="mb-2">
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Examples:</p>
                        <div className="flex flex-wrap gap-1">
                          {cookie.examples.map((example, eIdx) => (
                            <span key={eIdx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-400">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">Duration: {cookie.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why We Use Cookies Section */}
            <div id="cookie-purposes" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineChartBar className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why We Use Cookies</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cookiePurposes.map((purpose, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                        {getIcon(purpose.icon, "w-4 h-4 text-amber-600")}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{purpose.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{purpose.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Third-Party Cookies Section */}
            <div id="third-party-cookies" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineGlobe className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Third-Party Cookies</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    We use third-party services that may place cookies on your device. These services help us analyze usage, process payments, and provide customer support.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 dark:bg-gray-900/50">
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Provider</th>
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Purpose</th>
                          <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Opt-Out</th>
                        </tr>
                      </thead>
                      <tbody>
                        {thirdPartyCookies.map((cookie, idx) => (
                          <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                            <td className="p-3 font-medium text-gray-900 dark:text-white">{cookie.name}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-400">{cookie.purpose}</td>
                            <td className="p-3">
                              {cookie.optOut !== "N/A (essential for payments)" ? (
                                <a href={cookie.optOut} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline text-xs">
                                  Opt Out →
                                </a>
                              ) : (
                                <span className="text-xs text-gray-400">Essential</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Preferences Section */}
            <div id="cookie-preferences" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineUser className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Your Cookie Preferences</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    You can control which cookies you accept. Essential cookies cannot be disabled as they are required for our Services to function properly.
                  </p>

                  {/* Cookie Preference Toggles */}
                  <div className="space-y-3">
                    {cookieTypes.map((cookie, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{cookie.name}</p>
                          <p className="text-xs text-gray-500">{cookie.description.substring(0, 100)}...</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={cookiePreferences[cookie.name.toLowerCase().includes('essential') ? 'essential' :
                              cookie.name.toLowerCase().includes('functional') ? 'functional' :
                                cookie.name.toLowerCase().includes('analytics') ? 'analytics' : 'marketing']}
                            onChange={() => handlePreferenceChange(
                              cookie.name.toLowerCase().includes('essential') ? 'essential' :
                                cookie.name.toLowerCase().includes('functional') ? 'functional' :
                                  cookie.name.toLowerCase().includes('analytics') ? 'analytics' : 'marketing'
                            )}
                            disabled={cookie.required}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${cookie.required ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600 peer-checked:bg-amber-600'}`} />
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Save Preferences Button */}
                  <button
                    onClick={savePreferences}
                    className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    <HiOutlineCheckCircle className="w-5 h-5" />
                    Save Cookie Preferences
                  </button>

                  {preferencesSaved && (
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-center">
                      <p className="text-green-700 dark:text-green-300 text-sm">Your preferences have been saved!</p>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 text-center mt-4">
                    You can also manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our Services.
                  </p>
                </div>
              </div>
            </div>

            {/* Consent Section */}
            <div id="consent" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineCheckCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Consent</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    When you first visit our website or use our app, we will display a cookie banner asking for your consent to place non-essential cookies on your device.
                  </p>
                  <p>
                    By clicking "Accept All Cookies" or continuing to use our Services, you consent to our use of cookies as described in this policy. You can change your mind at any time by adjusting your preferences above.
                  </p>
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <HiOutlineCheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800 dark:text-green-300">
                      Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates Section */}
            <div id="policy-updates" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineClock className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Updates to This Policy</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                  </p>
                  <p>
                    We encourage you to review this policy periodically for any changes. Your continued use of our Services after the effective date constitutes your acceptance of the updated policy.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span>Last Updated: {lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us Section */}
            <div id="contact-us" className="scroll-mt-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                </div>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <p>
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">{company.name}</p>
                    <p className="text-sm">{company.address}</p>
                    <p className="text-sm">
                      <strong>Email:</strong> <a href={`mailto:${company.email}`} className="text-amber-600 hover:underline">{company.email}</a>
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
              <div className="bg-amber-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Download Cookie Policy</h3>
                  <button onClick={() => setShowPrintModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <HiOutlineCookie className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Choose your preferred format to download the complete Cookie Policy.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
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

export default CookiePolicySection1;