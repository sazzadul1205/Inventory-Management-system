// page/frontend/Home/WarehouseManagementSection/WarehouseManagementSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiOutlineCube,
  HiOutlineLocationMarker,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineRefresh,
  HiOutlineSearch,
  HiOutlineDocumentReport,
  HiArrowRight,
  HiOutlineUserGroup,
} from 'react-icons/hi';

const WarehouseManagementSection1 = ({ config }) => {

  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'cube':
        return <HiOutlineCube className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'search':
        return <HiOutlineSearch className={className} />;
      case 'report':
        return <HiOutlineDocumentReport className={className} />;
      case 'users':
        return <HiOutlineUserGroup className={className} />;
      default:
        return <HiOutlineCube className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,#374151_1px,transparent_0)] bg-size-[40px_40px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineCube className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title}
          </h2>

          {config?.description && (
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">

          {/* Left Content - Feature List */}
          <div className="space-y-6 sm:space-y-8">
            {config?.features?.title && (
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {config.features.title}
              </h3>
            )}

            <div className="space-y-4 sm:space-y-6">
              {config?.features?.items?.map((feature) => (
                <div key={feature.id} className="flex gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${feature.bgColor} flex items-center justify-center shrink-0`}>
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

          {/* Right Content - Stats/Dashboard Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
              <img
                src={config?.image?.src || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"}
                alt={config?.image?.alt || "Warehouse management dashboard"}
                className="w-full h-auto"
                loading="lazy"
              />

              {/* Overlay Stats Cards */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {config?.stats?.map((stat) => (
                  <div
                    key={stat.id}
                    className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-xl"
                  >
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-0.5 sm:mb-1">{stat.label}</p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    {stat.trend && (
                      <p className={`text-[8px] sm:text-[10px] mt-0.5 sm:mt-1 ${stat.trendColor}`}>{stat.trend}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            {config?.floatingBadge && (
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-lg shadow-lg transform rotate-3">
                <p className="text-[10px] sm:text-xs md:text-sm font-semibold">{config.floatingBadge}</p>
              </div>
            )}
          </div>
        </div>

        {/* Key Metrics */}
        {config?.metrics && config.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-16 sm:mb-20">
            {config.metrics.map((metric) => (
              <div
                key={metric.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center"
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-0.5 sm:mb-1">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technology Stack */}
        {config?.techStack?.show && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                {config.techStack.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {config.techStack.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.techStack.items?.map((tech) => (
                <div key={tech.id} className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 bg-white dark:bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                    {getIcon(tech.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-blue-600 dark:text-blue-400")}
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-gray-900 dark:text-white">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WarehouseManagementSection1;