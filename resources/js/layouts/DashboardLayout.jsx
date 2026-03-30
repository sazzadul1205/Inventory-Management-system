// layouts/dashboard-layout.jsx

/**
 * ============================================================================
 * DASHBOARD LAYOUT COMPONENT
 * ============================================================================
 * 
 * A comprehensive dashboard layout featuring:
 * - Independent collapsible sidebar with navigation
 * - Top navbar with search, notifications, and profile
 * - Footer with copyright and legal links
 * - Main content area (centered)
 * - Full dark mode support with localStorage persistence
 * - Most UI elements generated from arrays for easy maintenance
 * 
 * @component
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to render in main content area
 */

import { Link, usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

// Import Logo
import {
  // Navigation Icons
  HiMenu,                 // Menu toggle
  HiHome,                 // Dashboard
  HiUsers,                // Customers
  HiCube,                 // Inventory
  HiShoppingCart,         // Orders
  HiChartBar,             // Analytics
  HiCog,                  // Settings
  HiLogout,               // Logout
  HiBell,                 // Notifications
  HiSearch,               // Search
  HiChevronDown,          // Dropdown arrow
  HiUserCircle,           // User avatar
  HiDatabase,             // Database
  HiDocumentReport,       // Reports
  HiArchive,              // Products
  HiUser,                 // Profile
  HiMail,                 // Contact
  HiShieldCheck,          // Privacy
  HiDocumentText,         // Terms
  HiX,                    // Close
  HiPlus,                 // Add
  HiSparkles,             // Generate
  HiClock,                // Time
  HiCheckCircle,          // Success
  HiExclamationCircle,    // Warning
  HiInformationCircle,    // Info
} from 'react-icons/hi';

import DarkIcon from '../../../public/DarkIcon.png';
import Icon from '../../../public/Icon.png';

// Import ThemeToggle component
import ThemeToggle from '@/components/ThemeToggle';

// ============================================================================
// ICON IMPORTS
// ============================================================================

// ============================================================================
// CONFIGURATION ARRAYS
// ============================================================================

/**
 * Main navigation items configuration
 * Each item requires: name, path, icon component, and optional badge
 */
const NAVIGATION_ITEMS = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: HiHome,
    description: 'Overview and stats'
  },
  {
    name: 'Inventory',
    path: '/inventory',
    icon: HiCube,
    badge: { count: 12, color: 'blue' }
  },
  {
    name: 'Products',
    path: '/products',
    icon: HiArchive,
    badge: { count: 156, color: 'green' }
  },
  {
    name: 'Orders',
    path: '/orders',
    icon: HiShoppingCart,
    badge: { count: 8, color: 'yellow' }
  },
  {
    name: 'Customers',
    path: '/customers',
    icon: HiUsers,
    badge: { count: 345, color: 'purple' }
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: HiDocumentReport
  },
  {
    name: 'Analytics',
    path: '/analytics',
    icon: HiChartBar
  },
  {
    name: 'Database',
    path: '/database',
    icon: HiDatabase
  },
];

/**
 * Secondary navigation items (bottom of sidebar)
 */
const SECONDARY_NAV_ITEMS = [
  {
    name: 'Settings',
    path: '/settings',
    icon: HiCog,
    description: 'Account settings'
  },
];

/**
 * Quick actions configuration
 * Shown in sidebar when expanded
 */
const QUICK_ACTIONS = [
  {
    name: 'Add Product',
    icon: HiPlus,
    action: 'add-product',
    shortcut: '⌘P',
    color: 'green'
  },
  {
    name: 'Create Order',
    icon: HiShoppingCart,
    action: 'create-order',
    shortcut: '⌘O',
    color: 'blue'
  },
  {
    name: 'Generate Report',
    icon: HiSparkles,
    action: 'generate-report',
    shortcut: '⌘R',
    color: 'purple'
  },
];

/**
 * Notifications configuration
 */
