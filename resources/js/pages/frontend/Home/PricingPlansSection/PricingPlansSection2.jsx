// page/frontend/Home/PricingPlansSection/PricingPlansSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineStar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineLightningBolt,
  HiOutlineCurrencyDollar,
  HiOutlineQuestionMarkCircle,
  HiOutlineChevronDown,
  HiOutlineChevronUp
} from 'react-icons/hi';

const PricingPlansSection2 = ({ config }) => {
  // State for billing cycle
  const [isAnnual, setIsAnnual] = useState(true);

  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

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
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Pricing plans section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-blue-500/30">
            <HiOutlineCurrencyDollar className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "SIMPLE PRICING"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            itemProp="name"
          >
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-600 dark:text-gray-400"
            itemProp="description"
          >
            {config?.description}
          </p>
        </div>

        {/* Billing Toggle with Savings Calculator */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle billing cycle"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform ${isAnnual ? 'translate-x-8' : 'translate-x-1'
                  }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual
            </span>
          </div>

          {/* Savings Badge */}
          {isAnnual && config?.badge?.saveText && (
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
              <HiOutlineLightningBolt className="w-4 h-4 mr-2" />
              {config.badge.saveText}
            </div>
          )}
        </div>

        {/* Pricing Cards Grid - 3 Column Layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          role="list"
          aria-label="Pricing plans"
        >
          {config?.plans?.map((plan, index) => {
            const savings = calculateSavings(plan.priceMonthly, plan.priceAnnual);

            return (
              <div
                key={plan.id || index}
                className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4 z-10' : ''
                  }`}
                role="listitem"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Product"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="inline-flex items-center px-4 py-1 bg-linear-to-r from-amber-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                      <HiOutlineStar className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Card */}
                <div
                  className={`bg-white dark:bg-gray-800 rounded-3xl p-8 h-full flex flex-col transition-all duration-500 relative overflow-hidden ${plan.popular
                    ? 'shadow-2xl scale-105 ring-2 ring-blue-500 dark:ring-blue-400'
                    : 'shadow-xl hover:shadow-2xl hover:-translate-y-2'
                    }`}
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-50" />

                  {/* Content */}
                  <div className="relative z-10">
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
                      {plan.priceMonthly ? (
                        <>
                          <div className="flex items-center justify-center">
                            <span className="text-5xl font-bold text-gray-900 dark:text-white">
                              ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                            </span>
                            <span className="text-gray-500 dark:text-gray-500 ml-2">
                              /{isAnnual ? 'year' : 'mo'}
                            </span>
                          </div>

                          {/* Savings Display */}
                          {isAnnual && savings && (
                            <div className="mt-2 space-y-1">
                              <p className="text-sm text-green-600 dark:text-green-400">
                                Save ${savings.amount} ({savings.percentage}%)
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-500">
                                ${plan.priceMonthly}/month when billed annually
                              </p>
                            </div>
                          )}

                          {/* Free Trial Badge */}
                          {plan.trial && (
                            <div className="mt-3 inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                              <HiOutlineClock className="w-3 h-3 mr-1" />
                              {plan.trial}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          Custom
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          {feature.included ? (
                            <HiOutlineCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0 mr-3" />
                          ) : (
                            <HiOutlineXCircle className="w-5 h-5 text-gray-300 dark:text-gray-600 shrink-0 mr-3" />
                          )}
                          <div>
                            <span
                              className={`text-sm ${feature.included
                                ? 'text-gray-700 dark:text-gray-300'
                                : 'text-gray-400 dark:text-gray-500 line-through'
                                }`}
                            >
                              {feature.text}
                            </span>
                            {feature.tooltip && (
                              <span className="ml-1 inline-block group/tooltip relative">
                                <HiOutlineQuestionMarkCircle className="w-4 h-4 text-gray-400 cursor-help" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap">
                                  {feature.tooltip}
                                </span>
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={plan.link}
                      className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center inline-block ${plan.popular
                        ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl focus:ring-blue-500'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500'
                        }`}
                      aria-label={`Select ${plan.name} plan`}
                    >
                      {plan.ctaText || 'Get Started'}
                    </Link>

                    {/* Money Back Guarantee */}
                    {plan.guarantee && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">
                        {plan.guarantee}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        {config?.comparison?.show && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config.comparison.title}
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Features
                    </th>
                    {config.plans.map((plan) => (
                      <th key={plan.id} className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {config.comparison.features.map((feature, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {feature.name}
                      </td>
                      {feature.values.map((value, valueIdx) => (
                        <td key={valueIdx} className="px-6 py-4 text-center">
                          {value === true ? (
                            <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          ) : value === false ? (
                            <HiOutlineXCircle className="w-5 h-5 text-gray-300 mx-auto" />
                          ) : (
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {value}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {config?.faq?.show && (
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config.faq.title}
            </h3>
            <div className="space-y-4">
              {config.faq.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {item.question}
                    </span>
                    {openFaq === idx ? (
                      <HiOutlineChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <HiOutlineChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Money Back Guarantee Banner */}
        {config?.guarantee?.show && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-full">
              <HiOutlineShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {config.guarantee.text}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>
        {`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
      `}
      </style>
    </section>
  );
};

export default PricingPlansSection2;