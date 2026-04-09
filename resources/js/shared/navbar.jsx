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
  FiSettings,
  FiBriefcase,
  FiDollarSign,
  FiHelpCircle,
  FiSmartphone,
  FiCheckCircle,
} from "react-icons/fi";
import {
  HiHome,
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

const toKebabCase = (str = '') =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

const toTitleFromCamel = (str = '') =>
  str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();

// KEY FIX: normalize everything
const normalizeKey = (str = '') =>
  str.toLowerCase().replace(/[^a-z]/g, '');

// ICON MAP (normalized keys)
const iconMap = {
  Home: FiHome,
  Services: FiSettings,
  Features: FiStar,
  HowItWorks: HiOutlineLightBulb,
  Industries: MdOutlineBusinessCenter,
  SuccessStories: FiLayers,
  Testimonials: FiUsers,
  PricingPlans: FiDollarSign,
  FAQ: FiHelpCircle,
  Contact: FiPhone,
  AboutUs: FiInfo,
  WhyChooseUs: FiCheckCircle,
  Blog: FiEdit,
  News: HiOutlineNewspaper,
  Partners: FiUsers,
  GlobalPresence: FiGlobe,
  Careers: FiBriefcase,
  TrustSignals: FiShield,
  Newsletter: FiMail,
  MobileApp: FiSmartphone,
};


const getIconForPage = (key = '') =>
  iconMap[normalizeKey(key)] || HiHome;

// =====================================================
// API
// =====================================================

const fetchNavItems = async () => {
  try {
    const { data } = await axios.get('/api/pages');

    return data
      .map((page) => ({
        name: page.name,
        label: toTitleFromCamel(page.name),
        path: page.slug === 'home' ? '/' : `/${toKebabCase(page.slug)}`,
        icon: getIconForPage(page.slug), // FIX: use slug, not name
        order: page.order ?? 999,
      }))
      .sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Navbar fetch failed:', error);
    return [];
  }
};

// =====================================================
// THEME DETECTION
// =====================================================

const isDarkTheme = () => {
  if (typeof window === 'undefined') return false;

  if (document.documentElement.classList.contains('dark')) return true;

  const saved = localStorage.getItem('theme');
  if (saved) return saved === 'dark';

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// =====================================================
// COMPONENT
// =====================================================

const Navbar = () => {
  const [darkMode] = useState(isDarkTheme);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const MAX_VISIBLE = 6;
  const { url } = usePage();

  const { data: navItems = [], isLoading } = useQuery({
    queryKey: ['navItems'],
    queryFn: fetchNavItems,
  });

  const isActive = useCallback((path) => {
    if (path === '/') return url === '/';
    return url.startsWith(path);
  }, [url]);

  // 🔥 MEMOIZED LOGIC
  const { finalVisibleItems, finalOverflowItems } = useMemo(() => {
    const visible = navItems.slice(0, MAX_VISIBLE);
    const overflow = navItems.slice(MAX_VISIBLE);

    const activeOverflowIndex = overflow.findIndex((item) =>
      isActive(item.path)
    );

    if (activeOverflowIndex === -1) {
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
    ];

    return {
      finalVisibleItems: newVisible,
      finalOverflowItems: newOverflow,
    };
  }, [isActive, navItems]);

  // Outside click handler
  useEffect(() => {
    /*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Handles outside clicks on the dropdown menu.
     * If the target is not part of the dropdown menu, it will close the dropdown.
     */
    /*******  b32f0b61-49ad-46e4-acad-d962fea9e6e8  *******/
    const handleClick = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 px-10 py-1">
      <div className="px-6 flex justify-between items-center h-16">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img src={darkMode ? DarkIcon : Icon} className="w-40" />
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-4">

          {/* LOADING */}
          {isLoading && (
            <div className="text-sm text-gray-400 px-3">Loading...</div>
          )}

          {/* MAIN LINKS */}
          {finalVisibleItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive(item.path)
                ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-b-2 border-indigo-500'
                : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700'
                }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label || item.name}</span>
            </Link>
          ))}

          {/* DROPDOWN */}
          {finalOverflowItems.length > 0 && (
            <div ref={dropdownRef} className="relative">

              <button
                onClick={() => setOpenDropdown((s) => !s)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700"
              >
                More
                <HiChevronDown className="ml-1 h-4 w-4" />
              </button>

              <div
                className={`absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-50 transition-all duration-200 ${openDropdown
                  ? 'opacity-100 scale-100 visible'
                  : 'opacity-0 scale-95 invisible pointer-events-none'
                  }`}
              >
                {finalOverflowItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setOpenDropdown(false)}
                    className="flex items-center px-4 py-2 text-sm hover:bg-indigo-50 dark:hover:bg-gray-700"
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label || item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* AUTH */}
          <div className="flex items-center gap-2 border-l pl-4">
            {[
              { name: 'Login', path: login.url(), icon: HiLogin, primary: false },
              { name: 'Register', path: register.url(), icon: HiUserAdd, primary: true },
            ].map((btn) => (
              <Link
                key={btn.name}
                href={btn.path}
                className={
                  btn.primary
                    ? 'flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'flex items-center space-x-1 px-4 py-2 rounded-md text-sm text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-200 dark:hover:bg-gray-700'
                }
              >
                <btn.icon className="h-4 w-4" />
                <span>{btn.name}</span>
              </Link>
            ))}

            <ThemeToggle />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;