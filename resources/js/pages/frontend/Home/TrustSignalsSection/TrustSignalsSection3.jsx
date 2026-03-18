// page/frontend/Home/TrustSignalsSection/TrustSignalsSection3.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
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
import { FaAward, FaCertificate, } from 'react-icons/fa';

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
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Trust signals section"
    >
      {/* Background Pattern - Magazine Style */}
      <div className="absolute inset-0 bg-magazine-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-green-200 dark:bg-green-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Magazine Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Trust signals badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              )}
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
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                {config?.heading?.highlightedText}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 6 L300 6"
                  stroke="url(#headingGradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="headingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#16A34A" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
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

        {/* Main Content - Magazine Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column - Trust Indicators */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Trust Badge */}
            {config?.featured?.show && (
              <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative flex items-center justify-between">
                  <div>
                    <span className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      <HiOutlineSparkles className="w-4 h-4 mr-2" />
                      {config.featured.label}
                    </span>
                    <h3 className="text-3xl font-bold mb-3">
                      {config.featured.title}
                    </h3>
                    <p className="text-green-100 mb-6 max-w-xl">
                      {config.featured.description}
                    </p>
                    <Link
                      href={config.featured.link}
                      className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                    >
                      {config.featured.buttonText}
                      <HiOutlineArrowRight className="ml-2" />
                    </Link>
                  </div>
                  <div className="hidden lg:block w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <FaAward className="w-full h-full text-white" />
                  </div>
                </div>
              </div>
            )}

            {/* Stats Grid */}
            {config?.stats?.show && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {config.stats.items.map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications Showcase */}
            {config?.certifications?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {config.certifications.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {config.certifications.items.map((cert, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                      <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                        <FaCertificate className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{cert.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{cert.issuer} • {cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Features */}
            {config?.security?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {config.security.title}
                </h3>

                <div className="space-y-4">
                  {config.security.items.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3 shrink-0">
                        {getIcon(item.icon, "w-4 h-4")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Overall Rating */}
            {config?.rating?.show && (
              <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <HiOutlineStar className="w-5 h-5 mr-2" />
                    Customer Rating
                  </h3>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">{config.rating.score}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <HiOutlineStar
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(config.rating.score)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-white/30'
                            }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-green-100">{config.rating.count} reviews</p>
                  </div>
                </div>
              </div>
            )}

            {/* Testimonials */}
            {config?.testimonials?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Recent Reviews
                </h3>

                <div className="space-y-4">
                  {displayedReviews?.map((testimonial, index) => (
                    <div key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <HiOutlineStar
                            key={i}
                            className={`w-3 h-3 ${i < testimonial.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                              }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        – {testimonial.name}, {testimonial.company}
                      </p>
                    </div>
                  ))}
                </div>

                {config?.testimonials?.items?.length > 3 && (
                  <button
                    onClick={() => setShowAllReviews(!showAllReviews)}
                    className="mt-4 text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                  >
                    {showAllReviews ? 'Show less' : 'View all reviews'}
                  </button>
                )}
              </div>
            )}

            {/* Compliance Badges */}
            {config?.compliance?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Compliance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {config.compliance.items.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-xs flex items-center"
                    >
                      <HiOutlineCheckCircle className="w-3 h-3 mr-1" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Trusted By */}
            {config?.trustedBy?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Trusted By
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {config.trustedBy.logos.map((logo, index) => (
                    <div key={index} className="grayscale hover:grayscale-0 transition-all">
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="h-8 w-auto mx-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Report */}
            {config?.report?.show && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <HiOutlineDocumentText className="w-8 h-8 text-green-600 mr-3" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{config.report.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{config.report.description}</p>
                  </div>
                </div>
                <Link
                  href={config.report.link}
                  className="inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                >
                  Download Report
                  <HiOutlineArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Trust CTA */}
        {config?.cta?.show && (
          <div className="mt-16 text-center">
            <Link
              href={config.cta.url}
              className="inline-flex items-center bg-linear-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {config.cta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #e5e7eb 1px, transparent 1px),
            linear-gradient(-45deg, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #374151 1px, transparent 1px),
            linear-gradient(-45deg, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default TrustSignalsSection3;