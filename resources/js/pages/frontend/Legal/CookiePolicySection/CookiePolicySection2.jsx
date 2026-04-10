// page/frontend/Legal/CookiePolicySection/CookiePolicySection2.jsx

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
  HiOutlineExternalLink,
  HiOutlineInformationCircle,
} from 'react-icons/hi';
import { MdOutlineCookie as HiOutlineCookie, } from "react-icons/md";

const CookiePolicySection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('policy');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false,
  });
  const [preferencesSaved, setPreferencesSaved] = useState(false);
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Tabs configuration
  const tabs = [
    { id: 'policy', label: 'Cookie Policy', icon: 'document' },
    { id: 'preferences', label: 'Manage Cookies', icon: 'cookie' },
    { id: 'summary', label: 'Quick Summary', icon: 'view-grid' },
    { id: 'faq', label: 'FAQ', icon: 'chat' },
  ];

  // Quick facts
  const quickFacts = config?.quickFacts || [
    { label: 'Last Updated', value: lastUpdated, icon: 'calendar', color: 'amber', trend: 'Version 2.0' },
    { label: 'Cookie Categories', value: '4', icon: 'chip', color: 'blue', trend: 'Essential, Functional, Analytics, Marketing' },
    { label: 'Third-Party Cookies', value: '4+', icon: 'globe', color: 'purple', trend: 'Google, Mixpanel, Intercom, Stripe' },
    { label: 'Opt-Out Available', value: 'Yes', icon: 'user', color: 'green', trend: 'For non-essential cookies' },
  ];

  // Cookie types with detailed information
  const cookieTypes = useMemo(() => config?.cookieTypes || [
    {
      id: 'essential',
      name: "Essential Cookies",
      icon: "lock",
      description: "These cookies are necessary for our Services to function properly. They enable core functionality such as security, network management, and accessibility.",
      examples: ["Authentication tokens", "Session identifiers", "Security verification", "Load balancing", "CSRF tokens"],
      duration: "Session to 1 year",
      required: true,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: 'functional',
      name: "Functional Cookies",
      icon: "user",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
      examples: ["Language preferences", "Theme settings", "Saved filters", "Recent searches", "Layout preferences"],
      duration: "1 year",
      required: false,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      id: 'analytics',
      name: "Analytics Cookies",
      icon: "chart",
      description: "These cookies help us understand how visitors interact with our Services by collecting and reporting information anonymously.",
      examples: ["Page views", "Click tracking", "Session duration", "User flow analysis", "Heat mapping"],
      duration: "2 years",
      required: false,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      id: 'marketing',
      name: "Marketing Cookies",
      icon: "heart",
      description: "These cookies track your online activity to help us deliver more relevant advertising and limit how many times you see an ad.",
      examples: ["Ad performance", "Retargeting", "Campaign attribution", "Audience segmentation", "Conversion tracking"],
      duration: "90 days",
      required: false,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
  ], [config?.cookieTypes]);

  // Third-party cookies
  const thirdPartyCookies = useMemo(() => config?.thirdPartyCookies || [
    {
      name: "Google Analytics",
      purpose: "Website and app usage analytics",
      dataCollected: ["Page views", "User interactions", "Device information", "Traffic sources", "Geolocation (approx)"],
      optOut: "https://tools.google.com/dlpage/gaoptout",
      policy: "https://policies.google.com/privacy",
      cookieType: "analytics",
    },
    {
      name: "Mixpanel",
      purpose: "Product analytics and user behavior",
      dataCollected: ["Feature usage", "User journeys", "Event tracking", "Retention metrics", "A/B testing data"],
      optOut: "https://mixpanel.com/optout",
      policy: "https://mixpanel.com/legal/privacy-policy/",
      cookieType: "analytics",
    },
    {
      name: "Intercom",
      purpose: "Customer support and messaging",
      dataCollected: ["Chat interactions", "Support tickets", "User identification", "Conversation history", "In-app messages"],
      optOut: "https://www.intercom.com/legal/privacy",
      policy: "https://www.intercom.com/legal/privacy",
      cookieType: "functional",
    },
    {
      name: "Stripe",
      purpose: "Payment processing",
      dataCollected: ["Payment information", "Transaction data", "Fraud prevention", "Billing details", "Card verification"],
      optOut: "N/A (essential for payments)",
      policy: "https://stripe.com/privacy",
      cookieType: "essential",
    },
    {
      name: "LinkedIn Insights",
      purpose: "Marketing and analytics",
      dataCollected: ["Ad performance", "Conversion tracking", "Audience insights", "Campaign attribution"],
      optOut: "https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out",
      policy: "https://www.linkedin.com/legal/privacy-policy",
      cookieType: "marketing",
    },
  ], [config?.thirdPartyCookies]);

  // Cookie purposes
  const cookiePurposes = config?.cookiePurposes || [
    {
      title: "Security & Authentication",
      description: "Protect your account and verify your identity when you log in.",
      icon: "shield",
      color: "blue",
    },
    {
      title: "Performance & Analytics",
      description: "Understand how you use our Services to improve functionality and user experience.",
      icon: "chart",
      color: "purple",
    },
    {
      title: "Preferences & Settings",
      description: "Remember your choices and personalize your experience.",
      icon: "user",
      color: "green",
    },
    {
      title: "Marketing & Advertising",
      description: "Show relevant content and measure campaign effectiveness.",
      icon: "heart",
      color: "orange",
    },
  ];

  // FAQ data
  const faqs = config?.faqs || [
    {
      question: 'How long do cookies stay on my device?',
      answer: 'The duration varies by cookie type. Session cookies are deleted when you close your browser. Persistent cookies remain for a set period (from 90 days to 2 years) unless you delete them manually. You can always clear cookies through your browser settings.'
    },
    {
      question: 'Can I disable cookies completely?',
      answer: 'Yes, you can disable cookies through your browser settings. However, please note that disabling essential cookies will prevent our Services from functioning properly. You may not be able to log in or use core features.'
    },
    {
      question: 'Do you use cookies for tracking across different websites?',
      answer: 'We use analytics cookies that may track your behavior across our own Services, but we do not engage in cross-site tracking for advertising purposes without your explicit consent. Third-party marketing cookies may track your activity across other sites that use the same ad networks.'
    },
    {
      question: 'How do I clear existing cookies?',
      answer: 'You can clear cookies through your browser settings. For Chrome: Settings > Privacy and Security > Clear browsing data > Cookies. For Safari: Preferences > Privacy > Manage Website Data > Remove All. For Firefox: Options > Privacy & Security > Cookies and Site Data > Clear Data.'
    },
    {
      question: 'What happens if I don\'t accept cookies?',
      answer: 'If you decline non-essential cookies, our Services will still function but with reduced functionality. You may lose personalized settings, analytics data won\'t be collected, and you may see more generic advertising.'
    },
    {
      question: 'Do your third-party partners comply with privacy regulations?',
      answer: 'Yes, all our third-party partners are GDPR and CCPA compliant. They sign Data Processing Agreements and are contractually obligated to protect your data. You can review their individual privacy policies via the links provided in our third-party cookies section.'
    }
  ];

  // Filter sections based on search
  const filteredCookieTypes = useMemo(() => {
    if (!searchQuery) return cookieTypes;
    const query = searchQuery.toLowerCase();
    return cookieTypes.filter(cookie =>
      cookie.name.toLowerCase().includes(query) ||
      cookie.description.toLowerCase().includes(query) ||
      cookie.examples.some(e => e.toLowerCase().includes(query))
    );
  }, [cookieTypes, searchQuery]);

  const filteredThirdPartyCookies = useMemo(() => {
    if (!searchQuery) return thirdPartyCookies;
    const query = searchQuery.toLowerCase();
    return thirdPartyCookies.filter(cookie =>
      cookie.name.toLowerCase().includes(query) ||
      cookie.purpose.toLowerCase().includes(query) ||
      cookie.dataCollected.some(d => d.toLowerCase().includes(query))
    );
  }, [thirdPartyCookies, searchQuery]);

  // Handle cookie preference changes
  const handlePreferenceChange = (type) => {
    if (type === 'essential') return;
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Save preferences
  const savePreferences = () => {
    // In a real implementation, save to localStorage or send to server
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setPreferencesSaved(true);
    setTimeout(() => setPreferencesSaved(false), 3000);
  };

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
      'view-grid': <HiOutlineViewGrid className={className} />,
      chat: <HiOutlineBell className={className} />,
      'external-link': <HiOutlineExternalLink className={className} />,
      info: <HiOutlineInformationCircle className={className} />,
    };
    return icons[iconName] || <HiOutlineCookie className={className} />;
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Cookie Policy Center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-200 dark:bg-amber-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-200 dark:bg-orange-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-900/30 rounded-full px-4 py-2 mb-6">
            <HiOutlineCookie className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
              {config?.badge || "Cookie Notice"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Cookie"} <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{config?.title?.highlight || "Policy"}</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {config?.description || "This Cookie Policy explains how SupplyChainPro uses cookies and similar technologies to recognize you when you visit our website and use our mobile application."}
          </p>

          {/* Quick Facts Row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {quickFacts.map((fact, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                <div className={`w-6 h-6 rounded-full bg-${fact.color}-100 dark:bg-${fact.color}-900/30 flex items-center justify-center`}>
                  {getIcon(fact.icon, `w-3 h-3 text-${  fact.color  }-600`)}
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
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
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cookie Policy Tab */}
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
                placeholder="Search cookie types or third-party providers..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* What Are Cookies Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <HiOutlineCookie className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">What Are Cookies?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website or use a mobile application. They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">First-Party Cookies</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Set directly by SupplyChainPro when you visit our Services. They help us remember your preferences and provide core functionality.</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Third-Party Cookies</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Set by external services we integrate with, such as analytics providers, payment processors, and support platforms.</p>
                </div>
              </div>
            </div>

            {/* Cookie Types Grid */}
            <div className="space-y-4 mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Types of Cookies We Use</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {filteredCookieTypes.map((cookie, idx) => (
                  <div key={idx} className={`rounded-xl border ${cookie.borderColor} ${cookie.bgColor} p-5 transition-all duration-300 hover:shadow-md`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg bg-linear-to-r ${cookie.color} flex items-center justify-center`}>
                          {getIcon(cookie.icon, "w-4 h-4 text-white")}
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{cookie.name}</h3>
                      </div>
                      {cookie.required ? (
                        <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                          <HiOutlineLockClosed className="w-3 h-3" />
                          Always Active
                        </span>
                      ) : (
                        <span className="text-xs text-gray-500">Optional</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cookie.description}</p>
                    <div className="mb-2">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Examples:</p>
                      <div className="flex flex-wrap gap-1">
                        {cookie.examples.slice(0, 3).map((example, eIdx) => (
                          <span key={eIdx} className="text-xs bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-400">
                            {example}
                          </span>
                        ))}
                        {cookie.examples.length > 3 && (
                          <span className="text-xs text-gray-400">+{cookie.examples.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Duration: {cookie.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cookie Purposes */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Why We Use Cookies</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {cookiePurposes.map((purpose, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                    <div className={`w-8 h-8 rounded-lg bg-${purpose.color}-100 dark:bg-${purpose.color}-900/30 flex items-center justify-center shrink-0`}>
                      {getIcon(purpose.icon, `w-4 h-4 text-${purpose.color}-600`)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{purpose.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{purpose.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Third-Party Cookies Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We use third-party services that may place cookies on your device. These services help us analyze usage, process payments, and provide customer support.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-900/50">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Provider</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Purpose</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Data Collected</th>
                      <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Opt-Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredThirdPartyCookies.map((cookie, idx) => (
                      <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="p-3 font-medium text-gray-900 dark:text-white">{cookie.name}</td>
                        <td className="p-3 text-gray-600 dark:text-gray-400 text-xs">{cookie.purpose}</td>
                        <td className="p-3 text-gray-600 dark:text-gray-400 text-xs">
                          <div className="flex flex-wrap gap-1">
                            {cookie.dataCollected.slice(0, 2).map((d, dIdx) => (
                              <span key={dIdx} className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">{d}</span>
                            ))}
                            {cookie.dataCollected.length > 2 && (
                              <span className="text-gray-400 text-xs">+{cookie.dataCollected.length - 2}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-3">
                          {cookie.optOut !== "N/A (essential for payments)" ? (
                            <a href={cookie.optOut} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline text-xs flex items-center gap-1">
                              Opt Out
                              <HiOutlineExternalLink className="w-3 h-3" />
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
              {filteredThirdPartyCookies.length === 0 && (
                <div className="text-center py-8">
                  <HiOutlineSearch className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">No third-party cookies match your search.</p>
                </div>
              )}
            </div>
          </>
        )}

        {/* Manage Cookies Tab */}
        {activeTab === 'preferences' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <HiOutlineCookie className="w-12 h-12 mx-auto text-amber-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Manage Your Cookie Preferences</h2>
              <p className="text-gray-600 dark:text-gray-400">
                You can control which cookies you accept. Essential cookies cannot be disabled as they are required for our Services to function properly.
              </p>
            </div>

            {/* Cookie Preference Toggles */}
            <div className="space-y-4 max-w-2xl mx-auto">
              {cookieTypes.map((cookie, idx) => (
                <div key={idx} className={`flex items-center justify-between p-4 rounded-xl ${cookie.bgColor} border ${cookie.borderColor}`}>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-6 h-6 rounded-lg bg-linear-to-r ${cookie.color} flex items-center justify-center`}>
                        {getIcon(cookie.icon, "w-3 h-3 text-white")}
                      </div>
                      <p className="font-semibold text-gray-900 dark:text-white">{cookie.name}</p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 max-w-md">{cookie.description.substring(0, 100)}...</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences[cookie.id]}
                      onChange={() => handlePreferenceChange(cookie.id)}
                      disabled={cookie.required}
                      className="sr-only peer"
                    />
                    <div className={`w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${cookie.required ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600 peer-checked:bg-amber-600'}`} />
                  </label>
                </div>
              ))}
            </div>

            {/* Save Preferences Button */}
            <div className="text-center mt-8">
              <button
                onClick={savePreferences}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <HiOutlineCheckCircle className="w-5 h-5" />
                Save My Preferences
              </button>

              {preferencesSaved && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg inline-block">
                  <p className="text-green-700 dark:text-green-300 text-sm flex items-center gap-2">
                    <HiOutlineCheckCircle className="w-4 h-4" />
                    Your preferences have been saved!
                  </p>
                </div>
              )}
            </div>

            {/* Browser Settings Info */}
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You can also manage cookies through your browser settings. 
                <a href="#" className="text-amber-600 hover:underline ml-1">Learn how →</a>
              </p>
            </div>
          </div>
        )}

        {/* Quick Summary Tab */}
        {activeTab === 'summary' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Summary of Cookie Policy</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {cookieTypes.map((cookie, idx) => (
                <div key={idx} className={`flex items-start gap-3 p-4 rounded-xl ${cookie.bgColor} border ${cookie.borderColor}`}>
                  <div className={`w-8 h-8 rounded-lg bg-linear-to-r ${cookie.color} flex items-center justify-center shrink-0`}>
                    {getIcon(cookie.icon, "w-4 h-4 text-white")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{cookie.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cookie.description.substring(0, 80)}...</p>
                    <p className="text-xs text-gray-500 mt-1">Duration: {cookie.duration}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-center">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                This is a summary only. Please review the full Cookie Policy for complete details about our cookie practices.
              </p>
            </div>
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
            <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Still have questions? Contact our privacy team at{' '}
                <a href="mailto:privacy@supplychainpro.com" className="text-amber-600 font-medium hover:underline">
                  privacy@supplychainpro.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Contact Info Footer */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>SupplyChainPro Inc. | 123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105</p>
          <p className="mt-1">
            <a href="mailto:privacy@supplychainpro.com" className="hover:text-amber-600">privacy@supplychainpro.com</a> | 
            <span className="mx-1">•</span> 
            <a href="#" className="hover:text-amber-600">Cookie settings</a>
          </p>
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

export default CookiePolicySection2;