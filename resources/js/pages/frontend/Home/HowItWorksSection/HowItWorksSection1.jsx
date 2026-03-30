// page/frontend/Home/HowItWorksSection/HowItWorksSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineClipboardCheck,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineUserCircle,
  HiArrowRight,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const HowItWorksSection1 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-blue-600 dark:text-blue-400 group-hover:text-white group-hover:dark:text-white transition-all duration-300`;

    switch (iconName) {
      case 'clipboard':
        return <HiOutlineClipboardCheck className={iconClasses} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      case 'document':
        return <HiOutlineDocumentText className={iconClasses} aria-hidden="true" />;
      case 'user':
        return <HiOutlineUserCircle className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineClipboardCheck className={iconClasses} aria-hidden="true" />;
    }
  };

  // Get button icon
  const getButtonIcon = (iconName) => {
    switch (iconName) {
      case 'arrowRight':
        return <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="How it works section"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Background Pattern - decorative */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Gradient Orbs - decorative */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="How it works badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <span className={`text-sm font-medium ${config.badge.textColor}`}>
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.heading?.prefix}{' '}
            <span className={`${config?.heading?.highlightColor} relative inline-block`}>
              {config?.heading?.highlightedText}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                aria-hidden="true"
              >
                <line
                  x1="0" y1="4" x2="200" y2="4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  className={config?.heading?.highlightColor}
                />
              </svg>
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p
              className="text-lg text-gray-600 dark:text-gray-400"
              itemProp="description"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Steps Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Process steps"
        >
          {config?.steps?.map((step, index) => (
            <div
              key={step.id || index}
              className="relative group"
              itemProp="step"
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              {/* Step Number - Large Background */}
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-gray-100 dark:text-gray-800/30 select-none z-0">
                {step.number || index + 1}
              </div>

              {/* Step Card */}
              <div className="relative z-10 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                  {getIcon(step.icon)}
                </div>

                {/* Step Number - Small Badge */}
                <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-bold text-sm mb-4">
                  {step.number || index + 1}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
                  itemProp="name"
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 dark:text-gray-400 mb-4"
                  itemProp="text"
                >
                  {step.description}
                </p>

                {/* Optional Duration */}
                {step.duration && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <HiOutlineClock className="w-4 h-4 mr-1" aria-hidden="true" />
                    <span>{step.duration}</span>
                  </div>
                )}
              </div>

              {/* Connector Line (except for last item) */}
              {index < config.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <svg
                    className="w-8 h-8 text-blue-300 dark:text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
        {config?.bottomCta?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              {getButtonIcon(config.bottomCta.icon)}
            </Link>
          </div>
        )}

        {/* Features/Highlights */}
        {config?.highlights?.show && (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-12 border-t border-gray-200 dark:border-gray-800"
            aria-label="Key highlights"
          >
            {config.highlights.items.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <HiOutlineCheckCircle className="w-6 h-6 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection1;