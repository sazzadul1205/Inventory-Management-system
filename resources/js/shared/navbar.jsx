// shared/navbar.jsx
/**
 * Navbar Component - Main Navigation Bar for the Application
 * 
 * Features:
 * - Dynamic navigation items fetched from API
 * - Responsive design with mobile hamburger menu
 * - Active route highlighting with exact and partial matching
 * - "More" dropdown for overflow navigation items
 * - Theme toggle (light/dark mode)
 * - Authentication links (Login/Register)
 * - Icon mapping based on page slugs
 * - Sticky positioning with shadow
 * - Keyboard accessible dropdowns
 * - Smooth transitions and hover effects
 * - Loading skeleton state
 * - Error handling with retry option
 * 
 * Dependencies:
 * - @inertiajs/react: For routing and page navigation
 * - @tanstack/react-query: For data fetching and caching
 * - axios: HTTP client for API requests
 * - react-icons: Icon library
 * - ThemeToggle: Custom component for theme switching
 * 
 * @component
 * @returns {JSX.Element} Rendered navigation bar
 */

import { Link, usePage } from '@inertiajs/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useCallback, useRef, useState, useEffect, useMemo } from 'react';

// =========================
// ICON IMPORTS - Lightweight icons from Feather (Fi) and Heroicons (Hi)
// =========================
import {
  FiHome,
  FiSettings,
  FiStar,
  FiInfo,
  FiEdit,
  FiMail,
  FiUsers,
  FiPhone,
  FiGlobe,
  FiShield,
  FiLayers,
  FiCalendar,
  FiLifeBuoy,
  FiFileText,
  FiBriefcase,
  FiDollarSign,
  FiHelpCircle,
  FiSmartphone,
  FiCheckCircle,
  FiMap,
  FiMenu,
  FiX,
  FiChevronDown,
  FiExternalLink,
} from "react-icons/fi";

import {
  HiOutlineLightBulb,
  HiOutlineNewspaper,
} from "react-icons/hi";

import { MdOutlineBusinessCenter } from "react-icons/md";

// Assets
import DarkIcon from '../../../public/DarkIcon.png';
import Icon from '../../../public/Icon.png';

// Components
import ThemeToggle from '@/components/ThemeToggle';

// Routes
import { login, register } from '@/routes';

// =========================
// CONSTANTS & CONFIGURATION
// =========================

/** Maximum number of visible navigation items before showing "More" dropdown */
const MAX_VISIBLE_ITEMS = 8;

/** Default order for items without specified order */
const DEFAULT_ORDER = 999;

/** Query cache time (5 minutes) */
const QUERY_STALE_TIME = 5 * 60 * 1000;

/** CSS classes for different navigation states */
const NAV_STYLES = {
  // Desktop navigation
  active: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 font-medium',
  inactive: 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400',

  // Dropdown menu
  dropdown: 'absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-xl rounded-xl py-2 z-50 border border-gray-200 dark:border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none',
  dropdownItem: 'flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150',
  dropdownItemActive: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',

  // Button styles
  button: 'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',

  // Auth buttons
  loginBtn: 'text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg px-3 py-2',
  registerBtn: 'px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-md hover:shadow-lg',

  // Mobile menu
  mobileMenu: 'fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto',
  mobileMenuOpen: 'translate-x-0',
  mobileMenuClosed: 'translate-x-full',
  mobileOverlay: 'fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300',
  mobileItem: 'flex items-center space-x-3 w-full px-4 py-3 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-150',
  mobileItemActive: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium',
};

// =========================
// ICON MAPPING
// =========================

/**
 * Maps page slugs to corresponding icon components
 * @constant {Object.<string, React.ComponentType>}
 */
const ICON_MAP = {
  home: FiHome,
  services: FiSettings,
  features: FiStar,
  "how-it-works": HiOutlineLightBulb,
  industries: MdOutlineBusinessCenter,
  "success-stories": FiLayers,
  testimonials: FiUsers,
  "pricing-plans": FiDollarSign,
  pricing: FiDollarSign,
  faq: FiHelpCircle,
  contact: FiPhone,
  "about-us": FiInfo,
  about: FiInfo,
  "why-choose-us": FiCheckCircle,
  blog: FiEdit,
  news: HiOutlineNewspaper,
  partners: FiUsers,
  "global-presence": FiGlobe,
  careers: FiBriefcase,
  "trust-signals": FiShield,
  newsletter: FiMail,
  "mobile-app": FiSmartphone,
  events: FiCalendar,
  support: FiLifeBuoy,
  legal: FiFileText,
  sitemap: FiMap,
};

/**
 * Retrieves the appropriate icon component for a given page slug
 * @param {string} slug - Page slug identifier
 * @returns {React.ComponentType} Icon component (defaults to FiHome)
 */
