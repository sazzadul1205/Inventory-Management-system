// page/frontend/Home/MobileAppSection/MobileAppSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import {
  HiOutlineQrcode,
  HiOutlineCamera,
  HiOutlineBell,
  HiOutlineClock,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
  HiOutlineStar,
} from 'react-icons/hi';

const MobileAppSection3 = ({ config }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: HiOutlineQrcode,
      title: "Instant Scanning",
      description: "Scan barcodes and QR codes in real-time",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: HiOutlineCamera,
      title: "Photo Capture",
      description: "Add photos to inventory items on the go",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: HiOutlineBell,
      title: "Smart Alerts",
      description: "Get notified about low stock and movements",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: HiOutlineClock,
      title: "Offline Mode",
      description: "Work without internet and sync later",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: HiOutlineCloud,
      title: "Cloud Sync",
      description: "Seamless sync across all your devices",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Biometric Security",
      description: "Secure access with fingerprint or face ID",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Mobile app section"
    >
      {/* Background Pattern - Magazine Style */}
      <div className="absolute inset-0 bg-magazine-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Magazine Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Mobile app badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
              )}
              <span className={`text-sm font-medium ${config.badge.textColor}`}>
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {config?.heading?.highlightedText}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 6 L300 6"
                  stroke="url(#headingGradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="headingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Main Content - Magazine Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Features List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Key Features
            </h3>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 ${activeFeature === index
                    ? `bg-linear-to-r ${feature.color} text-white shadow-lg scale-105`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${activeFeature === index
                    ? 'bg-white/20'
                    : 'bg-blue-100 dark:bg-blue-900/30'
                    }`}>
                    <Icon className={`w-5 h-5 ${activeFeature === index ? 'text-white' : 'text-blue-600 dark:text-blue-400'
                      }`} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm">{feature.title}</h4>
                    <p className="text-xs opacity-80">{feature.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center Column - Phone Mockup */}
          <div className="lg:col-span-1">
            <div className="relative mx-auto max-w-70">
              {/* Phone Frame */}
              <div className="relative bg-linear-to-br from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 rounded-[48px] p-2 shadow-2xl">
                {/* Screen */}
                <div className="bg-white dark:bg-gray-900 rounded-[40px] overflow-hidden">
                  <img
                    src={config?.screenshots?.[activeFeature] || config?.screenshots?.main}
                    alt={`App feature - ${features[activeFeature].title}`}
                    className="w-full h-auto"
                  />
                </div>

                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
              </div>

              {/* Floating Feature Badge */}
              <div className="absolute -top-4 -right-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl">
                {features[activeFeature].title}
              </div>

              {/* Rating Badge */}
              {config?.rating?.show && (
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar
                          key={i}
                          className={`w-3 h-3 ${i < config.rating.stars
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">
                      {config.rating.score}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Download Options */}
          <div className="lg:col-span-1 space-y-6">
            {/* App Store Buttons */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Download App
              </h3>

              <div className="space-y-3">
                {config?.appButtons?.ios && (
                  <Link
                    href={config.appButtons.ios.url}
                    className="flex items-center justify-between w-full bg-black dark:bg-white text-white dark:text-black px-4 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <FaApple className="w-6 h-6 mr-3" />
                      <div>
                        <p className="text-xs opacity-80">Download on the</p>
                        <p className="text-sm font-bold">App Store</p>
                      </div>
                    </div>
                    <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}

                {config?.appButtons?.android && (
                  <Link
                    href={config.appButtons.android.url}
                    className="flex items-center justify-between w-full bg-black dark:bg-white text-white dark:text-black px-4 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <FaGooglePlay className="w-6 h-6 mr-3" />
                      <div>
                        <p className="text-xs opacity-80">Get it on</p>
                        <p className="text-sm font-bold">Google Play</p>
                      </div>
                    </div>
                    <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>

              {/* QR Code */}
              {config?.qrCode?.show && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 mr-3">
                      <img
                        src={config.qrCode.image}
                        alt="QR Code"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {config.qrCode.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {config.qrCode.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Stats Cards */}
            {config?.stats?.show && (
              <div className="grid grid-cols-2 gap-3">
                {config.stats.items.map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Compatibility Note */}
            {config?.compatibility && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800/30">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {config.compatibility}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        {config?.cta?.show && (
          <div className="mt-16 text-center">
            <Link
              href={config.cta.url}
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              {config.cta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #e5e7eb 1px, transparent 1px),
            linear-gradient(-45deg, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #374151 1px, transparent 1px),
            linear-gradient(-45deg, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default MobileAppSection3;