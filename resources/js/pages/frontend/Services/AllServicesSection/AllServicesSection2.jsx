// page/frontend/Home/AllServicesSection/AllServicesSection2.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
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
  HiOutlineSparkles
} from 'react-icons/hi';

const AllServicesSection2 = ({ config }) => {
  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'truck':
        return <HiOutlineTruck className={className} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={className} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={className} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobe className={className} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={className} aria-hidden="true" />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} aria-hidden="true" />;
      case 'report':
        return <HiOutlineDocumentReport className={className} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUsers className={className} aria-hidden="true" />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} aria-hidden="true" />;
      default:
        return <HiOutlineCube className={className} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Our Services Section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-wide uppercase">
            {config?.badge}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title}
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description}
          </p>
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-20">
          {config?.services?.map((service, index) => (
            <div
              key={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              style={index % 2 === 1 ? { direction: 'rtl' } : {}}
            >
              {/* Content Side */}
              <div style={index % 2 === 1 ? { direction: 'ltr' } : {}}>
                <div className="space-y-6">
                  {/* Icon and Category */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center`}>
                      {getIcon(service.icon, "w-7 h-7 text-white")}
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature List with Icons */}
                  <ul className="space-y-4 pt-4">
                    {service.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full ${service.bgColor} bg-opacity-20 dark:bg-opacity-30 flex items-center justify-center shrink-0 mt-0.5`}>
                          <svg className={`w-3 h-3 ${service.textColor}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Service Link */}
                  <div className="pt-4">
                    <Link
                      href={service.link}
                      className={`inline-flex items-center gap-2 ${service.textColor} font-semibold hover:gap-3 transition-all duration-300 group`}
                    >
                      <span>Learn more about {service.title}</span>
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div style={index % 2 === 1 ? { direction: 'ltr' } : {}}>
                <div className="relative">
                  <div className={`absolute -inset-4 ${service.bgColor} bg-opacity-10 dark:bg-opacity-20 rounded-3xl blur-2xl`} aria-hidden="true" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-100 object-cover"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-linear-to-tr ${service.overlayGradient}`} aria-hidden="true" />

                    {/* Floating Stats Card */}
                    {service.stats && (
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                          <div className="grid grid-cols-2 gap-4">
                            {service.stats.map((stat, idx) => (
                              <div key={idx}>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
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
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <span className="text-lg text-gray-700 dark:text-gray-300">
                {config?.ctaText}
              </span>
              <Link
                href={config?.ctaLink}
                className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText}
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        [style*="direction: rtl"] .lg\\:direction-rtl {
          direction: rtl;
        }
      `}</style>
    </section>
  );
};

export default AllServicesSection2;