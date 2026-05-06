// page/frontend/MobileApp/PushNotificationsSection/PushNotificationsSection1.jsx

/**
 * Push Notifications Section I - Real-time Alerts & Notification Hub
 *
 * Unique Design Elements:
 * - Stats Cards for Notification Metrics (Delivery Speed, Reliability, Volume, Customization)
 * - Phone Mockup with Interactive Notification List
 * - Notification Types Grid with Expandable Examples
 * - Customization Options Grid with Toggle Switches
 * - Notification Detail Modal with Action Buttons
 * - Live Demo with Notification Preview
 * - Download CTAs for App Store and Google Play
 * - Animated Gradient Background Orbs (Blue/Purple Theme)
 * - Responsive Grid Layout for Notification Types
 *
 * All icons from react-icons (hi, hi2)
 * Fully responsive with dark mode support
 */

import { useState } from 'react';

// React Icons - Heroicons and Heroicons 2
import {
  HiOutlineBell,
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
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy } from 'react-icons/hi2';

const PushNotificationsSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [activeFeature, setActiveFeature] = useState(null);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  // ==================== MEMOIZED DATA ====================

  const notificationTypes = config?.notificationTypes || [
    {
      title: "Shipment Updates",
      description: "Get real-time notifications when shipments are created, in transit, delivered, or delayed.",
      icon: "globe",
      gradient: "from-blue-500 to-blue-600",
      examples: [
        "Shipment #SC-12345 has been dispatched",
        "Your package is out for delivery",
        "Shipment #SC-12346 has been delivered"
      ]
    },
    {
      title: "Inventory Alerts",
      description: "Receive alerts when stock levels are low, items are restocked, or inventory counts are completed.",
      icon: "database",
      gradient: "from-emerald-500 to-emerald-600",
      examples: [
        "Low stock alert: SKU-1234 (only 5 left)",
        "Inventory count completed for Warehouse A",
        "New shipment received: +250 units"
      ]
    },
    {
      title: "Order Notifications",
      description: "Stay informed about new orders, order status changes, and fulfillment updates.",
      icon: "tag",
      gradient: "from-purple-500 to-purple-600",
      examples: [
        "New order #ORD-4567 received",
        "Order #ORD-4567 has been processed",
        "Order #ORD-4567 is ready for pickup"
      ]
    },
    {
      title: "System Alerts",
      description: "Get notified about system maintenance, updates, and important announcements.",
      icon: "cog",
      gradient: "from-amber-500 to-amber-600",
      examples: [
        "System maintenance scheduled for Sunday 2 AM",
        "New feature: Batch scanning now available",
        "API update: Version 2.0 released"
      ]
    },
    {
      title: "Team Activity",
      description: "Stay connected with team actions like task assignments, comments, and approvals.",
      icon: "users",
      gradient: "from-rose-500 to-rose-600",
      examples: [
        "Sarah assigned you a new task",
        "Michael commented on your report",
        "Emily approved your request"
      ]
    },
    {
      title: "Custom Alerts",
      description: "Create custom notification rules based on your specific business needs.",
      icon: "cog",
      gradient: "from-indigo-500 to-indigo-600",
      examples: [
        "Custom rule: High-value order alert",
        "Temperature threshold exceeded",
        "Delivery window approaching"
      ]
    }
  ];

  const sampleNotifications = config?.sampleNotifications || [
    { id: 1, type: "Shipment Updates", title: "Shipment Delivered", message: "Shipment #SC-12345 has been delivered successfully.", time: "2 minutes ago", icon: "globe", read: false },
    { id: 2, type: "Inventory Alerts", title: "Low Stock Alert", message: "SKU-1234 is running low. Only 5 units remaining.", time: "15 minutes ago", icon: "database", read: false },
    { id: 3, type: "Order Notifications", title: "New Order Received", message: "New order #ORD-4567 has been placed. Value: $2,450.", time: "1 hour ago", icon: "tag", read: true },
    { id: 4, type: "System Alerts", title: "Maintenance Scheduled", message: "System maintenance scheduled for Sunday at 2 AM. Expected downtime: 30 minutes.", time: "3 hours ago", icon: "cog", read: true }
  ];

  const stats = config?.stats || [
    { value: "Real-time", label: "Delivery", icon: "bolt" },
    { value: "99.9%", label: "Reliability", icon: "shield" },
    { value: "10K+", label: "Notifications/day", icon: "bell" },
    { value: "Customizable", label: "Preferences", icon: "cog" }
  ];

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Resolves icon component from string name
   * Supports Heroicons and Heroicons 2 sets
   */
  const getIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      bell: <HiOutlineBell className={className} />,
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
      qrcode: <HiOutlineQrcode className={className} />
    };
    return icons[iconName] || <HiOutlineBell className={className} />;
  };

  /**
   * Toggle feature expansion
   */
  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  /**
   * Handle notification click
   */
  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setShowNotificationModal(true);
  };

  /**
   * Close notification modal
   */
  const closeNotificationModal = () => {
    setShowNotificationModal(false);
    setSelectedNotification(null);
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Push Notifications"
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
            <HiOutlineBell className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Push Notifications"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Never Miss an"}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.title?.highlight || "Important Update"}
            </span>{' '}
            {config?.title?.suffix || ""}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description ||
              "Stay informed with real-time push notifications. Get instant alerts about shipments, inventory, orders, and more — right on your mobile device."}
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

        {/* ==================== PHONE MOCKUP WITH NOTIFICATIONS ==================== */}
        <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 py-1 mb-4">
                <HiOutlineSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Stay Connected</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Real-Time Alerts That Matter
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get instant notifications for critical events. Customize which alerts you receive so you never miss what's important.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Instant delivery to your device</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Rich notifications with actionable buttons</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Customizable sound and vibration patterns</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Silent mode and Do Not Disturb support</p>
                </div>
              </div>
              <button
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Enable notifications"
              >
                <HiOutlineBell className="w-5 h-5" />
                Enable Notifications
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
                      <span className="text-white text-xs font-medium">Notifications</span>
                      <div className="w-12" />
                    </div>
                    <div className="p-3 space-y-2 max-h-125 overflow-y-auto">
                      {sampleNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-3 rounded-xl cursor-pointer transition-all hover:bg-gray-50 dark:hover:bg-gray-700 ${!notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                          onClick={() => handleNotificationClick(notification)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNotificationClick(notification)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0">
                              {getIcon(notification.icon, "w-4 h-4 text-gray-500")}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{notification.title}</p>
                                <span className="text-xs text-gray-400">{notification.time}</span>
                              </div>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{notification.message}</p>
                            </div>
                            {!notification.read && <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== NOTIFICATION TYPES GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {notificationTypes.map((type, idx) => {
            const isExpanded = activeFeature === idx;
            return (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => toggleFeature(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFeature(idx)}
              >
                <div className={`h-1.5 bg-linear-to-r ${type.gradient}`} />
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-r ${type.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {getIcon(type.icon, "w-7 h-7 text-white")}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{type.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{type.description}</p>
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Example notifications:</p>
                      <ul className="space-y-2">
                        {type.examples.map((example, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <HiOutlineBell className="w-3 h-3 text-blue-500 mt-0.5 shrink-0" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{isExpanded ? 'Showing examples' : 'Real-time alerts'}</span>
                    <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300">
                      {isExpanded ? 'Show less' : 'Learn more'}
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== CUSTOMIZATION OPTIONS ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
          <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Customize Your Notification Preferences
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Shipment Updates</p>
                <p className="text-xs text-gray-500">Track your packages</p>
              </div>
              <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                <div className="absolute right-1 top-1 w-3 h-3 rounded-full bg-white" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Inventory Alerts</p>
                <p className="text-xs text-gray-500">Stock notifications</p>
              </div>
              <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                <div className="absolute right-1 top-1 w-3 h-3 rounded-full bg-white" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Order Notifications</p>
                <p className="text-xs text-gray-500">New orders & status</p>
              </div>
              <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                <div className="absolute right-1 top-1 w-3 h-3 rounded-full bg-white" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">System Alerts</p>
                <p className="text-xs text-gray-500">Maintenance & updates</p>
              </div>
              <div className="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full relative">
                <div className="absolute left-1 top-1 w-3 h-3 rounded-full bg-white" />
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline" aria-label="Manage all preferences">
              Manage all notification preferences →
            </button>
          </div>
        </div>

        {/* ==================== DOWNLOAD CTA ==================== */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss an Update Again</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Download the app and enable push notifications to stay informed about everything that matters to your supply chain.
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

        {/* ==================== NOTIFICATION DETAIL MODAL ==================== */}
        {showNotificationModal && selectedNotification && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeNotificationModal}
            role="dialog"
            aria-label="Notification details"
            aria-modal="true"
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getIcon(selectedNotification.icon, "w-5 h-5 text-white")}
                    <h3 className="text-white font-bold text-lg">{selectedNotification.title}</h3>
                  </div>
                  <button
                    onClick={closeNotificationModal}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close modal"
                  >
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedNotification.message}</p>
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-3 mb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Received {selectedNotification.time}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    aria-label="View details"
                  >
                    View Details
                  </button>
                  <button
                    onClick={closeNotificationModal}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Close"
                  >
                    Close
                  </button>
                </div>
              </div>
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
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default PushNotificationsSection1;