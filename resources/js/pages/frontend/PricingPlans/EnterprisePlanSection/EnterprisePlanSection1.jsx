// frontend/PricingPlans/EnterprisePlanSection/EnterprisePlanSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiArrowRight,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const EnterprisePlanSection1 = ({ config }) => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [showContactForm, setShowContactForm] = useState(false);

  const features = config?.features || [];
  const industries = config?.industries || [];
  const benefits = config?.benefits || [];

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Enterprise Plan"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/30 to-transparent dark:from-blue-900/5 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/30 to-transparent dark:from-indigo-900/5 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

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

        {/* Enterprise Hero Card */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Info */}
            <div className="p-8 lg:p-12 text-white">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-3xl font-bold mb-3">Enterprise Plan</h3>
              <p className="text-blue-100 text-lg mb-6">
                Custom solutions for large organizations with complex needs
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <HiOutlineCheck className="w-6 h-6 text-green-400" />
                  <span>Custom pricing tailored to your business</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineCheck className="w-6 h-6 text-green-400" />
                  <span>Dedicated account manager & 24/7 priority support</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineCheck className="w-6 h-6 text-green-400" />
                  <span>Custom integrations & API access</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineCheck className="w-6 h-6 text-green-400" />
                  <span>SLA guarantees & compliance support</span>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                Contact Sales
                <HiArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-blue-200 mt-4">No commitment. Free consultation.</p>
            </div>

            {/* Right Column - Stats */}
            <div className="bg-black/20 p-8 lg:p-12 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="text-center">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm text-blue-100">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-blue-100">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15min</div>
                  <div className="text-sm text-blue-100">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm text-blue-100">Integrations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Features Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Enterprise-Grade Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Enterprises Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <div className="text-xl font-bold text-blue-600 mb-2">{benefit.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Industry-Specific Solutions
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedIndustry === industry.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                }`}
              >
                {industry.icon} {industry.name}
              </button>
            ))}
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{industries.find(i => i.id === selectedIndustry)?.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {industries.find(i => i.id === selectedIndustry)?.name} Solutions
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {industries.find(i => i.id === selectedIndustry)?.description}
                </p>
                <ul className="space-y-2">
                  {industries.find(i => i.id === selectedIndustry)?.highlights?.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="mb-12 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Enterprise-Grade Security & Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our platform meets the highest security standards to protect your data.
              </p>
              <div className="flex flex-wrap gap-2">
                {config?.complianceBadges?.map((badge, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 bg-white dark:bg-gray-700 rounded-full shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">SOC 2 Type II</div>
                <div className="text-xs text-gray-500">Audited annually</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">ISO 27001</div>
                <div className="text-xs text-gray-500">Certified</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">GDPR</div>
                <div className="text-xs text-gray-500">Compliant</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">HIPAA</div>
                <div className="text-xs text-gray-500">Ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Success Stories */}
        {config?.successStories && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Enterprise Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.successStories.map((story, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{story.icon}</div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{story.company}</div>
                      <div className="text-sm text-gray-500">{story.industry}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">
                    "{story.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{story.result}</div>
                      <div className="text-xs text-gray-500">Annual Savings</div>
                    </div>
                    <Link href={story.link} className="text-blue-600 text-sm font-semibold hover:underline">
                      Read Story →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineBuildingOffice className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Ready to take your enterprise operations to the next level?"}
            </span>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Contact Sales"}
              <HiArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Sales Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowContactForm(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Sales</h3>
              <button onClick={() => setShowContactForm(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600">
                  <option>1-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>500+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"></textarea>
              </div>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Submit
              </button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-4">Our team will respond within 24 hours.</p>
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
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default EnterprisePlanSection1;