// page/frontend/HowItWorks/ImplementationTimelineSection/ImplementationTimelineSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef } from 'react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineDownload,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineChartBar
} from 'react-icons/hi';
import { HiOutlineMagnifyingGlassMinus, HiOutlineMagnifyingGlassPlus } from 'react-icons/hi2';

const ImplementationTimelineSection2 = ({ config }) => {

  // State
  const [hoveredTask, setHoveredTask] = useState(null); 
  const [zoom, setZoom] = useState(config?.initialZoom || 1);

  // State for selected phase
  const [selectedPhase, setSelectedPhase] = useState(config?.initialSelectedPhase || null);

  // Refs
  const timelineRef = useRef(null);

  // Phases data
  const phases = config?.phases || [];
  const weeks = config?.weeks || Array.from({ length: config?.totalWeeks || 12 }, (_, i) => i + 1);

  // Function to calculate task width
  const getTaskWidth = (startWeek, endWeek) => {
    const duration = endWeek - startWeek + 1;
    return `${(duration / weeks.length) * 100 * zoom}%`;
  };

  // Function to calculate task offset
  const getTaskOffset = (startWeek) => {
    return `${((startWeek - 1) / weeks.length) * 100 * zoom}%`;
  };

  // Function to handle zoom in
  const handleZoomIn = () => {
    setZoom(Math.min(zoom + (config?.zoomStep || 0.2), config?.maxZoom || 2));
  };

  // Function to handle zoom out
  const handleZoomOut = () => {
    setZoom(Math.max(zoom - (config?.zoomStep || 0.2), config?.minZoom || 0.6));
  };

  // Helper function for icons
  const getStatIcon = (iconName, className = "w-6 h-6 text-blue-600") => {
    switch (iconName) {
      case 'calendar': return <HiOutlineCalendar className={className} />;
      case 'check': return <HiOutlineCheckCircle className={className} />;
      case 'clock': return <HiOutlineClock className={className} />;
      case 'users': return <HiOutlineUserGroup className={className} />;
      case 'chart': return <HiOutlineChartBar className={className} />;
      default: return <HiOutlineCalendar className={className} />;
    }
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Implementation Timeline Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Timeline badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Implementation Timeline"}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Your'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Implementation Journey'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "A clear roadmap to get you up and running smoothly"}
          </p>
        </div>

        {/* Timeline Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <button
              onClick={handleZoomIn}
              className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-all"
              aria-label="Zoom in"
            >
              <HiOutlineMagnifyingGlassPlus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-all"
              aria-label="Zoom out"
            >
              <HiOutlineMagnifyingGlassMinus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">Zoom: {Math.round(zoom * 100)}%</span>
          </div>
          <Link
            href={config?.downloadLink || "/timeline/download"}
            className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700"
          >
            <HiOutlineDownload className="w-4 h-4" />
            {config?.downloadText || "Download Timeline"}
          </Link>
        </div>

        {/* Grant Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto" ref={timelineRef}>
            <div className="min-w-3xl" style={{ zoom }}>
              {/* Week Headers */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <div className="flex">
                  <div className="w-48 shrink-0 p-4 font-semibold text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700">
                    {config?.phaseColumnHeader || "Phase / Milestone"}
                  </div>
                  <div className="flex-1 flex">
                    {weeks.map((week) => (
                      <div
                        key={week}
                        className="flex-1 text-center p-2 text-xs font-medium text-gray-500 dark:text-gray-400 border-r border-gray-100 dark:border-gray-700"
                      >
                        {config?.weekLabel || "Week"} {week}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Rows */}
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {phases.map((phase) => (
                  <div
                    key={phase.id}
                    className={`group transition-all duration-300 ${selectedPhase === phase.id ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                  >
                    {/* Phase Row */}
                    <div className="flex">
                      <div className="w-48 shrink-0 p-4 border-r border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{phase.number}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white text-sm">
                              {phase.title}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{phase.duration}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 relative p-2">
                        {/* Task Bar */}
                        <div
                          className={`absolute h-12 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${hoveredTask === phase.id ? 'opacity-90' : ''}`}
                          style={{
                            backgroundColor: phase.color || config?.defaultPhaseColor || '#3b82f6',
                            left: getTaskOffset(phase.startWeek),
                            width: getTaskWidth(phase.startWeek, phase.endWeek),
                            top: '8px'
                          }}
                          onMouseEnter={() => setHoveredTask(phase.id)}
                          onMouseLeave={() => setHoveredTask(null)}
                          onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                        >
                          <div className="px-3 py-2 text-white text-xs font-medium truncate">
                            {phase.title}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Milestones for this phase */}
                    {phase.milestones?.map((milestone) => (
                      <div key={milestone.id} className="flex border-t border-gray-50 dark:border-gray-700/50">
                        <div className="w-48 shrink-0 p-3 pl-12 border-r border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <HiOutlineCheckCircle className="w-3 h-3" />
                            {milestone.title}
                          </div>
                        </div>
                        <div className="flex-1 relative p-2">
                          <div
                            className={`absolute w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 ${hoveredTask === milestone.id ? 'scale-125' : ''}`}
                            style={{
                              backgroundColor: milestone.color || config?.defaultMilestoneColor || '#10b981',
                              left: getTaskOffset(milestone.week),
                              top: '12px',
                              transform: 'translateX(-50%)'
                            }}
                            onMouseEnter={() => setHoveredTask(milestone.id)}
                            onMouseLeave={() => setHoveredTask(null)}
                          >
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                              {config?.weekLabel || "Week"} {milestone.week}: {milestone.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Expanded Phase Details */}
                    {selectedPhase === phase.id && (
                      <div className="flex border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                        <div className="w-48 shrink-0 p-4 border-r border-gray-200 dark:border-gray-700" />
                        <div className="flex-1 p-4">
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {phase.fullDescription || phase.description || "Detailed information about this phase."}
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{config?.activitiesLabel || "Key Activities:"}</h4>
                              <ul className="space-y-1">
                                {(phase.activities || []).slice(0, 3).map((activity, idx) => (
                                  <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                                    <HiOutlineCheckCircle className="w-3 h-3 text-blue-500 mr-1 shrink-0 mt-0.5" />
                                    <span>{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{config?.deliverablesLabel || "Deliverables:"}</h4>
                              <div className="flex flex-wrap gap-1">
                                {(phase.deliverables || []).map((deliverable, idx) => (
                                  <span key={idx} className="text-xs px-2 py-0.5 bg-white dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300">
                                    {deliverable}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Milestones Summary */}
        {config?.showMilestones && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {config?.milestonesTitle || "Key Milestones"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {(config?.milestonesSummary || []).map((milestone, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{milestone.week}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{milestone.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{milestone.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline Stats */}
        {config?.timelineStats && config.timelineStats.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
            {config.timelineStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
                <div className="flex justify-center mb-2">
                  {getStatIcon(stat.icon, "w-6 h-6 text-blue-600 dark:text-blue-400")}
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <div className="flex items-center gap-3">
                <HiOutlineCalendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {config?.ctaText || "Ready to see your custom timeline?"}
                </span>
              </div>
              <Link
                href={config?.ctaLink || "/contact"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Custom Timeline"}
                <HiOutlineArrowRight aria-hidden="true" />
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

export default ImplementationTimelineSection2;