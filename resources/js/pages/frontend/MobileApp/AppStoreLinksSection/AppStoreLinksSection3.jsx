// page/frontend/MobileApp/AppStoreLinksSection/AppStoreLinksSection3.jsx

/**
 * App Store Links Section III - Full App Hub with Carousel & Video Demos
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Ratings, Downloads, Uptime)
 * - Multi-tab UI (Download, Features, Screenshots, Compatibility, Reviews)
 * - Store Cards with Detailed App Information and Video Demo
 * - Features Grid with Platform Indicators, Category Filters, Search, and Video Demos
 * - Screenshots Carousel with Auto-play and Manual Navigation
 * - Compatibility Cards with Device-specific Details
 * - Testimonials Grid with Avatars, Platform Badges, and Video Testimonials
 * - Video Modal for App Demos, Feature Demos, and Testimonials
 * - Email Form for Download Link Request
 * - QR Code Modal for Direct App Store Access
 * - Trust Indicators for Security and Trust
 * - Circuit Board Background Pattern
 * - Animated Pulse Badge in Header
 * - Responsive Grid Layout for All Tabs
 *
 * All icons from react-icons (hi, hi2, ai)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - Heroicons, Ant Design Icons
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";
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
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlay,
  HiOutlinePhotograph,
  HiOutlineBell,
} from 'react-icons/hi';

const AppStoreLinksSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('stores');
  const [showQrModal, setShowQrModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  // ==================== REFERENCE MANAGEMENT ====================
  const carouselRef = useRef(null);
  const videoRef = useRef(null);

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
      metrics: "99.9% accuracy",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
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
      metrics: "<1s scan time",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
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

  const screenshots = config?.screenshots || [
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", title: "Dashboard", description: "View key metrics at a glance", platform: "iOS" },
    { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", title: "Live Tracking", description: "Track shipments in real-time", platform: "Android" },
    { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", title: "Barcode Scanner", description: "Scan products instantly", platform: "iOS" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", title: "Analytics", description: "Deep dive into your data", platform: "Android" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop", title: "Offline Mode", description: "Work without internet", platform: "iOS" }
  ];

  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "Global Retail Corp",
      quote: "The mobile app has transformed how we manage our supply chain. The offline mode is a lifesaver in our warehouses.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      platform: "iOS"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "HealthTech Solutions",
      quote: "Best supply chain app on the market. The barcode scanning feature alone saves us hours every day.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      platform: "Android"
    },
    {
      name: "Emily Rodriguez",
      role: "Logistics Director",
      company: "EuroLogistics",
      quote: "The analytics dashboard gives me real-time visibility into our entire operation. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
      platform: "iOS"
    }
  ];

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
      lastUpdated: "March 15, 2024",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
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
      lastUpdated: "March 15, 2024",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
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
    { id: 'screenshots', label: 'Screenshots', icon: 'photo' },
    { id: 'compatibility', label: 'Compatibility', icon: 'chip' },
    { id: 'stories', label: 'Reviews', icon: 'chat' }
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
      photo: <HiOutlinePhotograph className={className} />,
      chat: <HiOutlineChat className={className} />,
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
   * Open video modal
   */
  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideoModal(true);
  };

  /**
   * Close video modal
   */
  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideo(null);
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

  // ==================== CAROUSEL NAVIGATION ====================
  const storiesCount = screenshots.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % storiesCount);
  }, [storiesCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + storiesCount) % storiesCount);
  }, [storiesCount]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && storiesCount > 1 && activeTab === 'screenshots') {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, storiesCount, activeTab, nextSlide]);

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="App Store Links Hub"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-appstore" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80"
                stroke="#9CA3AF"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-appstore)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineDownload className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Download the App"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Get Started with"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "SupplyChainPro"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              "Download our mobile app and take control of your supply chain from anywhere. Available on iOS and Android devices."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, "w-4 h-4 text-blue-600 dark:text-blue-400")}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  {stat.trend && (
                    <div className={`text-xs ${stat.trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
                      {stat.trend}
                    </div>
                  )}
                </div>
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
                  {store.videoUrl && (
                    <button
                      onClick={(e) => { e.stopPropagation(); openVideoModal(store.videoUrl); }}
                      className="w-full mb-3 flex items-center justify-center gap-2 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 transition-colors"
                      aria-label="Watch demo video"
                    >
                      <HiOutlinePlay className="w-4 h-4" />
                      Watch Demo
                    </button>
                  )}
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
                              <span key={p} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full">
                                {p}
                              </span>
                            ))}
                          </div>
                          {feature.videoUrl && (
                            <button
                              onClick={(e) => { e.stopPropagation(); openVideoModal(feature.videoUrl); }}
                              className="mt-3 w-full flex items-center justify-center gap-2 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 transition-colors"
                              aria-label="Watch demo video"
                            >
                              <HiOutlinePlay className="w-4 h-4" />
                              Watch Demo
                            </button>
                          )}
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

        {/* ==================== SCREENSHOTS CAROUSEL TAB ==================== */}
        {activeTab === 'screenshots' && screenshots.length > 0 && (
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {screenshots.map((screenshot, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                      <div className="relative h-96 overflow-hidden rounded-xl">
                        <img
                          src={screenshot.src}
                          alt={screenshot.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{screenshot.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{screenshot.description}</p>
                        <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                          {screenshot.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Previous slide"
                  >
                    <HiOutlineChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
                    aria-label="Next slide"
                  >
                    <HiOutlineChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {screenshots.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-400'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
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
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                    {item.store === 'appStore' ? 'Available on App Store' : 'Available on Google Play'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== TESTIMONIALS TAB ==================== */}
        {activeTab === 'stories' && testimonials.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <HiOutlineStar key={i} className="w-3 h-3 text-amber-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                      {testimonial.platform} User
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm">"{testimonial.quote}"</p>
                {testimonial.videoUrl && (
                  <button
                    onClick={() => openVideoModal(testimonial.videoUrl)}
                    className="mt-3 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                    aria-label="Watch full testimonial"
                  >
                    <HiOutlinePlay className="w-4 h-4" />
                    Watch Full Testimonial
                  </button>
                )}
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

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && currentVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeVideoModal}
            role="dialog"
            aria-label="Video player"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
              <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
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
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default AppStoreLinksSection3;