const NOTIFICATIONS = [
  {
    id: 1,
    message: 'New order #1234 received',
    time: '5 min ago',
    type: 'info',
    read: false,
    link: '/orders/1234'
  },
  {
    id: 2,
    message: 'Inventory low: Product XYZ (only 5 left)',
    time: '10 min ago',
    type: 'warning',
    read: false,
    link: '/products/xyz'
  },
  {
    id: 3,
    message: 'Payment of $1,234 received from Customer ABC',
    time: '1 hour ago',
    type: 'success',
    read: true,
    link: '/payments/5678'
  },
  {
    id: 4,
    message: 'New customer registered: John Doe',
    time: '2 hours ago',
    type: 'info',
    read: true,
    link: '/customers/789'
  },
];

/**
 * Footer links configuration
 */
const FOOTER_LINKS = [
  { name: 'Privacy Policy', path: '/privacy', icon: HiShieldCheck },
  { name: 'Terms of Service', path: '/terms', icon: HiDocumentText },
  { name: 'Contact', path: '/contact', icon: HiMail },
];

/**
 * User menu items configuration
 */
const USER_MENU_ITEMS = [
  { name: 'Your Profile', path: '/profile', icon: HiUser },
  { name: 'Settings', path: '/settings', icon: HiCog },
  { type: 'divider' },
  { name: 'Sign out', path: '/logout', icon: HiLogout, method: 'post', danger: true },
];

/**
 * Badge color mapping
 */
const BADGE_COLORS = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  red: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
};

/**
 * Notification type colors
 */
const NOTIFICATION_COLORS = {
  info: 'text-blue-500 dark:text-blue-400',
  warning: 'text-yellow-500 dark:text-yellow-400',
  success: 'text-green-500 dark:text-green-400',
  error: 'text-red-500 dark:text-red-400',
};

