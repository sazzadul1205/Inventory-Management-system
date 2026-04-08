// page/frontend/MobileApp/BarcodeScanningSection/BarcodeScanningSection1.jsx

// React
import { useState } from 'react';

// Icons
import {
  HiOutlineQrcode,
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
  HiOutlineWifi,
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
  HiOutlinePhotograph,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineX
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const BarcodeScanningSection1 = ({ config }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showScanModal, setShowScanModal] = useState(false);
  const [scannedCode, setScannedCode] = useState('');

  // Icon mapping function
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      qrcode: <HiOutlineQrcode className={className} />,
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
      wifi: <HiOutlineWifi className={className} />,
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
      photo: <HiOutlinePhotograph className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      x: <HiOutlineX className={className} />
    };
    return icons[iconName] || <HiOutlineQrcode className={className} />;
  };

  // Features
  const features = config?.features || [
    {
      title: "Instant Barcode Recognition",
      description: "Scan any barcode type instantly with your device's camera. Supports UPC, EAN, Code 128, QR codes, and more.",
      icon: "qrcode",
      color: "from-blue-500 to-blue-600",
      details: [
        "Supports 20+ barcode formats",
        "Real-time recognition",
        "Works in low light conditions",
        "Auto-focus and zoom capabilities"
      ]
    },
    {
      title: "Batch Scanning Mode",
      description: "Scan multiple items in rapid succession for inventory counts and receiving operations.",
      icon: "bolt",
      color: "from-green-500 to-green-600",
      details: [
        "Continuous scanning mode",
        "Audible feedback for each scan",
        "Batch count tracking",
        "Export scan history"
      ]
    },
    {
      title: "Product Information Lookup",
      description: "Get instant product details including pricing, stock levels, and location data.",
      icon: "database",
      color: "from-purple-500 to-purple-600",
      details: [
        "Real-time inventory data",
        "Pricing and cost information",
        "Warehouse location mapping",
        "Product images and descriptions"
      ]
    },
    {
      title: "Offline Scanning",
      description: "Continue scanning even without an internet connection. Data syncs automatically when back online.",
      icon: "wifi",
      color: "from-orange-500 to-orange-600",
      details: [
        "Works without internet",
        "Local data storage",
        "Automatic sync on reconnect",
        "No data loss guarantee"
      ]
    },
    {
      title: "Custom Actions",
      description: "Configure custom actions for scanned items like update inventory, create orders, or generate labels.",
      icon: "cog",
      color: "from-red-500 to-red-600",
      details: [
        "Workflow automation",
        "Custom rule engine",
        "Integration with existing systems",
        "One-tap actions"
      ]
    },
    {
      title: "Scan History",
      description: "Access your complete scan history with timestamps, locations, and user information.",
      icon: "clock",
      color: "from-indigo-500 to-indigo-600",
      details: [
        "Unlimited history retention",
        "Search and filter capabilities",
        "Export to CSV/Excel",
        "Audit trail for compliance"
      ]
    }
  ];

  // Stats
  const stats = config?.stats || [
    { value: "20+", label: "Barcode Formats", icon: "qrcode" },
    { value: "10K+", label: "Scans per Day", icon: "bolt" },
    { value: "99.9%", label: "Accuracy Rate", icon: "check" },
    { value: "<1s", label: "Scan Time", icon: "clock" }
  ];

  // Barcode types supported
  const barcodeTypes = config?.barcodeTypes || [
    { name: "UPC-A", icon: "qrcode", color: "bg-blue-100 text-blue-700" },
    { name: "EAN-13", icon: "qrcode", color: "bg-green-100 text-green-700" },
    { name: "Code 128", icon: "qrcode", color: "bg-purple-100 text-purple-700" },
    { name: "QR Code", icon: "qrcode", color: "bg-orange-100 text-orange-700" },
    { name: "Data Matrix", icon: "qrcode", color: "bg-red-100 text-red-700" },
    { name: "PDF417", icon: "qrcode", color: "bg-indigo-100 text-indigo-700" }
  ];

  // Simulate scan
  const handleScan = () => {
    setScannedCode(`PROD-${Math.random().toString(36).substring(2, 10).toUpperCase()}`);
    setShowScanModal(true);
    setTimeout(() => setShowScanModal(false), 2000);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Barcode Scanning Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineQrcode className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Barcode Scanning"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Scan, Track, and"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Manage"}</span> {config?.title?.suffix || "with Ease"}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Powerful barcode scanning capabilities built into our mobile app. Scan products instantly, update inventory, and streamline warehouse operations."}
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                {stat.icon === 'qrcode' ? <HiOutlineQrcode className="w-5 h-5 text-blue-600" /> :
                  stat.icon === 'bolt' ? <HiOutlineLightningBolt className="w-5 h-5 text-blue-600" /> :
                    stat.icon === 'check' ? <HiOutlineCheckCircle className="w-5 h-5 text-blue-600" /> :
                      <HiOutlineClock className="w-5 h-5 text-blue-600" />}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Phone Mockup with Scanning Animation */}
        <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 py-1 mb-4">
                <HiOutlineSparkles className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Point. Scan. Done.</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Lightning-Fast Barcode Scanning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our advanced scanning engine recognizes barcodes instantly, even in challenging conditions. Just point your camera and scan.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Works with damaged or poorly printed barcodes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Optimized for low-light warehouse environments</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Continuous scan mode for high-volume operations</p>
                </div>
              </div>
              <button
                onClick={handleScan}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <HiOutlineQrcode className="w-5 h-5" />
                Try Live Demo
                <HiOutlineArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-72 h-auto cursor-pointer" onClick={handleScan}>
                <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl animate-pulse" />
                <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                    <div className="bg-blue-600 p-3 flex items-center justify-between">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <span className="text-white text-xs font-medium">Scanner</span>
                      <div className="w-12" />
                    </div>
                    <div className="p-4">
                      <div className="relative h-48 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 border-2 border-blue-500 rounded-lg animate-pulse flex items-center justify-center">
                            <HiOutlineQrcode className="w-16 h-16 text-blue-500 opacity-50" />
                          </div>
                        </div>
                        <div className="absolute inset-x-0 top-0 h-1 bg-blue-500 animate-scan" />
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Position barcode within frame</p>
                        <div className="flex justify-center gap-1 mt-2">
                          <div className="w-1 h-1 rounded-full bg-green-500" />
                          <div className="w-1 h-1 rounded-full bg-green-500" />
                          <div className="w-1 h-1 rounded-full bg-green-500" />
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

        {/* Supported Barcode Types */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
          <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Supported Barcode Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {barcodeTypes.map((type, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-3 rounded-xl ${type.color}`}>
                {getIcon(type.icon, "w-5 h-5")}
                <span className="text-sm font-medium">{type.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineQrcode className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Speed Up Your Operations?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Download the app and start scanning today. Transform your warehouse operations with our powerful barcode scanning technology.</p>
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

        {/* Scan Success Modal */}
        {showScanModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowScanModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl animate-bounce-in" onClick={(e) => e.stopPropagation()}>
              <div className="bg-green-600 p-4 text-center">
                <HiOutlineCheckCircle className="w-12 h-12 mx-auto text-white mb-2" />
                <h3 className="text-white font-bold text-lg">Scan Successful!</h3>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-2">Product Code:</p>
                <p className="text-2xl font-mono font-bold text-gray-900 dark:text-white">{scannedCode}</p>
                <p className="text-sm text-gray-500 mt-4">Product: Wireless Headphones</p>
                <p className="text-sm text-gray-500">Location: Aisle 4, Shelf B</p>
                <p className="text-sm text-gray-500">Stock: 245 units</p>
                <button
                  onClick={() => setShowScanModal(false)}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Close
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
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(400%); }
                }
                .animate-scan {
                    animation: scan 2s ease-in-out infinite;
                }
                @keyframes bounce-in {
                    0% { opacity: 0; transform: scale(0.8); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .animate-bounce-in {
                    animation: bounce-in 0.3s ease-out;
                }
            `}</style>
    </section>
  );
};

export default BarcodeScanningSection1;