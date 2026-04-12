// page/frontend/Home/HowItWorksSection/HowItWorksSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiArrowRight,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineUserCircle,
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlineClipboardCheck,
} from 'react-icons/hi';

const HowItWorksSection1 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-white group-hover:text-white group-hover:dark:text-white transition-all duration-300`;

    switch (iconName) {
      case 'clipboard':
        return <HiOutlineClipboardCheck className={iconClasses} />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} />;
      case 'document':
        return <HiOutlineDocumentText className={iconClasses} />;
      case 'user':
        return <HiOutlineUserCircle className={iconClasses} />;
      default:
        return <HiOutlineClipboardCheck className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-blue-600 dark:text-blue-400 relative inline-block">
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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {config?.steps?.map((step, index) => (
            <div key={step.id || index} className="relative group ">

              {/* Step Number - Large Background */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 text-6xl sm:text-7xl md:text-8xl font-bold text-gray-100 dark:text-gray-800/30 select-none">
                {step.number || index + 1}
              </div>

              {/* Step Card - Fixed Height */}
              <div className="relative bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full min-h-80 sm:min-h-90 md:min-h-100 flex flex-col">

                {/* Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30 shrink-0">
                  {getIcon(step.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7")}
                </div>

                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-bold text-xs sm:text-sm mb-3 sm:mb-4 shrink-0">
                  {step.number || index + 1}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {step.title}
                </h3>

                {/* Description - Flexible */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 grow">
                  {step.description}
                </p>

                {/* Duration - Always at bottom */}
                {step.duration && (
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 shrink-0">
                    <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span>{step.duration}</span>
                  </div>
                )}

                {/* Placeholder to maintain consistent height when duration is missing */}
                {!step.duration && (
                  <div className="h-0 sm:h-0 md:h-0 mt-3 sm:mt-4 pt-3 sm:pt-4 shrink-0 opacity-0 pointer-events-none">
                    <div className="flex items-center text-xs sm:text-sm">
                      <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span>&nbsp;</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Connector Line */}
              {index < (config.steps?.length || 0) - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-300 dark:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Highlights */}
        {config?.highlights?.show && config?.highlights?.items && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-gray-200 dark:border-gray-800">
            {config.highlights.items.map((item, index) => (
              <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                <HiOutlineCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 dark:text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-0.5 sm:mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorksSection1;