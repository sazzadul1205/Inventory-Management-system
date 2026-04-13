// page/frontend/Features/AutomatedReorderingSection/AutomatedReorderingSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineChip,
  HiOutlineDatabase,
  HiOutlineLightBulb,
  HiOutlineTrendingUp,
  HiOutlineShoppingCart,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineShoppingBag,
  HiOutlineOfficeBuilding,
  HiOutlineCube,
  HiOutlineGlobeAlt,
  HiOutlineCash
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const AutomatedReorderingSection3 = ({ config }) => {

  // State for active integration
  const [activeIntegration, setActiveIntegration] = useState(0);

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'bulb':
        return <HiOutlineLightBulb className={className} />;
      case 'trending':
        return <HiOutlineTrendingUp className={className} />;
      case 'cart':
        return <HiOutlineShoppingCart className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} />;
      case 'users':
        return <HiOutlineUserGroup className={className} />;
      case 'cog':
        return <HiOutlineCog className={className} />;
      case 'cloud':
        return <HiOutlineCloud className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      default:
        return <HiOutlineRefresh className={className} />;
    }
  };

  // Integration icon mapping
  const getIntegrationIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'shopping-bag':
        return <HiOutlineShoppingBag className={className} />;
      case 'shopping-cart':
        return <HiOutlineShoppingCart className={className} />;
      case 'cube':
        return <HiOutlineCube className={className} />;
      case 'building':
        return <HiOutlineOfficeBuilding className={className} />;
      case 'cloud':
        return <HiOutlineCloud className={className} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={className} />;
      case 'cash':
        return <HiOutlineCash className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      default:
        return <HiOutlineShoppingBag className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')] bg-size-[200px] pointer-events-none" />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-green-50/50 to-transparent dark:from-green-900/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-emerald-50/50 to-transparent dark:from-emerald-900/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Section Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-green-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-green-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-green-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Grid - Enhanced Card Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
          {config?.features?.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-green-600/0 via-green-600/0 to-green-600/5 dark:from-green-400/0 dark:via-green-400/0 dark:to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-linear-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="p-5 sm:p-6 md:p-8">

                {/* Icon with animated background */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-green-500/10 dark:bg-green-400/10 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-green-600 dark:text-green-400">
                      {getFeatureIcon(feature.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8")}
                    </div>
                  </div>
                </div>

                {/* Title with badges */}
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

                {/* Metrics display */}
                {feature.metrics && feature.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm sm:text-base md:text-lg font-bold text-green-600 dark:text-green-400">
                          {metric.value}
                        </div>
                        <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* View more link */}
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors duration-300 group/link text-[10px] sm:text-xs"
                >
                  <span>Learn more</span>
                  <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-tl from-green-500/5 to-transparent rounded-tl-full pointer-events-none" />
            </div>
          ))}
        </div>

        {/* AI Insights Section */}
        {config?.showAIInsights && config?.aiInsights && (
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {config?.aiInsightsTitle || "AI-Powered Business Insights"}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {config?.aiInsightsDescription || "Get actionable recommendations to optimize your inventory"}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {config.aiInsights.map((insight, index) => (
                <div key={index} className="relative bg-linear-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 border border-green-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                      {getFeatureIcon(insight.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400")}
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {insight.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                      {insight.description}
                    </p>
                    <div className="text-[10px] sm:text-xs font-semibold text-green-600 dark:text-green-400">
                      {insight.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Integration Partners Section */}
        {config?.showIntegrations && config?.integrationCategories && (
          <div className="mb-16 sm:mb-20 pt-8 sm:pt-12 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {config?.integrationsTitle || "Seamless Platform Integration"}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {config?.integrationsDescription || "Connect with your existing business ecosystem"}
              </p>
            </div>

            {/* Tabs for integration categories */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {config.integrationCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIntegration(index)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-300 ${activeIntegration === index
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {config?.integrations?.[activeIntegration]?.items?.map((integration, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="text-green-600 dark:text-green-400 mb-2 sm:mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    {getIntegrationIcon(integration.icon, "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8")}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-700 dark:text-gray-300 font-medium text-center">
                    {integration.name}
                  </div>
                  <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1">
                    {integration.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROI Calculator Section */}
        {config?.showROICalculator && (
          <div className="mb-16 sm:mb-20">
            <div className="bg-linear-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
              <div className="px-5 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:px-12 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="text-white">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                      {config?.roiTitle || "Calculate Your ROI"}
                    </h3>
                    <p className="text-green-100 text-sm sm:text-base mb-4 sm:mb-6">
                      {config?.roiDescription || "See how much you can save with automated reordering"}
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Reduce inventory costs by 20-30%</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Eliminate stock Outs by up to 95%</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Save 20+ hours weekly on manual tasks</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-xl">
                    <div className="text-center mb-3 sm:mb-4">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">
                        {config?.roiExample || "Up to 3x ROI"}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        in the first year
                      </div>
                    </div>
                    <Link
                      href={config?.roiLink || "/calculator"}
                      className="block w-full text-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                    >
                      Calculate Your Savings
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl">
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to transform your inventory management?"}
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Link
                  href={config?.ctaPrimaryLink || "/trial"}
                  className="bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-5 sm:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-1.5 sm:gap-2 text-white text-sm sm:text-base"
                >
                  {config?.ctaButton?.primaryText || "Start Free Trial"}
                  <HiOutlineArrowRight />
                </Link>
                <Link
                  href={config?.ctaSecondaryLink || "/demo"}
                  className="px-5 sm:px-6 py-2 sm:py-2.5 md:py-3 bg-transparent border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 font-semibold rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                >
                  {config?.ctaButton?.secondaryText || "Watch Demo"}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AutomatedReorderingSection3;