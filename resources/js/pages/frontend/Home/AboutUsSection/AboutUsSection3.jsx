// page/frontend/Home/AboutUsSection/AboutUsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// React Icons
import { FaAward } from "react-icons/fa";
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
  HiOutlineLightningBolt,
  HiOutlineSparkles,
  HiOutlineFlag,
  HiOutlineBookOpen,
} from 'react-icons/hi';
import {
  HiOutlineRocketLaunch,
  HiOutlineBuildingOffice,
} from "react-icons/hi2";

const AboutUsSection3 = ({ config }) => {

  // State for counter animation
  const [counters, setCounters] = useState({});

  // Counter animation effect
  useEffect(() => {
    if (config?.stats?.show && config?.stats?.items) {
      const initialCounters = {};
      config.stats.items.forEach((stat, index) => {
        initialCounters[`stat-${index}`] = 0;
      });
      setCounters(initialCounters);

      const intervals = config.stats.items.map((stat, index) => {
        const targetValue = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;

        return setInterval(() => {
          setCounters(prev => {
            const current = prev[`stat-${index}`] || 0;
            const increment = Math.ceil(targetValue / 50);
            const newValue = Math.min(current + increment, targetValue);

            return {
              ...prev,
              [`stat-${index}`]: newValue
            };
          });
        }, 30);
      });

      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [config?.stats?.items, config?.stats?.show]);

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-amber-600 dark:text-amber-400`;

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
      case 'award':
        return <FaAward className={iconClasses} />;
      case 'flag':
        return <HiOutlineFlag className={iconClasses} />;
      case 'book':
        return <HiOutlineBookOpen className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#9ca3af_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,#4b5563_1px,transparent_0)] bg-size-[40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-lg shadow-amber-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
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

        {/* Hero Image with Overlay Content */}
        <div className="relative mb-16 sm:mb-20">
          <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96">
            <img
              src={config?.hero?.image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
              alt={config?.hero?.alt || "About us"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-r from-amber-900/90 to-pink-900/90" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl px-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                  {config?.hero?.title || "We're on a Mission"}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-100">
                  {config?.hero?.subtitle || "To transform supply chain management for businesses worldwide"}
                </p>
              </div>
            </div>
          </div>

          {/* Floating Stats Card */}
          {config?.floatingStats?.show && config?.floatingStats?.items && (
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl border border-gray-100 dark:border-gray-700 w-[90%] sm:w-auto">
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
                {config.floatingStats.items.map((stat, index) => (
                  <div key={index} className="text-center px-2 sm:px-3">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Story Section - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">

          {/* Left Side - Story Content */}
          <div className="space-y-4 sm:space-y-6">
            {config?.story?.badge && (
              <span className="text-amber-600 dark:text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                {config.story.badge}
              </span>
            )}

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {config?.story?.title || "From a Simple Idea to a Global Platform"}
            </h3>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {config?.story?.paragraphs?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Founder Quote */}
            {config?.story?.quote && (
              <div className="bg-linear-to-br from-amber-50 to-pink-50 dark:from-amber-900/10 dark:to-pink-900/10 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-amber-100 dark:border-amber-800/30">
                <p className="text-sm sm:text-base md:text-lg italic text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  "{config.story.quote.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-amber-500 to-pink-500 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {config.story.quote.author}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                      {config.story.quote.position}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Image Collage */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            {config?.story?.images?.map((image, index) => (
              <div
                key={index}
                className={`rounded-lg sm:rounded-xl overflow-hidden shadow-lg ${index === 0 ? 'row-span-2' : ''}`}
              >
                <img
                  src={image}
                  alt={`Story image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20">

          {/* Mission Card */}
          <div className="bg-linear-to-br from-amber-500 to-pink-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <HiOutlineRocketLaunch className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                {config?.mission?.title || "Our Mission"}
              </h3>
              <p className="text-xs sm:text-sm text-amber-100">
                {config?.mission?.description || "To empower businesses with intelligent supply chain solutions that drive efficiency and growth."}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-linear-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <HiOutlineGlobeAlt className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                {config?.vision?.title || "Our Vision"}
              </h3>
              <p className="text-xs sm:text-sm text-purple-100">
                {config?.vision?.description || "To create a world where supply chain management is seamless and accessible to every business."}
              </p>
            </div>
          </div>

          {/* Values Card */}
          <div className="bg-linear-to-br from-pink-500 to-rose-500 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <HiOutlineHeart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                {config?.valuesCard?.title || "Our Values"}
              </h3>
              <p className="text-xs sm:text-sm text-pink-100">
                {config?.valuesCard?.description || "Excellence, innovation, customer-first, and teamwork guide everything we do."}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        {config?.timeline?.show && config?.timeline?.events && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.timeline.title || "Our Journey"}
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-amber-500 via-pink-500 to-purple-500 rounded-full hidden md:block" />

              {config.timeline.events.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center mb-8 sm:mb-10 md:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Content */}
                  <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                      <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-linear-to-r from-amber-500 to-pink-500 text-white text-xs sm:text-sm font-semibold rounded-full mb-2 sm:mb-3">
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
                  <div className="relative z-10 my-3 sm:my-4 md:my-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-linear-to-r from-amber-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-xl">
                      {index + 1}
                    </div>
                  </div>

                  {/* Empty space */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {config?.team?.show && config?.team?.members && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-2 sm:mb-4">
              {config.team.title || "Meet Our Leadership"}
            </h3>
            <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              {config.team.description || "The passionate people behind our success"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
              {config.team.members.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-56 sm:h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Position Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium text-amber-600 dark:text-amber-400">
                      {member.position}
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white text-center">
                    {member.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats with Animated Counters */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-8 sm:py-12 border-t border-gray-200 dark:border-gray-800">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8")}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {counters[`stat-${index}`] || 0}
                  {stat.value.replace(/[0-9]/g, '')}
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
              className="inline-flex items-center bg-linear-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group text-sm sm:text-base"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              <span>{config.bottomCta.text}</span>
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUsSection3;