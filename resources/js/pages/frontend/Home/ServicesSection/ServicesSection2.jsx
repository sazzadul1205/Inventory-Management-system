// page/frontend/Home/ServicesSection/ServicesSection2.jsx

// React
import { Head, Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineDocumentReport,
  HiOutlineUsers,
  HiArrowRight,
  HiOutlineSparkles
} from 'react-icons/hi';

const ServicesSection2 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-7 h-7") => {
    const iconClasses = `${className} text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300`;

    switch (iconName) {
      case 'cube':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'chartBar':
        return <HiOutlineChartBar className={iconClasses} aria-hidden="true" />;
      case 'shieldCheck':
        return <HiOutlineShieldCheck className={iconClasses} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'document':
        return <HiOutlineDocumentReport className={iconClasses} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} aria-hidden="true" />;
      case 'sparkles':
        return <HiOutlineSparkles className={iconClasses} aria-hidden="true" />;
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
      className="relative pb-24 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Services section"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Background Elements - decorative */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 dark:bg-yellow-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Image Section */}
      {config?.headerImage?.show && (
        <div className="relative h-64 md:h-80 lg:h-96 mb-16 overflow-hidden">
          <img
            src={config.headerImage.src}
            alt={config.headerImage.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-purple-900/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {config?.headerImage?.title}
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                {config?.headerImage?.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Minimal */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
            {config?.badge?.text || "WHAT WE OFFER"}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6"
            itemProp="name"
          >
            {config?.heading?.main}
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-400"
            itemProp="description"
          >
            {config?.description}
          </p>
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-20">
          {config?.services?.map((service, index) => (
            <article
              key={service.id || index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="max-w-lg mx-auto lg:mx-0">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    {getIcon(service.icon, "w-8 h-8 text-white")}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                    itemProp="name"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-lg text-gray-600 dark:text-gray-400 mb-6"
                    itemProp="description"
                  >
                    {service.description}
                  </p>

                  {/* Features List */}
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3 mb-8" aria-label="Service features">
                      {service.features.map((feature, idx) => (
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
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA */}
                  {service.link && (
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-4 py-2"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span>{service.linkText || "Discover more"}</span>
                      <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Image Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>

                    {/* Floating Stats Card */}
                    {service.stats && (
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                        <div className="grid grid-cols-2 gap-4">
                          {service.stats.map((stat, idx) => (
                            <div key={idx}>
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {stat.value}
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-2xl" aria-hidden="true"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 dark:bg-purple-600 rounded-full opacity-20 blur-2xl" aria-hidden="true"></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Card */}
        {config?.bottomCta?.show && (
          <div className="mt-24 relative">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30" aria-hidden="true"></div>
            <div className="relative bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern-white opacity-10" aria-hidden="true"></div>
              <div className="relative px-8 py-12 md:py-16 md:px-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {config.bottomCta.title}
                </h3>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  {config.bottomCta.description}
                </p>
                <Link
                  href={config.bottomCta.url}
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  aria-label={config.bottomCta.ariaLabel}
                >
                  {config.bottomCta.buttonText}
                  {getButtonIcon(config.bottomCta.icon)}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          .bg-grid-pattern-white {
            background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 30px 30px;
          }
        `}</style>
    </section>
  );
};

export default ServicesSection2;