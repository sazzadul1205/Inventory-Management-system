// page/frontend/Home/TrustSignalsSection/TrustSignalsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

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
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineLockClosed,
  HiOutlineServer,
  HiOutlineScale,
} from 'react-icons/hi';
import { HiOutlineTrophy } from "react-icons/hi2";

const TrustSignalsSection2 = ({ config }) => {
  
  // State for active tab
  const [activeTab, setActiveTab] = useState(0);

  // Get icon for certification
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
      default:
        return <HiOutlineBadgeCheck className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-200 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-green-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Stats with Icons */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-12 sm:mb-16">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 text-center group hover:shadow-lg transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8")}
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Tabs */}
        {config?.tabs?.show && config?.tabs?.items && (
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {config.tabs.items.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === index
                      ? 'bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30 scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {config.tabs.items[activeTab] && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                      {config.tabs.items[activeTab].title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                      {config.tabs.items[activeTab].description}
                    </p>
                    <ul className="space-y-2 sm:space-y-3">
                      {config.tabs.items[activeTab].points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {config.tabs.items[activeTab].badges?.map((badge, idx) => (
                      <div key={idx} className="bg-green-50 dark:bg-green-900/20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                          {badge.icon === 'award' && <FaAward className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />}
                          {badge.icon === 'certificate' && <FaCertificate className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />}
                          {badge.icon === 'ribbon' && <FaRibbon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />}
                        </div>
                        <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-900 dark:text-white">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Certification Grid */}
        {config?.certifications?.show && config?.certifications?.items && (
          <div className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.certifications.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {config.certifications.items.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
                      <FaCertificate className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{cert.name}</h4>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] sm:text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-1.5 sm:px-2 py-0.5 rounded-full">
                      {cert.year}
                    </span>
                    {cert.link && (
                      <Link href={cert.link} className="text-[10px] sm:text-xs text-gray-500 hover:text-green-600 dark:text-gray-500 dark:hover:text-green-400">
                        View Certificate →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security Features */}
        {config?.security?.show && config?.security?.items && (
          <div className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.security.title}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {config.security.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 sm:p-5 md:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-green-100 dark:bg-green-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                    {getIcon(item.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6")}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h4>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Customer Logos / Trusted By */}
        {config?.trustedBy?.show && config?.trustedBy?.logos && (
          <div className="mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 text-center mb-5 sm:mb-6 md:mb-8 uppercase tracking-wider">
              {config.trustedBy.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6 md:gap-8 lg:gap-12">
              {config.trustedBy.logos.map((logo, index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                  <span className="text-gray-400 dark:text-gray-600 text-xs sm:text-sm md:text-base font-medium">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Carousel */}
        {config?.testimonials?.show && config?.testimonials?.items && (
          <div className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.testimonials.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {config.testimonials.items.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700"
                >
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

                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 md:mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-2 sm:mr-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compliance Badges */}
        {config?.compliance?.show && config?.compliance?.items && (
          <div className="mb-12 sm:mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5 md:mb-6 text-center">
                {config.compliance.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                {config.compliance.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-green-50 dark:bg-green-900/20 rounded-full"
                  >
                    <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1 sm:mr-2" />
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        {config?.cta?.show && (
          <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.cta.title}
                </h3>
                <p className="text-green-100 text-sm sm:text-base mb-5 sm:mb-6 max-w-2xl">
                  {config.cta.description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link
                    href={config.cta.primaryButton.url}
                    className="inline-flex items-center bg-white text-green-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    {config.cta.primaryButton.text}
                    <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
                  </Link>
                  {config.cta.secondaryButton?.show && (
                    <Link
                      href={config.cta.secondaryButton.url}
                      className="inline-flex items-center border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                    >
                      {config.cta.secondaryButton.text}
                    </Link>
                  )}
                </div>
              </div>

              {/* Social Proof */}
              <div className="lg:w-56 xl:w-64 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 mb-2 sm:mb-3">
                  <div className="flex -space-x-1.5 sm:-space-x-2">
                    {config.cta.avatars?.map((avatar, idx) => (
                      <img
                        key={idx}
                        src={avatar}
                        alt="Customer"
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <span className="text-sm sm:text-base font-medium">1,500+</span>
                </div>
                <p className="text-[10px] sm:text-xs text-center text-green-100">
                  Join these companies that trust us
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrustSignalsSection2;