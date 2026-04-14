// page/frontend/HowItWorks/ImplementationTimelineSection/ImplementationTimelineSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineUserGroup,
  HiOutlineDatabase,
  HiOutlineCog,
  HiOutlineChartBar,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const ImplementationTimelineSection1 = ({ config }) => {

  // State to track the expanded phase
  const [expandedPhase, setExpandedPhase] = useState(config?.initialExpandedPhase || null);

  // Function to toggle a phase
  const togglePhase = (phaseId) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  // Helper function for phase icons
  const getPhaseIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'discovery':
        return <HiOutlineUserGroup className={className} />;
      case 'setup':
        return <HiOutlineDatabase className={className} />;
      case 'configuration':
        return <HiOutlineCog className={className} />;
      case 'launch':
        return <HiOutlineRocketLaunch className={className} />;
      case 'optimization':
        return <HiOutlineChartBar className={className} />;
      case 'calendar':
        return <HiOutlineCalendar className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'arrow':
        return <HiOutlineArrowRight className={className} />;
      default:
        return <HiOutlineCalendar className={className} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Implementation Timeline Section"
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

        {/* Timeline Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {config?.timelineStats?.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline Phases */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500" />

          {config?.phases?.map((phase, index) => (
            <div
              key={phase.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-10 border-2 border-blue-500">
                <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  {phase.number}
                </div>
              </div>

              {/* Phase Card */}
              <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl ${expandedPhase === phase.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                  onClick={() => togglePhase(phase.id)}
                >
                  {/* Card Header */}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-blue-50 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                        {getPhaseIcon(phase.icon, "w-8 h-8 text-blue-600 dark:text-blue-400")}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {phase.title}
                          </h3>
                          <span className="px-2 py-0.5 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                            Week {phase.weekRange}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {phase.shortDescription}
                        </p>
                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            {getPhaseIcon("clock", "w-4 h-4")}
                            {phase.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            {getPhaseIcon("discovery", "w-4 h-4")}
                            {phase.responsible}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedPhase === phase.id && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {phase.fullDescription}
                      </p>

                      {/* Key Activities */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Activities:</h4>
                        <ul className="space-y-2">
                          {phase.activities?.map((activity, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                              {getPhaseIcon("check", "w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5")}
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Deliverables:</h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables?.map((deliverable, idx) => (
                            <span key={idx} className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      {phase.actionLink && (
                        <Link
                          href={phase.actionLink}
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline mt-2"
                        >
                          {phase.actionText || "Learn more"}
                          {getPhaseIcon("arrow", "w-4 h-4")}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        {config?.showMetrics && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {config?.metricsTitle || "What You Can Expect"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.metricsDescription || "Measurable results after successful implementation"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {config?.metrics?.map((metric, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">
                    {getPhaseIcon(metric.icon, "w-8 h-8 text-blue-600 dark:text-blue-400")}
                  </div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <div className="flex items-center gap-3">
                {getPhaseIcon("calendar", "w-6 h-6 text-blue-600 dark:text-blue-400")}
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {config?.ctaText || "Ready to start your implementation?"}
                </span>
              </div>
              <Link
                href={config?.ctaLink || "/contact"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Schedule a Discovery Call"}
                {getPhaseIcon("arrow", "w-4 h-4")}
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

export default ImplementationTimelineSection1;