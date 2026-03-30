// page/frontend/HowItWorks/StepByStepProcessSection/StepByStepProcessSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineUserAdd,
  HiOutlineDatabase,
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineClock,
  HiOutlineTruck,
  HiOutlineQrcode,
  HiOutlineDocumentText,
  HiOutlineBell,
  HiOutlineChip
} from 'react-icons/hi';

const StepByStepProcessSection1 = ({ config }) => {
  const [activeStep, setActiveStep] = useState(0);

  // Icon mapping function
  const getStepIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'user':
        return <HiOutlineUserAdd className={`${className} text-blue-600 dark:text-blue-400`} aria-hidden="true" />;
      case 'database':
        return <HiOutlineDatabase className={`${className} text-blue-600 dark:text-blue-400`} aria-hidden="true" />;
      case 'sync':
        return <HiOutlineRefresh className={`${className} text-blue-600 dark:text-blue-400`} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={`${className} text-blue-600 dark:text-blue-400`} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={`${className} text-blue-600 dark:text-blue-400`} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={`${className} text-blue-600 dark:text-blue-400`} aria-hidden="true" />;
      case 'qrcode':
        return <HiOutlineQrcode className={`${className} text-blue-600 dark:text-blue-400`} aria-hidden="true" />;
      case 'document':
        return <HiOutlineDocumentText className={`${className} text-blue-600 dark:text-blue-400`} aria-hidden="true" />;
      case 'bell':
        return <HiOutlineBell className={`${className} text-blue-600 dark:text-blue-400`} aria-hidden="true" />;
      case 'chip':
        return <HiOutlineChip className={`${className} text-blue-600 dark:text-blue-400`} aria-hidden="true" />;
      default:
        return <HiOutlineUserAdd className={`${className} text-blue-600 dark:text-blue-400`} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Step by Step Process Section"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Process badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p
            className="text-xl text-gray-600 dark:text-gray-300"
            itemProp="description"
          >
            {config?.description}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {config?.steps?.map((step, index) => (
            <div
              key={step.id}
              className="group relative"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg z-10">
                {step.number}
              </div>

              {/* Step Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 pt-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getStepIcon(step.icon)}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                  itemProp="name"
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {step.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-2 mb-6">
                  {step.keyPoints?.slice(0, 2).map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Estimated Time */}
                {step.estimatedTime && (
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <HiOutlineClock className="w-4 h-4" />
                    <span>Estimated time: {step.estimatedTime}</span>
                  </div>
                )}
              </div>

              {/* Connector Line (desktop only) */}
              {index < config?.steps?.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-linear-to-r from-blue-300 to-transparent">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        {config?.showProgress && (
          <div className="mt-16">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between mb-2">
                {config?.steps?.map((step, index) => (
                  <div key={index} className="text-center flex-1">
                    <div className={`text-sm font-medium transition-colors duration-300 ${index <= activeStep ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'
                      }`}>
                      Step {step.number}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / (config?.steps?.length || 1)) * 100}%` }}
                 />
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                {activeStep >= 0 && config?.steps?.[activeStep]?.progressTip}
              </p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to get started?"}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className={`${config?.ctaButton?.backgroundColor} ${config?.ctaButton?.textColor} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2`}
                aria-label="Start your journey"
              >
                {config?.ctaButton?.text || "Get Started"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
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

export default StepByStepProcessSection1;