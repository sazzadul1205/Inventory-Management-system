// page/frontend/Home/WarehouseManagementSection/WarehouseManagementSection1.jsx

// React
import { Link } from '@inertiajs/react';

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
  HiOutlineUserGroup
} from 'react-icons/hi';

const WarehouseManagementSection1 = ({ config }) => {
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
      default:
        return <HiOutlineCube className={className} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Warehouse Management Solutions"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-warehouse-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineCube className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description}
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Feature List */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {config?.features?.title}
            </h3>

            <div className="space-y-6">
              {config?.features?.items?.map((feature) => (
                <div key={feature.id} className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center shrink-0`}>
                    {getIcon(feature.icon, "w-6 h-6 text-white")}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={config?.ctaLink}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {config?.ctaText}
                <HiArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Content - Stats/Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={config?.image?.src}
                alt={config?.image?.alt}
                className="w-full h-auto"
                loading="lazy"
              />

              {/* Overlay Stats Cards */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" aria-hidden="true"></div>

              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                {config?.stats?.map((stat) => (
                  <div
                    key={stat.id}
                    className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    {stat.trend && (
                      <p className={`text-xs mt-1 ${stat.trendColor}`}>{stat.trend}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform rotate-3">
              <p className="text-sm font-semibold">{config?.floatingBadge}</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {config?.metrics?.map((metric) => (
            <div
              key={metric.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {config?.techStack?.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {config?.techStack?.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {config?.techStack?.items?.map((tech) => (
              <div key={tech.id} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-md">
                  {getIcon(tech.icon, "w-8 h-8 text-blue-600 dark:text-blue-400")}
                </div>
                <p className="font-medium text-gray-900 dark:text-white">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .bg-warehouse-pattern {
          background-image: radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0);
          background-size: 40px 40px;
        }
        .dark .bg-warehouse-pattern {
          background-image: radial-gradient(circle at 1px 1px, #374151 1px, transparent 0);
        }
      `}</style>
    </section>
  );
};

export default WarehouseManagementSection1;