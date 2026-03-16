// page/frontend/Home/IndustriesSection/IndustriesSection3.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineBeaker,
  HiOutlineChip,
  HiOutlineHeart,
  HiOutlineOfficeBuilding,
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineGlobeAlt,
  HiOutlineBookOpen,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineFilm,
  HiOutlineSun,
  HiOutlineCloud,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineStar,
} from 'react-icons/hi';

const IndustriesSection3 = ({ config }) => {
  // State for active industry (for detailed view)
  const [activeIndustry, setActiveIndustry] = useState(
    config?.industries?.[0]?.id || null
  );

  // Icon mapping
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className} text-current`;

    switch (iconName) {
      case 'retail':
        return <HiOutlineShoppingBag className={iconClasses} aria-hidden="true" />;
      case 'logistics':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'manufacturing':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'pharma':
        return <HiOutlineBeaker className={iconClasses} aria-hidden="true" />;
      case 'technology':
        return <HiOutlineChip className={iconClasses} aria-hidden="true" />;
      case 'healthcare':
        return <HiOutlineHeart className={iconClasses} aria-hidden="true" />;
      case 'realestate':
        return <HiOutlineOfficeBuilding className={iconClasses} aria-hidden="true" />;
      case 'beauty':
        return <HiOutlineSparkles className={iconClasses} aria-hidden="true" />;
      case 'automotive':
        return <HiOutlineLightningBolt className={iconClasses} aria-hidden="true" />;
      case 'food':
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'education':
        return <HiOutlineBookOpen className={iconClasses} aria-hidden="true" />;
      case 'nonprofit':
        return <HiOutlineUsers className={iconClasses} aria-hidden="true" />;
      case 'finance':
        return <HiOutlineCurrencyDollar className={iconClasses} aria-hidden="true" />;
      case 'entertainment':
        return <HiOutlineFilm className={iconClasses} aria-hidden="true" />;
      case 'energy':
        return <HiOutlineSun className={iconClasses} aria-hidden="true" />;
      case 'aerospace':
        return <HiOutlineCloud className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
    }
  };

  // Get active industry data
  const activeIndustryData = config?.industries?.find(
    industry => industry.id === activeIndustry
  ) || config?.industries?.[0];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Industries we serve"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern - Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge with Icon */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-4 py-2 mb-6 shadow-lg shadow-amber-500/30">
            <HiOutlineStar className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "INDUSTRIES WE SERVE"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
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
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EC4899" />
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

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Industry List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Select an Industry
            </h3>
            <div className="space-y-3">
              {config?.industries?.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    activeIndustry === industry.id
                      ? 'bg-linear-to-r from-amber-500 to-pink-500 text-white shadow-lg scale-105'
                      : 'bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  aria-label={`View details for ${industry.title}`}
                  aria-current={activeIndustry === industry.id ? 'true' : undefined}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      activeIndustry === industry.id
                        ? 'bg-white/20'
                        : `bg-linear-to-br ${industry.iconBg} bg-opacity-10`
                    }`}>
                      {getIcon(industry.icon, "w-6 h-6 text-white")}
                    </div>
                    <div>
                      <h4 className="font-semibold">{industry.title}</h4>
                      <p className="text-sm opacity-80 line-clamp-1">{industry.shortDesc}</p>
                    </div>
                    {activeIndustry === industry.id && (
                      <HiOutlineArrowRight className="ml-auto w-5 h-5 animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Detailed View */}
          <div className="lg:col-span-7">
            {activeIndustryData && (
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 ${activeIndustryData.iconBg} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      {getIcon(activeIndustryData.icon, "w-8 h-8 text-black")}
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                        itemProp="name"
                      >
                        {activeIndustryData.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {activeIndustryData.category}
                      </p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  {activeIndustryData.rating && (
                    <div className="flex items-center bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full">
                      <HiOutlineStar className="w-4 h-4 text-amber-500 mr-1" />
                      <span className="font-semibold text-amber-700 dark:text-amber-300">
                        {activeIndustryData.rating}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p
                  className="text-gray-600 dark:text-gray-400 mb-6"
                  itemProp="description"
                >
                  {activeIndustryData.detailedDesc}
                </p>

                {/* Key Challenges & Solutions */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Challenges */}
                  <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5">
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center">
                      <span className="w-1 h-4 bg-red-500 rounded-full mr-2"></span>
                      Key Challenges
                    </h4>
                    <ul className="space-y-2">
                      {activeIndustryData.challenges?.map((challenge, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 mr-2"></span>
                          <span className="text-gray-600 dark:text-white">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-5">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center">
                      <span className="w-1 h-4 bg-green-500 rounded-full mr-2"></span>
                      Our Solutions
                    </h4>
                    <ul className="space-y-2">
                      {activeIndustryData.solutions?.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-white">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Success Metrics */}
                {activeIndustryData.metrics && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Success Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {activeIndustryData.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Case Study Preview */}
                {activeIndustryData.caseStudy && (
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Featured Case Study
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {activeIndustryData.caseStudy.title}
                        </p>
                      </div>
                      <Link
                        href={activeIndustryData.caseStudy.link}
                        className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
                      >
                        <span>Read more</span>
                        <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        {config?.bottomCta?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              <span>{config.bottomCta.text}</span>
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #9ca3af 1px, transparent 0);
          background-size: 40px 40px;
        }
        .dark .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #4b5563 1px, transparent 0);
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection3;