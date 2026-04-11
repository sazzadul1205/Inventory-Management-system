// page/frontend/Home/FeaturesSection/FeaturesSection3.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiOutlineKey,
  HiArrowRight,
  HiOutlineCog,
  HiOutlineStar,
  HiOutlineCube,
  HiOutlineFlag,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineTruck,
  HiOutlineScale,
  HiOutlineHeart,
  HiOutlineSearch,
  HiOutlineRefresh,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineTemplate,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineLightningBolt,
  HiOutlineLocationMarker,
} from 'react-icons/hi';

const FeaturesSection3 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-5 h-5") => {
    const iconClasses = `${className} text-current`;

    switch (iconName) {
      case 'cube': return <HiOutlineCube className={iconClasses} />;
      case 'truck': return <HiOutlineTruck className={iconClasses} />;
      case 'chart': return <HiOutlineChartBar className={iconClasses} />;
      case 'shield': return <HiOutlineShieldCheck className={iconClasses} />;
      case 'clock': return <HiOutlineClock className={iconClasses} />;
      case 'globe': return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'document': return <HiOutlineDocumentText className={iconClasses} />;
      case 'users': return <HiOutlineUsers className={iconClasses} />;
      case 'cog': return <HiOutlineCog className={iconClasses} />;
      case 'lightning': return <HiOutlineLightningBolt className={iconClasses} />;
      case 'search': return <HiOutlineSearch className={iconClasses} />;
      case 'refresh': return <HiOutlineRefresh className={iconClasses} />;
      case 'template': return <HiOutlineTemplate className={iconClasses} />;
      case 'scale': return <HiOutlineScale className={iconClasses} />;
      case 'key': return <HiOutlineKey className={iconClasses} />;
      case 'location': return <HiOutlineLocationMarker className={iconClasses} />;
      case 'flag': return <HiOutlineFlag className={iconClasses} />;
      case 'star': return <HiOutlineStar className={iconClasses} />;
      case 'heart': return <HiOutlineHeart className={iconClasses} />;
      case 'check': return <HiOutlineCheckCircle className={`${className} text-green-500`} />;
      default: return <HiOutlineCube className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#9ca3af_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,#4b5563_1px,transparent_0)] bg-size-[40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge with Icon */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-lg shadow-blue-500/30">
              {getIcon(config?.badge?.icon || 'star', "w-3 h-3 sm:w-4 sm:h-4")}
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Features Grid - 3 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {config?.features?.map((feature, index) => (
            <div
              key={feature.id || index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${feature.accentColor || 'bg-linear-to-r from-blue-500 to-purple-500'} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

              {/* Icon Container */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${feature.iconBg || 'bg-blue-100 dark:bg-blue-900/30'} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {getIcon(feature.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7")}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                {feature.description}
              </p>

              {/* Feature Tags */}
              {feature.tags && feature.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {feature.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 ${tag.bgColor || 'bg-gray-100 dark:bg-gray-700'} ${tag.textColor || 'text-gray-600 dark:text-gray-400'} rounded-full font-medium`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              )}

              {/* Feature Stats */}
              {feature.stats && feature.stats.length > 0 && (
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-700">
                  {feature.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Feature List */}
              {feature.list && feature.list.length > 0 && (
                <ul className="space-y-1.5 sm:space-y-2 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-700">
                  {feature.list.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm">
                      <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">{item.text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Learn More Link */}
              {feature.link && (
                <Link
                  href={feature.link}
                  className={`inline-flex items-center mt-4 sm:mt-6 text-xs sm:text-sm font-semibold ${feature.linkColor || 'text-blue-600 dark:text-blue-400'} hover:opacity-80 transition-opacity group/link`}
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <span>Learn more</span>
                  <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Feature Highlight */}
        {config?.bottomHighlight?.show && (
          <div className="mt-12 sm:mt-16 md:mt-20 relative">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="relative px-6 sm:px-8 py-8 sm:py-12 md:py-16 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
                  {config.bottomHighlight.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  {config.bottomHighlight.description}
                </p>
                <Link
                  href={config.bottomHighlight.buttonUrl}
                  className="inline-flex items-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl group text-sm sm:text-base"
                  aria-label={config.bottomHighlight.buttonText}
                >
                  <span>{config.bottomHighlight.buttonText}</span>
                  <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection3;