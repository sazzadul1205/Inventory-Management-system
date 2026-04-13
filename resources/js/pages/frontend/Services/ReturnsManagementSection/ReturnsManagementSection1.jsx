// page/frontend/Home/ReturnsManagementSection/ReturnsManagementSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import { GoPackage } from "react-icons/go";
import {
  HiOutlineRefresh,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineUser,
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCube,
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const ReturnsManagementSection1 = ({ config }) => {
  
  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'user':
        return <HiOutlineUser className={className} />;
      case 'package':
        return <GoPackage className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'cube':
        return <HiOutlineCube className={className} />;
      default:
        return <HiOutlineRefresh className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern - Return Arrows */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20 L40 20 L40 40 L20 40 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3Cpath d='M15 25 L20 20 L15 15' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-200 dark:bg-orange-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-yellow-200 dark:bg-yellow-900/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          {config?.badge && (
            <div className="inline-flex items-center bg-orange-50 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-orange-100 dark:border-gray-700">
              <HiOutlineRefresh className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 dark:text-orange-400 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium text-orange-700 dark:text-orange-300">
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
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Process Flow */}
        {config?.process?.show && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
              {config.process.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.process.steps?.map((step) => (
                <div key={step.id} className="relative">
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-gray-200 dark:border-gray-700 shadow-md">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full ${step.bgColor} flex items-center justify-center text-white font-bold text-base sm:text-lg`}>
                      {step.number}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1 sm:mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-orange-600 dark:text-orange-400 mt-1 sm:mt-2 font-medium">
                      {step.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">

          {/* Left Content - Returns Dashboard Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={config?.dashboardImage || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"}
                alt="Returns Management Dashboard"
                className="w-full h-auto"
                loading="lazy"
              />

              {/* Returns Stats Overlay */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <HiOutlineRefresh className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Today's Returns</p>
                    <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white">
                      {config?.todayReturns || "156"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Processing Status */}
              {config?.returnStats && config.returnStats.length > 0 && (
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 grid grid-cols-2 gap-2 sm:gap-3">
                  {config.returnStats.map((stat) => (
                    <div key={stat.id} className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 md:p-3 shadow-xl border border-gray-200 dark:border-gray-700">
                      <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400 mb-0.5 sm:mb-1">{stat.label}</p>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Floating Badge */}
            {config?.processingTime && (
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-orange-600 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg shadow-lg transform rotate-3">
                <p className="text-[8px] sm:text-[10px] md:text-sm font-semibold flex items-center gap-0.5 sm:gap-1">
                  <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4" />
                  {config.processingTime}
                </p>
              </div>
            )}
          </div>

          {/* Right Content - Returns Features */}
          <div className="space-y-6 sm:space-y-8">
            {config?.features?.title && (
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {config.features.title}
              </h3>
            )}

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {config?.features?.items?.map((feature) => (
                <div key={feature.id} className="flex gap-3 sm:gap-4 group">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${feature.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(feature.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white")}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
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
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {config.ctaText}
                  <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Returns Methods */}
        {config?.methods && config.methods.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20">
            {config.methods.map((method) => (
              <div
                key={method.id}
                className="group bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${method.bgColor} flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(method.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white")}
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 md:mb-3">
                  {method.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {method.description}
                </p>
                {method.timeframe && (
                  <div className="text-[10px] sm:text-xs font-medium text-orange-600 dark:text-orange-400">
                    {method.timeframe}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Inspection & Restocking */}
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">

          {/* Inspection */}
          {config?.inspection?.show && (
            <div className="bg-linear-to-br from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 border border-orange-100 dark:border-gray-700">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <HiOutlineCheckCircle className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                  {config.inspection.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                {config.inspection.description}
              </p>
              <div className="space-y-2 sm:space-y-3">
                {config.inspection.steps?.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-[8px] sm:text-[10px] font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Restocking */}
          {config?.restocking?.show && (
            <div className="bg-linear-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 border border-green-100 dark:border-gray-700">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-green-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <HiOutlineCube className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                  {config.restocking.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                {config.restocking.description}
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {config.restocking.stats?.map((stat, idx) => (
                  <div key={idx} className="text-center p-2 sm:p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <div className="text-xs sm:text-sm md:text-base font-bold text-green-600 dark:text-green-400">
                      {stat.value}
                    </div>
                    <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Benefits Grid */}
        {config?.benefits && config.benefits.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-16 sm:mb-20">
            {config.benefits.map((benefit) => (
              <div key={benefit.id} className="text-center">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto mb-1.5 sm:mb-2 md:mb-3 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  {getIcon(benefit.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-600 dark:text-orange-400")}
                </div>
                <div className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">
                  {benefit.value}
                </div>
                <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                  {benefit.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Banner */}
        {config?.footerCta?.show && (
          <div className="bg-linear-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 text-center text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
              {config.footerCta.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {config.footerCta.description}
            </p>
            <Link
              href={config.footerCta.link || "/contact"}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base"
            >
              {config.footerCta.buttonText}
              <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReturnsManagementSection1;