// frontend/PricingPlans/EnterprisePlanSection/EnterprisePlanSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineCheck,
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlineCog,
  HiOutlineStar,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const EnterprisePlanSection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  const enterprisePlan = config?.enterprisePlan || {};
  const features = config?.features || [];
  const testimonials = config?.testimonials || [];
  const caseStudies = config?.caseStudies || [];

  useEffect(() => {
    let interval;
    if (isPlaying && testimonials.length > 1) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

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
      aria-label="Enterprise Plan Features"
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

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-12">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'overview'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <HiOutlineBuildingOffice className="w-4 h-4" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'features'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <HiOutlineCog className="w-4 h-4" />
            Features
          </button>
          <button
            onClick={() => setActiveTab('caseStudies')}
            className={`px-6 py-3 text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'caseStudies'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
              }`}
          >
            <HiOutlineDocumentText className="w-4 h-4" />
            Case Studies
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {config?.stats?.map((stat, index) => (
                <div key={index} className="bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enterprise Value Proposition */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-4xl mb-3">🏢</div>
                  <h3 className="text-2xl font-bold mb-3">The Enterprise Advantage</h3>
                  <p className="text-blue-100 mb-6">
                    Get everything you need to run your global operations with confidence, security, and scale.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-400" />
                      <span>Custom pricing and flexible contract terms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-400" />
                      <span>Dedicated account team with 24/7 support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-400" />
                      <span>99.9% uptime SLA with financial backing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <HiOutlineCheck className="w-5 h-5 text-green-400" />
                      <span>Enterprise-grade security and compliance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">Custom Quote</div>
                  <p className="text-blue-100 text-sm mb-4">Priced based on your specific needs</p>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Get Custom Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Client Testimonials Carousel */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                What Enterprise Clients Say
              </h3>
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full shrink-0 px-4">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
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
                          <div className="mt-4 text-center text-sm font-semibold text-blue-600">
                            {testimonial.result}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {testimonials.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
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
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="space-y-12">
            {/* Feature Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFeature(index)}
                  className={`p-6 rounded-2xl text-left transition-all ${selectedFeature === index
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500'
                      : 'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg'
                    }`}
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.shortDescription}</p>
                </button>
              ))}
            </div>

            {/* Selected Feature Details */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl mb-3">{features[selectedFeature]?.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {features[selectedFeature]?.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {features[selectedFeature]?.description}
                  </p>
                  <ul className="space-y-3">
                    {features[selectedFeature]?.highlights?.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-5xl mb-3">{features[selectedFeature]?.statIcon}</div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{features[selectedFeature]?.statValue}</div>
                    <div className="text-sm text-gray-500">{features[selectedFeature]?.statLabel}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Feature List */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">All Enterprise Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {enterprisePlan?.fullFeatures?.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <HiOutlineCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Case Studies Tab */}
        {activeTab === 'caseStudies' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${study.image})` }} />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{study.icon}</span>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{study.company}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{study.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{study.result}</div>
                        <div className="text-xs text-gray-500">Annual Savings</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{study.roi}</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                    </div>
                    <Link href={study.link} className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                      Read Full Case Study
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineBuildingOffice className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Ready to discuss your enterprise needs?"}
            </span>
            <button
              onClick={() => setShowContactModal(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Contact Sales"}
              <HiArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowContactModal(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Enterprise Sales</h3>
              <button onClick={() => setShowContactModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Annual Revenue</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700">
                  <option>$10M - $50M</option>
                  <option>$50M - $100M</option>
                  <option>$100M - $500M</option>
                  <option>$500M+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Submit</button>
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

export default EnterprisePlanSection2;