// page/frontend/Home/SupplyChainConsultingSection/SupplyChainConsultingSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

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
  HiOutlineBriefcase,
  HiOutlineCurrencyDollar,
  HiOutlineScale,
  HiOutlineCube
} from 'react-icons/hi';

const SupplyChainConsultingSection2 = ({ config }) => {
  const [activeCase, setActiveCase] = useState(config?.caseStudies?.[0]?.id || 1);

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
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Supply Chain Consulting Services"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-consulting-pattern opacity-5" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                {config?.badge}
              </span>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-medium rounded-full">
                {config?.experience}
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
          <div className="grid grid-cols-2 gap-4">
            {config?.quickStats?.map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700 text-center min-w-30">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Showcase - Interactive */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Case Study List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              {config?.caseStudies?.title}
            </h3>
            {config?.caseStudies?.studies?.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(study.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${activeCase === study.id
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg border border-gray-200 dark:border-gray-700'
                  }`}
                aria-label={`View case study: ${study.title}`}
                aria-pressed={activeCase === study.id}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-bold ${activeCase === study.id ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                    {study.title}
                  </h4>
                  <span className={`text-sm px-2 py-1 rounded-full ${activeCase === study.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                    {study.industry}
                  </span>
                </div>
                <p className={`text-sm mb-3 ${activeCase === study.id ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                  {study.description}
                </p>
                <div className="flex gap-4 text-sm">
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
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  {/* Company Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      {study.initials}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{study.company}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{study.industry} • {study.size}</p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        Challenge
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        Solution
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.results?.map((result, idx) => (
                      <div key={idx} className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{result.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 italic">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">"{study.testimonial?.quote}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={study.testimonial?.avatar}
                        alt={study.testimonial?.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{study.testimonial?.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{study.testimonial?.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Consulting Services Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {config?.services?.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {config?.services?.items?.map((service) => (
              <div
                key={service.id}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-indigo-600 dark:hover:border-indigo-500"
              >
                <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(service.icon, "w-6 h-6 text-white")}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.highlights?.map((item, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                >
                  Learn more
                  <HiArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Timeline */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {config?.methodology?.title}
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {config?.methodology?.steps?.map((step, idx) => (
              <div key={step.id} className="relative">
                {idx < config.methodology.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-indigo-200 dark:bg-indigo-900/30" aria-hidden="true" />
                )}
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-2xl">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-2 font-medium">{step.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{config?.cta?.title}</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">{config?.cta?.description}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={config?.cta?.primaryLink}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {config?.cta?.primaryText}
            </Link>
            <Link
              href={config?.cta?.secondaryLink}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {config?.cta?.secondaryText}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .bg-consulting-pattern {
          background-image: radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0);
          background-size: 40px 40px;
        }
        .dark .bg-consulting-pattern {
          background-image: radial-gradient(circle at 1px 1px, #374151 1px, transparent 0);
        }
      `}</style>
    </section>
  );
};

export default SupplyChainConsultingSection2;