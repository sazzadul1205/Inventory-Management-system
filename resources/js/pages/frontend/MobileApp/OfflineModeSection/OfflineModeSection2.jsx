// page/frontend/MobileApp/OfflineModeSection/OfflineModeSection2.jsx

// React
import { useState, useCallback, useMemo } from 'react';

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
  HiOutlineFire
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const OfflineModeSection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [syncQueue] = useState([
    { id: 1, type: "scan", item: "PROD-ABC123", status: "pending", time: "2 minutes ago" },
    { id: 2, type: "order", item: "ORD-4567", status: "pending", time: "15 minutes ago" },
    { id: 3, type: "update", item: "SKU-7890 inventory", status: "synced", time: "1 hour ago" }
  ]);

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
      fire: <HiOutlineFire className={className} />
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
      status: "available"
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
      ],
      status: "available"
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
      ],
      status: "available"
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
      ],
      status: "available"
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
      ],
      status: "available"
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
      ],
      status: "available"
    }
  ], [config?.features]);

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
    { id: 'cache', label: 'Cached Data', icon: 'database' },
    { id: 'sync', label: 'Sync Queue', icon: 'refresh' }
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
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Offline Mode Center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
              <HiOutlineWifi className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {config?.badge || "Offline Mode"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Stay Productive"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Anywhere, Anytime"}</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description || "Our mobile app works seamlessly even without an internet connection. Access critical data, scan barcodes, and manage orders offline — everything syncs automatically when you're back online."}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                {stat.trend && (
                  <div className={`text-xs mt-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.trend}
                  </div>
                )}
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
                        {feature.status}
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
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default OfflineModeSection2;