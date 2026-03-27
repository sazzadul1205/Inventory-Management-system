// frontend/PricingPlans/EnterprisePlanSection/EnterprisePlanSection3.jsx

// React
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiOutlineX,
  HiArrowRight,
  HiOutlineBuildingOffice,
} from 'react-icons/hi';

const EnterprisePlanSection3 = ({ config }) => {
  const [selectedComparison, setSelectedComparison] = useState('plans');
  const [showContactForm, setShowContactForm] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const comparisonData = config?.comparisonData || [];
  const roiMetrics = config?.roiMetrics || [];
  const deploymentOptions = config?.deploymentOptions || [];

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

    const section = document.getElementById('enterprise-metrics');
    if (section) observer.observe(section);
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
            setAnimatedMetrics(prev => ({ ...prev, [index]: metric.value }));
            clearInterval(interval);
          } else {
            setAnimatedMetrics(prev => ({ ...prev, [index]: Math.floor(current) + suffix }));
          }
        }, 30);

        return () => clearInterval(interval);
      });
    }
  }, [isVisible, roiMetrics]);

  return (
    <section
      id="enterprise-metrics"
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Enterprise Plan Comparison"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

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

        {/* ROI Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {roiMetrics.map((metric, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">{metric.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {animatedMetrics[index] || metric.value}
              </div>
              <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Comparison Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedComparison('plans')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${selectedComparison === 'plans'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
              }`}
          >
            Plan Comparison
          </button>
          <button
            onClick={() => setSelectedComparison('vendors')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${selectedComparison === 'vendors'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
              }`}
          >
            Vendor Comparison
          </button>
        </div>

        {/* Plan Comparison Table */}
        {selectedComparison === 'plans' && (
          <div className="mb-12 overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Professional</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/20">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {comparisonData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {item.starter === true ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : item.starter === false ? (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-sm text-gray-500">{item.starter}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.professional === true ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : item.professional === false ? (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-sm text-gray-500">{item.professional}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50 dark:bg-blue-900/10">
                      {item.enterprise === true ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-sm text-blue-600 font-semibold">{item.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Vendor Comparison Table */}
        {selectedComparison === 'vendors' && (
          <div className="mb-12 overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Capability</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Competitor A</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Competitor B</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/20">Our Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {config?.vendorComparison?.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{item.capability}</td>
                    <td className="px-6 py-4 text-center">
                      {item.competitorA === true ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.competitorB === true ? (
                        <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <HiOutlineX className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50 dark:bg-blue-900/10">
                      <HiOutlineCheck className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Deployment Options */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Flexible Deployment Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deploymentOptions.map((option, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center">
                <div className="text-4xl mb-3">{option.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{option.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{option.description}</p>
                <ul className="text-left space-y-2">
                  {option.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <HiOutlineCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator Section */}
        <div className="mb-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-2xl font-bold mb-3">Enterprise ROI Calculator</h3>
              <p className="text-blue-100 mb-4">
                See exactly how much your organization could save with our enterprise platform.
              </p>
              <div className="flex gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold">35-45%</div>
                  <div className="text-xs text-blue-200">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">6-9 mo</div>
                  <div className="text-xs text-blue-200">Payback Period</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">3.2x</div>
                  <div className="text-xs text-blue-200">Average ROI</div>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                Get Custom Quote
                <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Custom Enterprise Pricing</div>
                <p className="text-blue-100 text-sm mb-4">Tailored to your specific requirements</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/20 rounded-lg p-2">Volume-based pricing</div>
                  <div className="bg-white/20 rounded-lg p-2">Annual contracts</div>
                  <div className="bg-white/20 rounded-lg p-2">Multi-year discounts</div>
                  <div className="bg-white/20 rounded-lg p-2">Custom SLA options</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance Badges */}
        <div className="mb-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Enterprise Security & Compliance</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {config?.complianceBadges?.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                <span className="text-lg">{badge.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by leading enterprises worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {config?.clientLogos?.map((logo, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl mb-1">{logo.icon}</div>
                <span className="text-xs text-gray-500">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineBuildingOffice className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Ready to transform your enterprise operations?"}
            </span>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Schedule Enterprise Demo"}
              <HiArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowContactForm(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Demo Request</h3>
              <button onClick={() => setShowContactForm(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Size</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700">
                  <option>100-500 employees</option>
                  <option>500-1,000 employees</option>
                  <option>1,000-5,000 employees</option>
                  <option>5,000+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Inventory Management System</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" placeholder="e.g., SAP, Oracle, Custom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Request Demo</button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-4">Our enterprise team will respond within 24 hours.</p>
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

export default EnterprisePlanSection3;