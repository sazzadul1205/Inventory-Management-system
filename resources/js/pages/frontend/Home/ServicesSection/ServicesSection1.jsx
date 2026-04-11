// page/frontend/Home/ServicesSection/ServicesSection2.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiCheck,
  HiArrowRight,
  HiOutlineCube,
  HiOutlineClock,
  HiOutlineTruck,
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineDocumentReport,
} from 'react-icons/hi';

const ServicesSection2 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-7 h-7") => {
    const iconClasses = `${className}  text-white group-hover:text-white transition-colors duration-300`;

    switch (iconName) {
      case 'cube':
        return <HiOutlineCube className={iconClasses} />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      case 'chartBar':
        return <HiOutlineChartBar className={iconClasses} />;
      case 'shieldCheck':
        return <HiOutlineShieldCheck className={iconClasses} />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'document':
        return <HiOutlineDocumentReport className={iconClasses} />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} />;
      case 'sparkles':
        return <HiOutlineSparkles className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  return (
    <section className="relative pb-12 sm:pb-16 md:pb-24 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-200 dark:bg-yellow-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000" />
      </div>

      {/* Header Image Section */}
      {config?.headerImage?.show && (
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 mb-12 sm:mb-16 overflow-hidden">
          <img
            src={config.headerImage.src}
            alt={config.headerImage.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-purple-900/90 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4">
                {config?.headerImage?.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100">
                {config?.headerImage?.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {config?.badge?.text && (
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              {config.badge.text}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 sm:mt-4 mb-3 sm:mb-6">
            {config?.heading?.main}
          </h2>
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-16 sm:space-y-20">
          {config?.services?.map((service, index) => (
            <article key={service.id || index} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>

              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">

                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-500/30 mx-auto lg:mx-0">
                    {getIcon(service.icon, "w-6 h-6 sm:w-7 sm:h-7 text-white")}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center lg:justify-start">
                          <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2 sm:mr-3">
                            <HiCheck className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA */}
                  {service.link && (
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group text-sm sm:text-base"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span>{service.linkText || "Discover more"}</span>
                      <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Image Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20" />

                    {/* Floating Stats Card */}
                    {service.stats && service.stats.length > 0 && (
                      <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                          {service.stats.map((stat, idx) => (
                            <div key={idx}>
                              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                                {stat.value}
                              </p>
                              <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-xl" />
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-purple-400 dark:bg-purple-600 rounded-full opacity-20 blur-xl" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Card */}
        {config?.bottomCta?.show && (
          <div className="mt-16 sm:mt-20 md:mt-24 relative">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="relative px-6 sm:px-8 py-8 sm:py-12 md:py-16 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
                  {config.bottomCta.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  {config.bottomCta.description}
                </p>
                <Link
                  href={config.bottomCta.url}
                  className="inline-flex items-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl group text-sm sm:text-base"
                  aria-label={config.bottomCta.ariaLabel}
                >
                  {config.bottomCta.buttonText}
                  <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection2;