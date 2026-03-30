// page/frontend/Home/SupplyChainConsultingSection/SupplyChainConsultingSection3.jsx

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
  HiOutlineBriefcase,
  HiOutlineCurrencyDollar,
  HiOutlineScale,
  HiOutlineCube,
  HiOutlineSparkles,
  HiOutlinePresentationChartLine,
  HiOutlineClipboardCheck
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
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Supply Chain Consulting"
    >
      {/* Hero Background with Overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={config?.backgroundImage}
          alt=""
          className="w-full h-full object-cover opacity-5 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white to-white dark:via-gray-900 dark:to-gray-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full mb-8 shadow-lg">
            <HiOutlineSparkles className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
            {config?.hero?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {config?.hero?.title?.highlight}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {config?.hero?.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={config?.hero?.primaryCta?.link}
              className="group bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              {config?.hero?.primaryCta?.text}
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={config?.hero?.secondaryCta?.link}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 shadow-lg hover:shadow-xl"
            >
              {config?.hero?.secondaryCta?.text}
            </Link>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-20">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-indigo-600 border-2 border-white dark:border-gray-800"
                 />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">{config?.trustText}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{config?.ratingText}</span>
          </div>
        </div>

        {/* Expertise Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {config?.expertise?.map((item) => (
            <div
              key={item.id}
              className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                {getIcon(item.icon, "w-8 h-8 text-white")}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{item.description}</p>
              <div className="space-y-3">
                {item.capabilities?.map((cap, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator Preview */}
        <div className="bg-linear-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 rounded-3xl p-12 text-white mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">{config?.roi?.title}</h3>
              <p className="text-gray-300 mb-8">{config?.roi?.description}</p>
              <Link
                href={config?.roi?.link}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                {config?.roi?.buttonText}
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {config?.roi?.stats?.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold mb-2 text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Consulting Approach */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {config?.approach?.title}
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {config?.approach?.steps?.map((step, idx) => (
              <div key={step.id} className="relative">
                {idx < config.approach.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-linear-to-r from-blue-600 to-indigo-600" aria-hidden="true" />
                )}
                <div className="relative text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-linear-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-3 font-semibold">{step.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{config?.caseStudies?.title}</h3>
            <Link href={config?.caseStudies?.viewAllLink} className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {config?.caseStudies?.studies?.map((study) => (
              <div
                key={study.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="h-48 bg-linear-to-br from-blue-600 to-indigo-600 relative">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium opacity-90">{study.industry}</p>
                    <p className="text-xl font-bold">{study.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{study.description}</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {study.results?.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{result.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={study.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group/link"
                  >
                    Read Case Study
                    <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {config?.testimonials?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{config?.footerCta?.title}</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{config?.footerCta?.description}</p>
          <Link
            href={config?.footerCta?.link}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {config?.footerCta?.buttonText}
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainConsultingSection3;