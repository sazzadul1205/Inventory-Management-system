// page/frontend/HowItWorks/OnboardingGuideSection/OnboardingGuideSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef } from 'react';

// Icons
import {
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlinePlay,
  HiOutlineDocumentText,
  HiOutlineChat,
  HiArrowRight,
  HiOutlineCalendar,
  HiOutlineVideoCamera,
  HiOutlineBookOpen,
  HiOutlineSparkles,
  HiOutlineDownload,
  HiOutlineExternalLink,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const OnboardingGuideSection3 = ({ config }) => {

  // State for active video
  const [activeVideo, setActiveVideo] = useState(null);

  // State for watched videos
  const [watchedVideos, setWatchedVideos] = useState(config?.initialWatchedVideos || []);

  // State for expanded section
  const [expandedSection, setExpandedSection] = useState(config?.initialExpandedSection || 'videos');

  // State for completed milestones
  const [completedMilestones, setCompletedMilestones] = useState(config?.initialCompletedMilestones || []);

  // Refs
  const videoRef = useRef(null);

  // Function to mark a video as watched
  const markVideoWatched = (videoId) => {
    if (!watchedVideos.includes(videoId)) {
      const newWatched = [...watchedVideos, videoId];
      setWatchedVideos(newWatched);
      if (config?.onVideoWatched) {
        config.onVideoWatched(videoId, newWatched);
      }
    }
  };

  // Function to mark a milestone as complete
  const markMilestoneComplete = (milestoneId) => {
    if (!completedMilestones.includes(milestoneId)) {
      const newCompleted = [...completedMilestones, milestoneId];
      setCompletedMilestones(newCompleted);
      if (config?.onMilestoneComplete) {
        config.onMilestoneComplete(milestoneId, newCompleted);
      }
    }
  };

  // Function to calculate video progress
  const getVideoProgress = () => {
    const totalVideos = config?.videoTutorials?.length || 1;
    return Math.round((watchedVideos.length / totalVideos) * 100);
  };

  // Function to calculate milestone progress
  const getMilestoneProgress = () => {
    const totalMilestones = config?.milestones?.length || 1;
    return Math.round((completedMilestones.length / totalMilestones) * 100);
  };

  // Helper function for channel icons
  const getChannelIcon = (iconName, className = "w-5 h-5 mx-auto mb-1") => {
    switch (iconName) {
      case 'chat': return <HiOutlineChat className={className} />;
      case 'mail': return <HiOutlineMail className={className} />;
      case 'phone': return <HiOutlinePhone className={className} />;
      case 'globe': return <HiOutlineGlobeAlt className={className} />;
      case 'users': return <HiOutlineUserGroup className={className} />;
      default: return <HiOutlineChat className={className} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Onboarding Guide Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-teal-50/50 to-transparent dark:from-teal-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-cyan-50/50 to-transparent dark:from-cyan-900/10 pointer-events-none" aria-hidden="true" />

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

        {/* Progress Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <HiOutlineVideoCamera className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">{getVideoProgress()}%</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{config?.videosCardTitle || "Video Tutorials"}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {watchedVideos.length} of {config?.videoTutorials?.length} completed
            </p>
            <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-teal-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${getVideoProgress()}%` }}
              />
            </div>
          </div>

          <div className="bg-linear-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <HiOutlineTrophy className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">{getMilestoneProgress()}%</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{config?.milestonesCardTitle || "Milestones"}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {completedMilestones.length} of {config?.milestones?.length} achieved
            </p>
            <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-teal-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${getMilestoneProgress()}%` }}
              />
            </div>
          </div>

          <div className="bg-linear-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <HiOutlineClock className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">{config?.estimatedTimeValue || "~30 min"}</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{config?.timeCardTitle || "Estimated Time"}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {config?.timeCardDescription || "Complete all tutorials and milestones"}
            </p>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sticky top-24">
              <button
                onClick={() => setExpandedSection('videos')}
                className={`w-full text-left p-3 rounded-xl transition-all duration-300 mb-2 ${expandedSection === 'videos'
                  ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <HiOutlineVideoCamera className="w-5 h-5" />
                  <span className="font-medium">{config?.videosNavText || "Video Tutorials"}</span>
                  {watchedVideos.length > 0 && (
                    <span className="ml-auto text-xs bg-teal-500 text-white px-2 py-0.5 rounded-full">
                      {watchedVideos.length}/{config?.videoTutorials?.length}
                    </span>
                  )}
                </div>
              </button>

              <button
                onClick={() => setExpandedSection('milestones')}
                className={`w-full text-left p-3 rounded-xl transition-all duration-300 mb-2 ${expandedSection === 'milestones'
                  ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <HiOutlineTrophy className="w-5 h-5" />
                  <span className="font-medium">{config?.milestonesNavText || "Getting Started Milestones"}</span>
                  {completedMilestones.length > 0 && (
                    <span className="ml-auto text-xs bg-teal-500 text-white px-2 py-0.5 rounded-full">
                      {completedMilestones.length}/{config?.milestones?.length}
                    </span>
                  )}
                </div>
              </button>

              <button
                onClick={() => setExpandedSection('resources')}
                className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${expandedSection === 'resources'
                  ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <HiOutlineBookOpen className="w-5 h-5" />
                  <span className="font-medium">{config?.resourcesNavText || "Resources & Downloads"}</span>
                </div>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Video Tutorials Section */}
            {expandedSection === 'videos' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                  {activeVideo ? (
                    <div>
                      <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                        <video
                          ref={videoRef}
                          className="w-full h-full"
                          controls
                          onEnded={() => markVideoWatched(activeVideo.id)}
                          src={activeVideo.src}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{activeVideo.title}</h4>
                            <p className="text-sm text-gray-500">{activeVideo.duration}</p>
                          </div>
                          <button
                            onClick={() => setActiveVideo(null)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <HiOutlineVideoCamera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">{config?.videoPlaceholderText || "Select a video tutorial to start learning"}</p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {config?.videoTutorials?.map((video) => (
                    <div
                      key={video.id}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${watchedVideos.includes(video.id)
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                        : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      onClick={() => setActiveVideo(video)}
                    >
                      <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center shrink-0">
                        {watchedVideos.includes(video.id) ? (
                          <HiOutlineCheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <HiOutlinePlay className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">{video.title}</h4>
                        <p className="text-sm text-gray-500">{video.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">{video.duration}</div>
                        {!watchedVideos.includes(video.id) && (
                          <span className="text-xs text-teal-600 dark:text-teal-400 mt-1 block">{config?.watchNowText || "Watch now"}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Milestones Section */}
            {expandedSection === 'milestones' && (
              <div className="space-y-4">
                {config?.milestones?.map((milestone) => (
                  <div
                    key={milestone.id}
                    className={`p-6 rounded-2xl transition-all duration-300 ${completedMilestones.includes(milestone.id)
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                      : 'bg-gray-50 dark:bg-gray-800'
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        {completedMilestones.includes(milestone.id) ? (
                          <HiOutlineCheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{milestone.title}</h3>
                          <span className="text-xs px-2 py-0.5 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full">
                            {milestone.estimatedTime}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{milestone.description}</p>

                        {milestone.actionLink && !completedMilestones.includes(milestone.id) && (
                          <Link
                            href={milestone.actionLink}
                            className="inline-flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                            onClick={() => markMilestoneComplete(milestone.id)}
                          >
                            {milestone.actionText || "Complete this step"}
                            <HiArrowRight className="w-3 h-3" />
                          </Link>
                        )}

                        {!completedMilestones.includes(milestone.id) && !milestone.actionLink && (
                          <button
                            onClick={() => markMilestoneComplete(milestone.id)}
                            className="inline-flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                          >
                            {config?.markCompleteText || "Mark as complete"}
                            <HiOutlineCheckCircle className="w-3 h-3" />
                          </button>
                        )}

                        {completedMilestones.includes(milestone.id) && (
                          <div className="text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
                            <HiOutlineCheckCircle className="w-4 h-4" />
                            {config?.completedText || "Completed"}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {completedMilestones.length === config?.milestones?.length && (
                  <div className="p-6 bg-linear-to-r from-teal-500 to-cyan-500 rounded-2xl text-center text-white">
                    <HiOutlineTrophy className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="text-xl font-bold mb-2">{config?.completionTitle || "Congratulations!"}</h3>
                    <p>{config?.completionMessage || "You've completed all onboarding milestones. You're ready to start using the platform!"}</p>
                    <Link
                      href={config?.completionLink || "/dashboard"}
                      className="inline-block mt-4 px-6 py-2 bg-white text-teal-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      {config?.dashboardButtonText || "Go to Dashboard"}
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Resources Section */}
            {expandedSection === 'resources' && (
              <div className="space-y-6">
                {/* Documentation */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <HiOutlineDocumentText className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    {config?.documentationTitle || "Documentation"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {config?.documentation?.map((doc, index) => (
                      <Link
                        key={index}
                        href={doc.link}
                        className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
                      >
                        <span className="text-gray-700 dark:text-gray-300">{doc.title}</span>
                        <HiOutlineExternalLink className="w-4 h-4 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Downloadable Resources */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <HiOutlineDownload className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    {config?.downloadsTitle || "Downloadable Resources"}
                  </h3>
                  <div className="space-y-3">
                    {config?.downloads?.map((download, index) => (
                      <Link
                        key={index}
                        href={download.link}
                        className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
                      >
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{download.name}</div>
                          <div className="text-xs text-gray-500">{download.type} • {download.size}</div>
                        </div>
                        <HiOutlineDownload className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Support Channels */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <HiOutlineChat className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    {config?.supportTitle || "Get Help"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {config?.supportChannels?.map((channel, index) => (
                      <Link
                        key={index}
                        href={channel.link}
                        className="text-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all"
                      >
                        <div className="flex justify-center mb-1">
                          {getChannelIcon(channel.icon, "w-5 h-5 text-teal-600")}
                        </div>
                        <div className="font-medium text-gray-900 dark:text-white text-sm">{channel.name}</div>
                        <div className="text-xs text-gray-500">{channel.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Completion CTA */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <div className="flex items-center gap-3">
                <HiOutlineSparkles className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {config?.ctaText || "Need personalized assistance?"}
                </span>
              </div>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Schedule a Coaching Session"}
                <HiOutlineCalendar aria-hidden="true" />
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

export default OnboardingGuideSection3;