// page/frontend/Home/ReturnsManagementSection/ReturnsManagementSection3.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import { GoPackage } from "react-icons/go";
import {
  HiOutlineRefresh,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineUser,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCube,
  HiOutlineSparkles,
  HiOutlineTrendingUp,
  HiOutlineHeart,
  HiOutlineGlobe,
  HiOutlineStar
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

const ReturnsManagementSection3 = ({ config }) => {
  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'user':
        return <HiOutlineUser className={className} />;
      case 'package':
        return <GoPackage className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'cube':
        return <HiOutlineCube className={className} />;
      case 'sparkles':
        return <HiOutlineSparkles className={className} />;
      case 'trending':
        return <HiOutlineTrendingUp className={className} />;
      case 'heart':
        return <HiOutlineHeart className={className} />;
      case 'globe':
        return <HiOutlineGlobe className={className} />;
      default:
        return <HiOutlineRefresh className={className} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Hero Background with Overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={config?.backgroundImage || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=800&fit=crop"}
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
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-linear-to-r from-orange-600 to-yellow-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 shadow-lg">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-xs md:text-sm font-medium">{config.badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8">
            {config?.hero?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
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
                className="group bg-linear-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
              >
                {config.hero.primaryCta.text}
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            )}
            {config?.hero?.secondaryCta?.text && (
              <Link
                href={config.hero.secondaryCta.link || "/demo"}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-orange-600 dark:hover:border-orange-500 shadow-lg hover:shadow-xl text-sm sm:text-base"
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
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-linear-to-br from-orange-400 to-yellow-600 border-2 border-white dark:border-gray-800"
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

        {/* Stats Grid */}
        {config?.stats && config.stats.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20">
            {config.stats.map((stat) => (
              <div key={stat.id} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                  {stat.label}
                </div>
                <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">{stat.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Returns Intelligence */}
        {config?.intelligence?.show && (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {config.intelligence.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
                {config.intelligence.description}
              </p>

              <div className="space-y-3 sm:space-y-4">
                {config.intelligence.features?.map((feature) => (
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

              <Link
                href={config.intelligence.link || "/ai-capabilities"}
                className="inline-flex items-center text-orange-600 dark:text-orange-400 font-semibold hover:gap-2 transition-all duration-300 text-sm sm:text-base"
              >
                Explore AI Capabilities
                <HiOutlineArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-linear-to-br from-orange-600 to-yellow-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  <HiOutlineTrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold text-sm sm:text-base">AI INSIGHTS</span>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {config.intelligence.insights?.map((insight, idx) => (
                    <div key={idx} className="flex flex-wrap items-center justify-between p-2.5 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl">
                      <span className="text-[10px] sm:text-xs">{insight.label}</span>
                      <span className="font-bold text-xs sm:text-sm">{insight.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-white/20">
                  <p className="text-[10px] sm:text-xs text-orange-100">Last updated: {config.intelligence.lastUpdated}</p>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-orange-400/30 rounded-full blur-2xl" />
            </div>
          </div>
        )}

        {/* Solution Cards */}
        {config?.solutions && config.solutions.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            {config.solutions.map((solution) => (
              <div
                key={solution.id}
                className="group relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br ${solution.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  {getIcon(solution.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-white")}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {solution.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {solution.benefits?.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-[10px] sm:text-xs">
                      <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.link}
                  className="inline-flex items-center text-orange-600 dark:text-orange-400 font-semibold text-[10px] sm:text-xs group/link"
                >
                  Learn more
                  <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Sustainability Impact */}
        {config?.sustainability?.show && (
          <div className="bg-linear-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white mb-16 sm:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.sustainability.title}
                </h3>
                <p className="text-green-100 text-sm sm:text-base mb-6 sm:mb-8">
                  {config.sustainability.description}
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
                  {config.sustainability.stats?.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5 sm:mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-green-100">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={config.sustainability.link || "/sustainability"}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/20 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                >
                  View Impact Report
                  <HiOutlineArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {config.sustainability.initiatives?.map((initiative, idx) => (
                  <div key={idx} className="text-center p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{initiative.emoji}</div>
                    <div className="text-[10px] sm:text-xs font-medium mb-0.5 sm:mb-1">{initiative.title}</div>
                    <div className="text-[8px] sm:text-[10px] text-green-100">{initiative.impact}</div>
                  </div>
                ))}
              </div>
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
          <div className="bg-linear-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 text-center text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
              {config.footerCta.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              {config.footerCta.description}
            </p>
            <Link
              href={config.footerCta.link || "/contact"}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base"
            >
              {config.footerCta.buttonText}
              <HiOutlineArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReturnsManagementSection3;