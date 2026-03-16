// page/frontend/Home/IndustriesSection/IndustriesSection2.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
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
        return <HiOutlineShoppingBag className={iconClasses} aria-hidden="true" />;
      case 'logistics':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'manufacturing':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'pharma':
        return <HiOutlineBeaker className={iconClasses} aria-hidden="true" />;
      case 'technology':
        return <HiOutlineChip className={iconClasses} aria-hidden="true" />;
      case 'healthcare':
        return <HiOutlineHeart className={iconClasses} aria-hidden="true" />;
      case 'realestate':
        return <HiOutlineOfficeBuilding className={iconClasses} aria-hidden="true" />;
      case 'beauty':
        return <HiOutlineSparkles className={iconClasses} aria-hidden="true" />;
      case 'automotive':
        return <HiOutlineLightningBolt className={iconClasses} aria-hidden="true" />;
      case 'food':
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'education':
        return <HiOutlineBookOpen className={iconClasses} aria-hidden="true" />;
      case 'nonprofit':
        return <HiOutlineUsers className={iconClasses} aria-hidden="true" />;
      case 'finance':
        return <HiOutlineCurrencyDollar className={iconClasses} aria-hidden="true" />;
      case 'entertainment':
        return <HiOutlineFilm className={iconClasses} aria-hidden="true" />;
      case 'energy':
        return <HiOutlineSun className={iconClasses} aria-hidden="true" />;
      case 'aerospace':
        return <HiOutlineCloud className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
    }
  };

  // Get category icon
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'commercial':
        return <HiOutlineShoppingBag className="w-5 h-5" aria-hidden="true" />;
      case 'industrial':
        return <HiOutlineCube className="w-5 h-5" aria-hidden="true" />;
      case 'health':
        return <HiOutlineHeart className="w-5 h-5" aria-hidden="true" />;
      case 'specialty':
        return <HiOutlineSparkles className="w-5 h-5" aria-hidden="true" />;
      default:
        return <HiOutlineCube className="w-5 h-5" aria-hidden="true" />;
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
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Industries we serve"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-blue-500/30">
            <HiOutlineChartBar className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "INDUSTRIES WE SERVE"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
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
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Industry categories">
            <button
              key="all"
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === 'all'
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              role="tab"
              aria-selected={activeCategory === 'all'}
              aria-controls="industries-panel"
            >
              All Industries
            </button>
            {config.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === category.id
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls="industries-panel"
              >
                <span className="mr-2">{getCategoryIcon(category.icon)}</span>
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Industries Grid */}
        <div
          id="industries-panel"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="tabpanel"
          aria-label={`${activeCategory === 'all' ? 'All' : 'Filtered'} industries`}
        >
          {filteredIndustries.map((industry, index) => (
            <div
              key={industry.id || index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className={`w-12 h-12 ${industry.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                    {getIcon(industry.icon, "w-6 h-6 text-white")}
                  </div>
                  <span className="text-white font-semibold text-lg">{industry.title}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {industry.description}
                </p>

                {/* Key Solutions */}
                {industry.solutions && industry.solutions.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {industry.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-white">{solution}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stats */}
                {industry.stats && (
                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {industry.stats.map((stat, idx) => (
                      <div key={idx}>
                        <div className="text-xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href={industry.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                    aria-label={`Learn more about ${industry.title}`}
                  >
                    <span>Learn more</span>
                    <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredIndustries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No industries found in this category.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection2;