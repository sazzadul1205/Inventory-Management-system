// page/frontend/Home/EventsSection/EventsSection1.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineVideoCamera,
  HiOutlineMap,
  HiOutlineStar,
} from 'react-icons/hi';

const EventsSection1 = ({ config }) => {
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Events section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Events badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
              )}
              <HiOutlineCalendar className={`w-4 h-4 mr-2 ${config.badge.textColor}`} />
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
            <span className={`${config?.heading?.highlightColor} relative inline-block`}>
              {config?.heading?.highlightedText}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                aria-hidden="true"
              >
                <line
                  x1="0" y1="4" x2="200" y2="4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="6 6"
                  className={config?.heading?.highlightColor}
                />
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

        {/* Featured Event */}
        {config?.featured?.show && (
          <div className="mb-20">
            <div className="bg-linear-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <HiOutlineSparkles className="w-4 h-4 mr-2" />
                    FEATURED EVENT
                  </span>
                  <h3 className="text-3xl font-bold mb-4">
                    {config.featured.title}
                  </h3>
                  <p className="text-purple-100 mb-6 text-lg">
                    {config.featured.description}
                  </p>

                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center">
                      <HiOutlineCalendar className="w-5 h-5 mr-2" />
                      <span>{formatDate(config.featured.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <HiOutlineLocationMarker className="w-5 h-5 mr-2" />
                      <span>{config.featured.location}</span>
                    </div>
                    <div className="flex items-center">
                      <HiOutlineClock className="w-5 h-5 mr-2" />
                      <span>{config.featured.time}</span>
                    </div>
                  </div>

                  <Link
                    href={config.featured.link}
                    className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Register Now
                    <HiOutlineArrowRight className="ml-2" />
                  </Link>
                </div>

                <div className="lg:w-80 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold">{config.featured.price}</div>
                    <div className="text-sm text-purple-100">per person</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <HiOutlineUserGroup className="w-5 h-5 mr-2" />
                      <span className="text-sm">{config.featured.attendees} attending</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: config.featured.capacity }}
                       />
                    </div>
                    <p className="text-xs text-purple-100">{config.featured.spotsLeft} spots left</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {config?.events?.map((event, index) => (
            <div
              key={event.id || index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Event Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {event.type}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <HiOutlineCalendar className="w-4 h-4 mr-1" />
                  {formatDate(event.date)}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  <Link href={event.link} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {event.title}
                  </Link>
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <HiOutlineLocationMarker className="w-4 h-4 mr-2 text-purple-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <HiOutlineClock className="w-4 h-4 mr-2 text-purple-500" />
                    {event.time}
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <HiOutlineUserGroup className="w-4 h-4 text-purple-500 mr-1" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {event.attendees} attending
                    </span>
                  </div>
                  <Link
                    href={event.link}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm inline-flex items-center"
                  >
                    Learn More
                    <HiOutlineArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Types/Categories */}
        {config?.categories?.show && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              {config.categories.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {config.categories.items.map((category, index) => {
                const IconComponent =
                  category.icon === 'video' ? HiOutlineVideoCamera :
                    category.icon === 'map' ? HiOutlineMap :
                      category.icon === 'star' ? HiOutlineStar :
                        HiOutlineCalendar;

                return (
                  <Link
                    key={index}
                    href={category.link}
                    className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-30"
                  >
                    <div className="w-12 h-12 bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                      {category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        {config?.cta?.show && (
          <div className="text-center">
            <Link
              href={config.cta.url}
              className="inline-flex items-center bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              {config.cta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
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

export default EventsSection1;