/**
 * ThemeToggle Component with Enhanced Animations
 */

import React, { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = ({ floating = false }) => {
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

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    // Add CSS transition to root for smooth background changes
    if (!root.classList.contains('theme-transition-enabled')) {
      root.style.setProperty('transition', 'background-color 0.3s ease, color 0.3s ease');
      root.classList.add('theme-transition-enabled');
    }

    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setIsAnimating(true);

    // Small delay to allow animation to play
    setTimeout(() => {
      setDarkMode(!darkMode);

      // Reset animation state after transition
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 50);
  };

  const baseClasses = `
    cursor-pointer p-2.5 rounded-xl
    transition-all duration-300 ease-out
    transform hover:scale-110 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
    dark:focus:ring-offset-gray-900
    ${isAnimating ? 'animate-pulse' : ''}
  `;

  const bgClasses = darkMode
    ? 'bg-gray-800 hover:bg-gray-700 shadow-lg shadow-gray-900/20'
    : 'bg-gray-100 hover:bg-gray-200 shadow-lg shadow-gray-300/20';

  const floatingClasses = "fixed bottom-4 right-4 z-50";

  return (
    <button
      onClick={toggleTheme}
      className={`${baseClasses} ${bgClasses} ${floating ? floatingClasses : ""}`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        <HiSun
          className={`absolute inset-0 h-5 w-5 text-yellow-500 transition-all duration-500 ease-in-out ${darkMode
              ? 'opacity-0 rotate-180 scale-0'
              : 'opacity-100 rotate-0 scale-100'
            }`}
        />
        <HiMoon
          className={`absolute inset-0 h-5 w-5 text-indigo-400 transition-all duration-500 ease-in-out ${darkMode
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-180 scale-0'
            }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;