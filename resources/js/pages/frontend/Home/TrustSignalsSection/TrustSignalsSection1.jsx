// page/frontend/Home/TrustSignalsSection/TrustSignalsSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
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
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-green-200 dark:bg-green-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-green-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-green-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <HiOutlineShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-700 dark:text-gray-300" />
              <span className="text-xs sm:text-sm font-medium text-green-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-green-600 dark:text-green-400 relative inline-block">
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

        {/* Stats Grid */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Badges */}
        {config?.badges?.show && config?.badges?.items && (
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.badges.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {config.badges.items.map((badge, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-linear-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-md">
                    {badge.icon === 'award' && <FaAward className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600 dark:text-green-400" />}
                    {badge.icon === 'certificate' && <FaCertificate className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600 dark:text-green-400" />}
                    {badge.icon === 'ribbon' && <FaRibbon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600 dark:text-green-400" />}
                    {badge.icon === 'shield' && <HiOutlineShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600 dark:text-green-400" />}
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-900 dark:text-white text-center">
                    {badge.name}
                  </span>
                  {badge.issuer && (
                    <span className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500 mt-0.5 sm:mt-1">
                      {badge.issuer}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {config?.certifications?.show && config?.certifications?.items && (
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.certifications.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.certifications.items.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-green-100 dark:bg-green-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3 md:mr-4 shrink-0">
                      <HiOutlineBadgeCheck className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-0.5 sm:mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
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
        {config?.trustIndicators && config.trustIndicators.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 md:mb-20">
            {config.trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 border border-green-100 dark:border-green-800/30 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 shadow-sm">
                  {indicator.icon === 'users' && <HiOutlineUsers className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-green-600 dark:text-green-400" />}
                  {indicator.icon === 'globe' && <HiOutlineGlobeAlt className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-green-600 dark:text-green-400" />}
                  {indicator.icon === 'clock' && <HiOutlineClock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-green-600 dark:text-green-400" />}
                  {indicator.icon === 'trophy' && <HiOutlineTrophy className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-green-600 dark:text-green-400" />}
                  {indicator.icon === 'heart' && <HiOutlineHeart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-green-600 dark:text-green-400" />}
                  {indicator.icon === 'star' && <HiOutlineStar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-green-600 dark:text-green-400" />}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {indicator.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {indicator.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Security Features */}
        {config?.security?.show && config?.security?.items && (
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.security.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {config.security.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 sm:p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shrink-0">
                    <HiOutlineShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-0.5 sm:mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials/Reviews */}
        {config?.testimonials?.show && config?.testimonials?.items && (
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.testimonials.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {config.testimonials.items.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-2 sm:mr-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-2 sm:mb-3">
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

                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trust CTA */}
        {config?.cta?.show && (
          <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative text-center max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                {config.cta.title}
              </h3>
              <p className="text-green-100 text-sm sm:text-base mb-6 sm:mb-8">
                {config.cta.description}
              </p>
              <Link
                href={config.cta.button.url}
                className="inline-flex items-center bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                {config.cta.button.text}
                <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrustSignalsSection1;