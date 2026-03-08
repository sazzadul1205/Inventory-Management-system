import React from 'react';
import { HiOutlineTruck, HiOutlineClock, HiOutlineGlobe, HiArrowRight } from 'react-icons/hi';

const HeroSection2 = () => {
  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Grid Pattern - you'll need to add this to your global CSS */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      {/* Animated Lines */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-0 w-60 h-60 bg-yellow-200 dark:bg-yellow-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800/50 rounded-full px-4 py-2 mb-8 border border-blue-100 dark:border-gray-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="ml-2 text-sm font-medium text-blue-700 dark:text-blue-300">
              Operating in 25+ Countries
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Smart{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Logistics
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M0 0L300 12" stroke="url(#gradient)" strokeWidth="2" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            for Modern Business
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Transform your supply chain with AI-powered inventory management and real-time tracking.
            Experience logistics like never before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button className="group bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center">
              Start Free Trial
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              View Pricing
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">15K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Shipments</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">On-Time</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <HiOutlineTruck className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-sm">Express Delivery</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <HiOutlineClock className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-sm">Real-time Tracking</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <HiOutlineGlobe className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-sm">Global Network</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;