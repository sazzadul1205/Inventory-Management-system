// page/frontend/MobileApp/PushNotificationsSection/PushNotificationsSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// Icons
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
  HiOutlineVideoCamera
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineTrophy, HiOutlineUser } from 'react-icons/hi2';

const PushNotificationsSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedType, setExpandedType] = useState(null);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [notificationSettings, setNotificationSettings] = useState({
    shipmentUpdates: true,
    inventoryAlerts: true,
    orderNotifications: true,
    systemAlerts: false,
    teamActivity: true,
    marketingEmails: false
  });
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
      qrcode: <HiOutlineQrcode className={className} />,
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
      play: <HiOutlinePlay className={className} />,
      video: <HiOutlineVideoCamera className={className} />
    };
    return icons[iconName] || <HiOutlineBell className={className} />;
  };

  // Notification types
  const notificationTypes = config?.notificationTypes || [
    {
      id: 'shipment',
      title: "Shipment Updates",
      description: "Get real-time notifications when shipments are created, in transit, delivered, or delayed.",
      icon: "globe",
      color: "from-blue-500 to-blue-600",
      category: "Logistics",
      enabled: true,
      count: 24,
      examples: [
        "Shipment #SC-12345 has been dispatched",
        "Your package is out for delivery",
        "Shipment #SC-12346 has been delivered"
      ],
      videoUrl: "/videos/shipment-notifications.mp4"
    },
    {
      id: 'inventory',
      title: "Inventory Alerts",
      description: "Receive alerts when stock levels are low, items are restocked, or inventory counts are completed.",
      icon: "database",
      color: "from-green-500 to-green-600",
      category: "Inventory",
      enabled: true,
      count: 12,
      examples: [
        "Low stock alert: SKU-1234 (only 5 left)",
        "Inventory count completed for Warehouse A",
        "New shipment received: +250 units"
      ]
    },
    {
      id: 'order',
      title: "Order Notifications",
      description: "Stay informed about new orders, order status changes, and fulfillment updates.",
      icon: "tag",
      color: "from-purple-500 to-purple-600",
      category: "Orders",
      enabled: true,
      count: 18,
      examples: [
        "New order #ORD-4567 received",
        "Order #ORD-4567 has been processed",
        "Order #ORD-4567 is ready for pickup"
      ]
    },
    {
      id: 'system',
      title: "System Alerts",
      description: "Get notified about system maintenance, updates, and important announcements.",
      icon: "cog",
      color: "from-orange-500 to-orange-600",
      category: "System",
      enabled: false,
      count: 3,
      examples: [
        "System maintenance scheduled for Sunday 2 AM",
        "New feature: Batch scanning now available",
        "API update: Version 2.0 released"
      ]
    },
    {
      id: 'team',
      title: "Team Activity",
      description: "Stay connected with team actions like task assignments, comments, and approvals.",
      icon: "users",
      color: "from-red-500 to-red-600",
      category: "Collaboration",
      enabled: true,
      count: 8,
      examples: [
        "Sarah assigned you a new task",
        "Michael commented on your report",
        "Emily approved your request"
      ]
    },
    {
      id: 'custom',
      title: "Custom Alerts",
      description: "Create custom notification rules based on your specific business needs.",
      icon: "cog",
      color: "from-indigo-500 to-indigo-600",
      category: "Custom",
      enabled: false,
      count: 0,
      examples: [
        "Custom rule: High-value order alert",
        "Temperature threshold exceeded",
        "Delivery window approaching"
      ]
    }
  ];

  // Screenshots for carousel
  const screenshots = config?.screenshots || [
    { src: "/notifications-screenshots/list.png", title: "Notification List", description: "View all your notifications" },
    { src: "/notifications-screenshots/detail.png", title: "Notification Detail", description: "Detailed view with actions" },
    { src: "/notifications-screenshots/settings.png", title: "Settings", description: "Customize your preferences" },
    { src: "/notifications-screenshots/filters.png", title: "Filters", description: "Filter by type and priority" }
  ];

  // Testimonials
  const testimonials = config?.testimonials || [
    {
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "Global Retail Corp",
      quote: "Push notifications keep me updated on critical shipments without having to constantly check the app. A game-changer for our operations.",
      rating: 5,
      avatar: "/testimonials/sarah.jpg",
      videoUrl: "/videos/testimonial-sarah.mp4"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "HealthTech Solutions",
      quote: "The customizable notification settings mean I only get alerts that matter to me. No more notification overload.",
      rating: 5,
      avatar: "/testimonials/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Logistics Director",
      company: "EuroLogistics",
      quote: "Real-time alerts for delays and exceptions have helped us respond faster and keep customers informed.",
      rating: 5,
      avatar: "/testimonials/emily.jpg"
    }
  ];

  // Recent notifications
  const recentNotifications = useMemo(() => config?.recentNotifications || [
    { id: 1, type: "shipment", title: "Shipment Delivered", message: "Shipment #SC-12345 has been delivered successfully.", time: "2 minutes ago", read: false, priority: "high" },
    { id: 2, type: "inventory", title: "Low Stock Alert", message: "SKU-1234 is running low. Only 5 units remaining.", time: "15 minutes ago", read: false, priority: "medium" },
    { id: 3, type: "order", title: "New Order Received", message: "New order #ORD-4567 has been placed. Value: $2,450.", time: "1 hour ago", read: true, priority: "high" },
    { id: 4, type: "system", title: "Maintenance Scheduled", message: "System maintenance scheduled for Sunday at 2 AM.", time: "3 hours ago", read: true, priority: "low" },
    { id: 5, type: "team", title: "Task Assigned", message: "Sarah assigned you a new task: Review Q3 inventory report.", time: "5 hours ago", read: true, priority: "medium" },
    { id: 6, type: "shipment", title: "Shipment Delayed", message: "Shipment #SC-12347 is delayed due to weather conditions.", time: "1 day ago", read: true, priority: "high" }
  ], [config?.recentNotifications]);

  // Filter notifications based on category and search
  const getFilteredNotifications = useCallback(() => {
    let notifications = [...recentNotifications];

    if (searchQuery) {
      notifications = notifications.filter(n =>
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.message.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      notifications = notifications.filter(n => n.type === selectedCategory);
    }

    return notifications;
  }, [recentNotifications, searchQuery, selectedCategory]);

  const filteredNotifications = getFilteredNotifications();
  const unreadCount = recentNotifications.filter(n => !n.read).length;

  // Stats
  const stats = config?.stats || [
    { value: "Real-time", label: "Delivery", icon: "bolt", trend: "< 1 second", trendUp: true },
    { value: "99.9%", label: "Reliability", icon: "shield", trend: "SLA guaranteed", trendUp: true },
    { value: "10K+", label: "Notifications/day", icon: "bell", trend: "Scalable", trendUp: true },
    { value: "100%", label: "Customizable", icon: "cog", trend: "Per user", trendUp: true }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'grid' },
    { id: 'notifications', label: 'Notifications', icon: 'bell' },
    { id: 'screenshots', label: 'Screenshots', icon: 'photo' },
    { id: 'settings', label: 'Settings', icon: 'cog' },
    { id: 'stories', label: 'Stories', icon: 'chat' }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: 'bell', count: recentNotifications.length },
    { id: 'shipment', label: 'Shipments', icon: 'globe', count: recentNotifications.filter(n => n.type === 'shipment').length },
    { id: 'inventory', label: 'Inventory', icon: 'database', count: recentNotifications.filter(n => n.type === 'inventory').length },
    { id: 'order', label: 'Orders', icon: 'tag', count: recentNotifications.filter(n => n.type === 'order').length },
    { id: 'team', label: 'Team', icon: 'users', count: recentNotifications.filter(n => n.type === 'team').length }
  ];

  // Get priority badge color
  const getPriorityBadgeColor = (priority) => {
    const colors = {
      'high': 'bg-red-100 text-red-700',
      'medium': 'bg-yellow-100 text-yellow-700',
      'low': 'bg-green-100 text-green-700'
    };
    return colors[priority] || 'bg-gray-100 text-gray-700';
  };

  // Toggle notification setting
  const toggleSetting = (key) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: !notificationSettings[key]
    });
  };

  // Handle notification click
  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setShowNotificationModal(true);
  };

  // Mark all as read
  const markAllAsRead = () => {
    alert('All notifications marked as read');
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Push Notifications Hub"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern-notifications" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
              <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-notifications)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
            <HiOutlineBell className="w-4 h-4" />
            <span className="text-sm font-medium">
              {typeof config?.badge === "string"
                ? config.badge
                : config?.badge?.text || "Push Notifications"}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Never Miss an"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Important Update"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {config?.description || "Stay informed with real-time push notifications. Get instant alerts about shipments, inventory, orders, and more — right on your mobile device."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  {stat.icon === 'bolt' ? <HiOutlineLightningBolt className="w-4 h-4 text-blue-600" /> :
                    stat.icon === 'shield' ? <HiOutlineShieldCheck className="w-4 h-4 text-blue-600" /> :
                      stat.icon === 'bell' ? <HiOutlineBell className="w-4 h-4 text-blue-600" /> :
                        <HiOutlineCog className="w-4 h-4 text-blue-600" />}
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
              {tab.id === 'notifications' && unreadCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-red-500 text-white rounded-full text-xs">{unreadCount}</span>
              )}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Phone Mockup with Notifications */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 py-1 mb-4">
                    <HiOutlineSparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Stay Connected</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Real-Time Alerts That Matter
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Get instant notifications for critical events. Customize which alerts you receive so you never miss what's important.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Instant delivery to your device</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Rich notifications with actionable buttons</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Customizable sound and vibration patterns</p>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <HiOutlineBell className="w-5 h-5" />
                    Enable Notifications
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative flex justify-center">
                  <div className="relative w-80 h-auto">
                    <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl" />
                    <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                        <div className="bg-blue-600 p-3 flex items-center justify-between">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                          </div>
                          <span className="text-white text-xs font-medium">Notifications</span>
                          <div className="w-12" />
                        </div>
                        <div className="p-3 space-y-2 max-h-125 overflow-y-auto">
                          {recentNotifications.slice(0, 4).map((notif) => (
                            <div
                              key={notif.id}
                              className={`p-3 rounded-xl cursor-pointer transition-all hover:bg-gray-50 dark:hover:bg-gray-700 ${!notif.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                              onClick={() => handleNotificationClick(notif)}
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0">
                                  {getIcon(notificationTypes.find(t => t.id === notif.type)?.icon || "bell", "w-4 h-4 text-gray-500")}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{notif.title}</p>
                                    <span className="text-xs text-gray-400">{notif.time}</span>
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{notif.message}</p>
                                </div>
                                {!notif.read && <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />}
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

            {/* Notification Types Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {notificationTypes.map((type) => (
                <div
                  key={type.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
                  onClick={() => setExpandedType(expandedType === type.id ? null : type.id)}
                >
                  <div className={`h-1.5 bg-linear-to-r ${type.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${type.color} flex items-center justify-center`}>
                        {getIcon(type.icon, "w-6 h-6 text-white")}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${type.enabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                        {type.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{type.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{type.description}</p>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-500">Recent:</span>
                      <span className="font-semibold text-blue-600">{type.count} notifications</span>
                    </div>
                    {expandedType === type.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Example notifications:</p>
                        <ul className="space-y-2">
                          {type.examples.map((example, eIdx) => (
                            <li key={eIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <HiOutlineBell className="w-3 h-3 text-blue-500 mt-0.5 shrink-0" />
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                        {type.videoUrl && (
                          <button
                            onClick={() => { setCurrentVideo(type.videoUrl); setShowVideoModal(true); }}
                            className="mt-3 inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:underline"
                          >
                            <HiOutlinePlay className="w-4 h-4" />
                            Watch Demo
                          </button>
                        )}
                      </div>
                    )}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{type.category}</span>
                      <span className="text-blue-600 text-sm font-semibold">{expandedType === type.id ? 'Show less' : 'Learn more'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs">{unreadCount} unread</span>
                )}
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineSearch className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search notifications..."
                    className="pl-9 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <HiOutlineFilter className="w-4 h-4" />
                </button>
                <button
                  onClick={markAllAsRead}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Mark all read
                </button>
              </div>
            </div>

            {showFilters && (
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 ${selectedCategory === cat.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100'
                        }`}
                    >
                      {getIcon(cat.icon, "w-3 h-3")}
                      {cat.label}
                      <span className="text-xs opacity-75">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3">
              {filteredNotifications.map((notification) => {
                const type = notificationTypes.find(t => t.id === notification.type);
                return (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all hover:bg-gray-50 dark:hover:bg-gray-700 ${!notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0">
                        {getIcon(type?.icon || "bell", "w-5 h-5 text-gray-500")}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">{notification.title}</p>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityBadgeColor(notification.priority)}`}>
                              {notification.priority}
                            </span>
                            <span className="text-xs text-gray-400">{notification.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{notification.message}</p>
                      </div>
                      {!notification.read && <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredNotifications.length === 0 && (
              <div className="text-center py-12">
                <HiOutlineBell className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                <p className="text-gray-500">No notifications found.</p>
              </div>
            )}
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

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Notification Preferences</h3>
            <div className="space-y-4">
              {Object.entries(notificationSettings).map(([key, value]) => {
                const displayName = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                return (
                  <div key={key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{displayName}</p>
                      <p className="text-sm text-gray-500">Receive notifications for {displayName.toLowerCase()}</p>
                    </div>
                    <button
                      onClick={() => toggleSetting(key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${value ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${value ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                Save Preferences
              </button>
            </div>
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
          <HiOutlineBell className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss an Update Again</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Download the app and enable push notifications to stay informed about everything that matters to your supply chain.</p>
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

        {/* Notification Detail Modal */}
        {showNotificationModal && selectedNotification && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowNotificationModal(false)}>
            <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-blue-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getIcon(notificationTypes.find(t => t.id === selectedNotification.type)?.icon || "bell", "w-5 h-5 text-white")}
                    <h3 className="text-white font-bold text-lg">{selectedNotification.title}</h3>
                  </div>
                  <button onClick={() => setShowNotificationModal(false)} className="text-white hover:text-gray-200">
                    <HiOutlineX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedNotification.message}</p>
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-3 mb-4">
                  <p className="text-xs text-gray-500">Received {selectedNotification.time}</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button onClick={() => setShowNotificationModal(false)} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Close
                  </button>
                </div>
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

export default PushNotificationsSection3;
