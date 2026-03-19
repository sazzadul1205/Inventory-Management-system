// page/frontend/Home/TransportationManagementSection/TransportationManagementSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
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
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Transportation Management Solutions"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Live Status */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
                {config?.badge}
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {config?.liveStatus}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {config?.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {config?.description}
            </p>
          </div>

          {/* Live Fleet Counter */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{config?.fleetCounter?.label}</p>
            <div className="flex items-center gap-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">{config?.fleetCounter?.value}</span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-blue-500 border-2 border-white dark:border-gray-800"></div>
                ))}
                <span className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">
                  +{config?.fleetCounter?.additional}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Vehicle List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineTruck className="w-5 h-5 text-green-600" />
              {config?.fleet?.title}
            </h3>
            {config?.fleet?.vehicles?.map((vehicle) => (
              <button
                key={vehicle.id}
                onClick={() => setActiveVehicle(vehicle.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${activeVehicle === vehicle.id
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <HiOutlineTruck className={`w-5 h-5 ${activeVehicle === vehicle.id ? 'text-white' : 'text-gray-500'
                      }`} />
                    <span className="font-semibold">{vehicle.id}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${activeVehicle === vehicle.id
                      ? 'bg-white/20 text-white'
                      : vehicle.status === 'Active'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                    {vehicle.status}
                  </span>
                </div>
                <p className={`text-sm mb-1 ${activeVehicle === vehicle.id ? 'text-green-100' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                  {vehicle.driver}
                </p>
                <p className={`text-xs ${activeVehicle === vehicle.id ? 'text-green-100' : 'text-gray-500'
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
                <div key={vehicle.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                  {/* Vehicle Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{vehicle.id}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{vehicle.driver} • {vehicle.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Current Location</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{vehicle.location}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Origin: {vehicle.origin}</span>
                      <span className="text-gray-600 dark:text-gray-400">Destination: {vehicle.destination}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-green-500 to-green-600 rounded-full"
                        style={{ width: vehicle.progress }}
                      ></div>
                    </div>
                    <p className="text-right text-sm text-green-600 dark:text-green-400 mt-1">{vehicle.progress} completed</p>
                  </div>

                  {/* Vehicle Stats Grid */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {vehicle.stats?.map((stat, idx) => (
                      <div key={idx} className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Route Map Placeholder */}
                  <div className="relative rounded-xl overflow-hidden mb-6">
                    <img
                      src={vehicle.mapImage}
                      alt={`Route for ${vehicle.id}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between text-white text-sm">
                      <span>{vehicle.origin}</span>
                      <span>{vehicle.destination}</span>
                    </div>
                  </div>

                  {/* Recent Events */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Recent Events</h4>
                    <div className="space-y-2">
                      {vehicle.events?.map((event, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm">
                          <div className={`w-2 h-2 rounded-full ${event.color}`}></div>
                          <span className="text-gray-600 dark:text-gray-400">{event.description}</span>
                          <span className="text-xs text-gray-500 ml-auto">{event.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Optimization Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {config?.metrics?.map((metric) => (
            <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                  {getIcon(metric.icon, "w-5 h-5 text-white")}
                </div>
                <span className={`text-sm font-medium ${metric.trendColor}`}>{metric.trend}</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Optimization Tools */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {config?.tools?.map((tool) => (
            <div
              key={tool.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-green-600 dark:hover:border-green-500"
            >
              <div className={`w-12 h-12 rounded-xl ${tool.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {getIcon(tool.icon, "w-6 h-6 text-white")}
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tool.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{tool.description}</p>
              <ul className="space-y-2 mb-4">
                {tool.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mr-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={tool.link}
                className="inline-flex items-center text-green-600 dark:text-green-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
              >
                Learn more
                <HiArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" />
              </Link>
            </div>
          ))}
        </div>

        {/* Carrier Network */}
        <div className="bg-linear-to-r from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500 rounded-3xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{config?.network?.title}</h3>
            <p className="text-green-100 max-w-2xl mx-auto">{config?.network?.description}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {config?.network?.carriers?.map((carrier, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  {getIcon(carrier.icon, "w-8 h-8 text-white")}
                </div>
                <p className="text-sm font-medium">{carrier.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportationManagementSection2;