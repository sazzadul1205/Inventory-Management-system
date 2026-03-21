import React, { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  HiHome,
  HiBriefcase,
  HiLogin,
  HiUserAdd,
} from 'react-icons/hi';

import Icon from '../../../public/Icon.png';
import DarkIcon from '../../../public/DarkIcon.png';

// Routes
import { login, register } from '@/routes';

// Components
import ThemeToggle from '@/components/ThemeToggle';

// Map page names to icons
const getIconForPage = (name) => {
  const nameLower = name.toLowerCase();
  if (nameLower === 'home') return HiHome;
  if (nameLower === 'services') return HiBriefcase;
  // Add more mappings as needed
  return HiHome; // Default icon
};

// Fetch function for navigation items
const fetchNavItems = async () => {
  const response = await axios.get('/api/pages');
  const pages = response.data;
  
  // Transform API data to nav items format
  const items = pages.map(page => ({
    name: page.name,
    path: page.slug === 'home' ? '/' : `/${page.slug}`,
    icon: getIconForPage(page.name),
    order: page.order
  }));
  
  // Sort by order
  items.sort((a, b) => a.order - b.order);
  return items;
};

// Determine current theme (used to swap logo)
const getIsDarkTheme = () => {
  if (typeof window === 'undefined') return false;

  if (document.documentElement.classList.contains('dark')) {
    return true;
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(getIsDarkTheme);
  const { url } = usePage();

  // TanStack Query for fetching navigation items
  const { 
    data: navItems = [], 
    isLoading,
    error 
  } = useQuery({
    queryKey: ['navItems'],
    queryFn: fetchNavItems,
    staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Cache for 10 minutes
    retry: 1, // Retry once if fails
  });

  useEffect(() => {
    // Keep logo updated when theme changes
    const syncTheme = () => setDarkMode(getIsDarkTheme());
    const root = document.documentElement;
    const observer = new MutationObserver(syncTheme);
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    mediaQuery.addEventListener('change', syncTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', syncTheme);
    };
  }, []);

  // Check if a nav link matches the current URL
  const isActive = (path) => {
    if (path === '/') {
      return url === '/' || url === '';
    }
    return url.startsWith(path);
  };

  // Auth buttons
  const authButtons = [
    { name: 'Login', path: login.url(), icon: HiLogin, primary: false },
    { name: 'Register', path: register.url(), icon: HiUserAdd, primary: true },
  ];

  // Active state styles for desktop items
  const getNavItemClasses = (path) => {
    const active = isActive(path);
    return `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${active
      ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-b-2 border-indigo-500 dark:border-indigo-400'
      : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700 dark:hover:text-indigo-400'
      }`;
  };

  // Active state styles for auth buttons
  const getAuthButtonClasses = (button) => {
    const active = isActive(button.path);

    if (button.primary) {
      return `flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${active
        ? 'bg-indigo-700 dark:bg-indigo-800 text-white shadow-lg ring-2 ring-indigo-300 dark:ring-indigo-700'
        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg dark:bg-indigo-700 dark:hover:bg-indigo-800'
        }`;
    }

    // Non-primary auth buttons (Login)
    return `flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${active
      ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700'
      : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700 dark:hover:text-indigo-400'
      }`;
  };

  // Show loading state while fetching
  if (isLoading) {
    return (
      <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img
                src={darkMode ? DarkIcon : Icon}
                alt="Sazzadul Inventory and Logistics"
                className="w-48 h-auto object-contain"
              />
            </div>
            <div className="flex items-center space-x-4">
              {/* Skeleton loader for nav items */}
              <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Show error state if needed
  if (error) {
    console.error('Failed to load navigation:', error);
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <img
                src={darkMode ? DarkIcon : Icon}
                alt="Sazzadul Inventory and Logistics"
                className="w-48 h-auto object-contain group-hover:opacity-90 transition-opacity duration-200 dark:brightness-90"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={getNavItemClasses(item.path)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Auth buttons */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              {authButtons.map((button) => (
                <Link
                  key={button.name}
                  href={button.path}
                  className={getAuthButtonClasses(button)}
                >
                  <button.icon className="h-4 w-4" />
                  <span>{button.name}</span>
                </Link>
              ))}
            </div>

            {/* Theme toggle */}
            <ThemeToggle floating={false} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;