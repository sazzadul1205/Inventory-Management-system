// page/frontend/Home/FeaturesSection/FeaturesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineEye,
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlineTruck,
  HiChevronRight,
  HiOutlineRefresh,
  HiOutlineChartPie,
  HiOutlineLockClosed,
  HiOutlineTrendingUp,
  HiOutlineCheckCircle,
  HiOutlineCloudUpload,
  HiOutlineDeviceMobile,
  HiOutlineLightningBolt,
  HiOutlineDocumentReport,
} from 'react-icons/hi';

const FeaturesSection2 = ({ config }) => {
  // State for active tab/category
  const [activeCategory, setActiveCategory] = useState(
    config?.categories?.[0]?.id || 'all'
  );

  // Icon mapping
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className} text-current`;

    switch (iconName) {
      case 'lightning':
        return <HiOutlineLightningBolt className={iconClasses} />;
      case 'eye':
        return <HiOutlineEye className={iconClasses} />;
      case 'chart':
        return <HiOutlineChartPie className={iconClasses} />;
      case 'cloud':
        return <HiOutlineCloudUpload className={iconClasses} />;
      case 'lock':
        return <HiOutlineLockClosed className={iconClasses} />;
      case 'refresh':
        return <HiOutlineRefresh className={iconClasses} />;
      case 'trending':
        return <HiOutlineTrendingUp className={iconClasses} />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={iconClasses} />;
      case 'report':
        return <HiOutlineDocumentReport className={iconClasses} />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  // Filter features by category
  const getFilteredFeatures = () => {
    if (activeCategory === 'all') {
      return config?.features || [];
    }
    return config?.features?.filter(
      feature => feature.category === activeCategory
    ) || [];
  };

  // Get filtered features
  const filteredFeatures = getFilteredFeatures();

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

      {/* Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          {config?.badge?.text && (
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              {config.badge.text}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 sm:mt-4 mb-3 sm:mb-6">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {config?.heading?.highlighted}
            </span>
          </h2>
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
                ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              All Features
            </button>
            {config.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === category.id
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Features Grid - Alternating Layout */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {filteredFeatures.map((feature, index) => (
            <div
              key={feature.id || index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">

                  {/* Category Badge */}
                  <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                    {getIcon(feature.categoryIcon, "w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400")}
                    <span className="text-xs sm:text-sm font-medium text-blue-800 dark:text-blue-200">
                      {feature.categoryName}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  {feature.bullets && feature.bullets.length > 0 && (
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {feature.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center justify-center lg:justify-start">
                          <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 sm:mr-3">
                            <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Metrics */}
                  {feature.metrics && feature.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      {feature.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {metric.value}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Learn More Link */}
                  <Link
                    href={feature.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group text-sm sm:text-base"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    <span>Learn more about {feature.title}</span>
                    <HiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Image/Illustration Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20" />

                    {/* Floating Card */}
                    {feature.floatingCard && (
                      <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl border border-white/20 dark:border-gray-700">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 ${feature.floatingCard.iconBg} rounded-lg flex items-center justify-center`}>
                            {getIcon(feature.floatingCard.icon, "w-4 h-4 sm:w-5 sm:h-5 text-white")}
                          </div>
                          <div>
                            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                              {feature.floatingCard.label}
                            </p>
                            <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                              {feature.floatingCard.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-xl" />
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-purple-400 dark:bg-purple-600 rounded-full opacity-20 blur-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFeatures.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              No features found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection2;