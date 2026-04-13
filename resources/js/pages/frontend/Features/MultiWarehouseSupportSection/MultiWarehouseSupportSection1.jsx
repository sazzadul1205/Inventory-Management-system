// page/frontend/Features/MultiWarehouseSupportSection/MultiWarehouseSupportSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiOutlineOfficeBuilding,
  HiOutlineGlobeAlt,
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineChip,
  HiOutlineDatabase,
  HiOutlineTruck,
  HiOutlineLocationMarker,
  HiOutlineClipboardList,
  HiOutlineUsers,
  HiOutlineCheckCircle
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const MultiWarehouseSupportSection1 = ({ config }) => {

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'warehouse':
        return <HiOutlineOfficeBuilding className={className} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={className} />;
      case 'sync':
        return <HiOutlineRefresh className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'inventory':
        return <HiOutlineClipboardList className={className} />;
      case 'team':
        return <HiOutlineUsers className={className} />;
      default:
        return <HiOutlineOfficeBuilding className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Section Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-purple-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-purple-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Key Benefits Row */}
        {config?.benefits && config.benefits.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16">
            {config.benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-5 sm:p-6 bg-linear-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/50 rounded-lg sm:rounded-xl border border-purple-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  {getFeatureIcon(benefit.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400")}
                </div>
                <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {benefit.title}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {config?.features?.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Feature Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-50 dark:bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {getFeatureIcon(feature.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-purple-600 dark:text-purple-400")}
              </div>

              {/* Feature Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                {feature.description}
              </p>

              {/* Feature Details List */}
              {feature.details && feature.details.length > 0 && (
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-start text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 dark:text-purple-400 mr-1.5 sm:mr-2 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Feature Link */}
              <Link
                href={feature.link}
                className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300 group/link text-xs sm:text-sm"
                aria-label={`Learn more about ${feature.title}`}
              >
                <span>Learn more</span>
                <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>

              {/* Decorative corner gradient */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-linear-to-br from-purple-600/0 via-purple-600/0 to-purple-600/5 dark:from-purple-400/0 dark:via-purple-400/0 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Warehouse Network Visualization */}
        {config?.showNetwork && config?.warehouses && (
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {config?.networkTitle || "Global Warehouse Network"}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {config?.networkDescription || "Centrally manage warehouses across multiple locations"}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.warehouses.map((warehouse, index) => (
                <div key={index} className="relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <HiOutlineLocationMarker className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {warehouse.location}
                      </h4>
                      <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">{warehouse.code}</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Capacity:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{warehouse.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Utilization:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{warehouse.utilization}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">SKUs:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{warehouse.skus}</span>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <div
                        className="bg-purple-500 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                        style={{ width: warehouse.utilizationPercent || '75%' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && config?.ctaText && (
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-2 sm:p-2.5 md:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-full pl-4 sm:pl-5 md:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2">
              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                {config.ctaText}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                aria-label="Start managing warehouses"
              >
                {config?.ctaButton?.text || "Get Started"}
                <HiOutlineArrowRight />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MultiWarehouseSupportSection1;