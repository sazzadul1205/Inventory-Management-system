// frontend/PricingPlans/CustomPricingSection/CustomPricingSection2.jsx

// React
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineCalculator,
  HiOutlineSwitchHorizontal,
  HiOutlineTemplate
} from 'react-icons/hi';

const CustomPricingSection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('calculator');
  const [showContactForm, setShowContactForm] = useState(false);
  const [calculatorValues, setCalculatorValues] = useState({
    users: 50,
    skus: 10000,
    locations: 5,
    annualRevenue: 10000000
  });
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [animatedPrice, setAnimatedPrice] = useState(0);

  const features = config?.features || [];
  const enterpriseFeatures = config?.enterpriseFeatures || [];
  const testimonials = config?.testimonials || [];

  useEffect(() => {
    // Calculate estimated price based on inputs
    const basePrice = 199;
    const userPrice = Math.max(0, calculatorValues.users - 10) * 5;
    const skuPrice = Math.max(0, calculatorValues.skus - 5000) * 0.5;
    const locationPrice = Math.max(0, calculatorValues.locations - 3) * 50;
    const revenueMultiplier = calculatorValues.annualRevenue / 10000000;

    let total = basePrice + userPrice + skuPrice + locationPrice;
    total = total * (0.8 + revenueMultiplier * 0.2);
    total = Math.min(total, 5000);
    total = Math.max(total, 199);

    setEstimatedPrice(Math.round(total));
  }, [calculatorValues]);

  useEffect(() => {
    let current = 0;
    const increment = estimatedPrice / 30;
    const interval = setInterval(() => {
      current += increment;
      if (current >= estimatedPrice) {
        setAnimatedPrice(estimatedPrice);
        clearInterval(interval);
      } else {
        setAnimatedPrice(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [estimatedPrice]);

  const handleSliderChange = (field, value) => {
    setCalculatorValues(prev => ({ ...prev, [field]: parseInt(value) }));
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Custom Pricing Calculator"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-green-50/30 to-transparent dark:from-green-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-12">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'calculator'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <HiOutlineCalculator className="w-4 h-4" />
            Pricing Calculator
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'features'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <HiOutlineTemplate className="w-4 h-4" />
            Custom Features
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'compare'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <HiOutlineSwitchHorizontal className="w-4 h-4" />
            Compare Plans
          </button>
        </div>

        {/* Pricing Calculator Tab */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Calculator Controls */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Configure Your Plan
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
                    step="1"
                    value={calculatorValues.users}
                    onChange={(e) => handleSliderChange('users', e.target.value)}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-500">1</span>
                    <span className="font-semibold text-green-600">{calculatorValues.users}</span>
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
                    value={calculatorValues.skus}
                    onChange={(e) => handleSliderChange('skus', e.target.value)}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-500">1K</span>
                    <span className="font-semibold text-green-600">{calculatorValues.skus.toLocaleString()}</span>
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
                    step="1"
                    value={calculatorValues.locations}
                    onChange={(e) => handleSliderChange('locations', e.target.value)}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-500">1</span>
                    <span className="font-semibold text-green-600">{calculatorValues.locations}</span>
                    <span className="text-gray-500">100+</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annual Revenue
                  </label>
                  <input
                    type="range"
                    min="1000000"
                    max="100000000"
                    step="1000000"
                    value={calculatorValues.annualRevenue}
                    onChange={(e) => handleSliderChange('annualRevenue', e.target.value)}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-500">$1M</span>
                    <span className="font-semibold text-green-600">${(calculatorValues.annualRevenue / 1000000).toFixed(0)}M</span>
                    <span className="text-gray-500">$100M+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-3xl shadow-xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="text-sm text-green-200 mb-2">Estimated Monthly Price</div>
                <div className="text-5xl font-bold mb-2">{formatCurrency(animatedPrice)}</div>
                <div className="text-green-200 text-sm">+ applicable taxes</div>
              </div>
              <div className="border-t border-green-500 pt-6 mb-6">
                <p className="text-sm text-green-100 mb-4 text-center">
                  This is an estimate based on your inputs. Final pricing may vary based on specific requirements.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{calculatorValues.users}</div>
                    <div className="text-xs text-green-200">Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{calculatorValues.skus.toLocaleString()}</div>
                    <div className="text-xs text-green-200">SKUs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{calculatorValues.locations}</div>
                    <div className="text-xs text-green-200">Locations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">${(calculatorValues.annualRevenue / 1000000).toFixed(0)}M</div>
                    <div className="text-xs text-green-200">Revenue</div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="w-full py-3 bg-white text-green-600 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Get Custom Quote
              </button>
              <p className="text-xs text-green-200 text-center mt-3">
                Includes dedicated support, custom integrations, and SLA
              </p>
            </div>
          </div>
        )}

        {/* Custom Features Tab */}
        {activeTab === 'features' && (
          <div className="space-y-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Enterprise-Grade Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl">
                    <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{feature.name}</div>
                      <div className="text-xs text-gray-500">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Compare Plans Tab */}
        {activeTab === 'compare' && (
          <div className="mb-12 overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Standard</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Professional</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-600 bg-green-50 dark:bg-green-900/20">Custom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {config?.comparisonData?.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{item.feature}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">{item.standard}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">{item.professional}</td>
                    <td className="px-6 py-4 text-center bg-green-50 dark:bg-green-900/10">
                      <span className="text-sm font-semibold text-green-600">{item.custom}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            What Our Custom Plan Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs text-green-600 font-semibold">{testimonial.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineCalculator className="w-6 h-6 text-green-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Ready to get your personalized quote?"}
            </span>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Request Custom Quote"}
              <HiArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowContactForm(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Request Custom Quote</h3>
              <button onClick={() => setShowContactForm(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Work Email *</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name *</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Estimated Users</label>
                <input type="number" value={calculatorValues.users} className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Requirements</label>
                <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" placeholder="Tell us about your specific needs..." />
              </div>
              <button className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">Submit Request</button>
              <p className="text-xs text-gray-500 text-center">Our team will respond within 24 hours with a custom quote.</p>
            </form>
          </div>
        </div>
      )}

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

export default CustomPricingSection2;