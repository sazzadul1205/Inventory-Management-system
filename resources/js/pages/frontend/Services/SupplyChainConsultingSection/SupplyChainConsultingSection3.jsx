// page/frontend/Home/SupplyChainConsultingSection/SupplyChainConsultingSection3.jsx

// React
import { Link } from '@inertiajs/react';

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
  HiOutlineCube,
  HiOutlineSparkles,
  HiOutlinePresentationChartLine,
  HiOutlineClipboardCheck,
  HiOutlineStar
} from 'react-icons/hi';

const SupplyChainConsultingSection3 = ({ config }) => {
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
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      case 'presentation':
        return <HiOutlinePresentationChartLine className={className} />;
      case 'clipboard':
        return <HiOutlineClipboardCheck className={className} />;
      default:
        return <HiOutlinePresentationChartLine className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Hero Background with Overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={config?.backgroundImage || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=800&fit=crop"}
          alt=""
          className="w-full h-full object-cover opacity-5 dark:opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white to-white dark:via-gray-900 dark:to-gray-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          {config?.badge && (
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 shadow-lg">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-xs md:text-sm font-medium">{config.badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8">
            {config?.hero?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {config?.hero?.title?.highlight}
            </span>
          </h1>

          {config?.hero?.description && (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
              {config.hero.description}
            </p>
          )}

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {config?.hero?.primaryCta?.text && (
              <Link
                href={config.hero.primaryCta.link || "/contact"}
                className="group bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
              >
                {config.hero.primaryCta.text}
                <HiArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            )}
            {config?.hero?.secondaryCta?.text && (
              <Link
                href={config.hero.secondaryCta.link || "/demo"}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                {config.hero.secondaryCta.text}
              </Link>
            )}
          </div>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5 sm:-space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-linear-to-br from-blue-400 to-indigo-600 border-2 border-white dark:border-gray-800"
                />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{config?.trustText}</span>
          </div>
          <div className="flex items-center gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, i) => (
              <HiOutlineStar key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{config?.ratingText}</span>
          </div>
        </div>

        {/* Expertise Pillars */}
        {config?.expertise && config.expertise.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {config.expertise.map((item) => (
              <div
                key={item.id}
                className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  {getIcon(item.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-white")}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {item.description}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {item.capabilities?.map((cap, idx) => (
                    <div key={idx} className="flex items-center text-[10px] sm:text-xs">
                      <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ROI Calculator Preview */}
        {config?.roi?.show && (
          <div className="bg-linear-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white mb-16 sm:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.roi.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
                  {config.roi.description}
                </p>
                <Link
                  href={config.roi.link || "/roi-calculator"}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/20 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                >
                  {config.roi.buttonText}
                  <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {config.roi.stats?.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1 text-blue-400">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Consulting Approach */}
        {config?.approach?.show && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
              {config.approach.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
              {config.approach.steps?.map((step) => (
                <div key={step.id} className="relative text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 md:mb-6 bg-linear-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl shadow-xl">
                    {step.number}
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                  {step.duration && (
                    <p className="text-[8px] sm:text-[10px] text-blue-600 dark:text-blue-400 mt-1 sm:mt-2 font-semibold">
                      {step.duration}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Studies Grid */}
        {config?.caseStudies?.show && (
          <div className="mb-16 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 md:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {config.caseStudies.title}
              </h3>
              <Link href={config.caseStudies.viewAllLink || "/case-studies"} className="text-blue-600 dark:text-blue-400 font-semibold hover:underline text-sm sm:text-base">
                View All →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {config.caseStudies.studies?.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="h-32 sm:h-36 md:h-40 lg:h-48 bg-linear-to-br from-blue-600 to-indigo-600 relative">
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
                          <div className="text-xs sm:text-sm md:text-base font-bold text-blue-600 dark:text-blue-400">
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
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold text-[10px] sm:text-xs group/link"
                    >
                      Read Case Study
                      <HiArrowRight className="ml-1 sm:ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials */}
        {config?.testimonials && config.testimonials.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {config.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic mb-3 sm:mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Banner */}
        {config?.footerCta?.show && (
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 text-center text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
              {config.footerCta.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {config.footerCta.description}
            </p>
            <Link
              href={config.footerCta.link || "/contact"}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base"
            >
              {config.footerCta.buttonText}
              <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SupplyChainConsultingSection3;