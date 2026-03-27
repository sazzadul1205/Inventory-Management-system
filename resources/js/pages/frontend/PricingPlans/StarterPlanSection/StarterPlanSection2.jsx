// frontend/PricingPlans/StarterPlanSection/StarterPlanSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
} from 'react-icons/hi';

const StarterPlanSection2 = ({ config }) => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [isHovered, setIsHovered] = useState(null);
  const [animatedSavings, setAnimatedSavings] = useState({});

  const plans = config?.plans || [];

  useEffect(() => {
    // Animate savings percentages on load
    plans.forEach((plan, index) => {
      if (plan.savingsPercentage) {
        let current = 0;
        const target = plan.savingsPercentage;
        const increment = target / 30;

        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            setAnimatedSavings(prev => ({ ...prev, [index]: target }));
            clearInterval(interval);
          } else {
            setAnimatedSavings(prev => ({ ...prev, [index]: Math.floor(current) }));
          }
        }, 30);

        return () => clearInterval(interval);
      }
    });
  }, []);

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

  const getSavings = (plan) => {
    if (billingPeriod === 'yearly') {
      const monthlyTotal = plan.priceMonthly * 12;
      const savingsAmount = monthlyTotal - plan.priceYearly;
      return savingsAmount;
    }
    return null;
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Starter Plan Pricing"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

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

        {/* Billing Toggle with Savings Badge */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-16 h-8 bg-linear-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded-full transition-all focus:outline-none shadow-inner"
          >
            <span
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${billingPeriod === 'yearly' ? 'transform translate-x-9' : 'translate-x-1'
                }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
            Yearly
          </span>
          {billingPeriod === 'yearly' && (
            <span className="ml-2 text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full animate-pulse">
              Save up to 20%
            </span>
          )}
        </div>

        {/* Pricing Cards with Interactive Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            const price = getPrice(plan);
            const monthlyEquivalent = getMonthlyEquivalent(plan);
            const savings = getSavings(plan);
            const savingsPercent = animatedSavings[index] || plan.savingsPercentage;

            return (
              <div
                key={plan.id}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${isPopular ? 'ring-2 ring-blue-500 shadow-xl' : 'hover:shadow-xl'
                  }`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg">
                    <HiOutlineSparkles className="inline w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="text-4xl mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        ${price}
                      </span>
                      <span className="text-gray-500">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                    {monthlyEquivalent && (
                      <div className="text-sm text-gray-500 mt-1">
                        ${monthlyEquivalent}/month billed annually
                      </div>
                    )}
                    {savings && billingPeriod === 'yearly' && (
                      <div className="mt-2 inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                          Save ${savings} annually
                        </span>
                      </div>
                    )}
                    {savingsPercent && billingPeriod === 'yearly' && (
                      <div className="mt-1 text-xs text-green-600">
                        {savingsPercent}% savings vs monthly
                      </div>
                    )}
                  </div>

                  <Link
                    href={plan.ctaLink || "/demo"}
                    className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all ${isPopular
                        ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transform hover:scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    {plan.ctaText || "Get Started"}
                    <HiArrowRight className="inline ml-2 w-4 h-4" />
                  </Link>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-500" />
                      What's included:
                    </p>
                    <ul className="space-y-3">
                      {plan.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm group">
                          <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 transition-transform group-hover:scale-110" />
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

        {/* Feature Comparison with Visual Bars */}
        {config?.showComparison && (
          <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Compare Features
            </h3>
            <div className="space-y-6">
              {config?.comparisonFeatures?.map((feature, idx) => (
                <div key={idx} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/4">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {feature.name}
                      </span>
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-4">
                      {plans.map((plan) => (
                        <div key={plan.id} className="text-center">
                          {plan.features?.includes(feature.name) ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full">
                              <HiOutlineCheck className="w-5 h-5 text-green-600" />
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full">
                              <HiOutlineX className="w-5 h-5 text-gray-400" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROI Calculator Preview */}
        {config?.showROICalculator && (
          <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  See Your Potential Savings
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Businesses like yours typically achieve 3x ROI within the first year.
                </p>
                <div className="flex gap-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">25-35%</div>
                    <div className="text-xs text-gray-500">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">3-6 mo</div>
                    <div className="text-xs text-gray-500">Payback Period</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">2.5x</div>
                    <div className="text-xs text-gray-500">Average ROI</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href={config?.roiLink || "/roi-calculator"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
                >
                  Calculate Your ROI
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="mb-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by 1,000+ businesses</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {config?.trustBadges?.map((badge, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl mb-1">{badge.icon}</div>
                <span className="text-xs text-gray-500">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        {config?.showFaq && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {config?.faqs?.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
                    <HiOutlineQuestionMarkCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    {faq.question}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Money Back Guarantee Banner */}
        {config?.showGuarantee && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full">
              <HiOutlineShieldCheck className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {config?.guaranteeText || "30-day money-back guarantee. No risk, no questions asked."}
              </span>
            </div>
          </div>
        )}

        {/* Contact Sales Section */}
        {config?.showContactSales && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineUsers className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">
                {config?.contactText || "Need a custom solution for your business?"}
              </span>
              <Link
                href={config?.contactLink || "/contact"}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2"
              >
                Contact Sales
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

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
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
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

export default StarterPlanSection2;