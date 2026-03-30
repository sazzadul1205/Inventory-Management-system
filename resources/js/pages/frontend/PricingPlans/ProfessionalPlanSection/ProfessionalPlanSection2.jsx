// frontend/PricingPlans/ProfessionalPlanSection/ProfessionalPlanSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePresentationChartLine
} from 'react-icons/hi';

const ProfessionalPlanSection2 = ({ config }) => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animatedSavings, setAnimatedSavings] = useState(0);

  const plans = useMemo(() => config?.plans || [], [config?.plans]);
  const professionalPlan = plans.find(p => p.id === 'professional') || plans[0];
  const features = config?.features || [];
  const testimonials = config?.testimonials || [];

  useEffect(() => {
    let interval;
    if (isPlaying && testimonials.length > 1) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  useEffect(() => {
    if (billingPeriod === 'yearly') {
      const monthlyTotal = professionalPlan?.priceMonthly * 12;
      const savingsAmount = monthlyTotal - professionalPlan?.priceYearly;
      const target = Number(((savingsAmount / monthlyTotal) * 100).toFixed(0));
      let current = 0;
      const increment = target / 30;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setAnimatedSavings(target);
          clearInterval(interval);
        } else {
          setAnimatedSavings(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [billingPeriod, professionalPlan]);

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Professional Plan Features"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-purple-50/30 to-transparent dark:from-purple-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
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

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-linear-to-br from-purple-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column - Pricing */}
              <div className="p-8 lg:p-10 text-white">
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

              {/* Right Column - Savings */}
              <div className="p-8 lg:p-10 bg-black/10 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">💰</div>
                  <div className="text-2xl font-bold mb-1">
                    {billingPeriod === 'yearly' ? `Save ${animatedSavings}%` : 'Save with Annual'}
                  </div>
                  <p className="text-purple-100 text-sm">
                    {billingPeriod === 'yearly'
                      ? `Get 2 months free when you pay annually`
                      : 'Switch to annual billing and save 2 months'}
                  </p>
                  {getSavings() && billingPeriod === 'yearly' && (
                    <div className="mt-3 inline-block px-3 py-1 bg-green-500/30 rounded-full">
                      <span className="text-sm font-semibold">Save ${getSavings()}/year</span>
                    </div>
                  )}
                </div>
              </div>
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
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${billingPeriod === 'yearly' ? 'transform translate-x-9' : 'translate-x-1'
                }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
            Yearly
          </span>
          {billingPeriod === 'yearly' && (
            <span className="ml-2 text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full animate-pulse">
              Save 2 months free
            </span>
          )}
        </div>

        {/* Feature Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureTab(index)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFeatureTab === index
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                  }`}
              >
                {feature.icon} {feature.name}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-4xl mb-3">{features[activeFeatureTab]?.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {features[activeFeatureTab]?.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {features[activeFeatureTab]?.description}
                </p>
                <ul className="space-y-2">
                  {features[activeFeatureTab]?.highlights?.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
                <div className="text-5xl mb-3">{features[activeFeatureTab]?.statIcon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {features[activeFeatureTab]?.statValue}
                </div>
                <div className="text-sm text-gray-500">{features[activeFeatureTab]?.statLabel}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Feature List */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Everything Included in Professional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {professionalPlan?.features?.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-xl">
                <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator Section */}
        <div className="mb-12 bg-linear-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                See Your ROI with Professional
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Based on data from 500+ Professional plan clients:
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">25-35%</div>
                  <div className="text-xs text-gray-500">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">3-6 mo</div>
                  <div className="text-xs text-gray-500">Payback Period</div>
                </div>
                <div className="text-center">
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
                <HiOutlinePresentationChartLine className="w-5 h-5" />
                Calculate Your ROI
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        {testimonials.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              What Our Professional Plan Clients Say
            </h3>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full shrink-0 px-4">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center max-w-3xl mx-auto">
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 italic text-lg mb-6">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xl">
                            {testimonial.avatar}
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                            <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                          </div>
                        </div>
                        <div className="mt-4 inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                          <span className="text-xs font-semibold text-purple-600">{testimonial.result}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {testimonials.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 transition-all"
                  >
                    <HiOutlineChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentTestimonial(idx);
                          setIsPlaying(false);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${currentTestimonial === idx ? 'w-6 bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 transition-all"
                  >
                    {isPlaying ? (
                      <HiOutlinePause className="w-4 h-4 text-gray-600" />
                    ) : (
                      <HiOutlinePlay className="w-4 h-4 text-gray-600" />
                    )}
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 transition-all"
                  >
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Integration Partners */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Integrates with Your Favorite Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-6 opacity-70">
            {config?.integrations?.map((integration, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl mb-1">{integration.icon}</div>
                <span className="text-xs text-gray-500">{integration.name}</span>
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
              {config?.contactText || "Need a custom quote or have questions about the Professional plan?"}
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

export default ProfessionalPlanSection2;
