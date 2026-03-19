// page/frontend/Home/CustomSolutionsSection/CustomSolutionsSection3.jsx

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
  HiOutlineSparkles,
  HiOutlineTrendingUp,
  HiOutlineHeart,
  HiOutlineTemplate,
  HiOutlineBeaker
} from 'react-icons/hi';

const CustomSolutionsSection3 = ({ config }) => {
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
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      case 'trending':
        return <HiOutlineTrendingUp className={className} />;
      case 'heart':
        return <HiOutlineHeart className={className} />;
      case 'template':
        return <HiOutlineTemplate className={className} />;
      case 'beaker':
        return <HiOutlineBeaker className={className} />;
      default:
        return <HiOutlineCog className={className} />;
    }
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Custom Solutions"
    >
      {/* Hero Background with Overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={config?.backgroundImage}
          alt=""
          className="w-full h-full object-cover opacity-5 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white to-white dark:via-gray-900 dark:to-gray-900"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full mb-8 shadow-lg">
            <HiOutlineSparkles className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
            {config?.hero?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {config?.hero?.title?.highlight}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {config?.hero?.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={config?.hero?.primaryCta?.link}
              className="group bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              {config?.hero?.primaryCta?.text}
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={config?.hero?.secondaryCta?.link}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-500 shadow-lg hover:shadow-xl"
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
                  className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-400 to-purple-600 border-2 border-white dark:border-gray-800"
                ></div>
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

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {config?.stats?.map((stat) => (
            <div key={stat.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">{stat.label}</div>
              <p className="text-xs text-gray-500 dark:text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Innovation Platform */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{config?.innovation?.title}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">{config?.innovation?.description}</p>

            <div className="space-y-4">
              {config?.innovation?.features?.map((feature) => (
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
              href={config?.innovation?.link}
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-2 transition-all duration-300"
            >
              Explore Innovation Lab
              <HiArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-2 mb-6">
                <HiOutlineBeaker className="w-6 h-6" />
                <span className="font-semibold">INNOVATION LAB</span>
              </div>
              <div className="space-y-4">
                {config?.innovation?.projects?.map((project, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
                    <div>
                      <span className="text-sm font-medium">{project.name}</span>
                      <p className="text-xs text-indigo-200">{project.status}</p>
                    </div>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{project.progress}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-indigo-100">Next release: {config?.innovation?.nextRelease}</p>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-400/30 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Solution Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {config?.showcase?.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                {getIcon(item.icon, "w-8 h-8 text-white")}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{item.description}</p>
              <ul className="space-y-3 mb-6">
                {item.capabilities?.map((capability, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{capability}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={item.link}
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold group/link"
              >
                Learn more
                <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Client Success Platform */}
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-3xl p-12 text-white mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">{config?.success?.title}</h3>
              <p className="text-indigo-100 mb-8">{config?.success?.description}</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {config?.success?.stats?.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-indigo-100">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href={config?.success?.link}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                View Success Stories
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {config?.success?.testimonials?.map((testimonial, idx) => (
                <div key={idx} className="bg-white/10 rounded-xl p-4">
                  <p className="text-sm font-medium mb-1">{testimonial.name}</p>
                  <p className="text-xs text-indigo-200 mb-2">{testimonial.role}</p>
                  <p className="text-xs italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Radar */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {config?.techRadar?.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {config?.techRadar?.categories?.map((category, idx) => (
              <div key={idx} className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{category.name}</h4>
                <div className="space-y-3">
                  {category.technologies?.map((tech, techIdx) => (
                    <div key={techIdx} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{tech.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${tech.badgeColor}`}>
                        {tech.status}
                      </span>
                    </div>
                  ))}
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
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{config?.footerCta?.title}</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">{config?.footerCta?.description}</p>
          <Link
            href={config?.footerCta?.link}
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {config?.footerCta?.buttonText}
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutionsSection3;