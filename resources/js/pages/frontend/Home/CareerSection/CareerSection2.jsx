// page/frontend/Home/CareerSection/CareerSection2.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
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
    if (job.location.includes('London')) return 'London';
    if (job.location.includes('Singapore')) return 'Singapore';
    return 'Other';
  }))];

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Careers section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-blue-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "CAREERS"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            {config?.description}
          </p>
        </div>

        {/* Stats Cards */}
        {config?.stats?.show && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={config?.search?.placeholder || "Search jobs by title, department, or keyword..."}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Department Filter */}
          <div className="relative min-w-40">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineBriefcase className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => {
                setSelectedDepartment(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-8 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none w-full"
            >
              <option value="all">All Departments</option>
              {departments.filter(d => d !== 'all').map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div className="relative min-w-40">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineLocationMarker className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-8 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none w-full"
            >
              <option value="all">All Locations</option>
              {locations.filter(l => l !== 'all').map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing <span className="font-semibold">{currentJobs.length}</span> of{' '}
            <span className="font-semibold">{filteredJobs.length}</span> positions
          </p>
          {selectedDepartment !== 'all' || selectedLocation !== 'all' || searchQuery !== '' ? (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDepartment('all');
                setSelectedLocation('all');
                setCurrentPage(1);
              }}
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              Clear Filters
            </button>
          ) : null}
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentJobs.map((job, index) => (
            <div
              key={job.id || index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {job.department}
                    </p>
                  </div>
                  {job.isNew && (
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs px-2 py-1 rounded-full flex items-center whitespace-nowrap">
                      <HiOutlineSparkles className="w-3 h-3 mr-1" />
                      New
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <HiOutlineLocationMarker className="w-4 h-4 mr-2 text-blue-500 shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <HiOutlineClock className="w-4 h-4 mr-2 text-blue-500 shrink-0" />
                    <span>{job.type}</span>
                  </div>
                  {job.salary && (
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <HiOutlineCurrencyDollar className="w-4 h-4 mr-2 text-blue-500 shrink-0" />
                      <span>{job.salary}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Tags */}
                {job.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Apply Button */}
                <Link
                  href={job.link}
                  className="inline-flex items-center justify-center w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group/btn"
                >
                  Apply Now
                  <HiOutlineArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {currentJobs.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-12">
            <div className="w-20 h-20 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <HiOutlineSearch className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              No positions found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDepartment('all');
                setSelectedLocation('all');
                setCurrentPage(1);
              }}
              className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-12">
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
              className={`p-2 rounded-lg border ${currentPage === totalPages
                ? 'border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              <HiOutlineChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Culture/Values Section */}
        {config?.culture?.show && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {config.culture.title}
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {config.culture.items.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {item.icon === 'users' && <HiOutlineUsers className="w-10 h-10 text-blue-600 dark:text-blue-400" />}
                    {item.icon === 'globe' && <HiOutlineGlobe className="w-10 h-10 text-blue-600 dark:text-blue-400" />}
                    {item.icon === 'trophy' && <HiOutlineTrophy className="w-10 h-10 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        {config?.cta?.show && (
          <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {config.cta.title}
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl">
                  {config.cta.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link
                    href={config.cta.primaryButton.url}
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {config.cta.primaryButton.text}
                    <HiOutlineArrowRight className="ml-2" />
                  </Link>
                  {config.cta.secondaryButton?.show && (
                    <Link
                      href={config.cta.secondaryButton.url}
                      className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      {config.cta.secondaryButton.text}
                    </Link>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="lg:w-64 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">{config.stats?.items?.[0]?.value || '50+'}</div>
                  <div className="text-sm text-blue-100">Open Positions</div>
                  <div className="border-t border-white/20 my-4"></div>
                  <div className="text-3xl font-bold">{config.stats?.items?.[2]?.value || '500+'}</div>
                  <div className="text-sm text-blue-100">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
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