const getIcon = (slug) => {
  if (!slug) return FiHome;
  const normalizedSlug = slug.toLowerCase().replace(/_/g, '-');
  return ICON_MAP[normalizedSlug] || ICON_MAP[slug] || FiHome;
};

// =========================
// API FUNCTIONS
// =========================

/**
 * Fetches navigation items from the API endpoint
 * Transforms raw page data into navigation-ready format with icons and paths
 * 
 * @async
 * @returns {Promise<Array>} Array of navigation items with shape:
 *   { id, name, label, slug, path, order, icon }
 */
const fetchNavItems = async () => {
  try {
    const { data } = await axios.get('/api/pages', {
      timeout: 10000, // 10 second timeout
    });

    if (!Array.isArray(data)) {
      throw new Error('Invalid response format');
    }

    return data
      .filter(page => page?.slug && page?.name)
      .map(page => ({
        id: page.id,
        name: page.name,
        label: page.name,
        slug: page.slug,
        path: page.slug === 'home' ? '/' : `/${page.slug}`,
        order: page.order ?? DEFAULT_ORDER,
        icon: getIcon(page.slug),
        isExternal: page.isExternal || false,
        target: page.isExternal ? '_blank' : undefined,
        rel: page.isExternal ? 'noopener noreferrer' : undefined,
      }))
      .sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Failed to fetch navigation items:', error);
    throw error;
  }
};

// =========================
// HELPER COMPONENTS
// =========================

/**
 * Loading skeleton for navbar
 */
const NavbarSkeleton = () => (
  <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-40">
    <div className="mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
      {/* Logo skeleton */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
      </div>

      {/* Navigation items skeleton */}
      <div className="hidden md:flex items-center space-x-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-20 h-9 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
        ))}
      </div>

      {/* Actions skeleton */}
      <div className="flex items-center space-x-3">
        <div className="w-16 h-9 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
        <div className="w-20 h-9 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
        <div className="w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
      </div>

      {/* Mobile menu button skeleton */}
      <div className="md:hidden w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
    </div>
  </nav>
);

/**
 * Navigation item component
 */
const NavItem = ({ item, isActive, onClick, isMobile = false, isDropdown = false }) => {
  const baseStyles = isMobile
    ? `${NAV_STYLES.mobileItem} ${isActive ? NAV_STYLES.mobileItemActive : ''}`
    : isDropdown
      ? `${NAV_STYLES.dropdownItem} ${isActive ? NAV_STYLES.dropdownItemActive : ''}`
      : `${NAV_STYLES.button} flex items-center space-x-2 ${isActive ? NAV_STYLES.active : NAV_STYLES.inactive}`;

  const Icon = item.icon;

  if (item.isExternal) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
        onClick={onClick}
      >
        <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap flex-1">{item.label}</span>
        <FiExternalLink className="w-3 h-3 opacity-50" />
      </a>
    );
  }

  return (
    <Link
      href={item.path}
      className={baseStyles}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span className="whitespace-nowrap flex-1">{item.label}</span>
    </Link>
  );
};

// =========================
// MAIN NAVBAR COMPONENT
// =========================

/**
 * Main navigation bar component
 * Displays dynamic navigation items, theme toggle, and auth links
 * 
 * @returns {JSX.Element} Rendered navbar
 */
