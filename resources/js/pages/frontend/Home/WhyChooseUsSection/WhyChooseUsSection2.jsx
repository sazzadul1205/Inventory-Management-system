// page/frontend/Home/WhyChooseUsSection/WhyChooseUsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineCog,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineArrowRight,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineSparkles
} from 'react-icons/hi';

const WhyChooseUsSection2 = ({ config }) => {
  // State for active tab
  const [activeTab, setActiveTab] = useState(0);

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-blue-600 dark:text-blue-400`;

    switch (iconName) {
      case 'shield':
        return <HiOutlineShieldCheck className={iconClasses} aria-hidden="true" />;
      case 'lightning':
        return <HiOutlineLightningBolt className={iconClasses} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'cog':
        return <HiOutlineCog className={iconClasses} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={iconClasses} aria-hidden="true" />;
      case 'heart':
        return <HiOutlineHeart className={iconClasses} aria-hidden="true" />;
      case 'star':
        return <HiOutlineStar className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCheckCircle className={iconClasses} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-linear-to-brr from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Why Choose Us section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-blue-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "WHY CHOOSE US"}
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

        {/* Stats Overview */}
        {config?.stats?.show && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main Content - Split Layout with Tabs */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Illustration */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={config?.image?.src || "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                alt={config?.image?.alt || "Why choose us"}
                className="w-full h-auto object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay" />

              {/* Floating Stats Card */}
              {config?.floatingStats?.show && (
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {config.floatingStats.text || "Trusted by 500+ companies"}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {config.floatingStats.rating || "4.9★"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 dark:bg-purple-600 rounded-full opacity-20 blur-2xl" aria-hidden="true" />
          </div>

          {/* Right Side - Content with Tabs */}
          <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
              {config?.tabs?.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${activeTab === index
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            {config?.tabs && config.tabs[activeTab] && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {config.tabs[activeTab].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {config.tabs[activeTab].description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {config.tabs[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                {config.tabs[activeTab].metrics && (
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    {config.tabs[activeTab].metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {config?.featuresTitle || "What Sets Us Apart"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config?.features?.map((feature, index) => (
              <div
                key={feature.id || index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(feature.icon, "w-6 h-6")}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Highlight */}
        {config?.testimonial?.show && (
          <div className="mt-20 bg-linear-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-3xl mx-auto text-center">
              <svg className="w-12 h-12 mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl font-light mb-6">
                "{config.testimonial.quote}"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full mr-3" />
                <div className="text-left">
                  <p className="font-semibold">{config.testimonial.author}</p>
                  <p className="text-sm text-blue-200">{config.testimonial.position}</p>
                </div>
              </div>
            </div>
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
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection2;