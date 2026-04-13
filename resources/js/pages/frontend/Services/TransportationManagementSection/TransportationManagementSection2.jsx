// page/frontend/Home/TransportationManagementSection/TransportationManagementSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

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
  HiOutlineUsers,
  HiOutlineLightningBolt,
  HiOutlineCloud,
  HiOutlineCog
} from 'react-icons/hi';

const TransportationManagementSection2 = ({ config }) => {

  // Active Vehicle
  const [activeVehicle, setActiveVehicle] = useState(config?.fleet?.vehicles?.[0]?.id || 1);

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
      case 'bolt':
        return <HiOutlineLightningBolt className={className} />;
      case 'cloud':
        return <HiOutlineCloud className={className} />;
      case 'cog':
        return <HiOutlineCog className={className} />;
      default:
        return <HiOutlineTruck className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Live Status */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              {config?.badge && (
                <span className="text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
                  {config.badge}
                </span>
              )}
              {config?.liveStatus && (
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] sm:text-xs font-medium rounded-full flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  {config.liveStatus}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
              {config?.title}
            </h2>
            {config?.description && (
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
                {config.description}
              </p>
            )}
          </div>

          {/* Live Fleet Counter */}
          {config?.fleetCounter && (
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
                {config.fleetCounter.label}
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {config.fleetCounter.value}
                </span>
                <div className="flex -space-x-1.5 sm:-space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-linear-to-br from-green-400 to-blue-500 border-2 border-white dark:border-gray-800" />
                  ))}
                  {config.fleetCounter.additional && (
                    <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-[8px] sm:text-[10px] font-medium text-gray-600 dark:text-gray-300">
                      +{config.fleetCounter.additional}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fleet Dashboard */}
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">

          {/* Vehicle List */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-4">
            {config?.fleet?.title && (
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                <HiOutlineTruck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                {config.fleet.title}
              </h3>
            )}
            {config?.fleet?.vehicles?.map((vehicle) => (
              <button
                key={vehicle.id}
                onClick={() => setActiveVehicle(vehicle.id)}
                className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 ${activeVehicle === vehicle.id
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
              >
                <div className="flex flex-wrap justify-between items-start gap-1 mb-1 sm:mb-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <HiOutlineTruck className={`w-4 h-4 sm:w-5 sm:h-5 ${activeVehicle === vehicle.id ? 'text-white' : 'text-gray-500'
                      }`} />
                    <span className="font-semibold text-xs sm:text-sm">{vehicle.id}</span>
                  </div>
                  <span className={`text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full ${activeVehicle === vehicle.id
                      ? 'bg-white/20 text-white'
                      : vehicle.status === 'Active'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                    {vehicle.status}
                  </span>
                </div>
                <p className={`text-[10px] sm:text-xs mb-0.5 sm:mb-1 ${activeVehicle === vehicle.id ? 'text-green-100' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                  {vehicle.driver}
                </p>
                <p className={`text-[8px] sm:text-[10px] ${activeVehicle === vehicle.id ? 'text-green-100' : 'text-gray-500'
                  }`}>
                  ETA: {vehicle.eta}
                </p>
              </button>
            ))}
          </div>

          {/* Active Vehicle Details */}
          <div className="lg:col-span-2">
            {config?.fleet?.vehicles?.map((vehicle) => (
              vehicle.id === activeVehicle && (
                <div key={vehicle.id} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700">

                  {/* Vehicle Header */}
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                        {vehicle.id}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        {vehicle.driver} • {vehicle.type}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Current Location</p>
                      <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        {vehicle.location}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex justify-between text-[10px] sm:text-xs mb-1 sm:mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Origin: {vehicle.origin}</span>
                      <span className="text-gray-600 dark:text-gray-400">Destination: {vehicle.destination}</span>
                    </div>
                    <div className="w-full h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-green-500 to-green-600 rounded-full"
                        style={{ width: vehicle.progress }}
                      />
                    </div>
                    <p className="text-right text-[10px] sm:text-xs text-green-600 dark:text-green-400 mt-0.5 sm:mt-1">
                      {vehicle.progress} completed
                    </p>
                  </div>

                  {/* Vehicle Stats Grid */}
                  {vehicle.stats && vehicle.stats.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                      {vehicle.stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-1.5 sm:p-2 md:p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <div className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white">
                            {stat.value}
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Route Map Placeholder */}
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6">
                    <img
                      src={vehicle.mapImage || "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=300&fit=crop"}
                      alt={`Route for ${vehicle.id}`}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex justify-between text-white text-[10px] sm:text-xs">
                      <span>{vehicle.origin}</span>
                      <span>{vehicle.destination}</span>
                    </div>
                  </div>

                  {/* Recent Events */}
                  {vehicle.events && vehicle.events.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-2 sm:mb-3">
                        Recent Events
                      </h4>
                      <div className="space-y-1.5 sm:space-y-2">
                        {vehicle.events.map((event, idx) => (
                          <div key={idx} className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${event.color}`} />
                            <span className="text-gray-600 dark:text-gray-400">{event.description}</span>
                            <span className="text-gray-500 ml-auto text-[8px] sm:text-[10px]">{event.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        </div>

        {/* Optimization Metrics */}
        {config?.metrics && config.metrics.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-16 sm:mb-20">
            {config.metrics.map((metric) => (
              <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                    {getIcon(metric.icon, "w-4 h-4 sm:w-5 sm:h-5 text-white")}
                  </div>
                  <span className={`text-[8px] sm:text-[10px] font-medium ${metric.trendColor}`}>{metric.trend}</span>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {metric.value}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Optimization Tools */}
        {config?.tools && config.tools.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20">
            {config.tools.map((tool) => (
              <div
                key={tool.id}
                className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-green-600 dark:hover:border-green-500"
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${tool.bgColor} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(tool.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white")}
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {tool.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {tool.description}
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {tool.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 mr-1.5 sm:mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tool.link}
                  className="inline-flex items-center text-green-600 dark:text-green-400 text-[10px] sm:text-xs font-semibold hover:gap-2 transition-all duration-300"
                >
                  Learn more
                  <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5 opacity-0 group-hover:opacity-100 group-hover:ml-1.5 transition-all" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Carrier Network */}
        {config?.network?.show && (
          <div className="bg-linear-to-r from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <div className="text-center mb-5 sm:mb-6 md:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                {config.network.title}
              </h3>
              <p className="text-green-100 text-sm sm:text-base max-w-2xl mx-auto">
                {config.network.description}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
              {config.network.carriers?.map((carrier, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-1.5 sm:mb-2 md:mb-3 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {getIcon(carrier.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-white")}
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium">{carrier.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TransportationManagementSection2;