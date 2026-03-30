// page/frontend/Home/CustomSolutionsSection/CustomSolutionsSection1.jsx

// React
import { Link } from '@inertiajs/react';

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
  HiOutlineCloud
} from 'react-icons/hi';

const CustomSolutionsSection1 = ({ config }) => {
  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'cog':
        return <HiOutlineCog className={className} aria-hidden="true" />;
      case 'bolt':
        return <HiOutlineLightningBolt className={className} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={className} aria-hidden="true" />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={className} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobe className={className} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUserGroup className={className} aria-hidden="true" />;
      case 'report':
        return <HiOutlineDocumentReport className={className} aria-hidden="true" />;
      case 'check':
        return <HiOutlineCheckCircle className={className} aria-hidden="true" />;
      case 'code':
        return <HiOutlineCode className={className} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={className} aria-hidden="true" />;
      case 'refresh':
        return <HiOutlineRefresh className={className} aria-hidden="true" />;
      case 'chip':
        return <HiOutlineChip className={className} aria-hidden="true" />;
      case 'cloud':
        return <HiOutlineCloudUpload className={className} aria-hidden="true" />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} aria-hidden="true" />;
      default:
        return <HiOutlineCog className={className} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Custom Supply Chain Solutions"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Background Pattern - Circuit/Code Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L20 10 L20 20 L10 20 Z M30 10 L40 10 L40 20 L30 20 Z M50 10 L60 10 L60 20 L50 20 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-indigo-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-indigo-100 dark:border-gray-700">
            <HiOutlineCog className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
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

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {config?.stats?.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {config?.solutions?.map((solution) => (
            <div
              key={solution.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-16 h-16 rounded-2xl ${solution.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {getIcon(solution.icon, "w-8 h-8 text-white")}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{solution.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{solution.description}</p>
              <ul className="space-y-2 mb-6">
                {solution.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={solution.link}
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-2 transition-all duration-300"
              >
                Learn more
                <HiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Integration Capabilities */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Integration Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {config?.integration?.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {config?.integration?.description}
            </p>

            <div className="space-y-4">
              {config?.integration?.features?.map((feature) => (
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

            <div className="pt-4">
              <Link
                href={config?.integration?.link}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                View Integration Options
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Content - API Showcase */}
          <div className="relative">
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <HiOutlineCode className="w-6 h-6" />
                <span className="font-semibold">RESTful API</span>
              </div>

              <div className="space-y-4 mb-8">
                {config?.integration?.codeExamples?.map((example, idx) => (
                  <div key={idx} className="bg-white/10 rounded-xl p-4 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-indigo-200">{example.method}</span>
                      <span className="text-white">{example.endpoint}</span>
                    </div>
                    <p className="text-indigo-100 text-xs">{example.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-200">Rate Limit: 10,000/min</span>
                <span className="text-indigo-200">Documentation →</span>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 flex gap-2">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                <HiOutlineChip className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                <HiOutlineCloud className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {config?.process?.title}
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {config?.process?.steps?.map((step, idx) => (
              <div key={step.id} className="relative">
                {idx < config.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-indigo-200 dark:bg-indigo-900/30" aria-hidden="true" />
                )}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-lg">
                  <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl">
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

        {/* Technology Stack */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {config?.techStack?.title}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {config?.techStack?.items?.map((tech) => (
              <div key={tech.id} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  {getIcon(tech.icon, "w-8 h-8 text-indigo-600 dark:text-indigo-400")}
                </div>
                <p className="font-medium text-gray-900 dark:text-white">{tech.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {config?.caseStudies?.map((study) => (
            <div
              key={study.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="h-48 bg-linear-to-br from-indigo-600 to-purple-600 relative">
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
                      <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{result.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">{result.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href={study.link}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-sm group/link"
                >
                  Read Case Study
                  <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
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

export default CustomSolutionsSection1;