// page/frontend/Home/PartnersSection/PartnersSection3.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineUsers,
  HiOutlineBadgeCheck,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineTruck,
  HiOutlineShoppingCart,
  HiOutlineBookOpen,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';
import { MdOutlineHandshake } from "react-icons/md";

const PartnersSection3 = ({ config }) => {
  // State for active tier
  const [activeTier, setActiveTier] = useState('all');

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const partnersPerPage = config?.pagination?.perPage || 6;

  // Get icon for partner type
  const getPartnerTypeIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'technology':
        return <HiOutlineChip className="w-4 h-4" />;
      case 'logistics':
        return <HiOutlineTruck className="w-4 h-4" />;
      case 'commerce':
      case 'e-commerce':
        return <HiOutlineShoppingCart className="w-4 h-4" />;
      case 'strategic':
        return <MdOutlineHandshake className="w-4 h-4" />;
      case 'consulting':
        return <HiOutlineUsers className="w-4 h-4" />;
      case 'global':
        return <HiOutlineGlobe className="w-4 h-4" />;
      default:
        return <HiOutlineBadgeCheck className="w-4 h-4" />;
    }
  };

  // Get color for partner tier
  const getTierColor = (tier) => {
    switch (tier?.toLowerCase()) {
      case 'platinum':
        return 'from-slate-300 to-slate-400 text-slate-800';
      case 'gold':
        return 'from-yellow-400 to-amber-500 text-amber-800';
      case 'silver':
        return 'from-gray-300 to-gray-400 text-gray-700';
      case 'bronze':
        return 'from-amber-600 to-amber-700 text-amber-900';
      case 'strategic':
        return 'from-indigo-500 to-purple-600 text-white';
      default:
        return 'from-blue-500 to-indigo-600 text-white';
    }
  };

  // Filter partners based on tier
  const filteredPartners = config?.partners?.filter(partner => {
    return activeTier === 'all' || partner.tier?.toLowerCase() === activeTier.toLowerCase();
  }) || [];

  // Pagination
  const totalPages = Math.ceil(filteredPartners.length / partnersPerPage);
  const startIndex = (currentPage - 1) * partnersPerPage;
  const endIndex = startIndex + partnersPerPage;
  const currentPartners = filteredPartners.slice(startIndex, endIndex);

  // Get unique tiers
  const tiers = ['all', ...new Set(config?.partners?.map(partner => partner.tier) || [])];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Partners section"
    >
      {/* Background Pattern - Magazine Style */}
      <div className="absolute inset-0 bg-magazine-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Magazine Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Partners badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
              )}
              <span className={`text-sm font-medium ${config.badge.textColor}`}>
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                {config?.heading?.highlightedText}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 6 L300 6"
                  stroke="url(#headingGradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="headingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#9333EA" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Partner Tiers */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => {
                setActiveTier(tier);
                setCurrentPage(1);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTier === tier
                ? `bg-linear-to-r ${getTierColor(tier)} shadow-lg scale-105`
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {tier === 'all' ? 'All Partners' : `${tier} Partners`}
            </button>
          ))}
        </div>

        {/* Main Content - Magazine Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column - Featured + Grid */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Partner - Hero Style */}
            {config?.featured?.show && (
              <div className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Partner Logo/Image */}
                  <div className="relative h-64 md:h-full bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 p-8 flex items-center justify-center">
                    <img
                      src={config.featured.logo}
                      alt={config.featured.name}
                      className="max-w-[80%] max-h-32 object-contain"
                    />

                    {/* Tier Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`bg-linear-to-r ${getTierColor(config.featured.tier)} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center`}>
                        <HiOutlineStar className="w-4 h-4 mr-1" />
                        {config.featured.tier} Partner
                      </span>
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="p-8">
                    {/* Partner Type */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-4">
                      <span className="flex items-center mr-4">
                        {getPartnerTypeIcon(config.featured.type)}
                        <span className="ml-1">{config.featured.type}</span>
                      </span>
                      <span className="flex items-center">
                        <HiOutlineGlobe className="w-4 h-4 mr-1" />
                        {config.featured.region}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {config.featured.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                      {config.featured.description}
                    </p>

                    {/* Partnership Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {config.featured.metrics?.map((metric, idx) => (
                        <div key={idx} className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <Link
                      href={config.featured.link}
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group"
                    >
                      View Partnership Details
                      <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Partners Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {activeTier === 'all' ? 'All Partners' : `${activeTier} Partners`}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {filteredPartners.length} partners
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {currentPartners.map((partner, index) => (
                  <div
                    key={partner.id || index}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Logo */}
                      <div className="sm:w-24 h-24 bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-5">
                        {/* Tier Badge */}
                        <div className="flex items-center justify-between mb-2">
                          <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full bg-linear-to-r ${getTierColor(partner.tier)} text-white`}>
                            {partner.tier}
                          </span>
                          <span className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                            {getPartnerTypeIcon(partner.type)}
                            <span className="ml-1">{partner.type}</span>
                          </span>
                        </div>

                        {/* Name */}
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {partner.name}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                          {partner.description}
                        </p>

                        {/* Tags */}
                        {partner.tags && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {partner.tags.slice(0, 2).map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Link */}
                        <Link
                          href={partner.link || '#'}
                          className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                        >
                          Learn More
                          <HiOutlineArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg border ${currentPage === 1
                    ? 'border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  <HiOutlineChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-medium ${currentPage === page
                      ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg border ${currentPage === totalPages
                    ? 'border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  <HiOutlineChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Partner Program Overview */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <HiOutlineSparkles className="w-5 h-5 mr-2" />
                  Partner Program
                </h3>
                <p className="text-sm text-indigo-100 mb-4">
                  Join our ecosystem and grow your business with Sazzad's industry-leading platform.
                </p>
                <Link
                  href="/partners/apply"
                  className="inline-flex items-center px-4 py-2 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm"
                >
                  Apply Now
                  <HiOutlineArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Partner Tiers Explanation */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Partner Tiers
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className={`w-3 h-3 rounded-full bg-linear-to-r from-slate-300 to-slate-400 mt-1 mr-3`}></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Platinum</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Strategic global partners with deepest integration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`w-3 h-3 rounded-full bg-linear-to-r from-yellow-400 to-amber-500 mt-1 mr-3`}></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Gold</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Premium partners with proven expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`w-3 h-3 rounded-full bg-linear-to-r from-gray-300 to-gray-400 mt-1 mr-3`}></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Silver</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Established partners with growing practices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`w-3 h-3 rounded-full bg-linear-to-r from-amber-600 to-amber-700 mt-1 mr-3`}></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Bronze</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Emerging partners building their business</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Resources */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Partner Resources
              </h3>
              <div className="space-y-3">
                <Link href="/partners/portal" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <HiOutlineUsers className="w-5 h-5 text-indigo-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Partner Portal</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Access tools and resources</p>
                  </div>
                </Link>
                <Link href="/partners/training" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <HiOutlineBookOpen className="w-5 h-5 text-indigo-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Training & Certification</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Build your expertise</p>
                  </div>
                </Link>
                <Link href="/partners/marketing" className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <HiOutlineChartBar className="w-5 h-5 text-indigo-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Co-marketing Opportunities</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Grow together</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Testimonial */}
            {config?.testimonial?.show && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg overflow-hidden p-2 mr-3">
                    <img
                      src={config.testimonial.logo}
                      alt={config.testimonial.partner}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {config.testimonial.partner}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {config.testimonial.author}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  "{config.testimonial.quote}"
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar
                      key={i}
                      className={`w-4 h-4 ${i < config.testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                        }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* View All Button */}
        {config?.viewAll?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.viewAll.url}
              className="inline-flex items-center bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {config.viewAll.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #e5e7eb 1px, transparent 1px),
            linear-gradient(-45deg, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-magazine-pattern {
          background-image: 
            linear-gradient(45deg, #374151 1px, transparent 1px),
            linear-gradient(-45deg, #374151 1px, transparent 1px);
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection3;