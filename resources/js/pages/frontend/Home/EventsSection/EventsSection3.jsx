// page/frontend/Home/EventsSection/EventsSection3.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
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
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

const EventsSection3 = ({ config }) => {
  const [activeMonth, setActiveMonth] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bookmarked, setBookmarked] = useState([]);

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
    if (featuredEvents) {
      setCurrentSlide((prev) =>
        prev === featuredEvents.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Previous slide
  const prevSlide = () => {
    if (featuredEvents) {
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
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Events section"
    >
      {/* Background Pattern - Magazine Style */}
      <div className="absolute inset-0 bg-magazine-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-pink-200 dark:bg-pink-900/20 rounded-full filter blur-3xl opacity-20" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Magazine Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Events badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
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
              <span className="relative z-10 bg-linear-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
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
                    <stop offset="0%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#DB2777" />
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

        {/* Month Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setActiveMonth(month)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeMonth === month
                  ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {month === 'all' ? 'All Events' : month}
            </button>
          ))}
        </div>

        {/* Main Content - Magazine Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column - Featured Events */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Event Carousel */}
            {featuredEvents.length > 0 && (
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Featured Events
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <HiOutlineChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <HiOutlineChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden rounded-3xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {featuredEvents.map((event, index) => (
                      <div key={event.id || index} className="w-full shrink-0">
                        <div className="relative h-96 rounded-3xl overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <span className="inline-block bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                              {event.type}
                            </span>
                            <h3 className="text-3xl font-bold mb-3">{event.title}</h3>
                            <div className="flex flex-wrap gap-4 mb-4">
                              <div className="flex items-center">
                                <HiOutlineCalendar className="w-5 h-5 mr-2" />
                                <span>{formatDate(event.date)}</span>
                              </div>
                              <div className="flex items-center">
                                <HiOutlineLocationMarker className="w-5 h-5 mr-2" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center">
                                <HiOutlineClock className="w-5 h-5 mr-2" />
                                <span>{event.time}</span>
                              </div>
                            </div>
                            <p className="text-gray-200 mb-6 line-clamp-2">{event.description}</p>
                            <Link
                              href={event.link}
                              className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                            >
                              Register Now
                              <HiOutlineArrowRight className="ml-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {featuredEvents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${currentSlide === index
                          ? 'w-8 bg-purple-600'
                          : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming Events List */}
            {upcomingEvents.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  More Upcoming Events
                </h3>

                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={event.id || index}
                      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="bg-linear-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full mr-3">
                              {event.type}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-500">
                              {formatDate(event.date)}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            <Link href={event.link} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                              {event.title}
                            </Link>
                          </h4>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center">
                              <HiOutlineLocationMarker className="w-4 h-4 mr-1" />
                              {event.location}
                            </span>
                            <span className="flex items-center">
                              <HiOutlineClock className="w-4 h-4 mr-1" />
                              {event.time}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => toggleBookmark(event.id)}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <HiOutlineBookmark
                              className={`w-5 h-5 ${bookmarked.includes(event.id)
                                  ? 'text-purple-600 fill-purple-600'
                                  : 'text-gray-400'
                                }`}
                            />
                          </button>
                          <Link
                            href={event.link}
                            className="inline-flex items-center bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                          >
                            Register
                            <HiOutlineArrowRight className="ml-2 w-4 h-4" />
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
          <div className="lg:col-span-1 space-y-8">
            {/* Upcoming This Month */}
            {config?.thisMonth?.show && (
              <div className="bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <HiOutlineCalendar className="w-5 h-5 mr-2" />
                    This Month
                  </h3>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold mb-2">{config.thisMonth.count}</div>
                    <div className="text-sm text-purple-100">Events this month</div>
                  </div>
                  <div className="space-y-3">
                    {config.thisMonth.events?.map((event, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span>{event.name}</span>
                        <span className="text-purple-200">{event.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Popular Events */}
            {config?.popular?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Popular Events
                </h3>
                <div className="space-y-4">
                  {config.popular.items?.map((event, index) => (
                    <Link
                      key={index}
                      href={event.link}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-8 h-8 bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {event.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {event.attendees} attending
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Event Types */}
            {config?.types?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Event Types
                </h3>
                <div className="space-y-2">
                  {config.types.items?.map((type, index) => {
                    const count = config?.events?.filter(e => e.type === type.name).length || 0;
                    const IconComponent =
                      type.icon === 'video' ? HiOutlineVideoCamera :
                        type.icon === 'map' ? HiOutlineMap :
                          type.icon === 'star' ? HiOutlineStar :
                            HiOutlineCalendar;

                    return (
                      <button
                        key={index}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                      >
                        <span className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <IconComponent className="w-4 h-4 mr-2 text-purple-500" />
                          <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400">
                            {type.name}
                          </span>
                        </span>
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
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
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {config.newsletter.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {config.newsletter.description}
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder={config.newsletter.placeholder}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
                  >
                    {config.newsletter.buttonText}
                  </button>
                </form>
              </div>
            )}

            {/* Social Share */}
            {config?.social?.show && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Share Events
                </h3>
                <div className="flex justify-center space-x-3">
                  <a
                    href={config.social.facebook || "#"}
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href={config.social.twitter || "#"}
                    className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href={config.social.linkedin || "#"}
                    className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
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
              className="inline-flex items-center bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
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
      `}</style>
    </section>
  );
};

export default EventsSection3;