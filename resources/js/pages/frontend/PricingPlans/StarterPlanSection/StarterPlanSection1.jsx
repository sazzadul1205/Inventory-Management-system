// frontend/PricingPlans/StarterPlanSection/StarterPlanSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiOutlineCheckCircle,
  HiOutlineX,
} from 'react-icons/hi';

const StarterPlanSection1 = ({ config }) => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = config?.plans || [];

  const getPrice = (plan) => {
    if (billingPeriod === 'monthly') {
      return plan.priceMonthly;
    }
    return plan.priceYearly;
  };

  const getMonthlyEquivalent = (plan) => {
    if (billingPeriod === 'yearly') {
      return (plan.priceYearly / 12).toFixed(0);
    }
    return null;
  };

  const savings = (plan) => {
    if (billingPeriod === 'yearly') {
      const monthlyTotal = plan.priceMonthly * 12;
      const savingsAmount = monthlyTotal - plan.priceYearly;
      const savingsPercent = ((savingsAmount / monthlyTotal) * 100).toFixed(0);
      return savingsPercent;
    }
    return null;
  };

  return (
    <section
      className="relative py-20 bg-linear50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Starter Plan Pricing"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/30 to-transparent dark:from-blue-900/5 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/30 to-transparent dark:from-indigo-900/5 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Billing Toggle */}
        {config?.showBillingToggle && (
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors focus:outline-none"
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  billingPeriod === 'yearly' ? 'transform translate-x-7' : ''
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
              Yearly
              {config?.yearlySavingsBadge && (
                <span className="ml-2 text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">
                  Save {config.yearlySavingsBadge}
                </span>
              )}
            </span>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            const price = getPrice(plan);
            const monthlyEquivalent = getMonthlyEquivalent(plan);
            const savingsPercent = savings(plan);
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 ${
                  isPopular ? 'ring-2 ring-blue-500 scale-105 md:scale-105' : ''
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-3xl mb-2">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        ${price}
                      </span>
                      <span className="text-gray-500">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {monthlyEquivalent && (
                      <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                        ${monthlyEquivalent}/month billed annually
                      </div>
                    )}
                    {savingsPercent && (
                      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Save {savingsPercent}% with annual billing
                      </div>
                    )}
                  </div>
                  
                  <Link
                    href={plan.ctaLink || "/demo"}
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                      isPopular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {plan.ctaText || "Get Started"}
                  </Link>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      What's included:
                    </p>
                    <ul className="space-y-2">
                      {plan.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        {config?.showComparison && (
          <div className="mb-12 overflow-x-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Compare Plans
            </h3>
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {config?.comparisonFeatures?.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      {feature.name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center">
                        {plan.features?.includes(feature.name) ? (
                          <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* FAQ Section */}
        {config?.showFaq && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {config?.faqs?.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Money Back Guarantee */}
        {config?.showGuarantee && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full">
              <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {config?.guaranteeText || "30-day money-back guarantee. No questions asked."}
              </span>
            </div>
          </div>
        )}

        {/* Contact Sales CTA */}
        {config?.showContactSales && (
          <div className="text-center mt-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {config?.contactText || "Need a custom plan?"}{' '}
              <Link href={config?.contactLink || "/contact"} className="text-blue-600 font-semibold hover:underline">
                Contact our sales team
              </Link>
            </p>
          </div>
        )}
      </div>

      {/* Required CSS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default StarterPlanSection1;