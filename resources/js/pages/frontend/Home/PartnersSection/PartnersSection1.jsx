// page/frontend/Home/PartnersSection/PartnersSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineBadgeCheck,
} from 'react-icons/hi';
import { MdOutlineHandshake } from "react-icons/md";

const PartnersSection1 = ({ config }) => {
  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Partners section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Partners badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
              )}
              <MdOutlineHandshake className={`w-4 h-4 mr-2 ${config.badge.textColor}`} />
              <span className={`text-sm font-medium ${config.badge.textColor}`}>
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.heading?.prefix}{' '}
            <span className={`${config?.heading?.highlightColor} relative inline-block`}>
              {config?.heading?.highlightedText}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                aria-hidden="true"
              >
                <line
                  x1="0" y1="4" x2="200" y2="4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  className={config?.heading?.highlightColor}
                />
              </svg>
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Stats Section */}
        {config?.stats?.show && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Partner */}
        {config?.featured?.show && (
          <div className="mb-20">
            <div className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 border border-indigo-100 dark:border-indigo-800/30">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Partner Logo & Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-3">
                      <img
                        src={config.featured.logo}
                        alt={config.featured.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {config.featured.name}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                        {config.featured.type} Partner
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {config.featured.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {config.featured.badges?.map((badge, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                      >
                        <HiOutlineBadgeCheck className="w-4 h-4 text-indigo-500 mr-2" />
                        {badge}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={config.featured.link}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group"
                  >
                    Learn more about our partnership
                    <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  {config.featured.metrics?.map((metric, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
                      <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {config?.partners?.map((partner, index) => (
            <div
              key={partner.id || index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Logo */}
              <div className="h-24 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full w-auto object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-2">
                {partner.name}
              </h3>

              {/* Type */}
              <p className="text-sm text-indigo-600 dark:text-indigo-400 text-center mb-3">
                {partner.type}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center line-clamp-2 mb-4">
                {partner.description}
              </p>

              {/* Link */}
              {partner.link && (
                <div className="text-center">
                  <Link
                    href={partner.link}
                    className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                  >
                    Learn More
                    <HiOutlineArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Become a Partner CTA */}
        {config?.cta?.show && (
          <div className="text-center mt-20">
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-4">
                  {config.cta.title}
                </h3>
                <p className="text-indigo-100 mb-8 text-lg">
                  {config.cta.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={config.cta.primaryButton.url}
                    className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {config.cta.primaryButton.text}
                    <HiOutlineArrowRight className="ml-2" />
                  </Link>

                  {config.cta.secondaryButton?.show && (
                    <Link
                      href={config.cta.secondaryButton.url}
                      className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                    >
                      {config.cta.secondaryButton.text}
                    </Link>
                  )}
                </div>

                <p className="text-sm text-indigo-200 mt-6">
                  {config.cta.note}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials from Partners */}
        {config?.testimonials?.show && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What Our Partners Say
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {config.testimonials.items.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    {/* Partner Logo */}
                    <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg overflow-hidden p-2 mr-3">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.partner}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.partner}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Rating */}
                  {testimonial.rating && (
                    <div className="flex items-center mt-4">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating
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

      {/* Styles */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
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