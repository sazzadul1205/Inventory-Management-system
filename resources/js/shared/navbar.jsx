// shared/navbar.jsx

import { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import {
  HiHome,
  HiLogin,
  HiUserAdd,
  HiBriefcase,
  HiOutlineCog,
  HiOutlineViewGrid,
  HiOutlineSparkles,
  HiOutlineOfficeBuilding,
  HiOutlineChatAlt2,
  HiOutlineCurrencyDollar,
  HiOutlineMail,
  HiOutlineUserGroup,
  HiChevronDown,
} from 'react-icons/hi';

import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';

import Icon from '../../../public/Icon.png';
import DarkIcon from '../../../public/DarkIcon.png';

import { login, register } from '@/routes';
import ThemeToggle from '@/components/ThemeToggle';

// =====================================================

const toKebabCase = (str = '') =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

const iconMap = {
  home: HiHome,
  services: HiBriefcase,
  features: HiOutlineViewGrid,
  'how it works': HiOutlineCog,
  industries: HiOutlineOfficeBuilding,
  'success stories': HiOutlineSparkles,
  testimonials: HiOutlineChatAlt2,
  'pricing plans': HiOutlineCurrencyDollar,
  faq: HiOutlineQuestionMarkCircle,
  contact: HiOutlineMail,
  aboutus: HiOutlineUserGroup,
};

const getIconForPage = (name = '') =>
  iconMap[name.toLowerCase()] || HiHome;

const fetchNavItems = async () => {
  const res = await axios.get('/api/pages');

  const items = res.data.map((page) => ({
    name: page.name,
    path: page.slug === 'home' ? '/' : `/${toKebabCase(page.slug)}`,
    icon: getIconForPage(page.name),
    order: page.order,
  }));

  return items.sort((a, b) => a.order - b.order);
};

const isDarkTheme = () => {
  if (typeof window === 'undefined') return false;
  if (document.documentElement.classList.contains('dark')) return true;

  const saved = localStorage.getItem('theme');
  if (saved) return saved === 'dark';

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// =====================================================

const Navbar = () => {
  const [darkMode] = useState(isDarkTheme);
  const [openDropdown, setOpenDropdown] = useState(false);

  const MAX_VISIBLE = 6;
  const { url } = usePage();

  const { data: navItems = [] } = useQuery({
    queryKey: ['navItems'],
    queryFn: fetchNavItems,
  });

  const isActive = (path) => {
    if (path === '/') return url === '/';
    return url.startsWith(path);
  };

  const visibleItems = navItems.slice(0, MAX_VISIBLE);
  const overflowItems = navItems.slice(MAX_VISIBLE);

  // ===============================
  // SMART SWAP LOGIC
  // ===============================
  const activeOverflowIndex = overflowItems.findIndex((item) =>
    isActive(item.path)
  );

  const activeOverflowItem =
    activeOverflowIndex !== -1 ? overflowItems[activeOverflowIndex] : null;

  let finalVisibleItems = [...visibleItems];
  let finalOverflowItems = [...overflowItems];

  if (activeOverflowItem) {
    const lastIndex = finalVisibleItems.length - 1;

    const displacedItem = finalVisibleItems[lastIndex];

    finalVisibleItems[lastIndex] = activeOverflowItem;

    finalOverflowItems = [
      ...overflowItems.filter((_, i) => i !== activeOverflowIndex),
      displacedItem,
    ];
  }

  // ===============================
  // Outside click close
  // ===============================
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.more-dropdown')) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // ===============================
  // RENDER
  // ===============================
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 px-10 py-1">
      <div className="px-6 flex justify-between items-center h-16">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img src={darkMode ? DarkIcon : Icon} className="w-40" />
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-4">

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
              <span>{item.name}</span>
            </Link>
          ))}

          {/* MORE DROPDOWN */}
          {finalOverflowItems.length > 0 && (
            <div className="relative more-dropdown">

              <button
                onClick={() => setOpenDropdown((s) => !s)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700"
              >
                More
                <HiChevronDown className="ml-1 h-4 w-4" />
              </button>

              <div
                className={`
                  absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-50
                  transform origin-top-right transition-all duration-200 ease-out
                  ${openDropdown
                    ? 'opacity-100 scale-100 visible'
                    : 'opacity-0 scale-95 invisible pointer-events-none'
                  }
                `}
              >
                {finalOverflowItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setOpenDropdown(false)}
                    className="flex items-center px-4 py-2 text-sm hover:bg-indigo-50 dark:hover:bg-gray-700"
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* AUTH (RESTORED ORIGINAL STYLE) */}
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