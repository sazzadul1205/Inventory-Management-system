// page/frontend/Home/TrustSignalsSection/TrustSignalsSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import { FaAward, FaCertificate, FaRibbon } from 'react-icons/fa';
import {
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineBadgeCheck,
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineClock,
  HiOutlineHeart,
  HiOutlineArrowRight,
} from 'react-icons/hi';
import { HiOutlineTrophy } from "react-icons/hi2";

const TrustSignalsSection1 = ({ config }) => {
  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Trust signals section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Trust signals badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <HiOutlineShieldCheck className={`w-4 h-4 mr-2 ${config.badge.textColor}`} />
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

        {/* Stats Grid */}
        {config?.stats?.show && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Badges */}
        {config?.badges?.show && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.badges.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-8">
              {config.badges.items.map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group"
                >
                  <div className="w-24 h-24 bg-linear-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    {badge.icon === 'award' && <FaAward className="w-12 h-12 text-green-600 dark:text-green-400" />}
                    {badge.icon === 'certificate' && <FaCertificate className="w-12 h-12 text-green-600 dark:text-green-400" />}
                    {badge.icon === 'ribbon' && <FaRibbon className="w-12 h-12 text-green-600 dark:text-green-400" />}
                    {badge.icon === 'shield' && <HiOutlineShieldCheck className="w-12 h-12 text-green-600 dark:text-green-400" />}
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                    {badge.name}
                  </span>
                  {badge.issuer && (
                    <span className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {badge.issuer}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {config?.certifications?.show && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.certifications.title}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config.certifications.items.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mr-4 shrink-0">
                      <HiOutlineBadgeCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {config?.trustIndicators?.map((indicator, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-100 dark:border-green-800/30 text-center"
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                {indicator.icon === 'users' && <HiOutlineUsers className="w-8 h-8 text-green-600 dark:text-green-400" />}
                {indicator.icon === 'globe' && <HiOutlineGlobeAlt className="w-8 h-8 text-green-600 dark:text-green-400" />}
                {indicator.icon === 'clock' && <HiOutlineClock className="w-8 h-8 text-green-600 dark:text-green-400" />}
                {indicator.icon === 'trophy' && <HiOutlineTrophy className="w-8 h-8 text-green-600 dark:text-green-400" />}
                {indicator.icon === 'heart' && <HiOutlineHeart className="w-8 h-8 text-green-600 dark:text-green-400" />}
                {indicator.icon === 'star' && <HiOutlineStar className="w-8 h-8 text-green-600 dark:text-green-400" />}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {indicator.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>

        {/* Security Features */}
        {config?.security?.show && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.security.title}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config.security.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3 shrink-0">
                    <HiOutlineShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials/Reviews */}
        {config?.testimonials?.show && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.testimonials.title}
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {config.testimonials.items.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-3">
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

                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trust CTA */}
        {config?.cta?.show && (
          <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                {config.cta.title}
              </h3>
              <p className="text-green-100 mb-8 text-lg">
                {config.cta.description}
              </p>
              <Link
                href={config.cta.button.url}
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {config.cta.button.text}
                <HiOutlineArrowRight className="ml-2" />
              </Link>
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
      `}</style>
    </section>
  );
};

export default TrustSignalsSection1;