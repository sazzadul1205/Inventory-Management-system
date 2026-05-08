// page/frontend/Legal/CookiePolicySection/CookiePolicySection1.jsx

/**
 * Cookie Policy Section I - Legal Compliance & Privacy Hub
 *
 * Unique Design Elements:
 * - Interactive Cookie Preference Toggles
 * - Detailed Cookie Type Cards with Examples
 * - Third-Party Cookie Table with Opt-Out Links
 * - Quick Stats Dashboard with Key Metrics
 * - Sticky Navigation Sidebar with Scroll Spy
 * - Mobile-Friendly Accordion Navigation
 * - Animated Background Blur Orbs
 * - Print/Download Modal for Legal Documents
 * - Fully Responsive Layout with Dark Mode Support
 *
 * All icons from react-icons (hi, hi2, md)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useRef, useMemo } from 'react';

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
import { MdOutlineCookie as HiOutlineCookie } from "react-icons/md";

const CookiePolicySection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [preferencesSaved, setPreferencesSaved] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");
  const [cookiePreferences, setCookiePreferences] = useState({ essential: true, functional: true, analytics: false, marketing: false, });

  // ==================== REFS ====================
  const sectionRefs = useRef({});

  // ==================== MEMOIZED DATA ====================
  const sections = useMemo(() => config?.sections || [
    { id: 'introduction', label: 'Introduction', icon: 'document' },
    { id: 'what-are-cookies', label: 'What Are Cookies?', icon: 'cookie' },
    { id: 'types-of-cookies', label: 'Types of Cookies We Use', icon: 'chip' },
    { id: 'cookie-purposes', label: 'Why We Use Cookies', icon: 'chart' },
    { id: 'third-party-cookies', label: 'Third-Party Cookies', icon: 'globe' },
    { id: 'cookie-preferences', label: 'Manage Your Preferences', icon: 'user' },
    { id: 'consent', label: 'Your Consent', icon: 'check' },
    { id: 'policy-updates', label: 'Updates to This Policy', icon: 'clock' },
    { id: 'contact-us', label: 'Contact Us', icon: 'mail' },
  ], [config]);

  const company = config?.company || {
    name: "SupplyChainPro Inc.",
    address: "123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105",
    email: "privacy@supplychainpro.com",
    phone: "+1 (800) 555-0123",
  };

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

  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'calendar' },
    { label: 'Cookie Categories', value: '4', icon: 'chip' },
    { label: 'Third-Party Cookies', value: '4+', icon: 'globe' },
    { label: 'Opt-Out Available', value: 'Yes', icon: 'user' },
  ];

  // ==================== SCROLL SPY EFFECT ====================
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // ==================== HELPER FUNCTIONS ====================
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

  const handlePreferenceChange = (type) => {
    if (type === 'essential') return;
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    setPreferencesSaved(true);
    setTimeout(() => setPreferencesSaved(false), 3000);
  };

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Cookie Policy Section"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-amber-200 dark:bg-amber-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-orange-200 dark:bg-orange-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
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

          {/* ==================== QUICK FACTS ROW ==================== */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {quickFacts.map((fact, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                {getIcon(fact.icon, "w-4 h-4 text-gray-500 dark:text-gray-400")}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>{fact.label}:</strong> {fact.value}
                </span>
              </div>
            ))}
          </div>

          {/* ==================== ACTION BUTTONS ==================== */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors text-sm font-medium"
              aria-label="Download PDF"
            >
              <HiOutlineDownload className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
              aria-label="Print"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* ==================== NAVIGATION SIDEBAR & CONTENT GRID ==================== */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sticky Navigation - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                <HiOutlineCookie className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Contents</h3>
              </div>
              <nav className="space-y-1 max-h-96 overflow-y-auto" aria-label="Cookie policy navigation">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${activeSection === section.id
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    aria-label={`Navigate to ${section.label} section`}
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
                aria-label="Toggle mobile navigation"
              >
                <div className="flex items-center gap-2">
                  <HiOutlineCookie className="w-5 h-5 text-amber-600 dark:text-amber-400" />
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
                      aria-label={`Navigate to ${section.label} section`}
                    >
                      {getIcon(section.icon, "w-4 h-4")}
                      {section.label}
                    </button>
                  ))}
                </nav>
              )}
            </div>
          </div>

          {/* ==================== MAIN CONTENT ==================== */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction Section */}
            <div
              id="introduction"
              ref={el => sectionRefs.current['introduction'] = el}
              className="scroll-mt-24"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineDocumentText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
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
            <div
              id="what-are-cookies"
              ref={el => sectionRefs.current['what-are-cookies'] = el}
              className="scroll-mt-24"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineCookie className="w-5 h-5 text-amber-600 dark:text-amber-400" />
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
            <div
              id="types-of-cookies"
              ref={el => sectionRefs.current['types-of-cookies'] = el}
              className="scroll-mt-24"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineChip className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Types of Cookies We Use</h2>
                </div>
                <div className="space-y-6">
                  {cookieTypes.map((cookie, idx) => (
                    <div key={idx} className="border-l-4 border-amber-500 pl-4">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cookie.name}</h3>
                        {cookie.required ? (
                          <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full">
                            <HiOutlineLockClosed className="w-3 h-3" />
                            Always Active
                          </span>
                        ) : (
                          <span className="text-xs text-gray-500 dark:text-gray-400">Optional</span>
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
                      <p className="text-xs text-gray-500 dark:text-gray-400">Duration: {cookie.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why We Use Cookies Section */}
            <div
              id="cookie-purposes"
              ref={el => sectionRefs.current['cookie-purposes'] = el}
              className="scroll-mt-24"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineChartBar className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why We Use Cookies</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cookiePurposes.map((purpose, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                        {getIcon(purpose.icon, "w-4 h-4 text-amber-600 dark:text-amber-400")}
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
            <div
              id="third-party-cookies"
              ref={el => sectionRefs.current['third-party-cookies'] = el}
              className="scroll-mt-24"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineGlobe className="w-5 h-5 text-amber-600 dark:text-amber-400" />
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
                                <a href={cookie.optOut} target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline text-xs">
                                  Opt Out →
                                </a>
                              ) : (
                                <span className="text-xs text-gray-400 dark:text-gray-500">Essential</span>
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
            <div
              id="cookie-preferences"
              ref={el => sectionRefs.current['cookie-preferences'] = el}
              className="scroll-mt-24"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineUser className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Your Cookie Preferences</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    You can control which cookies you accept. Essential cookies cannot be disabled as they are required for our Services to function properly.
                  </p>

                  {/* Cookie Preference Toggles */}
                  <div className="space-y-3">
                    {cookieTypes.map((cookie, idx) => {
                      const prefKey = cookie.name.toLowerCase().includes('essential') ? 'essential' :
                        cookie.name.toLowerCase().includes('functional') ? 'functional' :
                          cookie.name.toLowerCase().includes('analytics') ? 'analytics' : 'marketing';
                      return (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">{cookie.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{cookie.description.substring(0, 100)}...</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={cookiePreferences[prefKey]}
                              onChange={() => handlePreferenceChange(prefKey)}
                              disabled={cookie.required}
                              className="sr-only peer"
                              aria-label={`Toggle ${cookie.name}`}
                            />
                            <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${cookie.required ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600 peer-checked:bg-amber-600'}`} />
                          </label>
                        </div>
                      );
                    })}
                  </div>

                  {/* Save Preferences Button */}
                  <button
                    onClick={savePreferences}
                    className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    aria-label="Save cookie preferences"
                  >
                    <HiOutlineCheckCircle className="w-5 h-5" />
                    Save Cookie Preferences
                  </button>

                  {preferencesSaved && (
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-center animate-fadeIn">
                      <p className="text-green-700 dark:text-green-300 text-sm">Your preferences have been saved!</p>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    You can also manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our Services.
                  </p>
                </div>
              </div>
            </div>

            {/* Consent Section */}
            <div
              id="consent"
              ref={el => sectionRefs.current['consent'] = el}
              className="scroll-mt-24"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineCheckCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
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
                    <HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800 dark:text-green-300">
                      Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates Section */}
            <div
              id="policy-updates"
              ref={el => sectionRefs.current['policy-updates'] = el}
              className="scroll-mt-24"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineClock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
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
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span>Last Updated: {lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us Section */}
            <div
              id="contact-us"
              ref={el => sectionRefs.current['contact-us'] = el}
              className="scroll-mt-24"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5 text-amber-600 dark:text-amber-400" />
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
                      <strong>Email:</strong> <a href={`mailto:${company.email}`} className="text-amber-600 dark:text-amber-400 hover:underline">{company.email}</a>
                    </p>
                    <p className="text-sm"><strong>Phone:</strong> {company.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== PRINT MODAL ==================== */}
        {showPrintModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowPrintModal(false)}
            role="dialog"
            aria-label="Download Cookie Policy"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-amber-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Download Cookie Policy</h3>
                  <button onClick={() => setShowPrintModal(false)} className="text-white hover:text-gray-200 transition-colors" aria-label="Close modal">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <HiOutlineCookie className="w-12 h-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Choose your preferred format to download the complete Cookie Policy.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors" aria-label="Download as PDF">
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
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