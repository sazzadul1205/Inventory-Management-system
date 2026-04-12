// page/frontend/Home/AboutUsSection/AboutUsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

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
  HiOutlineLightningBolt,
  HiOutlineSparkles,
  HiOutlinePlay,
  HiOutlineX,
} from 'react-icons/hi';
import {
  HiOutlineRocketLaunch,
  HiOutlineBuildingOffice,
} from "react-icons/hi2";

const AboutUsSection2 = ({ config }) => {

  // State for video modal
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-blue-600 dark:text-blue-400`;

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
      case 'building':
        return <HiOutlineBuildingOffice className={iconClasses} />;
      case 'rocket':
        return <HiOutlineRocketLaunch className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label="Close video"
            >
              <HiOutlineX className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <div className="aspect-video bg-black rounded-lg sm:rounded-xl overflow-hidden">
              <iframe
                src={`${config?.video?.url}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={config?.video?.title || "About Us"}
              />
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-blue-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
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

        {/* Video/Image Showcase */}
        {config?.showcase?.show && (
          <div className="relative mb-16 sm:mb-20">
            <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={config.showcase.image}
                alt={config.showcase.alt || "About us"}
                className="w-full h-auto object-cover"
                loading="lazy"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl"
                  aria-label="Play video"
                >
                  <HiOutlinePlay className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 ml-0.5 sm:ml-1" />
                </button>
              </div>

              {/* Video Duration Badge */}
              {config.showcase.duration && (
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/70 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs">
                  {config.showcase.duration}
                </div>
              )}
            </div>

            {/* Caption */}
            <p className="text-center text-gray-500 dark:text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm">
              {config.showcase.caption}
            </p>
          </div>
        )}

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">

          {/* Mission Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <HiOutlineRocketLaunch className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
              {config?.mission?.title || "Our Mission"}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {config?.mission?.description || "To empower businesses of all sizes with intelligent, accessible supply chain solutions that drive efficiency, reduce costs, and foster sustainable growth."}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <HiOutlineGlobeAlt className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
              {config?.vision?.title || "Our Vision"}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {config?.vision?.description || "To create a world where supply chain management is seamless, transparent, and accessible to every business, enabling them to focus on what they do best."}
            </p>
          </div>
        </div>

        {/* Story Timeline */}
        {config?.timeline?.show && config?.timeline?.events && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.timeline.title || "Our Journey"}
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-blue-500 to-purple-600 rounded-full hidden lg:block" />

              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                {config.timeline.events.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4 sm:gap-6 md:gap-8`}
                  >
                    {/* Content */}
                    <div className={`flex-1 w-full ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                        <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full mb-2 sm:mb-3">
                          {event.year}
                        </span>
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                          {event.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-xl">
                        {index + 1}
                      </div>
                    </div>

                    {/* Empty space for alignment */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Values Section with Tabs */}
        {config?.values?.show && config?.values?.items && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-2 sm:mb-4">
              {config.values.title || "What Drives Us"}
            </h3>
            <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              {config.values.description || "The principles that guide everything we do"}
            </p>

            {/* Value Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {config.values.items.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === index
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  {value.title}
                </button>
              ))}
            </div>

            {/* Active Value Content */}
            {config.values.items[activeTab] && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 md:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    {getIcon(config.values.items[activeTab].icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white")}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {config.values.items[activeTab].title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      {config.values.items[activeTab].description}
                    </p>
                    {config.values.items[activeTab].points && (
                      <ul className="space-y-1.5 sm:space-y-2">
                        {config.values.items[activeTab].points.map((point, idx) => (
                          <li key={idx} className="flex items-center justify-center sm:justify-start">
                            <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 mr-1.5 sm:mr-2 shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Team Section */}
        {config?.team?.show && config?.team?.members && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-2 sm:mb-4">
              {config.team.title || "Meet Our Leadership"}
            </h3>
            <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              {config.team.description || "Experienced leaders dedicated to your success"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
              {config.team.members.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-lg sm:rounded-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white text-center">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 text-center font-medium">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 py-8 sm:py-12 border-t border-gray-200 dark:border-gray-800">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8")}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group text-sm sm:text-base"
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

export default AboutUsSection2;