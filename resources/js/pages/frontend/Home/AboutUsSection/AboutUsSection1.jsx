// page/frontend/Home/AboutUsSection/AboutUsSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
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
    const iconClasses = `${className} text-white dark:text-blue-400 group-hover:text-white group-hover:dark:text-white transition-all duration-300`;

    switch (iconName) {
      case 'users':
        return <HiOutlineUserGroup className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} aria-hidden="true" />;
      case 'shield':
        return <HiOutlineShieldCheck className={iconClasses} aria-hidden="true" />;
      case 'star':
        return <HiOutlineStar className={iconClasses} aria-hidden="true" />;
      case 'heart':
        return <HiOutlineHeart className={iconClasses} aria-hidden="true" />;
      case 'lightning':
        return <HiOutlineLightningBolt className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="About Us section"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Background Pattern - decorative */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Gradient Orbs - decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="About us badge"
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

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={config?.image?.src || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                alt={config?.image?.alt || "Our team at work"}
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
            </div>

            {/* Experience Badge */}
            {config?.experience?.show && (
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {config.experience.years}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {config.experience.text || "Years of Experience"}
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {config?.content?.title || "We're on a Mission to Transform Supply Chains"}
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              {config?.content?.paragraphs?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              )) || (
                  <>
                    <p>Founded in 2020, Sazzad Inventory & Logistics has grown from a small team of logistics enthusiasts to a comprehensive platform serving businesses worldwide. Our journey began with a simple observation: supply chain management was too complex, too fragmented, and too inaccessible for many businesses.</p>
                    <p>Today, we're proud to serve over 500 companies across 12+ industries, helping them streamline their operations, reduce costs, and improve customer satisfaction. Our platform combines cutting-edge technology with deep industry expertise to deliver solutions that just work.</p>
                  </>
                )}
            </div>

            {/* Key Points List */}
            {config?.content?.points && config.content.points.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {config.content.points.map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <HiOutlineCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            {config?.content?.cta?.show && (
              <div className="pt-4">
                <Link
                  href={config.content.cta.url}
                  className={`inline-flex items-center ${config.content.cta.backgroundColor} ${config.content.cta.textColor} ${config.content.cta.hoverColor} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group`}
                >
                  {config.content.cta.text}
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        {config?.stats?.show && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200 dark:border-gray-800">
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

        {/* Values Section */}
        {config?.values?.show && (
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.values.title || "Our Core Values"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {config.values.items.map((value, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {getIcon(value.icon)}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {config?.team?.show && (
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              {config.team.title || "Meet Our Leadership Team"}
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {config.team.description || "The passionate people behind Sazzad's success"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {config.team.members.map((member, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    {/* Social Links - appear on hover */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {member.social?.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          <span className="text-xs font-bold">{social.icon}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && (
          <div className="text-center mt-20">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
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

export default AboutUsSection1;