// components/ThemeToggle.jsx

/**
 * ThemeToggle Component
 * Floating button that toggles between light and dark mode
 * Saves preference to localStorage and detects system preference
 */

import React, { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = () => {
  // Initialize dark mode state from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check if window is defined (for SSR/Next.js compatibility)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');

      // If theme exists in localStorage, use that
      if (savedTheme) {
        return savedTheme === 'dark';
      }

      // Otherwise, check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Default to light mode if window is not defined (SSR)
    return false;
  });

  /**
   * Effect to apply dark mode class to HTML element
   * and save preference to localStorage
   */
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  /**
   * Toggle between light and dark mode
   */
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <HiSun className="h-5 w-5 text-yellow-500" />
      ) : (
        <HiMoon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
      )}
    </button>
  );
};

export default ThemeToggle;