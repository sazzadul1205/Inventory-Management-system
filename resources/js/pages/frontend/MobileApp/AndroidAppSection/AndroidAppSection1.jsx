// page/frontend/MobileApp/AndroidAppSection/AndroidAppSection1.jsx

/**
 * Android App Section I - Native Android App Download & Showcase Hub
 *
 * Unique Design Elements:
 * - Stats Cards for App Metrics (Rating, Downloads, Uptime, Support)
 * - Hero Section with Phone Mockup and Feature Highlights
 * - Features Grid with Icon and Description
 * - Compatibility Section with Device Requirements (Phone, Wear OS, Android Auto)
 * - Email Form for Download Link Request
 * - QR Code Modal for Direct Google Play Access
 * - Native Android Experience Showcase
 * - Animated Gradient Background Orbs (Green/Teal Theme)
 * - Responsive Grid Layout for Features and Compatibility
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { useState } from 'react';

// React Icons - Heroicons, FontAwesome, Material Design
import { FaCar } from 'react-icons/fa';
import {
  HiOutlineDownload,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineDeviceMobile,
  HiOutlineQrcode,
  HiOutlineMail,
  HiOutlineChat,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineWifi,
  HiOutlineX,
  HiOutlineSparkles,
  HiOutlineBell,
} from 'react-icons/hi';
import { MdOutlineWatchLater } from 'react-icons/md';

const AndroidAppSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showQrModal, setShowQrModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // ==================== MEMOIZED DATA ====================

  const features = config?.features || [
    { title: "Real-time Tracking", description: "Track shipments and inventory in real-time", icon: "globe" },
    { title: "Offline Mode", description: "Work without internet connection", icon: "wifi" },
    { title: "Barcode Scanning", description: "Scan products instantly", icon: "qrcode" },
    { title: "Push Notifications", description: "Get instant alerts", icon: "bell" },
    { title: "Secure Access", description: "Biometric authentication", icon: "shield" },
    { title: "Analytics Dashboard", description: "View key metrics", icon: "chart" }
  ];

  const stats = config?.stats || [
    { value: "4.8", label: "Play Store Rating", icon: "star" },
    { value: "500K+", label: "Downloads", icon: "download" },
    { value: "99.9%", label: "Uptime", icon: "clock" },
    { value: "24/7", label: "Support", icon: "chat" }
  ];

  const compatibility = config?.compatibility || [
    { version: "Android 8.0 (Oreo) or later", device: "Phones & Tablets", icon: "mobile" },
    { version: "Wear OS", device: "Smartwatches", icon: "watch" },
    { version: "Android Auto", device: "In-car support", icon: "car" }
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons, FontAwesome, and Material Design sets
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      globe: <HiOutlineGlobe className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      bell: <HiOutlineBell className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      star: <HiOutlineStar className={className} />,
      download: <HiOutlineDownload className={className} />,
      clock: <HiOutlineClock className={className} />,
      chat: <HiOutlineChat className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      car: <FaCar className={className} />,
      watch: <MdOutlineWatchLater className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      mail: <HiOutlineMail className={className} />,
    };
    return icons[iconName] || <HiOutlineDeviceMobile className={className} />;
  };

  /**
   * Handle email input change
   */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({});
    }
  };

  /**
   * Handle download link request
   */
  const handleRequestLink = (e) => {
    e.preventDefault();
    if (!email) {
      setErrors({ email: 'Email address is required' });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setEmail('');
    }, 3000);
  };

  /**
   * Close QR modal
   */
  const closeQrModal = () => {
    setShowQrModal(false);
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Android App"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-0 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div className="inline-flex items-center bg-green-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-green-100 dark:border-gray-700">
            <HiOutlineDeviceMobile className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              {config?.badge || "Android App"}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "SupplyChainPro for"}{' '}
            <span className="bg-linear-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Android"}
            </span>{' '}
            {config?.title?.suffix || ""}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "Manage your supply chain on the go with our native Android app. Available on Google Play for phones, tablets, and Wear OS. Download now and take control of your operations anywhere."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                {getIcon(stat.icon, "w-5 h-5 text-green-600 dark:text-green-400")}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== HERO SECTION WITH PHONE MOCKUP ==================== */}
        <div className="bg-linear-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 rounded-full px-3 py-1 mb-4">
                <HiOutlineSparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium text-green-700 dark:text-green-300">Available on Google Play</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Native Android Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Built with Kotlin and optimized for all Android devices. Enjoy seamless integration with Android features like Material Design, Biometric authentication, and widgets.
              </p>
              <div className="space-y-3 mb-8">
                {features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature.title}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Get it on Google Play"
                >
                  <HiOutlineDownload className="w-5 h-5" />
                  Get it on Google Play
                  <HiOutlineArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowQrModal(true)}
                  className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  aria-label="Scan QR code"
                >
                  <HiOutlineQrcode className="w-5 h-5" />
                  Scan QR Code
                </button>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative w-72 h-auto">
                <div className="absolute -inset-4 bg-green-600/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gray-900 dark:bg-gray-950 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                    <div className="bg-green-600 p-3 flex items-center justify-between">
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

        {/* ==================== FEATURES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                {getIcon(feature.icon, "w-5 h-5 text-green-600 dark:text-green-400")}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== COMPATIBILITY SECTION ==================== */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Compatibility
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {compatibility.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                  {getIcon(item.icon, "w-6 h-6 text-green-600 dark:text-green-400")}
                </div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.version}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.device}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== GET APP BY EMAIL FORM ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <HiOutlineMail className="w-12 h-12 mx-auto text-green-600 dark:text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Get App Download Link
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enter your email address and we'll send you a direct download link for the Google Play Store.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Link Sent!</h4>
              <p className="text-gray-600 dark:text-gray-400">Check your inbox for the Google Play Store download link.</p>
            </div>
          ) : (
            <form onSubmit={handleRequestLink} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      }`}
                    aria-label="Email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  aria-label="Send download link"
                >
                  Send Link
                  <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                </button>
              </div>
              <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
                By providing your email, you agree to receive a one-time download link.
              </p>
            </form>
          )}
        </div>

        {/* ==================== QR CODE MODAL ==================== */}
        {showQrModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeQrModal}
            role="dialog"
            aria-label="Scan QR Code"
            aria-modal="true"
          >
            <div
              className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-green-600 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Scan QR Code</h3>
                  <button
                    onClick={closeQrModal}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="w-48 h-48 bg-gray-100 dark:bg-gray-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <HiOutlineQrcode className="w-32 h-32 text-gray-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Scan this QR code with your Android phone to download the app from the Google Play Store.
                </p>
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
      `}</style>
    </section>
  );
};

export default AndroidAppSection1;