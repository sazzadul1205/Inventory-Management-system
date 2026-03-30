// page/frontend/Home/TransportationManagementSection/TransportationManagementSection1.jsx

// React
import { Link } from '@inertiajs/react';

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
  HiOutlineUsers
} from 'react-icons/hi';

const TransportationManagementSection1 = ({ config }) => {
  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'truck':
        return <HiOutlineTruck className={className} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobe className={className} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={className} aria-hidden="true" />;
      case 'location':
        return <HiOutlineLocationMarker className={className} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={className} aria-hidden="true" />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} aria-hidden="true" />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} aria-hidden="true" />;
      case 'refresh':
        return <HiOutlineRefresh className={className} aria-hidden="true" />;
      case 'report':
        return <HiOutlineDocumentReport className={className} aria-hidden="true" />;
      case 'check':
        return <HiOutlineCheckCircle className={className} aria-hidden="true" />;
      case 'scale':
        return <HiOutlineScale className={className} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUsers className={className} aria-hidden="true" />;
      default:
        return <HiOutlineTruck className={className} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Transportation Management Solutions"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Background Pattern - Route Lines */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L90 90 M90 10 L10 90' stroke='%239CA3AF' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineTruck className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {config?.stats?.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Feature List */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {config?.features?.title}
            </h3>

            <div className="space-y-6">
              {config?.features?.items?.map((feature) => (
                <div key={feature.id} className="flex gap-4 group">
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(feature.icon, "w-6 h-6 text-white")}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={config?.ctaLink}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {config?.ctaText}
                <HiArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Content - Map Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={config?.mapImage}
                alt="Transportation Route Map"
                className="w-full h-auto"
                loading="lazy"
              />

              {/* Live Tracking Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{config?.liveTracking}</span>
                </div>
              </div>

              {/* Vehicle Stats */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {config?.vehicleStats?.map((stat) => (
                  <div key={stat.id} className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Route Badge */}
            <div className="absolute -top-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
              <p className="text-sm font-semibold flex items-center gap-1">
                <HiOutlineRefresh className="w-4 h-4" />
                {config?.routeOptimized}
              </p>
            </div>
          </div>
        </div>

        {/* Service Modes */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {config?.modes?.title}
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {config?.modes?.items?.map((mode) => (
              <div
                key={mode.id}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${mode.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(mode.icon, "w-8 h-8 text-white")}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{mode.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {config?.keyFeatures?.map((feature) => (
            <div
              key={feature.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg ${feature.bgColor} flex items-center justify-center`}>
                  {getIcon(feature.icon, "w-5 h-5 text-white")}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{feature.description}</p>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                {feature.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* Carrier Network */}
        <div className="bg-linear-to-r from-blue-600 to-green-600 dark:from-blue-500 dark:to-green-500 rounded-3xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">{config?.network?.title}</h3>
              <p className="text-blue-100 mb-6">{config?.network?.description}</p>
              <div className="flex flex-wrap gap-4">
                {config?.network?.stats?.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {config?.network?.carriers?.map((carrier, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  {getIcon(carrier.icon, "w-8 h-8 mx-auto mb-2 text-white")}
                  <p className="text-sm font-medium">{carrier.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportationManagementSection1;