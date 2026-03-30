// frontend/PricingPlans/CustomPricingSection/CustomPricingSection1.jsx

// React
import { useState } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiOutlineCalculator,
} from 'react-icons/hi';

const CustomPricingSection1 = ({ config }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    currentSystem: '',
    requirements: ''
  });

  const industries = config?.industries || [];
  const benefits = config?.benefits || [];
  const useCases = config?.useCases || [];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    
    setShowContactForm(false);
    alert('Thank you! Our team will contact you within 24 hours.');
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Custom Pricing"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-green-50/30 to-transparent dark:from-green-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-emerald-50/30 to-transparent dark:from-emerald-900/5 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-100 dark:bg-green-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
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

        {/* Custom Pricing Hero Card */}
        <div className="bg-linear-to-r from-green-600 to-emerald-600 rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 text-white">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-3xl font-bold mb-3">Custom Pricing</h3>
              <p className="text-green-100 text-lg mb-6">
                Get a personalized quote tailored to your specific business needs
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <HiOutlineCheck className="w-6 h-6 text-green-300" />
                  <span>Pay only for what you need</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineCheck className="w-6 h-6 text-green-300" />
                  <span>Flexible terms and payment options</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineCheck className="w-6 h-6 text-green-300" />
                  <span>Volume discounts available</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineCheck className="w-6 h-6 text-green-300" />
                  <span>Multi-year contracts with guaranteed pricing</span>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                Request Custom Quote
                <HiArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-green-200 mt-4">No obligation. Free consultation.</p>
            </div>
            <div className="bg-black/20 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-3">🏢</div>
                <div className="text-2xl font-bold mb-2">Tailored for Your Business</div>
                <p className="text-green-100 text-sm">Custom features, integrations, and support levels</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Choose Custom Pricing?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Custom Solutions by Industry
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedIndustry('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedIndustry === 'all'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                }`}
            >
              All Industries
            </button>
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedIndustry === industry.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                  }`}
              >
                {industry.icon} {industry.name}
              </button>
            ))}
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-4xl mb-3">{industries.find(i => i.id === selectedIndustry)?.icon || '🏢'}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {industries.find(i => i.id === selectedIndustry)?.name || 'Enterprise'} Custom Solutions
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {industries.find(i => i.id === selectedIndustry)?.description}
                </p>
                <ul className="space-y-2">
                  {industries.find(i => i.id === selectedIndustry)?.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {industries.find(i => i.id === selectedIndustry)?.avgSavings || '25-35%'}
                  </div>
                  <div className="text-sm text-gray-500">Average Cost Reduction</div>
                  <div className="mt-4">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="text-green-600 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Get Industry-Specific Quote
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Common Custom Pricing Use Cases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{useCase.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{useCase.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{useCase.description}</p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <HiOutlineCheck className="w-4 h-4" />
                      <span>{useCase.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volume Discounts */}
        <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-4xl mb-3">📦</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Volume Discounts Available</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The more you scale, the more you save. Our custom pricing model rewards growth.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                  <span className="text-sm">1-10 locations</span>
                  <span className="text-sm font-semibold text-green-600">Standard Pricing</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                  <span className="text-sm">11-50 locations</span>
                  <span className="text-sm font-semibold text-green-600">10% Discount</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                  <span className="text-sm">51-100 locations</span>
                  <span className="text-sm font-semibold text-green-600">20% Discount</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">100+ locations</span>
                  <span className="text-sm font-semibold text-green-600">Custom Enterprise Pricing</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2">💡</div>
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">Multi-Year Contracts</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Lock in savings with 2-3 year commitments</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">2 Years</div>
                  <div className="text-xs text-gray-500">Save 15%</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">3 Years</div>
                  <div className="text-xs text-gray-500">Save 25%</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">5 Years</div>
                  <div className="text-xs text-gray-500">Save 35%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        {config?.testimonial && (
          <div className="mb-12 bg-linear-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic text-lg mb-6 max-w-3xl mx-auto">
              "{config.testimonial.quote}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-xl">
                {config.testimonial.avatar}
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{config.testimonial.author}</div>
                <div className="text-sm text-gray-500">{config.testimonial.role}, {config.testimonial.company}</div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {config?.faqs && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.faqs.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
                    <HiOutlineLightBulb className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    {faq.question}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineCalculator className="w-6 h-6 text-green-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Ready to get your custom quote?"}
            </span>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Request a Quote"}
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
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Work Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
                >
                  <option value="">Select...</option>
                  <option>1-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>501-1,000 employees</option>
                  <option>1,000+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current System</label>
                <input
                  type="text"
                  name="currentSystem"
                  value={formData.currentSystem}
                  onChange={handleInputChange}
                  placeholder="e.g., SAP, Oracle, Custom, None"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Requirements</label>
                <textarea
                  name="requirements"
                  rows={3}
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Tell us about your needs, scale, and any specific requirements..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all">
                Submit Request
              </button>
              <p className="text-xs text-gray-500 text-center">Our team will respond within 24 hours with a custom quote.</p>
            </form>
          </div>
        </div>
      )}

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

export default CustomPricingSection1;