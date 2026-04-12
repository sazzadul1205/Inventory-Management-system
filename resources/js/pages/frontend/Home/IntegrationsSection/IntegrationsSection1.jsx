// page/frontend/Home/IntegrationsSection/IntegrationsSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
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
    const iconClasses = `${className} text-white transition-all duration-300`;

    switch (iconName) {
      case 'cloud':
        return <HiOutlineCloud className={iconClasses} />;
      case 'cart':
        return <HiOutlineShoppingCart className={iconClasses} />;
      case 'credit':
        return <HiOutlineCreditCard className={iconClasses} />;
      case 'mail':
        return <HiOutlineMail className={iconClasses} />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} />;
      case 'database':
        return <HiOutlineDatabase className={iconClasses} />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'cog':
        return <HiOutlineCog className={iconClasses} />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} />;
      case 'document':
        return <HiOutlineDocumentText className={iconClasses} />;
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

        {/* Stats Row */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
          {config?.integrations?.map((integration, index) => (
            <div
              key={integration.id || index}
              className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center cursor-pointer"
              onClick={() => window.open(integration.link, '_blank')}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(integration.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7")}
              </div>

              {/* Name */}
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                {integration.name}
              </h3>

              {/* Category */}
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mt-0.5 sm:mt-1">
                {integration.category}
              </p>

              {/* Popular Badge */}
              {integration.popular && (
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                  <span className="bg-linear-to-r from-yellow-500 to-yellow-600 text-white text-[8px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mb-16 sm:mb-20">
          <Link
            href={config?.viewAll?.url || "/integrations"}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group text-sm sm:text-base"
          >
            <span>{config?.viewAll?.text || "View All Integrations"}</span>
            <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Integration */}
        {config?.featured?.show && (
          <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-100 dark:border-blue-800/30">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">

              {/* Left Content */}
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">
                  FEATURED INTEGRATION
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-1 sm:mt-2 mb-2 sm:mb-4">
                  {config.featured.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {config.featured.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {config.featured.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 mr-2 sm:mr-3 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Link
                    href={config.featured.learnMoreUrl}
                    className="inline-flex items-center bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group text-sm sm:text-base"
                  >
                    Learn More
                    <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={config.featured.docsUrl}
                    className="inline-flex items-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm sm:text-base"
                  >
                    View Docs
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={config.featured.image}
                    alt={config.featured.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Logo Overlay */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                      {getIcon(config.featured.logoIcon, "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white")}
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                        {config.featured.logoLabel}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
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
          <div className="mt-16 sm:mt-20 text-center">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                {config.api.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto px-4">
                {config.api.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href={config.api.docsUrl}
                  className="inline-flex items-center bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group text-sm sm:text-base"
                >
                  Read API Docs
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={config.api.consoleUrl}
                  className="inline-flex items-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  API Console
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IntegrationsSection1;