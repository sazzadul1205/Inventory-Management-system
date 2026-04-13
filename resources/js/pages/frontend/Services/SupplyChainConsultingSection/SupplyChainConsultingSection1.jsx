// page/frontend/Home/SupplyChainConsultingSection/SupplyChainConsultingSection1.jsx

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
  HiOutlineCheckCircle,
  HiOutlineAcademicCap,
  HiOutlineBriefcase
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const SupplyChainConsultingSection1 = ({ config }) => {

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
      default:
        return <HiOutlineChartBar className={className} />;
    }
  };
  
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern - Strategy Grid */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'linear-gradient(45deg, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          {config?.badge && (
            <div className="inline-flex items-center bg-purple-50 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-purple-100 dark:border-gray-700">
              <HiOutlineBriefcase className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">
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

        {/* Value Proposition Cards */}
        {config?.valueProps && config.valueProps.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-16 sm:mb-20">
            {config.valueProps.map((prop) => (
              <div
                key={prop.id}
                className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl ${prop.bgColor} flex items-center justify-center mb-3 sm:mb-4 md:mb-6`}>
                  {getIcon(prop.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-white")}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{prop.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Main Consulting Areas */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">

          {/* Left Content - Consulting Areas List */}
          <div className="space-y-6 sm:space-y-8">
            {config?.consultingAreas?.title && (
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {config.consultingAreas.title}
              </h3>
            )}

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {config?.consultingAreas?.areas?.map((area) => (
                <div key={area.id} className="flex gap-3 sm:gap-4 group">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${area.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(area.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white")}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {area.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{area.description}</p>

                    {/* Sub-areas */}
                    {area.subAreas && area.subAreas.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                        {area.subAreas.map((sub, idx) => (
                          <span key={idx} className="text-[8px] sm:text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-1.5 sm:px-2 py-0.5 rounded-full">
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {config?.ctaText && (
              <div className="pt-2 sm:pt-4">
                <Link
                  href={config?.ctaLink || "/contact"}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {config.ctaText}
                  <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            )}
          </div>

          {/* Right Content - Results/ROI Card */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-linear-to-br from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">
                {config?.results?.title}
              </h4>

              <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8">
                {config?.results?.metrics?.map((metric) => (
                  <div key={metric.id}>
                    <div className="flex justify-between text-[10px] sm:text-xs mb-1 sm:mb-2">
                      <span>{metric.label}</span>
                      <span className="font-semibold">{metric.value}</span>
                    </div>
                    <div className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: metric.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {config?.results?.stats?.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-purple-100">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-full blur-2xl" />
            </div>

            {/* Floating Testimonial */}
            {config?.testimonial && (
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 md:-bottom-6 md:-left-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-xl border border-gray-200 dark:border-gray-700 max-w-60 sm:max-w-70 md:max-w-xs">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <img
                    src={config.testimonial.avatar}
                    alt={config.testimonial.name}
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      {config.testimonial.name}
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                      {config.testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 italic">
                  "{config.testimonial.quote}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Methodology Section */}
        {config?.methodology?.show && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
              {config.methodology.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.methodology.steps?.map((step) => (
                <div key={step.id} className="relative">
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-gray-200 dark:border-gray-700 shadow-md">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-base sm:text-lg md:text-xl">
                      {step.number}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1 sm:mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Industries We Serve */}
        {config?.industries?.show && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">
              {config.industries.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.industries.items?.map((industry) => (
                <div key={industry.id} className="text-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 bg-white dark:bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    {getIcon(industry.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-purple-600 dark:text-purple-400")}
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-gray-900 dark:text-white">{industry.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SupplyChainConsultingSection1;