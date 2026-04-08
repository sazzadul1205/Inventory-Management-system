// page/frontend/MobileApp/OfflineModeSection/OfflineModeSection1.jsx

// React
import { useState } from 'react';

// Icons
import {
  HiOutlineWifi,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineDeviceMobile,
  HiOutlineEye,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineLightningBolt,
  HiOutlineAcademicCap,
  HiOutlineChip,
  HiOutlineDatabase,
  HiOutlineCloudUpload,
  HiOutlineLocationMarker,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineRefresh,
  HiOutlineCalendar,
  HiOutlineTag,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineChat,
  HiOutlineSparkles,
  HiOutlineX,
  HiOutlineQrcode,
  HiOutlinePhotograph,
  HiOutlineVideoCamera,
  HiOutlineMicrophone
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const OfflineModeSection1 = ({ config }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Icon mapping function
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      wifi: <HiOutlineWifi className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      star: <HiOutlineStar className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      clock: <HiOutlineClock className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      eye: <HiOutlineEye className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      chip: <HiOutlineChip className={className} />,
      database: <HiOutlineDatabase className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      bell: <HiOutlineBell className={className} />,
      cog: <HiOutlineCog className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      tag: <HiOutlineTag className={className} />,
      download: <HiOutlineDownload className={className} />,
      share: <HiOutlineShare className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      mail: <HiOutlineMail className={className} />,
      phone: <HiOutlinePhone className={className} />,
      chat: <HiOutlineChat className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      x: <HiOutlineX className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      photo: <HiOutlinePhotograph className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />
    };
    return icons[iconName] || <HiOutlineWifi className={className} />;
  };

  // Features
  const features = config?.features || [
    {
      title: "Offline Data Access",
      description: "Access critical data like inventory levels, shipment status, and customer information even without internet connection.",
      icon: "database",
      color: "from-blue-500 to-blue-600",
      details: [
        "View cached inventory data",
        "Access shipment information",
        "Review customer details",
        "Check product specifications"
      ]
    },
    {
      title: "Offline Scanning",
      description: "Continue scanning barcodes and QR codes even when offline. Data is stored locally and synced when connection returns.",
      icon: "qrcode",
      color: "from-green-500 to-green-600",
      details: [
        "Scan barcodes offline",
        "Batch scanning support",
        "Local data storage",
        "Auto-sync when online"
      ]
    },
    {
      title: "Offline Order Management",
      description: "Create and manage orders offline. All changes are queued and synchronized automatically.",
      icon: "tag",
      color: "from-purple-500 to-purple-600",
      details: [
        "Create new orders",
        "Update existing orders",
        "Add order items",
        "Sync when connected"
      ]
    },
    {
      title: "Automatic Sync",
      description: "Changes made offline are automatically synchronized when your device reconnects to the internet.",
      icon: "refresh",
      color: "from-orange-500 to-orange-600",
      details: [
        "Background sync",
        "Conflict resolution",
        "Sync status indicators",
        "Manual sync option"
      ]
    },
    {
      title: "Offline Search",
      description: "Search through cached data to find products, shipments, and orders without an internet connection.",
      icon: "search",
      color: "from-red-500 to-red-600",
      details: [
        "Product search",
        "Shipment tracking",
        "Order lookup",
        "Customer search"
      ]
    },
    {
      title: "Data Encryption",
      description: "All offline data is encrypted on your device to ensure security and privacy.",
      icon: "shield",
      color: "from-indigo-500 to-indigo-600",
      details: [
        "AES-256 encryption",
        "Secure local storage",
        "Biometric access",
        "Auto-clear on logout"
      ]
    }
  ];

  // Stats
  const stats = config?.stats || [
    { value: "100%", label: "Uptime Guarantee", icon: "clock" },
    { value: "Auto", label: "Sync", icon: "refresh" },
    { value: "256-bit", label: "Encryption", icon: "shield" },
    { value: "Unlimited", label: "Offline Storage", icon: "database" }
  ];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Offline Mode Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineWifi className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Offline Mode"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Stay Productive"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Anywhere, Anytime"}</span> {config?.title?.suffix || ""}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Our mobile app works seamlessly even without an internet connection. Access critical data, scan barcodes, and manage orders offline — everything syncs automatically when you're back online."}
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                {stat.icon === 'clock' ? <HiOutlineClock className="w-5 h-5 text-blue-600" /> :
                  stat.icon === 'refresh' ? <HiOutlineRefresh className="w-5 h-5 text-blue-600" /> :
                    stat.icon === 'shield' ? <HiOutlineShieldCheck className="w-5 h-5 text-blue-600" /> :
                      <HiOutlineDatabase className="w-5 h-5 text-blue-600" />}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Phone Mockup with Offline Indicator */}
        <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 py-1 mb-4">
                <HiOutlineSparkles className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Work Without Internet</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Never Let Connectivity Stop You
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Whether you're in a warehouse with poor signal, traveling, or experiencing an outage, our offline mode ensures you can keep working.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Seamless transition between online and offline</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Automatic sync when connection is restored</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">No data loss — all changes are saved locally</p>
                </div>
              </div>
              <button
                onClick={() => setShowDemoModal(true)}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <HiOutlineWifi className="w-5 h-5" />
                See How It Works
                <HiOutlineArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-72 h-auto cursor-pointer" onClick={() => setShowDemoModal(true)}>
                <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl animate-pulse" />
                <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                    <div className="bg-blue-600 p-3 flex items-center justify-between">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <span className="text-white text-xs font-medium">Offline Mode</span>
                      <div className="w-12" />
                    </div>
                    <div className="p-4">
                      {/* Offline Status Banner */}
                      <div className="mb-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center gap-2">
                        <HiOutlineWifi className="w-4 h-4 text-yellow-600" />
                        <span className="text-xs text-yellow-700 dark:text-yellow-300">You're offline. Changes will sync when connection returns.</span>
                      </div>

                      {/* Offline Content */}
                      <div className="space-y-3">
                        <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center px-3">
                          <HiOutlineDatabase className="w-5 h-5 text-gray-400 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Inventory Data (Cached)</p>
                            <p className="text-xs text-gray-500">Last synced: 2 minutes ago</p>
                          </div>
                        </div>
                        <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center px-3">
                          <HiOutlineQrcode className="w-5 h-5 text-gray-400 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">3 scans pending sync</p>
                            <p className="text-xs text-gray-500">Will sync when online</p>
                          </div>
                        </div>
                        <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center px-3">
                          <HiOutlineTag className="w-5 h-5 text-gray-400 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">2 orders created offline</p>
                            <p className="text-xs text-gray-500">Queued for submission</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => setActiveFeature(activeFeature === idx ? -1 : idx)}
            >
              <div className={`h-2 bg-linear-to-r ${feature.color}`} />
              <div className="p-6">
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {getIcon(feature.icon, "w-7 h-7 text-white")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{feature.description}</p>
                {activeFeature === idx && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Learn more</span>
                  <HiOutlineArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
          <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-8">How Offline Mode Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data is Cached</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Essential data is automatically cached on your device when you're online.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Work Offline</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Continue working seamlessly — all changes are stored locally.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Auto-Sync</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Changes sync automatically when you're back online — no action needed.</p>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineWifi className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience True Offline Freedom</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Download the app and never let a poor connection stop you from getting work done.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <HiOutlineDownload className="w-5 h-5" />
              App Store
            </button>
            <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
              <HiOutlineDownload className="w-5 h-5" />
              Google Play
            </button>
          </div>
        </div>

        {/* Demo Modal */}
        {showDemoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowDemoModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HiOutlineWifi className="w-5 h-5 text-white" />
                    <h3 className="text-white font-bold text-lg">How Offline Mode Works</h3>
                  </div>
                  <button onClick={() => setShowDemoModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <HiOutlineDatabase className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Data is cached automatically</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Your recent data is stored locally for offline access.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <HiOutlineQrcode className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Actions are queued</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Scans, orders, and updates are stored locally.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                      <HiOutlineRefresh className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Auto-sync when online</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Everything syncs automatically in the background.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <HiOutlineShieldCheck className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Enterprise-grade security</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">All offline data is encrypted on your device.</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Got it
                </button>
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
            `}</style>
    </section>
  );
};

export default OfflineModeSection1;