// page/frontend/Home/WarehouseManagementSection/WarehouseManagementSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCube,
  HiOutlineLocationMarker,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineRefresh,
  HiOutlineSearch,
  HiOutlineDocumentReport,
  HiArrowRight,
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineTrendingUp,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const WarehouseManagementSection2 = ({ config }) => {
  const [activeFeature, setActiveFeature] = useState(config?.features?.[0]?.id || 1);

  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'cube':
        return <HiOutlineCube className={className} aria-hidden="true" />;
      case 'location':
        return <HiOutlineLocationMarker className={className} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={className} aria-hidden="true" />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={className} aria-hidden="true" />;
      case 'refresh':
        return <HiOutlineRefresh className={className} aria-hidden="true" />;
      case 'search':
        return <HiOutlineSearch className={className} aria-hidden="true" />;
      case 'report':
        return <HiOutlineDocumentReport className={className} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUserGroup className={className} aria-hidden="true" />;
      case 'cog':
        return <HiOutlineCog className={className} aria-hidden="true" />;
      case 'trending':
        return <HiOutlineTrendingUp className={className} aria-hidden="true" />;
      case 'check':
        return <HiOutlineCheckCircle className={className} aria-hidden="true" />;
      default:
        return <HiOutlineCube className={className} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Warehouse Management Solutions"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-900/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {config?.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
              {config?.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-6">
              {config?.description}
            </p>
          </div>
          <Link
            href={config?.ctaLink}
            className="group inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 shrink-0"
          >
            <span>{config?.ctaText}</span>
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main Content - Interactive Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Side - Feature Tabs */}
          <div className="space-y-6">
            {config?.features?.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${activeFeature === feature.id
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/25 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg'
                  }`}
                aria-label={`View ${feature.title} details`}
                aria-pressed={activeFeature === feature.id}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${activeFeature === feature.id
                      ? 'bg-white/20'
                      : 'bg-blue-100 dark:bg-gray-700'
                    } flex items-center justify-center shrink-0`}>
                    {getIcon(feature.icon, `w-6 h-6 ${activeFeature === feature.id
                        ? 'text-white'
                        : 'text-blue-600 dark:text-blue-400'
                      }`)}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${activeFeature === feature.id
                        ? 'text-white'
                        : 'text-gray-900 dark:text-white'
                      }`}>
                      {feature.title}
                    </h3>
                    <p className={`${activeFeature === feature.id
                        ? 'text-blue-100'
                        : 'text-gray-600 dark:text-gray-400'
                      }`}>
                      {feature.shortDesc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Active Feature Details */}
          <div className="lg:sticky lg:top-24">
            {config?.features?.map((feature) => (
              feature.id === activeFeature && (
                <div
                  key={feature.id}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl"
                >
                  {/* Feature Image */}
                  <div className="relative rounded-2xl overflow-hidden mb-8">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" aria-hidden="true"></div>
                    <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${feature.badgeColor}`}>
                      {feature.badge}
                    </div>
                  </div>

                  {/* Feature Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                    {feature.description}
                  </p>

                  {/* Feature Benefits */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Key Benefits:</h4>
                    {feature.benefits?.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <HiOutlineCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    {feature.stats?.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Feature Link */}
                  <div className="mt-6">
                    <Link
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Learn more about {feature.title}
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Integration Partners */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            {config?.integrations?.title}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {config?.integrations?.partners?.map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                {getIcon(partner.icon, "w-8 h-8")}
                <span className="font-medium text-gray-600 dark:text-gray-300">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator Preview */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{config?.roi?.title}</h3>
              <p className="text-blue-100 mb-6">{config?.roi?.description}</p>
              <Link
                href={config?.roi?.link}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                {config?.roi?.buttonText}
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {config?.roi?.stats?.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehouseManagementSection2;