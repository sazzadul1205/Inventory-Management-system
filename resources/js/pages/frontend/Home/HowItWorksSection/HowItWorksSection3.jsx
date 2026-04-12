// page/frontend/Home/HowItWorksSection/HowItWorksSection3.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineChartPie,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText,
  HiOutlineUserCircle,
  HiOutlineCheckCircle,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';

const HowItWorksSection3 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className} text-current`;

    switch (iconName) {
      case 'user':
        return <HiOutlineUserCircle className={iconClasses} />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      case 'chart':
        return <HiOutlineChartPie className={iconClasses} />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} />;
      case 'sparkles':
        return <HiOutlineSparkles className={iconClasses} />;
      case 'lightning':
        return <HiOutlineLightningBolt className={iconClasses} />;
      case 'shield':
        return <HiOutlineShieldCheck className={iconClasses} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'document':
        return <HiOutlineDocumentText className={iconClasses} />;
      case 'check':
        return <HiOutlineCheckCircle className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
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

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-lg shadow-amber-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
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

        {/* Main Content - Vertical Timeline */}
        <div className="relative">

          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-amber-500 via-pink-500 to-purple-500 rounded-full hidden lg:block" />

          {/* Steps */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {config?.steps?.map((step, index) => (
              <div
                key={step.id || index}
                className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-8 lg:gap-16`}
              >

                {/* Content Side */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">

                    {/* Step Number Badge */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-r ${step.badgeColor || 'from-amber-500 to-pink-500'} text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {step.number || index + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      {step.description}
                    </p>

                    {/* Feature List */}
                    {step.features && step.features.length > 0 && (
                      <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs sm:text-sm">
                            <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Metrics */}
                    {step.metrics && step.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                        {step.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className={`text-base sm:text-lg md:text-xl font-bold bg-linear-to-r ${metric.color || 'from-amber-500 to-pink-500'} bg-clip-text text-transparent`}>
                              {metric.value}
                            </div>
                            <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Marker */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-linear-to-r ${step.markerColor || 'from-amber-500 to-pink-500'} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(step.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white")}
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-linear-to-tr ${step.overlayColor || 'from-amber-500/20 to-pink-500/20'}`} />

                      {/* Floating Card */}
                      {step.floatingCard && (
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl border border-white/20 dark:border-gray-700">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 ${step.floatingCard.bgColor || 'bg-amber-600'} rounded-lg flex items-center justify-center`}>
                              {getIcon(step.floatingCard.icon, "w-4 h-4 sm:w-5 sm:h-5 text-white")}
                            </div>
                            <div>
                              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                                {step.floatingCard.label}
                              </p>
                              <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                                {step.floatingCard.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-amber-400 dark:bg-amber-600 rounded-full opacity-20 blur-xl" />
                    <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-pink-400 dark:bg-pink-600 rounded-full opacity-20 blur-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Cards */}
        {config?.bottomCards && config.bottomCards.length > 0 && (
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {config.bottomCards.map((card, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${card.iconBg || 'bg-linear-to-r from-amber-500 to-pink-500'} rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
                  {getIcon(card.icon, "w-5 h-5 sm:w-6 sm:h-6 text-white")}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-linear-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              <span>{config.bottomCta.text}</span>
              <HiOutlineArrowNarrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorksSection3;