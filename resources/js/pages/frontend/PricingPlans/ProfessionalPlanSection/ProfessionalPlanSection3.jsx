// frontend/PricingPlans/ProfessionalPlanSection/ProfessionalPlanSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineCalculator,
} from 'react-icons/hi';

const ProfessionalPlanSection3 = ({ config }) => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const plans = config?.plans || [];
  const professionalPlan = plans.find(p => p.id === 'professional') || plans[0];
  const starterPlan = plans.find(p => p.id === 'starter') || {};
  const roiMetrics = config?.roiMetrics || [];
  const comparisonFeatures = config?.comparisonFeatures || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      roiMetrics.forEach((metric, index) => {
        const targetValue = parseInt(metric.value.replace(/[^0-9.-]/g, '')) || 0;
        const suffix = metric.value.replace(/[0-9.-]/g, '');
        let current = 0;
        const increment = targetValue / 50;
        
        const interval = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setAnimatedValues(prev => ({ ...prev, [index]: metric.value }));
            clearInterval(interval);
          } else {
            setAnimatedValues(prev => ({ ...prev, [index]: Math.floor(current) + suffix }));
          }
        }, 30);
        
        return () => clearInterval(interval);
      });
    }
  }, [isVisible, roiMetrics]);

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
      return monthlyTotal - professionalPlan?.priceYearly;
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
      ref={sectionRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Professional Plan Comparison"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-purple-50/30 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

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

        {/* Pricing Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Starter Plan Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div className="p-8">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
              <p className="text-gray-500 text-sm mb-6">For small businesses just getting started</p>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">${starterPlan?.priceMonthly}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Billed monthly</p>
              </div>
              <Link
                href={starterPlan?.ctaLink || "/signup"}
                className="block text-center px-6 py-3 rounded-xl font-semibold transition-all bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200"
              >
                Get Started
              </Link>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 p-8 bg-gray-50 dark:bg-gray-800/50">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Includes:</p>
              <ul className="space-y-2">
                {starterPlan?.features?.slice(0, 6).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <HiOutlineCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 text-sm">
                  <HiOutlineX className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-gray-500">AI Forecasting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <HiOutlineX className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-gray-500">API Access</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Plan Card */}
          <div className="bg-linear-to-br from-purple-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden transform scale-105 ring-2 ring-purple-500">
            <div className="p-8 text-white">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-purple-100 text-sm mb-6">Perfect for growing businesses with advanced needs</p>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${getPrice()}</span>
                  <span>/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                </div>
                {getMonthlyEquivalent() && (
                  <p className="text-sm text-purple-200 mt-1">${getMonthlyEquivalent()}/month billed annually</p>
                )}
                {getSavings() && billingPeriod === 'yearly' && (
                  <p className="text-xs text-green-300 mt-1">Save ${getSavings()} annually</p>
                )}
              </div>
              <Link
                href={professionalPlan?.ctaLink || "/demo"}
                className="block text-center px-6 py-3 rounded-xl font-semibold transition-all bg-white text-purple-600 hover:shadow-lg transform hover:scale-105"
              >
                Start Free Trial
                <HiArrowRight className="inline ml-2 w-4 h-4" />
              </Link>
              <p className="text-xs text-center mt-3 text-purple-200">Free 14-day trial. No credit card required.</p>
            </div>
            <div className="bg-white/10 p-8">
              <p className="text-sm font-semibold text-white mb-4">Everything in Starter, plus:</p>
              <ul className="grid grid-cols-2 gap-3">
                {professionalPlan?.features?.slice(0, 10).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <HiOutlineCheck className="w-4 h-4 text-green-300 shrink-0 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                billingPeriod === 'yearly' ? 'transform translate-x-9' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
            Yearly
          </span>
          {billingPeriod === 'yearly' && (
            <span className="ml-2 text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full animate-pulse">
              Save {getSavingsPercent()}%
            </span>
          )}
        </div>

        {/* ROI Metrics Section */}
        <div className="mb-12 bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Professional Plan ROI Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {animatedValues[index] || metric.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                <div className="text-xs text-gray-400 mt-2">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Detailed Feature Comparison
            </h3>
            <button
              onClick={() => setShowComparisonModal(!showComparisonModal)}
              className="text-purple-600 text-sm font-semibold hover:underline"
            >
              View All Features
            </button>
          </div>
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Starter</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600 bg-purple-50 dark:bg-purple-900/20">Professional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {comparisonFeatures.slice(0, 12).map((feature, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{feature.name}</td>
                  <td className="px-6 py-4 text-center">
                    {feature.starter ? (
                      <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-xs text-gray-400">{feature.starterValue || '—'}</span>
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

        {/* ROI Calculator CTA */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Calculate Your ROI
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                See exactly how much you could save with the Professional plan. Based on your business size and industry.
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
                <HiOutlineCalculator className="w-5 h-5" />
                Calculate Your Savings
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Professional Plan Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config?.successStories?.map((story, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{story.icon}</div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{story.company}</div>
                    <div className="text-xs text-gray-500">{story.industry}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-purple-600">{story.result}</div>
                  <div className="text-xs text-gray-500">{story.resultLabel}</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{story.description}</p>
              </div>
            ))}
          </div>
        </div>

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
              {config?.contactText || "Ready to upgrade? Our team is here to help you get started."}
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

      {/* Comparison Modal */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowComparisonModal(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">All Features Comparison</h3>
              <button onClick={() => setShowComparisonModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left py-3">Feature</th>
                    <th className="text-center py-3">Starter</th>
                    <th className="text-center py-3 text-purple-600">Professional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">{feature.name}</td>
                      <td className="py-3 text-center">
                        {feature.starter ? (
                          <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-xs text-gray-400">{feature.starterValue || '—'}</span>
                        )}
                      </td>
                      <td className="py-3 text-center">
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

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

export default ProfessionalPlanSection3;