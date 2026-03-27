// frontend/PricingPlans/CustomPricingSection/CustomPricingSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiArrowRight,
} from 'react-icons/hi';

const CustomPricingSection3 = ({ config }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    name: '',
    email: '',
    phone: '',
    users: 50,
    skus: 10000,
    locations: 5,
    integrations: [],
    features: [],
    timeline: 'immediate',
    budget: '50k-100k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const industries = config?.industries || [];
  const companySizes = config?.companySizes || [];
  const integrationOptions = config?.integrationOptions || [];
  const featureOptions = config?.featureOptions || [];
  const timelineOptions = config?.timelineOptions || [];
  const budgetOptions = config?.budgetOptions || [];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData(prev => {
      const current = prev[field];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const calculateEstimatedPrice = () => {
    const basePrice = 199;
    const userPrice = Math.max(0, formData.users - 10) * 5;
    const skuPrice = Math.max(0, formData.skus - 5000) * 0.5;
    const locationPrice = Math.max(0, formData.locations - 3) * 50;
    const integrationPrice = formData.integrations.length * 100;
    const featurePrice = formData.features.length * 50;

    let total = basePrice + userPrice + skuPrice + locationPrice + integrationPrice + featurePrice;

    // Apply company size multiplier
    const sizeMultipliers = {
      '1-50': 0.8,
      '51-200': 1.0,
      '201-500': 1.2,
      '501-1000': 1.5,
      '1000+': 2.0
    };
    total = total * (sizeMultipliers[formData.companySize] || 1);

    return Math.round(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // In production, send data to your backend
      console.log('Form submitted:', formData);
    }, 1500);
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
    window.scrollTo({ top: formRef.current?.offsetTop - 100, behavior: 'smooth' });
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
    window.scrollTo({ top: formRef.current?.offsetTop - 100, behavior: 'smooth' });
  };

  const estimatedPrice = calculateEstimatedPrice();

  return (
    <section
      ref={formRef}
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Custom Pricing Consultation"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-green-50/30 to-transparent dark:from-green-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
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

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12 max-w-2xl mx-auto">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${step >= s
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                    }`}
                >
                  {step > s ? <HiOutlineCheck className="w-5 h-5" /> : s}
                </div>
                <div className="text-xs mt-2 text-gray-500 hidden sm:block">
                  {s === 1 && 'Company Info'}
                  {s === 2 && 'Requirements'}
                  {s === 3 && 'Preferences'}
                  {s === 4 && 'Contact'}
                </div>
              </div>
              {s < 4 && (
                <div className={`flex-1 h-0.5 mx-2 ${step > s ? 'bg-green-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Company Information */}
        {step === 1 && !submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tell us about your company
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700"
                >
                  <option value="">Select industry</option>
                  {industries.map((ind) => (
                    <option key={ind.id} value={ind.id}>{ind.icon} {ind.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Size *
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700"
                >
                  <option value="">Select size</option>
                  {companySizes.map((size) => (
                    <option key={size} value={size}>{size} employees</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                onClick={nextStep}
                disabled={!formData.companyName || !formData.industry || !formData.companySize}
                className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
                <HiArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Requirements */}
        {step === 2 && !submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tell us about your requirements
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Users
                </label>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={formData.users}
                  onChange={(e) => handleInputChange('users', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">1</span>
                  <span className="font-semibold text-green-600">{formData.users}</span>
                  <span className="text-gray-500">500+</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of SKUs
                </label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={formData.skus}
                  onChange={(e) => handleInputChange('skus', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">1K</span>
                  <span className="font-semibold text-green-600">{formData.skus.toLocaleString()}</span>
                  <span className="text-gray-500">100K+</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of Locations
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={formData.locations}
                  onChange={(e) => handleInputChange('locations', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">1</span>
                  <span className="font-semibold text-green-600">{formData.locations}</span>
                  <span className="text-gray-500">100+</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="px-6 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50">
                Back
              </button>
              <button onClick={nextStep} className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700">
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Preferences */}
        {step === 3 && !submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Customize your plan
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Required Integrations
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {integrationOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleMultiSelect('integrations', option)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all text-left ${formData.integrations.includes(option)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Additional Features
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {featureOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleMultiSelect('features', option)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all text-left ${formData.features.includes(option)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Implementation Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white dark:bg-gray-700"
                >
                  {timelineOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white dark:bg-gray-700"
                >
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="px-6 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50">
                Back
              </button>
              <button onClick={nextStep} className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700">
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Contact & Quote */}
        {step === 4 && !submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Your Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Additional Notes
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={1}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white dark:bg-gray-700"
                  placeholder="Anything else we should know?"
                />
              </div>
            </div>

            {/* Estimated Price Preview */}
            <div className="mt-8 p-6 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Estimated Monthly Price</div>
                  <div className="text-3xl font-bold text-green-600">${estimatedPrice.toLocaleString()}</div>
                  <div className="text-xs text-gray-500 mt-1">+ applicable taxes. Final pricing may vary.</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Includes</div>
                  <div className="text-sm font-semibold">{formData.users} users, {formData.skus.toLocaleString()} SKUs, {formData.locations} locations</div>
                  {formData.integrations.length > 0 && (
                    <div className="text-xs text-gray-500">{formData.integrations.length} integrations</div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="px-6 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50">
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || isSubmitting}
                className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                {!isSubmitting && <HiArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}

        {/* Success State */}
        {submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Thank You for Your Interest!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our team will review your requirements and contact you within 24 hours with a custom quote.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 mb-6">
              <div className="text-sm font-semibold text-green-600 mb-2">What happens next?</div>
              <ul className="text-left space-y-2 max-w-md mx-auto">
                <li className="flex items-center gap-2 text-sm">
                  <HiOutlineCheck className="w-4 h-4 text-green-500" />
                  <span>Our team reviews your requirements</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <HiOutlineCheck className="w-4 h-4 text-green-500" />
                  <span>We prepare a personalized quote</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <HiOutlineCheck className="w-4 h-4 text-green-500" />
                  <span>Schedule a consultation call</span>
                </li>
              </ul>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all"
            >
              Return to Home
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Trust Badges */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 mb-4">Trusted by 500+ enterprise clients</p>
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
        input[type="range"] {
          -webkit-appearance: none;
          background: #e5e7eb;
          height: 4px;
          border-radius: 2px;
        }
        input[type="range"]:focus {
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
        }
        .dark input[type="range"] {
          background: #374151;
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

export default CustomPricingSection3;