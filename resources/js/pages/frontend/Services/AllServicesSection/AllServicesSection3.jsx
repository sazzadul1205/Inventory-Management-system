// page/frontend/Home/AllServicesSection/AllServicesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineClock,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineDocumentReport,
  HiOutlineUsers,
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlineCog,
  HiOutlineRefresh,
} from 'react-icons/hi';

const AllServicesSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState(config?.tabs?.[0]?.id || 1);

  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'cube':
        return <HiOutlineCube className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'globe':
        return <HiOutlineGlobe className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'report':
        return <HiOutlineDocumentReport className={className} />;
      case 'users':
        return <HiOutlineUsers className={className} />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      case 'cog':
        return <HiOutlineCog className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      default:
        return <HiOutlineCube className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          {config?.badge && (
            <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {config.badge}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 sm:mt-4 mb-3 sm:mb-6">
            {config?.title}
          </h2>
          {config?.description && (
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Category Tabs */}
        {config?.tabs && config.tabs.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            {config.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Show ${tab.label} services`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Services Grid - Card Based */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {config?.services
            ?.filter(service => service.tabId === activeTab)
            .map((service) => (
              <div
                key={service.id}
                className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Service Number */}
                <span className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-400 group-hover:text-blue-100 dark:group-hover:text-blue-900/30 transition-colors duration-300">
                  {String(service.id).padStart(2, '0')}
                </span>

                {/* Icon with gradient background */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {getIcon(service.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-white")}
                </div>

                {/* Service Title */}
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {service.description}
                </p>

                {/* Key Features */}
                {service.features && service.features.length > 0 && (
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.gradient} mr-1.5 sm:mr-2`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 pl-3 sm:pl-4">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                )}

                {/* Price/Call to Action */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div>
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {service.price}
                    </span>
                    {service.priceUnit && (
                      <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 ml-0.5 sm:ml-1">
                        {service.priceUnit}
                      </span>
                    )}
                  </div>
                  <Link
                    href={service.link}
                    className={`inline-flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold bg-linear-to-r ${service.gradient} bg-clip-text text-transparent hover:gap-2 sm:hover:gap-3 transition-all duration-300`}
                  >
                    Learn More
                    <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl bg-linear-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            ))}
        </div>

        {/* Featured Service Banner */}
        {config?.showFeatured && (
          <div className="mt-16 sm:mt-20 bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
              {config?.featuredTitle}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              {config?.featuredDescription}
            </p>
            <Link
              href={config?.featuredLink}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-blue-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base"
            >
              {config?.featuredButtonText}
              <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        )}

        {/* Trust Indicators */}
        {config?.showTrust && config?.trustItems && (
          <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {config.trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-gray-600 dark:text-gray-400">
                <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-linear-to-r ${item.gradient} flex items-center justify-center`}>
                  {getIcon(item.icon, "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white")}
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllServicesSection3;