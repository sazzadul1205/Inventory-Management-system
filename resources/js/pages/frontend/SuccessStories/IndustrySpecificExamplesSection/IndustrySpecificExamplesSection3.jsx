// frontend/SuccessStories/IndustrySpecificExamplesSection/IndustrySpecificExamplesSection3.jsx

/**
 * Industry Use Case Library Component
 * A comprehensive searchable library of industry-specific use cases featuring:
 * - Search functionality across titles, companies, and descriptions
 * - Industry filter tabs for quick filtering
 * - Save/bookmark functionality with localStorage persistence
 * - Expandable card details for in-depth information
 * - Client testimonials within expanded view
 * - Industry comparison table
 * - Downloadable industry resources
 *
 * All icons from react-icons library (no emojis, no custom icons)
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useCallback, useMemo } from 'react';

// React Icons - All from react-icons library
import { FaMicrosoft } from 'react-icons/fa';
import {
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineBookmark,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
  HiOutlineTrendingUp,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineDocumentText,
  HiOutlineMail,
} from 'react-icons/hi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { TbBrandGoogle, TbBrandAmazon } from 'react-icons/tb';
import Swal from 'sweetalert2';

const IndustrySpecificExamplesSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [savedExamples, setSavedExamples] = useState([]);
  const [expandedDetail, setExpandedDetail] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // ==================== MEMOIZED DATA ====================
  const industries = useMemo(() => config?.industries || [], [config]);
  const useCases = useMemo(() => config?.useCases || [], [config]);

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon from config
   * @param {string} className - CSS classes for styling
   * @returns {JSX.Element} - React Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'check-circle': HiOutlineCheckCircle,
      'arrow-right': HiArrowRight,
      'star': HiOutlineStar,
      'download': HiOutlineDownload,
      'share': HiOutlineShare,
      'bookmark': HiOutlineBookmark,
      'search': HiOutlineSearch,
      'filter': HiOutlineFilter,
      'chart': HiOutlineChartBar,
      'dollar': HiOutlineCurrencyDollar,
      'clock': HiOutlineClock,
      'trending': HiOutlineTrendingUp,
      'building': HiOutlineBuildingOffice,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'chip': HiOutlineChip,
      'sparkles': HiOutlineSparkles,
      'users': HiOutlineUserGroup,
      'document': HiOutlineDocumentText,
      'mail': HiOutlineMail,
      'google': TbBrandGoogle,
      'microsoft': FaMicrosoft,
      'amazon': TbBrandAmazon,
    };
    const IconComponent = icons[iconName] || HiOutlineStar;
    return <IconComponent className={className} />;
  }, []);

  // ==================== LOCAL STORAGE FOR SAVED EXAMPLES ====================
  useEffect(() => {
    const saved = localStorage.getItem('savedIndustryExamples');
    if (saved) {
      setSavedExamples(JSON.parse(saved));
    }
  }, []);

  /**
   * Save or unsave an example
   * @param {string|number} exampleId - ID of the example to save/unsave
   */
  const handleSaveExample = useCallback((exampleId) => {
    setSavedExamples(prev => {
      const newSaved = prev.includes(exampleId)
        ? prev.filter(id => id !== exampleId)
        : [...prev, exampleId];
      localStorage.setItem('savedIndustryExamples', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  /**
   * Toggle expanded detail view for a use case
   * @param {string|number} id - ID of the use case to expand/collapse
   */
  const toggleDetail = useCallback((id) => {
    setExpandedDetail(expandedDetail === id ? null : id);
  }, [expandedDetail]);

  // ==================== FILTERING LOGIC ====================
  const filteredUseCases = useMemo(() => {
    return useCases.filter(useCase => {
      const matchesIndustry = selectedIndustry === 'all' || useCase.industry === selectedIndustry;
      const matchesSearch = searchQuery === '' ||
        useCase.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        useCase.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        useCase.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        useCase.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesIndustry && matchesSearch;
    });
  }, [useCases, selectedIndustry, searchQuery]);

  // ==================== SHARE FUNCTIONALITY ====================
  const handleShare = useCallback(async (useCase) => {
    const shareUrl = useCase.link || window.location.href;
    const shareTitle = `${useCase.company} - ${useCase.title}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: `Check out how ${useCase.company} achieved ${useCase.results?.[0]?.value || 'remarkable results'
            }!`,
          url: shareUrl,
        });

        Swal.fire({
          icon: 'success',
          title: 'Shared!',
          text: 'Content shared successfully.',
          timer: 1500,
          showConfirmButton: false,
        });

      } catch (err) {
        // user cancelled — ignore
        console.error('Share cancelled', { err });
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);

        Swal.fire({
          icon: 'success',
          title: 'Copied!',
          text: 'Link copied to clipboard.',
          timer: 1500,
          showConfirmButton: false,
        });

      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: `Could not copy the link. ${err}`,
        });
      }
    }
  }, []);

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Industry Use Case Library"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor || 'bg-blue-100 dark:bg-blue-900/30'} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor || 'border-blue-200 dark:border-blue-800'}`}
            aria-label="Use case library badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor || 'text-blue-700 dark:text-blue-300'}`}>
              {config?.badge?.text || "Use Case Library"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || 'Industry'}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient || 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText || 'Use Cases'}
            </span>{' '}
            {config?.title?.suffix || 'Library'}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description || "Browse real-world examples of how we've helped businesses solve challenges and achieve measurable results across industries."}
          </p>
        </div>

        {/* ==================== SEARCH AND FILTER BAR ==================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {getIcon("search", "w-5 h-5")}
            </div>
            <input
              type="text"
              placeholder="Search by company, use case, solution, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              aria-label="Search use cases"
            />
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {getIcon("filter", "w-4 h-4")}
            Filters
          </button>

          {/* Industry Filter Tabs */}
          <div className={`flex gap-2 overflow-x-auto pb-2 md:pb-0 ${showFilters ? 'flex-wrap' : 'hidden md:flex'}`}>
            <button
              onClick={() => setSelectedIndustry('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${selectedIndustry === 'all'
                ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              aria-label="Show all industries"
            >
              All Industries
            </button>
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-1 ${selectedIndustry === industry.id
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label={`Filter by ${industry.name}`}
              >
                {getIcon(industry.icon, "w-4 h-4")}
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== RESULTS COUNT ==================== */}
        <div className="mb-6 flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Found <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredUseCases.length}</span> use cases
          </div>
          {savedExamples.length > 0 && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              📌 {savedExamples.length} saved
            </div>
          )}
        </div>

        {/* ==================== USE CASE GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredUseCases.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              {/* Card Header with Gradient */}
              <div className={`p-5 ${useCase.bgColor || 'bg-linear-to-r from-blue-600 to-indigo-600'} text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getIcon(useCase.icon, "w-6 h-6")}
                    <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">
                      {useCase.industryName}
                    </span>
                  </div>
                  <button
                    onClick={() => handleSaveExample(useCase.id)}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label={savedExamples.includes(useCase.id) ? "Remove from saved" : "Save for later"}
                  >
                    {getIcon("bookmark", `w-5 h-5 ${savedExamples.includes(useCase.id) ? 'fill-white' : ''}`)}
                  </button>
                </div>
                <h3 className="text-lg font-bold mt-3">{useCase.company}</h3>
                <p className="text-sm text-white/80">{useCase.title}</p>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {useCase.results?.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                      <div className="text-base font-bold text-blue-600 dark:text-blue-400">
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                {useCase.tags && useCase.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {useCase.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {useCase.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                        +{useCase.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleDetail(useCase.id)}
                    className="flex-1 text-center px-3 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    {expandedDetail === useCase.id ? 'Show Less' : 'View Details'}
                  </button>
                  <button
                    onClick={() => handleShare(useCase)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Share this use case"
                  >
                    {getIcon("share", "w-4 h-4 text-gray-500 dark:text-gray-400")}
                  </button>
                </div>

                {/* Expanded Details */}
                {expandedDetail === useCase.id && (
                  <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4 animate-fadeIn">
                    {/* Challenge */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
                        {getIcon("chart", "w-3 h-3")}
                        The Challenge
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {useCase.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-1">
                        {getIcon("sparkles", "w-3 h-3")}
                        The Solution
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {useCase.solution}
                      </p>
                    </div>

                    {/* All Results */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1">
                        {getIcon("trending", "w-3 h-3")}
                        Key Results
                      </h4>
                      <ul className="space-y-1.5">
                        {useCase.results?.map((result, idx) => (
                          <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            {getIcon("check-circle", "w-3 h-3 text-green-500 mt-0.5 shrink-0")}
                            <span><span className="font-medium">{result.label}:</span> {result.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    {useCase.testimonial && (
                      <div className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-xl">
                        <div className="text-xs italic text-gray-600 dark:text-gray-400 leading-relaxed">
                          "{useCase.testimonial.quote}"
                        </div>
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-2">
                          — {useCase.testimonial.author}, {useCase.testimonial.role}
                        </div>
                      </div>
                    )}

                    {/* Read More Link */}
                    <Link
                      href={useCase.caseStudyLink || "/case-studies"}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:gap-2 transition-all group"
                    >
                      Read Full Case Study
                      {getIcon("arrow-right", "w-3 h-3 group-hover:translate-x-1 transition-transform")}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ==================== EMPTY STATE ==================== */}
        {filteredUseCases.length === 0 && (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No use cases found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedIndustry('all');
              }}
              className="mt-4 px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ==================== INDUSTRY COMPARISON TABLE ==================== */}
        {config?.showComparison && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 flex items-center justify-center gap-2">
              {getIcon("chart", "w-6 h-6 text-blue-600")}
              {config?.comparisonTitle || "Industry Comparison"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Industry
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Key Challenge
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Typical Savings
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Payback Period
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Avg. ROI
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {industries.map((industry) => (
                    <tr key={industry.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          {getIcon(industry.icon, "w-5 h-5")}
                          {industry.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {industry.keyChallenge}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-green-600 dark:text-green-400">
                        {industry.typicalSavings}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {industry.paybackPeriod}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {industry.avgROI}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==================== DOWNLOADABLE RESOURCES ==================== */}
        {config?.showResources && config?.resources?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 flex items-center justify-center gap-2">
              {getIcon("document", "w-6 h-6 text-blue-600")}
              {config?.resourcesTitle || "Industry Resources"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="group p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {getIcon(resource.icon, "w-10 h-10")}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {resource.description}
                  </p>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {getIcon("download", "w-4 h-4")}
                    Download
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ==================== TRUST INDICATORS ==================== */}
        {config?.showTrustIndicators && config?.trustLogos?.length > 0 && (
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {config?.trustText || "Trusted by industry leaders worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 dark:opacity-50">
              {config.trustLogos.map((logo, index) => (
                <div key={index} className="transition-all duration-300 hover:opacity-100 hover:scale-110">
                  {getIcon(logo.icon, "w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400")}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                {getIcon("sparkles", "w-6 h-6 text-blue-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to find your industry's solution?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Schedule a Consultation"}
                {getIcon("arrow-right", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
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
          animation: fadeIn 0.3s ease-out forwards;
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