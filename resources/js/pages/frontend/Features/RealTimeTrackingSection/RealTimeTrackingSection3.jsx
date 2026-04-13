// page/frontend/Features/RealTimeTrackingSection/RealTimeTrackingSection3.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import { GoZap } from "react-icons/go";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineRefresh,
  HiOutlineDeviceMobile,
  HiOutlineMap,
  HiOutlineEye,
  HiOutlineChip,
  HiOutlineWifi,
  HiOutlineCloudUpload,
  HiOutlineShoppingBag,
  HiOutlineCloud,
  HiOutlineChat,
  HiOutlineChartBar as HiOutlineChartBar2,
  HiOutlineTrendingUp,
  HiOutlineCheckCircle,
  HiOutlineStar
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const RealTimeTrackingSection3 = ({ config }) => {
  // Icon mapping function for features
  const getFeatureIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} />;
      case 'map':
        return <HiOutlineMap className={className} />;
      case 'eye':
        return <HiOutlineEye className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'wifi':
        return <HiOutlineWifi className={className} />;
      case 'cloud':
        return <HiOutlineCloudUpload className={className} />;
      default:
        return <HiOutlineLocationMarker className={className} />;
    }
  };

  // Icon mapping function for integrations
  const getIntegrationIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'shopping-bag':
        return <HiOutlineShoppingBag className={className} />;
      case 'cloud':
        return <HiOutlineCloud className={className} />;
      case 'message':
        return <HiOutlineChat className={className} />;
      case 'zap':
        return <GoZap className={className} />;
      case 'bar-chart-2':
        return <HiOutlineChartBar2 className={className} />;
      case 'trending-up':
        return <HiOutlineTrendingUp className={className} />;
      default:
        return <HiOutlineCloud className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')] bg-size-[200px] pointer-events-none" />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Section Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Stats/Highlights Row */}
        {config?.stats && config.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-16">
            {config.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-5 md:p-6 bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Grid - Card Based */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {config?.features?.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 via-blue-600/0 to-blue-600/5 dark:from-blue-400/0 dark:via-blue-400/0 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-linear-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="p-5 sm:p-6 md:p-8">

                {/* Icon with animated background */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-600 dark:text-blue-400">
                      {getFeatureIcon(feature.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8")}
                    </div>
                  </div>
                </div>

                {/* Title with badge */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  {feature.isNew && (
                    <span className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-semibold bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                      New
                    </span>
                  )}
                  {feature.isPopular && (
                    <span className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-semibold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center gap-0.5">
                      <HiOutlineStar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Popular
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {feature.description}
                </p>

                {/* Key features list */}
                {feature.details && feature.details.length > 0 && (
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {feature.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} className="flex items-start text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 dark:text-green-400 mr-1.5 sm:mr-2 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* View more link */}
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group/link text-[10px] sm:text-xs"
                >
                  <span>Learn more</span>
                  <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-tl from-blue-500/5 to-transparent rounded-tl-full pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Integration Partners Section */}
        {config?.showIntegrations && (
          <div className="mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {config?.integrationsTitle || "Works with your favorite tools"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {config?.integrationsDescription || "Seamlessly integrate with your existing software ecosystem"}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
              {config?.integrations?.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="text-blue-600 dark:text-blue-400 mb-1 sm:mb-2 opacity-70 group-hover:opacity-100 transition-opacity flex justify-center">
                      {getIntegrationIcon(integration.icon, "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8")}
                    </div>
                    <div className="text-[8px] sm:text-[10px] text-gray-600 dark:text-gray-400 font-medium">
                      {integration.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-16 sm:mt-20">
            <div className="relative bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[50px_50px]" />
              <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent" />

              <div className="relative px-6 sm:px-8 py-8 sm:py-10 md:px-12 md:py-16 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  {config?.ctaTitle || "Ready to transform your tracking experience?"}
                </h3>
                <p className="text-blue-100 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
                  {config?.ctaDescription || "Join thousands of businesses that trust our real-time tracking solution"}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href={config?.ctaPrimaryLink || "/demo"}
                    className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                  >
                    {config?.ctaButton?.primaryText || "Start Free Trial"}
                    <HiOutlineArrowRight />
                  </Link>
                  <Link
                    href={config?.ctaSecondaryLink || "/contact"}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                  >
                    {config?.ctaButton?.secondaryText || "Contact Sales"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RealTimeTrackingSection3;