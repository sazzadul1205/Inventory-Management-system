// page/frontend/Home/HeroSection/HeroSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import { FaWarehouse, FaShippingFast } from 'react-icons/fa';
import {
  HiStar,
  HiPlay,
  HiCheck,
  HiUsers,
  HiTruck,
  HiRefresh,
  HiChartBar,
  HiArrowRight,
} from 'react-icons/hi';

const HeroSection1 = ({ config }) => {
  // Feature icon mapping
  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'HiTruck':
        return <HiTruck className="w-5 h-5 text-yellow-400 dark:text-yellow-500" />;
      case 'FaWarehouse':
        return <FaWarehouse className="w-5 h-5 text-yellow-400 dark:text-yellow-500" />;
      case 'HiRefresh':
        return <HiRefresh className="w-5 h-5 text-yellow-400 dark:text-yellow-500" />;
      case 'HiChartBar':
        return <HiChartBar className="w-5 h-5 text-yellow-400 dark:text-yellow-500" />;
      default:
        return <HiCheck className="w-5 h-5 text-yellow-400 dark:text-yellow-500" />;
    }
  };

  return (
    <section className="relative bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 dark:bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 dark:bg-blue-700 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">

            {/* Trust Badge */}
            {config?.trustBadge?.text && (
              <div className="inline-flex items-center bg-blue-800/50 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-blue-400/30 dark:border-gray-700 mx-auto lg:mx-0">
                {config?.trustBadge?.showPulse && (
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                )}
                <span className="text-xs sm:text-sm font-medium">
                  {config.trustBadge.text}
                </span>
              </div>
            )}

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {config?.heading?.prefix}{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-500 dark:from-yellow-400 dark:to-yellow-600">
                {config?.heading?.highlightedText}
              </span>{' '}
              {config?.heading?.suffix}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
              {config?.description}
            </p>

            {/* Features Grid */}
            {config?.features && config.features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-2 sm:py-4">
                {config.features.map((feature) => (
                  <div key={feature.id} className="flex items-center justify-center lg:justify-start space-x-2">
                    {getFeatureIcon(feature.icon)}
                    <span className="text-sm sm:text-base">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              {config?.buttons?.primary && (
                <Link
                  href={config.buttons.primary.url}
                  className="group bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-500 text-blue-900 dark:text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {config.buttons.primary.text}
                  <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </Link>
              )}

              {config?.buttons?.secondary && (
                <Link
                  href={config.buttons.secondary.url}
                  className="bg-transparent border-2 border-white dark:border-gray-300 hover:bg-white/10 dark:hover:bg-gray-700/50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <HiPlay className="text-lg" />
                  {config.buttons.secondary.text}
                </Link>
              )}
            </div>

            {/* Trust Indicators */}
            {config?.trustIndicators?.stats && (
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 pt-4 sm:pt-6 border-t border-blue-700/50 dark:border-gray-700">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-linear-to-br from-yellow-300 to-yellow-500 dark:from-yellow-400 dark:to-yellow-600 border-2 border-blue-800 dark:border-gray-700 flex items-center justify-center"
                    >
                      <HiUsers className="w-4 h-4 text-blue-900 dark:text-gray-900" />
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-blue-200 dark:text-gray-400">
                  <span className="font-bold text-white dark:text-gray-200">
                    {config.trustIndicators.stats.number}
                  </span>{' '}
                  {config.trustIndicators.stats.text}
                </p>
              </div>
            )}
          </div>

          {/* Right Image */}
          {config?.image?.src && (
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                <img
                  src={config.image.src}
                  alt={config.image.alt || "Hero illustration"}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-blue-900/50 dark:from-gray-900/70 to-transparent" />

                {/* Floating Stats Card */}
                {config?.floatingCards?.stats && (
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/10 dark:bg-gray-800/80 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20 dark:border-gray-700">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <FaShippingFast className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-blue-200 dark:text-gray-300">
                          {config.floatingCards.stats.label}
                        </p>
                        <p className="text-xs sm:text-sm font-bold">
                          {config.floatingCards.stats.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Floating Badge */}
                {config?.floatingCards?.rating && (
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/10 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 dark:border-gray-700">
                    <div className="flex items-center gap-1">
                      <HiStar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                      <p className="text-xs sm:text-sm font-semibold">
                        {config.floatingCards.rating}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 animate-pulse delay-700" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;