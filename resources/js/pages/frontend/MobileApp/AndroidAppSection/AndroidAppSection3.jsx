// page/frontend/MobileApp/AndroidAppSection/AndroidAppSection3.jsx

/**
 * Android App Section III - Full Android App Hub with Carousel & Video Demos
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Rating, Downloads, Uptime, Support)
 * - Multi-tab UI (Overview, Features, Screenshots, Testimonials, What's New)
 * - Hero Section with Phone Mockup and Feature Highlights
 * - Features Grid with Category Filters, Expandable Details, and Video Demo Modals
 * - Screenshots Carousel with Auto-play and Manual Navigation
 * - Testimonials Grid with Star Ratings, Avatars, and Video Testimonials
 * - What's New Section with Version Release Notes
 * - Compatibility Section with Device Requirements
 * - Email Form for Download Link Request
 * - QR Code Modal for Direct Google Play Access
 * - Video Modal for Feature Demos and Testimonials
 * - Circuit Board Background Pattern
 * - Animated Pulse Badge in Header
 * - Responsive Grid Layout for All Tabs
 *
 * All icons from react-icons (hi, hi2, fa, md)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useRef } from 'react';

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
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineWifi,
  HiOutlineX,
  HiOutlineSparkles,
  HiOutlineRefresh,
  HiOutlinePhotograph,
  HiOutlineViewGrid,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlay,
  HiOutlineBell,
  HiOutlineEye,
} from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi2';
import { MdOutlineWatchLater } from 'react-icons/md';

const AndroidAppSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQrModal, setShowQrModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== REFERENCE MANAGEMENT ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================

  const features = config?.features || [
    {
      title: "Real-time Tracking",
      description: "Track shipments and inventory in real-time with live updates and push notifications.",
      icon: "globe",
      gradient: "from-green-500 to-green-600",
      category: "Tracking",
      details: [
        "Live GPS tracking of shipments",
        "Real-time inventory levels",
        "Push notifications for status changes",
        "ETA predictions and alerts"
      ],
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Offline Mode",
      description: "Access critical data and continue working even without an internet connection.",
      icon: "wifi",
      gradient: "from-teal-500 to-teal-600",
      category: "Accessibility",
      details: [
        "Offline data synchronization",
        "Cached inventory information",
        "Scan barcodes offline",
        "Auto-sync when connection restored"
      ]
    },
    {
      title: "Barcode Scanning",
      description: "Quickly scan product barcodes using your device's camera for instant information.",
      icon: "qrcode",
      gradient: "from-emerald-500 to-emerald-600",
      category: "Scanning",
      details: [
        "Support for all major barcode types",
        "Batch scanning capability",
        "Real-time product lookup",
        "Inventory count automation"
      ],
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Analytics Dashboard",
      description: "View key metrics and performance indicators in a mobile-optimized dashboard.",
      icon: "chart",
      gradient: "from-cyan-500 to-cyan-600",
      category: "Analytics",
      details: [
        "Customizable KPIs",
        "Interactive charts",
        "Export reports",
        "Trend analysis"
      ]
    },
    {
      title: "Team Collaboration",
      description: "Communicate and collaborate with team members directly within the app.",
      icon: "users",
      gradient: "from-blue-500 to-blue-600",
      category: "Collaboration",
      details: [
        "Team messaging",
        "Task assignment",
        "File sharing",
        "Activity feed"
      ],
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Secure Access",
      description: "Enterprise-grade security with biometric authentication and data encryption.",
      icon: "shield",
      gradient: "from-indigo-500 to-indigo-600",
      category: "Security",
      details: [
        "Fingerprint / Face unlock",
        "End-to-end encryption",
        "Role-based access control",
        "Session management"
      ]
    }
  ];

  const screenshots = config?.screenshots || [
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop", title: "Dashboard", description: "View key metrics at a glance" },
    { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop", title: "Live Tracking", description: "Track shipments in real-time" },
    { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop", title: "Barcode Scanner", description: "Scan products instantly" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop", title: "Analytics", description: "Deep dive into your data" },
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop", title: "Team Chat", description: "Collaborate with your team" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=500&fit=crop", title: "Settings", description: "Customize your experience" }
  ];

  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "Global Retail Corp",
      quote: "The Android app has transformed how we manage our supply chain. The offline mode is a lifesaver in our warehouses.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "HealthTech Solutions",
      quote: "Best supply chain app on the Play Store. The barcode scanning feature alone saves us hours every day.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Logistics Director",
      company: "EuroLogistics",
      quote: "The analytics dashboard gives me real-time visibility into our entire operation. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
  ];

  const whatsNew = config?.whatsNew || [
    { version: "3.0.0", date: "March 15, 2024", features: ["Material You design", "Wear OS support", "Android Auto integration", "Performance improvements", "Dark mode enhancements"] },
    { version: "2.5.0", date: "February 1, 2024", features: ["Offline mode enhanced", "Batch scanning added", "Push notifications upgrade", "Tablet layout improvements"] },
    { version: "2.0.0", date: "December 10, 2023", features: ["Analytics dashboard", "Team collaboration tools", "Biometric authentication", "Widget support"] }
  ];

  const stats = config?.stats || [
    { value: "4.8", label: "Play Store Rating", icon: "star", trend: "50,000+ reviews", trendUp: true },
    { value: "500K+", label: "Downloads", icon: "download", trend: "+50K this month", trendUp: true },
    { value: "99.9%", label: "Uptime", icon: "clock", trend: "Monthly average", trendUp: true },
    { value: "24/7", label: "Support", icon: "chat", trend: "Average 2-min response", trendUp: true }
  ];

  const compatibility = config?.compatibility || [
    { version: "Android 8.0 (Oreo) or later", device: "Phones & Tablets", icon: "mobile", gradient: "from-green-500 to-green-600" },
    { version: "Wear OS 3.0 or later", device: "Smartwatches", icon: "watch", gradient: "from-teal-500 to-teal-600" },
    { version: "Android Auto", device: "In-car support", icon: "car", gradient: "from-emerald-500 to-emerald-600" }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'sparkles' },
    { id: 'features', label: 'Features', icon: 'grid' },
    { id: 'screenshots', label: 'Screenshots', icon: 'photo' },
    { id: 'testimonials', label: 'Testimonials', icon: 'chat' },
    { id: 'whatsnew', label: 'What\'s New', icon: 'refresh' }
  ];

  const categories = [
    { id: 'all', label: 'All Features', icon: 'grid' },
    { id: 'Tracking', label: 'Tracking', icon: 'globe' },
    { id: 'Accessibility', label: 'Accessibility', icon: 'wifi' },
    { id: 'Scanning', label: 'Scanning', icon: 'qrcode' },
    { id: 'Analytics', label: 'Analytics', icon: 'chart' },
    { id: 'Collaboration', label: 'Collaboration', icon: 'users' },
    { id: 'Security', label: 'Security', icon: 'shield' }
  ];

  const filteredFeatures = selectedCategory === 'all'
    ? features
    : features.filter(f => f.category === selectedCategory);

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
      grid: <HiOutlineViewGrid className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      photo: <HiOutlinePhotograph className={className} />,
      users: <HiOutlineUserGroup className={className} />,
      user: <HiOutlineUser className={className} />,
      x: <HiOutlineX className={className} />,
      arrow: <HiOutlineArrowRight className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      eye: <HiOutlineEye className={className} />,
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

  /**
   * Toggle feature expansion
   */
  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
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
      aria-label="Android App Hub"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-android" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-android)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineDeviceMobile className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Android App"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "SupplyChainPro for"}{' '}
            <span className="bg-linear-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Android"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              "Manage your supply chain on the go with our native Android app. Available on Google Play for phones, tablets, and Wear OS. Download now and take control of your operations anywhere."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  {getIcon(stat.icon, "w-4 h-4 text-green-600 dark:text-green-400")}
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
                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Switch to ${tab.label} tab`}
            >
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <>
            {/* Hero Section with Phone Mockup */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 rounded-full px-3 py-1 mb-4">
                    <HiOutlineSparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-xs font-medium text-green-700 dark:text-green-300">Available on Google Play</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Native Android Experience
                  </h2>
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
                      className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                      aria-label="Scan QR code"
                    >
                      <HiOutlineQrcode className="w-5 h-5" />
                      Scan QR Code
                    </button>
                  </div>
                </div>

                {/* Phone Mockup */}
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

            {/* Compatibility Section */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
                Compatibility
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {compatibility.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`w-12 h-12 rounded-full bg-linear-to-r ${item.gradient} flex items-center justify-center mx-auto mb-3`}>
                      {getIcon(item.icon, "w-6 h-6 text-white")}
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.version}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.device}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Get App by Email Form */}
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
          </>
        )}

        {/* ==================== FEATURES TAB ==================== */}
        {activeTab === 'features' && (
          <>
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  aria-label={`Filter by ${category.label}`}
                >
                  {getIcon(category.icon, "w-4 h-4")}
                  {category.label}
                  <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                    {category.id === 'all' ? features.length : features.filter(f => f.category === category.id).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredFeatures.map((feature, idx) => {
                const isExpanded = expandedFeature === idx;
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
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${feature.gradient} flex items-center justify-center`}>
                          {getIcon(feature.icon, "w-6 h-6 text-white")}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                      </div>
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
                          {feature.videoUrl && (
                            <button
                              onClick={(e) => { e.stopPropagation(); openVideoModal(feature.videoUrl); }}
                              className="mt-3 inline-flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-semibold hover:underline"
                              aria-label="Watch demo video"
                            >
                              <HiOutlinePlay className="w-4 h-4" />
                              Watch Demo
                            </button>
                          )}
                        </div>
                      )}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-500">Android native feature</span>
                        <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                          {isExpanded ? 'Show less' : 'Learn more'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
                        className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-6 h-2 bg-green-600' : 'w-2 h-2 bg-gray-400'
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

        {/* ==================== TESTIMONIALS TAB ==================== */}
        {activeTab === 'testimonials' && testimonials.length > 0 && (
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
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm">"{testimonial.quote}"</p>
                {testimonial.videoUrl && (
                  <button
                    onClick={() => openVideoModal(testimonial.videoUrl)}
                    className="mt-3 inline-flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-semibold hover:underline"
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

        {/* ==================== WHAT'S NEW TAB ==================== */}
        {activeTab === 'whatsnew' && (
          <div className="space-y-6 mb-12">
            {whatsNew.map((update, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <HiOutlineSparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Version {update.version}</h3>
                  </div>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <ul className="space-y-2">
                  {update.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

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

export default AndroidAppSection3;