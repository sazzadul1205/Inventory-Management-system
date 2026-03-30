// frontend/PricingPlans/StarterPlanSection/StarterPlanSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useMemo } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi';

const StarterPlanSection3 = ({ config }) => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animatedCounters, setAnimatedCounters] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const plans = config?.plans || [];
  const testimonials = config?.testimonials || [];
  const stats = useMemo(() => config?.stats || [], [config]);

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
      stats.forEach((stat, index) => {
        const targetValue = parseInt(stat.value.replace(/[^0-9.-]/g, '')) || 0;
        const suffix = stat.value.replace(/[0-9.-]/g, '');
        let current = 0;
        const increment = targetValue / 50;

        const interval = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setAnimatedCounters(prev => ({ ...prev, [index]: stat.value }));
            clearInterval(interval);
          } else {
            setAnimatedCounters(prev => ({ ...prev, [index]: Math.floor(current) + suffix }));
          }
        }, 30);

        return () => clearInterval(interval);
      });
    }
  }, [isVisible, stats]);

  useEffect(() => {
    let interval;
    if (isPlaying && testimonials.length > 1) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

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
      return monthlyTotal - plan.priceYearly;
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

  const selectedPlanData = plans.find(p => p.id === selectedPlan) || plans[1];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Starter Plan Pricing"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

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

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {animatedCounters[index] || stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Plan Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${selectedPlan === plan.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                }`}
            >
              {plan.name}
            </button>
          ))}
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
              Save 2 months free
            </span>
          )}
        </div>

        {/* Selected Plan Card */}
        {selectedPlanData && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Pricing & CTA */}
              <div className={`p-8 lg:p-10 ${selectedPlanData.popular ? 'bg-linear-to-br from-blue-600 to-indigo-600 text-white' : 'bg-gray-50 dark:bg-gray-800'}`}>
                <div className="text-5xl mb-3">{selectedPlanData.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{selectedPlanData.name}</h3>
                <p className={`text-sm mb-6 ${selectedPlanData.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                  {selectedPlanData.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">${getPrice(selectedPlanData)}</span>
                    <span>/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  {getMonthlyEquivalent(selectedPlanData) && (
                    <div className={`text-sm mt-1 ${selectedPlanData.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                      ${getMonthlyEquivalent(selectedPlanData)}/month billed annually
                    </div>
                  )}
                  {getSavings(selectedPlanData) && billingPeriod === 'yearly' && (
                    <div className="mt-2 inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                        Save ${getSavings(selectedPlanData)} annually
                      </span>
                    </div>
                  )}
                </div>

                <Link
                  href={selectedPlanData.ctaLink || "/demo"}
                  className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all ${selectedPlanData.popular
                    ? 'bg-white text-blue-600 hover:shadow-lg transform hover:scale-105'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                >
                  {selectedPlanData.ctaText || "Get Started"}
                  <HiArrowRight className="inline ml-2 w-4 h-4" />
                </Link>

                {selectedPlanData.popular && (
                  <p className="text-xs text-center mt-3 text-blue-100">
                    Free 14-day trial. No credit card required.
                  </p>
                )}
              </div>

              {/* Right Column - Features */}
              <div className="p-8 lg:p-10">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HiOutlineCheck className="w-5 h-5 text-green-500" />
                  Everything in {selectedPlanData.name}:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPlanData.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Feature Comparison Table */}
        <div className="mb-12 overflow-x-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Compare All Plans
          </h3>
          <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                {plans.map((plan) => (
                  <th key={plan.id} className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {plan.name}
                    {plan.popular && (
                      <span className="block text-xs text-blue-600 mt-1">Most Popular</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {config?.comparisonFeatures?.map((feature, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{feature.name}</td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="px-6 py-4 text-center">
                      {plan.features?.some(f => f.includes(feature.name) || feature.name.includes(plan.features?.[0])) ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : plan.limitedFeatures?.includes(feature.name) ? (
                        <span className="text-xs text-gray-400">Limited</span>
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

        {/* Customer Testimonials Carousel */}
        {testimonials.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Trusted by 1,000+ Businesses
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
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xl">
                            {testimonial.avatar}
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                            <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                          </div>
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
                        className={`w-2 h-2 rounded-full transition-all ${currentTestimonial === idx ? 'w-6 bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
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

        {/* FAQ Section */}
        {config?.showFaq && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {config?.faqs?.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
                    <HiOutlineLightBulb className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
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
            <HiOutlineUsers className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300">
              {config?.contactText || "Have questions about our plans? Need a custom solution?"}
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

export default StarterPlanSection3;