const getIsDarkTheme = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  if (document.documentElement.classList.contains('dark')) {
    return true;
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// ============================================================================
// COMPONENT
// ============================================================================

const DashboardLayout = ({ children }) => {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================

  // UI State
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Dark mode state - synced with ThemeToggle
  const [darkMode, setDarkMode] = useState(getIsDarkTheme);

  // Get current user from Inertia props
  const { auth, url } = usePage().props;
  const user = auth?.user || null;

  // ============================================================================
  // EFFECTS
  // ============================================================================

  // Keep dashboard darkMode state synced with the actual document theme.
  useEffect(() => {
    const syncTheme = () => setDarkMode(getIsDarkTheme());
    const root = document.documentElement;
    const observer = new MutationObserver(syncTheme);
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('storage', syncTheme);
    mediaQuery.addEventListener('change', syncTheme);
    syncTheme();

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', syncTheme);
      mediaQuery.removeEventListener('change', syncTheme);
    };
  }, []);

  /**
   * Handle window resize for responsive sidebar
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * Close mobile menu when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen &&
        !event.target.closest('.mobile-menu-button') &&
        !event.target.closest('.sidebar')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  /**
   * Close dropdowns on escape key
   */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setProfileDropdownOpen(false);
        setNotificationsOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // ============================================================================
  // HANDLER FUNCTIONS
  // ============================================================================

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    if (notificationsOpen) setNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    if (profileDropdownOpen) setProfileDropdownOpen(false);
  };

  /**
   * Handle quick action clicks
   */
  const handleQuickAction = (action) => {
    
    // Implement actual actions here
    switch (action) {
      case 'add-product':
        // navigate to add product page
        break;
      case 'create-order':
        // navigate to create order page
        break;
      case 'generate-report':
        // open report modal
        break;
      default:
        break;
    }
  };

  /**
   * Check if a navigation item is active
   */
  const isActiveRoute = (path) => {
    return url?.startsWith(path) ?? false;
  };
  // ============================================================================
  // RENDER FUNCTIONS FOR MODULAR COMPONENTS
  // ============================================================================

  /**
   * Render sidebar navigation items from array
   */
  const renderNavItems = (items) => {
    return items.map((item) => (
      <li key={item.path}>
        <Link
          href={item.path}
          className={`
                        flex items-center p-2 rounded-lg transition-all duration-200
                        ${sidebarOpen ? 'justify-start' : 'justify-center'}
                        ${isActiveRoute(item.path)
              ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
              : 'hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }
                        group relative
                    `}
          title={!sidebarOpen ? item.name : ''}
        >
          <item.icon className={`
                        h-5 w-5 shrink-0
                        ${isActiveRoute(item.path)
              ? 'text-indigo-600 dark:text-indigo-400'
              : 'text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
            }
                    `} />

          {sidebarOpen && (
            <>
              <span className="ml-3 text-sm font-medium flex-1">
                {item.name}
              </span>
              {item.badge && (
                <span className={`
                                    text-xs px-2 py-0.5 rounded-full font-medium
                                    ${BADGE_COLORS[item.badge.color] || BADGE_COLORS.gray}
                                `}>
                  {item.badge.count}
                </span>
              )}
            </>
          )}

          {/* Tooltip for collapsed sidebar */}
          {!sidebarOpen && item.description && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
              {item.description}
            </div>
          )}
        </Link>
      </li>
    ));
  };

  /**
   * Render quick actions from array
   */
  const renderQuickActions = () => {
    if (!sidebarOpen) return null;

    return (
      <>
        <div className="my-4 border-t border-gray-200 dark:border-gray-700" />
        <div className="space-y-2">
          <p className="px-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Quick Actions
          </p>
          {QUICK_ACTIONS.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.action)}
              className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200 group"
            >
              <div className="flex items-center">
                <action.icon className={`
                                    h-4 w-4 mr-3
                                    text-${action.color}-600 dark:text-${action.color}-400
                                `} />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {action.name}
                </span>
              </div>
              {action.shortcut && (
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {action.shortcut}
                </span>
              )}
            </button>
          ))}
        </div>
      </>
    );
  };

  /**
   * Render notifications from array
   */
  const renderNotifications = () => {
    const unreadCount = NOTIFICATIONS.filter(n => !n.read).length;

    return (
      <div className="relative">
        <button
          onClick={toggleNotifications}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative"
          aria-label="Notifications"
        >
          <HiBell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse" />
          )}
        </button>

        {notificationsOpen && (
          <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
            <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Notifications
                {unreadCount > 0 && (
                  <span className="ml-2 text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 px-1.5 py-0.5 rounded-full">
                    {unreadCount} new
                  </span>
                )}
              </h3>
              <button
                onClick={() => setNotificationsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <HiX className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {NOTIFICATIONS.map((notification) => (
                <Link
                  key={notification.id}
                  href={notification.link}
                  className={`
                                        block p-3 hover:bg-gray-50 dark:hover:bg-gray-700 
                                        border-b border-gray-100 dark:border-gray-700 last:border-0
                                        ${!notification.read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}
                                    `}
                  onClick={() => setNotificationsOpen(false)}
                >
                  <div className="flex items-start">
                    <div className="shrink-0 mr-3">
                      {notification.type === 'info' && <HiInformationCircle className={`h-5 w-5 ${NOTIFICATION_COLORS.info}`} />}
                      {notification.type === 'warning' && <HiExclamationCircle className={`h-5 w-5 ${NOTIFICATION_COLORS.warning}`} />}
                      {notification.type === 'success' && <HiCheckCircle className={`h-5 w-5 ${NOTIFICATION_COLORS.success}`} />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 dark:text-gray-200">
                        {notification.message}
                      </p>
                      <div className="flex items-center mt-1">
                        <HiClock className="h-3 w-3 text-gray-400 mr-1" />
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {notification.time}
                        </p>
                        {!notification.read && (
                          <span className="ml-2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="p-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <Link
                href="/notifications"
                className="block w-full text-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                onClick={() => setNotificationsOpen(false)}
              >
                View all notifications
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };

  /**
   * Render user profile dropdown from array
   */
  const renderUserDropdown = () => {
    return (
      <div className="relative">
        <button
          onClick={toggleProfileDropdown}
          className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="User menu"
        >
          <HiUserCircle className="h-8 w-8 text-gray-600 dark:text-gray-300" />
          <HiChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </button>

        {profileDropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
            {/* User info header */}
            {user && (
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.name || user.username || 'User'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user.email || ''}
                </p>
              </div>
            )}

            <div className="py-1">
              {USER_MENU_ITEMS.map((item, index) => {
                if (item.type === 'divider') {
                  return <div key={`divider-${index}`} className="my-1 border-t border-gray-200 dark:border-gray-700" />;
                }

                if (item.danger) {
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      method={item.method}
                      as="button"
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    <item.icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

      {/* ============================================================================
                MOBILE MENU OVERLAY
            ============================================================================ */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 dark:bg-gray-900/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* ============================================================================
                SIDEBAR - Independent component
            ============================================================================ */}
      <aside className={`
                sidebar fixed top-0 left-0 z-50 h-full bg-white dark:bg-gray-800 shadow-xl
                transition-all duration-300 ease-in-out
                ${sidebarOpen ? 'w-64' : 'w-20'}
                ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/dashboard" className="flex items-center space-x-2 group">
            {/* Logo Image - switches based on darkMode state */}
            <img
              src={darkMode ? DarkIcon : Icon}
              alt="InvLog Logo"
              className="h-12 w-auto object-contain group-hover:scale-110 transition-transform"
            />
          </Link>

          {/* Sidebar toggle button */}
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 md:block hidden transition-colors"
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            <HiMenu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Sidebar Content - Scrollable */}
        <div className="h-[calc(100%-8rem)] overflow-y-auto py-4 px-3 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
          {/* Main Navigation from array */}
          <ul className="space-y-1">
            {renderNavItems(NAVIGATION_ITEMS)}
          </ul>

          {/* Secondary Navigation from array */}
          <ul className="mt-4 space-y-1">
            {renderNavItems(SECONDARY_NAV_ITEMS, false)}
          </ul>

          {/* Quick Actions from array */}
          {renderQuickActions()}
        </div>

        {/* Sidebar Footer - User Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className={`flex items-center ${sidebarOpen ? 'justify-start' : 'justify-center'}`}>
            <div className="shrink-0">
              <HiUserCircle className="h-8 w-8 text-gray-600 dark:text-gray-400" />
            </div>
            {sidebarOpen && user && (
              <div className="ml-3 min-w-0">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                  {user.name || user.username || 'User'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user.email || ''}
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* ============================================================================
                MAIN CONTENT AREA
            ============================================================================ */}
      <div className={`
                transition-all duration-300
                ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'}
                ${mobileMenuOpen ? 'ml-0' : ''}
            `}>

        {/* ============================================================================
                    TOP NAVBAR
                ============================================================================ */}
        <nav className={`
                    fixed top-0 right-0 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm
                    transition-all duration-300
                `}
          style={{ left: sidebarOpen ? '16rem' : '5rem' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Left side - Mobile menu button and page title */}
              <div className="flex items-center">
                <button
                  onClick={toggleMobileMenu}
                  className="mobile-menu-button p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  <HiMenu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </button>
                <h1 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Dashboard
                </h1>
              </div>

              {/* Right side - All controls from arrays */}
              <div className="flex items-center space-x-3">
                {/* Search Bar */}
                <div className="hidden md:block">
                  <div className="relative">
                    <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 w-64 border border-gray-300 dark:border-gray-600 rounded-lg 
                                                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                                                     placeholder-gray-400 dark:placeholder-gray-500
                                                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                                                     transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Notifications from array */}
                {renderNotifications()}

                {/* Dark Mode Toggle */}
                <ThemeToggle floating={false} />

                {/* User Dropdown from array */}
                {renderUserDropdown()}
              </div>
            </div>
          </div>
        </nav>

        {/* ============================================================================
                    MAIN CONTENT
            ============================================================================ */}
        <main className="pt-16 min-h-screen">
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Page Content - Renders child components */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors duration-300">
              {children}
            </div>
          </div>
        </main>

        {/* ============================================================================
                    FOOTER - Generated from array
            ============================================================================ */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 transition-colors duration-300">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Sazzadul Inventory and Logistics. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {FOOTER_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                  >
                    <link.icon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
