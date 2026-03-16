// page/frontend/Home/HowItWorksSection/HowItWorksSection3.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineUserCircle,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineChartPie,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineArrowNarrowRight,
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText
} from 'react-icons/hi';

const HowItWorksSection3 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className} text-current`;

    switch (iconName) {
      case 'user':
        return <HiOutlineUserCircle className={iconClasses} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartPie className={iconClasses} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      case 'sparkles':
        return <HiOutlineSparkles className={iconClasses} aria-hidden="true" />;
      case 'lightning':
        return <HiOutlineLightningBolt className={iconClasses} aria-hidden="true" />;
      case 'shield':
        return <HiOutlineShieldCheck className={iconClasses} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'document':
        return <HiOutlineDocumentText className={iconClasses} aria-hidden="true" />;
      case 'check':
        return <HiOutlineCheckCircle className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="How it works section"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Background Pattern - Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge with Icon */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-4 py-2 mb-6 shadow-lg shadow-amber-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "JOURNEY MAP"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                {config?.heading?.highlightedText}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 0L300 12"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
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

        {/* Main Content - Vertical Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-amber-500 via-pink-500 to-purple-500 rounded-full hidden lg:block" aria-hidden="true"></div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {config?.steps?.map((step, index) => (
              <div
                key={step.id || index}
                className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
                itemProp="step"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                {/* Content Side */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                    {/* Step Number Badge */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-r ${step.badgeColor} text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
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

                    {/* Feature List */}
                    {step.features && step.features.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Metrics */}
                    {step.metrics && (
                      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        {step.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className={`text-xl font-bold bg-linear-to-r ${metric.color} bg-clip-text text-transparent`}>
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">
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
                  <div className={`w-16 h-16 rounded-full bg-linear-to-r ${step.markerColor} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(step.icon, "w-8 h-8 text-white")}
                  </div>
                </div>

                {/* Image/Illustration Side */}
                <div className="flex-1">
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />

                      {/* Overlay Gradient */}
                      <div className={`absolute inset-0 bg-linear-to-tr ${step.overlayColor} opacity-20`} aria-hidden="true"></div>

                      {/* Floating Card */}
                      {step.floatingCard && (
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/20 dark:border-gray-700">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${step.floatingCard.bgColor} rounded-lg flex items-center justify-center`}>
                              {getIcon(step.floatingCard.icon, "w-5 h-5 text-white")}
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {step.floatingCard.label}
                              </p>
                              <p className="text-sm font-bold text-gray-900 dark:text-white">
                                {step.floatingCard.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-400 dark:bg-amber-600 rounded-full opacity-20 blur-2xl" aria-hidden="true"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-400 dark:bg-pink-600 rounded-full opacity-20 blur-2xl" aria-hidden="true"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Cards */}
        {config?.bottomCards && config.bottomCards.length > 0 && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.bottomCards.map((card, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  {getIcon(card.icon, "w-6 h-6 text-white")}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              <span>{config.bottomCta.text}</span>
              <HiOutlineArrowNarrowRight className="ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #9ca3af 1px, transparent 0);
          background-size: 40px 40px;
        }
        .dark .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #4b5563 1px, transparent 0);
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection3;