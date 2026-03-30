// page/frontend/Industries/HealthcareAndPharmaceuticalsSection/HealthcareAndPharmaceuticalsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineHeart,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiArrowLeft,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlinePlay,
  HiOutlineDownload,
  HiOutlineLocationMarker,
} from 'react-icons/hi';

const HealthcareAndPharmaceuticalsSection2 = ({ config }) => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [, setHoveredCard] = useState(null);

  const caseStudies = config?.caseStudies || [];
  const currentCase = caseStudies[activeCaseStudy];

  const nextCase = () => {
    setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Healthcare & Pharmaceuticals Success Stories Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-200 dark:bg-teal-900/20 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900/20 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Success stories badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
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

        {/* Featured Case Study Carousel */}
        {currentCase && (
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12">
            {/* Company Header with Gradient */}
            <div className="bg-linear-to-r from-teal-600 to-emerald-600 p-8 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-5xl mb-3">{currentCase.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold">{currentCase.company}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <HiOutlineLocationMarker className="w-4 h-4 text-teal-200" />
                    <p className="text-teal-100 text-sm">{currentCase.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-teal-200 mb-1">Key Result</div>
                  <div className="text-3xl font-bold">{currentCase.keyResult?.value}</div>
                  <div className="text-xs text-teal-200">{currentCase.keyResult?.label}</div>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
              {currentCase.results?.map((result, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">{result.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{result.label}</div>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <HiOutlineChartBar className="w-5 h-5 text-teal-500" />
                    The Challenge
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {currentCase.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <HiOutlineLightBulb className="w-5 h-5 text-teal-500" />
                    The Solution
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {currentCase.solution}
                  </p>
                </div>
              </div>

              {/* Compliance Badges */}
              {currentCase.compliance && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentCase.compliance.map((badge, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Testimonial */}
              {currentCase.testimonial && (
                <div className="mt-6 p-6 bg-teal-50 dark:bg-teal-900/20 rounded-2xl">
                  <div className="text-3xl text-teal-400 mb-2">"</div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                    {currentCase.testimonial.quote}
                  </p>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{currentCase.testimonial.author}</div>
                    <div className="text-sm text-gray-500">{currentCase.testimonial.role}</div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentCase.downloadLink}
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center gap-2 justify-center"
                >
                  <HiOutlineDownload className="w-4 h-4" />
                  Download Full Case Study
                </Link>
                <Link
                  href={currentCase.videoLink}
                  className="px-4 py-2 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors inline-flex items-center gap-2 justify-center"
                >
                  <HiOutlinePlay className="w-4 h-4" />
                  Watch Video Story
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Carousel Navigation */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={prevCase}
            className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
          >
            <HiArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>

          <div className="flex gap-2">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCaseStudy(idx)}
                className={`w-2 h-2 rounded-full transition-all ${activeCaseStudy === idx
                  ? 'w-6 bg-teal-600'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextCase}
            className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
          >
            <HiArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Additional Case Studies Grid */}
        {config?.showAdditionalCases && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.additionalCasesTitle || "More Success Stories"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config?.additionalCases?.map((caseStudy, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="p-6">
                    <div className="text-3xl mb-3">{caseStudy.icon}</div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{caseStudy.company}</h4>
                    <p className="text-xs text-gray-500 mb-3">{caseStudy.industry}</p>
                    <div className="mb-3">
                      <span className="text-xl font-bold text-teal-600">{caseStudy.result}</span>
                      <span className="text-xs text-gray-500 ml-1">{caseStudy.resultLabel}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {caseStudy.description}
                    </p>
                    <Link
                      href={caseStudy.link}
                      className="inline-flex items-center gap-1 text-teal-600 font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Read Story
                      <HiArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compliance & Safety Preview */}
        {config?.showCompliancePreview && (
          <div className="bg-linear-to-r from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <HiOutlineShieldCheck className="w-5 h-5 text-teal-600" />
                  <h3 className="font-bold text-gray-900 dark:text-white">Compliance & Safety First</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Our platform is built to meet the strictest regulatory requirements in healthcare and pharmaceuticals:
                </p>
                <div className="flex flex-wrap gap-3">
                  {config?.complianceItems?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                      <HiOutlineCheckCircle className="w-3 h-3 text-green-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Link
                  href={config?.complianceLink || "/compliance"}
                  className="block text-center px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  View Compliance Details
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Cold Chain Monitoring Preview */}
        {config?.showColdChain && (
          <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6">
                <div className="text-3xl mb-2">🌡️</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Cold Chain Monitoring</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Real-time temperature monitoring for sensitive medications, vaccines, and biologics.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time temperature alerts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                    <span>Automated excursion reporting</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                    <span>Complete audit trail</span>
                  </div>
                </div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">0</div>
                  <div className="text-xs text-gray-500 mb-2">Temperature Excursions</div>
                  <div className="text-sm text-gray-600">since implementing our solution</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineHeart className="w-6 h-6 text-teal-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to write your own success story?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Start Your Journey"}
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
        .bg-dots-pattern {
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-dots-pattern {
          background-image: radial-gradient(circle, #374151 1px, transparent 1px);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default HealthcareAndPharmaceuticalsSection2;