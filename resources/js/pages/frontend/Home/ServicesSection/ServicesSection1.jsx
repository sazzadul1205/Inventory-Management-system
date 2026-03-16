// page/frontend/Home/ServicesSection/ServicesSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import { HiArrowRight, HiCog, HiTruck, HiChartBar, HiShieldCheck, HiClock, HiGlobe } from 'react-icons/hi';

const ServicesSection1 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-blue-600 dark:text-blue-400 group-hover:text-white group-hover:dark:text-white group-hover:scale-110 transition-transform`;

    switch (iconName) {
      case 'cog':
        return <HiCog className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiTruck className={iconClasses} aria-hidden="true" />;
      case 'chartBar':
        return <HiChartBar className={iconClasses} aria-hidden="true" />;
      case 'shieldCheck':
        return <HiShieldCheck className={iconClasses} aria-hidden="true" />;
      case 'clock':
        return <HiClock className={iconClasses} aria-hidden="true" />;
      case 'globe':
        return <HiGlobe className={iconClasses} aria-hidden="true" />;
      default:
        return <HiCog className={iconClasses} aria-hidden="true" />;
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
      aria-label="Services section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern - decorative */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Gradient Orbs - decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 dark:bg-yellow-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Services badge"
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

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Services list"
        >
          {config?.services?.map((service, index) => (
            <article
              key={service.id || index}
              className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
              role="listitem"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-all duration-300">
                {getIcon(service.icon)}
              </div>

              {/* Content */}
              <h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
                itemProp="name"
              >
                {service.title}
              </h3>
              <p
                className="text-gray-600 dark:text-gray-400 mb-6"
                itemProp="description"
              >
                {service.description}
              </p>

              {/* Features List */}
              {service.features && service.features.length > 0 && (
                <ul className="space-y-2 mb-6" aria-label="Service features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                      <svg
                        className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-0.5 shrink-0"
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
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA Link */}
              {service.link && (
                <Link
                  href={service.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {service.linkText || "Learn more"}
                  <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              )}

              {/* Decorative corner accent */}
              <div
                className="absolute top-4 right-4 w-12 h-12 bg-blue-500/10 dark:bg-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              ></div>
            </article>
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

        {/* Stats Section */}
        {config?.stats?.show && (
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200 dark:border-gray-800"
            aria-label="Company statistics"
          >
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
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

export default ServicesSection1;