// page/frontend/Home/PartnersSection/PartnersSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
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
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTier, setActiveTier] = useState('all');

  // Extract pagination data
  const partnersPerPage = config?.pagination?.perPage || 6;

  // Get icon for partner type
  const getPartnerTypeIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'technology':
        return <HiOutlineChip className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'logistics':
        return <HiOutlineTruck className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'commerce':
      case 'e-commerce':
        return <HiOutlineShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'strategic':
        return <MdOutlineHandshake className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'consulting':
        return <HiOutlineUsers className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'global':
        return <HiOutlineGlobe className="w-3 h-3 sm:w-4 sm:h-4" />;
      default:
        return <HiOutlineBadgeCheck className="w-3 h-3 sm:w-4 sm:h-4" />;
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
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(45deg,#e5e7eb_1px,transparent_1px),linear-gradient(-45deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,#374151_1px,transparent_1px),linear-gradient(-45deg,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-indigo-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-indigo-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-indigo-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Partner Tiers */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => {
                setActiveTier(tier);
                setCurrentPage(1);
              }}
              className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeTier === tier
                ? `bg-linear-to-r ${getTierColor(tier)} shadow-lg scale-105`
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {tier === 'all' ? 'All Partners' : `${tier} Partners`}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Main Column - Featured + Grid */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">

            {/* Featured Partner */}
            {config?.featured?.show && (
              <div className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-0">

                  {/* Partner Logo */}
                  <div className="relative h-48 sm:h-56 md:h-full bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 sm:p-8 flex items-center justify-center">
                    <img
                      src={config.featured.logo}
                      alt={config.featured.name}
                      className="max-w-[70%] max-h-24 sm:max-h-28 object-contain"
                      loading="lazy"
                    />

                    {/* Tier Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className={`bg-linear-to-r ${getTierColor(config.featured.tier)} text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold shadow-lg flex items-center`}>
                        <HiOutlineStar className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-0.5 sm:mr-1" />
                        {config.featured.tier} Partner
                      </span>
                    </div>
                  </div>

                  {/* Featured Content */}
                  <div className="p-5 sm:p-6 md:p-8">

                    {/* Partner Type */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mb-2 sm:mb-3 md:mb-4">
                      <span className="flex items-center">
                        {getPartnerTypeIcon(config.featured.type)}
                        <span className="ml-0.5 sm:ml-1">{config.featured.type}</span>
                      </span>
                      <span className="flex items-center">
                        <HiOutlineGlobe className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                        {config.featured.region}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
                      {config.featured.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 md:mb-6 line-clamp-3">
                      {config.featured.description}
                    </p>

                    {/* Partnership Metrics */}
                    {config.featured.metrics && config.featured.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                        {config.featured.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-2 sm:p-3 text-center">
                            <div className="text-sm sm:text-base md:text-lg font-bold text-indigo-600 dark:text-indigo-400">
                              {metric.value}
                            </div>
                            <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Read More Link */}
                    <Link
                      href={config.featured.link}
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group text-xs sm:text-sm"
                    >
                      View Partnership Details
                      <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Partners Grid */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                  {activeTier === 'all' ? 'All Partners' : `${activeTier} Partners`}
                </h3>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                  {filteredPartners.length} partners
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {currentPartners.map((partner, index) => (
                  <div
                    key={partner.id || index}
                    className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex flex-col sm:flex-row">

                      {/* Logo */}
                      <div className="sm:w-20 md:w-24 h-20 sm:h-24 bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-3 sm:p-4 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-3 sm:p-4 md:p-5">

                        {/* Tier Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1 sm:mb-2">
                          <span className={`inline-block text-[8px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full bg-linear-to-r ${getTierColor(partner.tier)} text-white`}>
                            {partner.tier}
                          </span>
                          <span className="flex items-center text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">
                            {getPartnerTypeIcon(partner.type)}
                            <span className="ml-0.5 sm:ml-1">{partner.type}</span>
                          </span>
                        </div>

                        {/* Name */}
                        <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                          {partner.name}
                        </h4>

                        {/* Description */}
                        <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-2 sm:mb-3">
                          {partner.description}
                        </p>

                        {/* Tags */}
                        {partner.tags && partner.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                            {partner.tags.slice(0, 2).map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-[8px] sm:text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 sm:px-2 py-0.5 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Link */}
                        <Link
                          href={partner.link || '#'}
                          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors text-[10px] sm:text-xs"
                        >
                          Learn More
                          <HiOutlineArrowRight className="ml-0.5 sm:ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-1.5 sm:space-x-2 mt-6 sm:mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`p-1.5 sm:p-2 rounded-lg border ${currentPage === 1
                    ? 'border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  <HiOutlineChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg font-medium text-xs sm:text-sm ${currentPage === page
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
                  className={`p-1.5 sm:p-2 rounded-lg border ${currentPage === totalPages
                    ? 'border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  <HiOutlineChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5 sm:space-y-6 md:space-y-8">

            {/* Partner Program Overview */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg sm:rounded-xl p-5 sm:p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative">
                <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 flex items-center">
                  <HiOutlineSparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  Partner Program
                </h3>
                <p className="text-xs sm:text-sm text-indigo-100 mb-3 sm:mb-4">
                  Join our ecosystem and grow your business with our industry-leading platform.
                </p>
                <Link
                  href="/partners/apply"
                  className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-indigo-600 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-xs sm:text-sm"
                >
                  Apply Now
                  <HiOutlineArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>

            {/* Partner Tiers Explanation */}
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Partner Tiers
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-linear-to-r from-slate-300 to-slate-400 mt-1 mr-2 sm:mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">Platinum</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">Strategic global partners with deepest integration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-linear-to-r from-yellow-400 to-amber-500 mt-1 mr-2 sm:mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">Gold</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">Premium partners with proven expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-linear-to-r from-gray-300 to-gray-400 mt-1 mr-2 sm:mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">Silver</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">Established partners with growing practices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-linear-to-r from-amber-600 to-amber-700 mt-1 mr-2 sm:mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">Bronze</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">Emerging partners building their business</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Resources */}
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Partner Resources
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <Link href="/partners/portal" className="flex items-center p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <HiOutlineUsers className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 mr-2 sm:mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">Partner Portal</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">Access tools and resources</p>
                  </div>
                </Link>
                <Link href="/partners/training" className="flex items-center p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <HiOutlineBookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 mr-2 sm:mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">Training & Certification</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">Build your expertise</p>
                  </div>
                </Link>
                <Link href="/partners/marketing" className="flex items-center p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <HiOutlineChartBar className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 mr-2 sm:mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">Co-marketing Opportunities</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">Grow together</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Testimonial */}
            {config?.testimonial?.show && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white dark:bg-gray-700 rounded-lg overflow-hidden p-1.5 sm:p-2 mr-2 sm:mr-3">
                    <img
                      src={config.testimonial.logo}
                      alt={config.testimonial.partner}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {config.testimonial.partner}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                      {config.testimonial.author}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic">
                  "{config.testimonial.quote}"
                </p>
                <div className="flex items-center mt-2 sm:mt-3">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${i < config.testimonial.rating
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
        {config?.viewAll?.show && config?.viewAll?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.viewAll.url}
              className="inline-flex items-center bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {config.viewAll.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      <style>{`
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