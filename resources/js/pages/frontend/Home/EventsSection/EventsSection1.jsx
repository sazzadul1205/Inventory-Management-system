// page/frontend/Home/EventsSection/EventsSection1.jsx

// React
import { Link } from '@inertiajs/react';

// React Icons
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
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full filter blur-3xl opacity-30" />

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
              <HiOutlineCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-700 dark:text-gray-300" />
              <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-purple-600 dark:text-purple-400 relative inline-block">
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

        {/* Featured Event */}
        {config?.featured?.show && (
          <div className="mb-16 sm:mb-20">
            <div className="bg-linear-to-br from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <span className="inline-flex items-center bg-white/20 text-white px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold mb-3 sm:mb-4">
                    <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    FEATURED EVENT
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                    {config.featured.title}
                  </h3>
                  <p className="text-purple-100 text-sm sm:text-base mb-4 sm:mb-6">
                    {config.featured.description}
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
                    <div className="flex items-center text-xs sm:text-sm">
                      <HiOutlineCalendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      <span>{formatDate(config.featured.date)}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm">
                      <HiOutlineLocationMarker className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      <span>{config.featured.location}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm">
                      <HiOutlineClock className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      <span>{config.featured.time}</span>
                    </div>
                  </div>

                  <Link
                    href={config.featured.link}
                    className="inline-flex items-center bg-white text-purple-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    Register Now
                    <HiOutlineArrowRight className="ml-1.5 sm:ml-2" />
                  </Link>
                </div>

                <div className="lg:w-64 xl:w-72 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold">{config.featured.price}</div>
                    <div className="text-[10px] sm:text-xs text-purple-100">per person</div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center text-xs sm:text-sm">
                      <HiOutlineUserGroup className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                      <span>{config.featured.attendees} attending</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2">
                      <div
                        className="bg-white h-1.5 sm:h-2 rounded-full"
                        style={{ width: config.featured.capacity }}
                      />
                    </div>
                    <p className="text-[10px] sm:text-xs text-purple-100">{config.featured.spotsLeft} spots left</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16">
          {config?.events?.map((event, index) => (
            <div
              key={event.id || index}
              className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Event Image */}
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Event Type Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-medium">
                    {event.type}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/70 text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] flex items-center">
                  <HiOutlineCalendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                  {formatDate(event.date)}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  <Link href={event.link} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {event.title}
                  </Link>
                </h3>

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

                <div className="flex items-center justify-between">
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
                    Learn More
                    <HiOutlineArrowRight className="ml-0.5 sm:ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Types/Categories */}
        {config?.categories?.show && config?.categories?.items && (
          <div className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-6 sm:mb-8">
              {config.categories.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
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
                    className="group flex flex-col items-center p-4 sm:p-5 md:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-w-20 sm:min-w-22.5 md:min-w-25"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-900 dark:text-white text-center">
                      {category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        {config?.cta?.show && config?.cta?.text && (
          <div className="text-center">
            <Link
              href={config.cta.url}
              className="inline-flex items-center bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base"
            >
              {config.cta.text}
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

export default EventsSection1;