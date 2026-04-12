// page/frontend/Home/IndustriesSection/IndustriesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineBeaker,
  HiOutlineChip,
  HiOutlineHeart,
  HiOutlineOfficeBuilding,
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineGlobeAlt,
  HiOutlineBookOpen,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineFilm,
  HiOutlineSun,
  HiOutlineCloud,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineChartBar
} from 'react-icons/hi';

const IndustriesSection2 = ({ config }) => {
  // State for active tab/category
  const [activeCategory, setActiveCategory] = useState(
    config?.categories?.[0]?.id || 'all'
  );

  // Icon mapping
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className} text-current`;

    switch (iconName) {
      case 'retail':
        return <HiOutlineShoppingBag className={iconClasses} />;
      case 'logistics':
        return <HiOutlineTruck className={iconClasses} />;
      case 'manufacturing':
        return <HiOutlineCube className={iconClasses} />;
      case 'pharma':
        return <HiOutlineBeaker className={iconClasses} />;
      case 'technology':
        return <HiOutlineChip className={iconClasses} />;
      case 'healthcare':
        return <HiOutlineHeart className={iconClasses} />;
      case 'realestate':
        return <HiOutlineOfficeBuilding className={iconClasses} />;
      case 'beauty':
        return <HiOutlineSparkles className={iconClasses} />;
      case 'automotive':
        return <HiOutlineLightningBolt className={iconClasses} />;
      case 'food':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'education':
        return <HiOutlineBookOpen className={iconClasses} />;
      case 'nonprofit':
        return <HiOutlineUsers className={iconClasses} />;
      case 'finance':
        return <HiOutlineCurrencyDollar className={iconClasses} />;
      case 'entertainment':
        return <HiOutlineFilm className={iconClasses} />;
      case 'energy':
        return <HiOutlineSun className={iconClasses} />;
      case 'aerospace':
        return <HiOutlineCloud className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  // Filter industries by category
  const getFilteredIndustries = () => {
    if (activeCategory === 'all') {
      return config?.industries || [];
    }
    return config?.industries?.filter(
      industry => industry.category === activeCategory
    ) || [];
  };

  const filteredIndustries = getFilteredIndustries();

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-blue-500/30">
              <HiOutlineChartBar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
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
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              All Industries
            </button>
            {config.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === category.id
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {filteredIndustries.map((industry, index) => (
            <div
              key={industry.id || index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                {/* Icon Overlay */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center space-x-2 sm:space-x-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${industry.iconBg || 'bg-linear-to-r from-blue-500 to-purple-600'} rounded-xl flex items-center justify-center shadow-lg`}>
                    {getIcon(industry.icon, "w-5 h-5 sm:w-6 sm:h-6 text-white")}
                  </div>
                  <span className="text-white font-semibold text-base sm:text-lg">{industry.title}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-5 md:p-6">

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                  {industry.description}
                </p>

                {/* Key Solutions */}
                {industry.solutions && industry.solutions.length > 0 && (
                  <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    {industry.solutions.slice(0, 2).map((solution, idx) => (
                      <div key={idx} className="flex items-start text-xs sm:text-sm">
                        <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                      </div>
                    ))}
                    {industry.solutions.length > 2 && (
                      <div className="text-xs text-gray-500 dark:text-gray-500 pl-5 sm:pl-6">
                        +{industry.solutions.length - 2} more solutions
                      </div>
                    )}
                  </div>
                )}

                {/* Stats */}
                {industry.stats && industry.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                    {industry.stats.slice(0, 2).map((stat, idx) => (
                      <div key={idx}>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="mt-4 sm:mt-5 md:mt-6">
                  <Link
                    href={industry.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                    aria-label={`Learn more about ${industry.title}`}
                  >
                    <span>Learn more</span>
                    <HiArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredIndustries.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              No industries found in this category.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection2;