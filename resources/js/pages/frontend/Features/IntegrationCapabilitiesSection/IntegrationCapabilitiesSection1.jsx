// page/frontend/Features/IntegrationCapabilitiesSection/IntegrationCapabilitiesSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineCloud,
  HiOutlineDatabase,
  HiOutlineRefresh,
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineLockClosed,
  HiOutlineChartBar,
  HiOutlineBell,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlinePlug,
  HiOutlineServer,
  HiOutlineShare,
  HiOutlineDocumentText
} from 'react-icons/hi';

const IntegrationCapabilitiesSection1 = ({ config }) => {
  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'cloud':
        return <HiOutlineCloud className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      case 'database':
        return <HiOutlineDatabase className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      case 'sync':
        return <HiOutlineRefresh className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      case 'chip':
        return <HiOutlineChip className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      case 'code':
        return <HiOutlineCode className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      case 'lock':
        return <HiOutlineLockClosed className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      case 'bell':
        return <HiOutlineBell className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      case 'plug':
        return <HiOutlinePlug className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      case 'server':
        return <HiOutlineServer className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      case 'share':
        return <HiOutlineShare className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      case 'document':
        return <HiOutlineDocumentText className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
      default:
        return <HiOutlinePlug className={`${className} text-teal-600 dark:text-teal-400`} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Integration Capabilities Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-40 left-0 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-cyan-200 dark:bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Feature badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p
            className="text-xl text-gray-600 dark:text-gray-300"
            itemProp="description"
          >
            {config?.description}
          </p>
        </div>

        {/* Key Benefits Row */}
        {config?.benefits && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {config.benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-linear-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl border border-teal-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  {getFeatureIcon(benefit.icon, "w-6 h-6 text-teal-600 dark:text-teal-400")}
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          {config?.features?.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {/* Feature Icon */}
              <div className="w-16 h-16 bg-teal-50 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {getFeatureIcon(feature.icon)}
              </div>

              {/* Feature Title */}
              <h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                itemProp="name"
              >
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p
                className="text-gray-600 dark:text-gray-400 mb-6"
                itemProp="description"
              >
                {feature.description}
              </p>

              {/* Feature Details List */}
              <ul className="space-y-3 mb-6" aria-label={`${feature.title} details`}>
                {feature.details?.map((detail, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-5 h-5 text-teal-500 dark:text-teal-400 mr-2 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Feature Link */}
              <Link
                href={feature.link}
                className="inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300 group/link"
                aria-label={`Learn more about ${feature.title}`}
              >
                <span>Learn more</span>
                <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              {/* Decorative corner gradient */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-teal-600/0 via-teal-600/0 to-teal-600/5 dark:from-teal-400/0 dark:via-teal-400/0 dark:to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>
            </div>
          ))}
        </div>

        {/* Integration Categories */}
        {config?.showCategories && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.categoriesTitle || "Connect with Your Ecosystem"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.categoriesDescription || "Pre-built connectors for popular platforms"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config?.integrationCategories?.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.platforms?.slice(0, 3).map((platform, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-white dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400">
                        {platform}
                      </span>
                    ))}
                    {category.platforms?.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-white dark:bg-gray-700 rounded-full text-teal-600 dark:text-teal-400">
                        +{category.platforms.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* API Features */}
        {config?.showAPIFeatures && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.apiTitle || "Powerful API Capabilities"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.apiDescription || "Build custom integrations with our comprehensive API"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config?.apiFeatures?.map((api, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="text-2xl">{api.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{api.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{api.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-1 bg-gray-50 dark:bg-gray-800/50 rounded-full pl-6 pr-2 py-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to connect your ecosystem?"}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className={`${config?.ctaButton?.backgroundColor} ${config?.ctaButton?.textColor} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2`}
                aria-label="Start integrating now"
              >
                {config?.ctaButton?.text || "Get Started"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
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

export default IntegrationCapabilitiesSection1;