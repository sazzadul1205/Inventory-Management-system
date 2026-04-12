// page/frontend/Home/PricingPlansSection/PricingPlansSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineSparkles,
} from 'react-icons/hi';

const PricingPlansSection1 = ({ config }) => {
  
  // State for billing cycle
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Handle plan selection
  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan.id);

    // If there's a custom URL in the plan, redirect to it
    if (plan.checkoutUrl) {
      window.location.href = `${plan.checkoutUrl}?plan=${plan.id}&billing=${isAnnual ? 'annual' : 'monthly'}&price=${isAnnual ? plan.priceAnnual : plan.priceMonthly}`;
      return;
    }

    // If there's a global checkout URL from config
    if (config?.checkoutUrl) {
      window.location.href = `${config.checkoutUrl}?plan=${plan.id}&billing=${isAnnual ? 'annual' : 'monthly'}&price=${isAnnual ? plan.priceAnnual : plan.priceMonthly}`;
      return;
    }

    // If you want to show a modal/dialog instead
    if (config?.showModalOnSelect) {
      // You can trigger a modal here
      // For example, if you have a modal component:
      // openPlanModal(plan, isAnnual);

      // Or dispatch an event that your modal listens to
      const event = new CustomEvent('selectPlan', {
        detail: { plan, billingCycle: isAnnual ? 'annual' : 'monthly' }
      });
      window.dispatchEvent(event);
      return;
    }

    // Default: just store the selected plan and let parent component handle it
    // You can also pass this up via a callback prop if needed
    if (config?.onPlanSelect) {
      config.onPlanSelect(plan, isAnnual);
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-blue-600 dark:text-blue-400 relative inline-block">
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
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-5 sm:h-6 w-10 sm:w-12 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            role="switch"
            aria-checked={isAnnual}
            aria-label="Toggle billing cycle"
          >
            <span
              className={`inline-block h-3.5 sm:h-4 w-3.5 sm:w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-5 sm:translate-x-7' : 'translate-x-1'}`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
            Annual
          </span>
          {config?.saveBadge?.text && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              {config.saveBadge.text}
            </span>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {config?.plans?.map((plan, index) => (
            <div
              key={plan.id || index}
              className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="inline-flex items-center px-3 sm:px-4 py-1 bg-linear-to-r from-yellow-500 to-yellow-600 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg">
                    <HiOutlineStar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Card */}
              <div
                className={`bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-full flex flex-col transition-all duration-300 ${plan.popular
                  ? 'shadow-2xl scale-[1.02] border-2 border-blue-500 dark:border-blue-400'
                  : 'shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:-translate-y-2'
                  }`}
              >
                {/* Plan Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 ml-1 sm:ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {isAnnual && plan.priceMonthly && (
                    <p className="text-[10px] sm:text-xs text-green-600 dark:text-green-400 mt-1">
                      ${plan.priceMonthly}/month when billed annually
                    </p>
                  )}
                </div>

                {/* Features List */}
                <div className="flex-1 space-y-2.5 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      {feature.included ? (
                        <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 shrink-0 mr-2 sm:mr-3 mt-0.5" />
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
                <button
                  onClick={() => handlePlanSelection(plan)}
                  className={`w-full py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm sm:text-base ${plan.popular
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl focus:ring-blue-500'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500'
                    } ${selectedPlan === plan.id ? 'opacity-75 cursor-not-allowed' : ''}`}
                  aria-label={`Select ${plan.name} plan`}
                  disabled={selectedPlan === plan.id}
                >
                  {selectedPlan === plan.id ? 'Selected' : (plan.ctaText || 'Get Started')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        {config?.enterprise?.show && (
          <div className="mt-12 sm:mt-16 md:mt-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Enterprise
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                  {config.enterprise.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {config.enterprise.description}
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {config.enterprise.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 mr-2 sm:mr-3 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={config.enterprise.link}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors group text-sm sm:text-base"
                >
                  <span>{config.enterprise.linkText}</span>
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-linear-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl p-0.5">
                  <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-3 sm:mb-4">
                      Trusted by leading companies
                    </h4>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                      {config.enterprise.logos.map((logo, idx) => (
                        <div key={idx} className="h-10 sm:h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-600 text-xs sm:text-sm font-medium">
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
          <div className="text-center mt-10 sm:mt-12">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
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
    </section>
  );
};

export default PricingPlansSection1;