// shared/navbar.jsx
/**
 * Navbar Component - Main Navigation Bar for the Application
 * 
 * Features:
 * - Dynamic navigation items fetched from API
 * - Responsive design with desktop-first approach
 * - Active route highlighting
 * - "More" dropdown for overflow navigation items
 * - Theme toggle (light/dark mode)
 * - Authentication links (Login/Register)
 * - Icon mapping based on page slugs
 * - Sticky positioning with shadow
 * - Smooth transitions and hover effects
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
import { useCallback, useRef, useState, useEffect } from 'react';

// =========================
// ICON IMPORTS - Lightweight icons from Feather (Fi) and Heroicons (Hi)
// =========================
import {
  FiHome,           // Home page icon
  FiSettings,       // Services/features icon
  FiStar,           // Features/ratings icon
  FiInfo,           // About/Info icon
  FiEdit,           // Blog/News icon
  FiMail,           // Newsletter/Contact icon
  FiUsers,          // Team/Testimonials icon
  FiPhone,          // Contact/Sales icon
  FiGlobe,          // Global presence icon
  FiShield,         // Security/Trust signals icon
  FiLayers,         // Success stories icon
  FiCalendar,       // Events icon
  FiLifeBuoy,       // Support/Help icon
  FiFileText,       // Legal/Docs icon
  FiBriefcase,      // Careers icon
  FiDollarSign,     // Pricing icon
  FiHelpCircle,     // FAQ icon
  FiSmartphone,     // Mobile app icon
  FiCheckCircle,    // Why choose us icon
  FiMap,            // Sitemap icon
} from "react-icons/fi";

import {
  HiOutlineLightBulb,  // How it works icon
  HiOutlineNewspaper,  // News icon
  HiChevronDown,       // Dropdown arrow icon
} from "react-icons/hi";

import { MdOutlineBusinessCenter } from "react-icons/md"; // Industries icon

// Assets
import DarkIcon from '../../../public/DarkIcon.png';  // Logo for dark mode
import Icon from '../../../public/Icon.png';          // Logo for light mode

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

/** CSS classes for different navigation states */
const NAV_STYLES = {
  active: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
  inactive: 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800',
  dropdown: 'absolute right-0 mt-2 w-60 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50',
  dropdownItem: 'flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700',
  button: 'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
  loginBtn: 'text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors',
  registerBtn: 'px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105',
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
  faq: FiHelpCircle,
  contact: FiPhone,
  "about-us": FiInfo,
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
const getIcon = (slug) => ICON_MAP[slug] || FiHome;

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
    const { data } = await axios.get('/api/pages');

    return data
      .filter(page => page.slug && page.name)  // Filter invalid entries
      .map(page => ({
        id: page.id,
        name: page.name,
        label: page.name,
        slug: page.slug,
        path: page.slug === 'home' ? '/' : `/${page.slug}`,
        order: page.order ?? DEFAULT_ORDER,
        icon: getIcon(page.slug),
      }))
      .sort((a, b) => a.order - b.order);  // Sort by priority
  } catch (error) {
    console.error('Failed to fetch navigation items:', error);
    return [];  // Return empty array on error to prevent crash
  }
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
  // Get current URL from Inertia for active route detection
  const { url } = usePage();

  // Refs and state for dropdown menu
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch navigation items with React Query (cached automatically)
  const { data: items = [], isLoading, error } = useQuery({
    queryKey: ['nav'],
    queryFn: fetchNavItems,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 1,                  // Only retry once on failure
  });

  /**
   * Determines if a given path matches the current route
   * @param {string} path - Path to check against current URL
   * @returns {boolean} True if path is active
   */
  const isActive = useCallback(
    (path) => path === '/' ? url === '/' : url.startsWith(path),
    [url]
  );

  // Split items into visible and "more" categories
  const visibleItems = items.slice(0, MAX_VISIBLE_ITEMS);
  const moreItems = items.slice(MAX_VISIBLE_ITEMS);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Loading state (optional - shows minimal navbar)
  if (isLoading) {
    return (
      <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-40">
        <div className="mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-40 transition-colors duration-200">
      <div className="mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

        {/* ==================== LOGO SECTION ==================== */}
        <Link
          href="/"
          className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Go to homepage"
        >
          {/* Light mode logo */}
          <img
            src={Icon}
            className="h-10 dark:hidden"
            alt="Company Logo - Light"
            loading="eager"
          />
          {/* Dark mode logo */}
          <img
            src={DarkIcon}
            className="h-10 hidden dark:block"
            alt="Company Logo - Dark"
            loading="eager"
          />
        </Link>

        {/* ==================== NAVIGATION MENU ==================== */}
        <div className="hidden md:flex items-center space-x-1">

          {/* Visible navigation items */}
          {visibleItems.map((item) => (
            <Link
              key={item.slug}
              href={item.path}
              className={`${NAV_STYLES.button} flex items-center space-x-2 px-3 py-2 ${isActive(item.path) ? NAV_STYLES.active : NAV_STYLES.inactive
                }`}
              aria-current={isActive(item.path) ? 'page' : undefined}
            >
              <item.icon className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">{item.label}</span>
            </Link>
          ))}

          {/* "More" dropdown for overflow items */}
          {moreItems.length > 0 && (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`${NAV_STYLES.button} flex items-center space-x-1 px-3 py-2 ${NAV_STYLES.inactive}`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <HiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className={NAV_STYLES.dropdown}>
                  {moreItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.path}
                      className={NAV_STYLES.dropdownItem}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <item.icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ==================== RIGHT SIDE ACTIONS ==================== */}
        <div className="flex items-center space-x-4">

          {/* Login Link */}
          <Link
            href={login.url()}
            className={NAV_STYLES.loginBtn}
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
            Register
          </Link>


          {/* Theme Toggle (Light/Dark mode) */}
          <ThemeToggle floating={false} />
        </div>
      </div>

      {/* Error boundary fallback (optional) */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm text-center py-1">
          Navigation failed to load. Please refresh the page.
        </div>
      )}
    </nav>
  );
}