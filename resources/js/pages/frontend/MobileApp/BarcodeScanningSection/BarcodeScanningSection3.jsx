// page/frontend/MobileApp/BarcodeScanningSection/BarcodeScanningSection3.jsx

/**
 * Barcode Scanning Section III - Full Scanning Hub with Carousel & Video Demos
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Formats, Scans per Day, Accuracy, Scan Time)
 * - Multi-tab UI (Overview, Features, Screenshots, Scan History, Stories)
 * - Phone Mockup with Animated Scanning Overlay
 * - Screenshots Carousel with Auto-play and Manual Navigation
 * - Features Grid with Category Badges, Performance Metrics, and Video Demos
 * - Scan History Table with Search and Filter Capabilities
 * - Testimonials Grid with Avatars and Video Testimonials
 * - Video Modal for Feature Demos and Testimonials
 * - Supported Barcode Types Quick Reference
 * - Live Demo Button with Scan Success Modal
 * - Download CTAs for App Store and Google Play
 * - Circuit Board Background Pattern
 * - Animated Pulse Badge in Header
 * - Responsive Grid Layout for All Tabs
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
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
  HiOutlineX,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlay,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const BarcodeScanningSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [scannedCode, setScannedCode] = useState('');
  const [scanHistory, setScanHistory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [showScanModal, setShowScanModal] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState(null);

  // ==================== REFERENCE MANAGEMENT ====================
  const videoRef = useRef(null);
  const carouselRef = useRef(null);

  // ==================== MEMOIZED DATA ====================

  const features = config?.features || [
    {
      id: 1,
      title: "Instant Barcode Recognition",
      description: "Scan any barcode type instantly with your device's camera. Supports UPC, EAN, Code 128, QR codes, and more.",
      icon: "qrcode",
      gradient: "from-blue-500 to-blue-600",
      category: "Core",
      metrics: "99.9% accuracy",
      details: [
        "Supports 20+ barcode formats",
        "Real-time recognition",
        "Works in low light conditions",
        "Auto-focus and zoom capabilities"
      ],
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      id: 2,
      title: "Batch Scanning Mode",
      description: "Scan multiple items in rapid succession for inventory counts and receiving operations.",
      icon: "bolt",
      gradient: "from-emerald-500 to-emerald-600",
      category: "Productivity",
      metrics: "10K+ scans/day",
      details: [
        "Continuous scanning mode",
        "Audible feedback for each scan",
        "Batch count tracking",
        "Export scan history"
      ]
    },
    {
      id: 3,
      title: "Product Information Lookup",
      description: "Get instant product details including pricing, stock levels, and location data.",
      icon: "database",
      gradient: "from-purple-500 to-purple-600",
      category: "Data",
      metrics: "Real-time",
      details: [
        "Real-time inventory data",
        "Pricing and cost information",
        "Warehouse location mapping",
        "Product images and descriptions"
      ]
    },
    {
      id: 4,
      title: "Offline Scanning",
      description: "Continue scanning even without an internet connection. Data syncs automatically when back online.",
      icon: "wifi",
      gradient: "from-amber-500 to-amber-600",
      category: "Reliability",
      metrics: "100% uptime",
      details: [
        "Works without internet",
        "Local data storage",
        "Automatic sync on reconnect",
        "No data loss guarantee"
      ]
    },
    {
      id: 5,
      title: "Custom Actions",
      description: "Configure custom actions for scanned items like update inventory, create orders, or generate labels.",
      icon: "cog",
      gradient: "from-rose-500 to-rose-600",
      category: "Automation",
      metrics: "50+ actions",
      details: [
        "Workflow automation",
        "Custom rule engine",
        "Integration with existing systems",
        "One-tap actions"
      ]
    },
    {
      id: 6,
      title: "Scan History",
      description: "Access your complete scan history with timestamps, locations, and user information.",
      icon: "clock",
      gradient: "from-indigo-500 to-indigo-600",
      category: "Analytics",
      metrics: "Unlimited",
      details: [
        "Unlimited history retention",
        "Search and filter capabilities",
        "Export to CSV/Excel",
        "Audit trail for compliance"
      ]
    }
  ];

  const screenshots = config?.screenshots || [
    { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", title: "Scan View", description: "Point and scan interface" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop", title: "Batch Mode", description: "Scan multiple items quickly" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", title: "Product Info", description: "Instant product details" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop", title: "Scan History", description: "Track all scans" }
  ];

  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Warehouse Manager",
      company: "Global Retail Corp",
      quote: "The barcode scanning feature has revolutionized our inventory management. We've reduced counting time by 70%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "HealthTech Solutions",
      quote: "Batch scanning mode is a game-changer for our receiving operations. So fast and accurate!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Logistics Coordinator",
      company: "EuroLogistics",
      quote: "Offline scanning means we never miss a scan, even when our Wi-Fi is down. Perfect for warehouse environments.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
    }
  ];

  const recentScans = useMemo(() => config?.recentScans || [
    { id: 1, code: "PROD-ABC123", product: "Wireless Headphones", location: "Aisle 4, Shelf B", timestamp: "2 minutes ago", format: "QR Code", status: "success" },
    { id: 2, code: "PROD-DEF456", product: "USB-C Cable", location: "Aisle 2, Shelf D", timestamp: "15 minutes ago", format: "UPC-A", status: "success" },
    { id: 3, code: "PROD-GHI789", product: "Laptop Stand", location: "Aisle 5, Shelf A", timestamp: "1 hour ago", format: "EAN-13", status: "success" },
    { id: 4, code: "PROD-JKL012", product: "Wireless Mouse", location: "Aisle 2, Shelf C", timestamp: "3 hours ago", format: "Code 128", status: "warning" }
  ], [config?.recentScans]);

  const barcodeFormats = [
    { id: 'all', label: 'All Formats' },
    { id: 'QR Code', label: 'QR Code' },
    { id: 'UPC-A', label: 'UPC-A' },
    { id: 'EAN-13', label: 'EAN-13' },
    { id: 'Code 128', label: 'Code 128' }
  ];

  const stats = config?.stats || [
    { value: "20+", label: "Barcode Formats", icon: "qrcode", trend: "+5 this year", trendUp: true },
    { value: "10K+", label: "Scans per Day", icon: "bolt", trend: "+25%", trendUp: true },
    { value: "99.9%", label: "Accuracy Rate", icon: "check", trend: "Industry best", trendUp: true },
    { value: "<1s", label: "Scan Time", icon: "clock", trend: "Average", trendUp: true }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'grid' },
    { id: 'features', label: 'Features', icon: 'chip' },
    { id: 'screenshots', label: 'Screenshots', icon: 'photo' },
    { id: 'history', label: 'Scan History', icon: 'clock' },
    { id: 'stories', label: 'Stories', icon: 'chat' }
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons and Heroicons 2 sets
   */
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
      x: <HiOutlineX className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      play: <HiOutlinePlay className={className} />
    };
    return icons[iconName] || <HiOutlineQrcode className={className} />;
  };

  /**
   * Get status badge color based on status
   */
  const getStatusBadgeColor = (status) => {
    return status === 'success'
      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
      : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
  };

  /**
   * Filter history based on search and format
   */
  const getFilteredHistory = useCallback(() => {
    let history = [...recentScans];
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      history = history.filter(h =>
        h.code.toLowerCase().includes(query) ||
        h.product.toLowerCase().includes(query)
      );
    }
    if (selectedFormat !== 'all') {
      history = history.filter(h => h.format === selectedFormat);
    }
    return history;
  }, [recentScans, searchQuery, selectedFormat]);

  const filteredHistory = getFilteredHistory();

  /**
   * Toggle feature expansion
   */
  const toggleFeature = (featureId) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  /**
   * Handle scan demo
   */
  const handleScan = () => {
    const newCode = `PROD-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    setScannedCode(newCode);
    setShowScanModal(true);
    setScanHistory([{ code: newCode, timestamp: new Date().toLocaleTimeString() }, ...scanHistory]);
    setTimeout(() => setShowScanModal(false), 2000);
  };

  /**
   * Close scan modal
   */
  const closeScanModal = () => {
    setShowScanModal(false);
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
      aria-label="Barcode Scanning Hub"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* ==================== BACKGROUND PATTERN - CIRCUIT BOARD ==================== */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-barcode" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern-barcode)" />
        </svg>
      </div>

      {/* Gradient Animated Orbs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HERO SECTION ==================== */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineQrcode className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Barcode Scanning"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Scan, Track, and"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Manage"}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description ||
              "Powerful barcode scanning capabilities built into our mobile app. Scan products instantly, update inventory, and streamline warehouse operations."}
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

        {/* ==================== OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <>
            {/* Phone Mockup with Scanning Animation */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 py-1 mb-4">
                    <HiOutlineSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Point. Scan. Done.</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Lightning-Fast Barcode Scanning
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our advanced scanning engine recognizes barcodes instantly, even in challenging conditions. Just point your camera and scan.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Works with damaged or poorly printed barcodes</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Optimized for low-light warehouse environments</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Continuous scan mode for high-volume operations</p>
                    </div>
                  </div>
                  <button
                    onClick={handleScan}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    aria-label="Try live demo"
                  >
                    <HiOutlineQrcode className="w-5 h-5" />
                    Try Live Demo
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Phone Mockup */}
                <div className="relative flex justify-center">
                  <div className="relative w-72 h-auto cursor-pointer" onClick={handleScan} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleScan()}>
                    <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl animate-pulse" />
                    <div className="relative bg-gray-900 dark:bg-gray-950 rounded-3xl p-2 shadow-2xl">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                        <div className="bg-blue-600 p-3 flex items-center justify-between">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
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
                              <div className="w-1 h-1 rounded-full bg-emerald-500" />
                              <div className="w-1 h-1 rounded-full bg-emerald-500" />
                              <div className="w-1 h-1 rounded-full bg-emerald-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supported Barcode Types */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Supported Barcode Types</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {barcodeFormats.filter(f => f.id !== 'all').map((format) => (
                  <span key={format.id} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                    {format.label}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ==================== FEATURES TAB ==================== */}
        {activeTab === 'features' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature) => {
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
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {feature.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{feature.description}</p>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-500">Performance:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{feature.metrics}</span>
                    </div>
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
                            className="mt-3 text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center gap-1 hover:underline"
                            aria-label="Watch demo video"
                          >
                            <HiOutlinePlay className="w-4 h-4" />
                            Watch Demo
                          </button>
                        )}
                      </div>
                    )}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{feature.details.length} features</span>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                        {isExpanded ? 'Show less' : 'Learn more'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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

        {/* ==================== SCAN HISTORY TAB ==================== */}
        {activeTab === 'history' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Scans</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineSearch className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by code or product..."
                    className="pl-9 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500"
                    aria-label="Search scans"
                  />
                </div>
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  aria-label="Filter by format"
                >
                  {barcodeFormats.map(format => (
                    <option key={format.id} value={format.id === 'all' ? 'all' : format.label}>
                      {format.label}
                    </option>
                  ))}
                </select>
                <button className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" aria-label="Export data">
                  <HiOutlineDownload className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                  <tr>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Barcode</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Product</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Location</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Time</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Format</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {filteredHistory.map((scan) => (
                    <tr key={scan.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">
                      <td className="p-4 text-sm font-mono font-medium text-gray-900 dark:text-white">{scan.code}</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{scan.product}</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{scan.location}</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{scan.timestamp}</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{scan.format}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(scan.status)}`}>
                          {scan.status === 'success' ? <HiOutlineCheckCircle className="w-3 h-3" /> : <HiOutlineClock className="w-3 h-3" />}
                          {scan.status === 'success' ? 'Success' : 'Warning'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredHistory.length === 0 && (
              <div className="text-center py-8">
                <HiOutlineQrcode className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                <p className="text-gray-500 dark:text-gray-400">No scan history found.</p>
              </div>
            )}
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

        {/* ==================== DOWNLOAD CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineQrcode className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Speed Up Your Operations?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Download the app and start scanning today. Transform your warehouse operations with our powerful barcode scanning technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Download on App Store"
            >
              <HiOutlineDownload className="w-5 h-5" />
              App Store
            </button>
            <button
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Download on Google Play"
            >
              <HiOutlineDownload className="w-5 h-5" />
              Google Play
            </button>
          </div>
        </div>

        {/* ==================== SCAN SUCCESS MODAL ==================== */}
        {showScanModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeScanModal}
            role="dialog"
            aria-label="Scan successful"
            aria-modal="true"
          >
            <div
              className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl animate-bounce-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-emerald-600 p-4 text-center">
                <HiOutlineCheckCircle className="w-12 h-12 mx-auto text-white mb-2" />
                <h3 className="text-white font-bold text-lg">Scan Successful!</h3>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-2">Product Code:</p>
                <p className="text-2xl font-mono font-bold text-gray-900 dark:text-white">{scannedCode}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Product: Wireless Headphones</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location: Aisle 4, Shelf B</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Stock: 245 units</p>
                <button
                  onClick={closeScanModal}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                  aria-label="Close modal"
                >
                  Close
                </button>
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
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
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
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
        .animate-bounce-in {
          animation: bounce-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default BarcodeScanningSection3;