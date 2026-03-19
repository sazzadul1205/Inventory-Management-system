// page/frontend/Home/CustomSolutionsSection/CustomSolutionsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCog,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineGlobe,
  HiOutlineUserGroup,
  HiOutlineDocumentReport,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineCode,
  HiOutlineCube,
  HiOutlineRefresh,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineDeviceMobile,
  HiOutlineDatabase,
  HiOutlineTerminal,
  HiOutlineBeaker
} from 'react-icons/hi';

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
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Custom Solutions"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                {config?.badge}
              </span>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-medium rounded-full">
                {config?.expertise}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {config?.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {config?.description}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{config?.projectCounter?.label}</p>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">{config?.projectCounter?.value}</span>
              <span className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {config?.projectCounter?.trend}
              </span>
            </div>
          </div>
        </div>

        {/* Solution Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {config?.tabs?.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              aria-label={`Show ${tab.label} solutions`}
              aria-pressed={activeTab === tab.id}
            >
              <span className="flex items-center gap-2">
                {getIcon(tab.icon, "w-4 h-4")}
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {config?.solutions
            ?.filter(solution => solution.tabId === activeTab)
            .map((solution) => (
              <div
                key={solution.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-indigo-600 dark:hover:border-indigo-500"
              >
                <div className={`w-12 h-12 rounded-xl ${solution.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(solution.icon, "w-6 h-6 text-white")}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{solution.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{solution.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.techStack?.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={solution.link}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                >
                  Learn more
                  <HiArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" />
                </Link>
              </div>
            ))}
        </div>

        {/* Architecture Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{config?.architecture?.title}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">{config?.architecture?.description}</p>

            <div className="space-y-4">
              {config?.architecture?.features?.map((feature) => (
                <div key={feature.id} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg ${feature.bgColor} flex items-center justify-center shrink-0 mt-1`}>
                    {getIcon(feature.icon, "w-4 h-4 text-white")}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={config?.architecture?.link}
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-2 transition-all duration-300"
            >
              View Architecture Overview
              <HiArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-2 mb-6">
                <HiOutlineDatabase className="w-6 h-6" />
                <span className="font-semibold">System Architecture</span>
              </div>

              <div className="space-y-4">
                {config?.architecture?.layers?.map((layer, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        {getIcon(layer.icon, "w-4 h-4 text-white")}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{layer.name}</p>
                        <p className="text-xs text-indigo-100">{layer.tech}</p>
                      </div>
                    </div>
                    {idx < config.architecture.layers.length - 1 && (
                      <div className="absolute left-4 -bottom-4 w-0.5 h-4 bg-white/20" aria-hidden="true"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-400/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-400/30 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Development Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {config?.metrics?.map((metric) => (
            <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                  {getIcon(metric.icon, "w-5 h-5 text-white")}
                </div>
                <span className={`text-sm font-medium ${metric.trendColor}`}>{metric.trend}</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{config?.timeline?.title}</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {config?.timeline?.phases?.map((phase, idx) => (
              <div key={phase.id} className="relative">
                {idx < config.timeline.phases.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-indigo-200 dark:bg-indigo-900/30" aria-hidden="true"></div>
                )}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-full ${phase.bgColor} flex items-center justify-center text-white font-bold text-sm`}>
                      {phase.number}
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">{phase.name}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{phase.description}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{phase.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {config?.successStories?.map((story) => (
            <div
              key={story.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  {story.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{story.company}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{story.industry}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{story.testimonial}</p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {story.results?.map((result, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{result.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">{result.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href={story.link}
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-sm"
              >
                Read Full Story
                <HiArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{config?.footerCta?.title}</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">{config?.footerCta?.description}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={config?.footerCta?.primaryLink}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {config?.footerCta?.primaryText}
            </Link>
            <Link
              href={config?.footerCta?.secondaryLink}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {config?.footerCta?.secondaryText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutionsSection2;