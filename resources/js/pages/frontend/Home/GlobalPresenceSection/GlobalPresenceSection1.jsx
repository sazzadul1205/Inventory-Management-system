// page/frontend/Home/GlobalPresenceSection/GlobalPresenceSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiOutlineGlobeAlt,
  HiOutlineOfficeBuilding,
  HiOutlineArrowRight,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from 'react-icons/hi';

const GlobalPresenceSection1 = ({ config }) => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 5 L55 30 L30 55 L5 30 Z\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 5 L55 30 L30 55 L5 30 Z\' stroke=\'%23666\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[60px_60px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-teal-200 dark:bg-teal-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-emerald-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-emerald-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              )}
              <HiOutlineGlobeAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-emerald-700 dark:text-gray-300" />
              <span className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-emerald-600 dark:text-emerald-400 relative inline-block">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* World Map Visualization */}
        {config?.map?.show && (
          <div className="relative mb-16 sm:mb-20">
            <div className="relative mx-auto max-w-4xl">
              <img
                src={config.map.image || "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
                alt="World map"
                className="w-full h-auto opacity-80 dark:opacity-60"
                loading="lazy"
              />

              {/* Location Pins */}
              {config.map.locations?.map((location, index) => (
                <div
                  key={index}
                  className="absolute group"
                  style={{
                    top: location.top,
                    left: location.left,
                  }}
                >
                  <div className="relative">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 rounded-full animate-ping absolute opacity-75" />
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-emerald-600 rounded-full relative" />

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 sm:mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-[10px] sm:text-xs rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-lg whitespace-nowrap">
                        <p className="font-semibold text-xs sm:text-sm">{location.city}</p>
                        <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">{location.country}</p>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-0.5 sm:-mt-1 border-4 border-transparent border-t-white dark:border-t-gray-800" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Grid */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Regional Presence Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20">
          {config?.regions?.map((region, index) => (
            <div
              key={region.id || index}
              className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Region Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <HiOutlineGlobeAlt className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-emerald-600 dark:text-emerald-400" />
              </div>

              {/* Region Name */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {region.name}
              </h3>

              {/* Headquarters */}
              <div className="flex items-start mb-2 sm:mb-3">
                <HiOutlineOfficeBuilding className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 mt-0.5 mr-1.5 sm:mr-2 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {region.headquarters}
                </span>
              </div>

              {/* Coverage */}
              <div className="flex items-start mb-2 sm:mb-3">
                <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 mt-0.5 mr-1.5 sm:mr-2 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {region.coverage}
                </span>
              </div>

              {/* Timezone */}
              <div className="flex items-start mb-3 sm:mb-4">
                <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 mt-0.5 mr-1.5 sm:mr-2 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {region.timezone}
                </span>
              </div>

              {/* Office Count */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                  {region.officeCount} offices
                </span>
                <Link
                  href={region.link || '#'}
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-[10px] sm:text-xs font-medium inline-flex items-center"
                >
                  View Details
                  <HiOutlineArrowRight className="ml-0.5 sm:ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Offices List */}
        {config?.offices?.show && config?.offices?.items && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
              Our Global Offices
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {config.offices.items.map((office, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 sm:p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shrink-0">
                    <HiOutlineLocationMarker className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      {office.city}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                      {office.address}
                    </p>
                    {office.phone && (
                      <p className="text-[10px] sm:text-xs text-emerald-600 dark:text-emerald-400 mt-0.5 sm:mt-1">
                        {office.phone}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Global Coverage CTA */}
        {config?.cta?.show && (
          <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.cta.title}
                </h3>
                <p className="text-emerald-100 text-sm sm:text-base mb-5 sm:mb-6 max-w-2xl">
                  {config.cta.description}
                </p>
                <Link
                  href={config.cta.button.url}
                  className="inline-flex items-center bg-white text-emerald-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  {config.cta.button.text}
                  <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
                </Link>
              </div>

              {/* Stats Summary */}
              <div className="lg:w-72 xl:w-80 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                      {config.stats?.items?.[0]?.value || '20+'}
                    </div>
                    <div className="text-[10px] sm:text-xs text-emerald-100">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                      {config.stats?.items?.[1]?.value || '30+'}
                    </div>
                    <div className="text-[10px] sm:text-xs text-emerald-100">Offices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                      {config.stats?.items?.[2]?.value || '500+'}
                    </div>
                    <div className="text-[10px] sm:text-xs text-emerald-100">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                      {config.stats?.items?.[3]?.value || '24/7'}
                    </div>
                    <div className="text-[10px] sm:text-xs text-emerald-100">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GlobalPresenceSection1;