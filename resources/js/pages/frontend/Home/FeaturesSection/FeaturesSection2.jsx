// page/frontend/Home/FeaturesSection/FeaturesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineLightningBolt,
  HiOutlineEye,
  HiOutlineChartPie,
  HiOutlineCloudUpload,
  HiOutlineLockClosed,
  HiOutlineRefresh,
  HiOutlineTrendingUp,
  HiOutlineDeviceMobile,
  HiOutlineDocumentReport,
  HiOutlineUsers,
  HiOutlineCube,
  HiOutlineTruck,
  HiChevronRight
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
        return <HiOutlineLightningBolt className={iconClasses} aria-hidden="true" />;
      case 'eye':
        return <HiOutlineEye className={iconClasses} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartPie className={iconClasses} aria-hidden="true" />;
      case 'cloud':
        return <HiOutlineCloudUpload className={iconClasses} aria-hidden="true" />;
      case 'lock':
        return <HiOutlineLockClosed className={iconClasses} aria-hidden="true" />;
      case 'refresh':
        return <HiOutlineRefresh className={iconClasses} aria-hidden="true" />;
      case 'trending':
        return <HiOutlineTrendingUp className={iconClasses} aria-hidden="true" />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={iconClasses} aria-hidden="true" />;
      case 'report':
        return <HiOutlineDocumentReport className={iconClasses} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
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

  const filteredFeatures = getFilteredFeatures();

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      role="region"
      aria-label="Features section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
            {config?.badge?.text || "PLATFORM FEATURES"}
          </span>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6"
            itemProp="name"
          >
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
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
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Feature categories">
            <button
              key="all"
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === 'all'
                ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              role="tab"
              aria-selected={activeCategory === 'all'}
              aria-controls="features-panel"
            >
              All Features
            </button>
            {config.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === category.id
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls="features-panel"
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Features Grid - Alternating Layout */}
        <div
          id="features-panel"
          className="space-y-12"
          role="tabpanel"
          aria-label={`${activeCategory === 'all' ? 'All' : 'Filtered'} features`}
        >
          {filteredFeatures.map((feature, index) => (
            <div
              key={feature.id || index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="max-w-lg mx-auto lg:mx-0">
                  {/* Category Badge */}
                  <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full px-4 py-2 mb-6">
                    {getIcon(feature.categoryIcon, "w-4 h-4 text-blue-600 dark:text-blue-400")}
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      {feature.categoryName}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                    itemProp="name"
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-lg text-gray-600 dark:text-gray-400 mb-6"
                    itemProp="description"
                  >
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  {feature.bullets && feature.bullets.length > 0 && (
                    <ul className="space-y-3 mb-8" aria-label="Feature details">
                      {feature.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                            <svg
                              className="w-4 h-4 text-green-600 dark:text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Metrics */}
                  {feature.metrics && feature.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {feature.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Learn More Link */}
                  <Link
                    href={feature.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    <span>Learn more about {feature.title}</span>
                    <HiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Image/Illustration Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay" />

                    {/* Floating Card */}
                    {feature.floatingCard && (
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${feature.floatingCard.iconBg} rounded-lg flex items-center justify-center`}>
                            {getIcon(feature.floatingCard.icon, "w-5 h-5 text-white")}
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {feature.floatingCard.label}
                            </p>
                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                              {feature.floatingCard.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-2xl" aria-hidden="true" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 dark:bg-purple-600 rounded-full opacity-20 blur-2xl" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFeatures.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No features found in this category.
            </p>
          </div>
        )}
      </div>

    </section>
  );
};

export default FeaturesSection2;