// page/frontend/MobileApp/IOSAppSection/IOSAppSection3.jsx

// React
import { useState, useEffect, useCallback, useRef } from 'react';

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
  HiOutlineChat,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineWifi,
  HiOutlineX,
  HiOutlineViewGrid,
  HiOutlineSparkles,
  HiOutlineDeviceTablet,
  HiOutlineDesktopComputer,
  HiOutlineRefresh,
  HiOutlinePhotograph,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlay,
} from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi2';

const IOSAppSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showQrModal, setShowQrModal] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState(null);
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

  // Features data
  const features = config?.features || [
    {
      title: "Real-time Tracking",
      description: "Track shipments and inventory in real-time with live updates and push notifications.",
      icon: "globe",
      color: "from-blue-500 to-blue-600",
      details: [
        "Live GPS tracking of shipments",
        "Real-time inventory levels",
        "Push notifications for status changes",
        "ETA predictions and alerts"
      ],
      image: "/ios-features/tracking.jpg",
      videoUrl: "/videos/tracking-demo.mp4"
    },
    {
      title: "Offline Mode",
      description: "Access critical data and continue working even without an internet connection.",
      icon: "wifi",
      color: "from-green-500 to-green-600",
      details: [
        "Offline data synchronization",
        "Cached inventory information",
        "Scan barcodes offline",
        "Auto-sync when connection restored"
      ],
      image: "/ios-features/offline.jpg"
    },
    {
      title: "Barcode Scanning",
      description: "Quickly scan product barcodes using your device's camera for instant information.",
      icon: "qrcode",
      color: "from-purple-500 to-purple-600",
      details: [
        "Support for all major barcode types",
        "Batch scanning capability",
        "Real-time product lookup",
        "Inventory count automation"
      ],
      image: "/ios-features/scanning.jpg",
      videoUrl: "/videos/scanning-demo.mp4"
    },
    {
      title: "Analytics Dashboard",
      description: "View key metrics and performance indicators in a mobile-optimized dashboard.",
      icon: "chart",
      color: "from-orange-500 to-orange-600",
      details: [
        "Customizable KPIs",
        "Interactive charts",
        "Export reports",
        "Trend analysis"
      ],
      image: "/ios-features/analytics.jpg"
    },
    {
      title: "Team Collaboration",
      description: "Communicate and collaborate with team members directly within the app.",
      icon: "users",
      color: "from-red-500 to-red-600",
      details: [
        "Team messaging",
        "Task assignment",
        "File sharing",
        "Activity feed"
      ],
      image: "/ios-features/collaboration.jpg",
      videoUrl: "/videos/collaboration-demo.mp4"
    },
    {
      title: "Secure Access",
      description: "Enterprise-grade security with biometric authentication and data encryption.",
      icon: "shield",
      color: "from-indigo-500 to-indigo-600",
      details: [
        "Face ID / Touch ID login",
        "End-to-end encryption",
        "Role-based access control",
        "Session management"
      ],
      image: "/ios-features/security.jpg"
    }
  ];

  // Screenshots for carousel
  const screenshots = config?.screenshots || [
    { src: "/ios-screenshots/dashboard.png", title: "Dashboard", description: "View key metrics at a glance" },
    { src: "/ios-screenshots/tracking.png", title: "Live Tracking", description: "Track shipments in real-time" },
    { src: "/ios-screenshots/scanning.png", title: "Barcode Scanner", description: "Scan products instantly" },
    { src: "/ios-screenshots/analytics.png", title: "Analytics", description: "Deep dive into your data" },
    { src: "/ios-screenshots/collaboration.png", title: "Team Chat", description: "Collaborate with your team" }
  ];

  // Testimonials
  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "Global Retail Corp",
      quote: "The iOS app has transformed how we manage our supply chain. The offline mode is a lifesaver in our warehouses.",
      rating: 5,
      avatar: "/testimonials/sarah.jpg",
      videoUrl: "/videos/testimonial-sarah.mp4"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "HealthTech Solutions",
      quote: "Best supply chain app on the App Store. The barcode scanning feature alone saves us hours every day.",
      rating: 5,
      avatar: "/testimonials/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Logistics Director",
      company: "EuroLogistics",
      quote: "The analytics dashboard gives me real-time visibility into our entire operation. Highly recommended!",
      rating: 5,
      avatar: "/testimonials/emily.jpg",
      videoUrl: "/videos/testimonial-emily.mp4"
    }
  ];

  // What's new in latest version
  const whatsNew = config?.whatsNew || [
    { version: "3.0.0", date: "March 15, 2024", features: ["Dark mode support", "Widgets for home screen", "Siri shortcuts integration", "Performance improvements"] },
    { version: "2.5.0", date: "February 1, 2024", features: ["Offline mode enhanced", "Batch scanning added", "Push notifications upgrade"] },
    { version: "2.0.0", date: "December 10, 2023", features: ["Analytics dashboard", "Team collaboration tools", "Biometric authentication"] }
  ];

  // Stats
  const stats = config?.stats || [
    { value: "4.9", label: "App Store Rating", icon: "star", trend: "5,000+ reviews", trendUp: true },
    { value: "100K+", label: "Downloads", icon: "download", trend: "+25% this month", trendUp: true },
    { value: "99.9%", label: "Uptime", icon: "clock", trend: "Monthly average", trendUp: true },
    { value: "24/7", label: "Support", icon: "chat", trend: "Average 2-min response", trendUp: true }
  ];

  // Compatibility
  const compatibility = config?.compatibility || [
    { version: "iOS 15.0 or later", device: "iPhone, iPod touch", icon: "mobile" },
    { version: "iPadOS 15.0 or later", device: "iPad", icon: "tablet" },
    { version: "macOS 12.0 or later", device: "Mac with Apple M1 chip or later", icon: "desktop" }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'sparkles' },
    { id: 'features', label: 'Features', icon: 'grid' },
    { id: 'screenshots', label: 'Screenshots', icon: 'photo' },
    { id: 'testimonials', label: 'Testimonials', icon: 'chat' },
    { id: 'whatsnew', label: 'What\'s New', icon: 'refresh' }
  ];

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="iOS App Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-ios" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-ios)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineDeviceMobile className="w-4 h-4" />
            <span className="text-sm font-medium">
              {typeof config?.badge === "string"
                ? config.badge
                : config?.badge?.text || "iOS App"}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "SupplyChainPro for"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "iOS"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Manage your supply chain on the go with our native iOS app. Available for iPhone, iPad, and Mac. Download now and take control of your operations anywhere."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'star' ? <HiOutlineStar className="w-4 h-4 text-blue-600" /> :
                    stat.icon === 'download' ? <HiOutlineDownload className="w-4 h-4 text-blue-600" /> :
                      stat.icon === 'clock' ? <HiOutlineClock className="w-4 h-4 text-blue-600" /> :
                        <HiOutlineChat className="w-4 h-4 text-blue-600" />}
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
              {tab.icon === 'sparkles' ? <HiOutlineSparkles className="w-4 h-4" /> :
                tab.icon === 'grid' ? <HiOutlineViewGrid className="w-4 h-4" /> :
                  tab.icon === 'photo' ? <HiOutlinePhotograph className="w-4 h-4" /> :
                    tab.icon === 'chat' ? <HiOutlineChat className="w-4 h-4" /> :
                      <HiOutlineRefresh className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Hero Section with Phone Mockup */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 py-1 mb-4">
                    <HiOutlineSparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Available on App Store</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Native iOS Experience
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Built with Swift and optimized for all Apple devices. Enjoy seamless integration with iOS features like Face ID, Widgets, and Siri Shortcuts.
                  </p>
                  <div className="space-y-3 mb-8">
                    {features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <HiOutlineDownload className="w-5 h-5" />
                      Download on the App Store
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setShowQrModal(true)}
                      className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                    >
                      <HiOutlineQrcode className="w-5 h-5" />
                      Scan QR Code
                    </button>
                  </div>
                </div>
                <div className="relative flex justify-center">
                  <div className="relative w-72 h-auto">
                    <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl" />
                    <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                        <div className="bg-blue-600 p-3 flex items-center justify-between">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-green-500" />
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

            {/* Compatibility Section */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Compatibility</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {compatibility.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                      {item.icon === 'mobile' ? <HiOutlineDeviceMobile className="w-6 h-6 text-blue-600" /> :
                        item.icon === 'tablet' ? <HiOutlineDeviceTablet className="w-6 h-6 text-blue-600" /> :
                          <HiOutlineDesktopComputer className="w-6 h-6 text-blue-600" />}
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.version}</p>
                    <p className="text-xs text-gray-500">{item.device}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Get App by Email Form */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <HiOutlineMail className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Get App Download Link</h3>
                <p className="text-gray-600 dark:text-gray-400">Enter your email address and we'll send you a direct download link for the App Store.</p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiOutlineCheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Link Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400">Check your inbox for the App Store download link.</p>
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
                  <p className="text-center text-xs text-gray-500 mt-4">By providing your email, you agree to receive a one-time download link.</p>
                </form>
              )}
            </div>
          </>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => setExpandedFeature(expandedFeature === idx ? null : idx)}
              >
                <div className={`h-1.5 bg-linear-to-r ${feature.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${feature.color} flex items-center justify-center`}>
                      {feature.icon === 'globe' ? <HiOutlineGlobe className="w-6 h-6 text-white" /> :
                        feature.icon === 'wifi' ? <HiOutlineWifi className="w-6 h-6 text-white" /> :
                          feature.icon === 'qrcode' ? <HiOutlineQrcode className="w-6 h-6 text-white" /> :
                            feature.icon === 'chart' ? <HiOutlineChartBar className="w-6 h-6 text-white" /> :
                              feature.icon === 'users' ? <HiOutlineUserGroup className="w-6 h-6 text-white" /> :
                                <HiOutlineShieldCheck className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{feature.description}</p>
                  {expandedFeature === idx && (
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
                      {feature.videoUrl && (
                        <button
                          onClick={(e) => { e.stopPropagation(); setCurrentVideo(feature.videoUrl); setShowVideoModal(true); }}
                          className="mt-3 inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:underline"
                        >
                          <HiOutlinePlay className="w-4 h-4" />
                          Watch Demo
                        </button>
                      )}
                    </div>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">iOS native feature</span>
                    <span className="text-blue-600 text-sm font-semibold">{expandedFeature === idx ? 'Show less' : 'Learn more'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && testimonials.length > 0 && (
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

        {/* What's New Tab */}
        {activeTab === 'whatsnew' && (
          <div className="space-y-6 mb-12">
            {whatsNew.map((update, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <HiOutlineSparkles className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Version {update.version}</h3>
                  </div>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <ul className="space-y-2">
                  {update.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* QR Code Modal */}
        {showQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowQrModal(false)}>
            <div className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4">
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
                  Scan this QR code with your iPhone camera to download the app from the App Store.
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
      </div>

      <style>{`
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

export default IOSAppSection3;
