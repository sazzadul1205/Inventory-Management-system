// page/frontend/Home/SupplyChainConsultingSection/SupplyChainConsultingSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
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
  HiOutlineBriefcase
} from 'react-icons/hi';

const SupplyChainConsultingSection1 = ({ config }) => {
  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'chart':
        return <HiOutlineChartBar className={className} aria-hidden="true" />;
      case 'trending':
        return <HiOutlineTrendingUp className={className} aria-hidden="true" />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={className} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobe className={className} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUserGroup className={className} aria-hidden="true" />;
      case 'bolt':
        return <HiOutlineLightningBolt className={className} aria-hidden="true" />;
      case 'report':
        return <HiOutlineDocumentReport className={className} aria-hidden="true" />;
      case 'cog':
        return <HiOutlineCog className={className} aria-hidden="true" />;
      case 'check':
        return <HiOutlineCheckCircle className={className} aria-hidden="true" />;
      case 'academic':
        return <HiOutlineAcademicCap className={className} aria-hidden="true" />;
      case 'briefcase':
        return <HiOutlineBriefcase className={className} aria-hidden="true" />;
      default:
        return <HiOutlineChartBar className={className} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Supply Chain Consulting Services"
      itemScope
      itemType="https://schema.org/ConsultingService"
    >
      {/* Background Pattern - Strategy Grid */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'linear-gradient(45deg, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-purple-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-purple-100 dark:border-gray-700">
            <HiOutlineBriefcase className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              {config?.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description}
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {config?.valueProps?.map((prop) => (
            <div
              key={prop.id}
              className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${prop.bgColor} flex items-center justify-center mb-6`}>
                {getIcon(prop.icon, "w-8 h-8 text-white")}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{prop.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* Main Consulting Areas */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Consulting Areas List */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {config?.consultingAreas?.title}
            </h3>

            <div className="space-y-6">
              {config?.consultingAreas?.areas?.map((area) => (
                <div key={area.id} className="flex gap-4 group">
                  <div className={`w-12 h-12 rounded-xl ${area.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(area.icon, "w-6 h-6 text-white")}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{area.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{area.description}</p>

                    {/* Sub-areas */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {area.subAreas?.map((sub, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={config?.ctaLink}
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {config?.ctaText}
                <HiArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Content - Results/ROI Card */}
          <div className="relative">
            <div className="bg-linear-to-br from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 rounded-3xl p-8 text-white shadow-2xl">
              <h4 className="text-2xl font-bold mb-6">{config?.results?.title}</h4>

              <div className="space-y-6 mb-8">
                {config?.results?.metrics?.map((metric) => (
                  <div key={metric.id}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{metric.label}</span>
                      <span className="font-semibold">{metric.value}</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: metric.percentage }}
                       />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {config?.results?.stats?.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-purple-100">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" aria-hidden="true" />
            </div>

            {/* Floating Testimonial */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={config?.testimonial?.avatar}
                  alt={config?.testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{config?.testimonial?.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{config?.testimonial?.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">"{config?.testimonial?.quote}"</p>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {config?.methodology?.title}
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {config?.methodology?.steps?.map((step, idx) => (
              <div key={step.id} className="relative">
                {idx < config.methodology.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
                )}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-lg">
                  <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xl">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {config?.industries?.title}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {config?.industries?.items?.map((industry) => (
              <div key={industry.id} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  {getIcon(industry.icon, "w-8 h-8 text-purple-600 dark:text-purple-400")}
                </div>
                <p className="font-medium text-gray-900 dark:text-white">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainConsultingSection1;