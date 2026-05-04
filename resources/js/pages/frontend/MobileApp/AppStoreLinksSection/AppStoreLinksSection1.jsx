// page/frontend/MobileApp/AppStoreLinksSection/AppStoreLinksSection1.jsx

// React
import { useState } from 'react';

// Icons
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
  HiOutlineHeart,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineWifi,
  HiOutlineX,
  HiOutlineDesktopComputer,
} from 'react-icons/hi';
import { HiOutlineBell, HiOutlineDeviceTablet } from 'react-icons/hi2';

const AppStoreLinksSection = ({ config }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showQrModal, setShowQrModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({});
    }
  };

  // Handle download link request
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

  // Features
  const features = config?.features || [
    { title: "Real-time Tracking", description: "Track shipments and inventory in real-time", icon: "globe" },
    { title: "Offline Mode", description: "Work without internet connection", icon: "wifi" },
    { title: "Barcode Scanning", description: "Scan products instantly", icon: "qrcode" },
    { title: "Push Notifications", description: "Get instant alerts", icon: "bell" },
    { title: "Secure Access", description: "Biometric authentication", icon: "shield" },
    { title: "Analytics Dashboard", description: "View key metrics", icon: "chart" }
  ];

  // Stats
  const stats = config?.stats || [
    { value: "4.9", label: "App Store Rating", icon: "star", store: "appstore" },
    { value: "4.8", label: "Play Store Rating", icon: "star", store: "playstore" },
    { value: "100K+", label: "Downloads", icon: "download", store: "both" },
    { value: "99.9%", label: "Uptime", icon: "clock", store: "both" }
  ];

  // Compatibility
  const compatibility = config?.compatibility || [
    { platform: "iOS", version: "iOS 15.0 or later", devices: "iPhone, iPad, iPod touch", icon: "mobile", store: "appstore" },
    { platform: "Android", version: "Android 8.0 or later", devices: "Phones & Tablets", icon: "mobile", store: "playstore" },
    { platform: "macOS", version: "macOS 12.0 or later", devices: "Mac with Apple M1 chip or later", icon: "desktop", store: "appstore" }
  ];

  // Store buttons
  const stores = config?.stores || [
    {
      id: "appstore",
      name: "App Store",
      platform: "iOS",
      buttonColor: "from-blue-500 to-blue-600",
      textColor: "text-white",
      bgColor: "bg-blue-600",
      icon: "mobile",
      rating: "4.9",
      reviews: "5,000+",
      features: ["iPhone", "iPad", "Mac", "Apple Watch"],
      qrCode: "/qr-codes/app-store.png"
    },
    {
      id: "playstore",
      name: "Google Play",
      platform: "Android",
      buttonColor: "from-green-500 to-green-600",
      textColor: "text-white",
      bgColor: "bg-green-600",
      icon: "mobile",
      rating: "4.8",
      reviews: "10,000+",
      features: ["Phones", "Tablets", "Wear OS", "Android Auto"],
      qrCode: "/qr-codes/google-play.png"
    }
  ];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="App Store Links Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineDownload className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {typeof config?.badge === "string"
                ? config.badge
                : config?.badge?.text || "Download the App"}
              </span>
            </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Get Started with"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "SupplyChainPro"}</span> {config?.title?.suffix || ""}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Download our mobile app and take control of your supply chain from anywhere. Available on iOS and Android devices."}
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                {stat.icon === 'star' ? <HiOutlineStar className="w-5 h-5 text-blue-600" /> :
                  stat.icon === 'download' ? <HiOutlineDownload className="w-5 h-5 text-blue-600" /> :
                    stat.icon === 'clock' ? <HiOutlineClock className="w-5 h-5 text-blue-600" /> :
                      <HiOutlineChartBar className="w-5 h-5 text-blue-600" />}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                {stat.store === 'appstore' && <div className="text-xs text-blue-500">App Store</div>}
                {stat.store === 'playstore' && <div className="text-xs text-green-500">Play Store</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Store Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {stores.map((store) => (
            <div
              key={store.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => {
                setSelectedStore(store);
                setShowQrModal(true);
              }}
            >
              <div className={`h-2 bg-linear-to-r ${store.buttonColor}`} />
              <div className="p-8 text-center">
                <div className={`w-20 h-20 rounded-2xl bg-linear-to-r ${store.buttonColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {store.icon === 'mobile' ? <HiOutlineDeviceMobile className="w-10 h-10 text-white" /> : <HiOutlineDesktopComputer className="w-10 h-10 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{store.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">({store.reviews})</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{store.rating} out of 5 stars</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {store.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  ))}
                </div>
                <button
                  className={`w-full inline-flex items-center justify-center gap-2 ${store.bgColor} hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  <HiOutlineDownload className="w-5 h-5" />
                  Download from {store.name}
                  <HiOutlineArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedStore(store);
                    setShowQrModal(true);
                  }}
                  className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center gap-1"
                >
                  <HiOutlineQrcode className="w-4 h-4" />
                  Scan QR Code
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                {feature.icon === 'globe' ? <HiOutlineGlobe className="w-5 h-5 text-blue-600" /> :
                  feature.icon === 'wifi' ? <HiOutlineWifi className="w-5 h-5 text-blue-600" /> :
                    feature.icon === 'qrcode' ? <HiOutlineQrcode className="w-5 h-5 text-blue-600" /> :
                      feature.icon === 'bell' ? <HiOutlineBell className="w-5 h-5 text-blue-600" /> :
                        feature.icon === 'shield' ? <HiOutlineShieldCheck className="w-5 h-5 text-blue-600" /> :
                          <HiOutlineChartBar className="w-5 h-5 text-blue-600" />}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compatibility Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Device Compatibility
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {compatibility.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                  {item.icon === 'mobile' ? <HiOutlineDeviceMobile className="w-6 h-6 text-blue-600" /> :
                    item.icon === 'desktop' ? <HiOutlineDesktopComputer className="w-6 h-6 text-blue-600" /> :
                      <HiOutlineDeviceTablet className="w-6 h-6 text-blue-600" />}
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">{item.platform}</p>
                <p className="text-xs text-gray-500">{item.version}</p>
                <p className="text-xs text-gray-400 mt-1">{item.devices}</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                  {item.store === 'appstore' ? 'App Store' : 'Google Play'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Get App by Email Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Get Download Link
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enter your email address and we'll send you a direct download link for your device.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Link Sent!</h4>
              <p className="text-gray-600 dark:text-gray-400">Check your inbox for the download link.</p>
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
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Send Link
                  <HiOutlineArrowRight className="inline ml-2 w-4 h-4" />
                </button>
              </div>
              <p className="text-center text-xs text-gray-500 mt-4">
                By providing your email, you agree to receive a one-time download link.
              </p>
            </form>
          )}
        </div>

        {/* QR Code Modal */}
        {showQrModal && selectedStore && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowQrModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className={`${selectedStore.id === 'appstore' ? 'bg-blue-600' : 'bg-green-600'} p-4`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Scan QR Code</h3>
                  <button onClick={() => setShowQrModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <div className="w-48 h-48 bg-gray-100 dark:bg-gray-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <HiOutlineQrcode className="w-32 h-32 text-gray-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Scan this QR code with your {selectedStore.platform} device to download the app from the {selectedStore.name}.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {selectedStore.platform === 'iOS' ? 'Use your iPhone camera' : 'Open Google Lens or any QR scanner'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineShieldCheck className="w-4 h-4 text-green-500" />
            <span>Secure download</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
            <span>100% free</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineHeart className="w-4 h-4 text-red-500" />
            <span>Trusted by 100K+ users</span>
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
            `}</style>
    </section>
  );
};

export default AppStoreLinksSection;
