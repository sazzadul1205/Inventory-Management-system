// page/frontend/Home/IndustriesSection/IndustriesSection1.jsx

// React
import { Link } from '@inertiajs/react';

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
  HiArrowRight,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const IndustriesSection1 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-white group-hover:text-white transition-all duration-300`;

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
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-blue-600 dark:text-blue-400 relative inline-block">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {config?.industries?.map((industry, index) => (
            <div
              key={industry.id || index}
              className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 cursor-pointer"
              onClick={() => window.location.href = industry.link}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                {getIcon(industry.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7")}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                {industry.description}
              </p>

              {/* Features */}
              {industry.features && industry.features.length > 0 && (
                <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-500 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-3 h-3 text-green-500 dark:text-green-400 mr-1 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Case Study Link */}
              {industry.caseStudy && (
                <Link
                  href={industry.caseStudy}
                  className="inline-flex items-center text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View case study</span>
                  <HiArrowRight className="ml-1 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Trust Indicators */}
        {config?.trustIndicators?.show && config?.trustIndicators?.items && (
          <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {config.trustIndicators.items.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustriesSection1;