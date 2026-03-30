// frontend/PricingPlans/ProfessionalPlanSection/ProfessionalPlanSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineCode,
} from 'react-icons/hi';

const ProfessionalPlanSection1 = ({ config }) => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedAddon, setSelectedAddon] = useState(null);

  const plans = config?.plans || [];
  const professionalPlan = plans.find(p => p.id === 'professional') || plans[0];
  const addons = config?.addons || [];

  const getPrice = () => {
    if (billingPeriod === 'monthly') {
      return professionalPlan?.priceMonthly;
    }
    return professionalPlan?.priceYearly;
  };

  const getMonthlyEquivalent = () => {
    if (billingPeriod === 'yearly') {
      return (professionalPlan?.priceYearly / 12).toFixed(0);
    }
    return null;
  };

  const getSavings = () => {
    if (billingPeriod === 'yearly') {
      const monthlyTotal = professionalPlan?.priceMonthly * 12;
      const savingsAmount = monthlyTotal - professionalPlan?.priceYearly;
      return savingsAmount;
    }
    return null;
  };

  const getSavingsPercent = () => {
    if (billingPeriod === 'yearly') {
      const monthlyTotal = professionalPlan?.priceMonthly * 12;
      const savingsAmount = monthlyTotal - professionalPlan?.priceYearly;
      return ((savingsAmount / monthlyTotal) * 100).toFixed(0);
    }
    return null;
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Professional Plan Pricing"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-50/30 to-transparent dark:from-purple-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/30 to-transparent dark:from-indigo-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
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
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-16 h-8 bg-linear-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded-full transition-all focus:outline-none"
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
            <span className="ml-2 text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full">
              Save {getSavingsPercent()}%
            </span>
          )}
        </div>

        {/* Professional Plan Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden ring-2 ring-purple-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-bl-full opacity-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full opacity-5" />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Pricing */}
              <div className="p-8 lg:p-10 bg-linear-to-br from-purple-600 to-indigo-600 text-white">
                <div className="text-5xl mb-3">💼</div>
                <h3 className="text-3xl font-bold mb-2">Professional Plan</h3>
                <p className="text-purple-100 text-sm mb-6">
                  Perfect for growing businesses with advanced needs
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">${getPrice()}</span>
                    <span>/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  {getMonthlyEquivalent() && (
                    <div className="text-sm text-purple-200 mt-1">
                      ${getMonthlyEquivalent()}/month billed annually
                    </div>
                  )}
                  {getSavings() && billingPeriod === 'yearly' && (
                    <div className="mt-2 inline-block px-3 py-1 bg-green-500/20 rounded-full">
                      <span className="text-xs font-semibold text-green-200">
                        Save ${getSavings()} annually
                      </span>
                    </div>
                  )}
                </div>

                <Link
                  href={professionalPlan?.ctaLink || "/demo"}
                  className="block text-center px-6 py-3 rounded-xl font-semibold transition-all bg-white text-purple-600 hover:shadow-lg transform hover:scale-105"
                >
                  Start Free Trial
                  <HiArrowRight className="inline ml-2 w-4 h-4" />
                </Link>

                <p className="text-xs text-center mt-3 text-purple-200">
                  Free 14-day trial. No credit card required.
                </p>
              </div>

              {/* Right Column - Features */}
              <div className="p-8 lg:p-10">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HiOutlineSparkles className="w-5 h-5 text-purple-500" />
                  Everything in Professional:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {professionalPlan?.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Add-ons Section */}
        {config?.showAddons && addons.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Popular Add-ons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer ${selectedAddon === index ? 'ring-2 ring-purple-500' : ''
                    }`}
                  onClick={() => setSelectedAddon(selectedAddon === index ? null : index)}
                >
                  <div className="text-3xl mb-3">{addon.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{addon.name}</h4>
                  <p className="text-sm text-gray-500 mb-3">{addon.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">${addon.price}/mo</span>
                    <button className="text-purple-600 text-sm font-semibold hover:underline">
                      {selectedAddon === index ? 'Added' : 'Add to plan'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Feature Comparison Table */}
        {config?.showComparison && (
          <div className="mb-12 overflow-x-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Compare with Starter Plan
            </h3>
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600 bg-purple-50 dark:bg-purple-900/20">Professional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {config?.comparisonFeatures?.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {feature.starter ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center bg-purple-50 dark:bg-purple-900/10">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ROI Calculator Preview */}
        {config?.showROICalculator && (
          <div className="mb-12 bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Calculate Your ROI
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Professional plan clients typically achieve 3x ROI within 6 months.
                </p>
                <div className="flex gap-4">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">25-35%</div>
                    <div className="text-xs text-gray-500">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">3-6 mo</div>
                    <div className="text-xs text-gray-500">Payback Period</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">2.5x</div>
                    <div className="text-xs text-gray-500">Average ROI</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href={config?.roiLink || "/roi-calculator"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all"
                >
                  Calculate Your Savings
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* API & Integration Section */}
        {config?.showAPI && (
          <div className="mb-12 bg-white dark:bg-gray-800 rounded-3xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="text-4xl mb-3">🔌</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Powerful API & Integrations
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Connect with 50+ apps and platforms. Build custom workflows with our RESTful API.
                </p>
                <div className="flex flex-wrap gap-2">
                  {config?.integrations?.slice(0, 6).map((integration, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <Link
                  href={config?.apiLink || "/developers"}
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all"
                >
                  <HiOutlineCode className="w-5 h-5" />
                  View API Documentation
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Testimonial */}
        {config?.testimonial && (
          <div className="mb-12 bg-purple-50 dark:bg-purple-900/20 rounded-3xl p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic text-lg mb-6 max-w-3xl mx-auto">
              "{config.testimonial.quote}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center text-xl">
                {config.testimonial.avatar}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 dark:text-white">{config.testimonial.author}</div>
                <div className="text-sm text-gray-500">{config.testimonial.role}, {config.testimonial.company}</div>
              </div>
            </div>
          </div>
        )}

        {/* Money Back Guarantee */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full">
            <HiOutlineShieldCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {config?.guaranteeText || "30-day money-back guarantee. No questions asked."}
            </span>
          </div>
        </div>

        {/* Contact Sales */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineUsers className="w-6 h-6 text-purple-600" />
            <span className="text-gray-700 dark:text-gray-300">
              {config?.contactText || "Need help choosing the right plan? Our team is here to help."}
            </span>
            <Link
              href={config?.contactLink || "/contact"}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all inline-flex items-center gap-2"
            >
              Contact Sales
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
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
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default ProfessionalPlanSection1;