// page/frontend/Home/ServicesSection/ServicesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineUsers,
  HiChevronRight,
  HiOutlineSearch,
  HiOutlineRefresh,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlineLightningBolt,
} from 'react-icons/hi';

const ServicesSection3 = ({ config }) => {
  // State for active tab/category
  const [activeCategory, setActiveCategory] = useState(
    config?.categories?.[0]?.id || 'all'
  );

  // Icon mapping
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className} text-current`;

    switch (iconName) {
      case 'cube':
        return <HiOutlineCube className={iconClasses} />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      case 'chartBar':
        return <HiOutlineChartBar className={iconClasses} />;
      case 'shieldCheck':
        return <HiOutlineShieldCheck className={iconClasses} />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'document':
        return <HiOutlineDocumentText className={iconClasses} />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} />;
      case 'cog':
        return <HiOutlineCog className={iconClasses} />;
      case 'lightning':
        return <HiOutlineLightningBolt className={iconClasses} />;
      case 'search':
        return <HiOutlineSearch className={iconClasses} />;
      case 'refresh':
        return <HiOutlineRefresh className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  // Filter services by category
  const getFilteredServices = () => {
    if (activeCategory === 'all') {
      return config?.services || [];
    }
    return config?.services?.filter(
      service => service.category === activeCategory
    ) || [];
  };

  const filteredServices = getFilteredServices();

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(#999_0.5px,transparent_0.5px)] dark:bg-[radial-gradient(#666_0.5px,transparent_0.5px)] bg-size-[20px_20px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
              <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-blue-800 dark:text-blue-200">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Category Tabs */}
        {config?.categories && config.categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            <button
              key="all"
              onClick={() => setActiveCategory('all')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              All Services
            </button>
            {config.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id || index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className={`h-1 sm:h-2 ${service.accentColor || 'bg-linear-to-r from-blue-500 to-purple-500'} w-full`} />

              <div className="p-5 sm:p-6 md:p-8">

                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${service.iconBg || 'bg-blue-100 dark:bg-blue-900/30'} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(service.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7")}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start text-xs sm:text-sm">
                        <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 dark:text-green-400 mr-1.5 sm:mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400 line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 pl-5 sm:pl-6">
                        +{service.features.length - 3} more features
                      </p>
                    )}
                  </div>
                )}

                {/* Meta & Link */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                    {service.deliveryTime || '24/7 Available'}
                  </span>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-xs sm:text-sm transition-colors group/link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn more</span>
                    <HiChevronRight className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              No services found in this category.
            </p>
          </div>
        )}

        {/* Bottom Info Cards */}
        {config?.bottomCards && config.bottomCards.length > 0 && (
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {config.bottomCards.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 ${card.iconBg || 'bg-blue-100 dark:bg-blue-900/30'} rounded-lg flex items-center justify-center mr-2 sm:mr-3`}>
                    {getIcon(card.icon, "w-4 h-4 sm:w-5 sm:h-5")}
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Trust Indicators */}
        {config?.trustIndicators?.show && config?.trustIndicators?.items && (
          <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {config.trustIndicators.items.map((item, index) => (
              <div key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mr-1 sm:mr-2">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection3;