// frontend/PricingPlans/FreeTrialSection/FreeTrialSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlinePlay,
  HiOutlineClock as HiOutlineClockIcon,
  HiOutlineChartSquareBar
} from 'react-icons/hi';

const FreeTrialSection3 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('signup');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [showDemo, setShowDemo] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const timerRef = useRef(null);

  const plans = config?.plans || [];
  const demoSteps = config?.demoSteps || [];
  const benefits = config?.benefits || [];

  useEffect(() => {
    if (countdown > 0) {
      timerRef.current = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timerRef.current);
    }
  }, [countdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setCountdown(14);
      console.log('Trial signup:', { email, plan: selectedPlan });
    }, 1500);
  };

  const startDemo = () => {
    setShowDemo(true);
    setDemoStep(0);
    const interval = setInterval(() => {
      setDemoStep(prev => {
        if (prev >= demoSteps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  };

  const selectedPlanData = plans.find(p => p.id === selectedPlan) || plans[0];

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Free Trial"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
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

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('signup')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${activeTab === 'signup'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
              }`}
          >
            <HiOutlineSparkles className="w-5 h-5" />
            Start Free Trial
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${activeTab === 'demo'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
              }`}
          >
            <HiOutlinePlay className="w-5 h-5" />
            Live Demo
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${activeTab === 'compare'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
              }`}
          >
            <HiOutlineChartSquareBar className="w-5 h-5" />
            Compare Plans
          </button>
        </div>

        {/* Signup Tab */}
        {activeTab === 'signup' && (
          <div className="max-w-4xl mx-auto">
            {!submitted ? (
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Column - Benefits */}
                  <div className="p-8 lg:p-10 bg-linear-to-br from-blue-600 to-indigo-600 text-white">
                    <div className="text-5xl mb-4">✨</div>
                    <h3 className="text-2xl font-bold mb-3">Start Your 14-Day Free Trial</h3>
                    <p className="text-blue-100 mb-6">
                      Experience the full power of our platform. No commitment, cancel anytime.
                    </p>
                    <div className="space-y-3 mb-8">
                      {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <HiOutlineCheck className="w-5 h-5 text-green-300" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-blue-200">
                      ⚡ Join 1,000+ businesses already using our platform
                    </div>
                  </div>

                  {/* Right Column - Signup Form */}
                  <div className="p-8 lg:p-10">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Choose your plan
                    </h4>
                    <div className="flex gap-2 mb-6">
                      {plans.map((plan) => (
                        <button
                          key={plan.id}
                          onClick={() => setSelectedPlan(plan.id)}
                          className={`flex-1 py-2 px-3 rounded-lg font-medium transition-all ${selectedPlan === plan.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                            }`}
                        >
                          {plan.name}
                        </button>
                      ))}
                    </div>

                    <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        {selectedPlanData.name} plan includes:
                      </div>
                      <ul className="space-y-1">
                        {selectedPlanData.features?.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs">
                            <HiOutlineCheck className="w-3 h-3 text-green-500 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your work email"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? 'Starting...' : 'Start Free Trial'}
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-3">
                        No credit card required. Cancel anytime.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Your free trial is ready!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Check your inbox at <strong>{email}</strong> for setup instructions.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-center gap-4">
                    <HiOutlineClockIcon className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{countdown} days</div>
                      <div className="text-sm text-blue-600">remaining in your trial</div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
                >
                  Go to Dashboard
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Demo Tab */}
        {activeTab === 'demo' && (
          <div className="max-w-5xl mx-auto">
            {!showDemo ? (
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 text-center">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  See the platform in action
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Watch a guided tour of our platform and see how businesses like yours are transforming their operations.
                </p>
                <button
                  onClick={startDemo}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all text-lg"
                >
                  <HiOutlinePlay className="w-6 h-6" />
                  Start Interactive Demo
                </button>
                <p className="text-xs text-gray-500 mt-4">Takes about 2 minutes • No signup required</p>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-sm ml-2">Interactive Demo</span>
                    </div>
                    <button
                      onClick={() => setShowDemo(false)}
                      className="text-white/80 hover:text-white"
                    >
                      Exit Demo
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-1">
                      <div className="text-4xl mb-4">{demoSteps[demoStep]?.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {demoSteps[demoStep]?.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {demoSteps[demoStep]?.description}
                      </p>
                      <div className="space-y-3">
                        {demoSteps[demoStep]?.highlights?.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <HiOutlineCheck className="w-5 h-5 text-green-500 mt-0.5" />
                            <span className="text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-64 h-64 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                      <div className="text-8xl">{demoSteps[demoStep]?.visualIcon}</div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex gap-1">
                      {demoSteps.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setDemoStep(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${demoStep === idx ? 'w-6 bg-blue-600' : 'bg-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                    {demoStep < demoSteps.length - 1 ? (
                      <button
                        onClick={() => setDemoStep(demoStep + 1)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                      >
                        Next
                      </button>
                    ) : (
                      <Link
                        href="/signup"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
                      >
                        Start Free Trial
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Compare Tab */}
        {activeTab === 'compare' && (
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
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
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{feature.name}</td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center">
                        {plan.features?.some(f => f.includes(feature.name)) ? (
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
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {config?.faqs?.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            {config?.trustBadges?.map((badge, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl mb-1">{badge.icon}</div>
                <span className="text-xs text-gray-500">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default FreeTrialSection3;