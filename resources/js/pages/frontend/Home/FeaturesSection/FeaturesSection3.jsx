// page/frontend/Home/FeaturesSection/FeaturesSection3.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineLightningBolt,
  HiOutlineSearch,
  HiOutlineRefresh,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineExclamation,
  HiOutlineInformationCircle,
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineFlag,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlinePrinter,
  HiOutlineDownload,
  HiOutlineUpload,
  HiOutlinePencil,
  HiOutlineEye,
  HiOutlineKey,
  HiOutlineScale,
  HiOutlineTemplate
} from 'react-icons/hi';

const FeaturesSection3 = ({ config }) => {
  // Icon mapping
  const getIcon = (iconName, className = "w-5 h-5") => {
    const iconClasses = `${className} text-current`;

    switch (iconName) {
      // Feature icons
      case 'cube': return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'truck': return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'chart': return <HiOutlineChartBar className={iconClasses} aria-hidden="true" />;
      case 'shield': return <HiOutlineShieldCheck className={iconClasses} aria-hidden="true" />;
      case 'clock': return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      case 'globe': return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'document': return <HiOutlineDocumentText className={iconClasses} aria-hidden="true" />;
      case 'users': return <HiOutlineUsers className={iconClasses} aria-hidden="true" />;
      case 'cog': return <HiOutlineCog className={iconClasses} aria-hidden="true" />;
      case 'lightning': return <HiOutlineLightningBolt className={iconClasses} aria-hidden="true" />;
      case 'search': return <HiOutlineSearch className={iconClasses} aria-hidden="true" />;
      case 'refresh': return <HiOutlineRefresh className={iconClasses} aria-hidden="true" />;
      case 'template': return <HiOutlineTemplate className={iconClasses} aria-hidden="true" />;
      case 'scale': return <HiOutlineScale className={iconClasses} aria-hidden="true" />;
      case 'key': return <HiOutlineKey className={iconClasses} aria-hidden="true" />;
      case 'eye': return <HiOutlineEye className={iconClasses} aria-hidden="true" />;
      case 'pencil': return <HiOutlinePencil className={iconClasses} aria-hidden="true" />;
      case 'location': return <HiOutlineLocationMarker className={iconClasses} aria-hidden="true" />;
      case 'flag': return <HiOutlineFlag className={iconClasses} aria-hidden="true" />;
      case 'star': return <HiOutlineStar className={iconClasses} aria-hidden="true" />;
      case 'heart': return <HiOutlineHeart className={iconClasses} aria-hidden="true" />;

      // Status icons
      case 'check': return <HiOutlineCheckCircle className={`${className} text-green-500`} aria-hidden="true" />;
      case 'x': return <HiOutlineXCircle className={`${className} text-red-500`} aria-hidden="true" />;
      case 'warning': return <HiOutlineExclamation className={`${className} text-yellow-500`} aria-hidden="true" />;
      case 'info': return <HiOutlineInformationCircle className={`${className} text-blue-500`} aria-hidden="true" />;

      // Action icons
      case 'download': return <HiOutlineDownload className={iconClasses} aria-hidden="true" />;
      case 'upload': return <HiOutlineUpload className={iconClasses} aria-hidden="true" />;
      case 'print': return <HiOutlinePrinter className={iconClasses} aria-hidden="true" />;
      case 'mail': return <HiOutlineMail className={iconClasses} aria-hidden="true" />;
      case 'phone': return <HiOutlinePhone className={iconClasses} aria-hidden="true" />;

      default: return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Features section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge with Icon */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-2 mb-6 shadow-lg shadow-blue-500/30">
            {getIcon(config?.badge?.icon || 'star', "w-4 h-4")}
            <span className="text-sm font-medium">
              {config?.badge?.text || "WHY CHOOSE US"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
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
              itemProp="description"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Features Grid - 3 Column Layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Features list"
        >
          {config?.features?.map((feature, index) => (
            <div
              key={feature.id || index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
              role="listitem"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500" aria-hidden="true"></div>

              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${feature.accentColor} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} aria-hidden="true"></div>

              {/* Icon Container */}
              <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                {getIcon(feature.icon, "w-8 h-8")}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
                  itemProp="name"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-400 mb-4"
                  itemProp="description"
                >
                  {feature.description}
                </p>

                {/* Feature Tags */}
                {feature.tags && feature.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {feature.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 ${tag.bgColor} ${tag.textColor} rounded-full font-medium`}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>
                )}

                {/* Feature Stats */}
                {feature.stats && (
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Feature List */}
                {feature.list && feature.list.length > 0 && (
                  <ul className="space-y-2 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    {feature.list.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${item.iconBg} mr-2 shrink-0 mt-0.5`}>
                          {getIcon(item.icon || 'check', "w-3 h-3")}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Learn More Link */}
                {feature.link && (
                  <Link
                    href={feature.link}
                    className={`inline-flex items-center mt-6 text-sm font-semibold ${feature.linkColor} hover:opacity-80 transition-opacity group/link focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg`}
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-blue-500/5 to-purple-500/5 rounded-tl-3xl group-hover:scale-150 transition-transform duration-500" aria-hidden="true"></div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Highlight */}
        {config?.bottomHighlight?.show && (
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20" aria-hidden="true"></div>
            <div className="relative bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern-white opacity-10" aria-hidden="true"></div>
              <div className="relative px-8 py-12 md:py-16 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {config.bottomHighlight.title}
                </h3>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  {config.bottomHighlight.description}
                </p>
                <Link
                  href={config.bottomHighlight.buttonUrl}
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  aria-label={config.bottomHighlight.buttonText}
                >
                  <span>{config.bottomHighlight.buttonText}</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
          .bg-dot-pattern {
            background-image: radial-gradient(circle at 1px 1px, #9ca3af 1px, transparent 0);
            background-size: 40px 40px;
          }
          .dark .bg-dot-pattern {
            background-image: radial-gradient(circle at 1px 1px, #4b5563 1px, transparent 0);
          }
          .bg-grid-pattern-white {
            background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 30px 30px;
          }
        `}</style>
    </section>
  );
};

export default FeaturesSection3;