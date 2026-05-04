// page/frontend/MobileApp/MobileDashboardSection/MobileDashboardSection2.jsx

/**
 * Mobile Dashboard Section II - Advanced Analytics & Shipment Tracking Hub
 *
 * Unique Design Elements:
 * - Stats Cards with Trend Indicators (Rating, Downloads, Uptime, Support)
 * - Multi-tab UI (Overview, Shipments, Analytics)
 * - Phone Mockup Dashboard Preview with Interactive Elements
 * - Key Metrics Grid with Expandable Trend Charts
 * - Shipment Status Distribution with Progress Bars
 * - Shipments Table with Search and Filter Capabilities
 * - Performance Analytics with Timeframe Selector
 * - Trend Charts for Each Key Metric
 * - Download CTAs for App Store and Google Play
 * - Animated Gradient Orbs in Background
 * - Responsive Dashboard Layout
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState, useCallback, useMemo } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineChartBar,
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
  HiOutlineMenu,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineX,
  HiOutlineTrendingUp,
  HiOutlineFire,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const MobileDashboardSection2 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedMetric, setExpandedMetric] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');

  // ==================== MEMOIZED DATA ====================

  const metrics = config?.metrics || [
    {
      id: 1,
      value: "2,847",
      label: "Total Shipments",
      icon: "globe",
      change: "+12.5%",
      changeUp: true,
      gradient: "from-blue-500 to-blue-600",
      trend: [1200, 1400, 1600, 1800, 2000, 2200, 2847],
      details: "Total shipments processed this month across all carriers and destinations."
    },
    {
      id: 2,
      value: "156",
      label: "Active Orders",
      icon: "clock",
      change: "+8.2%",
      changeUp: true,
      gradient: "from-emerald-500 to-emerald-600",
      trend: [98, 105, 112, 120, 135, 148, 156],
      details: "Orders currently in progress across all fulfillment centers."
    },
    {
      id: 3,
      value: "98.5%",
      label: "On-Time Delivery",
      icon: "check",
      change: "+2.1%",
      changeUp: true,
      gradient: "from-purple-500 to-purple-600",
      trend: [94.2, 95.1, 96.3, 97.0, 97.8, 98.2, 98.5],
      details: "Percentage of shipments delivered on or before promised date."
    },
    {
      id: 4,
      value: "$2.4M",
      label: "Inventory Value",
      icon: "database",
      change: "-3.2%",
      changeUp: false,
      gradient: "from-amber-500 to-amber-600",
      trend: [2.8, 2.7, 2.6, 2.55, 2.5, 2.45, 2.4],
      details: "Current value of inventory across all warehouses."
    }
  ];

  const shipmentStatus = config?.shipmentStatus || [
    { status: "Delivered", count: 1847, percentage: 65, color: "bg-emerald-500" },
    { status: "In Transit", count: 642, percentage: 22, color: "bg-blue-500" },
    { status: "Processing", count: 234, percentage: 8, color: "bg-amber-500" },
    { status: "Delayed", count: 124, percentage: 5, color: "bg-red-500" }
  ];

  const recentShipments = useMemo(() => config?.recentShipments || [
    { id: "SC-12345", destination: "Los Angeles, CA", status: "Delivered", date: "2024-03-15", value: "$2,450", carrier: "FedEx" },
    { id: "SC-12346", destination: "Chicago, IL", status: "In Transit", date: "2024-03-15", value: "$1,890", carrier: "UPS" },
    { id: "SC-12347", destination: "Houston, TX", status: "Processing", date: "2024-03-14", value: "$3,200", carrier: "DHL" },
    { id: "SC-12348", destination: "Phoenix, AZ", status: "Delivered", date: "2024-03-14", value: "$876", carrier: "FedEx" },
    { id: "SC-12349", destination: "Philadelphia, PA", status: "Delayed", date: "2024-03-13", value: "$4,500", carrier: "UPS" }
  ], [config?.recentShipments]);

  const stats = config?.stats || [
    { value: "4.9", label: "App Rating", icon: "star", trend: "5,000+ reviews", trendUp: true },
    { value: "100K+", label: "Downloads", icon: "download", trend: "+25% this month", trendUp: true },
    { value: "99.9%", label: "Uptime", icon: "clock", trend: "Monthly average", trendUp: true },
    { value: "24/7", label: "Support", icon: "chat", trend: "Average 2-min response", trendUp: true }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'grid' },
    { id: 'shipments', label: 'Shipments', icon: 'globe' },
    { id: 'analytics', label: 'Analytics', icon: 'chart' }
  ];

  const timeframes = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'quarter', label: 'This Quarter' },
    { id: 'year', label: 'This Year' }
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons and Heroicons 2 sets
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      chart: <HiOutlineChartBar className={className} />,
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
      menu: <HiOutlineMenu className={className} />,
      grid: <HiOutlineViewGrid className={className} />,
      list: <HiOutlineViewList className={className} />,
      filter: <HiOutlineFilter className={className} />,
      search: <HiOutlineSearch className={className} />,
      'chevron-down': <HiOutlineChevronDown className={className} />,
      'chevron-up': <HiOutlineChevronUp className={className} />,
      x: <HiOutlineX className={className} />,
      trending: <HiOutlineTrendingUp className={className} />,
      fire: <HiOutlineFire className={className} />
    };
    return icons[iconName] || <HiOutlineChartBar className={className} />;
  };

  /**
   * Get status badge color based on status
   */
  const getStatusBadgeColor = (status) => {
    const colors = {
      'Delivered': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      'In Transit': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'Processing': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
      'Delayed': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    };
    return colors[status] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
  };

  /**
   * Get status icon based on status
   */
  const getStatusIcon = (status, className = "w-3 h-3") => {
    const icons = {
      'Delivered': <HiOutlineCheckCircle className={className} />,
      'In Transit': <HiOutlineGlobe className={className} />,
      'Processing': <HiOutlineCog className={className} />,
      'Delayed': <HiOutlineClock className={className} />
    };
    return icons[status] || <HiOutlineCheckCircle className={className} />;
  };

  /**
   * Filter shipments based on search
   */
  const getFilteredShipments = useCallback(() => {
    if (!searchQuery) return recentShipments;
    const query = searchQuery.toLowerCase();
    return recentShipments.filter(s =>
      s.id.toLowerCase().includes(query) ||
      s.destination.toLowerCase().includes(query) ||
      s.carrier.toLowerCase().includes(query)
    );
  }, [recentShipments, searchQuery]);

  const filteredShipments = getFilteredShipments();

  /**
   * Toggle metric expansion
   */
  const toggleMetric = (metricId) => {
    setExpandedMetric(expandedMetric === metricId ? null : metricId);
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Mobile Dashboard Center"
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
                {config?.badge || "Mobile Dashboard"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.title?.prefix || "Your Supply Chain"}{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {config?.title?.highlight || "At a Glance"}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {config?.description ||
                "Monitor key metrics, track shipments, and manage inventory from your mobile device. Get real-time insights wherever you are."}
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

        {/* ==================== OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <>
            {/* Dashboard Preview with Phone Mockup */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 py-1 mb-4">
                    <HiOutlineSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Real-time Dashboard</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Everything You Need, Right Where You Need It
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our mobile dashboard gives you instant access to critical metrics, shipment status, inventory levels, and team activity — all optimized for your phone.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Real-time updates on all key metrics</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Interactive charts and data visualization</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Customizable widgets and layouts</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Push notifications for important alerts</p>
                    </div>
                  </div>
                  <button
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    aria-label="Download the app"
                  >
                    <HiOutlineDeviceMobile className="w-5 h-5" />
                    Download the App
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Phone Mockup */}
                <div className="relative flex justify-center">
                  <div className="relative w-80 h-auto">
                    <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl" />
                    <div className="relative bg-gray-900 dark:bg-gray-950 rounded-3xl p-2 shadow-2xl">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                        <div className="bg-blue-600 p-3 flex items-center justify-between">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          </div>
                          <span className="text-white text-xs font-medium">SupplyChainPro</span>
                          <div className="w-12" />
                        </div>
                        <div className="p-4 space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Welcome back, John</h3>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Here's what's happening today</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                              <HiOutlineBell className="w-4 h-4 text-gray-500" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {metrics.slice(0, 4).map((metric, idx) => (
                              <div key={idx} className={`bg-linear-to-r ${metric.gradient} rounded-xl p-3 text-white`}>
                                <div className="flex items-center justify-between mb-1">
                                  {getIcon(metric.icon, "w-3 h-3 text-white/70")}
                                  <span className={`text-xs ${metric.changeUp ? 'text-emerald-200' : 'text-red-200'}`}>
                                    {metric.change}
                                  </span>
                                </div>
                                <div className="text-lg font-bold">{metric.value}</div>
                                <div className="text-xs text-white/80">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-xs font-semibold text-gray-900 dark:text-white">Recent Shipments</h4>
                              <button className="text-xs text-blue-600 dark:text-blue-400" aria-label="View all shipments">View All</button>
                            </div>
                            <div className="space-y-2">
                              {recentShipments.slice(0, 3).map((shipment) => (
                                <div key={shipment.id} className="flex items-center justify-between text-xs">
                                  <div>
                                    <p className="font-medium text-gray-900 dark:text-white">{shipment.id}</p>
                                    <p className="text-gray-500 dark:text-gray-400">{shipment.destination}</p>
                                  </div>
                                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeColor(shipment.status)}`}>
                                    {shipment.status}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-around pt-3 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex flex-col items-center">
                              <HiOutlineChartBar className="w-4 h-4 text-blue-600" />
                              <span className="text-xs text-blue-600">Dashboard</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <HiOutlineGlobe className="w-4 h-4 text-gray-400" />
                              <span className="text-xs text-gray-400">Shipments</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <HiOutlineDatabase className="w-4 h-4 text-gray-400" />
                              <span className="text-xs text-gray-400">Inventory</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <HiOutlineUserGroup className="w-4 h-4 text-gray-400" />
                              <span className="text-xs text-gray-400">Team</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {metrics.map((metric) => {
                const isExpanded = expandedMetric === metric.id;
                return (
                  <div
                    key={metric.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => toggleMetric(metric.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMetric(metric.id)}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${metric.gradient} flex items-center justify-center mb-4`}>
                      {getIcon(metric.icon, "w-6 h-6 text-white")}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                    <div className={`text-xs mt-2 ${metric.changeUp ? 'text-emerald-500' : 'text-red-500'}`}>
                      {metric.change} from last month
                    </div>
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                        <p className="text-xs text-gray-600 dark:text-gray-400">{metric.details}</p>
                        <div className="mt-3 h-12 flex items-end gap-1">
                          {metric.trend.map((point, idx) => (
                            <div
                              key={idx}
                              className="flex-1 bg-blue-500 rounded-t"
                              style={{ height: `${(point / Math.max(...metric.trend)) * 100}%` }}
                              title={`Day ${idx + 1}: ${point}`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">7-day trend</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Shipment Status Distribution */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Shipment Status</h3>
              <div className="space-y-4">
                {shipmentStatus.map((status) => (
                  <div key={status.status}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{status.status}</span>
                      <span className="text-gray-500 dark:text-gray-400">{status.count} shipments ({status.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className={`${status.color} rounded-full h-2`} style={{ width: `${status.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ==================== SHIPMENTS TAB ==================== */}
        {activeTab === 'shipments' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Shipments</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineSearch className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search shipments..."
                    className="pl-9 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500"
                    aria-label="Search shipments"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle filters"
                >
                  <HiOutlineFilter className="w-4 h-4" />
                </button>
              </div>
            </div>

            {showFilters && (
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl animate-fadeIn">
                <div className="flex flex-wrap gap-4">
                  <select className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white" aria-label="Filter by status">
                    <option>All Statuses</option>
                    <option>Delivered</option>
                    <option>In Transit</option>
                    <option>Processing</option>
                    <option>Delayed</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white" aria-label="Filter by carrier">
                    <option>All Carriers</option>
                    <option>FedEx</option>
                    <option>UPS</option>
                    <option>DHL</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white" aria-label="Filter by date range">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                  <tr>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Shipment ID</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Destination</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Date</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Value</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Carrier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {filteredShipments.map((shipment) => (
                    <tr key={shipment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">
                      <td className="p-4 text-sm font-medium text-gray-900 dark:text-white">{shipment.id}</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{shipment.destination}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(shipment.status)}`}>
                          {getStatusIcon(shipment.status, "w-3 h-3")}
                          {shipment.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{shipment.date}</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{shipment.value}</td>
                      <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{shipment.carrier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredShipments.length === 0 && (
              <div className="text-center py-8">
                <HiOutlineGlobe className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                <p className="text-gray-500 dark:text-gray-400">No shipments found matching your criteria.</p>
              </div>
            )}
          </div>
        )}

        {/* ==================== ANALYTICS TAB ==================== */}
        {activeTab === 'analytics' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Performance Analytics</h3>
              <div className="flex gap-2">
                {timeframes.map((tf) => (
                  <button
                    key={tf.id}
                    onClick={() => setSelectedTimeframe(tf.id)}
                    className={`px-3 py-1 rounded-lg text-sm transition-all duration-300 ${selectedTimeframe === tf.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    aria-label={`Show ${tf.label} data`}
                  >
                    {tf.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              {metrics.map((metric) => (
                <div key={metric.id}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg bg-linear-to-r ${metric.gradient} flex items-center justify-center`}>
                        {getIcon(metric.icon, "w-4 h-4 text-white")}
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">{metric.label}</span>
                    </div>
                    <div className={`text-sm ${metric.changeUp ? 'text-emerald-500' : 'text-red-500'}`}>
                      {metric.change}
                    </div>
                  </div>
                  <div className="h-32 flex items-end gap-1">
                    {metric.trend.map((point, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 ${metric.changeUp ? 'bg-emerald-500' : 'bg-blue-500'} rounded-t opacity-75 hover:opacity-100 transition-opacity`}
                        style={{ height: `${(point / Math.max(...metric.trend)) * 100}%` }}
                        title={`Day ${idx + 1}: ${point}`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>Day 1</span>
                    <span>Day 3</span>
                    <span>Day 5</span>
                    <span>Day 7</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== DOWNLOAD CTA ==================== */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineDeviceMobile className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Take Your Dashboard on the Go</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Download the SupplyChainPro mobile app and get full access to your dashboard anywhere, anytime.
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

export default MobileDashboardSection2;