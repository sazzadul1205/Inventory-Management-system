// page/frontend/Home/ReturnsManagementSection/ReturnsManagementSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineRefresh,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineUser,
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCube
} from 'react-icons/hi';
import { GoPackage } from "react-icons/go";

const ReturnsManagementSection1 = ({ config }) => {
  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'refresh':
        return <HiOutlineRefresh className={className} aria-hidden="true" />;
      case 'check':
        return <HiOutlineCheckCircle className={className} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={className} aria-hidden="true" />;
      case 'dollar':
        return <HiOutlineCurrencyDollar className={className} aria-hidden="true" />;
      case 'location':
        return <HiOutlineLocationMarker className={className} aria-hidden="true" />;
      case 'document':
        return <HiOutlineDocumentText className={className} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={className} aria-hidden="true" />;
      case 'user':
        return <HiOutlineUser className={className} aria-hidden="true" />;
      case 'package':
        return <GoPackage className={className} aria-hidden="true" />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={className} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={className} aria-hidden="true" />;
      default:
        return <HiOutlineRefresh className={className} aria-hidden="true" />;
    }
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Returns Management Solutions"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Background Pattern - Return Arrows */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20 L40 20 L40 40 L20 40 Z' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3Cpath d='M15 25 L20 20 L15 15' stroke='%239CA3AF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 dark:bg-orange-900/20 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-yellow-200 dark:bg-yellow-900/20 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-orange-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-orange-100 dark:border-gray-700">
            <HiOutlineRefresh className="w-4 h-4 text-orange-600 dark:text-orange-400 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
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
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {config?.process?.title}
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {config?.process?.steps?.map((step, idx) => (
              <div key={step.id} className="relative">
                {idx < config.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true"></div>
                )}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-lg">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${step.bgColor} flex items-center justify-center text-white font-bold text-lg`}>
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-2 font-medium">{step.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Returns Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={config?.dashboardImage}
                alt="Returns Management Dashboard"
                className="w-full h-auto"
                loading="lazy"
              />

              {/* Returns Stats Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <HiOutlineRefresh className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Today's Returns</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{config?.todayReturns}</p>
                  </div>
                </div>
              </div>

              {/* Processing Status */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {config?.returnStats?.map((stat) => (
                  <div key={stat.id} className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-orange-600 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
              <p className="text-sm font-semibold flex items-center gap-1">
                <HiOutlineClock className="w-4 h-4" />
                {config?.processingTime}
              </p>
            </div>
          </div>

          {/* Right Content - Returns Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {config?.features?.title}
            </h3>

            <div className="space-y-6">
              {config?.features?.items?.map((feature) => (
                <div key={feature.id} className="flex gap-4 group">
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(feature.icon, "w-6 h-6 text-white")}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={config?.ctaLink}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {config?.ctaText}
                <HiArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Returns Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {config?.methods?.map((method) => (
            <div
              key={method.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-14 h-14 rounded-xl ${method.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {getIcon(method.icon, "w-7 h-7 text-white")}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{method.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{method.description}</p>
              <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
                {method.timeframe}
              </div>
            </div>
          ))}
        </div>

        {/* Inspection & Restocking */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-linear-to-br from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-orange-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <HiOutlineCheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{config?.inspection?.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{config?.inspection?.description}</p>
            <div className="space-y-3">
              {config?.inspection?.steps?.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xs font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-green-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <HiOutlineCube className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{config?.restocking?.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{config?.restocking?.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {config?.restocking?.stats?.map((stat, idx) => (
                <div key={idx} className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {config?.benefits?.map((benefit) => (
            <div key={benefit.id} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                {getIcon(benefit.icon, "w-6 h-6 text-orange-600 dark:text-orange-400")}
              </div>
              <div className="font-bold text-gray-900 dark:text-white mb-1">{benefit.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{benefit.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-linear-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{config?.footerCta?.title}</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">{config?.footerCta?.description}</p>
          <Link
            href={config?.footerCta?.link}
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {config?.footerCta?.buttonText}
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReturnsManagementSection1;