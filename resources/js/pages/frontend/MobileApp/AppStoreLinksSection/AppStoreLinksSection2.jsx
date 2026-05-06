// page/frontend/MobileApp/AppStoreLinksSection/AppStoreLinksSection2.jsx

/**
 * App Store Links Section II - Advanced App Discovery Hub with Features
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Ratings, Downloads, Uptime)
 * - Multi-tab UI (Download, Features, Compatibility)
 * - Store Cards with Detailed App Information (Requirements, Size, Version)
 * - Features Grid with Platform Indicators, Category Filters, and Search
 * - Compatibility Cards with Device-specific Details
 * - Email Form for Download Link Request
 * - QR Code Modal for Direct App Store Access
 * - Trust Indicators for Security and Trust
 * - Animated Gradient Orbs in Background
 * - Responsive Grid Layout for Store Cards and Features
 *
 * All icons from react-icons (hi, hi2, ai)
 * Fully responsive with dark mode support
 */

import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons, Ant Design Icons
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";
import {
  HiOutlineDownload,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineShieldCheck,
  HiOutlineDeviceMobile,
  HiOutlineQrcode,
  HiOutlineMail,
  HiOutlineHeart,
  HiOutlineChip,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineWifi,
  HiOutlineX,
  HiOutlineViewGrid,
  HiOutlineSearch,
  HiOutlineDesktopComputer,
  HiOutlineDeviceTablet,
  HiOutlineClock,
  HiOutlineBell,
} from 'react-icons/hi';

const AppStoreLinksSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('stores');
  const [showQrModal, setShowQrModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  // ==================== MEMOIZED DATA ====================

  const features = useMemo(() => config?.features || [
    {
      id: 1,
      title: "Real-time Tracking",
      description: "Track shipments and inventory in real-time with live updates and push notifications.",
      icon: "globe",
      gradient: "from-blue-500 to-blue-600",
      category: "Tracking",
      platforms: ["iOS", "Android"],
      metrics: "99.9% accuracy"
    },
    {
      id: 2,
      title: "Offline Mode",
      description: "Work without internet connection. All data is cached and syncs automatically when you're back online.",
      icon: "wifi",
      gradient: "from-emerald-500 to-emerald-600",
      category: "Offline",
      platforms: ["iOS", "Android"],
      metrics: "100% uptime"
    },
    {
      id: 3,
      title: "Barcode Scanning",
      description: "Scan products instantly with your device's camera. Supports 20+ barcode formats.",
      icon: "qrcode",
      gradient: "from-purple-500 to-purple-600",
      category: "Scanning",
      platforms: ["iOS", "Android"],
      metrics: "<1s scan time"
    },
    {
      id: 4,
      title: "Push Notifications",
      description: "Get instant alerts about shipments, inventory, and orders right on your device.",
      icon: "bell",
      gradient: "from-amber-500 to-amber-600",
      category: "Alerts",
      platforms: ["iOS", "Android"],
      metrics: "Real-time"
    },
    {
      id: 5,
      title: "Secure Access",
      description: "Biometric authentication (Face ID / Fingerprint) for secure access to your data.",
      icon: "shield",
      gradient: "from-rose-500 to-rose-600",
      category: "Security",
      platforms: ["iOS", "Android"],
      metrics: "256-bit encryption"
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      description: "View key metrics and performance indicators in a mobile-optimized dashboard.",
      icon: "chart",
      gradient: "from-indigo-500 to-indigo-600",
      category: "Analytics",
      platforms: ["iOS", "Android"],
      metrics: "50+ KPIs"
    }
  ], [config?.features]);

  const stats = config?.stats || [
    { value: "4.9", label: "App Store Rating", icon: "star", store: "appStore", reviews: "5,000+", trend: "+0.2", trendUp: true },
    { value: "4.8", label: "Play Store Rating", icon: "star", store: "playStore", reviews: "10,000+", trend: "+0.1", trendUp: true },
    { value: "100K+", label: "Downloads", icon: "download", store: "both", trend: "+25%", trendUp: true },
    { value: "99.9%", label: "Uptime", icon: "clock", store: "both", trend: "SLA", trendUp: true }
  ];

  const stores = config?.stores || [
    {
      id: "appStore",
      name: "App Store",
      platform: "iOS",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      icon: "mobile",
      rating: "4.9",
      reviews: "5,000+",
      features: ["iPhone", "iPad", "Mac", "Apple Watch", "iMessage App"],
      requirements: "iOS 15.0 or later",
      size: "185 MB",
      version: "3.0.0",
      lastUpdated: "March 15, 2024"
    },
    {
      id: "playStore",
      name: "Google Play",
      platform: "Android",
      gradient: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-600",
      hoverColor: "hover:bg-emerald-700",
      icon: "mobile",
      rating: "4.8",
      reviews: "10,000+",
      features: ["Phones", "Tablets", "Wear OS", "Android Auto", "Chrome OS"],
      requirements: "Android 8.0 or later",
      size: "162 MB",
      version: "3.0.0",
      lastUpdated: "March 15, 2024"
    }
  ];

  const compatibility = config?.compatibility || [
    { platform: "iOS", version: "iOS 15.0 or later", devices: "iPhone, iPad, iPod touch", icon: "mobile", store: "appStore", features: ["Face ID", "Widgets", "Siri Shortcuts"] },
    { platform: "Android", version: "Android 8.0 or later", devices: "Phones & Tablets", icon: "mobile", store: "playStore", features: ["Fingerprint", "Widgets", "Google Assistant"] },
    { platform: "macOS", version: "macOS 12.0 or later", devices: "Mac with Apple M1 chip or later", icon: "desktop", store: "appStore", features: ["Keyboard shortcuts", "Multi-window", "Touch Bar support"] }
  ];

  const tabs = [
    { id: 'stores', label: 'Download', icon: 'download' },
    { id: 'features', label: 'Features', icon: 'grid' },
    { id: 'compatibility', label: 'Compatibility', icon: 'chip' }
  ];

  const platforms = [
    { id: 'all', label: 'All Platforms', icon: 'mobile' },
    { id: 'iOS', label: 'iOS', icon: 'apple' },
    { id: 'Android', label: 'Android', icon: 'android' }
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons and Ant Design Icons sets
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      download: <HiOutlineDownload className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      chip: <HiOutlineChip className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      bell: <HiOutlineBell className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      chart: <HiOutlineChartBar className={className} />,
      star: <HiOutlineStar className={className} />,
      clock: <HiOutlineClock className={className} />,
      mobile: <HiOutlineDeviceMobile className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      tablet: <HiOutlineDeviceTablet className={className} />,
      apple: <AiOutlineApple className={className} />,
      android: <AiOutlineAndroid className={className} />,
      search: <HiOutlineSearch className={className} />,
    };
    return icons[iconName] || <HiOutlineDownload className={className} />;
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
   * Open QR modal
   */
  const openQrModal = (store) => {
    setSelectedStore(store);
    setShowQrModal(true);
  };

  /**
   * Close QR modal
   */
  const closeQrModal = () => {
    setShowQrModal(false);
    setSelectedStore(null);
  };

  /**
   * Filter features based on platform and search
   */
  const getFilteredFeatures = useCallback(() => {
    let filtered = [...features];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(f =>
        f.title.toLowerCase().includes(query) ||
        f.description.toLowerCase().includes(query)
      );
    }

    if (selectedPlatform !== 'all') {
      filtered = filtered.filter(f => f.platforms.includes(selectedPlatform));
    }

    return filtered;
  }, [features, searchQuery, selectedPlatform]);

  const filteredFeatures = getFilteredFeatures();

  /**
   * Toggle feature expansion
   */
  const toggleFeature = (featureId) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="App Store Links Center"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div
        className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineDownload className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Download the App"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Get Started with"}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || "SupplyChainPro"}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                "Download our mobile app and take control of your supply chain from anywhere. Available on iOS and Android devices."}
            </p>
          </div>

          {/* Stats Cards with Trend Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                {stat.trend && (
                  <div className={`text-xs mt-1 ${stat.trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
                    {stat.trend}
                  </div>
                )}
                {stat.store === 'appStore' && <div className="text-xs text-blue-500 dark:text-blue-400 mt-1">App Store</div>}
                {stat.store === 'playStore' && <div className="text-xs text-emerald-500 dark:text-emerald-400 mt-1">Play Store</div>}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== QUICK NAVIGATION TABS ==================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== STORES TAB ==================== */}
        {activeTab === 'stores' && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {stores.map((store) => (
              <div
                key={store.id}
                className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => openQrModal(store)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openQrModal(store)}
              >
                <div className={`h-1.5 bg-linear-to-r ${store.gradient}`} />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${store.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {getIcon(store.icon, "w-8 h-8 text-white")}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <HiOutlineStar key={i} className="w-4 h-4 text-amber-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{store.rating} ({store.reviews})</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{store.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{store.platform}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {store.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                    <div>
                      <p className="text-gray-500">Requirements</p>
                      <p className="font-medium text-gray-900 dark:text-white">{store.requirements}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Size</p>
                      <p className="font-medium text-gray-900 dark:text-white">{store.size}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Version</p>
                      <p className="font-medium text-gray-900 dark:text-white">{store.version}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Updated</p>
                      <p className="font-medium text-gray-900 dark:text-white">{store.lastUpdated}</p>
                    </div>
                  </div>
                  <button
                    className={`w-full inline-flex items-center justify-center gap-2 ${store.bgColor} ${store.hoverColor} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                    aria-label={`Download from ${store.name}`}
                  >
                    <HiOutlineDownload className="w-5 h-5" />
                    Download from {store.name}
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openQrModal(store);
                    }}
                    className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center gap-1 w-full"
                    aria-label="Scan QR code"
                  >
                    <HiOutlineQrcode className="w-4 h-4" />
                    Scan QR Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== FEATURES TAB ==================== */}
        {activeTab === 'features' && (
          <>
            {/* Platform Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id === 'all' ? 'all' : platform.label)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedPlatform === (platform.id === 'all' ? 'all' : platform.label)
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  aria-label={`Filter by ${platform.label}`}
                >
                  {getIcon(platform.icon, "w-4 h-4")}
                  {platform.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search features..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
                aria-label="Search features"
              />
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredFeatures.map((feature) => {
                const isExpanded = expandedFeature === feature.id;
                return (
                  <div
                    key={feature.id}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => toggleFeature(feature.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFeature(feature.id)}
                  >
                    <div className={`h-1.5 bg-linear-to-r ${feature.gradient}`} />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${feature.gradient} flex items-center justify-center`}>
                          {getIcon(feature.icon, "w-6 h-6 text-white")}
                        </div>
                        <div className="flex gap-1">
                          {feature.platforms.map((p) => (
                            <span key={p} className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500">
                              {p === 'iOS' ? 'iOS' : 'Android'}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{feature.description}</p>
                      <div className="flex items-center justify-between text-sm mb-3">
                        <span className="text-gray-500">Performance:</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{feature.metrics}</span>
                      </div>
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Available on:</p>
                          <div className="flex gap-2">
                            {feature.platforms.map((p) => (
                              <span key={p} className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-full">
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-500">{feature.category}</span>
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                          {isExpanded ? 'Show less' : 'Learn more'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredFeatures.length === 0 && (
              <div className="text-center py-12">
                <HiOutlineChip className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                <p className="text-gray-500 dark:text-gray-400">No features found matching your criteria.</p>
              </div>
            )}
          </>
        )}

        {/* ==================== COMPATIBILITY TAB ==================== */}
        {activeTab === 'compatibility' && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {compatibility.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                    {getIcon(item.icon, "w-8 h-8 text-blue-600 dark:text-blue-400")}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.platform}</h3>
                  <p className="text-sm text-gray-500">{item.version}</p>
                </div>
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.devices}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {item.features.map((feature, fIdx) => (
                    <span key={fIdx} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    {item.store === 'appStore' ? 'Available on App Store' : 'Available on Google Play'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== GET APP BY EMAIL FORM ==================== */}
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
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiOutlineCheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
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
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                      }`}
                    aria-label="Email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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
        {showQrModal && selectedStore && (
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
              <div className={`${selectedStore.id === 'appStore' ? 'bg-blue-600' : 'bg-emerald-600'} p-4`}>
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
                  Scan this QR code with your {selectedStore.platform} device to download the app from the {selectedStore.name}.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {selectedStore.platform === 'iOS' ? 'Use your iPhone camera' : 'Open Google Lens or any QR scanner'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TRUST INDICATORS ==================== */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Secure download</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
            <span>100% free</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <HiOutlineHeart className="w-4 h-4 text-rose-500" />
            <span>Trusted by 100K+ users</span>
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
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(ellipse at center, white, transparent);
          -webkit-mask-image: radial-gradient(ellipse at center, white, transparent);
        }
      `}</style>
    </section>
  );
};

export default AppStoreLinksSection2;