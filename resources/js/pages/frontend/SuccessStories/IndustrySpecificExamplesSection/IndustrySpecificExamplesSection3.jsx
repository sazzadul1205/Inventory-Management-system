// frontend/SuccessStories/IndustrySpecificExamplesSection/IndustrySpecificExamplesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSearch
} from 'react-icons/hi';

const IndustrySpecificExamplesSection3 = ({ config }) => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDetail, setExpandedDetail] = useState(null);
  const [savedExamples, setSavedExamples] = useState([]);

  const industries = config?.industries || [];
  const useCases = config?.useCases || [];

  useEffect(() => {
    const saved = localStorage.getItem('savedIndustryExamples');
    if (saved) {
      setSavedExamples(JSON.parse(saved));
    }
  }, []);

  const handleSaveExample = (exampleId) => {
    setSavedExamples(prev => {
      const newSaved = prev.includes(exampleId)
        ? prev.filter(id => id !== exampleId)
        : [...prev, exampleId];
      localStorage.setItem('savedIndustryExamples', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const filteredUseCases = useCases.filter(useCase => {
    const matchesIndustry = selectedIndustry === 'all' || useCase.industry === selectedIndustry;
    const matchesSearch = searchQuery === '' ||
      useCase.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      useCase.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      useCase.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  const toggleDetail = (id) => {
    setExpandedDetail(expandedDetail === id ? null : id);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry Use Case Library"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
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

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by company, use case, or solution..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setSelectedIndustry('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${selectedIndustry === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                }`}
            >
              All Industries
            </button>
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1 ${selectedIndustry === industry.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                  }`}
              >
                <span>{industry.icon}</span>
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-500">
          Found {filteredUseCases.length} use cases
        </div>

        {/* Use Case Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredUseCases.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
            >
              {/* Card Header */}
              <div className={`p-4 ${useCase.bgColor || 'bg-linear-to-r from-blue-500 to-indigo-500'} text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{useCase.icon}</span>
                    <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">
                      {useCase.industryName}
                    </span>
                  </div>
                  <button
                    onClick={() => handleSaveExample(useCase.id)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <HiOutlineBookmark
                      className={`w-5 h-5 ${savedExamples.includes(useCase.id) ? 'fill-white' : ''}`}
                    />
                  </button>
                </div>
                <h3 className="text-lg font-bold mt-2">{useCase.company}</h3>
                <p className="text-sm text-white/80">{useCase.title}</p>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {useCase.description}
                </p>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {useCase.results?.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-500">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {useCase.tags?.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleDetail(useCase.id)}
                    className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    {expandedDetail === useCase.id ? 'Show Less' : 'View Details'}
                  </button>
                  <Link
                    href={useCase.link}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <HiOutlineShare className="w-4 h-4 text-gray-500" />
                  </Link>
                </div>

                {/* Expanded Details */}
                {expandedDetail === useCase.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        The Challenge
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {useCase.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        The Solution
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {useCase.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        Key Results
                      </h4>
                      <ul className="space-y-1">
                        {useCase.results?.map((result, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                            <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                            {result.label}: {result.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {useCase.testimonial && (
                      <div className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg">
                        <div className="text-xs italic text-gray-600 dark:text-gray-400">
                          "{useCase.testimonial.quote}"
                        </div>
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-2">
                          — {useCase.testimonial.author}, {useCase.testimonial.role}
                        </div>
                      </div>
                    )}
                    <Link
                      href={useCase.caseStudyLink}
                      className="inline-flex items-center gap-1 text-blue-600 text-xs font-semibold hover:gap-2 transition-all"
                    >
                      Read Full Case Study
                      <HiArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredUseCases.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No use cases found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}

        {/* Industry Comparison Table */}
        {config?.showComparison && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.comparisonTitle || "Industry Comparison"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Industry
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Key Challenge
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Typical Savings
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Payback Period
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {industries.map((industry) => (
                    <tr key={industry.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <span>{industry.icon}</span>
                          {industry.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {industry.keyChallenge}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-green-600">
                        {industry.typicalSavings}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {industry.paybackPeriod}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Download Resources */}
        {config?.showResources && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.resourcesTitle || "Industry Resources"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.resources?.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="group p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all text-center"
                >
                  <div className="text-4xl mb-3">{resource.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {resource.description}
                  </p>
                  <span className="text-sm text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    <HiOutlineDownload className="w-4 h-4" />
                    Download
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <HiOutlineStar className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.ctaText || "Ready to find your industry's solution?"}
            </span>
            <Link
              href={config?.ctaLink || "/demo"}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              {config?.ctaButtonText || "Schedule a Consultation"}
              <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Required CSS */}
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default IndustrySpecificExamplesSection3;