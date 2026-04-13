// page/frontend/Home/OrderFulfillmentSection/OrderFulfillmentSection1.jsx

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
  HiArrowRight,
  HiOutlineCash,
  HiOutlineDeviceMobile
} from 'react-icons/hi';

const OrderFulfillmentSection1 = ({ config }) => {
  
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
      default:
        return <GoPackage className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern - Shipping Themed */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 40 L30 55 L5 40 L5 20 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          {config?.badge && (
            <div className="inline-flex items-center bg-green-50 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-green-100 dark:border-gray-700">
              <GoPackage className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium text-green-700 dark:text-green-300">
                {config.badge}
              </span>
            </div>
          )}

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title}
          </h2>

          {config?.description && (
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Stats Bar */}
        {config?.stats && config.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-16">
            {config.stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-400 mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">

          {/* Left Content - Process Flow */}
          <div className="space-y-6 sm:space-y-8">
            {config?.process?.title && (
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {config.process.title}
              </h3>
            )}

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {config?.process?.steps?.map((step, index) => (
                <div key={step.id} className="flex gap-3 sm:gap-4">
                  <div className="relative">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full ${step.bgColor} flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg`}>
                      {index + 1}
                    </div>
                    {index < (config.process.steps?.length || 0) - 1 && (
                      <div className="absolute top-10 sm:top-11 md:top-12 left-4 sm:left-5 md:left-6 w-0.5 h-8 sm:h-10 md:h-12 bg-gray-200 dark:bg-gray-700" />
                    )}
                  </div>
                  <div className="flex-1 pb-4 sm:pb-5 md:pb-6">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {config?.ctaText && (
              <div className="pt-2 sm:pt-4">
                <Link
                  href={config?.ctaLink || "/contact"}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-600 hover:bg-green-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {config.ctaText}
                  <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            )}
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={config?.dashboardImage || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"}
                alt="Order Fulfillment Dashboard"
                className="w-full h-auto"
                loading="lazy"
              />

              {/* Overlay Stats Cards */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <HiOutlineClock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Avg. Fulfillment Time</p>
                    <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white">{config?.avgFulfillmentTime || "2.4h"}</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 grid grid-cols-2 gap-2 sm:gap-3">
                {config?.orderStats?.map((stat) => (
                  <div key={stat.id} className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 md:p-3 shadow-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400 mb-0.5 sm:mb-1">{stat.label}</p>
                    <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Icon */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 md:-bottom-6 md:-left-6 bg-green-600 rounded-full p-2.5 sm:p-3 md:p-4 shadow-xl animate-pulse">
              <GoPackage className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        {config?.features && config.features.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20">
            {config.features.map((feature) => (
              <div
                key={feature.id}
                className="group bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-600 dark:hover:border-green-500"
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${feature.bgColor} flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(feature.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white")}
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {feature.description}
                </p>
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold hover:gap-2 transition-all duration-300 text-[10px] sm:text-xs"
                >
                  <span>Learn more</span>
                  <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5 opacity-0 group-hover:opacity-100 group-hover:ml-1.5 transition-all" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Integration Partners */}
        {config?.integrations?.show && (
          <div className="text-center">
            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5 sm:mb-6 md:mb-8">
              {config.integrations.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6 md:gap-8 lg:gap-12">
              {config.integrations.partners?.map((partner, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-gray-400 dark:text-gray-600">
                  {getIcon(partner.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8")}
                  <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-300">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderFulfillmentSection1;