// frontend/PricingPlans/FreeTrialSection/FreeTrialSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi';

const FreeTrialSection1 = ({ config }) => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const plans = config?.plans || [];
  const testimonials = config?.testimonials || [];
  const features = config?.features || [];

  useEffect(() => {
    let interval;
    if (isPlaying && testimonials.length > 1) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log('Trial signup:', { email, plan: selectedPlan });
    }, 1500);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  const selectedPlanData = plans.find(p => p.id === selectedPlan) || plans[0];

  return (
    <section
      className="relative py-20 bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Free Trial"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-200/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-200/30 to-transparent dark:from-indigo-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>

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

        {/* Main Trial Card */}
        {!submitted ? (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Trial Info */}
              <div className="p-8 lg:p-12 bg-linear-to-br from-blue-600 to-indigo-600 text-white">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-3xl font-bold mb-3">14-Day Free Trial</h3>
                <p className="text-blue-100 text-lg mb-6">
                  Experience the full power of our platform with no commitment. Cancel anytime.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <HiOutlineCheck className="w-6 h-6 text-green-300" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineCheck className="w-6 h-6 text-green-300" />
                    <span>Full access to all features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineCheck className="w-6 h-6 text-green-300" />
                    <span>Dedicated onboarding support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineCheck className="w-6 h-6 text-green-300" />
                    <span>Cancel anytime, no questions asked</span>
                  </div>
                </div>
                <div className="text-sm text-blue-200">
                  ⚡ Used by 1,000+ businesses to transform their operations
                </div>
              </div>

              {/* Right Column - Signup Form */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Start your free trial
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Choose a plan and enter your email to get started.
                </p>

                {/* Plan Selector */}
                <div className="flex gap-3 mb-6">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all ${selectedPlan === plan.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                        }`}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>

                {/* Plan Features Preview */}
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {selectedPlanData.name} plan includes:
                  </p>
                  <ul className="space-y-1">
                    {selectedPlanData.features?.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <HiOutlineCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Email Input */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Work Email
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? 'Starting...' : 'Start Free Trial'}
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    By signing up, you agree to our{' '}
                    <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
                    {' '}and{' '}
                    <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        ) : (
          // Success State
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 text-center mb-12">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Welcome to your free trial!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Check your inbox at <strong>{email}</strong> for setup instructions.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 mb-6 max-w-md mx-auto">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                📧 We've sent you an email with login credentials and getting started guide.
                If you don't see it in a few minutes, check your spam folder.
              </p>
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
            >
              Go to Dashboard
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Features Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Everything you need to get started
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Trusted by 1,000+ businesses
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
                        <div>
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
                <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50">
                  <HiOutlineChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setCurrentTestimonial(idx); setIsPlaying(false); }}
                      className={`w-2 h-2 rounded-full transition-all ${currentTestimonial === idx ? 'w-6 bg-blue-600' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
                <button onClick={() => setIsPlaying(!isPlaying)} className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                  {isPlaying ? <HiOutlinePause className="w-4 h-4" /> : <HiOutlinePlay className="w-4 h-4" />}
                </button>
                <button onClick={nextTestimonial} className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                  <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        {config?.faqs && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {config.faqs.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
                    <HiOutlineLightBulb className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    {faq.question}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Guarantee Banner */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full">
            <HiOutlineShieldCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              No credit card required. Cancel anytime during trial.
            </span>
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

export default FreeTrialSection1;