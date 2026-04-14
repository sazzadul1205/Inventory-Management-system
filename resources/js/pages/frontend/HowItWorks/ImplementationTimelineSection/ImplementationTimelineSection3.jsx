// page/frontend/HowItWorks/ImplementationTimelineSection/ImplementationTimelineSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineUserGroup,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineFlag,
  HiOutlineUsers,
  HiOutlineChat,
  HiOutlineBell,
  HiOutlineStar,
  HiOutlineSparkles
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const ImplementationTimelineSection3 = ({ config }) => {

  // State for active milestone
  const [activeMilestone, setActiveMilestone] = useState(null);

  // State for celebration
  const [showCelebration, setShowCelebration] = useState(false);

  // State for completed milestones
  const [completedMilestones, setCompletedMilestones] = useState(config?.initialCompletedMilestones || []);

  // Milestones data
  const milestones = config?.milestones || [];

  // Function to toggle a milestone
  const toggleMilestone = (milestoneId) => {
    if (completedMilestones.includes(milestoneId)) {
      setCompletedMilestones(completedMilestones.filter(id => id !== milestoneId));
    } else {
      const newCompleted = [...completedMilestones, milestoneId];
      setCompletedMilestones(newCompleted);
      setActiveMilestone(milestoneId);
      setTimeout(() => setActiveMilestone(null), 3000);
      if (config?.onMilestoneToggle) {
        config.onMilestoneToggle(milestoneId, newCompleted);
      }
    }
  };

  // Function to calculate progress percentage
  const getProgressPercentage = () => {
    return milestones.length ? Math.round((completedMilestones.length / milestones.length) * 100) : 0;
  };

  // Function to calculate estimated completion
  const getEstimatedCompletion = () => {
    const completedCount = completedMilestones.length;
    const remainingCount = milestones.length - completedCount;
    const avgDaysPerMilestone = config?.avgDaysPerMilestone || 3;
    const remainingDays = remainingCount * avgDaysPerMilestone;

    if (remainingDays === 0) return config?.completionText || 'Complete!';
    if (remainingDays <= 7) return `${remainingDays} ${config?.daysText || 'days'}`;
    if (remainingDays <= 30) return `${Math.ceil(remainingDays / 7)} ${config?.weeksText || 'weeks'}`;
    return `${Math.ceil(remainingDays / 30)} ${config?.monthsText || 'months'}`;
  };

  // Helper function for milestone icons
  const getMilestoneIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'flag': return <HiOutlineFlag className={className} />;
      case 'check': return <HiOutlineCheckCircle className={className} />;
      case 'rocket': return <HiOutlineRocketLaunch className={className} />;
      case 'star': return <HiOutlineStar className={className} />;
      case 'sparkles': return <HiOutlineSparkles className={className} />;
      default: return <HiOutlineFlag className={className} />;
    }
  };

  // Celebration animation
  useEffect(() => {
    if (completedMilestones.length === milestones.length && milestones.length > 0 && !showCelebration) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000);
    }
  }, [completedMilestones, milestones.length, showCelebration]);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Implementation Timeline Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Timeline badge"
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

        {/* Progress Overview */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 mb-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <div className="text-sm opacity-80 mb-1">{config?.progressLabel || "Overall Progress"}</div>
              <div className="text-3xl font-bold">{getProgressPercentage()}%</div>
              <div className="text-sm opacity-80 mt-1">
                {completedMilestones.length} of {milestones.length} {config?.milestonesLabel || "milestones"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm opacity-80 mb-1">{config?.remainingLabel || "Est. Remaining Time"}</div>
              <div className="text-3xl font-bold">{getEstimatedCompletion()}</div>
              <div className="text-sm opacity-80 mt-1">{config?.remainingDescription || "Based on average completion"}</div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm opacity-80 mb-1">{config?.teamLabel || "Your Implementation Team"}</div>
              <div className="flex items-center justify-center md:justify-end gap-2 mt-1">
                <HiOutlineUsers className="w-5 h-5" />
                <span className="font-semibold">{config?.teamSize || "Dedicated Team"}</span>
              </div>
              <div className="text-sm opacity-80 mt-1">{config?.availabilityText || "Available 24/7"}</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-500"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        </div>

        {/* Celebration Toast */}
        {showCelebration && (
          <div className="fixed top-4 right-4 z-50 animate-slideIn">
            <div className="bg-green-500 text-white rounded-lg shadow-xl p-4 flex items-center gap-3">
              <HiOutlineRocketLaunch className="w-6 h-6" />
              <div>
                <div className="font-semibold">{config?.celebrationTitle || "Congratulations!"}</div>
                <div className="text-sm">{config?.celebrationMessage || "You've completed all implementation milestones!"}</div>
              </div>
            </div>
          </div>
        )}

        {/* Milestone Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500" />

          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`relative flex flex-col md:flex-row gap-6 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 border-2 border-blue-500">
                {completedMilestones.includes(milestone.id) ? (
                  <HiOutlineCheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  getMilestoneIcon(milestone.icon || 'flag', "w-6 h-6 text-blue-500")
                )}
              </div>

              {/* Milestone Card */}
              <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${activeMilestone === milestone.id ? 'ring-2 ring-green-500 shadow-xl' : ''
                    } ${completedMilestones.includes(milestone.id)
                      ? 'opacity-75'
                      : 'hover:shadow-xl'
                    }`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          {getMilestoneIcon(milestone.icon || 'flag', "w-5 h-5 text-blue-600 dark:text-blue-400")}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {milestone.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <HiOutlineClock className="w-3 h-3" />
                              {config?.weekLabel || "Week"} {milestone.week}
                            </span>
                            <span className="flex items-center gap-1">
                              <HiOutlineUserGroup className="w-3 h-3" />
                              {milestone.responsible}
                            </span>
                          </div>
                        </div>
                      </div>
                      {milestone.estimatedHours && (
                        <div className="text-right">
                          <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">{milestone.estimatedHours}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{config?.estimatedLabel || "estimated"}</div>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {milestone.description}
                    </p>

                    {/* Task List */}
                    {milestone.tasks && milestone.tasks.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{config?.tasksLabel || "Tasks:"}</h4>
                        <ul className="space-y-1">
                          {milestone.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                              <HiOutlineCheckCircle className="w-3 h-3 text-blue-500 mr-2 shrink-0 mt-0.5" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Resources */}
                    {milestone.resources && milestone.resources.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {milestone.resources.map((resource, idx) => (
                            <Link
                              key={idx}
                              href={resource.link}
                              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
                            >
                              {resource.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    {!completedMilestones.includes(milestone.id) && (
                      <button
                        onClick={() => toggleMilestone(milestone.id)}
                        className="w-full mt-2 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <HiOutlineCheckCircle className="w-4 h-4" />
                        {config?.markCompleteText || "Mark as Complete"}
                      </button>
                    )}

                    {completedMilestones.includes(milestone.id) && (
                      <div className="mt-2 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                        <div className="text-sm text-green-600 dark:text-green-400 flex items-center justify-center gap-2">
                          <HiOutlineCheckCircle className="w-4 h-4" />
                          {config?.completedText || "Completed"}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Collaboration Section */}
        {config?.showTeam && config?.teamMembers && config.teamMembers.length > 0 && (
          <div className="mt-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineUsers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{config?.teamTitle || "Your Implementation Team"}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {config.teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <HiOutlineUserGroup className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">{member.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{member.role}</div>
                    <Link href={member.contact} className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                      {config?.contactText || "Contact"} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support Channels */}
        {config?.showSupport && (
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {config?.supportChatLink && (
              <Link
                href={config.supportChatLink}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-all"
              >
                <HiOutlineChat className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm">{config?.chatText || "Live Chat"}</span>
              </Link>
            )}
            {config?.supportEmailLink && (
              <Link
                href={config.supportEmailLink}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-all"
              >
                <HiOutlineMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm">{config?.emailText || "Email Support"}</span>
              </Link>
            )}
            {config?.supportPhoneLink && (
              <Link
                href={config.supportPhoneLink}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-all"
              >
                <HiOutlinePhone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm">{config?.phoneText || "Phone Support"}</span>
              </Link>
            )}
          </div>
        )}

        {/* Completion CTA */}
        {completedMilestones.length === milestones.length && milestones.length > 0 && (
          <div className="mt-12 text-center">
            <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8">
              <HiOutlineRocketLaunch className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {config?.completionCelebrationTitle || "Implementation Complete!"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {config?.completionCelebrationMessage || "Congratulations! You've successfully completed all implementation milestones. You're now ready to make the most of the platform."}
              </p>
              <Link
                href={config?.completionLink || "/dashboard"}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
              >
                {config?.dashboardButtonText || "Go to Dashboard"}
                <HiOutlineArrowRight />
              </Link>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && completedMilestones.length < milestones.length && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <div className="flex items-center gap-3">
                <HiOutlineBell className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {config?.ctaText || "Need help with your implementation?"}
                </span>
              </div>
              <Link
                href={config?.ctaLink || "/support"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Contact Support"}
                <HiOutlineArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
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

export default ImplementationTimelineSection3;