// page/frontend/Home/CustomSolutionsSection/CustomSolutionsSection1.jsx

// React
import { Link } from '@inertiajs/react';

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
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineCode,
  HiOutlineCube,
  HiOutlineRefresh,
  HiOutlineChip,
  HiOutlineCloudUpload,
  HiOutlineDeviceMobile,
  HiOutlineCloud,
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const CustomSolutionsSection1 = ({ config }) => {
  
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
      default:
        return <HiOutlineCog className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern - Circuit/Code Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L20 10 L20 20 L10 20 Z M30 10 L40 10 L40 20 L30 20 Z M50 10 L60 10 L60 20 L50 20 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          {config?.badge && (
            <div className="inline-flex items-center bg-indigo-50 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-indigo-100 dark:border-gray-700">
              <HiOutlineCog className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300">
                {config.badge}
              </span>
            </div>
          )}

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title}
          </h2>

          {config?.description && (
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Stats Bar */}
        {config?.stats && config.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-16">
            {config.stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Solutions Grid */}
        {config?.solutions && config.solutions.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {config.solutions.map((solution) => (
              <div
                key={solution.id}
                className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl ${solution.bgColor} flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(solution.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-white")}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {solution.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {solution.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 mr-1.5 sm:mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.link}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-2 transition-all duration-300 text-[10px] sm:text-xs"
                >
                  Learn more
                  <HiArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Integration Capabilities */}
        {config?.integration?.show && (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">

            {/* Left Content - Integration Features */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {config.integration.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {config.integration.description}
              </p>

              <div className="space-y-3 sm:space-y-4">
                {config.integration.features?.map((feature) => (
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

              <div className="pt-2 sm:pt-4">
                <Link
                  href={config.integration.link || "/integrations"}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  View Integration Options
                  <HiOutlineArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>

            {/* Right Content - API Showcase */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-linear-to-br from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white shadow-2xl">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  <HiOutlineCode className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold text-sm sm:text-base">RESTful API</span>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {config.integration.codeExamples?.map((example, idx) => (
                    <div key={idx} className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 font-mono text-[10px] sm:text-xs">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                        <span className="text-indigo-200">{example.method}</span>
                        <span className="text-white break-all">{example.endpoint}</span>
                      </div>
                      <p className="text-indigo-100 text-[8px] sm:text-[10px]">{example.description}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs">
                  <span className="text-indigo-200">Rate Limit: 10,000/min</span>
                  <span className="text-indigo-200">Documentation →</span>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 flex gap-1.5 sm:gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center">
                  <HiOutlineChip className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-indigo-600" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center">
                  <HiOutlineCloud className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Development Process */}
        {config?.process?.show && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
              {config.process.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.process.steps?.map((step) => (
                <div key={step.id} className="relative">
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-gray-200 dark:border-gray-700 shadow-md">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-base sm:text-lg">
                      {step.number}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1 sm:mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                    {step.duration && (
                      <p className="text-[8px] sm:text-[10px] text-indigo-600 dark:text-indigo-400 mt-1 sm:mt-2 font-medium">
                        {step.duration}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Stack */}
        {config?.techStack?.show && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">
              {config.techStack.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
              {config.techStack.items?.map((tech) => (
                <div key={tech.id} className="text-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 bg-white dark:bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    {getIcon(tech.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-indigo-600 dark:text-indigo-400")}
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">{tech.name}</p>
                  <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Studies */}
        {config?.caseStudies && config.caseStudies.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {config.caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="h-32 sm:h-36 md:h-40 lg:h-48 bg-linear-to-br from-indigo-600 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <p className="text-[10px] sm:text-xs font-medium opacity-90">{study.industry}</p>
                    <p className="text-sm sm:text-base md:text-lg font-bold">{study.title}</p>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                    {study.description}
                  </p>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {study.results?.map((result, idx) => (
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
                    href={study.link}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-[10px] sm:text-xs group/link"
                  >
                    Read Case Study
                    <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
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

export default CustomSolutionsSection1;