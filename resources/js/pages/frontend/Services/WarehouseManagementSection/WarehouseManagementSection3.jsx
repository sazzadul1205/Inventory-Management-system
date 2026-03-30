// page/frontend/Home/WarehouseManagementSection/WarehouseManagementSection3.jsx

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
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineTrendingUp,
  HiOutlineCheckCircle,
  HiOutlineLightningBolt,
  HiOutlineDeviceMobile,
  HiOutlineCloudUpload
} from 'react-icons/hi';

const WarehouseManagementSection3 = ({ config }) => {
  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'cube':
        return <HiOutlineCube className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'search':
        return <HiOutlineSearch className={className} />;
      case 'report':
        return <HiOutlineDocumentReport className={className} />;
      case 'users':
        return <HiOutlineUserGroup className={className} />;
      case 'cog':
        return <HiOutlineCog className={className} />;
      case 'trending':
        return <HiOutlineTrendingUp className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'bolt':
        return <HiOutlineLightningBolt className={className} />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} />;
      case 'cloud':
        return <HiOutlineCloudUpload className={className} />;
      default:
        return <HiOutlineCube className={className} />;
    }
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Warehouse Management Solutions"
    >
      {/* Background Pattern - Warehouse Rack Style */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #e5e7eb 0px, #e5e7eb 2px, transparent 2px, transparent 30px)',
          backgroundSize: '30px 100%'
        }} />
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #e5e7eb 0px, #e5e7eb 2px, transparent 2px, transparent 30px)',
          backgroundSize: '100% 30px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full mb-6">
              <HiOutlineLightningBolt className="w-4 h-4" />
              <span className="text-sm font-medium">{config?.badge}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {config?.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {config?.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {config?.headerStats?.map((stat, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Dashboard Preview */}
        <div className="relative mb-20">
          <div className="absolute -inset-4 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" aria-hidden="true" />
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Warehouse Dashboard • Live View</span>
            </div>
            <img
              src={config?.dashboardImage}
              alt="Warehouse Management Dashboard"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Floating Cards */}
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">System Status</p>
                <p className="font-semibold text-gray-900 dark:text-white">All Systems Operational</p>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <HiOutlineClock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Last Sync</p>
                <p className="font-semibold text-gray-900 dark:text-white">Just now</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {config?.process?.title}
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {config?.process?.steps?.map((step, idx) => (
              <div key={step.id} className="relative">
                {idx < config.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10" aria-hidden="true" />
                )}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${step.bgColor} flex items-center justify-center`}>
                    {getIcon(step.icon, "w-8 h-8 text-white")}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{step.number}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {config?.featureCards?.map((card) => (
            <div
              key={card.id}
              className="group relative bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`w-14 h-14 rounded-xl ${card.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {getIcon(card.icon, "w-7 h-7 text-white")}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{card.description}</p>
              <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {card.features?.length} key features
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Left Column - Main Capabilities */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{config?.capabilities?.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {config?.capabilities?.items?.map((item) => (
                <div key={item.id} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className={`w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center shrink-0`}>
                    {getIcon(item.icon, "w-4 h-4 text-white")}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Quick Stats */}
          <div className="bg-linear-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-3xl p-8 text-white">
            <h4 className="text-lg font-semibold mb-4">Quick Stats</h4>
            <div className="space-y-6">
              {config?.quickStats?.map((stat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{stat.label}</span>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: stat.percentage }}
                     />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <Link
                href={config?.statsLink}
                className="flex items-center justify-between text-white hover:opacity-80 transition-opacity"
              >
                <span>View detailed reports</span>
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-white dark:border-gray-800"
                 />
              ))}
            </div>
            <span className="text-gray-700 dark:text-gray-300">{config?.ctaText}</span>
            <Link
              href={config?.ctaLink}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.ctaButtonText}
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehouseManagementSection3;