// page/frontend/Home/PartnersSection/PartnersSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineBadgeCheck,
} from 'react-icons/hi';
import { MdOutlineHandshake } from "react-icons/md";

const PartnersSection1 = ({ config }) => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-indigo-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-indigo-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
              )}
              <MdOutlineHandshake className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-indigo-700 dark:text-gray-300" />
              <span className="text-xs sm:text-sm font-medium text-indigo-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-indigo-600 dark:text-indigo-400 relative inline-block">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Stats Section */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Partner */}
        {config?.featured?.show && (
          <div className="mb-16 sm:mb-20">
            <div className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-indigo-100 dark:border-indigo-800/30">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Partner Logo & Info */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg overflow-hidden p-2 sm:p-3">
                      <img
                        src={config.featured.logo}
                        alt={config.featured.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {config.featured.name}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm sm:text-base">
                        {config.featured.type} Partner
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {config.featured.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {config.featured.badges?.map((badge, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm border border-gray-200 dark:border-gray-700"
                      >
                        <HiOutlineBadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-500 mr-1 sm:mr-2" />
                        {badge}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={config.featured.link}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group text-sm sm:text-base"
                  >
                    Learn more about our partnership
                    <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {config.featured.metrics?.map((metric, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-md text-center">
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1 sm:mb-2">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {config?.partners?.map((partner, index) => (
            <div
              key={partner.id || index}
              className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Logo */}
              <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center mb-3 sm:mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full w-auto object-contain filter group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white text-center mb-1 sm:mb-2">
                {partner.name}
              </h3>

              {/* Type */}
              <p className="text-[10px] sm:text-xs md:text-sm text-indigo-600 dark:text-indigo-400 text-center mb-2 sm:mb-3">
                {partner.type}
              </p>

              {/* Description */}
              <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 text-center line-clamp-2 mb-3 sm:mb-4">
                {partner.description}
              </p>

              {/* Link */}
              {partner.link && (
                <div className="text-center">
                  <Link
                    href={partner.link}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors text-[10px] sm:text-xs"
                  >
                    Learn More
                    <HiOutlineArrowRight className="ml-0.5 sm:ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Become a Partner CTA */}
        {config?.cta?.show && (
          <div className="text-center mt-16 sm:mt-20">
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative max-w-3xl mx-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.cta.title}
                </h3>
                <p className="text-indigo-100 text-sm sm:text-base mb-6 sm:mb-8">
                  {config.cta.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href={config.cta.primaryButton.url}
                    className="inline-flex items-center justify-center bg-white text-indigo-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    {config.cta.primaryButton.text}
                    <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
                  </Link>

                  {config.cta.secondaryButton?.show && (
                    <Link
                      href={config.cta.secondaryButton.url}
                      className="inline-flex items-center justify-center border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                      {config.cta.secondaryButton.text}
                    </Link>
                  )}
                </div>

                <p className="text-[10px] sm:text-xs text-indigo-200 mt-4 sm:mt-6">
                  {config.cta.note}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials from Partners */}
        {config?.testimonials?.show && config?.testimonials?.items && (
          <div className="mt-16 sm:mt-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              What Our Partners Say
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {config.testimonials.items.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    {/* Partner Logo */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white dark:bg-gray-700 rounded-lg overflow-hidden p-1.5 sm:p-2 mr-2 sm:mr-3">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.partner}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {testimonial.partner}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Rating */}
                  {testimonial.rating && (
                    <div className="flex items-center mt-3 sm:mt-4">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${i < testimonial.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection1;