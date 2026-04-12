// page/frontend/Home/CareerSection/CareerSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineSearch,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineUsers,
  HiOutlineGlobe,
} from 'react-icons/hi';
import { HiOutlineTrophy } from "react-icons/hi2";

const CareerSection2 = ({ config }) => {
  
  // State for filters
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Extract pagination settings
  const jobsPerPage = config?.pagination?.perPage || 6;

  // Filter jobs
  const filteredJobs = config?.positions?.items?.filter(job => {
    const matchesSearch = searchQuery === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation);

    return matchesSearch && matchesDepartment && matchesLocation;
  }) || [];

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  // Get unique departments and locations for filters
  const departments = ['all', ...new Set(config?.positions?.items?.map(job => job.department) || [])];
  const locations = ['all', ...new Set(config?.positions?.items?.map(job => {
    if (job.location.includes('Remote')) return 'Remote';
    if (job.location.includes('San Francisco')) return 'San Francisco';
    if (job.location.includes('New York')) return 'New York';
    return 'Other';
  }))];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-blue-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
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
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">

          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={config?.search?.placeholder || "Search jobs by title, department, or keyword..."}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Department Filter */}
          <div className="relative sm:w-40">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineBriefcase className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => {
                setSelectedDepartment(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 sm:pl-10 pr-8 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none w-full"
            >
              <option value="all">All Depts</option>
              {departments.filter(d => d !== 'all').map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div className="relative sm:w-40">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineLocationMarker className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <select
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 sm:pl-10 pr-8 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none w-full"
            >
              <option value="all">All Locations</option>
              {locations.filter(l => l !== 'all').map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Showing <span className="font-semibold">{currentJobs.length}</span> of{' '}
            <span className="font-semibold">{filteredJobs.length}</span> positions
          </p>
          {(selectedDepartment !== 'all' || selectedLocation !== 'all' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDepartment('all');
                setSelectedLocation('all');
                setCurrentPage(1);
              }}
              className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Jobs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
          {currentJobs.map((job, index) => (
            <div
              key={job.id || index}
              className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-4 sm:p-5 md:p-6">

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2 sm:mb-3">
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                      {job.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                      {job.department}
                    </p>
                  </div>
                  {job.isNew && (
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center whitespace-nowrap">
                      <HiOutlineSparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-0.5 sm:mr-1" />
                      New
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                    <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-500 shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                    <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-500 shrink-0" />
                    <span>{job.type}</span>
                  </div>
                  {job.salary && (
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                      <HiOutlineCurrencyDollar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-500 shrink-0" />
                      <span>{job.salary}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Tags */}
                {job.tags && job.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {job.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[8px] sm:text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Apply Button */}
                <Link
                  href={job.link}
                  className="inline-flex items-center justify-center w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group/btn text-xs sm:text-sm"
                >
                  Apply Now
                  <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {currentJobs.length === 0 && (
          <div className="text-center py-10 sm:py-12 md:py-16 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg mb-10 sm:mb-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <HiOutlineSearch className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
              No positions found
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDepartment('all');
                setSelectedLocation('all');
                setCurrentPage(1);
              }}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm sm:text-base"
            >
              Clear all filters
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
                  ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
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

        {/* Culture/Values Section */}
        {config?.culture?.show && config?.culture?.items && (
          <div className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
              {config.culture.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {config.culture.items.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                    {item.icon === 'users' && <HiOutlineUsers className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" />}
                    {item.icon === 'globe' && <HiOutlineGlobe className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" />}
                    {item.icon === 'trophy' && <HiOutlineTrophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{item.title}</h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        {config?.cta?.show && (
          <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.cta.title}
                </h3>
                <p className="text-blue-100 text-sm sm:text-base mb-5 sm:mb-6 max-w-2xl">
                  {config.cta.description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link
                    href={config.cta.primaryButton.url}
                    className="inline-flex items-center bg-white text-blue-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    {config.cta.primaryButton.text}
                    <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
                  </Link>
                  {config.cta.secondaryButton?.show && (
                    <Link
                      href={config.cta.secondaryButton.url}
                      className="inline-flex items-center border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                    >
                      {config.cta.secondaryButton.text}
                    </Link>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="lg:w-56 xl:w-64 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">{config.stats?.items?.[0]?.value || '50+'}</div>
                  <div className="text-[10px] sm:text-xs text-blue-100">Open Positions</div>
                  <div className="border-t border-white/20 my-2 sm:my-3 md:my-4" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">{config.stats?.items?.[2]?.value || '500+'}</div>
                  <div className="text-[10px] sm:text-xs text-blue-100">Team Members</div>
                </div>
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

export default CareerSection2;