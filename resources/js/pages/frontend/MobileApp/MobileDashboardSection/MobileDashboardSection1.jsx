// page/frontend/MobileApp/MobileDashboardSection/MobileDashboardSection1.jsx

/**
 * Mobile Dashboard Section I - Real-time Analytics & Monitoring Hub
 *
 * Unique Design Elements:
 * - Stats Cards for App Metrics (Rating, Downloads, Uptime, Support)
 * - Phone Mockup Dashboard Preview with Interactive Elements
 * - Key Metrics Grid with Trend Indicators and Expandable Details
 * - Recent Activity Feed with Status Badges
 * - Real-time Dashboard Features Checklist
 * - Download CTAs for App Store and Google Play
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Dashboard Preview Layout
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState } from 'react';

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
  HiOutlineX,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const MobileDashboardSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeMetric, setActiveMetric] = useState(null);

  // ==================== MEMOIZED DATA ====================

  const metrics = config?.metrics || [
    { value: "2,847", label: "Total Shipments", icon: "globe", change: "+12.5%", changeUp: true, gradient: "from-blue-500 to-blue-600" },
    { value: "156", label: "Active Orders", icon: "clock", change: "+8.2%", changeUp: true, gradient: "from-emerald-500 to-emerald-600" },
    { value: "98.5%", label: "On-Time Delivery", icon: "check", change: "+2.1%", changeUp: true, gradient: "from-purple-500 to-purple-600" },
    { value: "$2.4M", label: "Inventory Value", icon: "database", change: "-3.2%", changeUp: false, gradient: "from-amber-500 to-amber-600" }
  ];

  const recentActivity = config?.recentActivity || [
    { id: 1, action: "Shipment #SC-12345 delivered", time: "2 minutes ago", status: "completed", icon: "check" },
    { id: 2, action: "Inventory updated for SKU-7890", time: "15 minutes ago", status: "updated", icon: "refresh" },
    { id: 3, action: "New order received #ORD-4567", time: "1 hour ago", status: "pending", icon: "bell" },
    { id: 4, action: "Shipment #SC-12346 in transit", time: "3 hours ago", status: "in-progress", icon: "globe" },
    { id: 5, action: "Stock alert: Low inventory for SKU-1234", time: "5 hours ago", status: "alert", icon: "bell" }
  ];

  const stats = config?.stats || [
    { value: "4.9", label: "App Rating", icon: "star" },
    { value: "100K+", label: "Downloads", icon: "download" },
    { value: "99.9%", label: "Uptime", icon: "clock" },
    { value: "24/7", label: "Support", icon: "chat" }
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
      x: <HiOutlineX className={className} />,
      arrow: <HiOutlineArrowRight className={className} />,
    };
    return icons[iconName] || <HiOutlineChartBar className={className} />;
  };

  /**
   * Get status badge color based on status
   */
  const getStatusBadge = (status) => {
    const badges = {
      'completed': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      'updated': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'pending': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
      'in-progress': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      'alert': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    };
    return badges[status] || badges.completed;
  };

  /**
   * Toggle metric expansion
   */
  const toggleMetric = (index) => {
    setActiveMetric(activeMetric === index ? null : index);
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Mobile Dashboard"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div
        className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineDeviceMobile className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Mobile Dashboard"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Your Supply Chain"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "At a Glance"}
            </span>{' '}
            {config?.title?.suffix || ""}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "Monitor key metrics, track shipments, and manage inventory from your mobile device. Get real-time insights wherever you are."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                {getIcon(stat.icon, "w-5 h-5 text-blue-600 dark:text-blue-400")}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== DASHBOARD PREVIEW ==================== */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Phone Mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-80 h-auto">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gray-900 dark:bg-gray-950 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="bg-blue-600 p-3 flex items-center justify-between">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-white text-xs font-medium">SupplyChainPro</span>
                    <div className="w-12" />
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-4 space-y-4">
                    {/* Welcome Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Welcome back, John</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Here's what's happening today</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <HiOutlineBell className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>

                    {/* Metrics Grid */}
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

                    {/* Recent Activity */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-semibold text-gray-900 dark:text-white">Recent Activity</h4>
                        <button className="text-xs text-blue-600 dark:text-blue-400" aria-label="View all activity">View All</button>
                      </div>
                      <div className="space-y-2">
                        {recentActivity.slice(0, 3).map((activity) => (
                          <div key={activity.id} className="flex items-center gap-2 text-xs">
                            <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                              {activity.icon === 'check' ? <HiOutlineCheckCircle className="w-3 h-3 text-emerald-500" /> :
                                activity.icon === 'refresh' ? <HiOutlineRefresh className="w-3 h-3 text-blue-500" /> :
                                  activity.icon === 'bell' ? <HiOutlineBell className="w-3 h-3 text-amber-500" /> :
                                    <HiOutlineGlobe className="w-3 h-3 text-purple-500" />}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-700 dark:text-gray-300">{activity.action}</p>
                              <p className="text-gray-400 dark:text-gray-500">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Navigation */}
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

          {/* Dashboard Features */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 py-1 mb-4">
              <HiOutlineSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Real-time Dashboard</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need, Right Where You Need It
            </h3>
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
        </div>

        {/* ==================== KEY METRICS SECTION ==================== */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-8">Key Metrics at Your Fingertips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => {
              const isExpanded = activeMetric === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => toggleMetric(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMetric(idx)}
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
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Tap to view detailed analytics and trends for this metric.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================== RECENT ACTIVITY SECTION ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Activity</h3>
            <button className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline" aria-label="View all activity">
              View All Activity →
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  {activity.icon === 'check' ? <HiOutlineCheckCircle className="w-5 h-5 text-emerald-500" /> :
                    activity.icon === 'refresh' ? <HiOutlineRefresh className="w-5 h-5 text-blue-500" /> :
                      activity.icon === 'bell' ? <HiOutlineBell className="w-5 h-5 text-amber-500" /> :
                        <HiOutlineGlobe className="w-5 h-5 text-purple-500" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
                <div className="text-xs">
                  <span className={`px-2 py-1 rounded-full ${getStatusBadge(activity.status)}`}>
                    {activity.status === 'completed' ? 'Completed' :
                      activity.status === 'updated' ? 'Updated' :
                        activity.status === 'pending' ? 'Pending' :
                          activity.status === 'in-progress' ? 'In Transit' : 'Alert'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

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
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default MobileDashboardSection1;