// page/frontend/Industries/FashionAndApparelSection/FashionAndApparelSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineShoppingBag,
  HiOutlineCheckCircle,
  HiArrowRight,
} from 'react-icons/hi';

const FashionAndApparelSection3 = ({ config }) => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const features = config?.features || [];
  const faqs = config?.faqs || [];
  const benefits = config?.benefits || [];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Fashion & Apparel Features Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-100 dark:bg-pink-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-100 dark:bg-rose-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Features badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Feature Highlights Grid */}
        {config?.showFeatureGrid && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <div className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">{benefit.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{benefit.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Main Features Section with Interactive Tabs */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature Navigation */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFeature(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${selectedFeature === index
                      ? 'bg-linear-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-l-4 border-pink-500 shadow-md'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{feature.title}</div>
                      <div className="text-sm text-gray-500">{feature.shortDescription}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Feature Detail */}
            <div className="lg:col-span-2">
              {features[selectedFeature] && (
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
                  <div className="text-4xl mb-4">{features[selectedFeature].icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {features[selectedFeature].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {features[selectedFeature].description}
                  </p>

                  {/* Key Capabilities */}
                  {features[selectedFeature].capabilities && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Capabilities:</h4>
                      <ul className="space-y-1">
                        {features[selectedFeature].capabilities.map((cap, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sustainability Badges */}
                  {features[selectedFeature].sustainability && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {features[selectedFeature].sustainability.map((badge, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400 rounded-full">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={features[selectedFeature].link || "/demo"}
                    className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all mt-4"
                  >
                    Learn more about {features[selectedFeature].title}
                    <HiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Comparison Table: Before vs After */}
        {config?.showComparison && (
          <div className="mb-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">😟</div>
                  <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">Before Our Solution</h3>
                </div>
                <ul className="space-y-3">
                  {config?.comparison?.before?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-red-500 mt-0.5">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">😊</div>
                  <h3 className="text-xl font-bold text-pink-600">After Our Solution</h3>
                </div>
                <ul className="space-y-3">
                  {config?.comparison?.after?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Technology Stack / Integrations */}
        {config?.showTechStack && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.techStackTitle || "Seamlessly Integrates With Your Fashion Tech Stack"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {config?.techStack?.map((tech, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:shadow-md transition-all">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How It Works - Step by Step */}
        {config?.showHowItWorks && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.howItWorksTitle || "How It Works"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.steps?.map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < config?.steps?.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-linear-to-r from-pink-200 to-rose-200 dark:from-pink-800 dark:to-rose-800" aria-hidden="true"></div>
                  )}
                  <div className="relative z-10 w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-pink-600 mx-auto mb-4">
                    {index + 1}
                  </div>
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {config?.showFaq && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.faqTitle || "Frequently Asked Questions"}
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                    <span className="text-2xl text-pink-500">
                      {expandedFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="p-5 pt-0 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resources Section */}
        {config?.showResources && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.resourcesTitle || "Helpful Resources"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.resources?.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="group p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-3">{resource.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{resource.description}</p>
                  <span className="text-sm text-pink-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {resource.cta}
                    <HiArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineShoppingBag className="w-6 h-6 text-pink-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to transform your fashion operations?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Started Today"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
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
          animation: fadeIn 0.3s ease-out;
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

export default FashionAndApparelSection3;