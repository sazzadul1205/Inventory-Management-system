// page/frontend/Home/TestimonialsSection/TestimonialsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineStar,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineArrowRight,
  HiOutlineShare,
  HiOutlineThumbUp,
  HiOutlineUsers
} from 'react-icons/hi';

const TestimonialsSection2 = ({ config }) => {

  // State for active testimonial
  const [liked, setLiked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <HiOutlineStar
          key={i}
          className={`w-3 h-3 sm:w-4 sm:h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-blue-500/30">
              <HiOutlineUsers className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
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

        {/* Stats Row */}
        {config?.stats?.show && config?.stats?.items && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 max-w-4xl mx-auto">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Left Side - Featured Testimonial */}
          <div className="lg:col-span-2">
            {config?.testimonials && config.testimonials.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">

                {/* Quote Icon */}
                <div className="text-4xl sm:text-5xl md:text-6xl text-blue-200 dark:text-blue-900/30 font-serif mb-3 sm:mb-4">"</div>

                {/* Testimonial Text */}
                <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 flex-1">
                  {config.testimonials[activeIndex].testimonial}
                </blockquote>

                {/* Rating */}
                <div className="flex items-center flex-wrap gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                  {renderStars(config.testimonials[activeIndex].rating)}
                </div>

                {/* Author & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <img
                        src={config.testimonials[activeIndex].authorImage}
                        alt={config.testimonials[activeIndex].authorName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                        {config.testimonials[activeIndex].authorName}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {config.testimonials[activeIndex].authorTitle}
                      </p>
                      <div className="flex items-center mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                        <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                        {config.testimonials[activeIndex].location}
                      </div>
                    </div>
                  </div>

                  {/* Company Initials */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl self-start sm:self-center">
                    {config.testimonials[activeIndex].companyInitials}
                  </div>
                </div>

                {/* Date & Interactions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                    <HiOutlineCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                    {config.testimonials[activeIndex].date}
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <button
                      onClick={() => setLiked(!liked)}
                      className="flex items-center space-x-0.5 sm:space-x-1 text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="Like"
                    >
                      <HiOutlineThumbUp className={`w-3 h-3 sm:w-4 sm:h-4 ${liked ? 'text-blue-600 fill-current' : ''}`} />
                      <span className="text-xs sm:text-sm">{liked ? '1' : '0'}</span>
                    </button>
                    <button className="flex items-center space-x-0.5 sm:space-x-1 text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Share">
                      <HiOutlineShare className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Testimonial List */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4">
              More Testimonials
            </h3>

            {config?.testimonials?.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${activeIndex === index
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-[1.02]'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-100 dark:border-gray-700'
                  }`}
                aria-label={`View testimonial from ${testimonial.authorName}`}
              >
                <div className="flex items-start space-x-2 sm:space-x-3">
                  {/* Author Image */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0">
                    <img
                      src={testimonial.authorImage}
                      alt={testimonial.authorName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold text-sm sm:text-base truncate ${activeIndex === index ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}>
                      {testimonial.authorName}
                    </h4>
                    <p className={`text-xs sm:text-sm truncate ${activeIndex === index ? 'text-blue-100' : 'text-gray-500 dark:text-gray-500'
                      }`}>
                      {testimonial.companyName}
                    </p>
                    <div className="flex items-center mt-0.5 sm:mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className={`text-[10px] sm:text-xs mt-1 sm:mt-2 line-clamp-2 ${activeIndex === index ? 'text-blue-100' : 'text-gray-500 dark:text-gray-500'
                      }`}>
                      "{testimonial.testimonial.substring(0, 60)}..."
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group text-sm sm:text-base"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
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

export default TestimonialsSection2;