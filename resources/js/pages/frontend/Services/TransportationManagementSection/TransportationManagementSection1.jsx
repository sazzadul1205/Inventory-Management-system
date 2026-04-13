// page/frontend/Home/TransportationManagementSection/TransportationManagementSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiOutlineTruck,
  HiOutlineGlobe,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineCurrencyDollar,
  HiOutlineRefresh,
  HiOutlineDocumentReport,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineScale,
  HiOutlineUsers
} from 'react-icons/hi';

const TransportationManagementSection1 = ({ config }) => {

  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'globe':
        return <HiOutlineGlobe className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'report':
        return <HiOutlineDocumentReport className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'scale':
        return <HiOutlineScale className={className} />;
      case 'users':
        return <HiOutlineUsers className={className} />;
      default:
        return <HiOutlineTruck className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern - Route Lines */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L90 90 M90 10 L10 90' stroke='%239CA3AF' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          {config?.badge && (
            <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-100 dark:border-gray-700">
              <HiOutlineTruck className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
                {config.badge}
              </span>
            </div>
          )}

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title}
          </h2>

          {config?.description && (
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Stats Bar */}
        {config?.stats && config.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-16">
            {config.stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">

          {/* Left Content - Feature List */}
          <div className="space-y-6 sm:space-y-8">
            {config?.features?.title && (
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {config.features.title}
              </h3>
            )}

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {config?.features?.items?.map((feature) => (
                <div key={feature.id} className="flex gap-3 sm:gap-4 group">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${feature.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(feature.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white")}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {config?.ctaText && (
              <div className="pt-2 sm:pt-4">
                <Link
                  href={config?.ctaLink || "/contact"}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {config.ctaText}
                  <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            )}
          </div>

          {/* Right Content - Map Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={config?.mapImage || "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"}
                alt="Transportation Route Map"
                className="w-full h-auto"
                loading="lazy"
              />

              {/* Live Tracking Overlay */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500" />
                  </span>
                  <span className="text-[8px] sm:text-[10px] font-medium text-gray-700 dark:text-gray-300">{config?.liveTracking}</span>
                </div>
              </div>

              {/* Vehicle Stats */}
              {config?.vehicleStats && config.vehicleStats.length > 0 && (
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 grid grid-cols-2 gap-2 sm:gap-3">
                  {config.vehicleStats.map((stat) => (
                    <div key={stat.id} className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 md:p-3 shadow-xl border border-gray-200 dark:border-gray-700">
                      <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400 mb-0.5 sm:mb-1">{stat.label}</p>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Floating Route Badge */}
            {config?.routeOptimized && (
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-green-600 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg shadow-lg transform rotate-3">
                <p className="text-[8px] sm:text-[10px] md:text-sm font-semibold flex items-center gap-0.5 sm:gap-1">
                  <HiOutlineRefresh className="w-3 h-3 sm:w-4 sm:h-4" />
                  {config.routeOptimized}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Service Modes */}
        {config?.modes?.show && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
              {config.modes.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.modes.items?.map((mode) => (
                <div
                  key={mode.id}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-lg sm:rounded-xl ${mode.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(mode.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-white")}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1 sm:mb-2">
                    {mode.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                    {mode.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features Grid */}
        {config?.keyFeatures && config.keyFeatures.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20">
            {config.keyFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg ${feature.bgColor} flex items-center justify-center`}>
                    {getIcon(feature.icon, "w-4 h-4 sm:w-5 sm:h-5 text-white")}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                  {feature.description}
                </p>
                {feature.benefit && (
                  <div className="text-[8px] sm:text-[10px] text-blue-600 dark:text-blue-400 font-medium">
                    {feature.benefit}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Carrier Network */}
        {config?.network?.show && (
          <div className="bg-linear-to-r from-blue-600 to-green-600 dark:from-blue-500 dark:to-green-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.network.title}
                </h3>
                <p className="text-blue-100 text-sm sm:text-base mb-4 sm:mb-6">
                  {config.network.description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {config.network.stats?.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-1 sm:gap-2">
                      <div className="text-base sm:text-lg md:text-xl font-bold">{stat.value}</div>
                      <div className="text-[10px] sm:text-xs text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {config.network.carriers?.map((carrier, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                    {getIcon(carrier.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 mx-auto mb-1 sm:mb-2 text-white")}
                    <p className="text-[10px] sm:text-xs font-medium">{carrier.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TransportationManagementSection1;