// page/frontend/Home/PricingPlansSection/PricingPlansSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import { AiOutlineCrown } from "react-icons/ai";
import {
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineLightningBolt,
  HiOutlineHeart,
  HiOutlineFire
} from 'react-icons/hi';

const PricingPlansSection3 = ({ config }) => {
  
  // State for billing cycle
  const [isAnnual, setIsAnnual] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Get plan icon
  const getPlanIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case 'starter':
        return <HiOutlineHeart className={`${className} text-pink-500`} />;
      case 'professional':
        return <HiOutlineFire className={`${className} text-orange-500`} />;
      case 'business':
        return <AiOutlineCrown className={`${className} text-purple-500`} />;
      default:
        return <HiOutlineCube className={`${className} text-blue-500`} />;
    }
  };

  // Calculate savings
  const calculateSavings = (monthly, annual) => {
    if (!monthly || !annual) return null;
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - annual;
    const percentage = Math.round((savings / monthlyTotal) * 100);
    return { amount: savings, percentage };
  };

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
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
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

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-10 sm:mb-12 md:mb-16">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-xl sm:rounded-2xl inline-flex items-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${!isAnnual
                  ? 'bg-linear-to-r from-amber-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 flex items-center text-sm sm:text-base ${isAnnual
                  ? 'bg-linear-to-r from-amber-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              Annual
              {config?.saveBadge?.text && (
                <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs bg-white/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  {config.saveBadge.text}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {config?.plans?.map((plan) => {
            const savings = calculateSavings(plan.priceMonthly, plan.priceAnnual);
            const isHovered = hoveredPlan === plan.id;
            const isSelected = selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                className={`relative group transition-all duration-500 ${isHovered ? 'transform -translate-y-2 sm:-translate-y-3 md:-translate-y-4' : ''
                  } ${plan.popular ? 'z-10' : ''}`}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="inline-flex items-center px-3 sm:px-4 py-1 bg-linear-to-r from-amber-500 to-pink-500 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg">
                      <HiOutlineStar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Card */}
                <div
                  className={`bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 h-full flex flex-col transition-all duration-500 relative overflow-hidden cursor-pointer ${isSelected
                      ? 'ring-4 ring-amber-500 shadow-2xl scale-[1.02]'
                      : isHovered
                        ? 'shadow-2xl scale-[1.02]'
                        : 'shadow-xl'
                    }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br from-amber-50 to-pink-50 dark:from-amber-900/10 dark:to-pink-900/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                  />

                  {/* Decorative Circles */}
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-br from-amber-200 to-pink-200 dark:from-amber-800/20 dark:to-pink-800/20 rounded-full blur-2xl -mr-12 sm:-mr-16 -mt-12 sm:-mt-16" />

                  {/* Content */}
                  <div className="relative z-10">

                    {/* Plan Icon */}
                    <div className="mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? 'scale-110 rotate-3' : ''
                        }`}>
                        {getPlanIcon(plan.icon, "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8")}
                      </div>
                    </div>

                    {/* Plan Header */}
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-4 sm:mb-6">
                      {plan.priceMonthly ? (
                        <>
                          <div className="flex items-end flex-wrap">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                              ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 ml-1 sm:ml-2 mb-0.5 sm:mb-1">
                              /{isAnnual ? 'year' : 'mo'}
                            </span>
                          </div>

                          {/* Savings Counter */}
                          {isAnnual && savings && (
                            <div className="mt-2 sm:mt-3 space-y-0.5 sm:space-y-1">
                              <div className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-[10px] sm:text-xs">
                                <HiOutlineLightningBolt className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                                Save ${savings.amount} ({savings.percentage}%)
                              </div>
                              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                                ${plan.priceMonthly}/month when billed annually
                              </p>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                          Custom
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8">
                      {plan.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start transition-all duration-300 ${isHovered ? 'translate-x-1 sm:translate-x-2' : ''
                            }`}
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          {feature.included ? (
                            <div className="relative">
                              <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 shrink-0 mr-2 sm:mr-3 mt-0.5" />
                              {isHovered && (
                                <span className="absolute -inset-0.5 sm:-inset-1 bg-green-500/20 rounded-full animate-ping" />
                              )}
                            </div>
                          ) : (
                            <HiOutlineXCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 dark:text-gray-600 shrink-0 mr-2 sm:mr-3 mt-0.5" />
                          )}
                          <span
                            className={`text-xs sm:text-sm ${feature.included
                                ? 'text-gray-700 dark:text-gray-300'
                                : 'text-gray-400 dark:text-gray-500 line-through'
                              }`}
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={plan.link}
                      className={`relative w-full py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center inline-block overflow-hidden group text-sm sm:text-base ${plan.popular
                          ? 'bg-linear-to-r from-amber-500 to-pink-500 text-white hover:from-amber-600 hover:to-pink-600 shadow-lg hover:shadow-xl focus:ring-amber-500'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500'
                        }`}
                      aria-label={`Select ${plan.name} plan`}
                    >
                      <span className="relative z-10">{plan.ctaText || 'Get Started'}</span>
                    </Link>

                    {/* Free Trial Badge */}
                    {plan.trial && (
                      <p className="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-500 mt-3 sm:mt-4">
                        <HiOutlineClock className="inline w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                        {plan.trial}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Callout */}
        {config?.enterprise?.show && (
          <div className="mt-12 sm:mt-16 md:mt-20 relative">
            <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-pink-500 rounded-xl sm:rounded-2xl md:rounded-3xl blur-2xl opacity-30 animate-pulse" />
            <div className="relative bg-linear-to-r from-amber-500 to-pink-500 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
              <div className="relative px-6 sm:px-8 py-8 sm:py-10 md:py-12 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
                  {config.enterprise.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-amber-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  {config.enterprise.description}
                </p>
                <Link
                  href={config.enterprise.link}
                  className="inline-flex items-center bg-white text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-xl group text-sm sm:text-base"
                >
                  <span>{config.enterprise.linkText}</span>
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Money Back Guarantee */}
        {config?.guarantee?.show && (
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-center space-x-1.5 sm:space-x-3 bg-linear-to-r from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <HiOutlineShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400" />
              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                {config.guarantee.text}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingPlansSection3;