// page/frontend/Home/EventsSection/EventsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineVideoCamera,
  HiOutlineMap,
  HiOutlineStar,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineBookmark,
} from 'react-icons/hi';

const EventsSection3 = ({ config }) => {

  // States`
  const [bookmarked, setBookmarked] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeMonth, setActiveMonth] = useState('all');

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get month from date
  const getMonth = (dateString) => {
    return new Date(dateString).toLocaleString('default', { month: 'long' });
  };

  // Filter events by month
  const filteredEvents = config?.events?.filter(event => {
    return activeMonth === 'all' || getMonth(event.date) === activeMonth;
  }) || [];

  // Get unique months
  const months = ['all', ...new Set(config?.events?.map(event => getMonth(event.date)) || [])];

  // Featured events (first 3)
  const featuredEvents = filteredEvents.slice(0, 3) || [];

  // Upcoming events (remaining)
  const upcomingEvents = filteredEvents.slice(3, 7) || [];

  // Next slide
  const nextSlide = () => {
    if (featuredEvents.length > 0) {
      setCurrentSlide((prev) =>
        prev === featuredEvents.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Previous slide
  const prevSlide = () => {
    if (featuredEvents.length > 0) {
      setCurrentSlide((prev) =>
        prev === 0 ? featuredEvents.length - 1 : prev - 1
      );
    }
  };

  // Toggle bookmark
  const toggleBookmark = (eventId) => {
    setBookmarked(prev =>
      prev.includes(eventId) ? prev.filter(id => id !== eventId) : [...prev, eventId]
    );
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(45deg,#e5e7eb_1px,transparent_1px),linear-gradient(-45deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,#374151_1px,transparent_1px),linear-gradient(-45deg,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-pink-200 dark:bg-pink-900/20 rounded-full filter blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-purple-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-purple-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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

        {/* Month Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setActiveMonth(month)}
              className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeMonth === month
                  ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {month === 'all' ? 'All Events' : month}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Main Column - Featured Events */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">

            {/* Featured Event Carousel */}
            {featuredEvents.length > 0 && (
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    Featured Events
                  </h3>
                  <div className="flex space-x-1.5 sm:space-x-2">
                    <button
                      onClick={prevSlide}
                      className="p-1.5 sm:p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <HiOutlineChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-1.5 sm:p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <HiOutlineChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {featuredEvents.map((event, index) => (
                      <div key={event.id || index} className="w-full shrink-0">
                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8 text-white">
                            <span className="inline-block bg-linear-to-r from-purple-600 to-pink-600 text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[8px] sm:text-[10px] md:text-xs font-semibold mb-2 sm:mb-3 md:mb-4">
                              {event.type}
                            </span>
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 md:mb-3">
                              {event.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                              <div className="flex items-center text-[10px] sm:text-xs">
                                <HiOutlineCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                                <span>{formatDate(event.date)}</span>
                              </div>
                              <div className="flex items-center text-[10px] sm:text-xs">
                                <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center text-[10px] sm:text-xs">
                                <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                                <span>{event.time}</span>
                              </div>
                            </div>
                            <p className="text-gray-200 text-[10px] sm:text-xs mb-3 sm:mb-4 line-clamp-2">
                              {event.description}
                            </p>
                            <Link
                              href={event.link}
                              className="inline-flex items-center bg-white text-purple-600 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
                            >
                              Register Now
                              <HiOutlineArrowRight className="ml-1 sm:ml-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-3 sm:mt-4 space-x-1.5 sm:space-x-2">
                  {featuredEvents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`rounded-full transition-all ${currentSlide === index
                          ? 'w-4 sm:w-5 md:w-6 h-1.5 sm:h-2 bg-purple-600'
                          : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 dark:bg-gray-600'
                        }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming Events List */}
            {upcomingEvents.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  More Upcoming Events
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={event.id || index}
                      className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5 sm:mb-2">
                            <span className="bg-linear-to-r from-purple-600 to-pink-600 text-white text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full">
                              {event.type}
                            </span>
                            <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                              {formatDate(event.date)}
                            </span>
                          </div>
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                            <Link href={event.link} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                              {event.title}
                            </Link>
                          </h4>
                          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                            <span className="flex items-center">
                              <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                              {event.location}
                            </span>
                            <span className="flex items-center">
                              <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                              {event.time}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <button
                            onClick={() => toggleBookmark(event.id)}
                            className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <HiOutlineBookmark
                              className={`w-4 h-4 sm:w-5 sm:h-5 ${bookmarked.includes(event.id)
                                  ? 'text-purple-600 fill-purple-600'
                                  : 'text-gray-400'
                                }`}
                            />
                          </button>
                          <Link
                            href={event.link}
                            className="inline-flex items-center bg-linear-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                          >
                            Register
                            <HiOutlineArrowRight className="ml-0.5 sm:ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5 sm:space-y-6 md:space-y-8">

            {/* Upcoming This Month */}
            {config?.thisMonth?.show && (
              <div className="bg-linear-to-br from-purple-600 to-pink-600 rounded-lg sm:rounded-xl p-5 sm:p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative">
                  <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center">
                    <HiOutlineCalendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    This Month
                  </h3>
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                      {config.thisMonth.count}
                    </div>
                    <div className="text-[10px] sm:text-xs text-purple-100">Events this month</div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {config.thisMonth.events?.map((event, index) => (
                      <div key={index} className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="truncate max-w-30 sm:max-w-37.5">{event.name}</span>
                        <span className="text-purple-200 text-[10px] sm:text-xs">{event.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Popular Events */}
            {config?.popular?.show && config?.popular?.items && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Popular Events
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {config.popular.items.map((event, index) => (
                    <Link
                      key={index}
                      href={event.link}
                      className="flex items-center space-x-2 sm:space-x-3 group"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xs sm:text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {event.title}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                          {event.attendees} attending
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Event Types */}
            {config?.types?.show && config?.types?.items && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Event Types
                </h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {config.types.items.map((type, index) => {
                    const count = config?.events?.filter(e => e.type === type.name).length || 0;
                    const IconComponent =
                      type.icon === 'video' ? HiOutlineVideoCamera :
                        type.icon === 'map' ? HiOutlineMap :
                          type.icon === 'star' ? HiOutlineStar :
                            HiOutlineCalendar;

                    return (
                      <button
                        key={index}
                        className="flex items-center justify-between w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                      >
                        <span className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-purple-500" />
                          <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400">
                            {type.name}
                          </span>
                        </span>
                        <span className="text-[10px] sm:text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 sm:px-2 py-0.5 rounded-full">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Newsletter */}
            {config?.newsletter?.show && (
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl p-5 sm:p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {config.newsletter.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {config.newsletter.description}
                </p>
                <form className="space-y-2 sm:space-y-3">
                  <input
                    type="email"
                    placeholder={config.newsletter.placeholder}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors text-sm sm:text-base"
                  >
                    {config.newsletter.buttonText}
                  </button>
                </form>
              </div>
            )}

            {/* Social Share */}
            {config?.social?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Share Events
                </h3>
                <div className="flex justify-center space-x-2 sm:space-x-3">
                  <a
                    href={config.social.facebook || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebookF className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={config.social.twitter || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <FaTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={config.social.linkedin || "#"}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
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
              className="inline-flex items-center bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base"
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
      `}</style>
    </section>
  );
};

export default EventsSection3;