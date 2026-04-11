// page/frontend/Home/HeroSection/HeroSection2.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import { FaRocket } from 'react-icons/fa';
import { HiOutlineGlobe } from "react-icons/hi";
import {
  HiCheck,
  HiUsers,
  HiArrowRight,
  HiOutlineTruck,
  HiOutlineClock,
  HiBuildingOffice,
} from 'react-icons/hi2';

const HeroSection2 = ({ config }) => {
  // Feature icon mapping
  const getFeatureIcon = (iconName) => {
    const iconClasses = "w-5 h-5 mr-2 text-blue-600 dark:text-blue-400";

    switch (iconName) {
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} />;
      case 'globe':
        return <HiOutlineGlobe className={iconClasses} />;
      case 'rocket':
        return <FaRocket className={iconClasses} />;
      case 'users':
        return <HiUsers className={iconClasses} />;
      case 'building':
        return <HiBuildingOffice className={iconClasses} />;
      default:
        return <HiCheck className={iconClasses} />;
    }
  };

  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" aria-hidden="true">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute top-40 right-0 w-60 h-60 bg-yellow-200 dark:bg-yellow-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <span className="ml-1 text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            {config?.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
            {config?.buttons?.primary && (
              <Link
                href={config.buttons.primary.url}
                className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {config.buttons.primary.text}
                <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

            {config?.buttons?.secondary && (
              <Link
                href={config.buttons.secondary.url}
                className="bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center"
              >
                {config.buttons.secondary.text}
              </Link>
            )}
          </div>

          {/* Stats Cards */}
          {config?.stats && config.stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
              {config.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center backdrop-blur-sm"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Feature Icons */}
          {config?.features && config.features.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 px-4">
              {config.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center text-gray-600 dark:text-gray-400"
                >
                  {getFeatureIcon(feature.icon)}
                  <span className="text-xs sm:text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;