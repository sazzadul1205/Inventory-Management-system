// page/frontend/HowItWorks/StepByStepProcessSection/StepByStepProcessSection3.jsx

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
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineThumbUp,
  HiOutlineAcademicCap
} from 'react-icons/hi';

const StepByStepProcessSection3 = ({ config }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

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
      case 'star':
        return <HiOutlineStar className={className} />;
      case 'thumb':
        return <HiOutlineThumbUp className={className} />;
      case 'academic':
        return <HiOutlineAcademicCap className={className} />;
      default:
        return <HiOutlineUserAdd className={className} />;
    }
  };

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  const markStepCompleted = (stepNumber) => {
    if (!completedSteps.includes(stepNumber)) {
      setCompletedSteps([...completedSteps, stepNumber]);
    }
  };

  const isStepCompleted = (stepNumber) => {
    return completedSteps.includes(stepNumber);
  };

  const currentStepData = config?.steps?.find(step => step.number === currentStep);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Step by Step Process Section"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none" aria-hidden="true"></div>

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
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

        {/* Horizontal Stepper */}
        <div className="mb-12 overflow-x-auto">
          <div className="min-w-150 md:min-w-0">
            <div className="flex items-center justify-between">
              {config?.steps?.map((step, index) => (
                <div key={step.id} className="flex-1 relative">
                  {/* Step Button */}
                  <button
                    onClick={() => handleStepClick(step.number)}
                    className={`relative z-10 flex flex-col items-center group w-full transition-all duration-300 ${currentStep === step.number ? 'scale-105' : ''
                      }`}
                  >
                    {/* Step Circle */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isStepCompleted(step.number)
                          ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                          : currentStep === step.number
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-4 ring-blue-200 dark:ring-blue-900'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-gray-600'
                        }`}
                    >
                      {isStepCompleted(step.number) ? (
                        <HiOutlineCheckCircle className="w-6 h-6" />
                      ) : (
                        <span className="text-lg font-bold">{step.number}</span>
                      )}
                    </div>

                    {/* Step Label */}
                    <div className="mt-3 text-center">
                      <div className={`text-sm font-semibold transition-colors duration-300 ${currentStep === step.number
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-500 dark:text-gray-400'
                        }`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 hidden md:block">
                        {step.estimatedTime}
                      </div>
                    </div>
                  </button>

                  {/* Connector Line */}
                  {index < config?.steps?.length - 1 && (
                    <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 z-0">
                      <div
                        className={`h-full bg-linear-to-r from-blue-500 to-green-500 transition-all duration-500 ${isStepCompleted(step.number) ? 'w-full' : 'w-0'
                          }`}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step Details Panel */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Step Content */}
            <div>
              {/* Step Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <HiOutlineClock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Step {currentStep} • {currentStepData?.estimatedTime}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {currentStepData?.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {currentStepData?.fullDescription || currentStepData?.shortDescription}
              </p>

              {/* Key Features */}
              {currentStepData?.keyPoints && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <HiOutlineStar className="w-5 h-5 text-blue-500" />
                    What you'll accomplish:
                  </h4>
                  <ul className="space-y-2">
                    {currentStepData.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Resources */}
              {currentStepData?.resources && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <HiOutlineAcademicCap className="w-5 h-5 text-blue-500" />
                    Helpful resources:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStepData.resources.map((resource, idx) => (
                      <Link
                        key={idx}
                        href={resource.link}
                        className="text-sm px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                {!isStepCompleted(currentStep) && (
                  <button
                    onClick={() => markStepCompleted(currentStep)}
                    className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <HiOutlineCheckCircle className="w-5 h-5" />
                    Mark as Complete
                  </button>
                )}

                {currentStepData?.actionLink && (
                  <Link
                    href={currentStepData.actionLink}
                    className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg inline-flex items-center gap-2"
                  >
                    {currentStepData.actionText || "Get Started"}
                    <HiArrowRight className="w-4 h-4" />
                  </Link>
                )}

                {currentStep < config?.steps?.length && isStepCompleted(currentStep) && (
                  <button
                    onClick={() => handleStepClick(currentStep + 1)}
                    className="px-6 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Next Step
                    <HiArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Column - Visual/Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              {currentStepData?.preview ? (
                <div className="text-center">
                  <div className="text-6xl mb-4">{currentStepData.preview.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {currentStepData.preview.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {currentStepData.preview.description}
                  </p>
                  {currentStepData.preview.image && (
                    <img
                      src={currentStepData.preview.image}
                      alt={currentStepData.preview.title}
                      className="mt-4 rounded-lg"
                    />
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-24 h-24 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getStepIcon(currentStepData?.icon, "w-12 h-12 text-blue-600 dark:text-blue-400")}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Interactive preview available<br />
                    when you start this step
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        {config?.showProgress && (
          <div className="mt-12">
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Overall Progress
                </span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  {Math.round((completedSteps.length / (config?.steps?.length || 1)) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-linear-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(completedSteps.length / (config?.steps?.length || 1)) * 100}%` }}
                ></div>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                {completedSteps.length} of {config?.steps?.length} steps completed
                {completedSteps.length === config?.steps?.length && " 🎉 Congratulations! You're ready to go live!"}
              </p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to begin your journey?"}
              </span>
              <Link
                href={config?.ctaLink || "/signup"}
                className={`${config?.ctaButton?.backgroundColor} ${config?.ctaButton?.textColor} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2`}
                aria-label="Start your journey"
              >
                {config?.ctaButton?.text || "Start Free Trial"}
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
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default StepByStepProcessSection3;