export default function Navbar() {
  // Get current URL and component from Inertia for active route detection
  const { url } = usePage();

  // State management
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for dropdown and mobile menu
  const moreDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileButtonRef = useRef(null);

  // Fetch navigation items with React Query
  const {
    data: items = [],
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['navigation'],
    queryFn: fetchNavItems,
    staleTime: QUERY_STALE_TIME,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    onError: (err) => {
      console.error('Navigation query failed:', err);
    },
  });

  /**
   * Enhanced active route detection
   * Handles exact matches, nested routes, and home page
   */
  const isActive = useCallback(
    (path) => {
      if (!path) return false;

      // Home page exact match
      if (path === '/') {
        return url === '/' || url === '';
      }

      // Check if current URL starts with the path
      // But only if it's a complete segment match to avoid false positives
      const currentPath = url.startsWith('/') ? url : `/${url}`;
      const normalizedPath = path.startsWith('/') ? path : `/${path}`;

      if (normalizedPath === '/') return currentPath === '/';

      // Exact match or starts with path followed by / or end of string
      return currentPath === normalizedPath ||
        currentPath.startsWith(`${normalizedPath}/`);
    },
    [url]
  );

  // Split items into visible and "more" categories
  const { visibleItems, moreItems } = useMemo(() => {
    if (!items.length) return { visibleItems: [], moreItems: [] };

    return {
      visibleItems: items.slice(0, MAX_VISIBLE_ITEMS),
      moreItems: items.slice(MAX_VISIBLE_ITEMS),
    };
  }, [items]);

  // Check if any item in "more" dropdown is active
  const hasActiveInMore = useMemo(() => {
    return moreItems.some(item => isActive(item.path));
  }, [moreItems, isActive]);

  // Close more dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setIsMoreDropdownOpen(false);
      }
    };

    if (isMoreDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMoreDropdownOpen]);

  // Handle escape key for dropdowns and mobile menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMoreDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreDropdownOpen(false);
  }, [url]);

  // Loading state
  if (isLoading) {
    return <NavbarSkeleton />;
  }

  return (
    <>
      <nav
        className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-40 transition-colors duration-200"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-16 flex items-center justify-between">

          {/* ==================== LOGO SECTION ==================== */}
          <Link
            href="/"
            className="flex items-center shrink-0 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg"
            aria-label="Go to homepage"
          >
            <img
              src={Icon}
              className="h-9 sm:h-10 w-auto dark:hidden"
              alt="Company Logo"
              loading="eager"
              width="40"
              height="40"
            />
            <img
              src={DarkIcon}
              className="h-9 sm:h-10 w-auto hidden dark:block"
              alt="Company Logo"
              loading="eager"
              width="40"
              height="40"
            />
          </Link>

          {/* ==================== DESKTOP NAVIGATION MENU ==================== */}
          <div className="hidden lg:flex items-center space-x-1">
            {visibleItems.map((item) => (
              <NavItem
                key={item.id || item.slug}
                item={item}
                isActive={isActive(item.path)}
              />
            ))}

            {/* "More" dropdown for overflow items */}
            {moreItems.length > 0 && (
              <div ref={moreDropdownRef} className="relative">
                <button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className={`${NAV_STYLES.button} flex items-center space-x-1 ${hasActiveInMore ? NAV_STYLES.active : NAV_STYLES.inactive
                    }`}
                  aria-expanded={isMoreDropdownOpen}
                  aria-haspopup="true"
                  aria-label="More navigation options"
                >
                  <span>More</span>
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isMoreDropdownOpen ? 'rotate-180' : ''
                      }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown menu */}
                {isMoreDropdownOpen && (
                  <div
                    className={NAV_STYLES.dropdown}
                    role="menu"
                    aria-orientation="vertical"
                  >
                    {moreItems.map((item) => (
                      <div key={item.id || item.slug} role="none">
                        <NavItem
                          item={item}
                          isActive={isActive(item.path)}
                          isDropdown={true}
                          onClick={() => setIsMoreDropdownOpen(false)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ==================== RIGHT SIDE ACTIONS ==================== */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Login Link - Hidden on smallest screens */}
            <Link
              href={login.url()}
              className={`hidden sm:inline-block ${NAV_STYLES.loginBtn}`}
              aria-label="Login to your account"
            >
              Login
            </Link>

            {/* Register Button */}
            <Link
              href={register.url()}
              className={NAV_STYLES.registerBtn}
              aria-label="Create a new account"
            >
              <span className="hidden sm:inline">Register</span>
              <span className="sm:hidden">Sign Up</span>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle floating={false} />

            {/* ==================== MOBILE MENU BUTTON ==================== */}
            <button
              ref={mobileButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* ==================== ERROR BANNER ==================== */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm py-2 px-4 border-t border-red-200 dark:border-red-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <span>Navigation failed to load.</span>
              <button
                onClick={() => refetch()}
                className="px-3 py-1 bg-red-100 dark:bg-red-800/30 hover:bg-red-200 dark:hover:bg-red-800/50 rounded-lg text-sm font-medium transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== MOBILE MENU OVERLAY ==================== */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className={NAV_STYLES.mobileOverlay}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <div
            ref={mobileMenuRef}
            className={`${NAV_STYLES.mobileMenu} ${isMobileMenuOpen ? NAV_STYLES.mobileMenuOpen : NAV_STYLES.mobileMenuClosed
              }`}
            role="dialog"
            aria-label="Mobile navigation menu"
            aria-modal="true"
          >
            {/* Mobile menu header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Close menu"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile menu items */}
            <div className="p-4 space-y-1">
              {/* All navigation items */}
              {items.map((item) => (
                <NavItem
                  key={item.id || item.slug}
                  item={item}
                  isActive={isActive(item.path)}
                  isMobile={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}

              {/* Divider */}
              <div className="my-4 border-t border-gray-200 dark:border-gray-700" />

              {/* Mobile auth section */}
              <div className="space-y-2 pt-2">
                <Link
                  href={login.url()}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FiHome className="w-5 h-5" />
                  <span>Login</span>
                </Link>
                <Link
                  href={register.url()}
                  className="flex items-center space-x-3 w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FiStar className="w-5 h-5" />
                  <span>Create Account</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}