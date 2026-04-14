// page/frontend/HowItWorks/TrainingAndSupportSection/TrainingAndSupportSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineAcademicCap,
  HiOutlineChat,
  HiOutlineDocumentText,
  HiOutlineVideoCamera,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineGlobeAlt,
  HiOutlineStar,
  HiOutlineSparkles
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const TrainingAndSupportSection1 = ({ config }) => {

  // State for active tab
  const [activeTab, setActiveTab] = useState(config?.initialTab || 'training');

  // Helper function for icons
  const getIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'academic': return <HiOutlineAcademicCap className={className} />;
      case 'chat': return <HiOutlineChat className={className} />;
      case 'document': return <HiOutlineDocumentText className={className} />;
      case 'video': return <HiOutlineVideoCamera className={className} />;
      case 'users': return <HiOutlineUsers className={className} />;
      case 'clock': return <HiOutlineClock className={className} />;
      case 'check': return <HiOutlineCheckCircle className={className} />;
      case 'arrow': return <HiOutlineArrowRight className={className} />;
      case 'book': return <HiOutlineBookOpen className={className} />;
      case 'calendar': return <HiOutlineCalendar className={className} />;
      case 'mail': return <HiOutlineMail className={className} />;
      case 'phone': return <HiOutlinePhone className={className} />;
      case 'globe': return <HiOutlineGlobeAlt className={className} />;
      case 'star': return <HiOutlineStar className={className} />;
      case 'sparkles': return <HiOutlineSparkles className={className} />;
      default: return <HiOutlineAcademicCap className={className} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Training & Support Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Training badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
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

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {config?.stats?.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-linear-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <div className="flex justify-center mb-3">
                {getIcon(stat.icon, "w-8 h-8 text-purple-600 dark:text-purple-400")}
              </div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('training')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'training'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("academic", "w-4 h-4")}
            {config?.trainingTabText || "Training Programs"}
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'support'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("chat", "w-4 h-4")}
            {config?.supportTabText || "Support Channels"}
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'resources'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {getIcon("book", "w-4 h-4")}
            {config?.resourcesTabText || "Learning Resources"}
          </button>
        </div>

        {/* Training Programs Tab */}
        {activeTab === 'training' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config?.trainingPrograms?.map((program, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex justify-start mb-4">
                    {getIcon(program.icon, "w-10 h-10 text-purple-600 dark:text-purple-400")}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {program.description}
                  </p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      {getIcon("clock", "w-4 h-4")}
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      {getIcon("users", "w-4 h-4")}
                      {program.audience}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {program.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        {getIcon("check", "w-4 h-4 text-purple-500 mr-2 shrink-0 mt-0.5")}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={program.link}
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                  >
                    {config?.learnMoreText || "Learn more"}
                    {getIcon("arrow", "w-4 h-4 ml-1")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Support Channels Tab */}
        {activeTab === 'support' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config?.supportChannels?.map((channel, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  {getIcon(channel.icon, "w-10 h-10 text-purple-600 dark:text-purple-400")}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {channel.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {channel.description}
                </p>
                <div className="text-sm text-purple-600 dark:text-purple-400 mb-3">{channel.availability}</div>
                <Link
                  href={channel.link}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                >
                  {channel.cta}
                  {getIcon("arrow", "w-4 h-4 ml-1")}
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Learning Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-8">
            {/* Video Tutorials */}
            {config?.videoTutorials && config.videoTutorials.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("video", "w-5 h-5 text-purple-600")}
                  {config?.videosTitle || "Video Tutorials"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {config.videoTutorials.map((video, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:shadow-md transition-all"
                    >
                      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                        {getIcon("video", "w-8 h-8 text-gray-400")}
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{video.title}</h4>
                      <p className="text-xs text-gray-500 mb-2">{video.duration}</p>
                      <Link href={video.link} className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        {config?.watchNowText || "Watch now"} →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documentation */}
            {config?.documentation && config.documentation.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("book", "w-5 h-5 text-purple-600")}
                  {config?.documentationTitle || "Documentation"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {config.documentation.map((doc, index) => (
                    <Link
                      key={index}
                      href={doc.link}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all"
                    >
                      <span className="text-gray-700 dark:text-gray-300">{doc.title}</span>
                      {getIcon("arrow", "w-4 h-4 text-gray-400")}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Downloadable Resources */}
            {config?.downloads && config.downloads.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  {getIcon("document", "w-5 h-5 text-purple-600")}
                  {config?.downloadsTitle || "Downloadable Resources"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {config.downloads.map((download, index) => (
                    <Link
                      key={index}
                      href={download.link}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all"
                    >
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{download.name}</div>
                        <div className="text-xs text-gray-500">{download.type} • {download.size}</div>
                      </div>
                      {getIcon("document", "w-5 h-5 text-gray-400")}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Live Training Sessions */}
        {config?.showLiveTraining && (
          <div className="mt-12 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-3">
                  {getIcon("academic", "w-10 h-10")}
                </div>
                <h3 className="text-2xl font-bold mb-2">{config?.liveTrainingTitle || "Live Training Sessions"}</h3>
                <p className="text-purple-100 mb-4">
                  {config?.liveTrainingDescription || "Join our expert-led live training sessions to get hands-on experience and ask questions in real-time."}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    {getIcon("calendar", "w-4 h-4")}
                    {config?.liveTrainingFrequency || "Weekly sessions"}
                  </span>
                  <span className="flex items-center gap-1">
                    {getIcon("users", "w-4 h-4")}
                    {config?.liveTrainingGroupSize || "Small groups"}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href={config?.liveTrainingLink || "/training/live"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  {config?.viewScheduleText || "View Schedule"}
                  {getIcon("calendar", "w-4 h-4")}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to get started with training?"}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Contact Training Team"}
                {getIcon("arrow")}
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

export default TrainingAndSupportSection1;