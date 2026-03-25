// shared/navbar.jsx

// React
import { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

// React Query
import { useQuery } from '@tanstack/react-query';

// Axios
import axios from 'axios';

// Icons
import {
  HiHome,
  HiBriefcase,
  HiLogin,
  HiUserAdd,
  HiOutlineCog,
} from 'react-icons/hi';

// Logo
import Icon from '../../../public/Icon.png';
import DarkIcon from '../../../public/DarkIcon.png';

// Routes
import { login, register } from '@/routes';

// Components
import ThemeToggle from '@/components/ThemeToggle';

// =====================================================
// Utility: Convert slug to kebab-case (IMPORTANT FIX)
// =====================================================
const toKebabCase = (str = '') =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

// =====================================================
// Icon Mapping (CLEAN & SCALABLE)
// =====================================================
const iconMap = {
  home: HiHome,
  services: HiBriefcase,
  'how it works': HiOutlineCog,
};

const getIconForPage = (name = '') => {
  return iconMap[name.toLowerCase()] || HiHome;
};

// =====================================================
// Fetch Navigation Items
// =====================================================
const fetchNavItems = async () => {
  const response = await axios.get('/api/pages');
  const pages = response.data;

  const items = pages.map((page) => ({
    name: page.name,
    path:
      page.slug === 'home'
        ? '/'
        : `/${toKebabCase(page.slug)}`,
    icon: getIconForPage(page.name),
    order: page.order,
  }));

  // Sort by order
  items.sort((a, b) => a.order - b.order);

  return items;
};

// =====================================================
// Theme Detection
// =====================================================
const getIsDarkTheme = () => {
  if (typeof window === 'undefined') return false;

  if (document.documentElement.classList.contains('dark')) {
    return true;
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme === 'dark';

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// =====================================================
// Navbar Component
// =====================================================
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(getIsDarkTheme);
  const { url } = usePage();

  const { data: navItems = [], isLoading, error } = useQuery({
    queryKey: ['navItems'],
    queryFn: fetchNavItems,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    retry: 1,
  });

  // Sync theme
  useEffect(() => {
    const syncTheme = () => setDarkMode(getIsDarkTheme());

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', syncTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', syncTheme);
    };
  }, []);

  // =====================================================
  // Active Link Detection (FIXED FOR NESTED ROUTES)
  // =====================================================
  const isActive = (path) => {
    if (path === '/') return url === '/' || url === '';
    return url.startsWith(path);
  };

  // =====================================================
  // Styles
  // =====================================================
  const getNavItemClasses = (path) => {
    const active = isActive(path);

    return `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${active
      ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-b-2 border-indigo-500'
      : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700'
      }`;
  };

  const authButtons = [
    { name: 'Login', path: login.url(), icon: HiLogin, primary: false },
    { name: 'Register', path: register.url(), icon: HiUserAdd, primary: true },
  ];

  const getAuthButtonClasses = (button) => {
    const active = isActive(button.path);

    if (button.primary) {
      return `flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium ${active
        ? 'bg-indigo-700 text-white'
        : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`;
    }

    return `flex items-center space-x-1 px-4 py-2 rounded-md text-sm ${active
      ? 'bg-indigo-100 text-indigo-700'
      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
      }`;
  };

  // =====================================================
  // Loading State
  // =====================================================
  if (isLoading) {
    return (
      <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
        <div className="px-6 py-4 flex justify-between">
          <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
          <div className="flex gap-3">
            <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>
        </div>
      </nav>
    );
  }

  if (error) console.error('Nav error:', error);

  // =====================================================
  // Render
  // =====================================================
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 px-10 py-1">
      <div className="px-6 flex justify-between items-center h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={darkMode ? DarkIcon : Icon}
            className="w-40"
            alt="Logo"
          />
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={getNavItemClasses(item.path)}>
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          ))}

          {/* Auth */}
          <div className="flex items-center gap-2 border-l pl-4">
            {authButtons.map((btn) => (
              <Link key={btn.name} href={btn.path} className={getAuthButtonClasses(btn)}>
                <btn.icon className="h-4 w-4" />
                <span>{btn.name}</span>
              </Link>
            ))}

            {/* Theme */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;