import React, { useState } from 'react';
import { HiPlay, HiX, HiCheckCircle, HiLightningBolt } from 'react-icons/hi';

const HeroSection3 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative bg-linear-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 dark:bg-gray-900/95">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <HiX className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-black dark:bg-gray-800 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Brand Highlight */}
            <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800/80 rounded-lg px-4 py-2 shadow-sm dark:shadow-gray-900/50">
              <HiLightningBolt className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">SAZZAD INVENTORY & LOGISTICS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Your Partner in{' '}
              <span className="text-blue-600 dark:text-blue-400 relative">
                Precision
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                  <line x1="0" y1="4" x2="200" y2="4"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeDasharray="6 6"
                    className="text-blue-600 dark:text-blue-400"
                  />
                </svg>
              </span>{' '}
              Logistics
            </h1>

            {/* Description with Icons */}
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Streamline your operations with our comprehensive inventory and logistics solutions.
              From warehouse management to last-mile delivery.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                'End-to-end supply chain visibility',
                'Automated inventory tracking',
                'Dedicated account managers',
                'Custom reporting & analytics'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <HiCheckCircle className="w-6 h-6 text-green-500 dark:text-green-400 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Now
              </button>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center px-6 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg dark:shadow-gray-900/50"
              >
                <HiPlay className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Watch Overview
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 border-2 border-white dark:border-gray-800"
                  ></div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Trusted by industry leaders</p>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                alt="Logistics Dashboard"
                className="w-full h-auto"
              />

              {/* Overlay Stats */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent dark:from-gray-900/80"></div>

              {/* Live Stats Cards */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl dark:shadow-gray-900/50">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Active Shipments</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">1,247</p>
                  <div className="flex items-center mt-1 text-green-600 dark:text-green-400 text-xs">
                    <span>↑ 12%</span>
                    <span className="text-gray-400 dark:text-gray-500 ml-1">vs yesterday</span>
                  </div>
                </div>
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl dark:shadow-gray-900/50">
                  <p className="text-xs text-gray-500 dark:text-gray-400">On-Time Delivery</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">98.5%</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                    <div className="bg-green-600 dark:bg-green-500 h-1.5 rounded-full" style={{ width: '98.5%' }}></div>
                  </div>
                </div>
              </div>

              {/* Top Right Badge */}
              <div className="absolute top-6 right-6 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
                <p className="text-sm font-semibold">Live Tracking Available</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;