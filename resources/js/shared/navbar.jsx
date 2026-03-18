import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import {
  HiHome,
  HiInformationCircle,
  HiBriefcase,
  HiMail,
  HiMenu,
  HiX,
  HiLogin,
  HiUserAdd,
} from 'react-icons/hi';

import Icon from '../../../public/Icon.png';
import DarkIcon from '../../../public/DarkIcon.png';

// Routes
import { login, register } from '@/routes';

// Components
import ThemeToggle from '@/components/ThemeToggle';
import { HiPencil, HiQuestionMarkCircle, HiStar } from 'react-icons/hi2';

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
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getIsDarkTheme);

  useEffect(() => {
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

  // Navigation items array with all links
  const navItems = [
    { name: 'Home', path: '/', icon: HiHome },
    { name: 'About', path: '/about', icon: HiInformationCircle },
    { name: 'Services', path: '/services', icon: HiBriefcase },
    { name: 'Testimonials', path: '/testimonials', icon: HiStar }, // You'll need to import HiStar
    { name: 'FAQ', path: '/faq', icon: HiQuestionMarkCircle }, // You'll need to import HiQuestionMarkCircle
    { name: 'Blog', path: '/blog', icon: HiPencil }, // You'll need to import HiPencil
    { name: 'Contact', path: '/contact', icon: HiMail },
  ];

  // Auth buttons array
  const authButtons = [
    { name: 'Login', path: login.url(), icon: HiLogin, primary: false },
    { name: 'Register', path: register.url(), icon: HiUserAdd, primary: true },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              {authButtons.map((button) => (
                <Link
                  key={button.name}
                  href={button.path}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${button.primary
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg'
                    : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700'
                    }`}
                >
                  <button.icon className="h-4 w-4" />
                  <span>{button.name}</span>
                </Link>
              ))}
            </div>

            {/* Theme Toggle Inline in Navbar */}
            <ThemeToggle floating={false} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle floating={false} /> {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <HiX className="block h-6 w-6" /> : <HiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700 px-3 py-3 rounded-md text-base font-medium transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700 mt-2 flex flex-col space-y-2 px-2">
            {authButtons.map((button) => (
              <Link
                key={button.name}
                href={button.path}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${button.primary
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <button.icon className="h-4 w-4" />
                <span>{button.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
