// page/frontend/Home/WarehouseManagementSection/WarehouseManagementSection3.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
import {
  HiOutlineCube,
  HiOutlineLocationMarker,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineRefresh,
  HiOutlineSearch,
  HiOutlineDocumentReport,
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineTrendingUp,
  HiOutlineCheckCircle,
  HiOutlineLightningBolt,
  HiOutlineDeviceMobile,
  HiOutlineCloudUpload
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';

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
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden">
      
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end mb-12 sm:mb-16 md:mb-20">
          <div>
            {config?.badge && (
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full mb-4 sm:mb-6">
                <HiOutlineLightningBolt className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium">{config.badge}</span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
              {config?.title}
            </h2>
            {config?.description && (
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
                {config.description}
              </p>
            )}
          </div>
          {config?.headerStats && config.headerStats.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {config.headerStats.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Dashboard Preview */}
        <div className="relative mb-16 sm:mb-20">
          <div className="absolute -inset-3 sm:-inset-4 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl" />
          <div className="relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-2 sm:p-3 md:p-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center gap-1.5 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Warehouse Dashboard • Live View</span>
            </div>
            <img
              src={config?.dashboardImage || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop"}
              alt="Warehouse Management Dashboard"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Floating Cards */}
          <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-5 md:-left-5 lg:-bottom-6 lg:-left-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xl p-2.5 sm:p-3 md:p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <HiOutlineCheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">System Status</p>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-900 dark:text-white">All Systems Operational</p>
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-5 md:-right-5 lg:-top-6 lg:-right-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-xl p-2.5 sm:p-3 md:p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <HiOutlineClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Last Sync</p>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-900 dark:text-white">Just now</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        {config?.process?.show && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
              {config.process.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.process.steps?.map((step) => (
                <div key={step.id} className="relative">
                  <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-gray-200 dark:border-gray-700">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl ${step.bgColor} flex items-center justify-center`}>
                      {getIcon(step.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-white")}
                    </div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {step.number}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1 sm:mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Grid */}
        {config?.featureCards && config.featureCards.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20">
            {config.featureCards.map((card) => (
              <div
                key={card.id}
                className="group relative bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${card.bgColor} flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(card.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white")}
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {card.description}
                </p>
                <div className="text-[10px] sm:text-xs font-medium text-blue-600 dark:text-blue-400">
                  {card.features?.length || 0} key features
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Capabilities Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          
          {/* Left Column - Main Capabilities */}
          {config?.capabilities?.show && (
            <div className="lg:col-span-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {config.capabilities.title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {config.capabilities.items?.map((item) => (
                  <div key={item.id} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl">
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg ${item.bgColor} flex items-center justify-center shrink-0`}>
                      {getIcon(item.icon, "w-3 h-3 sm:w-4 sm:h-4 text-white")}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-0.5 sm:mb-1">
                        {item.title}
                      </h5>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Column - Quick Stats */}
          {config?.quickStats && config.quickStats.length > 0 && (
            <div className="bg-linear-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-white">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Stats</h4>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {config.quickStats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[10px] sm:text-xs mb-1 sm:mb-2">
                      <span>{stat.label}</span>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                    <div className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: stat.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 sm:mt-6 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-white/20">
                <Link
                  href={config?.statsLink || "/reports"}
                  className="flex items-center justify-between text-white hover:opacity-80 transition-opacity text-xs sm:text-sm"
                >
                  <span>View detailed reports</span>
                  <HiOutlineArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        {config?.ctaText && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 p-5 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl">
              <div className="flex -space-x-1.5 sm:-space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-white dark:border-gray-800"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                {config.ctaText}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
              >
                {config?.ctaButtonText || "Get Started"}
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WarehouseManagementSection3;