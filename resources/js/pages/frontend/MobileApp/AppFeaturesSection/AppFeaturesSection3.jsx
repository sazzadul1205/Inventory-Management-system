// page/frontend/MobileApp/AppFeaturesSection/AppFeaturesSection3.jsx

// React
import { useState, useEffect, useCallback, useRef } from 'react';

// Icons
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
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlay
} from 'react-icons/hi';
import { HiOutlineTrophy, HiOutlineBuildingOffice } from 'react-icons/hi2';

const AppFeaturesSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('features');
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const carouselRef = useRef(null);
  const videoRef = useRef(null);

  // Carousel navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (config?.featuredFeatures?.length || 1));
  }, [config?.featuredFeatures?.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + (config?.featuredFeatures?.length || 1)) % (config?.featuredFeatures?.length || 1));
  }, [config?.featuredFeatures?.length]);

  // Auto-play carousel
  useEffect(() => {
    if (config?.autoPlayCarousel && config?.featuredFeatures?.length > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [config?.autoPlayCarousel, config?.featuredFeatures?.length, nextSlide]);

  // Icon mapping function
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
      'chevron-left': <HiOutlineChevronLeft className={className} />,
      'chevron-right': <HiOutlineChevronRight className={className} />,
      play: <HiOutlinePlay className={className} />
    };
    return icons[iconName] || <HiOutlineDeviceMobile className={className} />;
  };

  // Features data
  const features = config?.features || [
    {
      title: "Real-time Tracking",
      description: "Track shipments and inventory in real-time with live updates and push notifications.",
      icon: "globe",
      color: "from-blue-500 to-blue-600",
      category: "Tracking",
      metrics: "2.5M+ shipments tracked",
      details: [
        "Live shipment tracking with GPS",
        "Inventory level monitoring",
        "Push notifications for status changes",
        "Estimated arrival times"
      ],
      image: "/app-features/real-time-tracking.jpg",
      videoUrl: "/videos/real-time-tracking.mp4",
      isFeatured: true
    },
    {
      title: "Offline Mode",
      description: "Access critical data and continue working even without an internet connection.",
      icon: "wifi",
      color: "from-green-500 to-green-600",
      category: "Accessibility",
      metrics: "100% uptime guaranteed",
      details: [
        "Offline data synchronization",
        "Cached inventory information",
        "Scan barcodes offline",
        "Auto-sync when connection restored"
      ],
      image: "/app-features/offline-mode.jpg"
    },
    {
      title: "Barcode Scanning",
      description: "Quickly scan product barcodes using your device's camera for instant information.",
      icon: "photo",
      color: "from-purple-500 to-purple-600",
      category: "Scanning",
      metrics: "10K+ scans per day",
      details: [
        "Support for all major barcode types",
        "Batch scanning capability",
        "Real-time product lookup",
        "Inventory count automation"
      ],
      image: "/app-features/barcode-scanning.jpg",
      videoUrl: "/videos/barcode-scanning.mp4",
      isFeatured: true
    },
    {
      title: "Analytics Dashboard",
      description: "View key metrics and performance indicators in a mobile-optimized dashboard.",
      icon: "chart",
      color: "from-orange-500 to-orange-600",
      category: "Analytics",
      metrics: "50+ KPIs tracked",
      details: [
        "Customizable KPIs",
        "Interactive charts",
        "Export reports",
        "Trend analysis"
      ],
      image: "/app-features/analytics-dashboard.jpg"
    },
    {
      title: "Team Collaboration",
      description: "Communicate and collaborate with team members directly within the app.",
      icon: "users",
      color: "from-red-500 to-red-600",
      category: "Collaboration",
      metrics: "1,000+ team messages daily",
      details: [
        "Team messaging",
        "Task assignment",
        "File sharing",
        "Activity feed"
      ],
      image: "/app-features/team-collaboration.jpg",
      videoUrl: "/videos/team-collaboration.mp4",
      isFeatured: true
    },
    {
      title: "Secure Access",
      description: "Enterprise-grade security with biometric authentication and data encryption.",
      icon: "shield",
      color: "from-indigo-500 to-indigo-600",
      category: "Security",
      metrics: "SOC 2 compliant",
      details: [
        "Face ID / Fingerprint login",
        "End-to-end encryption",
        "Role-based access control",
        "Session management"
      ],
      image: "/app-features/secure-access.jpg"
    }
  ];

  // Featured features for carousel
  const featuredFeatures = features.filter(f => f.isFeatured);

  // Categories for filtering
  const categories = [
    { id: 'all', label: 'All Features', icon: 'grid', count: features.length },
    { id: 'Tracking', label: 'Tracking', icon: 'globe', count: features.filter(f => f.category === 'Tracking').length },
    { id: 'Accessibility', label: 'Accessibility', icon: 'wifi', count: features.filter(f => f.category === 'Accessibility').length },
    { id: 'Scanning', label: 'Scanning', icon: 'photo', count: features.filter(f => f.category === 'Scanning').length },
    { id: 'Analytics', label: 'Analytics', icon: 'chart', count: features.filter(f => f.category === 'Analytics').length },
    { id: 'Collaboration', label: 'Collaboration', icon: 'users', count: features.filter(f => f.category === 'Collaboration').length },
    { id: 'Security', label: 'Security', icon: 'shield', count: features.filter(f => f.category === 'Security').length }
  ];

  // Filter features by category
  const getFilteredFeatures = () => {
    if (selectedCategory === 'all') return features;
    return features.filter(f => f.category === selectedCategory);
  };

  const filteredFeatures = getFilteredFeatures();

  // Stats
  const stats = config?.stats || [
    { value: "4.9", label: "App Store Rating", icon: "star", trend: "5,000+ reviews", trendUp: true },
    { value: "100K+", label: "Downloads", icon: "download", trend: "+25% this month", trendUp: true },
    { value: "99.9%", label: "Uptime", icon: "clock", trend: "Monthly average", trendUp: true },
    { value: "24/7", label: "Support", icon: "chat", trend: "Average 2-min response", trendUp: true }
  ];

  const tabs = [
    { id: 'features', label: 'Features', icon: 'grid' },
    { id: 'showcase', label: 'Feature Showcase', icon: 'sparkles' }
  ];

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="App Features Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-app" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-app)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineDeviceMobile className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "App Features"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Powerful"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Features"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Our mobile app puts the power of SupplyChainPro in your pocket. Manage your supply chain anytime, anywhere with these powerful features."}
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
              {getIcon(tab.icon, "w-4 h-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Feature Showcase Carousel */}
        {activeTab === 'showcase' && featuredFeatures.length > 0 && (
          <div className="relative mb-16">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {featuredFeatures.map((feature, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <div className="relative h-125 rounded-3xl overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-10 h-10 rounded-xl bg-linear-to-r ${feature.color} flex items-center justify-center`}>
                            {getIcon(feature.icon, "w-5 h-5 text-white")}
                          </div>
                          <span className="text-sm font-semibold">{feature.category}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">{feature.title}</h2>
                        <p className="text-white/80 mb-4 max-w-2xl">{feature.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {feature.details.slice(0, 2).map((detail, dIdx) => (
                            <span key={dIdx} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                              {detail}
                            </span>
                          ))}
                        </div>
                        {feature.videoUrl && (
                          <button
                            onClick={() => { setCurrentVideo(feature.videoUrl); setShowVideoModal(true); }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/30 transition-colors"
                          >
                            <HiOutlinePlay className="w-4 h-4" />
                            Watch Demo
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {featuredFeatures.length > 1 && (
                <>
                  <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                    <HiOutlineChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                    <HiOutlineChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {featuredFeatures.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50'}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Features Tab */}
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
                >
                  {getIcon(category.icon, "w-4 h-4")}
                  {category.label}
                  <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => setActiveFeature(activeFeature === idx ? -1 : idx)}
                >
                  <div className={`h-1.5 bg-linear-to-r ${feature.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${feature.color} flex items-center justify-center`}>
                          {getIcon(feature.icon, "w-6 h-6 text-white")}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                          <p className="text-xs text-gray-500">{feature.category}</p>
                        </div>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {feature.metrics}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {feature.description}
                    </p>

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
                      <button className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                        {activeFeature === idx ? 'Show less' : 'Learn more'}
                        <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${activeFeature === idx ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredFeatures.length === 0 && (
              <div className="text-center py-12">
                <HiOutlineDeviceMobile className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No features found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try selecting a different category</p>
              </div>
            )}
          </>
        )}

        {/* Download CTA */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineDeviceMobile className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Download the SupplyChainPro mobile app today and take your supply chain management to the next level.</p>
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

export default AppFeaturesSection3;