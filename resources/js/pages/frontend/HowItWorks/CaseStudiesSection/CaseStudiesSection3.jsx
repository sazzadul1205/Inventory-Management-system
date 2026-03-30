// page/frontend/HowItWorks/CaseStudiesSection/CaseStudiesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCurrencyDollar,
  HiArrowRight,
  HiOutlinePlay,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineThumbUp
} from 'react-icons/hi';

const CaseStudiesSection3 = ({ config }) => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const caseStudies = config?.caseStudies || [];

  const filteredStudies = selectedIndustry === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const industries = ['all', ...new Set(caseStudies.map(study => study.industry))];

  const getIndustryIcon = (industry) => {
    const icons = {
      'Retail': '🏪',
      'Manufacturing': '🏭',
      'Logistics': '📦',
      'E-commerce': '🛍️',
      'Healthcare': '🏥',
      'Wholesale': '📊'
    };
    return icons[industry] || '🏢';
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Case Studies Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Case studies badge"
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

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
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

        {/* Industry Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize flex items-center gap-2 ${selectedIndustry === industry
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {industry !== 'all' && getIndustryIcon(industry)}
              {industry === 'all' ? 'All Industries' : industry}
            </button>
          ))}
        </div>

        {/* Success Metrics Banner */}
        {config?.showMetricsBanner && (
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 mb-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {config?.successMetrics?.map((metric, index) => (
                <div key={index}>
                  <div className="text-2xl mb-1">{metric.icon}</div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm text-blue-100">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Studies Grid - Testimonial Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard(study.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Industry Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-2 py-1 bg-white/90 dark:bg-gray-700/90 rounded-full text-xs font-semibold text-blue-600 flex items-center gap-1">
                  {getIndustryIcon(study.industry)}
                  {study.industry}
                </span>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-6xl text-blue-100 dark:text-blue-900/30 opacity-50">"</div>

              {/* Content */}
              <div className="p-6 pt-12">
                {/* Testimonial */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  "{study.testimonial?.shortQuote || study.testimonial?.quote?.substring(0, 120)}..."
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-lg">
                    {study.authorAvatar || study.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{study.testimonial?.author}</div>
                    <div className="text-xs text-gray-500">{study.testimonial?.role}</div>
                  </div>
                </div>

                {/* Company */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{study.icon}</span>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{study.company}</div>
                    <div className="text-xs text-gray-500">{study.location || "Global"}</div>
                  </div>
                </div>

                {/* Key Results - Before/After Style */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">Before</span>
                    <HiArrowRight className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">After</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">{study.beforeMetric}</span>
                    <span className="text-lg font-bold text-blue-600">{study.afterMetric}</span>
                  </div>
                </div>

                {/* Metric Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.resultTags?.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    href={study.downloadLink}
                    className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read Full Story
                  </Link>
                  <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                    <HiOutlineShare className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              {hoveredCard === study.id && (
                <div className="absolute inset-0 bg-linear-to-t from-blue-600/90 to-indigo-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white p-6">
                    <HiOutlinePlay className="w-12 h-12 mx-auto mb-3 cursor-pointer" />
                    <p className="text-sm font-semibold">Watch video testimonial</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Featured Case Study Spotlight */}
        {config?.showSpotlight && (
          <div className="mb-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 text-white">
                <div className="text-3xl mb-3">⭐</div>
                <div className="text-sm font-semibold text-blue-200 mb-2">FEATURED STORY</div>
                <h3 className="text-2xl font-bold mb-3">{config?.spotlight?.company}</h3>
                <p className="text-blue-100 mb-4">{config?.spotlight?.description}</p>
                <div className="flex gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold">{config?.spotlight?.result1}</div>
                    <div className="text-xs text-blue-200">{config?.spotlight?.label1}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{config?.spotlight?.result2}</div>
                    <div className="text-xs text-blue-200">{config?.spotlight?.label2}</div>
                  </div>
                </div>
                <Link
                  href={config?.spotlight?.link || "/case-studies/featured"}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Read Full Story
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-cover bg-center min-h-50 " style={{ backgroundImage: `url(${config?.spotlight?.image || ''})` }}>
                <div className="w-full h-full bg-black/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{config?.spotlight?.icon}</div>
                    <div className="text-white font-bold">{config?.spotlight?.company}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ROI Calculator Preview */}
        {config?.showROI && (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <HiOutlineCurrencyDollar className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-gray-900 dark:text-white">See what you could save</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Based on similar companies, businesses like yours typically achieve:
                </p>
                <div className="flex gap-4">
                  <div>
                    <div className="text-xl font-bold text-blue-600">{config?.roiSavings || "25-35%"}</div>
                    <div className="text-xs text-gray-500">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">{config?.roiPayback || "3-6"}</div>
                    <div className="text-xs text-gray-500">Months Payback</div>
                  </div>
                </div>
              </div>
              <div>
                <Link
                  href={config?.roiLink || "/roi-calculator"}
                  className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Calculate Your ROI
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Download All Button */}
        {config?.showDownload && (
          <div className="text-center mb-12">
            <Link
              href={config?.downloadAllLink || "/case-studies/all"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              <HiOutlineDownload className="w-5 h-5" />
              Download All Case Studies
            </Link>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineThumbUp className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to write your own success story?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
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

export default CaseStudiesSection3;