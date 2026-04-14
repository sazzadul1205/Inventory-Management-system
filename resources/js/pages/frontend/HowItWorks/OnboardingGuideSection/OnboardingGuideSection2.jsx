// page/frontend/HowItWorks/OnboardingGuideSection/OnboardingGuideSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCheckCircle,
  HiOutlinePlay,
  HiOutlineChat,
  HiArrowRight,
  HiArrowLeft,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineUserAdd,
  HiOutlineDatabase,
  HiOutlineQrcode,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineVideoCamera,
  HiOutlineAcademicCap
} from 'react-icons/hi';

const OnboardingGuideSection2 = ({ config }) => {

  // State for current step
  const [currentStep, setCurrentStep] = useState(config?.initialStep || 0);

  // State for completed steps
  const [completedSteps, setCompletedSteps] = useState(config?.initialCompletedSteps || []);

  // State for answers
  const [answers, setAnswers] = useState(config?.initialAnswers || {});

  // Get the wizard steps
  const steps = config?.wizardSteps || [];

  // Function to handle next step
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to handle previous step
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Function to mark a step as complete
  const markStepComplete = (stepIndex) => {
    if (!completedSteps.includes(stepIndex)) {
      const newCompleted = [...completedSteps, stepIndex];
      setCompletedSteps(newCompleted);
      if (config?.onStepComplete) {
        config.onStepComplete(stepIndex, newCompleted);
      }
    }
  };

  // Function to handle answer selection
  const handleAnswer = (stepId, answer) => {
    const newAnswers = { ...answers, [stepId]: answer };
    setAnswers(newAnswers);
    markStepComplete(currentStep);
    if (currentStep < steps.length - 1) {
      setTimeout(() => handleNext(), config?.autoAdvanceDelay || 500);
    }
  };

  // Function to calculate progress percentage
  const getProgressPercentage = () => {
    return Math.round((completedSteps.length / steps.length) * 100);
  };

  // Get the data for the current step
  const currentStepData = steps[currentStep];

  // Icon mapping for step icons
  const getStepIcon = (iconName, className = "w-10 h-10") => {
    switch (iconName) {
      case 'user': return <HiOutlineUserAdd className={className} />;
      case 'database': return <HiOutlineDatabase className={className} />;
      case 'qrcode': return <HiOutlineQrcode className={className} />;
      case 'chart': return <HiOutlineChartBar className={className} />;
      case 'video': return <HiOutlineVideoCamera className={className} />;
      case 'document': return <HiOutlineDocumentText className={className} />;
      case 'academic': return <HiOutlineAcademicCap className={className} />;
      case 'lightbulb': return <HiOutlineLightBulb className={className} />;
      default: return <HiOutlineUserAdd className={className} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Onboarding Guide Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-200 dark:bg-teal-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Onboarding badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {config?.progressTitle || "Setup Progress"}
            </span>
            <span className="text-sm font-bold text-teal-600 dark:text-teal-400">
              {getProgressPercentage()}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-linear-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>

        {/* Wizard Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Step Indicators */}
          <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex-1 text-center relative ${index < steps.length - 1 ? 'after:content-[""] after:absolute after:top-1/2 after:right-0 after:w-full after:h-0.5 after:bg-gray-200 dark:after:bg-gray-700 after:-translate-y-1/2' : ''
                    }`}
                >
                  <button
                    onClick={() => setCurrentStep(index)}
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${completedSteps.includes(index)
                      ? 'bg-green-500 text-white'
                      : currentStep === index
                        ? 'bg-teal-600 text-white ring-4 ring-teal-200 dark:ring-teal-900'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}
                    aria-label={`Go to step ${index + 1}: ${step.shortTitle}`}
                  >
                    {completedSteps.includes(index) ? (
                      <HiOutlineCheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </button>
                  <div className="text-xs mt-2 text-gray-500 dark:text-gray-400 hidden sm:block">
                    {step.shortTitle}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="p-6 md:p-8">
            {currentStepData && (
              <div className="animate-fadeIn">
                {/* Step Icon and Title */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getStepIcon(currentStepData.icon, "w-10 h-10 text-teal-600 dark:text-teal-400")}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {currentStepData.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {currentStepData.description}
                  </p>
                </div>

                {/* Step Content based on type */}
                {currentStepData.type === 'question' && (
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {currentStepData.question}
                    </p>
                    <div className="space-y-3">
                      {currentStepData.options?.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAnswer(currentStepData.id, option.value)}
                          className="w-full text-left p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-teal-300"
                        >
                          <div className="font-medium text-gray-900 dark:text-white">
                            {option.label}
                          </div>
                          {option.description && (
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {option.description}
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStepData.type === 'info' && (
                  <div className="space-y-6">
                    <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        {getStepIcon("lightbulb", "w-6 h-6 text-teal-600")}
                        <div>
                          <p className="text-gray-700 dark:text-gray-300">
                            {currentStepData.infoText}
                          </p>
                          {currentStepData.tip && (
                            <p className="text-sm text-teal-600 dark:text-teal-400 mt-2">
                              Pro tip: {currentStepData.tip}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {currentStepData.actionLink && (
                      <Link
                        href={currentStepData.actionLink}
                        className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                      >
                        {currentStepData.actionText || "Learn more"}
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                    )}

                    <button
                      onClick={() => handleAnswer(currentStepData.id, 'acknowledged')}
                      className="w-full py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
                    >
                      {currentStepData.continueText || "Got it, continue"}
                    </button>
                  </div>
                )}

                {currentStepData.type === 'action' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center">
                      <div className="mb-3 flex justify-center">
                        {getStepIcon(currentStepData.actionIcon || "document", "w-10 h-10 text-teal-600")}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {currentStepData.actionDescription}
                      </p>
                      <Link
                        href={currentStepData.actionLink}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                      >
                        {currentStepData.actionButtonText}
                        <HiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <button
                      onClick={() => handleAnswer(currentStepData.id, 'completed')}
                      className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {currentStepData.skipText || "I'll do this later"}
                    </button>
                  </div>
                )}

                {currentStepData.type === 'video' && (
                  <div className="space-y-6">
                    <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
                      <button
                        onClick={() => window.open(currentStepData.videoUrl, '_blank')}
                        className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors"
                      >
                        <HiOutlinePlay className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                    {currentStepData.videoDescription && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        {currentStepData.videoDescription}
                      </p>
                    )}
                    <button
                      onClick={() => handleAnswer(currentStepData.id, 'watched')}
                      className="w-full py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
                    >
                      {currentStepData.watchButtonText || "Mark as watched"}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${currentStep === 0
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
            >
              <HiArrowLeft className="w-4 h-4" />
              {config?.previousButtonText || "Previous"}
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!completedSteps.includes(currentStep)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${completedSteps.includes(currentStep)
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                  }`}
              >
                {config?.nextButtonText || "Next"}
                <HiArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href={config?.completionLink || "/dashboard"}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all duration-300 flex items-center gap-2"
              >
                <HiOutlineSparkles className="w-4 h-4" />
                {config?.completeButtonText || "Complete Setup"}
              </Link>
            )}
          </div>
        </div>

        {/* Support Card */}
        {config?.showSupport && (
          <div className="mt-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <HiOutlineChat className="w-5 h-5" />
              <span className="text-sm">
                {config?.supportText || "Need help?"}{' '}
                <Link href={config?.supportLink || "/support"} className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                  {config?.supportLinkText || "Contact our support team"}
                </Link>{' '}
                {config?.orText || "or check our"}{' '}
                <Link href={config?.docsLink || "/docs"} className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                  {config?.docsLinkText || "documentation"}
                </Link>.
              </span>
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

export default OnboardingGuideSection2;