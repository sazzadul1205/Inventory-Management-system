// frontend/AboutUs/CompanyTimelineSection/CompanyTimelineSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback, useMemo } from 'react';

// React Icons - All from react-icons library
import {
  HiOutlineChevronDown,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineArrowRight,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineTrendingUp,
} from 'react-icons/hi';
import { HiOutlineRocketLaunch, HiOutlineTrophy } from 'react-icons/hi2';

const CompanyTimelineSection1 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [openYear, setOpenYear] = useState(null);
  const [activeEra, setActiveEra] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const stats = config?.stats || [];
  const eras = config?.eras || [];
  const timeline = useMemo(() => config?.timeline || [], [config?.timeline]);
  const futureVision = config?.futureVision || "We're just getting started. In the coming years, we plan to expand to 100+ countries, launch AI-powered forecasting with 99% accuracy, and help 100,000 businesses achieve operational excellence.";

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      HiOutlineChevronDown,
      HiOutlineCalendar,
      HiOutlineChartBar,
      HiOutlineArrowRight,
      HiOutlineUserGroup,
      HiOutlineGlobeAlt,
      HiOutlineSparkles,
      HiOutlineTrophy,
      HiOutlineTrendingUp,
      HiOutlineRocketLaunch,
    };
    const IconComponent = icons[iconName] || HiOutlineCalendar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Toggle year expansion
   * @param {number} index - Index of the timeline item to toggle
   */
  const toggleYear = useCallback((index) => {
    setOpenYear(prev => prev === index ? null : index);
  }, []);

  // ==================== FILTERED TIMELINE ====================
  const filteredTimeline = useMemo(() => {
    return timeline.filter(event => {
      return activeEra === 'all' || event.era === activeEra;
    });
  }, [timeline, activeEra]);

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Company Timeline"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-slate-50/30 to-transparent dark:from-slate-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 dark:bg-gray-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-slate-300/5 dark:bg-slate-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-slate-100 dark:bg-slate-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-slate-200 dark:border-slate-800'}`}
            aria-label="Timeline badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-slate-700 dark:text-slate-300'}`}>
              {config?.badge?.text || "Our Journey"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Tracing Our'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-slate-600 to-gray-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Path to Impact'}
            </span>{' '}
            {config?.title?.suffix || ''}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "From humble beginnings to global impact, our journey is defined by innovation, resilience, and an unwavering commitment to our customers. Explore the milestones that have shaped who we are today."}
          </p>
        </div>

        {/* ==================== STATS ROW ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex justify-center mb-2 text-slate-600 dark:text-slate-400">
                {getIcon(stat.icon, "w-6 h-6 md:w-8 md:h-8")}
              </div>
              <div className="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-400 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ==================== ERA FILTERS ==================== */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveEra('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeEra === 'all'
              ? 'bg-linear-to-r from-slate-600 to-gray-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            All Eras
          </button>
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => setActiveEra(era.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-1 ${activeEra === era.id
                ? 'bg-linear-to-r from-slate-600 to-gray-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {getIcon(era.icon, "w-3 h-3")}
              {era.name}
            </button>
          ))}
        </div>

        {/* ==================== TIMELINE ==================== */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Vertical line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-slate-500 to-gray-500 hidden md:block" aria-hidden="true" />

          <div className="space-y-8">
            {filteredTimeline.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Empty spacer for desktop layout */}
                <div className="hidden md:block w-1/2" />

                {/* Center dot - hidden on mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 hidden md:block" />

                {/* Timeline card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div
                    onClick={() => toggleYear(index)}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 cursor-pointer border border-gray-100 dark:border-gray-700 group"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleYear(index)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                        {getIcon("HiOutlineCalendar", "w-4 h-4")}
                        <span>{event.year}</span>
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 text-3xl group-hover:scale-110 transition-transform">
                        {getIcon(event.icon, "w-6 h-6")}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{event.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{event.description}</p>

                    {/* Expanded details */}
                    {openYear === index && event.details && (
                      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 animate-fadeIn">
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{event.details}</p>
                        {event.metric && (
                          <div className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded-full">
                            {getIcon("HiOutlineChartBar", "w-3 h-3")}
                            <span>{event.metric}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Read more button */}
                    {event.details && (
                      <button className="mt-2 text-xs text-slate-600 dark:text-slate-400 hover:underline inline-flex items-center gap-1 transition-colors">
                        {openYear === index ? 'Show less' : 'Read more'}
                        {getIcon("HiOutlineChevronDown", `w-3 h-3 transition-transform duration-200 ${openYear === index ? 'rotate-180' : ''}`)}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== MILESTONE SUMMARY ==================== */}
        <div className="bg-linear-to-r from-slate-50 to-gray-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center mb-12 border border-slate-100 dark:border-gray-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            {getIcon("HiOutlineTrophy", "w-8 h-8 text-slate-600")}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Key Milestones</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">2016</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Company Founded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">2019</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Global Expansion</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">2022</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Industry Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">2024</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">10,000+ Customers</div>
            </div>
          </div>
        </div>

        {/* ==================== FUTURE VISION ==================== */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center mb-12 border border-gray-100 dark:border-gray-700">
          <div className="flex justify-center mb-4 text-slate-600 dark:text-slate-400 text-5xl">
            {getIcon("HiOutlineSparkles", "w-12 h-12")}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">What's Next?</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            {futureVision}
          </p>
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold hover:gap-3 transition-all duration-200 group"
          >
            View Our Roadmap
            {getIcon("HiOutlineArrowRight", "w-4 h-4 group-hover:translate-x-0.5 transition-transform")}
          </Link>
        </div>

        {/* ==================== CTA SECTION ==================== */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-slate-50 to-gray-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-slate-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900/30 rounded-full flex items-center justify-center">
              {getIcon("HiOutlineRocketLaunch", "w-6 h-6 text-slate-600")}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
              {config?.contactText || "Be part of our journey. Join us as we shape the future of inventory management."}
            </span>
            <Link
              href={config?.contactLink || "/careers"}
              className="px-6 py-3 bg-linear-to-r from-slate-600 to-gray-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              {config?.contactButtonText || "Join Our Team"}
              {getIcon("HiOutlineArrowRight", "w-4 h-4")}
            </Link>
          </div>
        </div>
      </div>

      {/* ==================== STYLES ==================== */}
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
          animation: fadeIn 0.3s ease-out forwards;
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

export default CompanyTimelineSection1;