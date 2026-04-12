// page/frontend/Home/AboutUsSection/AboutUsSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiOutlineUserGroup,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineLightningBolt
} from 'react-icons/hi';

const AboutUsSection1 = ({ config }) => {

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-white group-hover:text-white transition-all duration-300`;

    switch (iconName) {
      case 'users':
        return <HiOutlineUserGroup className={iconClasses} />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} />;
      case 'shield':
        return <HiOutlineShieldCheck className={iconClasses} />;
      case 'star':
        return <HiOutlineStar className={iconClasses} />;
      case 'heart':
        return <HiOutlineHeart className={iconClasses} />;
      case 'lightning':
        return <HiOutlineLightningBolt className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-blue-600 dark:text-blue-400 relative inline-block">
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

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">

          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={config?.image?.src || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                alt={config?.image?.alt || "Our team at work"}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20" />
            </div>

            {/* Experience Badge */}
            {config?.experience?.show && (
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {config.experience.years}+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {config.experience.text || "Years of Experience"}
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {config?.content?.title || "We're on a Mission to Transform Supply Chains"}
            </h3>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {config?.content?.paragraphs?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Points List */}
            {config?.content?.points && config.content.points.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                {config.content.points.map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 mr-1.5 sm:mr-2 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            {config?.content?.cta?.show && (
              <div className="pt-2 sm:pt-4">
                <Link
                  href={config.content.cta.url}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base"
                >
                  {config.content.cta.text}
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-8 sm:py-12 border-t border-gray-200 dark:border-gray-800">
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

        {/* Values Section */}
        {config?.values?.show && config?.values?.items && (
          <div className="mt-16 sm:mt-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.values.title || "Our Core Values"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
              {config.values.items.map((value, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    {getIcon(value.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7")}
                  </div>

                  {/* Title */}
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 md:mb-3">
                    {value.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {config?.team?.show && config?.team?.members && (
          <div className="mt-16 sm:mt-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-2 sm:mb-4">
              {config.team.title || "Meet Our Leadership Team"}
            </h3>
            <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              {config.team.description || "The passionate people behind our success"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {config.team.members.map((member, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-lg sm:rounded-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-16 sm:mt-20">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUsSection1;