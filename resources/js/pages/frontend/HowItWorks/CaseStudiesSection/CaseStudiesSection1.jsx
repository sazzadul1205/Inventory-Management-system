// page/frontend/HowItWorks/CaseStudiesSection/CaseStudiesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiArrowRight,
  HiOutlinePlay,
  HiOutlineDownload,
} from 'react-icons/hi';

const CaseStudiesSection1 = ({ config }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = config?.caseStudies || [];

  const filteredStudies = selectedCategory === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.category === selectedCategory);

  const categories = ['all', ...new Set(caseStudies.map(study => study.category))];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Case Studies Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
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

        {/* Stats Row */}
        {config?.stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {config.stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {category === 'all' ? 'All Stories' : category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredStudies.map((study, index) => (
            <div
              key={study.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedCase(study)}
            >
              {/* Company Header */}
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="text-4xl mb-2">{study.icon}</div>
                <h3 className="text-xl font-bold">{study.company}</h3>
                <p className="text-sm text-blue-100 mt-1">{study.industry}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {study.description}
                </p>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {study.results?.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{result.value}</div>
                      <div className="text-xs text-gray-500">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags?.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <button className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:underline">
                  Read full story
                  <HiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Case Study Detail */}
        {selectedCase && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCase(null)}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="sticky top-0 bg-linear-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-4xl mb-2">{selectedCase.icon}</div>
                    <h3 className="text-2xl font-bold">{selectedCase.company}</h3>
                    <p className="text-blue-100">{selectedCase.industry}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="text-white hover:text-blue-200 text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Challenge Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Challenge</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedCase.challenge}</p>
                </div>

                {/* Solution Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Solution</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedCase.solution}</p>
                </div>

                {/* Results Grid */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Key Results</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedCase.results?.map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                        <div className="text-xs text-gray-500 mt-1">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {selectedCase.testimonial && (
                  <div className="mb-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div className="text-2xl mb-2">"</div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-3">{selectedCase.testimonial.quote}</p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{selectedCase.testimonial.author}</div>
                      <div className="text-sm text-gray-500">{selectedCase.testimonial.role}</div>
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="flex gap-3">
                  <Link
                    href={selectedCase.downloadLink || `/case-studies/${selectedCase.id}/download`}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Download Full Case Study
                  </Link>
                  <Link
                    href={selectedCase.videoLink || `/case-studies/${selectedCase.id}/video`}
                    className="flex-1 text-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Watch Video
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Testimonials Section */}
        {config?.showVideos && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Video Testimonials</h3>
              <p className="text-gray-600 dark:text-gray-400">Hear directly from our customers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config?.videoTestimonials?.map((video, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative flex items-center justify-center cursor-pointer group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
                    <HiOutlinePlay className="w-12 h-12 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">"{video.quote}"</p>
                    <div className="font-semibold text-gray-900 dark:text-white">{video.author}</div>
                    <div className="text-xs text-gray-500">{video.role}, {video.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Download All Case Studies */}
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
          <div className="mt-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to write your own success story?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
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
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection1;