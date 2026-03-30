// page/frontend/HowItWorks/OnboardingGuideSection/OnboardingGuideSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlinePlay,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiOutlineChat,
  HiOutlineAcademicCap,
  HiArrowRight,
  HiOutlineCalendar,
  HiOutlineVideoCamera,
  HiOutlineBookOpen,
  HiOutlineSparkles
} from 'react-icons/hi';

const OnboardingGuideSection1 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('guide');
  const [completedItems, setCompletedItems] = useState([]);

  const toggleComplete = (itemId) => {
    if (completedItems.includes(itemId)) {
      setCompletedItems(completedItems.filter(id => id !== itemId));
    } else {
      setCompletedItems([...completedItems, itemId]);
    }
  };

  const getProgressPercentage = () => {
    const totalItems = config?.checklist?.length || 1;
    return Math.round((completedItems.length / totalItems) * 100);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Onboarding Guide Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-cyan-200 dark:bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'guide'
                ? 'bg-teal-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            <HiOutlineBookOpen className="inline w-4 h-4 mr-2" />
            Getting Started Guide
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'checklist'
                ? 'bg-teal-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            <HiOutlineCheckCircle className="inline w-4 h-4 mr-2" />
            Setup Checklist
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'resources'
                ? 'bg-teal-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            <HiOutlineAcademicCap className="inline w-4 h-4 mr-2" />
            Resources & Support
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Getting Started Guide Tab */}
          {activeTab === 'guide' && (
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Video Tutorial */}
                <div className="lg:col-span-2">
                  <div className="bg-linear-to-br from-teal-50 to-cyan-50 dark:from-gray-700 dark:to-gray-700 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                        <HiOutlineVideoCamera className="w-5 h-5 text-teal-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Welcome Video
                      </h3>
                    </div>
                    <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                      <button className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors">
                        <HiOutlinePlay className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Watch this 5-minute overview to understand the platform's key features and how to get started.
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-teal-600">15 min</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Average setup time</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-teal-600">200+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Pre-built integrations</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-teal-600">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Support available</div>
                  </div>
                </div>
              </div>

              {/* Guide Steps */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Step-by-Step Guide
                </h3>
                <div className="space-y-4">
                  {config?.guideSteps?.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-teal-600 font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {step.description}
                        </p>
                        {step.link && (
                          <Link
                            href={step.link}
                            className="inline-flex items-center text-sm text-teal-600 dark:text-teal-400 mt-2 hover:underline"
                          >
                            Learn more
                            <HiArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">
                        <HiOutlineClock className="w-3 h-3" />
                        {step.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Setup Checklist Tab */}
          {activeTab === 'checklist' && (
            <div className="p-6 md:p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Setup Progress
                  </span>
                  <span className="text-sm font-bold text-teal-600">
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

              {/* Checklist Items */}
              <div className="space-y-3">
                {config?.checklist?.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer ${completedItems.includes(item.id)
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                        : 'bg-gray-50 dark:bg-gray-700/30 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                      }`}
                    onClick={() => toggleComplete(item.id)}
                  >
                    <div className="shrink-0">
                      {completedItems.includes(item.id) ? (
                        <HiOutlineCheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-medium ${completedItems.includes(item.id)
                            ? 'text-gray-500 dark:text-gray-400 line-through'
                            : 'text-gray-900 dark:text-white'
                          }`}>
                          {item.title}
                        </span>
                        {item.isRequired && (
                          <span className="text-xs px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="text-teal-600 dark:text-teal-400 text-sm hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Do it →
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {completedItems.length === config?.checklist?.length && (
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl text-center">
                  <HiOutlineSparkles className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-green-700 dark:text-green-300 font-semibold">
                    🎉 Congratulations! You've completed all setup steps!
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    You're ready to start using the platform.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Resources & Support Tab */}
          {activeTab === 'resources' && (
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Documentation */}
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <HiOutlineDocumentText className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Documentation
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {config?.documentation?.map((doc, index) => (
                      <li key={index}>
                        <Link
                          href={doc.link}
                          className="flex items-center justify-between p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <span className="text-gray-700 dark:text-gray-300">{doc.title}</span>
                          <HiArrowRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Channels */}
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <HiOutlineUserGroup className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Support Channels
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {config?.supportChannels?.map((channel, index) => (
                      <li key={index}>
                        <Link
                          href={channel.link}
                          className="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <span className="text-xl">{channel.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{channel.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{channel.description}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Training Videos */}
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <HiOutlineVideoCamera className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Training Videos
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {config?.trainingVideos?.map((video, index) => (
                      <li key={index}>
                        <Link
                          href={video.link}
                          className="flex items-center justify-between p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <span className="text-gray-700 dark:text-gray-300">{video.title}</span>
                          <span className="text-sm text-gray-500">{video.duration}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Community */}
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <HiOutlineChat className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Community
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {config?.communityLinks?.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.url}
                          className="flex items-center justify-between p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <span className="text-gray-700 dark:text-gray-300">{link.name}</span>
                          <span className="text-xl">{link.icon}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Schedule Demo CTA */}
        {config?.showDemoCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <div className="flex items-center gap-3">
                <HiOutlineCalendar className="w-8 h-8 text-teal-600" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {config?.demoText || "Need personalized help?"}
                </span>
              </div>
              <Link
                href={config?.demoLink || "/demo"}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.demoButtonText || "Schedule a Demo"}
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

export default OnboardingGuideSection1;