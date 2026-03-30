// page/frontend/Home/PricingPlansSection/PricingPlansSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
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
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);

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
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Pricing plans section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern - Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge with Icon */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-4 py-2 mb-6 shadow-lg shadow-amber-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "PRICING PLANS"}
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

        {/* Billing Toggle with Slider */}
        <div className="flex justify-center items-center mb-16">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl inline-flex items-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${!isAnnual
                ? 'bg-linear-to-r from-amber-500 to-pink-500 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center ${isAnnual
                ? 'bg-linear-to-r from-amber-500 to-pink-500 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              Annual
              {config?.badge?.saveText && (
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Pricing Cards - 3 Column with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config?.plans?.map((plan, index) => {
            const savings = calculateSavings(plan.priceMonthly, plan.priceAnnual);
            const isHovered = hoveredPlan === plan.id;
            const isSelected = selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                className={`relative group transition-all duration-500 ${isHovered ? 'transform -translate-y-4' : ''
                  } ${plan.popular ? 'z-10' : ''}`}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                role="listitem"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Product"
              >
                {/* Popular Badge - Animated */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <div className="inline-flex items-center px-4 py-1 bg-linear-to-r from-amber-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                      <HiOutlineStar className="w-4 h-4 mr-1 animate-spin-slow" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Card */}
                <div
                  className={`bg-white dark:bg-gray-800 rounded-3xl p-8 h-full flex flex-col transition-all duration-500 relative overflow-hidden ${isSelected
                    ? 'ring-4 ring-amber-500 shadow-2xl scale-105'
                    : isHovered
                      ? 'shadow-2xl scale-105'
                      : 'shadow-xl'
                    }`}
                  onClick={() => setSelectedPlan(plan.id)}
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  {/* Animated Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br from-amber-50 to-pink-50 dark:from-amber-900/10 dark:to-pink-900/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                   />

                  {/* Decorative Circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-amber-200 to-pink-200 dark:from-amber-800/20 dark:to-pink-800/20 rounded-full blur-3xl -mr-16 -mt-16" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Plan Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? 'scale-110 rotate-3' : ''
                        }`}>
                        {getPlanIcon(plan.icon, "w-10 h-10")}
                      </div>
                    </div>

                    {/* Plan Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2" itemProp="name">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      {plan.priceMonthly ? (
                        <>
                          <div className="flex items-end">
                            <span className="text-5xl font-bold text-gray-900 dark:text-white">
                              ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                            </span>
                            <span className="text-gray-500 dark:text-gray-500 ml-2 mb-1">
                              /{isAnnual ? 'year' : 'mo'}
                            </span>
                          </div>

                          {/* Savings Counter */}
                          {isAnnual && savings && (
                            <div className="mt-3 space-y-1">
                              <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                                <HiOutlineLightningBolt className="w-4 h-4 mr-1 animate-pulse" />
                                Save ${savings.amount} ({savings.percentage}%)
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-500">
                                ${plan.priceMonthly}/month when billed annually
                              </p>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          Custom
                        </div>
                      )}
                    </div>

                    {/* Features List with Icons */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start transition-all duration-300 ${isHovered ? 'translate-x-2' : ''
                            }`}
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          {feature.included ? (
                            <div className="relative">
                              <HiOutlineCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0 mr-3" />
                              {isHovered && (
                                <span className="absolute -inset-1 bg-green-500/20 rounded-full animate-ping" />
                              )}
                            </div>
                          ) : (
                            <HiOutlineXCircle className="w-5 h-5 text-gray-300 dark:text-gray-600 shrink-0 mr-3" />
                          )}
                          <span
                            className={`text-sm ${feature.included
                              ? 'text-gray-700 dark:text-gray-300'
                              : 'text-gray-400 dark:text-gray-500 line-through'
                              }`}
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button with Animation */}
                    <Link
                      href={plan.link}
                      className={`relative w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center inline-block overflow-hidden group ${plan.popular
                        ? 'bg-linear-to-r from-amber-500 to-pink-500 text-white hover:from-amber-600 hover:to-pink-600 shadow-lg hover:shadow-xl focus:ring-amber-500'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500'
                        }`}
                      aria-label={`Select ${plan.name} plan`}
                    >
                      <span className="relative z-10">{plan.ctaText || 'Get Started'}</span>
                      {isHovered && (
                        <span className="absolute inset-0 bg-white/20 transform -skew-x-12 animate-shimmer" />
                      )}
                    </Link>

                    {/* Free Trial Badge */}
                    {plan.trial && (
                      <p className="text-xs text-center text-gray-500 dark:text-gray-500 mt-4">
                        <HiOutlineClock className="inline w-3 h-3 mr-1" />
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
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
            <div className="relative bg-linear-to-r from-amber-500 to-pink-500 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern-white opacity-10" />
              <div className="relative px-8 py-12 md:px-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {config.enterprise.title}
                </h3>
                <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
                  {config.enterprise.description}
                </p>
                <Link
                  href={config.enterprise.link}
                  className="inline-flex items-center bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-xl group"
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
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-linear-to-r from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full">
              <HiOutlineShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 animate-pulse" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {config.guarantee.text}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>
        {`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #9ca3af 1px, transparent 0);
          background-size: 40px 40px;
        }
        .dark .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #4b5563 1px, transparent 0);
        }
        .bg-grid-pattern-white {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}
      </style>
    </section>
  );
};

export default PricingPlansSection3;