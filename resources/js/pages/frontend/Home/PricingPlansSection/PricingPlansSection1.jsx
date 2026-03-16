// page/frontend/Home/PricingPlansSection/PricingPlansSection1.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineUsers,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineGlobeAlt
} from 'react-icons/hi';

const PricingPlansSection1 = ({ config }) => {
  // State for billing cycle
  const [isAnnual, setIsAnnual] = useState(true);

  // State for selected plan
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Get feature icon
  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'cube':
        return <HiOutlineCube className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'truck':
        return <HiOutlineTruck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'chart':
        return <HiOutlineChartBar className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'shield':
        return <HiOutlineShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'clock':
        return <HiOutlineClock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'globe':
        return <HiOutlineGlobeAlt className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
      case 'users':
        return <HiOutlineUsers className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
      default:
        return <HiOutlineCheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
    }
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Pricing plans section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern - decorative */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Gradient Orbs - decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Pricing badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              )}
              <span className={`text-sm font-medium ${config.badge.textColor}`}>
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.heading?.prefix}{' '}
            <span className={`${config?.heading?.highlightColor} relative inline-block`}>
              {config?.heading?.highlightedText}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                aria-hidden="true"
              >
                <line
                  x1="0" y1="4" x2="200" y2="4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  className={config?.heading?.highlightColor}
                />
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

        {/* Billing Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            role="switch"
            aria-checked={isAnnual}
            aria-label="Toggle billing cycle"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
            Annual
          </span>
          {config?.badge?.saveText && (
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              {config.badge.saveText}
            </span>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Pricing plans"
        >
          {config?.plans?.map((plan, index) => (
            <div
              key={plan.id || index}
              className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''
                }`}
              role="listitem"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Product"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="inline-flex items-center px-4 py-1 bg-linear-to-r from-yellow-500 to-yellow-600 text-white text-sm font-semibold rounded-full shadow-lg">
                    <HiOutlineStar className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Card */}
              <div
                className={`bg-white dark:bg-gray-800 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${plan.popular
                  ? 'shadow-2xl scale-105 border-2 border-blue-500 dark:border-blue-400'
                  : 'shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:-translate-y-2'
                  }`}
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2" itemProp="name">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-gray-500 dark:text-gray-500 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {isAnnual && plan.priceMonthly && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      ${plan.priceMonthly}/month when billed annually
                    </p>
                  )}
                </div>

                {/* Features List */}
                <div className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      {feature.included ? (
                        <HiOutlineCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0 mr-3" />
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

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${plan.popular
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl focus:ring-blue-500'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500'
                    }`}
                  aria-label={`Select ${plan.name} plan`}
                >
                  {plan.ctaText || 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        {config?.enterprise?.show && (
          <div className="mt-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-4">
                  <HiOutlineSparkles className="w-4 h-4 mr-1" />
                  Enterprise
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {config.enterprise.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {config.enterprise.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {config.enterprise.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <HiOutlineCheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={config.enterprise.link}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors group"
                >
                  <span>{config.enterprise.linkText}</span>
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl p-1">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Trusted by leading companies
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {config.enterprise.logos.map((logo, idx) => (
                        <div key={idx} className="h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm font-medium">
                          {logo}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Link */}
        {config?.faqLink?.show && (
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400">
              {config.faqLink.text}{' '}
              <Link
                href={config.faqLink.url}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {config.faqLink.linkText}
              </Link>
            </p>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>
        {`
  .bg-grid-pattern {
    background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                      linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
    background-size: 50px 50px;
  }
  .dark .bg-grid-pattern {
    background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                      linear-gradient(to bottom, #374151 1px, transparent 1px);
  }
`}
      </style>
    </section>
  );
};

export default PricingPlansSection1;