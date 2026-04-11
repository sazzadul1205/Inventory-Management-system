// page/frontend/Home/ServicesSection/ServicesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// React Icons\
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
} from 'react-icons/fa';
import {
  HiOutlineCog,
  HiOutlineMail,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineClock,
  HiChevronRight,
  HiOutlineUsers,
  HiOutlinePhone,
  HiOutlineSearch,
  HiOutlineRefresh,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineLightningBolt,
  HiOutlineLocationMarker,
} from 'react-icons/hi';

const ServicesSection3 = ({ config }) => {
  // State for hover effect
  const [hoveredCard, setHoveredCard] = useState(null);

  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (config?.testimonials?.show && config?.testimonials?.items?.length > 0) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) =>
          prev === config.testimonials.items.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [config?.testimonials]);

  // Icon mapping
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className}`;

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
        return <HiOutlineDocumentText className={iconClasses} />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} />;
      case 'cog':
        return <HiOutlineCog className={iconClasses} />;
      case 'lightning':
        return <HiOutlineLightningBolt className={iconClasses} />;
      case 'search':
        return <HiOutlineSearch className={iconClasses} />;
      case 'refresh':
        return <HiOutlineRefresh className={iconClasses} />;
      case 'sparkles':
        return <HiOutlineSparkles className={iconClasses} />;
      case 'phone':
        return <HiOutlinePhone className={iconClasses} />;
      case 'mail':
        return <HiOutlineMail className={iconClasses} />;
      case 'location':
        return <HiOutlineLocationMarker className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Animation */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full px-4 py-1.5 mb-4 shadow-lg">
            <HiOutlineSparkles className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              {config?.badge?.text || "PREMIUM SERVICES"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {config?.heading?.line1}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {config.description}
            </p>
          )}
        </div>

        {/* Services Grid - 3D Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {config?.services?.map((service, index) => (
            <div
              key={service.id || index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">

                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" />

                {/* Icon Container with Pulse Effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${hoveredCard === service.id ? 'bg-linear-to-r from-blue-500 to-purple-600 shadow-lg' : service.iconBg || 'bg-blue-100 dark:bg-blue-900/30'}`}>
                    {getIcon(service.icon, `w-7 h-7 transition-all duration-500 ${hoveredCard === service.id ? 'text-white' : service.iconColor || 'text-blue-600 dark:text-blue-400'}`)}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features?.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {service.features?.length > 2 && (
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                      +{service.features.length - 2}
                    </span>
                  )}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  {service.price && (
                    <div>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {service.price}
                      </span>
                      {service.priceUnit && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">/{service.priceUnit}</span>
                      )}
                    </div>
                  )}
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 transition-colors group/link"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Decorative Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-800 dark:text-gray-200 opacity-50">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Stats Section */}
        {config?.stats?.show && (
          <div className="mt-16 sm:mt-20 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {config.stats.items?.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        {config?.testimonials?.show && config?.testimonials?.items?.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                What Our Clients Say
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Trusted by businesses worldwide
              </p>
            </div>

            <div className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8">
              <FaQuoteLeft className="absolute top-6 left-6 w-8 h-8 text-blue-200 dark:text-blue-800 opacity-50" />

              <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{config.testimonials.items[currentTestimonial]?.text}"
                </p>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {config.testimonials.items[currentTestimonial]?.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {config.testimonials.items[currentTestimonial]?.position}
                </p>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {config.testimonials.items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === idx
                      ? 'w-6 bg-blue-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Banner */}
        {config?.cta?.show && (
          <div className="mt-16 sm:mt-20 relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'rgba(255,255,255,0.05)\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E')]" />
            <div className="relative px-6 sm:px-8 py-10 sm:py-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {config.cta.title}
              </h3>
              <p className="text-blue-100 mb-6 max-w-md mx-auto">
                {config.cta.description}
              </p>
              <Link
                href={config.cta.url}
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg group"
              >
                {config.cta.buttonText}
                <HiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection3;