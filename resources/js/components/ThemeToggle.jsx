// components/ThemeToggle.jsx

/**
 * ThemeToggle Component
 *
 * Features:
 * - Toggles between Light Mode and Dark Mode
 * - Saves user preference in localStorage
 * - Detects system theme preference on first load
 * - Supports two display modes:
 *    1. Floating Mode (fixed position on screen)
 *    2. Inline Mode (normal component inside layouts like navbar/sidebar)
 */

import React, { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = ({ floating = true }) => {

  /**
   * Initialize dark mode state
   *
   * Priority order:
   * 1. Saved theme from localStorage
   * 2. System preference (prefers-color-scheme)
   * 3. Default: Light Mode
   */
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        return savedTheme === 'dark';
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return false;
  });

  /**
   * Apply theme to the root HTML element
   *
   * Tailwind's dark mode works by adding the "dark" class
   * to the <html> element.
   *
   * Also saves the selected theme in localStorage
   * so it persists after page reload.
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
   * Toggle theme between light and dark
   */
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Base styles shared by both modes
  const baseClasses =
    "cursor-pointer p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500";

  // Additional styles only for floating mode
  const floatingClasses = "fixed top-4 right-4 z-50";

  return (
    <button
      onClick={toggleTheme}
      className={`${baseClasses} ${floating ? floatingClasses : ""}`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Icon changes depending on active theme */}
      {darkMode ? (
        <HiSun className="h-5 w-5 text-yellow-500" />
      ) : (
        <HiMoon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
      )}
    </button>
  );
};

export default ThemeToggle;