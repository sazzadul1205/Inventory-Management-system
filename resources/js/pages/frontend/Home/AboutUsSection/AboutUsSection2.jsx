// page/frontend/Home/AboutUsSection/AboutUsSection2.jsx

// React
import { useState } from 'react';
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
  HiOutlineLightningBolt,
  HiOutlineSparkles,
  HiOutlinePlay,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice, HiOutlineRocketLaunch } from "react-icons/hi2";


const AboutUsSection2 = ({ config }) => {
  // State for video modal
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-blue-600 dark:text-blue-400`;

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
      default:
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="About Us section"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label="Video player modal"
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-black rounded-2xl overflow-hidden">
              <iframe
                src={`${config?.video?.url}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={config?.video?.title || "About Sazzad"}
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-blue-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "ABOUT US"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            {config?.description}
          </p>
        </div>

        {/* Video/Image Showcase */}
        {config?.showcase?.show && (
          <div className="relative mb-20">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={config.showcase.image}
                alt={config.showcase.alt || "About Sazzad"}
                className="w-full h-auto object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl"
                  aria-label="Play video"
                >
                  <HiOutlinePlay className="w-8 h-8 text-blue-600 ml-1" />
                </button>
              </div>

              {/* Video Duration Badge */}
              {config.showcase.duration && (
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {config.showcase.duration}
                </div>
              )}
            </div>

            {/* Caption */}
            <p className="text-center text-gray-500 dark:text-gray-500 mt-4 text-sm">
              {config.showcase.caption}
            </p>
          </div>
        )}

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HiOutlineRocketLaunch className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.mission?.title || "Our Mission"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {config?.mission?.description || "To empower businesses of all sizes with intelligent, accessible supply chain solutions that drive efficiency, reduce costs, and foster sustainable growth."}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HiOutlineGlobeAlt className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.vision?.title || "Our Vision"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {config?.vision?.description || "To create a world where supply chain management is seamless, transparent, and accessible to every business, enabling them to focus on what they do best."}
            </p>
          </div>
        </div>

        {/* Story Timeline */}
        {config?.timeline?.show && (
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.timeline.title || "Our Journey"}
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-500 to-purple-600 rounded-full hidden lg:block"></div>

              <div className="space-y-12">
                {config.timeline.events.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                        <span className="inline-block px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-3">
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
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl">
                        {index + 1}
                      </div>
                    </div>

                    {/* Empty space for alignment */}
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Values Section with Tabs */}
        {config?.values?.show && (
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              {config.values.title || "What Drives Us"}
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {config.values.description || "The principles that guide everything we do"}
            </p>

            {/* Value Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {config.values.items.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === index
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
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shrink-0">
                    {getIcon(config.values.items[activeTab].icon, "w-8 h-8 text-white")}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {config.values.items[activeTab].title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                      {config.values.items[activeTab].description}
                    </p>
                    <ul className="space-y-2">
                      {config.values.items[activeTab].points?.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <HiOutlineCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Team Section - Grid */}
        {config?.team?.show && (
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              {config.team.title || "Meet Our Leadership"}
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {config.team.description || "Experienced leaders dedicated to your success"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config.team.members.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    {/* Social Links */}
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
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-center font-medium">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats with Icons */}
        {config?.stats?.show && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-gray-200 dark:border-gray-800">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon, "w-8 h-8")}
                </div>
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

        {/* Bottom CTA */}
        {config?.bottomCta?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection2;