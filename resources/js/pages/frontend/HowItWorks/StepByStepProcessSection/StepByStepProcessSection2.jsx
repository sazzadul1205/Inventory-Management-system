// page/frontend/HowItWorks/StepByStepProcessSection/StepByStepProcessSection2.jsx

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
  HiOutlineChip,
  HiOutlinePlay,
  HiOutlineCode,
  HiOutlineSparkles
} from 'react-icons/hi';

const StepByStepProcessSection2 = ({ config }) => {
  const [expandedStep, setExpandedStep] = useState(1);

  // Icon mapping function
  const getStepIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'user':
        return <HiOutlineUserAdd className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'sync':
        return <HiOutlineRefresh className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'qrcode':
        return <HiOutlineQrcode className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'play':
        return <HiOutlinePlay className={className} />;
      case 'code':
        return <HiOutlineCode className={className} />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      default:
        return <HiOutlineUserAdd className={className} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Step by Step Process Section"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Timeline Steps */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 to-transparent" />

          {config?.steps?.map((step, index) => (
            <div
              key={step.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 border-2 border-blue-500">
                <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
              </div>

              {/* Content Card */}
              <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl ${expandedStep === step.number ? 'ring-2 ring-blue-500' : ''
                    }`}
                  onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                >
                  {/* Card Header */}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-blue-50 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                        {getStepIcon(step.icon)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {step.title}
                          </h3>
                          {step.isNew && (
                            <span className="px-2 py-0.5 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {step.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedStep === step.number && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {step.fullDescription}
                      </p>

                      {/* Key Features */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What you'll get:</h4>
                        <ul className="space-y-2">
                          {step.keyPoints?.map((point, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                              <HiOutlineCheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Estimated Time */}
                      {step.estimatedTime && (
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <HiOutlineClock className="w-4 h-4" />
                          <span>⏱️ Estimated time: {step.estimatedTime}</span>
                        </div>
                      )}

                      {/* Resources */}
                      {step.resources && (
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Resources:</p>
                          <div className="flex flex-wrap gap-2">
                            {step.resources.map((resource, idx) => (
                              <Link
                                key={idx}
                                href={resource.link}
                                className="text-xs px-3 py-1 bg-white dark:bg-gray-600 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors"
                              >
                                {resource.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      {step.actionLink && (
                        <div className="mt-4">
                          <Link
                            href={step.actionLink}
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 transition-colors"
                          >
                            {step.actionText || "Get started →"}
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        {config?.showStats && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {config?.stats?.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to start your journey?"}
              </span>
              <Link
                href={config?.ctaLink || "/signup"}
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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .bg-dots-pattern {
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-dots-pattern {
          background-image: radial-gradient(circle, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default StepByStepProcessSection2;