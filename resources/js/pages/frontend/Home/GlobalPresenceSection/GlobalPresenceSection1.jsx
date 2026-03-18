// page/frontend/Home/GlobalPresenceSection/GlobalPresenceSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineGlobeAlt,
  HiOutlineOfficeBuilding,
  HiOutlineArrowRight,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from 'react-icons/hi';

const GlobalPresenceSection1 = ({ config }) => {
  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Global presence section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-world-map-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 dark:bg-teal-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Global presence badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
              <HiOutlineGlobeAlt className={`w-4 h-4 mr-2 ${config.badge.textColor}`} />
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
            <span className={`${config?.heading?.highlightColor} relative inline-block`}>
              {config?.heading?.highlightedText}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                aria-hidden="true"
              >
                <line
                  x1="0" y1="4" x2="200" y2="4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  className={config?.heading?.highlightColor}
                />
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

        {/* World Map Visualization */}
        {config?.map?.show && (
          <div className="relative mb-20">
            <div className="relative mx-auto max-w-4xl">
              <img
                src={config.map.image || "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
                alt="World map"
                className="w-full h-auto opacity-80 dark:opacity-60"
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
                    <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping absolute opacity-75"></div>
                    <div className="w-4 h-4 bg-emerald-600 rounded-full relative"></div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
                        <p className="font-semibold">{location.city}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{location.country}</p>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white dark:border-t-gray-800"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Grid */}
        {config?.stats?.show && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Regional Presence Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {config?.regions?.map((region, index) => (
            <div
              key={region.id || index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Region Icon */}
              <div className="w-16 h-16 bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HiOutlineGlobeAlt className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>

              {/* Region Name */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {region.name}
              </h3>

              {/* Headquarters */}
              <div className="flex items-start mb-3">
                <HiOutlineOfficeBuilding className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {region.headquarters}
                </span>
              </div>

              {/* Coverage */}
              <div className="flex items-start mb-3">
                <HiOutlineLocationMarker className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {region.coverage}
                </span>
              </div>

              {/* Timezone */}
              <div className="flex items-start mb-4">
                <HiOutlineClock className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {region.timezone}
                </span>
              </div>

              {/* Office Count */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {region.officeCount} offices
                </span>
                <Link
                  href={region.link || '#'}
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm font-medium inline-flex items-center"
                >
                  View Details
                  <HiOutlineArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Offices List */}
        {config?.offices?.show && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Global Offices
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.offices.items?.map((office, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-3 shrink-0">
                    <HiOutlineLocationMarker className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {office.city}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {office.address}
                    </p>
                    {office.phone && (
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
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
          <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {config.cta.title}
                </h3>
                <p className="text-emerald-100 mb-6 max-w-2xl">
                  {config.cta.description}
                </p>
                <Link
                  href={config.cta.button.url}
                  className="inline-flex items-center bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {config.cta.button.text}
                  <HiOutlineArrowRight className="ml-2" />
                </Link>
              </div>

              {/* Stats Summary */}
              <div className="lg:w-80 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{config.stats?.items?.[0]?.value || '20+'}</div>
                    <div className="text-xs text-emerald-100">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{config.stats?.items?.[1]?.value || '30+'}</div>
                    <div className="text-xs text-emerald-100">Offices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{config.stats?.items?.[2]?.value || '500+'}</div>
                    <div className="text-xs text-emerald-100">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{config.stats?.items?.[3]?.value || '24/7'}</div>
                    <div className="text-xs text-emerald-100">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-world-map-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 60px 60px;
        }
        .dark .bg-world-map-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' stroke='%23666' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default GlobalPresenceSection1;