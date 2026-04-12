// page/frontend/Home/PartnersSection/PartnersSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineUsers,
  HiOutlineBadgeCheck,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineSparkles,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineTruck,
  HiOutlineShoppingCart,
} from 'react-icons/hi';
import { MdOutlineHandshake } from "react-icons/md";

const PartnersSection2 = ({ config }) => {

  // State for active category
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Extract pagination data
  const partnersPerPage = config?.pagination?.perPage || 8;

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

  // Filter partners
  const filteredPartners = config?.partners?.filter(partner => {
    const matchesCategory = activeCategory === 'all' || partner.type?.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch = searchQuery === '' ||
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  // Pagination
  const totalPages = Math.ceil(filteredPartners.length / partnersPerPage);
  const startIndex = (currentPage - 1) * partnersPerPage;
  const endIndex = startIndex + partnersPerPage;
  const currentPartners = filteredPartners.slice(startIndex, endIndex);

  // Get unique categories
  const categories = ['all', ...new Set(config?.partners?.map(partner => partner.type) || [])];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-indigo-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Stats Cards */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-10 sm:mb-12">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">

          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={config?.search?.placeholder || "Search partners..."}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative sm:w-48">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineFilter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <select
              value={activeCategory}
              onChange={(e) => {
                setActiveCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 sm:pl-10 pr-8 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none w-full"
            >
              <option value="all">All Partner Types</option>
              {categories.filter(c => c !== 'all').map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center ${activeCategory === category
                  ? 'bg-linear-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {category !== 'all' && (
                <span className="mr-1 sm:mr-1.5">
                  {getPartnerTypeIcon(category)}
                </span>
              )}
              {category === 'all' ? 'All Partners' : category}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
          {currentPartners.map((partner, index) => (
            <div
              key={partner.id || index}
              className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Logo Area */}
              <div className="h-24 sm:h-28 md:h-32 bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 sm:p-5 md:p-6 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full w-auto object-contain filter group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">

                {/* Type Badge */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="inline-flex items-center text-[10px] sm:text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                    {getPartnerTypeIcon(partner.type)}
                    <span className="ml-0.5 sm:ml-1">{partner.type}</span>
                  </span>
                  {partner.featured && (
                    <span className="inline-flex items-center text-[10px] sm:text-xs font-medium text-amber-600 dark:text-amber-400">
                      <HiOutlineStar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 fill-amber-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {partner.name}
                </h3>

                {/* Description */}
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-3 sm:mb-4">
                  {partner.description}
                </p>

                {/* Tags */}
                {partner.tags && partner.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {partner.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[8px] sm:text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Link */}
                <Link
                  href={partner.link || '#'}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors group/link text-[10px] sm:text-xs"
                >
                  View Partnership
                  <HiOutlineArrowRight className="ml-0.5 sm:ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {currentPartners.length === 0 && (
          <div className="text-center py-10 sm:py-12 md:py-16 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg mb-10 sm:mb-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <HiOutlineSearch className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
              No partners found
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setCurrentPage(1);
              }}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-lg sm:rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 text-sm sm:text-base"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-1.5 sm:space-x-2 mb-10 sm:mb-12">
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

            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg font-medium text-xs sm:text-sm ${currentPage === page
                    ? 'bg-linear-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                    : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {page}
              </button>
            ))}

            {totalPages > 5 && (
              <span className="text-gray-500">...</span>
            )}

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

        {/* Partner Program CTA */}
        {config?.programCta?.show && (
          <div className="mt-12 sm:mt-16 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.programCta.title}
                </h3>
                <p className="text-indigo-100 text-sm sm:text-base mb-5 sm:mb-6 max-w-2xl">
                  {config.programCta.description}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                  <Link
                    href={config.programCta.primaryButton.url}
                    className="inline-flex items-center bg-white text-indigo-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    {config.programCta.primaryButton.text}
                    <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
                  </Link>
                  <Link
                    href={config.programCta.secondaryButton.url}
                    className="inline-flex items-center border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                  >
                    {config.programCta.secondaryButton.text}
                  </Link>
                </div>
              </div>

              {/* Benefits List */}
              <div className="lg:w-80 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Partner Benefits:</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {config.programCta.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm">
                      <HiOutlineBadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 shrink-0 text-indigo-200 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
      `}</style>
    </section>
  );
};

export default PartnersSection2;