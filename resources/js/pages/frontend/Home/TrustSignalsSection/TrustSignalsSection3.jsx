// page/frontend/Home/TrustSignalsSection/TrustSignalsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import { FaAward, FaCertificate } from 'react-icons/fa';
import {
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineBadgeCheck,
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineClock,
  HiOutlineHeart,
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineLockClosed,
  HiOutlineServer,
  HiOutlineScale,
  HiOutlineDocumentText,
  HiOutlineEye,
} from 'react-icons/hi';
import { HiOutlineTrophy } from "react-icons/hi2";

const TrustSignalsSection3 = ({ config }) => {
  
  // State for active certification
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Get icon
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className} text-green-600 dark:text-green-400`;

    switch (iconName) {
      case 'shield':
        return <HiOutlineShieldCheck className={iconClasses} />;
      case 'lock':
        return <HiOutlineLockClosed className={iconClasses} />;
      case 'server':
        return <HiOutlineServer className={iconClasses} />;
      case 'scale':
        return <HiOutlineScale className={iconClasses} />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} />;
      case 'trophy':
        return <HiOutlineTrophy className={iconClasses} />;
      case 'heart':
        return <HiOutlineHeart className={iconClasses} />;
      case 'star':
        return <HiOutlineStar className={iconClasses} />;
      case 'document':
        return <HiOutlineDocumentText className={iconClasses} />;
      case 'eye':
        return <HiOutlineEye className={iconClasses} />;
      default:
        return <HiOutlineBadgeCheck className={iconClasses} />;
    }
  };

  // Display limited reviews
  const displayedReviews = showAllReviews
    ? config?.testimonials?.items
    : config?.testimonials?.items?.slice(0, 3);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(45deg,#e5e7eb_1px,transparent_1px),linear-gradient(-45deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,#374151_1px,transparent_1px),linear-gradient(-45deg,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-green-200 dark:bg-green-900/20 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-20" />

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
              <span className="text-xs sm:text-sm font-medium text-green-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Main Column - Trust Indicators */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">

            {/* Featured Trust Badge */}
            {config?.featured?.show && (
              <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-flex items-center bg-white/20 text-white px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold mb-2 sm:mb-3 md:mb-4">
                      <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {config.featured.label}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 md:mb-3">
                      {config.featured.title}
                    </h3>
                    <p className="text-green-100 text-sm sm:text-base mb-4 sm:mb-5 md:mb-6 max-w-xl">
                      {config.featured.description}
                    </p>
                    <Link
                      href={config.featured.link}
                      className="inline-flex items-center bg-white text-green-600 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
                    >
                      {config.featured.buttonText}
                      <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
                    </Link>
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <FaAward className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
              </div>
            )}

            {/* Stats Grid */}
            {config?.stats?.show && config?.stats?.items && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {config.stats.items.map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border border-gray-100 dark:border-gray-700 text-center">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-green-600 dark:text-green-400 mb-0.5 sm:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications Showcase */}
            {config?.certifications?.show && config?.certifications?.items && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {config.certifications.title}
                </h3>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {config.certifications.items.map((cert, index) => (
                    <div key={index} className="flex items-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg sm:rounded-xl">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                        <FaCertificate className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">{cert.name}</h4>
                        <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">{cert.issuer} • {cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Features */}
            {config?.security?.show && config?.security?.items && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {config.security.title}
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {config.security.items.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shrink-0">
                        {getIcon(item.icon, "w-3.5 h-3.5 sm:w-4 sm:h-4")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">{item.title}</h4>
                        <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5 sm:space-y-6 md:space-y-8">

            {/* Overall Rating */}
            {config?.rating?.show && (
              <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-lg sm:rounded-xl p-5 sm:p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative">
                  <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center">
                    <HiOutlineStar className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    Customer Rating
                  </h3>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                      {config.rating.score}
                    </div>
                    <div className="flex justify-center mb-1 sm:mb-2">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(config.rating.score)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-white/30'
                            }`}
                        />
                      ))}
                    </div>
                    <p className="text-[10px] sm:text-xs text-green-100">{config.rating.count} reviews</p>
                  </div>
                </div>
              </div>
            )}

            {/* Testimonials */}
            {config?.testimonials?.show && config?.testimonials?.items && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Recent Reviews
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {displayedReviews?.map((testimonial, index) => (
                    <div key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-3 sm:pb-4 last:pb-0">
                      <div className="flex mb-1 sm:mb-2">
                        {[...Array(5)].map((_, i) => (
                          <HiOutlineStar
                            key={i}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < testimonial.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                              }`}
                          />
                        ))}
                      </div>
                      <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 italic mb-1 sm:mb-2">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">
                        – {testimonial.name}, {testimonial.company}
                      </p>
                    </div>
                  ))}
                </div>

                {config?.testimonials?.items?.length > 3 && (
                  <button
                    onClick={() => setShowAllReviews(!showAllReviews)}
                    className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                  >
                    {showAllReviews ? 'Show less' : 'View all reviews'}
                  </button>
                )}
              </div>
            )}

            {/* Compliance Badges */}
            {config?.compliance?.show && config?.compliance?.items && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Compliance
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {config.compliance.items.map((item, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-[8px] sm:text-[10px] flex items-center"
                    >
                      <HiOutlineCheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-0.5 sm:mr-1" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Trusted By */}
            {config?.trustedBy?.show && config?.trustedBy?.logos && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Trusted By
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {config.trustedBy.logos.map((logo, index) => (
                    <div key={index} className="grayscale hover:grayscale-0 transition-all">
                      <span className="text-gray-400 dark:text-gray-600 text-[10px] sm:text-xs font-medium block text-center">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Report */}
            {config?.report?.show && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-3 sm:mb-4">
                  <HiOutlineDocumentText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600 mr-2 sm:mr-3" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{config.report.title}</h3>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">{config.report.description}</p>
                  </div>
                </div>
                <Link
                  href={config.report.link}
                  className="inline-flex items-center text-xs sm:text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                >
                  Download Report
                  <HiOutlineArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Trust CTA */}
        {config?.cta?.show && config?.cta?.text && (
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href={config.cta.url}
              className="inline-flex items-center bg-linear-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {config.cta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrustSignalsSection3;