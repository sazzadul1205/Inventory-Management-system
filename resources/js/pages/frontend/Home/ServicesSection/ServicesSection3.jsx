// page/frontend/Home/ServicesSection/ServicesSection3.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineLightningBolt,
  HiOutlineSearch,
  HiOutlineRefresh,
  HiChevronRight,
  HiOutlineCheckCircle
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
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'chartBar':
        return <HiOutlineChartBar className={iconClasses} aria-hidden="true" />;
      case 'shieldCheck':
        return <HiOutlineShieldCheck className={iconClasses} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'document':
        return <HiOutlineDocumentText className={iconClasses} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} aria-hidden="true" />;
      case 'cog':
        return <HiOutlineCog className={iconClasses} aria-hidden="true" />;
      case 'lightning':
        return <HiOutlineLightningBolt className={iconClasses} aria-hidden="true" />;
      case 'search':
        return <HiOutlineSearch className={iconClasses} aria-hidden="true" />;
      case 'refresh':
        return <HiOutlineRefresh className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
    }
  };

  // Get category icon
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'inventory':
        return <HiOutlineCube className="w-5 h-5" aria-hidden="true" />;
      case 'transport':
        return <HiOutlineTruck className="w-5 h-5" aria-hidden="true" />;
      case 'analytics':
        return <HiOutlineChartBar className="w-5 h-5" aria-hidden="true" />;
      case 'warehouse':
        return <HiOutlineCog className="w-5 h-5" aria-hidden="true" />;
      default:
        return <HiOutlineCube className="w-5 h-5" aria-hidden="true" />;
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

  // Get filtered services
  const filteredServices = getFilteredServices();

  return (
    <section
      className="relative py-20 bg-gray-50 dark:bg-gray-900"
      role="region"
      aria-label="Services by category"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
            <HiOutlineCheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
              {config?.badge?.text || "OUR SERVICES"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            itemProp="name"
          >
            {config?.heading?.line1}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-600 dark:text-gray-400"
            itemProp="description"
          >
            {config?.description}
          </p>
        </div>

        {/* Category Tabs */}
        {config?.categories && config.categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Service categories">
            <button
              key="all"
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              role="tab"
              aria-selected={activeCategory === 'all'}
              aria-controls="services-panel"
            >
              All Services
            </button>
            {config.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls="services-panel"
              >
                <span className="mr-2">{getCategoryIcon(category.icon)}</span>
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Services Grid - Cards with Icons */}
        <div
          id="services-panel"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="tabpanel"
          aria-label={`${activeCategory === 'all' ? 'All' : 'Filtered'} services`}
        >
          {filteredServices.map((service, index) => (
            <div
              key={service.id || index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300" aria-hidden="true"></div>

              {/* Top Accent Bar */}
              <div className={`h-2 bg-linear-to-r ${service.accentColor} w-full`} aria-hidden="true"></div>

              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(service.icon, "w-8 h-8")}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                  itemProp="name"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3"
                  itemProp="description"
                >
                  {service.description}
                </p>

                {/* Features - Compact */}
                {service.features && service.features.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-gray-600 dark:text-gray-400 line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 pl-6">
                        +{service.features.length - 3} more features
                      </p>
                    )}
                  </div>
                )}

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {service.deliveryTime || '24/7 Available'}
                  </span>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors group/link focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn more</span>
                    <HiChevronRight className="ml-1 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/5 dark:bg-blue-400/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No services found in this category.
            </p>
          </div>
        )}

        {/* Bottom Info Cards */}
        {config?.bottomCards && config.bottomCards.length > 0 && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.bottomCards.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 ${card.iconBg} rounded-lg flex items-center justify-center mr-3`}>
                    {getIcon(card.icon, "w-5 h-5")}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Trust Indicators */}
        {config?.trustIndicators?.show && (
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {config.trustIndicators.items.map((item, index) => (
              <div key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="text-2xl font-bold text-gray-900 dark:text-white mr-2">
                  {item.value}
                </span>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Styles */}
      <style >{`
          .bg-circuit-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
            background-size: 30px 30px;
          }
          .line-clamp-1 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .line-clamp-3 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
        `}</style>
    </section>
  );
};

export default ServicesSection3;