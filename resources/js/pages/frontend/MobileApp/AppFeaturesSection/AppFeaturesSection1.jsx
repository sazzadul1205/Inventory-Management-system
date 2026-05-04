// page/frontend/MobileApp/AppFeaturesSection/AppFeaturesSection1.jsx

/**
 * App Features Section I - Mobile App Feature Showcase Hub
 *
 * Unique Design Elements:
 * - Stats Cards for App Metrics (Rating, Downloads, Uptime, Support)
 * - Features Grid with Gradient Headers and Expandable Details
 * - Interactive Feature Cards with Click-to-Expand
 * - Feature Highlight Section with Phone Mockup
 * - Key Benefits Checklist with Icons
 * - Download CTAs for App Store and Google Play
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Grid Layout for Features
 * - Phone Mockup with Sample UI Elements
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineBell,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineRefresh,
  HiOutlineCalendar,
  HiOutlineTag,
  HiOutlineChartBar,
  HiOutlineChip,
  HiOutlineAcademicCap,
  HiOutlineGlobe,
  HiOutlineLightningBolt,
  HiOutlineDeviceMobile,
  HiOutlineDesktopComputer,
  HiOutlineWifi,
  HiOutlineDatabase,
  HiOutlineCloudUpload,
  HiOutlineCode,
  HiOutlineDocumentText,
  HiOutlinePhotograph,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineLocationMarker,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineShare,
  HiOutlineDownload,
  HiOutlineBookmark,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineChat,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineChartPie,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineSparkles,
  HiOutlineX,
} from 'react-icons/hi';
import { HiOutlineTrophy, HiOutlineBuildingOffice } from 'react-icons/hi2';

const AppFeaturesSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeFeature, setActiveFeature] = useState(null);

  // ==================== MEMOIZED DATA ====================

  const features = config?.features || [
    {
      title: "Real-time Tracking",
      description: "Track shipments and inventory in real-time with live updates and push notifications.",
      icon: "globe",
      gradient: "from-blue-500 to-blue-600",
      details: [
        "Live shipment tracking with GPS",
        "Inventory level monitoring",
        "Push notifications for status changes",
        "Estimated arrival times"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
    },
    {
      title: "Offline Mode",
      description: "Access critical data and continue working even without an internet connection.",
      icon: "wifi",
      gradient: "from-emerald-500 to-emerald-600",
      details: [
        "Offline data synchronization",
        "Cached inventory information",
        "Scan barcodes offline",
        "Auto-sync when connection restored"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      title: "Barcode Scanning",
      description: "Quickly scan product barcodes using your device's camera for instant information.",
      icon: "photo",
      gradient: "from-purple-500 to-purple-600",
      details: [
        "Support for all major barcode types",
        "Batch scanning capability",
        "Real-time product lookup",
        "Inventory count automation"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
    },
    {
      title: "Analytics Dashboard",
      description: "View key metrics and performance indicators in a mobile-optimized dashboard.",
      icon: "chart",
      gradient: "from-amber-500 to-amber-600",
      details: [
        "Customizable KPIs",
        "Interactive charts",
        "Export reports",
        "Trend analysis"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Team Collaboration",
      description: "Communicate and collaborate with team members directly within the app.",
      icon: "users",
      gradient: "from-rose-500 to-rose-600",
      details: [
        "Team messaging",
        "Task assignment",
        "File sharing",
        "Activity feed"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
    },
    {
      title: "Secure Access",
      description: "Enterprise-grade security with biometric authentication and data encryption.",
      icon: "shield",
      gradient: "from-indigo-500 to-indigo-600",
      details: [
        "Face ID / Fingerprint login",
        "End-to-end encryption",
        "Role-based access control",
        "Session management"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    }
  ];

  const stats = config?.stats || [
    { value: "4.9", label: "App Store Rating", icon: "star" },
    { value: "100K+", label: "Downloads", icon: "download" },
    { value: "99.9%", label: "Uptime", icon: "clock" },
    { value: "24/7", label: "Support", icon: "chat" }
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons and Heroicons 2 sets
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      mobile: <HiOutlineDeviceMobile className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      database: <HiOutlineDatabase className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      code: <HiOutlineCode className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      photo: <HiOutlinePhotograph className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      search: <HiOutlineSearch className={className} />,
      filter: <HiOutlineFilter className={className} />,
      share: <HiOutlineShare className={className} />,
      download: <HiOutlineDownload className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      mail: <HiOutlineMail className={className} />,
      phone: <HiOutlinePhone className={className} />,
      chat: <HiOutlineChat className={className} />,
      user: <HiOutlineUser className={className} />,
      users: <HiOutlineUsers className={className} />,
      chart: <HiOutlineChartPie className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      cog: <HiOutlineCog className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      tag: <HiOutlineTag className={className} />,
      chartBar: <HiOutlineChartBar className={className} />,
      chip: <HiOutlineChip className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      bell: <HiOutlineBell className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      arrow: <HiOutlineArrowRight className={className} />,
      heart: <HiOutlineHeart className={className} />,
      star: <HiOutlineStar className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      x: <HiOutlineX className={className} />,
    };
    return icons[iconName] || <HiOutlineDeviceMobile className={className} />;
  };

  /**
   * Toggle feature expansion
   */
  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="App Features"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          {(typeof config?.badge === 'string' || config?.badge?.show !== false) && (
            <div className={`inline-flex items-center rounded-full px-4 py-2 mb-6 border ${config?.badge?.backgroundColor || 'bg-blue-50 dark:bg-gray-800'} ${config?.badge?.borderColor || 'border-blue-100 dark:border-gray-700'}`}>
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <HiOutlineDeviceMobile className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
                {typeof config?.badge === 'string' ? config.badge : config?.badge?.text || "App Features"}
              </span>
            </div>
          )}

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Powerful"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Features"}
            </span>{' '}
            {config?.title?.suffix || "at Your Fingertips"}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "Our mobile app puts the power of SupplyChainPro in your pocket. Manage your supply chain anytime, anywhere with these powerful features."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                {getIcon(stat.icon, "w-5 h-5 text-blue-600 dark:text-blue-400")}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== FEATURES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => {
            const isExpanded = activeFeature === idx;
            return (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => toggleFeature(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFeature(idx)}
              >
                <div className={`h-1.5 bg-linear-to-r ${feature.gradient}`} />
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {getIcon(feature.icon, "w-7 h-7 text-white")}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{feature.description}</p>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <HiOutlineCheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-500">{isExpanded ? 'Showing details' : `${feature.details.length} key features`}</span>
                    <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300">
                      {isExpanded ? 'Show less' : 'Learn more'}
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== FEATURE HIGHLIGHT WITH PHONE MOCKUP ==================== */}
        <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 py-1 mb-4">
                <HiOutlineSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Feature Highlight</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Everything You Need, Right in Your Pocket
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our mobile app is designed to give you complete control over your supply chain operations, whether you're in the office, warehouse, or on the go.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Syncs automatically across all your devices</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Real-time notifications for critical updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Offline access to essential data</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Download app"
                >
                  <HiOutlineDownload className="w-5 h-5" />
                  Download App
                  <HiOutlineArrowRight className="w-4 h-4" />
                </button>
                <button
                  className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  aria-label="View demo"
                >
                  <HiOutlineDeviceMobile className="w-5 h-5" />
                  View Demo
                </button>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative w-64 h-auto">
                <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gray-900 dark:bg-gray-950 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                    <div className="bg-blue-600 p-3 flex items-center justify-between">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-white text-xs font-medium">SupplyChainPro</span>
                      <div className="w-12" />
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <HiOutlineChartBar className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-lg w-3/4" />
                      <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-lg w-1/2" />
                      <div className="flex gap-2">
                        <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex-1" />
                        <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== DOWNLOAD CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineDeviceMobile className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Download the SupplyChainPro mobile app today and take your supply chain management to the next level.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Download from App Store"
            >
              <HiOutlineDownload className="w-5 h-5" />
              App Store
            </button>
            <button
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Download from Google Play"
            >
              <HiOutlineDownload className="w-5 h-5" />
              Google Play
            </button>
          </div>
        </div>
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
      `}</style>
    </section>
  );
};

export default AppFeaturesSection1;