// page/frontend/Home/OrderFulfillmentSection/OrderFulfillmentSection3.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import { GoPackage } from "react-icons/go";
import {
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineRefresh,
  HiOutlineDocumentText,
  HiOutlineUser,
  HiOutlineCash,
  HiOutlineDeviceMobile,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiOutlineStar,
  HiOutlineBell
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const OrderFulfillmentSection3 = ({ config }) => {

  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'bag':
        return <HiOutlineShoppingBag className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'user':
        return <HiOutlineUser className={className} />;
      case 'package':
        return <GoPackage className={className} />;
      case 'cash':
        return <HiOutlineCash className={className} />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bolt':
        return <HiOutlineLightningBolt className={className} />;
      case 'globe':
        return <HiOutlineGlobe className={className} />;
      case 'star':
        return <HiOutlineStar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      default:
        return <GoPackage className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Hero Background with Overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={config?.backgroundImage || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=800&fit=crop"}
          alt=""
          className="w-full h-full object-cover opacity-5 dark:opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white to-white dark:via-gray-900 dark:to-gray-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Floating Elements */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">

          {/* Animated Badge */}
          {config?.badge && (
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 shadow-lg">
              <HiOutlineLightningBolt className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-xs md:text-sm font-medium">{config.badge}</span>
            </div>
          )}

          {/* Main Title with Gradient */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8">
            {config?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {config?.title?.highlight}
            </span>
          </h1>

          {config?.description && (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
              {config.description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {config?.primaryCta?.text && (
              <Link
                href={config.primaryCta.link || "/contact"}
                className="group bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
              >
                {config.primaryCta.text}
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            )}
            {config?.secondaryCta?.text && (
              <Link
                href={config.secondaryCta.link || "/demo"}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                {config.secondaryCta.text}
              </Link>
            )}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5 sm:-space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-linear-to-br from-blue-400 to-indigo-600 border-2 border-white dark:border-gray-800"
                  />
                ))}
              </div>
              <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{config?.trustText}</span>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <HiOutlineStar key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{config?.ratingText}</span>
            </div>
          </div>
        </div>

        {/* Main Dashboard Preview */}
        <div className="relative mb-24 sm:mb-28 md:mb-32">

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 md:-top-6 md:-left-6 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 md:-bottom-6 md:-right-6 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl" />

          {/* Dashboard Image */}
          <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white dark:border-gray-800">
            <img
              src={config?.dashboardImage || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop"}
              alt="Order Fulfillment Dashboard"
              className="w-full h-auto"
              loading="lazy"
            />

            {/* Floating Cards */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-xl border border-gray-200 dark:border-gray-700 animate-pulse">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-100 dark:bg-green-900/30 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Today's Fulfilled</p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">{config?.todayFulfilled || "1,247"}</p>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-xl border border-gray-200 dark:border-gray-700 animate-pulse delay-1000">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <HiOutlineClock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Avg. Fulfillment</p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">{config?.avgFulfillment || "2.4h"}</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:bottom-6 md:bottom-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 shadow-xl border border-gray-200 dark:border-gray-700 animate-pulse delay-2000">
              <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                {config?.liveStats?.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid with Icons */}
        {config?.features && config.features.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {config.features.map((feature) => (
              <div
                key={feature.id}
                className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                {/* Icon with Gradient */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  {getIcon(feature.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-white")}
                </div>

                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {feature.description}
                </p>

                {/* Feature List */}
                {feature.highlights && feature.highlights.length > 0 && (
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {feature.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={feature.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold text-[10px] sm:text-xs group/link"
                >
                  Learn more
                  <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                {/* Decorative Number */}
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 dark:text-gray-400 group-hover:text-blue-100 dark:group-hover:text-blue-900/30 transition-colors duration-300">
                  {String(feature.id).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Global Stats Section */}
        {config?.globalStats?.show && (
          <div className="bg-linear-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white mb-16 sm:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                  {config.globalStats.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
                  {config.globalStats.description}
                </p>
                <Link
                  href={config.globalStats.link || "/global"}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/20 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                >
                  {config.globalStats.buttonText}
                  <HiOutlineArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {config.globalStats.stats?.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Testimonials */}
        {config?.testimonials && config.testimonials.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {config.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-0.5 sm:gap-1 mt-3 sm:mt-4">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderFulfillmentSection3;