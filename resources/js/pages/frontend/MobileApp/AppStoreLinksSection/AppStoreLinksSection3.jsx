// page/frontend/MobileApp/AppStoreLinksSection/AppStoreLinksSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
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
  HiOutlinePhotograph
} from 'react-icons/hi';
import { HiOutlineBell, HiOutlineUser } from 'react-icons/hi2';

const AppStoreLinksSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('stores');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showQrModal, setShowQrModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const carouselRef = useRef(null);
  const videoRef = useRef(null);

  // Carousel navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (config?.screenshots?.length || 1));
  }, [config?.screenshots?.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (config?.screenshots?.length || 1)) % (config?.screenshots?.length || 1));
  }, [config?.screenshots?.length]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && config?.screenshots?.length > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, config?.screenshots?.length, nextSlide]);

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
  const features = useMemo(() => config?.features || [
    {
      id: 1,
      title: "Real-time Tracking",
      description: "Track shipments and inventory in real-time with live updates and push notifications.",
      icon: "globe",
      color: "from-blue-500 to-blue-600",
      category: "Tracking",
      platforms: ["iOS", "Android"],
      metrics: "99.9% accuracy",
      videoUrl: "/videos/real-time-tracking.mp4"
    },
    {
      id: 2,
      title: "Offline Mode",
      description: "Work without internet connection. All data is cached and syncs automatically when you're back online.",
      icon: "wifi",
      color: "from-green-500 to-green-600",
      category: "Offline",
      platforms: ["iOS", "Android"],
      metrics: "100% uptime"
    },
    {
      id: 3,
      title: "Barcode Scanning",
      description: "Scan products instantly with your device's camera. Supports 20+ barcode formats.",
      icon: "qrcode",
      color: "from-purple-500 to-purple-600",
      category: "Scanning",
      platforms: ["iOS", "Android"],
      metrics: "<1s scan time",
      videoUrl: "/videos/barcode-scanning.mp4"
    },
    {
      id: 4,
      title: "Push Notifications",
      description: "Get instant alerts about shipments, inventory, and orders right on your device.",
      icon: "bell",
      color: "from-orange-500 to-orange-600",
      category: "Alerts",
      platforms: ["iOS", "Android"],
      metrics: "Real-time"
    },
    {
      id: 5,
      title: "Secure Access",
      description: "Biometric authentication (Face ID / Fingerprint) for secure access to your data.",
      icon: "shield",
      color: "from-red-500 to-red-600",
      category: "Security",
      platforms: ["iOS", "Android"],
      metrics: "256-bit encryption"
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      description: "View key metrics and performance indicators in a mobile-optimized dashboard.",
      icon: "chart",
      color: "from-indigo-500 to-indigo-600",
      category: "Analytics",
      platforms: ["iOS", "Android"],
      metrics: "50+ KPIs"
    }
  ], [config?.features]);

  // Screenshots for carousel
  const screenshots = config?.screenshots || [
    { src: "/app-screenshots/dashboard.png", title: "Dashboard", description: "View key metrics at a glance", platform: "iOS" },
    { src: "/app-screenshots/tracking.png", title: "Live Tracking", description: "Track shipments in real-time", platform: "Android" },
    { src: "/app-screenshots/scanning.png", title: "Barcode Scanner", description: "Scan products instantly", platform: "iOS" },
    { src: "/app-screenshots/analytics.png", title: "Analytics", description: "Deep dive into your data", platform: "Android" },
    { src: "/app-screenshots/offline.png", title: "Offline Mode", description: "Work without internet", platform: "iOS" }
  ];

  // Testimonials
  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "Global Retail Corp",
      quote: "The mobile app has transformed how we manage our supply chain. The offline mode is a lifesaver in our warehouses.",
      rating: 5,
      avatar: "/testimonials/sarah.jpg",
      videoUrl: "/videos/testimonial-sarah.mp4",
      platform: "iOS"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "HealthTech Solutions",
      quote: "Best supply chain app on the market. The barcode scanning feature alone saves us hours every day.",
      rating: 5,
      avatar: "/testimonials/michael.jpg",
      platform: "Android"
    },
    {
      name: "Emily Rodriguez",
      role: "Logistics Director",
      company: "EuroLogistics",
      quote: "The analytics dashboard gives me real-time visibility into our entire operation. Highly recommended!",
      rating: 5,
      avatar: "/testimonials/emily.jpg",
      platform: "iOS"
    }
  ];

  // Filter features based on platform and search
  const getFilteredFeatures = useCallback(() => {
    let filtered = [...features];

    if (searchQuery) {
      filtered = filtered.filter(f =>
        f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedPlatform !== 'all') {
      filtered = filtered.filter(f => f.platforms.includes(selectedPlatform));
    }

    return filtered;
  }, [features, searchQuery, selectedPlatform]);

  const filteredFeatures = getFilteredFeatures();

  // Stats
  const stats = config?.stats || [
    { value: "4.9", label: "App Store Rating", icon: "star", store: "appstore", reviews: "5,000+", trend: "+0.2", trendUp: true },
    { value: "4.8", label: "Play Store Rating", icon: "star", store: "playstore", reviews: "10,000+", trend: "+0.1", trendUp: true },
    { value: "100K+", label: "Downloads", icon: "download", store: "both", trend: "+25%", trendUp: true },
    { value: "99.9%", label: "Uptime", icon: "clock", store: "both", trend: "SLA", trendUp: true }
  ];

  // Stores
  const stores = config?.stores || [
    {
      id: "appstore",
      name: "App Store",
      platform: "iOS",
      buttonColor: "from-blue-500 to-blue-600",
      textColor: "text-white",
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
      qrCode: "/qr-codes/app-store.png",
      videoUrl: "/videos/app-store-demo.mp4"
    },
    {
      id: "playstore",
      name: "Google Play",
      platform: "Android",
      buttonColor: "from-green-500 to-green-600",
      textColor: "text-white",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      icon: "mobile",
      rating: "4.8",
      reviews: "10,000+",
      features: ["Phones", "Tablets", "Wear OS", "Android Auto", "Chrome OS"],
      requirements: "Android 8.0 or later",
      size: "162 MB",
      version: "3.0.0",
      lastUpdated: "March 15, 2024",
      qrCode: "/qr-codes/google-play.png",
      videoUrl: "/videos/google-play-demo.mp4"
    }
  ];

  // Compatibility
  const compatibility = config?.compatibility || [
    { platform: "iOS", version: "iOS 15.0 or later", devices: "iPhone, iPad, iPod touch", icon: "mobile", store: "appstore", features: ["Face ID", "Widgets", "Siri Shortcuts"] },
    { platform: "Android", version: "Android 8.0 or later", devices: "Phones & Tablets", icon: "mobile", store: "playstore", features: ["Fingerprint", "Widgets", "Google Assistant"] },
    { platform: "macOS", version: "macOS 12.0 or later", devices: "Mac with Apple M1 chip or later", icon: "desktop", store: "appstore", features: ["Keyboard shortcuts", "Multi-window", "Touch Bar support"] }
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

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="App Store Links Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-appstore" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-appstore)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineDownload className="w-4 h-4" />
            <span className="text-sm font-medium">
              {typeof config?.badge === "string"
                ? config.badge
                : config?.badge?.text || "Download the App"}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Get Started with"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "SupplyChainPro"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Download our mobile app and take control of your supply chain from anywhere. Available on iOS and Android devices."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'star' ? <HiOutlineStar className="w-4 h-4 text-blue-600" /> :
                    stat.icon === 'download' ? <HiOutlineDownload className="w-4 h-4 text-blue-600" /> :
                      stat.icon === 'clock' ? <HiOutlineClock className="w-4 h-4 text-blue-600" /> :
                        <HiOutlineChartBar className="w-4 h-4 text-blue-600" />}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  {stat.trend && (
                    <div className={`text-xs ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.trend}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
            >
              {tab.icon === 'download' ? <HiOutlineDownload className="w-4 h-4" /> :
                tab.icon === 'grid' ? <HiOutlineViewGrid className="w-4 h-4" /> :
                  tab.icon === 'photo' ? <HiOutlinePhotograph className="w-4 h-4" /> :
                    tab.icon === 'chip' ? <HiOutlineChip className="w-4 h-4" /> :
                      <HiOutlineChat className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stores Tab */}
        {activeTab === 'stores' && (
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
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${store.buttonColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {store.icon === 'mobile' ? <HiOutlineDeviceMobile className="w-8 h-8 text-white" /> : <HiOutlineDesktopComputer className="w-8 h-8 text-white" />}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <HiOutlineStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
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
                      onClick={(e) => { e.stopPropagation(); setCurrentVideo(store.videoUrl); setShowVideoModal(true); }}
                      className="w-full mb-3 flex items-center justify-center gap-2 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 transition-colors"
                    >
                      <HiOutlinePlay className="w-4 h-4" />
                      Watch Demo
                    </button>
                  )}
                  <button
                    className={`w-full inline-flex items-center justify-center gap-2 ${store.bgColor} ${store.hoverColor} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
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
                    className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center gap-1 w-full"
                  >
                    <HiOutlineQrcode className="w-4 h-4" />
                    Scan QR Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Tab */}
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
                >
                  {platform.icon === 'mobile' ? <HiOutlineDeviceMobile className="w-4 h-4" /> :
                    platform.icon === 'apple' ? <AiOutlineApple className="w-4 h-4" /> :
                      <AiOutlineAndroid className="w-4 h-4" />}
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
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                >
                  <div className={`h-1.5 bg-linear-to-r ${feature.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${feature.color} flex items-center justify-center`}>
                        {feature.icon === 'globe' ? <HiOutlineGlobe className="w-6 h-6 text-white" /> :
                          feature.icon === 'wifi' ? <HiOutlineWifi className="w-6 h-6 text-white" /> :
                            feature.icon === 'qrcode' ? <HiOutlineQrcode className="w-6 h-6 text-white" /> :
                              feature.icon === 'bell' ? <HiOutlineBell className="w-6 h-6 text-white" /> :
                                feature.icon === 'shield' ? <HiOutlineShieldCheck className="w-6 h-6 text-white" /> :
                                  <HiOutlineChartBar className="w-6 h-6 text-white" />}
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
                      <span className="font-semibold text-blue-600">{feature.metrics}</span>
                    </div>
                    {expandedFeature === feature.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Available on:</p>
                        <div className="flex gap-2">
                          {feature.platforms.map((p) => (
                            <span key={p} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              {p}
                            </span>
                          ))}
                        </div>
                        {feature.videoUrl && (
                          <button
                            onClick={() => { setCurrentVideo(feature.videoUrl); setShowVideoModal(true); }}
                            className="mt-3 w-full flex items-center justify-center gap-2 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 transition-colors"
                          >
                            <HiOutlinePlay className="w-4 h-4" />
                            Watch Demo
                          </button>
                        )}
                      </div>
                    )}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{feature.category}</span>
                      <span className="text-blue-600 text-sm font-semibold">{expandedFeature === feature.id ? 'Show less' : 'Learn more'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFeatures.length === 0 && (
              <div className="text-center py-12">
                <HiOutlineChip className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                <p className="text-gray-500">No features found matching your criteria.</p>
              </div>
            )}
          </>
        )}

        {/* Screenshots Carousel Tab */}
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
                        />
                      </div>
                      <div className="text-center mt-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{screenshot.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{screenshot.description}</p>
                        <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                          {screenshot.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {screenshots.length > 1 && (
                <>
                  <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                    <HiOutlineChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                    <HiOutlineChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {screenshots.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-blue-600' : 'bg-gray-400'}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Compatibility Tab */}
        {activeTab === 'compatibility' && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {compatibility.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                    {item.icon === 'mobile' ? <HiOutlineDeviceMobile className="w-8 h-8 text-blue-600" /> :
                      item.icon === 'desktop' ? <HiOutlineDesktopComputer className="w-8 h-8 text-blue-600" /> :
                        <HiOutlineDeviceTablet className="w-8 h-8 text-blue-600" />}
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
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    {item.store === 'appstore' ? 'Available on App Store' : 'Available on Google Play'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'stories' && testimonials.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <HiOutlineUser className="w-6 h-6 text-blue-600" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <HiOutlineStar key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      {testimonial.platform} User
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm">"{testimonial.quote}"</p>
                {testimonial.videoUrl && (
                  <button
                    onClick={() => { setCurrentVideo(testimonial.videoUrl); setShowVideoModal(true); }}
                    className="mt-3 inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:underline"
                  >
                    <HiOutlinePlay className="w-4 h-4" />
                    Watch Full Testimonial
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

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

        {/* Video Modal */}
        {showVideoModal && currentVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowVideoModal(false)}>
            <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
                <HiOutlineX className="w-6 h-6" />
              </button>
              <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default AppStoreLinksSection3;
