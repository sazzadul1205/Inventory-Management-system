import React from 'react';
import { Link } from '@inertiajs/react';
import {
  WiDayThunderstorm,
  FiHome,
  FiRefreshCw,
  FiMail,
  FiArrowLeft
} from 'react-icons/all';

const PageBroken = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 py-8">
      <div className="max-w-xl w-full text-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl dark:shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">

        {/* Animated Icon */}
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-0 animate-ping opacity-20">
            <WiDayThunderstorm className="text-red-500 dark:text-red-400 text-6xl sm:text-7xl mx-auto" />
          </div>
          <WiDayThunderstorm className="relative text-red-500 dark:text-red-400 text-6xl sm:text-7xl mx-auto animate-bounce" />
        </div>

        {/* Error Code Badge */}
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono font-medium bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
          500 • Page Error
        </span>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-3">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          This page is not configured properly or is currently unavailable.
          It might be missing data or broken in the system.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-xl hover:from-gray-900 hover:to-black dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <FiHome className="text-lg" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <FiRefreshCw className="text-lg" />
            <span>Reload Page</span>
          </button>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300"
          >
            <FiArrowLeft className="text-lg" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Help Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            Still having trouble? We're here to help
          </p>
          <a
            href="mailto:support@example.com"
            className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            <FiMail className="group-hover:scale-110 transition-transform" />
            <span>Contact Support</span>
            <span className="text-xs opacity-50">→</span>
          </a>
        </div>

        {/* Error ID (optional) */}
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 font-mono">
          Error Reference: ERR_PAGE_BROKEN_{Math.random().toString(36).substring(7).toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default PageBroken;