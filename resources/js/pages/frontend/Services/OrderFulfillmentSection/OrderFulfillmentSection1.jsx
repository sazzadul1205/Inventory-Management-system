// page/frontend/Home/OrderFulfillmentSection/OrderFulfillmentSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineRefresh,
  HiOutlineDocumentText,
  HiOutlineUser,
  HiArrowRight,
  HiOutlineCash,
  HiOutlineDeviceMobile
} from 'react-icons/hi';
import { GoPackage } from "react-icons/go";

const OrderFulfillmentSection1 = ({ config }) => {
  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'bag':
        return <HiOutlineShoppingBag className={className} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={className} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={className} aria-hidden="true" />;
      case 'location':
        return <HiOutlineLocationMarker className={className} aria-hidden="true" />;
      case 'check':
        return <HiOutlineCheckCircle className={className} aria-hidden="true" />;
      case 'refresh':
        return <HiOutlineRefresh className={className} aria-hidden="true" />;
      case 'document':
        return <HiOutlineDocumentText className={className} aria-hidden="true" />;
      case 'user':
        return <HiOutlineUser className={className} aria-hidden="true" />;
      case 'package':
        return <GoPackage className={className} aria-hidden="true" />;
      case 'cash':
        return <HiOutlineCash className={className} aria-hidden="true" />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} aria-hidden="true" />;
      default:
        return <GoPackage className={className} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Order Fulfillment Solutions"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Background Pattern - Shipping Themed */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 40 L30 55 L5 40 L5 20 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-green-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-green-100 dark:border-gray-700">
            <GoPackage className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
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

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {config?.stats?.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Process Flow */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {config?.process?.title}
            </h3>

            <div className="space-y-6">
              {config?.process?.steps?.map((step, index) => (
                <div key={step.id} className="flex gap-4">
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center text-white font-bold text-lg`}>
                      {index + 1}
                    </div>
                    {index < config.process.steps.length - 1 && (
                      <div className="absolute top-12 left-6 w-0.5 h-12 bg-gray-200 dark:bg-gray-700" aria-hidden="true"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={config?.ctaLink}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {config?.ctaText}
                <HiArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={config?.dashboardImage}
                alt="Order Fulfillment Dashboard"
                className="w-full h-auto"
                loading="lazy"
              />

              {/* Overlay Stats Cards */}
              <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <HiOutlineClock className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Avg. Fulfillment Time</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{config?.avgFulfillmentTime}</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {config?.orderStats?.map((stat) => (
                  <div key={stat.id} className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Icon */}
            <div className="absolute -bottom-6 -left-6 bg-green-600 rounded-full p-4 shadow-xl animate-bounce">
              <GoPackage className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {config?.features?.map((feature) => (
            <div
              key={feature.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-600 dark:hover:border-green-500"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {getIcon(feature.icon, "w-7 h-7 text-white")}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
              <Link
                href={feature.link}
                className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold hover:gap-2 transition-all duration-300"
              >
                <span className="text-sm">Learn more</span>
                <HiArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" />
              </Link>
            </div>
          ))}
        </div>

        {/* Integration Partners */}
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
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
      </div>
    </section>
  );
};

export default OrderFulfillmentSection1;