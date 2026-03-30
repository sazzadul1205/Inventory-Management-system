// page/frontend/Home/HowItWorksSection/HowItWorksSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineUserAdd,
  HiOutlineDatabase,
  HiOutlineTruck,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineRefresh,
  HiArrowRight
} from 'react-icons/hi';

const HowItWorksSection2 = ({ config }) => {
  // State for active step (for interactive demo)
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-current`;

    switch (iconName) {
      case 'user':
        return <HiOutlineUserAdd className={iconClasses} aria-hidden="true" />;
      case 'database':
        return <HiOutlineDatabase className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      case 'check':
        return <HiOutlineCheckCircle className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineUserAdd className={iconClasses} aria-hidden="true" />;
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

  // Auto-play effect
  const startAutoPlay = () => {
    setIsPlaying(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (config?.steps?.length || 4));
    }, 3000);
    return () => clearInterval(interval);
  };

  const stopAutoPlay = () => {
    setIsPlaying(false);
  };

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="How it works section"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-blue-500/30">
            <HiOutlinePlay className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "HOW IT WORKS"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            itemProp="name"
          >
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-600 dark:text-gray-400"
            itemProp="description"
          >
            {config?.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Interactive Steps */}
          <div className="space-y-8">
            {/* Timeline/Progress Bar */}
            <div className="relative">
              <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div
                  className="h-full bg-linear-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / (config?.steps?.length || 4)) * 100}%` }}
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
                    className={`relative flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2 ${activeStep === index ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                      }`}
                    aria-label={`Step ${index + 1}: ${step.title}`}
                    aria-current={activeStep === index ? 'step' : undefined}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${activeStep === index
                          ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white scale-110 shadow-lg shadow-blue-500/30'
                          : 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'
                        }`}
                    >
                      <span className="font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-xs font-medium hidden sm:block">{step.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Step Content */}
            {config?.steps && config.steps[activeStep] && (
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in"
                itemProp="step"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center shrink-0">
                    {getIcon(config.steps[activeStep].icon, "w-8 h-8 text-blue-600 dark:text-blue-400")}
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                      itemProp="name"
                    >
                      {config.steps[activeStep].title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-gray-600 dark:text-gray-400 mb-4"
                      itemProp="text"
                    >
                      {config.steps[activeStep].description}
                    </p>

                    {/* Features/Checklist */}
                    {config.steps[activeStep].features && (
                      <ul className="space-y-2">
                        {config.steps[activeStep].features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Time Estimate */}
                    {config.steps[activeStep].duration && (
                      <div className="flex items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <HiOutlineClock className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {config.steps[activeStep].duration}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev - 1 + (config?.steps?.length || 4)) % (config?.steps?.length || 4));
                    setIsPlaying(false);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Previous step"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev + 1) % (config?.steps?.length || 4));
                    setIsPlaying(false);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Next step"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    if (isPlaying) {
                      stopAutoPlay();
                    } else {
                      startAutoPlay();
                    }
                  }}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={isPlaying ? 'Pause auto-play' : 'Start auto-play'}
                >
                  {isPlaying ? (
                    <HiOutlinePause className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  ) : (
                    <HiOutlinePlay className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {isPlaying ? 'Pause' : 'Auto-play'}
                  </span>
                </button>
              </div>

              <span className="text-sm text-gray-500 dark:text-gray-500">
                Step {activeStep + 1} of {config?.steps?.length || 4}
              </span>
            </div>
          </div>

          {/* Right Side - Visual Preview */}
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
              {/* Dashboard Mockup */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Step {activeStep + 1}: {config?.steps?.[activeStep]?.title}
                  </div>
                </div>

                {/* Dynamic Preview Content */}
                <div className="space-y-4">
                  {config?.previewContent?.[activeStep]?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg animate-slide-in"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                        {getIcon(item.icon, "w-5 h-5 text-white")}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{item.text}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.subtext}</p>
                      </div>
                      {item.status && (
                        <span className={`text-xs px-2 py-1 rounded-full ${item.statusColor}`}>
                          {item.status}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>Overall Progress</span>
                    <span>{Math.round(((activeStep + 1) / (config?.steps?.length || 4)) * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-linear-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"
                      style={{ width: `${((activeStep + 1) / (config?.steps?.length || 4)) * 100}%` }}
                     />
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 animate-float">
                <div className="flex items-center space-x-3">
                  <HiOutlineRefresh className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin-slow" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Live Demo</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Interactive</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-400 dark:bg-purple-600 rounded-full opacity-20 blur-2xl" aria-hidden="true" />
          </div>
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
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out forwards; opacity: 0; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        .animate-spin-slow { animation: spin 3s linear infinite; }
        
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection2;