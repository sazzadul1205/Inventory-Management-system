// page/frontend/Home/TestimonialsSection/TestimonialsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// React Icons
import {
  HiOutlineStar,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineArrowRight,
  HiOutlineHeart,
  HiOutlineShare,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
  HiOutlineTrendingUp,
  HiOutlineChat,
  HiOutlineEmojiHappy
} from 'react-icons/hi';

const TestimonialsSection3 = ({ config }) => {
  
  // State for active testimonial
  const [isPlaying] = useState(false);
  const [liked, setLiked] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (isPlaying && config?.testimonials?.length) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % config.testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, config?.testimonials?.length]);

  // Render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <HiOutlineStar
          key={i}
          className={`w-3 h-3 sm:w-4 sm:h-4 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
        />
      );
    }
    return stars;
  };

  // Handle like
  const handleLike = (id) => {
    setLiked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#9ca3af_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,#4b5563_1px,transparent_0)] bg-size-[40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-lg shadow-amber-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
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

        {/* Main Content - Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

          {/* Featured Testimonial - Large Card */}
          {config?.testimonials && config.testimonials.length > 0 && (
            <div className="lg:col-span-2 lg:row-span-2 bg-linear-to-br from-amber-500 to-pink-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-2xl text-white relative overflow-hidden group">

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">

                {/* Quote Icon */}
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white/20 font-serif mb-2 sm:mb-4">"</div>

                {/* Testimonial Text */}
                <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-4 sm:mb-6 flex-1">
                  {config.testimonials[activeIndex].testimonial}
                </blockquote>

                {/* Rating */}
                <div className="flex items-center flex-wrap gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                  {renderStars(config.testimonials[activeIndex].rating)}
                </div>

                {/* Author & Company */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-white/30">
                    <img
                      src={config.testimonials[activeIndex].authorImage}
                      alt={config.testimonials[activeIndex].authorName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">
                      {config.testimonials[activeIndex].authorName}
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-100">
                      {config.testimonials[activeIndex].authorTitle}, {config.testimonials[activeIndex].companyName}
                    </p>
                    <div className="flex items-center mt-0.5 sm:mt-1 text-xs sm:text-sm text-amber-100">
                      <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                      {config.testimonials[activeIndex].location}
                    </div>
                  </div>
                </div>

                {/* Key Results */}
                {config.testimonials[activeIndex].results && (
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                      {config.testimonials[activeIndex].results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                            {result.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-amber-100">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-tl-2xl sm:rounded-tl-3xl" />
            </div>
          )}

          {/* Testimonial Cards Grid */}
          {config?.testimonials?.slice(1).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              {/* Header with Avatar and Rating */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.authorImage}
                      alt={testimonial.authorName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {testimonial.authorName}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                      {testimonial.authorTitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Company Info */}
              <div className="mb-2 sm:mb-3">
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  {testimonial.companyName}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 block">
                  {testimonial.industry}
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-3">
                "{testimonial.testimonial}"
              </p>

              {/* Key Benefit Tag */}
              <div className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 bg-linear-to-r from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-full text-[10px] sm:text-xs font-medium text-amber-700 dark:text-amber-300 mb-3 sm:mb-4">
                <HiOutlineCheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                {testimonial.keyBenefit}
              </div>

              {/* Footer with Date and Interactions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                  <HiOutlineCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                  {testimonial.date}
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={() => handleLike(testimonial.id)}
                    className="flex items-center space-x-0.5 sm:space-x-1 text-gray-400 hover:text-amber-500 transition-colors"
                    aria-label="Like"
                  >
                    <HiOutlineHeart className={`w-3 h-3 sm:w-4 sm:h-4 ${liked[testimonial.id] ? 'fill-current text-amber-500' : ''}`} />
                    <span className="text-[10px] sm:text-xs">{liked[testimonial.id] ? testimonial.likes + 1 : testimonial.likes}</span>
                  </button>
                  <button className="flex items-center space-x-0.5 sm:space-x-1 text-gray-400 hover:text-amber-500 transition-colors" aria-label="Share">
                    <HiOutlineShare className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        {config?.videoTestimonials?.show && config?.videoTestimonials?.items && (
          <div className="mt-12 sm:mt-16 md:mt-20">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">
              Watch Video Testimonials
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {config.videoTestimonials.items.map((video, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                  onClick={() => window.open(video.link, '_blank')}
                >
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-36 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-8 text-amber-600 ml-0.5 sm:ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/70 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <h4 className="mt-2 sm:mt-3 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {video.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                    {video.authorName}, {video.companyName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trust Signals */}
        {config?.trustSignals?.show && (
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 bg-gray-50 dark:bg-gray-800/50 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <HiOutlineEmojiHappy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {config.trustSignals.satisfiedCustomers}+ Satisfied Customers
                </span>
              </div>
              <div className="w-px h-4 sm:h-6 bg-gray-300 dark:bg-gray-700" />
              <div className="flex items-center space-x-1 sm:space-x-2">
                <HiOutlineTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {config.trustSignals.netPromoterScore} NPS Score
                </span>
              </div>
              <div className="w-px h-4 sm:h-6 bg-gray-300 dark:bg-gray-700" />
              <div className="flex items-center space-x-1 sm:space-x-2">
                <HiOutlineChat className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {config.trustSignals.reviews}+ Reviews
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-linear-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group text-sm sm:text-base"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              <span>{config.bottomCta.text}</span>
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      <style>{`
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

export default TestimonialsSection3;