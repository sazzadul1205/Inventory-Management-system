// page/frontend/Home/FeaturesSection/FeaturesSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineGlobeAlt,
  HiOutlineCog,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiArrowRight
} from 'react-icons/hi';

const FeaturesSection1 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300`;

    switch (iconName) {
      case 'clock':
        return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} aria-hidden="true" />;
      case 'shield':
        return <HiOutlineShieldCheck className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'cog':
        return <HiOutlineCog className={iconClasses} aria-hidden="true" />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={iconClasses} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUserGroup className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCog className={iconClasses} aria-hidden="true" />;
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
      aria-label="Features section"
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
              aria-label="Features badge"
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

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Features list"
        >
          {config?.features?.map((feature, index) => (
            <div
              key={feature.id || index}
              className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-gray-900/50 border border-gray-100 dark:border-gray-700"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
              role="listitem"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-all duration-300">
                {getIcon(feature.icon)}
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                itemProp="name"
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-600 dark:text-gray-400 mb-4"
                itemProp="description"
              >
                {feature.description}
              </p>

              {/* Feature Stats (if available) */}
              {feature.stat && (
                <div className="flex items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 mr-2">
                    {feature.stat.value}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {feature.stat.label}
                  </span>
                </div>
              )}

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 group-hover:ring-blue-500/50 dark:group-hover:ring-blue-400/50 transition-all duration-300 pointer-events-none" aria-hidden="true"></div>
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
      </div>

      {/* Styles */}
      <style>{`
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

export default FeaturesSection1;