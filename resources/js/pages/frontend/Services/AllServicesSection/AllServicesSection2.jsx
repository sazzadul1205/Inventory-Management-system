// page/frontend/Home/AllServicesSection/AllServicesSection2.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineClock,
  HiOutlineGlobe,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineDocumentReport,
  HiOutlineUsers,
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const AllServicesSection2 = ({ config }) => {
  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'cube':
        return <HiOutlineCube className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'globe':
        return <HiOutlineGlobe className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'report':
        return <HiOutlineDocumentReport className={className} />;
      case 'users':
        return <HiOutlineUsers className={className} />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      default:
        return <HiOutlineCube className={className} />;
    }
  };
  
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(148 163 184 / 0.2)\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e')] dark:bg-[url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(51 65 85 / 0.4)\'%3e%3cpath d=\'M0 .5H31.5V32\'/%3e%3c/svg%3e')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12 md:mb-16">
          {config?.badge && (
            <h2 className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3 tracking-wide uppercase">
              {config.badge}
            </h2>
          )}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title}
          </h3>
          {config?.description && (
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {config?.services?.map((service, index) => (
            <div
              key={service.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="space-y-4 sm:space-y-6">

                  {/* Icon and Category */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl ${service.bgColor} flex items-center justify-center`}>
                      {getIcon(service.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white")}
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature List */}
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2 sm:space-y-3 md:space-y-4 pt-2 sm:pt-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${service.bgColor} bg-opacity-20 dark:bg-opacity-30 flex items-center justify-center shrink-0 mt-0.5`}>
                            <HiOutlineCheckCircle className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${service.textColor || 'text-blue-600 dark:text-blue-400'}`} />
                          </div>
                          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Service Link */}
                  <div className="pt-2 sm:pt-4">
                    <Link
                      href={service.link}
                      className={`inline-flex items-center gap-1.5 sm:gap-2 ${service.textColor || 'text-blue-600 dark:text-blue-400'} font-semibold hover:gap-2 sm:hover:gap-3 transition-all duration-300 group text-sm sm:text-base`}
                    >
                      <span>Learn more about {service.title}</span>
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className={`absolute -inset-3 sm:-inset-4 ${service.bgColor} bg-opacity-10 dark:bg-opacity-20 rounded-xl sm:rounded-2xl md:rounded-3xl blur-xl sm:blur-2xl`} />
                  <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-linear-to-tr ${service.overlayGradient || 'from-blue-600/20 to-indigo-600/20'}`} />

                    {/* Floating Stats Card */}
                    {service.stats && service.stats.length > 0 && (
                      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
                        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl">
                          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                            {service.stats.map((stat, idx) => (
                              <div key={idx}>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                                  {stat.value}
                                </p>
                                <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
                                  {stat.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {config?.showCta && (
          <div className="mt-16 sm:mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 p-5 sm:p-6 md:p-8 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg">
              <span className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
                {config?.ctaText}
              </span>
              <Link
                href={config?.ctaLink}
                className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
              >
                {config?.ctaButtonText}
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllServicesSection2;