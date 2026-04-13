// shared/navbar.jsx

// Inertia
import { Link, usePage } from '@inertiajs/react';

// React query
import { useQuery } from '@tanstack/react-query';

// Axios
import axios from 'axios';

// React
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  FiMap,
  FiHome,
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
  FiSettings,
  FiFileText,
  FiBriefcase,
  FiDollarSign,
  FiHelpCircle,
  FiSmartphone,
  FiCheckCircle,
  FiMenu,
  FiX,
} from "react-icons/fi";
import {
  HiLogin,
  HiUserAdd,
  HiChevronDown,
  HiOutlineLightBulb,
  HiOutlineNewspaper,
} from 'react-icons/hi';

import { MdOutlineBusinessCenter } from "react-icons/md";

// ICONS
import DarkIcon from '../../../public/DarkIcon.png';
import Icon from '../../../public/Icon.png';

// Theme Toggle
import ThemeToggle from '@/components/ThemeToggle';

// Routes
import { login, register } from '@/routes';

// =====================================================
// HELPERS
// =====================================================

const toKebabCase = (str = '') => {
  if (!str || str.trim() === '') return '';
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
};

const toTitleFromCamel = (str = '') => {
  if (!str || str.trim() === '') return '';
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();
};

// ICON MAP with better matching
const iconMap = {
  home: FiHome,
  services: FiSettings,
  features: FiStar,
  howitworks: HiOutlineLightBulb,
  industries: MdOutlineBusinessCenter,
  successstories: FiLayers,
  testimonials: FiUsers,
  pricingplans: FiDollarSign,
  pricing: FiDollarSign,
  faq: FiHelpCircle,
  contact: FiPhone,
  aboutus: FiInfo,
  about: FiInfo,
  whychooseus: FiCheckCircle,
  blog: FiEdit,
  news: HiOutlineNewspaper,
  partners: FiUsers,
  globalpresence: FiGlobe,
  careers: FiBriefcase,
  trustsignals: FiShield,
  newsletter: FiMail,
  mobileapp: FiSmartphone,
  events: FiCalendar,
  support: FiLifeBuoy,
  legal: FiFileText,
  sitemap: FiMap,
};

const getIconForPage = (name = '', slug = '') => {
  const key = normalizeKey(slug || name);
  return iconMap[key] || FiHome;
};

const normalizeKey = (str = '') => {
  if (!str) return '';
  return str.toLowerCase().replace(/[^a-z]/g, '');
};

// =====================================================
// API
// =====================================================

const fetchNavItems = async () => {
  try {
    const { data } = await axios.get('/api/pages');

    // Filter out invalid entries and ensure unique paths
    const validPages = data.filter(page => {
      const hasValidName = page.name && page.name.trim() !== '';
      const hasValidPath = page.slug && page.slug.trim() !== '';
      return hasValidName && hasValidPath;
    });

    return validPages
      .map((page) => {
        const label = page.label || toTitleFromCamel(page.name);
        const path = page.slug === 'home' ? '/' : `/${toKebabCase(page.slug)}`;

        return {
          id: page.id || page.name,
          name: page.name.trim(),
          label,
          path,
          icon: getIconForPage(page.name, page.slug),
          order: page.order ?? 999,
          slug: page.slug,
        };
      })
      .sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Navbar fetch failed:', error);
    return [];
  }
};

// =====================================================
// MOBILE MENU COMPONENT
// =====================================================

const MobileMenu = ({ items, isOpen, onClose, isActive }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 overflow-y-auto">
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-200">
            <FiX className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 space-y-2">
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={onClose}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(item.path)
                  ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label || item.name}</span>
            </Link>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="pt-4 mt-4 border-t dark:border-gray-700 space-y-2">
            <Link
              href={login.url()}
              onClick={onClose}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <HiLogin className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link
              href={register.url()}
              onClick={onClose}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200"
            >
              <HiUserAdd className="h-5 w-5" />
              <span>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// MAIN NAVBAR COMPONENT
// =====================================================

const Navbar = () => {

  // States
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs
  const dropdownRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  // Max number of visible items
  const MAX_VISIBLE = 8;

  // Get URL from Inertia
  const { url } = usePage();

  // Fetch nav items
  const { data: navItems = [], isLoading } = useQuery({
    queryKey: ['navItems'],
    queryFn: fetchNavItems,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  // Check if a navigation item is active
  const isActive = useCallback((path) => {
    if (path === '/') return url === '/';
    if (path === '/home') return url === '/';
    return url.startsWith(path);
  }, [url]);

  // Memoized visible and overflow items
  const { finalVisibleItems, finalOverflowItems } = useMemo(() => {
    if (navItems.length === 0) return { finalVisibleItems: [], finalOverflowItems: [] };

    const visible = navItems.slice(0, MAX_VISIBLE);
    const overflow = navItems.slice(MAX_VISIBLE);

    const activeOverflowIndex = overflow.findIndex((item) =>
      isActive(item.path)
    );

    if (activeOverflowIndex === -1 || overflow.length === 0) {
      return { finalVisibleItems: visible, finalOverflowItems: overflow };
    }

    const activeItem = overflow[activeOverflowIndex];
    const lastIndex = visible.length - 1;
    const displacedItem = visible[lastIndex];

    const newVisible = [...visible];
    newVisible[lastIndex] = activeItem;

    const newOverflow = [
      ...overflow.filter((_, i) => i !== activeOverflowIndex),
      displacedItem,
    ].sort((a, b) => a.order - b.order);

    return {
      finalVisibleItems: newVisible,
      finalOverflowItems: newOverflow,
    };
  }, [isActive, navItems]);

  // Handle click outside for dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setOpenDropdown(false);
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
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-40">
        <div className="mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <Link href="/" className="flex items-center shrink-0">
              <img src={Icon} alt="InvLog Logo" className="h-10 w-auto dark:hidden" />
              <img src={DarkIcon} alt="InvLog Logo" className="hidden h-10 w-auto dark:block" />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {isLoading && (
                <div className="text-sm text-gray-400 dark:text-gray-500 px-3 animate-pulse">Loading...</div>
              )}

              {/* Main Links */}
              {finalVisibleItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(item.path)
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                      : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label || item.name}</span>
                </Link>
              ))}

              {/* Dropdown for overflow items */}
              {finalOverflowItems.length > 0 && (
                <div ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${openDropdown
                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                        : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    <span>More</span>
                    <HiChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    className={`absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 origin-top-right ${openDropdown
                        ? 'opacity-100 scale-100 visible'
                        : 'opacity-0 scale-95 invisible'
                      }`}
                  >
                    {finalOverflowItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setOpenDropdown(false)}
                        className={`flex items-center space-x-3 px-4 py-2.5 text-sm transition-colors duration-150 ${isActive(item.path)
                            ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label || item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT SECTION - Auth & Theme Toggle */}
            <div className="flex items-center space-x-2">
              {/* Desktop Auth Buttons */}
              <div className="hidden lg:flex items-center space-x-2">
                <Link
                  href={login.url()}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <HiLogin className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <Link
                  href={register.url()}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <HiUserAdd className="h-4 w-4" />
                  <span>Register</span>
                </Link>
              </div>

              {/* Theme Toggle - inline mode for navbar */}
              <ThemeToggle floating={false} />

              {/* Mobile Menu Button */}
              <button
                ref={mobileMenuButtonRef}
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="Open menu"
              >
                <FiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        items={navItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isActive={isActive}
      />
    </>
  );
};

export default Navbar;