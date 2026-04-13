// page/frontend/Home/SupplyChainConsultingSection/SupplyChainConsultingSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineChartBar,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineGlobe,
  HiOutlineUserGroup,
  HiOutlineLightningBolt,
  HiOutlineDocumentReport,
  HiOutlineCog,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCurrencyDollar,
  HiOutlineScale,
  HiOutlineCube
} from 'react-icons/hi';

const SupplyChainConsultingSection2 = ({ config }) => {

  // State for active case
  const [activeCase, setActiveCase] = useState(config?.caseStudies?.studies?.[0]?.id || 1);

  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'trending':
        return <HiOutlineTrendingUp className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'globe':
        return <HiOutlineGlobe className={className} />;
      case 'users':
        return <HiOutlineUserGroup className={className} />;
      case 'bolt':
        return <HiOutlineLightningBolt className={className} />;
      case 'report':
        return <HiOutlineDocumentReport className={className} />;
      case 'cog':
        return <HiOutlineCog className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'academic':
        return <HiOutlineAcademicCap className={className} />;
      case 'briefcase':
        return <HiOutlineBriefcase className={className} />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} />;
      case 'scale':
        return <HiOutlineScale className={className} />;
      case 'cube':
        return <HiOutlineCube className={className} />;
      default:
        return <HiOutlineChartBar className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,#374151_1px,transparent_0)] bg-size-[40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              {config?.badge && (
                <span className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  {config.badge}
                </span>
              )}
              {config?.experience && (
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[10px] sm:text-xs font-medium rounded-full">
                  {config.experience}
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
          {config?.quickStats && config.quickStats.length > 0 && (
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {config.quickStats.map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border border-gray-200 dark:border-gray-700 text-center min-w-20 sm:min-w-22.5">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Case Study Showcase - Interactive */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">

          {/* Case Study List */}
          <div className="space-y-3 sm:space-y-4">
            {config?.caseStudies?.title && (
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {config.caseStudies.title}
              </h3>
            )}
            {config?.caseStudies?.studies?.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(study.id)}
                className={`w-full text-left p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl transition-all duration-300 ${activeCase === study.id
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg border border-gray-200 dark:border-gray-700'
                  }`}
                aria-label={`View case study: ${study.title}`}
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1 sm:mb-2">
                  <h4 className={`font-bold text-sm sm:text-base ${activeCase === study.id ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                    {study.title}
                  </h4>
                  <span className={`text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full ${activeCase === study.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                    {study.industry}
                  </span>
                </div>
                <p className={`text-[10px] sm:text-xs mb-2 sm:mb-3 ${activeCase === study.id ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-[8px] sm:text-[10px]">
                  <span className={activeCase === study.id ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-500'}>
                    ⏱️ {study.timeline}
                  </span>
                  <span className={activeCase === study.id ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-500'}>
                    💰 {study.savings}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Case Study Details */}
          <div className="lg:sticky lg:top-24">
            {config?.caseStudies?.studies?.map((study) => (
              study.id === activeCase && (
                <div
                  key={study.id}
                  className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  {/* Company Header */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl">
                      {study.initials}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                        {study.company}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                        {study.industry} • {study.size}
                      </p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        Challenge
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        Solution
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  {study.results && study.results.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            {result.value}
                          </div>
                          <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Testimonial */}
                  {study.testimonial && (
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 italic">
                      <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                        "{study.testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <img
                          src={study.testimonial.avatar}
                          alt={study.testimonial.name}
                          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                            {study.testimonial.name}
                          </p>
                          <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                            {study.testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        </div>

        {/* Consulting Services Grid */}
        {config?.services?.show && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
              {config.services.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {config.services.items?.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-indigo-600 dark:hover:border-indigo-500"
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(service.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white")}
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {service.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    {service.highlights?.map((item, idx) => (
                      <li key={idx} className="flex items-center text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                        <HiOutlineCheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 mr-1.5 sm:mr-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs font-semibold hover:gap-2 transition-all duration-300"
                  >
                    Learn more
                    <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5 opacity-0 group-hover:opacity-100 group-hover:ml-1.5 transition-all" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Methodology Timeline */}
        {config?.methodology?.show && (
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
              {config.methodology.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.methodology.steps?.map((step) => (
                <div key={step.id} className="relative text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-base sm:text-lg md:text-xl">
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
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.cta?.show && (
          <div className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 text-center text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
              {config.cta.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {config.cta.description}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Link
                href={config.cta.primaryLink}
                className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base"
              >
                {config.cta.primaryText}
              </Link>
              <Link
                href={config.cta.secondaryLink}
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                {config.cta.secondaryText}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SupplyChainConsultingSection2;