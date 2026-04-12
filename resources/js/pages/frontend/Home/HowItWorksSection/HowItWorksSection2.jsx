// page/frontend/Home/HowItWorksSection/HowItWorksSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// React Icons
import {
  HiArrowRight,
  HiOutlinePlay,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlinePause,
  HiOutlineUserAdd,
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineDatabase,
  HiOutlineCheckCircle,
} from 'react-icons/hi';

const HowItWorksSection2 = ({ config }) => {
  // State for active step
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (isPlaying && config?.steps?.length) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % config.steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, config?.steps?.length]);

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-current`;

    switch (iconName) {
      case 'user':
        return <HiOutlineUserAdd className={iconClasses} />;
      case 'database':
        return <HiOutlineDatabase className={iconClasses} />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} />;
      case 'check':
        return <HiOutlineCheckCircle className={iconClasses} />;
      default:
        return <HiOutlineUserAdd className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-blue-500/30">
              <HiOutlinePlay className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Interactive Steps */}
          <div className="space-y-6 sm:space-y-8">

            {/* Timeline/Progress Bar */}
            <div className="relative">
              <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div
                  className="h-full bg-linear-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / (config?.steps?.length || 1)) * 100}%` }}
                />
              </div>

              <div className="relative flex justify-between">
                {config?.steps?.map((step, index) => (
                  <button
                    key={step.id || index}
                    onClick={() => {
                      setActiveStep(index);
                      setIsPlaying(false);
                    }}
                    className={`relative flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 sm:p-2 ${activeStep === index ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                      }`}
                    aria-label={`Step ${index + 1}: ${step.title}`}
                  >
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-1 sm:mb-2 transition-all duration-300 ${activeStep === index
                        ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white scale-110 shadow-lg shadow-blue-500/30'
                        : 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600'
                        }`}
                    >
                      <span className="font-bold text-xs sm:text-sm">{index + 1}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium hidden sm:block">{step.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Step Content */}
            {config?.steps && config.steps[activeStep] && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">

                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    {getIcon(config.steps[activeStep].icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 dark:text-blue-400")}
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {config.steps[activeStep].title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      {config.steps[activeStep].description}
                    </p>

                    {/* Features */}
                    {config.steps[activeStep].features && (
                      <ul className="space-y-1.5 sm:space-y-2">
                        {config.steps[activeStep].features.map((feature, idx) => (
                          <li key={idx} className="flex items-center justify-center sm:justify-start text-xs sm:text-sm">
                            <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Duration */}
                    {config.steps[activeStep].duration && (
                      <div className="flex items-center justify-center sm:justify-start mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                        <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mr-1 sm:mr-2" />
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {config.steps[activeStep].duration}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev - 1 + (config?.steps?.length || 1)) % (config?.steps?.length || 1));
                    setIsPlaying(false);
                  }}
                  className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Previous step"
                >
                  <HiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                </button>

                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev + 1) % (config?.steps?.length || 1));
                    setIsPlaying(false);
                  }}
                  className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Next step"
                >
                  <HiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={isPlaying ? 'Pause auto-play' : 'Start auto-play'}
                >
                  {isPlaying ? (
                    <HiOutlinePause className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400" />
                  ) : (
                    <HiOutlinePlay className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400" />
                  )}
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {isPlaying ? 'Pause' : 'Auto'}
                  </span>
                </button>
              </div>

              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                {activeStep + 1} / {config?.steps?.length || 1}
              </span>
            </div>
          </div>

          {/* Right Side - Visual Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-4 sm:p-5 md:p-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                    Step {activeStep + 1}: {config?.steps?.[activeStep]?.title}
                  </div>
                </div>

                {/* Preview Content */}
                <div className="space-y-3 sm:space-y-4">
                  {config?.previewContent?.[activeStep]?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 ${item.bgColor} rounded-lg flex items-center justify-center mr-2 sm:mr-3 shrink-0`}>
                        {getIcon(item.icon, "w-4 h-4 sm:w-5 sm:h-5 text-white")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">{item.text}</p>
                        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">{item.subtext}</p>
                      </div>
                      {item.status && (
                        <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${item.statusColor} shrink-0 ml-2`}>
                          {item.status}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
                    <span>Progress</span>
                    <span>{Math.round(((activeStep + 1) / (config?.steps?.length || 1)) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-linear-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"
                      style={{ width: `${((activeStep + 1) / (config?.steps?.length || 1)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <HiOutlineRefresh className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Live Demo</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Interactive</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-purple-400 dark:bg-purple-600 rounded-full opacity-20 blur-xl" />
          </div>
        </div>

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorksSection2;