// page/frontend/Home/IndustriesSection/IndustriesSection1.jsx

// React
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
  HiArrowRight,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const IndustriesSection1 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-white group-hover:text-white group-hover:dark:text-white transition-all duration-300`;

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
      default:
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
    }
  };

  // Get button icon
  const getButtonIcon = (iconName) => {
    switch (iconName) {
      case 'arrowRight':
        return <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industries we serve"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern - decorative */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Gradient Orbs - decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Industries badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              )}
              <span className={`text-sm font-medium ${config.badge.textColor}`}>
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.heading?.prefix}{' '}
            <span className={`${config?.heading?.highlightColor} relative inline-block`}>
              {config?.heading?.highlightedText}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                aria-hidden="true"
              >
                <line
                  x1="0" y1="4" x2="200" y2="4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  className={config?.heading?.highlightColor}
                />
              </svg>
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p
              className="text-lg text-gray-600 dark:text-gray-400"
              itemProp="description"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Industries Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Industries list"
        >
          {config?.industries?.map((industry, index) => (
            <div
              key={industry.id || index}
              className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 cursor-pointer"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
              role="listitem"
              onClick={() => window.location.href = industry.link}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                {getIcon(industry.icon)}
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                itemProp="name"
              >
                {industry.title}
              </h3>
              <p
                className="text-gray-600 dark:text-gray-400 text-sm mb-4"
                itemProp="description"
              >
                {industry.description}
              </p>

              {/* Features */}
              {industry.features && industry.features.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-500 dark:text-white">
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
                  className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View case study</span>
                  <HiArrowRight className="ml-1 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              )}

              {/* Decorative corner accent */}
              <div
                className="absolute top-4 right-4 w-12 h-12 bg-blue-500/10 dark:bg-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {config?.bottomCta?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              {getButtonIcon(config.bottomCta.icon)}
            </Link>
          </div>
        )}

        {/* Trust Indicators */}
        {config?.trustIndicators?.show && (
          <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {config.trustIndicators.items.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection1;