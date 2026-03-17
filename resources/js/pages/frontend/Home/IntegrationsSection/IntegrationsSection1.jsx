// page/frontend/Home/IntegrationsSection/IntegrationsSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineCloud,
  HiOutlineShoppingCart,
  HiOutlineCreditCard,
  HiOutlineMail,
  HiOutlineChartBar,
  HiOutlineDatabase,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineGlobeAlt,
  HiOutlineCog,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineArrowRight,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const IntegrationsSection1 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-white dark:text-blue-400 group-hover:text-white group-hover:dark:text-white transition-all duration-300`;

    switch (iconName) {
      case 'cloud':
        return <HiOutlineCloud className={iconClasses} aria-hidden="true" />;
      case 'cart':
        return <HiOutlineShoppingCart className={iconClasses} aria-hidden="true" />;
      case 'credit':
        return <HiOutlineCreditCard className={iconClasses} aria-hidden="true" />;
      case 'mail':
        return <HiOutlineMail className={iconClasses} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} aria-hidden="true" />;
      case 'database':
        return <HiOutlineDatabase className={iconClasses} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'cog':
        return <HiOutlineCog className={iconClasses} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} aria-hidden="true" />;
      case 'document':
        return <HiOutlineDocumentText className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Integrations section"
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
              aria-label="Integrations badge"
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
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Stats Row */}
        {config?.stats?.show && (
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {config?.integrations?.map((integration, index) => (
            <div
              key={integration.id || index}
              className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center cursor-pointer"
              onClick={() => window.open(integration.link, '_blank')}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(integration.icon)}
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {integration.name}
              </h3>

              {/* Category */}
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {integration.category}
              </p>

              {/* Popular Badge */}
              {integration.popular && (
                <div className="absolute -top-2 -right-2">
                  <span className="bg-linear-to-r from-yellow-500 to-yellow-600 text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mb-20">
          <Link
            href={config?.viewAll?.url || "/integrations"}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            <span>{config?.viewAll?.text || "View All Integrations"}</span>
            <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Integration */}
        {config?.featured?.show && (
          <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-3xl p-8 md:p-12 border border-blue-100 dark:border-blue-800/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                  FEATURED INTEGRATION
                </span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                  {config.featured.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {config.featured.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {config.featured.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={config.featured.learnMoreUrl}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group"
                  >
                    Learn More
                    <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={config.featured.docsUrl}
                    className="inline-flex items-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    View Docs
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={config.featured.image}
                    alt={config.featured.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Logo Overlay */}
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      {getIcon(config.featured.logoIcon, "w-6 h-6 text-white")}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {config.featured.logoLabel}
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {config.featured.logoValue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* API Section */}
        {config?.api?.show && (
          <div className="mt-20 text-center">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {config.api.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                {config.api.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href={config.api.docsUrl}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group"
                >
                  Read API Docs
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={config.api.consoleUrl}
                  className="inline-flex items-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  API Console
                </Link>
              </div>
            </div>
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

export default IntegrationsSection1;