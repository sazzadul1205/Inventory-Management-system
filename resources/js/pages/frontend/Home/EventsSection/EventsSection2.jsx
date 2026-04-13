// page/frontend/Home/EventsSection/EventsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

const EventsSection2 = ({ config }) => {

  // States
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState('all');

  // Extract pagination data
  const eventsPerPage = config?.pagination?.perPage || 4;

  // Filter events
  const filteredEvents = config?.events?.filter(event => {
    const matchesType = activeType === 'all' || event.type === activeType;
    const matchesSearch = searchQuery === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  }) || [];

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  // Get unique event types
  const eventTypes = ['all', ...new Set(config?.events?.map(event => event.type) || [])];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-purple-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
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

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">

          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={config?.search?.placeholder || "Search events..."}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Type Filter */}
          <div className="relative sm:w-44">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineFilter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <select
              value={activeType}
              onChange={(e) => {
                setActiveType(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 sm:pl-10 pr-8 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none w-full"
            >
              <option value="all">All Types</option>
              {eventTypes.filter(t => t !== 'all').map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Type Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setActiveType(type);
                setCurrentPage(1);
              }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeType === type
                ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {type === 'all' ? 'All Events' : type}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
          {currentEvents.map((event, index) => (
            <div
              key={event.id || index}
              className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col sm:flex-row">

                {/* Date Column */}
                <div className="sm:w-24 md:w-28 lg:w-32 bg-linear-to-br from-purple-600 to-pink-600 text-white p-3 sm:p-4 flex sm:flex-col items-center justify-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="text-[10px] sm:text-xs uppercase ml-2 sm:ml-0">
                    {new Date(event.date).toLocaleString('default', { month: 'short' })}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-5 md:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2 sm:mb-3">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white">
                      <Link href={event.link} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        {event.title}
                      </Link>
                    </h3>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full">
                      {event.type}
                    </span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                      <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                      <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-500" />
                      {event.time}
                    </div>
                  </div>

                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center">
                      <HiOutlineUserGroup className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 mr-0.5 sm:mr-1" />
                      <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                        {event.attendees} attending
                      </span>
                    </div>
                    <Link
                      href={event.link}
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-[10px] sm:text-xs inline-flex items-center"
                    >
                      View Details
                      <HiOutlineArrowRight className="ml-0.5 sm:ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {currentEvents.length === 0 && (
          <div className="text-center py-10 sm:py-12 md:py-16 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg mb-10 sm:mb-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <HiOutlineSearch className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
              No events found
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveType('all');
                setCurrentPage(1);
              }}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm sm:text-base"
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
                  ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
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

        {/* Calendar View Link */}
        {config?.calendar?.show && (
          <div className="text-center">
            <Link
              href={config.calendar.url}
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm sm:text-base"
            >
              <HiOutlineCalendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              {config.calendar.text}
              <HiOutlineArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
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
      `}</style>
    </section>
  );
};

export default EventsSection2;