// page/frontend/MobileApp/AppFeaturesSection/AppFeaturesSection2.jsx

/**
 * App Features Section II - Advanced Features Hub with Filtering & Reviews
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Rating, Downloads, Uptime, Support)
 * - Multi-tab UI (Features, Screenshots, Reviews)
 * - Category Filter Pills with Icon Labels
 * - Grid/List View Mode Toggle for Features
 * - Feature Cards with Metrics Badges and Expandable Details
 * - Video Demo Modal for Feature Walkthroughs
 * - Screenshots Gallery with Hover Zoom Effect
 * - Reviews Section with Star Ratings and Avatars
 * - Download CTAs for App Store and Google Play
 * - Animated Gradient Orbs in Background
 * - Responsive Grid and List Layouts
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineBell,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineClock,
  HiOutlineEye,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineRefresh,
  HiOutlineCalendar,
  HiOutlineTag,
  HiOutlineChartBar,
  HiOutlineChip,
  HiOutlineAcademicCap,
  HiOutlineGlobe,
  HiOutlineLightningBolt,
  HiOutlineDeviceMobile,
  HiOutlineDesktopComputer,
  HiOutlineWifi,
  HiOutlineDatabase,
  HiOutlineCloudUpload,
  HiOutlineCode,
  HiOutlineDocumentText,
  HiOutlinePhotograph,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
  HiOutlineLocationMarker,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineShare,
  HiOutlineDownload,
  HiOutlineBookmark,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineChat,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineChartPie,
  HiOutlineTrendingUp,
  HiOutlineFire,
  HiOutlineSparkles,
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineZoomIn,
} from 'react-icons/hi';
import { HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlinePlay } from 'react-icons/hi2';

const AppFeaturesSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [viewMode, setViewMode] = useState('grid');
  const [activeTab, setActiveTab] = useState('features');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ==================== MEMOIZED DATA ====================

  const features = useMemo(() => config?.features || [
    {
      title: "Real-time Tracking",
      description: "Track shipments and inventory in real-time with live updates and push notifications.",
      icon: "globe",
      gradient: "from-blue-500 to-blue-600",
      category: "Tracking",
      metrics: "2.5M+ shipments tracked",
      details: [
        "Live shipment tracking with GPS",
        "Inventory level monitoring",
        "Push notifications for status changes",
        "Estimated arrival times"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Offline Mode",
      description: "Access critical data and continue working even without an internet connection.",
      icon: "wifi",
      gradient: "from-emerald-500 to-emerald-600",
      category: "Accessibility",
      metrics: "100% uptime guaranteed",
      details: [
        "Offline data synchronization",
        "Cached inventory information",
        "Scan barcodes offline",
        "Auto-sync when connection restored"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      title: "Barcode Scanning",
      description: "Quickly scan product barcodes using your device's camera for instant information.",
      icon: "photo",
      gradient: "from-purple-500 to-purple-600",
      category: "Scanning",
      metrics: "10K+ scans per day",
      details: [
        "Support for all major barcode types",
        "Batch scanning capability",
        "Real-time product lookup",
        "Inventory count automation"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Analytics Dashboard",
      description: "View key metrics and performance indicators in a mobile-optimized dashboard.",
      icon: "chart",
      gradient: "from-amber-500 to-amber-600",
      category: "Analytics",
      metrics: "50+ KPIs tracked",
      details: [
        "Customizable KPIs",
        "Interactive charts",
        "Export reports",
        "Trend analysis"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Team Collaboration",
      description: "Communicate and collaborate with team members directly within the app.",
      icon: "users",
      gradient: "from-rose-500 to-rose-600",
      category: "Collaboration",
      metrics: "1,000+ team messages daily",
      details: [
        "Team messaging",
        "Task assignment",
        "File sharing",
        "Activity feed"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Secure Access",
      description: "Enterprise-grade security with biometric authentication and data encryption.",
      icon: "shield",
      gradient: "from-indigo-500 to-indigo-600",
      category: "Security",
      metrics: "SOC 2 compliant",
      details: [
        "Face ID / Fingerprint login",
        "End-to-end encryption",
        "Role-based access control",
        "Session management"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    }
  ], [config]);

  const categories = [
    { id: 'all', label: 'All Features', icon: 'grid' },
    { id: 'Tracking', label: 'Tracking', icon: 'globe' },
    { id: 'Accessibility', label: 'Accessibility', icon: 'wifi' },
    { id: 'Scanning', label: 'Scanning', icon: 'photo' },
    { id: 'Analytics', label: 'Analytics', icon: 'chart' },
    { id: 'Collaboration', label: 'Collaboration', icon: 'users' },
    { id: 'Security', label: 'Security', icon: 'shield' }
  ];

  const stats = config?.stats || [
    { value: "4.9", label: "App Store Rating", icon: "star", trend: "5,000+ reviews", trendUp: true },
    { value: "100K+", label: "Downloads", icon: "download", trend: "+25% this month", trendUp: true },
    { value: "99.9%", label: "Uptime", icon: "clock", trend: "Monthly average", trendUp: true },
    { value: "24/7", label: "Support", icon: "chat", trend: "Average 2-min response", trendUp: true }
  ];

  const tabs = [
    { id: 'features', label: 'Features', icon: 'grid' },
    { id: 'screenshots', label: 'Screenshots', icon: 'photo' },
    { id: 'reviews', label: 'Reviews', icon: 'star' }
  ];

  const screenshots = config?.screenshots || [
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop", title: "Dashboard", description: "View key metrics at a glance" },
    { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=500&fit=crop", title: "Live Tracking", description: "Track shipments in real-time" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=500&fit=crop", title: "Barcode Scanner", description: "Scan products instantly" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop", title: "Analytics", description: "Deep dive into your data" }
  ];

  const reviews = config?.reviews || [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "March 15, 2024",
      comment: "This app has transformed how we manage our supply chain. The offline mode is a lifesaver when I'm in the warehouse with poor connectivity.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
    },
    {
      name: "Michael Chen",
      rating: 5,
      date: "March 10, 2024",
      comment: "The barcode scanning feature is incredibly fast and accurate. Saves us hours of manual data entry every day.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      rating: 4,
      date: "March 5, 2024",
      comment: "Great app overall. The analytics dashboard gives me all the insights I need at my fingertips.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
    }
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons and Heroicons 2 sets
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      mobile: <HiOutlineDeviceMobile className={className} />,
      desktop: <HiOutlineDesktopComputer className={className} />,
      wifi: <HiOutlineWifi className={className} />,
      database: <HiOutlineDatabase className={className} />,
      cloud: <HiOutlineCloudUpload className={className} />,
      code: <HiOutlineCode className={className} />,
      document: <HiOutlineDocumentText className={className} />,
      photo: <HiOutlinePhotograph className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
      location: <HiOutlineLocationMarker className={className} />,
      search: <HiOutlineSearch className={className} />,
      filter: <HiOutlineFilter className={className} />,
      share: <HiOutlineShare className={className} />,
      download: <HiOutlineDownload className={className} />,
      bookmark: <HiOutlineBookmark className={className} />,
      mail: <HiOutlineMail className={className} />,
      phone: <HiOutlinePhone className={className} />,
      chat: <HiOutlineChat className={className} />,
      user: <HiOutlineUser className={className} />,
      users: <HiOutlineUsers className={className} />,
      chart: <HiOutlineChartPie className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />,
      sparkles: <HiOutlineSparkles className={className} />,
      shield: <HiOutlineShieldCheck className={className} />,
      clock: <HiOutlineClock className={className} />,
      eye: <HiOutlineEye className={className} />,
      cog: <HiOutlineCog className={className} />,
      refresh: <HiOutlineRefresh className={className} />,
      calendar: <HiOutlineCalendar className={className} />,
      tag: <HiOutlineTag className={className} />,
      chartBar: <HiOutlineChartBar className={className} />,
      chip: <HiOutlineChip className={className} />,
      academic: <HiOutlineAcademicCap className={className} />,
      globe: <HiOutlineGlobe className={className} />,
      bolt: <HiOutlineLightningBolt className={className} />,
      bell: <HiOutlineBell className={className} />,
      check: <HiOutlineCheckCircle className={className} />,
      arrow: <HiOutlineArrowRight className={className} />,
      heart: <HiOutlineHeart className={className} />,
      star: <HiOutlineStar className={className} />,
      trophy: <HiOutlineTrophy className={className} />,
      building: <HiOutlineBuildingOffice className={className} />,
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      x: <HiOutlineX className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      zoom: <HiOutlineZoomIn className={className} />,
      play: <HiOutlinePlay className={className} />,
    };
    return icons[iconName] || <HiOutlineDeviceMobile className={className} />;
  };

  /**
   * Filter features by category
   */
  const getFilteredFeatures = useCallback(() => {
    if (selectedCategory === 'all') return features;
    return features.filter(f => f.category === selectedCategory);
  }, [features, selectedCategory]);

  const filteredFeatures = getFilteredFeatures();

  /**
   * Toggle feature expansion
   */
  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? null : index);
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

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="App Features Center"
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
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER WITH STATS ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineDeviceMobile className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {typeof config?.badge === "string"
                  ? config.badge
                  : config?.badge?.text || "App Features"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Powerful"}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || "Features"}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                "Our mobile app puts the power of SupplyChainPro in your pocket. Manage your supply chain anytime, anywhere with these powerful features."}
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
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  aria-label={`Filter by ${category.label}`}
                >
                  {getIcon(category.icon, "w-4 h-4")}
                  {category.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-end mb-6">
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                  aria-label="Grid view"
                >
                  <HiOutlineViewGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                  aria-label="List view"
                >
                  <HiOutlineViewList className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Features Grid/List */}
            <div className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredFeatures.map((feature, idx) => {
                const isExpanded = activeFeature === idx;
                return (
                  <div
                    key={idx}
                    className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                    onClick={() => toggleFeature(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFeature(idx)}
                  >
                    {/* Icon Area */}
                    <div className={`${viewMode === 'list' ? 'md:w-64 md:shrink-0' : ''}`}>
                      <div className={`h-32 ${viewMode === 'list' ? 'h-full' : ''} bg-linear-to-r ${feature.gradient} flex items-center justify-center`}>
                        {getIcon(feature.icon, "w-12 h-12 text-white opacity-80")}
                      </div>
                    </div>

                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                          <p className="text-sm text-gray-500">{feature.category}</p>
                        </div>
                        <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full">
                          {feature.metrics}
                        </span>
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
                              className="mt-3 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                              aria-label="Watch demo video"
                            >
                              <HiOutlinePlay className="w-4 h-4" />
                              Watch Demo
                            </button>
                          )}
                        </div>
                      )}

                      <div className="mt-4 flex items-center justify-between pt-2">
                        <span className="text-xs text-gray-500">{isExpanded ? 'Showing details' : `${feature.details.length} key features`}</span>
                        <button
                          className="text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center gap-1"
                          aria-label={isExpanded ? "Show less" : "Learn more"}
                        >
                          {isExpanded ? 'Show less' : 'Learn more'}
                          <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ==================== SCREENSHOTS TAB ==================== */}
        {activeTab === 'screenshots' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {screenshots.map((screenshot, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <HiOutlineZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{screenshot.title}</h3>
                  <p className="text-sm text-gray-500">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== REVIEWS TAB ==================== */}
        {activeTab === 'reviews' && (
          <div className="space-y-6 mb-12">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{review.name}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <HiOutlineStar
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'text-amber-500 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                    <p className="text-gray-600 dark:text-gray-400">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center">
              <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline" aria-label="Read all reviews">
                Read all 1,200+ reviews →
              </button>
            </div>
          </div>
        )}

        {/* ==================== DOWNLOAD CTA ==================== */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineDeviceMobile className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Download the SupplyChainPro mobile app today and take your supply chain management to the next level.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Download from App Store"
            >
              <HiOutlineDownload className="w-5 h-5" />
              App Store
            </button>
            <button
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              aria-label="Download from Google Play"
            >
              <HiOutlineDownload className="w-5 h-5" />
              Google Play
            </button>
          </div>
        </div>

        {/* ==================== VIDEO MODAL ==================== */}
        {showVideoModal && currentVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeVideoModal}
            role="dialog"
            aria-label="Video demo player"
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
              <video src={currentVideo} className="w-full" controls autoPlay />
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

export default AppFeaturesSection2;
