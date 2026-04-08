// page/frontend/MobileApp/OfflineModeSection/OfflineModeSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineWifi,
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
  HiOutlineX,
  HiOutlineQrcode,
  HiOutlinePhotograph,
  HiOutlineVideoCamera,
  HiOutlineMicrophone,
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
  HiOutlinePlay
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy, HiOutlineUser } from 'react-icons/hi2';

const OfflineModeSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [syncQueue] = useState([
    { id: 1, type: "scan", item: "PROD-ABC123", status: "pending", time: "2 minutes ago" },
    { id: 2, type: "order", item: "ORD-4567", status: "pending", time: "15 minutes ago" },
    { id: 3, type: "update", item: "SKU-7890 inventory", status: "synced", time: "1 hour ago" }
  ]);
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

  // Icon mapping function
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      wifi: <HiOutlineWifi className={className} />,
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
      x: <HiOutlineX className={className} />,
      qrcode: <HiOutlineQrcode className={className} />,
      photo: <HiOutlinePhotograph className={className} />,
      video: <HiOutlineVideoCamera className={className} />,
      microphone: <HiOutlineMicrophone className={className} />,
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
    return icons[iconName] || <HiOutlineWifi className={className} />;
  };

  // Features
  const features = useMemo(() => config?.features || [
    {
      id: 1,
      title: "Offline Data Access",
      description: "Access critical data like inventory levels, shipment status, and customer information even without internet connection.",
      icon: "database",
      color: "from-blue-500 to-blue-600",
      category: "Data",
      metrics: "100% cached",
      details: [
        "View cached inventory data",
        "Access shipment information",
        "Review customer details",
        "Check product specifications"
      ],
      videoUrl: "/videos/offline-data-access.mp4"
    },
    {
      id: 2,
      title: "Offline Scanning",
      description: "Continue scanning barcodes and QR codes even when offline. Data is stored locally and synced when connection returns.",
      icon: "qrcode",
      color: "from-green-500 to-green-600",
      category: "Scanning",
      metrics: "10K+ scans",
      details: [
        "Scan barcodes offline",
        "Batch scanning support",
        "Local data storage",
        "Auto-sync when online"
      ]
    },
    {
      id: 3,
      title: "Offline Order Management",
      description: "Create and manage orders offline. All changes are queued and synchronized automatically.",
      icon: "tag",
      color: "from-purple-500 to-purple-600",
      category: "Orders",
      metrics: "100% reliable",
      details: [
        "Create new orders",
        "Update existing orders",
        "Add order items",
        "Sync when connected"
      ]
    },
    {
      id: 4,
      title: "Automatic Sync",
      description: "Changes made offline are automatically synchronized when your device reconnects to the internet.",
      icon: "refresh",
      color: "from-orange-500 to-orange-600",
      category: "Sync",
      metrics: "Background",
      details: [
        "Background sync",
        "Conflict resolution",
        "Sync status indicators",
        "Manual sync option"
      ]
    },
    {
      id: 5,
      title: "Offline Search",
      description: "Search through cached data to find products, shipments, and orders without an internet connection.",
      icon: "search",
      color: "from-red-500 to-red-600",
      category: "Search",
      metrics: "Instant",
      details: [
        "Product search",
        "Shipment tracking",
        "Order lookup",
        "Customer search"
      ]
    },
    {
      id: 6,
      title: "Data Encryption",
      description: "All offline data is encrypted on your device to ensure security and privacy.",
      icon: "shield",
      color: "from-indigo-500 to-indigo-600",
      category: "Security",
      metrics: "256-bit",
      details: [
        "AES-256 encryption",
        "Secure local storage",
        "Biometric access",
        "Auto-clear on logout"
      ]
    }
  ], [config?.features]);

  // Screenshots for carousel
  const screenshots = config?.screenshots || [
    { src: "/offline-screenshots/offline-mode.png", title: "Offline Mode Active", description: "Work without internet connection" },
    { src: "/offline-screenshots/sync-queue.png", title: "Sync Queue", description: "Track pending changes" },
    { src: "/offline-screenshots/cached-data.png", title: "Cached Data", description: "View offline-available data" },
    { src: "/offline-screenshots/offline-scanning.png", title: "Offline Scanning", description: "Scan barcodes offline" }
  ];

  // Testimonials
  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Warehouse Manager",
      company: "Global Retail Corp",
      quote: "Offline mode has been a game-changer for our warehouse operations. We can keep scanning even when our Wi-Fi goes down.",
      rating: 5,
      avatar: "/testimonials/sarah.jpg",
      videoUrl: "/videos/testimonial-sarah.mp4"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "HealthTech Solutions",
      quote: "The automatic sync feature is flawless. I never have to worry about losing data when connectivity is poor.",
      rating: 5,
      avatar: "/testimonials/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Logistics Coordinator",
      company: "EuroLogistics",
      quote: "Being able to access cached inventory data offline has saved us countless hours of downtime.",
      rating: 5,
      avatar: "/testimonials/emily.jpg"
    }
  ];

  // Cached data stats
  const cachedData = config?.cachedData || [
    { type: "Products", count: "2,847", size: "45 MB", lastSync: "2 minutes ago" },
    { type: "Shipments", count: "1,234", size: "28 MB", lastSync: "5 minutes ago" },
    { type: "Orders", count: "567", size: "12 MB", lastSync: "10 minutes ago" },
    { type: "Customers", count: "892", size: "18 MB", lastSync: "15 minutes ago" }
  ];

  // Filter features based on category and search
  const getFilteredFeatures = useCallback(() => {
    let filtered = [...features];

    if (searchQuery) {
      filtered = filtered.filter(f =>
        f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(f => f.category === selectedCategory);
    }

    return filtered;
  }, [features, searchQuery, selectedCategory]);

  const filteredFeatures = getFilteredFeatures();
  const pendingSyncCount = syncQueue.filter(i => i.status === "pending").length;

  // Stats
  const stats = config?.stats || [
    { value: "100%", label: "Uptime Guarantee", icon: "clock", trend: "SLA backed", trendUp: true },
    { value: "Auto", label: "Sync", icon: "refresh", trend: "Background", trendUp: true },
    { value: "256-bit", label: "Encryption", icon: "shield", trend: "Military grade", trendUp: true },
    { value: "Unlimited", label: "Offline Storage", icon: "database", trend: "Scalable", trendUp: true }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'grid' },
    { id: 'features', label: 'Features', icon: 'chip' },
    { id: 'screenshots', label: 'Screenshots', icon: 'photo' },
    { id: 'cache', label: 'Cached Data', icon: 'database' },
    { id: 'sync', label: 'Sync Queue', icon: 'refresh' },
    { id: 'stories', label: 'Stories', icon: 'chat' }
  ];

  const categories = [
    { id: 'all', label: 'All Features', icon: 'grid', count: features.length },
    { id: 'Data', label: 'Data', icon: 'database', count: features.filter(f => f.category === 'Data').length },
    { id: 'Scanning', label: 'Scanning', icon: 'qrcode', count: features.filter(f => f.category === 'Scanning').length },
    { id: 'Orders', label: 'Orders', icon: 'tag', count: features.filter(f => f.category === 'Orders').length },
    { id: 'Sync', label: 'Sync', icon: 'refresh', count: features.filter(f => f.category === 'Sync').length },
    { id: 'Security', label: 'Security', icon: 'shield', count: features.filter(f => f.category === 'Security').length }
  ];

  // Get sync status badge color
  const getSyncStatusColor = (status) => {
    return status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700';
  };

  // Force sync
  const handleForceSync = () => {
    alert('Manual sync initiated. All pending changes will be synchronized.');
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Offline Mode Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-offline" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-offline)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineWifi className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge || "Offline Mode"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Stay Productive"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Anywhere, Anytime"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Our mobile app works seamlessly even without an internet connection. Access critical data, scan barcodes, and manage orders offline — everything syncs automatically when you're back online."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'clock' ? <HiOutlineClock className="w-4 h-4 text-blue-600" /> :
                    stat.icon === 'refresh' ? <HiOutlineRefresh className="w-4 h-4 text-blue-600" /> :
                      stat.icon === 'shield' ? <HiOutlineShieldCheck className="w-4 h-4 text-blue-600" /> :
                        <HiOutlineDatabase className="w-4 h-4 text-blue-600" />}
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
              {tab.id === 'sync' && pendingSyncCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-yellow-500 text-white rounded-full text-xs">{pendingSyncCount}</span>
              )}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Phone Mockup with Offline Indicator */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 py-1 mb-4">
                    <HiOutlineSparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Work Without Internet</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Never Let Connectivity Stop You
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Whether you're in a warehouse with poor signal, traveling, or experiencing an outage, our offline mode ensures you can keep working.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Seamless transition between online and offline</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Automatic sync when connection is restored</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">No data loss — all changes are saved locally</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDemoModal(true)}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <HiOutlineWifi className="w-5 h-5" />
                    See How It Works
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative flex justify-center">
                  <div className="relative w-72 h-auto cursor-pointer" onClick={() => setShowDemoModal(true)}>
                    <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl animate-pulse" />
                    <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                        <div className="bg-blue-600 p-3 flex items-center justify-between">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                          </div>
                          <span className="text-white text-xs font-medium">Offline Mode</span>
                          <div className="w-12" />
                        </div>
                        <div className="p-4">
                          <div className="mb-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center gap-2">
                            <HiOutlineWifi className="w-4 h-4 text-yellow-600" />
                            <span className="text-xs text-yellow-700 dark:text-yellow-300">You're offline. Changes will sync when connection returns.</span>
                          </div>
                          <div className="space-y-3">
                            <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center px-3">
                              <HiOutlineDatabase className="w-5 h-5 text-gray-400 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">Inventory Data (Cached)</p>
                                <p className="text-xs text-gray-500">Last synced: 2 minutes ago</p>
                              </div>
                            </div>
                            <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center px-3">
                              <HiOutlineQrcode className="w-5 h-5 text-gray-400 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">3 scans pending sync</p>
                                <p className="text-xs text-gray-500">Will sync when online</p>
                              </div>
                            </div>
                            <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center px-3">
                              <HiOutlineTag className="w-5 h-5 text-gray-400 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">2 orders created offline</p>
                                <p className="text-xs text-gray-500">Queued for submission</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-8">How Offline Mode Works</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data is Cached</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Essential data is automatically cached on your device when you're online.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Work Offline</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Continue working seamlessly — all changes are stored locally.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Auto-Sync</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Changes sync automatically when you're back online — no action needed.</p>
                </div>
              </div>
            </div>
          </>
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
                        {getIcon(feature.icon, "w-6 h-6 text-white")}
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        Available
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{feature.description}</p>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-500">Performance:</span>
                      <span className="font-semibold text-blue-600">{feature.metrics}</span>
                    </div>
                    {expandedFeature === feature.id && (
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
                            onClick={() => { setCurrentVideo(feature.videoUrl); setShowVideoModal(true); }}
                            className="mt-3 inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:underline"
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
                <HiOutlineWifi className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
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

        {/* Cached Data Tab */}
        {activeTab === 'cache' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Cached Data Overview</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                  <tr>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Data Type</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Record Count</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Size</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Last Sync</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {cachedData.map((data, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">
                      <td className="p-4 text-sm font-medium text-gray-900 dark:text-white">{data.type}</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{data.count}</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{data.size}</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{data.lastSync}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Total cached data size: ~103 MB</p>
                <button className="text-blue-600 text-sm font-semibold hover:underline">Clear Cache</button>
              </div>
            </div>
          </div>
        )}

        {/* Sync Queue Tab */}
        {activeTab === 'sync' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Pending Sync Queue</h3>
              <button
                onClick={handleForceSync}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <HiOutlineRefresh className="w-4 h-4" />
                Force Sync
              </button>
            </div>
            <div className="space-y-3">
              {syncQueue.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      {item.type === 'scan' ? <HiOutlineQrcode className="w-4 h-4 text-gray-500" /> :
                        item.type === 'order' ? <HiOutlineTag className="w-4 h-4 text-gray-500" /> :
                          <HiOutlineRefresh className="w-4 h-4 text-gray-500" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{item.type.toUpperCase()}: {item.item}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getSyncStatusColor(item.status)}`}>
                    {item.status === 'pending' ? 'Pending Sync' : 'Synced'}
                  </span>
                </div>
              ))}
            </div>
            {pendingSyncCount === 0 && (
              <div className="text-center py-12">
                <HiOutlineCheckCircle className="w-16 h-16 mx-auto text-green-500 mb-3" />
                <p className="text-gray-500">All changes synced. You're up to date!</p>
              </div>
            )}
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

        {/* Download CTA */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineWifi className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience True Offline Freedom</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Download the app and never let a poor connection stop you from getting work done.</p>
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

        {/* Demo Modal */}
        {showDemoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowDemoModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HiOutlineWifi className="w-5 h-5 text-white" />
                    <h3 className="text-white font-bold text-lg">How Offline Mode Works</h3>
                  </div>
                  <button onClick={() => setShowDemoModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <HiOutlineDatabase className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Data is cached automatically</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Your recent data is stored locally for offline access.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <HiOutlineQrcode className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Actions are queued</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Scans, orders, and updates are stored locally.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                      <HiOutlineRefresh className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Auto-sync when online</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Everything syncs automatically in the background.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <HiOutlineShieldCheck className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Enterprise-grade security</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">All offline data is encrypted on your device.</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Got it
                </button>
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

export default OfflineModeSection3;