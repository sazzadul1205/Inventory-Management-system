// page/frontend/Home/CustomSolutionsSection/CustomSolutionsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineCog,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineGlobe,
  HiOutlineUserGroup,
  HiOutlineDocumentReport,
  HiOutlineCheckCircle,
  HiOutlineCode,
  HiOutlineCube,
  HiOutlineRefresh,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineDeviceMobile,
  HiOutlineDatabase,
  HiOutlineTerminal,
  HiOutlineBeaker,
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const CustomSolutionsSection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState(config?.tabs?.[0]?.id || 1);

  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'cog':
        return <HiOutlineCog className={className} />;
      case 'bolt':
        return <HiOutlineLightningBolt className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'globe':
        return <HiOutlineGlobe className={className} />;
      case 'users':
        return <HiOutlineUserGroup className={className} />;
      case 'report':
        return <HiOutlineDocumentReport className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'code':
        return <HiOutlineCode className={className} />;
      case 'cube':
        return <HiOutlineCube className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'cloud':
        return <HiOutlineCloudUpload className={className} />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'terminal':
        return <HiOutlineTerminal className={className} />;
      case 'beaker':
        return <HiOutlineBeaker className={className} />;
      default:
        return <HiOutlineCog className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              {config?.badge && (
                <span className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  {config.badge}
                </span>
              )}
              {config?.expertise && (
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[10px] sm:text-xs font-medium rounded-full">
                  {config.expertise}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
              {config?.title}
            </h2>
            {config?.description && (
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
                {config.description}
              </p>
            )}
          </div>

          {/* Quick Stats */}
          {config?.projectCounter && (
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
                {config.projectCounter.label}
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {config.projectCounter.value}
                </span>
                <span className="flex items-center gap-0.5 sm:gap-1 text-green-600 dark:text-green-400 text-[10px] sm:text-xs">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  {config.projectCounter.trend}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Solution Tabs */}
        {config?.tabs && config.tabs.length > 0 && (
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
            {config.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                aria-label={`Show ${tab.label} solutions`}
              >
                <span className="flex items-center gap-1 sm:gap-2">
                  {getIcon(tab.icon, "w-3 h-3 sm:w-4 sm:h-4")}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20">
          {config?.solutions
            ?.filter(solution => solution.tabId === activeTab)
            .map((solution) => (
              <div
                key={solution.id}
                className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-indigo-600 dark:hover:border-indigo-500"
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${solution.bgColor} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(solution.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white")}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {solution.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {solution.description}
                </p>

                {/* Tech Tags */}
                {solution.techStack && solution.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {solution.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-[8px] sm:text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-1.5 sm:px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  href={solution.link}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs font-semibold hover:gap-2 transition-all duration-300"
                >
                  Learn more
                  <HiOutlineArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5 opacity-0 group-hover:opacity-100 group-hover:ml-1.5 transition-all" />
                </Link>
              </div>
            ))}
        </div>

        {/* Architecture Preview */}
        {config?.architecture?.show && (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {config.architecture.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {config.architecture.description}
              </p>

              <div className="space-y-3 sm:space-y-4">
                {config.architecture.features?.map((feature) => (
                  <div key={feature.id} className="flex items-start gap-2 sm:gap-3">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${feature.bgColor} flex items-center justify-center shrink-0 mt-0.5`}>
                      {getIcon(feature.icon, "w-3.5 h-3.5 sm:w-4 sm:h-4 text-white")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={config.architecture.link || "/architecture"}
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-2 transition-all duration-300 text-sm sm:text-base"
              >
                View Architecture Overview
                <HiOutlineArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-linear-to-br from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  <HiOutlineDatabase className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold text-sm sm:text-base">System Architecture</span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {config.architecture.layers?.map((layer, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          {getIcon(layer.icon, "w-3.5 h-3.5 sm:w-4 sm:h-4 text-white")}
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] sm:text-xs font-medium">{layer.name}</p>
                          <p className="text-[8px] sm:text-[10px] text-indigo-100">{layer.tech}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-indigo-400/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-purple-400/30 rounded-full blur-2xl" />
            </div>
          </div>
        )}

        {/* Development Metrics */}
        {config?.metrics && config.metrics.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-16 sm:mb-20">
            {config.metrics.map((metric) => (
              <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                    {getIcon(metric.icon, "w-4 h-4 sm:w-5 sm:h-5 text-white")}
                  </div>
                  <span className={`text-[8px] sm:text-[10px] font-medium ${metric.trendColor}`}>{metric.trend}</span>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {metric.value}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Implementation Timeline */}
        {config?.timeline?.show && (
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              {config.timeline.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.timeline.phases?.map((phase) => (
                <div key={phase.id} className="relative">
                  <div className="relative">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${phase.bgColor} flex items-center justify-center text-white font-bold text-[10px] sm:text-xs`}>
                        {phase.number}
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        {phase.name}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">
                      {phase.description}
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">
                      {phase.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Success Stories */}
        {config?.successStories && config.successStories.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {config.successStories.map((story) => (
              <div
                key={story.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl">
                    {story.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                      {story.company}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{story.industry}</p>
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {story.testimonial}
                </p>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {story.results?.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs sm:text-sm md:text-base font-bold text-indigo-600 dark:text-indigo-400">
                        {result.value}
                      </div>
                      <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href={story.link}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-[10px] sm:text-xs"
                >
                  Read Full Story
                  <HiOutlineArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* CTA Banner */}
        {config?.footerCta?.show && (
          <div className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 text-center text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
              {config.footerCta.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {config.footerCta.description}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Link
                href={config.footerCta.primaryLink || "/contact"}
                className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base"
              >
                {config.footerCta.primaryText}
              </Link>
              <Link
                href={config.footerCta.secondaryLink || "/demo"}
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                {config.footerCta.secondaryText}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomSolutionsSection2;