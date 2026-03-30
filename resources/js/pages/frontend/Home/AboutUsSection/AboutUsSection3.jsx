// page/frontend/Home/AboutUsSection/AboutUsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
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
import { HiOutlineBuildingOffice, HiOutlineRocketLaunch } from "react-icons/hi2";

const AboutUsSection3 = ({ config }) => {
  // State for counter animation
  const [counters, setCounters] = useState({});

  // Counter animation effect
  useEffect(() => {
    if (config?.stats?.show) {
      const initialCounters = {};
      config.stats.items.forEach((stat, index) => {
        initialCounters[`stat-${index}`] = 0;
      });
      setCounters(initialCounters);

      const intervals = config.stats.items.map((stat, index) => {
        const targetValue = parseInt(stat.value.replace(/[^0-9]/g, ''));

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
  }, []);

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-amber-600 dark:text-amber-400`;

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
      case 'building':
        return <HiOutlineBuildingOffice className={iconClasses} aria-hidden="true" />;
      case 'rocket':
        return <HiOutlineRocketLaunch className={iconClasses} aria-hidden="true" />;
      case 'award':
        return <FaAward className={iconClasses} aria-hidden="true" />;
      case 'flag':
        return <HiOutlineFlag className={iconClasses} aria-hidden="true" />;
      case 'book':
        return <HiOutlineBookOpen className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="About Us section"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Background Pattern - Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge with Icon */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-4 py-2 mb-6 shadow-lg shadow-amber-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "ABOUT US"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
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
                  d="M0 0L300 12"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EC4899" />
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

        {/* Hero Image with Overlay Content */}
        <div className="relative mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
            <img
              src={config?.hero?.image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
              alt={config?.hero?.alt || "About Sazzad"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-amber-900/90 to-pink-900/90 mix-blend-multiply" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl px-4">
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  {config?.hero?.title || "We're on a Mission"}
                </h3>
                <p className="text-xl text-amber-100">
                  {config?.hero?.subtitle || "To transform supply chain management for businesses worldwide"}
                </p>
              </div>
            </div>
          </div>

          {/* Floating Stats Card */}
          {config?.floatingStats?.show && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-8">
                {config.floatingStats.items.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Story Section - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Story Content */}
          <div className="space-y-6">
            <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm uppercase tracking-wider">
              {config?.story?.badge || "OUR STORY"}
            </span>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {config?.story?.title || "From a Simple Idea to a Global Platform"}
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              {config?.story?.paragraphs?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              )) || (
                  <>
                    <p>Founded in 2020, Sazzad began with a simple observation: supply chain management was too complex and inaccessible for many businesses. Our founders, Sarah and Michael, set out to change that.</p>
                    <p>What started as a small project in a coffee shop has grown into a comprehensive platform serving over 500 companies across 20+ countries. Today, we're proud to help businesses of all sizes streamline their operations and achieve their goals.</p>
                  </>
                )}
            </div>

            {/* Founder Quote */}
            {config?.story?.quote && (
              <div className="bg-linear-to-br from-amber-50 to-pink-50 dark:from-amber-900/10 dark:to-pink-900/10 rounded-2xl p-6 border border-amber-100 dark:border-amber-800/30">
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                  "{config.story.quote.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-pink-500 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {config.story.quote.author}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {config.story.quote.position}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Image Collage */}
          <div className="grid grid-cols-2 gap-4">
            {config?.story?.images?.map((image, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg ${index === 0 ? 'row-span-2' : ''
                  }`}
              >
                <img
                  src={image}
                  alt={`Story image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            )) || (
                <>
                  <div className="row-span-2 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Team meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Office"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              )}
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* Mission Card */}
          <div className="bg-linear-to-br from-amber-500 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <HiOutlineRocketLaunch className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                {config?.mission?.title || "Our Mission"}
              </h3>
              <p className="text-amber-100">
                {config?.mission?.description || "To empower businesses with intelligent supply chain solutions that drive efficiency and growth."}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-linear-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <HiOutlineGlobeAlt className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                {config?.vision?.title || "Our Vision"}
              </h3>
              <p className="text-purple-100">
                {config?.vision?.description || "To create a world where supply chain management is seamless and accessible to every business."}
              </p>
            </div>
          </div>

          {/* Values Card */}
          <div className="bg-linear-to-br from-pink-500 to-rose-500 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <HiOutlineHeart className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                {config?.values?.title || "Our Values"}
              </h3>
              <p className="text-pink-100">
                {config?.values?.description || "Excellence, innovation, customer-first, and teamwork guide everything we do."}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        {config?.timeline?.show && (
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.timeline.title || "Our Journey"}
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-amber-500 via-pink-500 to-purple-500 rounded-full" />

              {config.timeline.events.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                      <span className="inline-block px-4 py-2 bg-linear-to-r from-amber-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-3">
                        {event.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {event.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 my-4 md:my-0">
                    <div className="w-12 h-12 bg-linear-to-r from-amber-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-xl">
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

        {/* Team Section - Carousel Style */}
        {config?.team?.show && (
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              {config.team.title || "Meet Our Leadership"}
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {config.team.description || "The passionate people behind Sazzad's success"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config.team.members.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="relative rounded-2xl overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay with social links */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                      <div className="flex space-x-3">
                        {member.social?.map((social, idx) => (
                          <a
                            key={idx}
                            href={social.url}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-amber-600 transition-colors"
                          >
                            <span className="text-sm font-bold">{social.icon}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Position Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-amber-600 dark:text-amber-400">
                      {member.position}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                    {member.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats with Animated Counters */}
        {config?.stats?.show && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200 dark:border-gray-800">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon, "w-8 h-8")}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {counters[`stat-${index}`] || 0}
                  {stat.value.replace(/[0-9]/g, '')}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              <span>{config.bottomCta.text}</span>
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #9ca3af 1px, transparent 0);
          background-size: 40px 40px;
        }
        .dark .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #4b5563 1px, transparent 0);
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection3;