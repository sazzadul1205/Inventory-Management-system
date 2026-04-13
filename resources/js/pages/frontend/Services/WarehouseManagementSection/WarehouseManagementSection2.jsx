// page/frontend/Home/WarehouseManagementSection/WarehouseManagementSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineCube,
  HiOutlineLocationMarker,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineRefresh,
  HiOutlineSearch,
  HiOutlineDocumentReport,
  HiArrowRight,
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineTrendingUp,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const WarehouseManagementSection2 = ({ config }) => {

  // State for active feature
  const [activeFeature, setActiveFeature] = useState(config?.features?.[0]?.id || 1);

  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'cube':
        return <HiOutlineCube className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'search':
        return <HiOutlineSearch className={className} />;
      case 'report':
        return <HiOutlineDocumentReport className={className} />;
      case 'users':
        return <HiOutlineUserGroup className={className} />;
      case 'cog':
        return <HiOutlineCog className={className} />;
      case 'trending':
        return <HiOutlineTrendingUp className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      default:
        return <HiOutlineCube className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-64 sm:h-80 md:h-96 bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-900/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="max-w-2xl">
            {config?.badge && (
              <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {config.badge}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 sm:mt-3 md:mt-4">
              {config?.title}
            </h2>
            {config?.description && (
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 md:mt-6">
                {config.description}
              </p>
            )}
          </div>
          {config?.ctaText && (
            <Link
              href={config?.ctaLink || "/contact"}
              className="group inline-flex items-center gap-1.5 sm:gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 shrink-0 text-sm sm:text-base"
            >
              <span>{config.ctaText}</span>
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Main Content - Interactive Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">

          {/* Left Side - Feature Tabs */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {config?.features?.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl transition-all duration-300 ${activeFeature === feature.id
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/25 scale-[1.02]'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-md'
                  }`}
                aria-label={`View ${feature.title} details`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${activeFeature === feature.id
                    ? 'bg-white/20'
                    : 'bg-blue-100 dark:bg-gray-700'
                    } flex items-center justify-center shrink-0`}>
                    {getIcon(feature.icon, `w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 ${activeFeature === feature.id
                      ? 'text-white'
                      : 'text-blue-600 dark:text-blue-400'
                      }`)}
                  </div>
                  <div>
                    <h3 className={`text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 ${activeFeature === feature.id
                      ? 'text-white'
                      : 'text-gray-900 dark:text-white'
                      }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-xs sm:text-sm ${activeFeature === feature.id
                      ? 'text-blue-100'
                      : 'text-gray-600 dark:text-gray-400'
                      }`}>
                      {feature.shortDesc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Active Feature Details */}
          <div className="lg:sticky lg:top-24">
            {config?.features?.map((feature) => (
              feature.id === activeFeature && (
                <div
                  key={feature.id}
                  className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl"
                >
                  {/* Feature Image */}
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden mb-5 sm:mb-6 md:mb-8">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    {feature.badge && (
                      <div className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${feature.badgeColor}`}>
                        {feature.badge}
                      </div>
                    )}
                  </div>

                  {/* Feature Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 md:mb-8">
                    {feature.description}
                  </p>

                  {/* Feature Benefits */}
                  {feature.benefits && feature.benefits.length > 0 && (
                    <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-5 sm:mb-6 md:mb-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Key Benefits:</h4>
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                          <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Feature Stats */}
                  {feature.stats && feature.stats.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-5 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                      {feature.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                            {stat.value}
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Feature Link */}
                  <div className="mt-4 sm:mt-5 md:mt-6">
                    <Link
                      href={feature.link}
                      className="inline-flex items-center gap-1.5 sm:gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-2 sm:hover:gap-3 transition-all duration-300 text-xs sm:text-sm"
                    >
                      Learn more about {feature.title}
                      <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Integration Partners */}
        {config?.integrations?.show && (
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 sm:mb-6">
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

        {/* ROI Calculator Preview */}
        {config?.roi?.show && (
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.roi.title}
                </h3>
                <p className="text-blue-100 text-sm sm:text-base mb-4 sm:mb-5 md:mb-6">
                  {config.roi.description}
                </p>
                <Link
                  href={config.roi.link}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-blue-600 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base"
                >
                  {config.roi.buttonText}
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {config.roi.stats?.map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-blue-100">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WarehouseManagementSection2;