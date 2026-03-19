// page/frontend/Home/AllServicesSection/AllServicesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
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
  HiOutlineRefresh
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
    <section
      className="relative py-24 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Our Services Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            {config?.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            {config?.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {config?.tabs?.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label={`Show ${tab.label} services`}
              aria-pressed={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid - Card Based */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config?.services
            ?.filter(service => service.tabId === activeTab)
            .map((service) => (
              <div
                key={service.id}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Service Number */}
                <span className="absolute top-6 right-6 text-4xl font-bold text-gray-100 dark:text-gray-700 group-hover:text-blue-100 dark:group-hover:text-blue-900/30 transition-colors duration-300">
                  {String(service.id).padStart(2, '0')}
                </span>

                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {getIcon(service.icon, "w-8 h-8 text-white")}
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                {/* Key Features - Compact */}
                <div className="space-y-2 mb-6">
                  {service.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.gradient} mr-2`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price/Call to Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.price}
                    </span>
                    {service.priceUnit && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                        {service.priceUnit}
                      </span>
                    )}
                  </div>
                  <Link
                    href={service.link}
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-linear-to-r ${service.gradient} bg-clip-text text-transparent hover:gap-3 transition-all duration-300`}
                  >
                    Learn More
                    <HiArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-linear-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} aria-hidden="true"></div>
              </div>
            ))}
        </div>

        {/* Featured Service Banner */}
        {config?.showFeatured && (
          <div className="mt-20 bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">{config?.featuredTitle}</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {config?.featuredDescription}
            </p>
            <Link
              href={config?.featuredLink}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {config?.featuredButtonText}
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}

        {/* Trust Indicators */}
        {config?.showTrust && (
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {config?.trustItems?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <div className={`w-8 h-8 rounded-full bg-linear-to-r ${item.gradient} flex items-center justify-center`}>
                  {getIcon(item.icon, "w-4 h-4 text-white")}
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllServicesSection3;