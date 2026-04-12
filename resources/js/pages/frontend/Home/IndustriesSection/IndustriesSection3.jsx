// page/frontend/Home/IndustriesSection/IndustriesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
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
  // State for active industry
  const [activeIndustry, setActiveIndustry] = useState(
    config?.industries?.[0]?.id || null
  );

  // Icon mapping
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className} text-current`;

    switch (iconName) {
      case 'retail':
        return <HiOutlineShoppingBag className={iconClasses} />;
      case 'logistics':
        return <HiOutlineTruck className={iconClasses} />;
      case 'manufacturing':
        return <HiOutlineCube className={iconClasses} />;
      case 'pharma':
        return <HiOutlineBeaker className={iconClasses} />;
      case 'technology':
        return <HiOutlineChip className={iconClasses} />;
      case 'healthcare':
        return <HiOutlineHeart className={iconClasses} />;
      case 'realestate':
        return <HiOutlineOfficeBuilding className={iconClasses} />;
      case 'beauty':
        return <HiOutlineSparkles className={iconClasses} />;
      case 'automotive':
        return <HiOutlineLightningBolt className={iconClasses} />;
      case 'food':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'education':
        return <HiOutlineBookOpen className={iconClasses} />;
      case 'nonprofit':
        return <HiOutlineUsers className={iconClasses} />;
      case 'finance':
        return <HiOutlineCurrencyDollar className={iconClasses} />;
      case 'entertainment':
        return <HiOutlineFilm className={iconClasses} />;
      case 'energy':
        return <HiOutlineSun className={iconClasses} />;
      case 'aerospace':
        return <HiOutlineCloud className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  const activeIndustryData = config?.industries?.find(
    industry => industry.id === activeIndustry
  ) || config?.industries?.[0];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#9ca3af_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,#4b5563_1px,transparent_0)] bg-size-[40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-lg shadow-amber-500/30">
              <HiOutlineStar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">

          {/* Left Side - Industry List */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4">
              Select an Industry
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {config?.industries?.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 ${activeIndustry === industry.id
                      ? 'bg-linear-to-r from-amber-500 to-pink-500 text-white shadow-lg scale-[1.02]'
                      : 'bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  aria-label={`View details for ${industry.title}`}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 ${activeIndustry === industry.id
                        ? 'bg-white/20'
                        : `bg-linear-to-br ${industry.iconBg || 'from-amber-500 to-pink-500'}`
                      }`}>
                      {getIcon(industry.icon, "w-5 h-5 sm:w-6 sm:h-6 text-white")}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm sm:text-base">{industry.title}</h4>
                      <p className="text-xs sm:text-sm opacity-80 truncate">{industry.shortDesc}</p>
                    </div>
                    {activeIndustry === industry.id && (
                      <HiOutlineArrowRight className="ml-auto w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Detailed View */}
          <div className="lg:col-span-7">
            {activeIndustryData && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${activeIndustryData.iconBg || 'bg-linear-to-r from-amber-500 to-pink-500'} rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg`}>
                      {getIcon(activeIndustryData.icon, "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 dark:text-white")}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                        {activeIndustryData.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                        {activeIndustryData.category}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  {activeIndustryData.rating && (
                    <div className="flex items-center bg-amber-100 dark:bg-amber-900/30 px-2 sm:px-3 py-1 rounded-full self-start">
                      <HiOutlineStar className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 mr-1" />
                      <span className="font-semibold text-amber-700 dark:text-amber-300 text-xs sm:text-sm">
                        {activeIndustryData.rating}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {activeIndustryData.detailedDesc}
                </p>

                {/* Key Challenges & Solutions */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">

                  {/* Challenges */}
                  {activeIndustryData.challenges && activeIndustryData.challenges.length > 0 && (
                    <div className="bg-red-50 dark:bg-red-900/10 rounded-lg sm:rounded-xl p-4 sm:p-5">
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                        <span className="w-1 h-3 sm:h-4 bg-red-500 rounded-full mr-2" />
                        Key Challenges
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {activeIndustryData.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start text-xs sm:text-sm">
                            <span className="w-1 h-1 bg-red-400 rounded-full mt-1.5 mr-1.5 sm:mr-2" />
                            <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Solutions */}
                  {activeIndustryData.solutions && activeIndustryData.solutions.length > 0 && (
                    <div className="bg-green-50 dark:bg-green-900/10 rounded-lg sm:rounded-xl p-4 sm:p-5">
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                        <span className="w-1 h-3 sm:h-4 bg-green-500 rounded-full mr-2" />
                        Our Solutions
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {activeIndustryData.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start text-xs sm:text-sm">
                            <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Success Metrics */}
                {activeIndustryData.metrics && activeIndustryData.metrics.length > 0 && (
                  <div className="mb-6 sm:mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
                      Success Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {activeIndustryData.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-2 sm:p-3 md:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg sm:rounded-xl">
                          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                            {metric.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Case Study Preview */}
                {activeIndustryData.caseStudy && (
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-4 sm:pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-0.5 sm:mb-1">
                          Featured Case Study
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                          {activeIndustryData.caseStudy.title}
                        </p>
                      </div>
                      <Link
                        href={activeIndustryData.caseStudy.link}
                        className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium text-xs sm:text-sm hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
                      >
                        <span>Read more</span>
                        <HiOutlineArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-linear-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group text-sm sm:text-base"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              <span>{config.bottomCta.text}</span>
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustriesSection3;