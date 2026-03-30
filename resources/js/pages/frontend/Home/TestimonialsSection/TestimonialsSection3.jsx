// page/frontend/Home/TestimonialsSection/TestimonialsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState({});

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % (config?.testimonials?.length || 4));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, config?.testimonials?.length]);

  // Render stars for rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <HiOutlineStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-300 dark:text-gray-600'
          }`}
        aria-hidden="true"
      />
    ));
  };

  // Handle like
  const handleLike = (id) => {
    setLiked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Testimonials section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern - Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge with Icon */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-4 py-2 mb-6 shadow-lg shadow-amber-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "LOVED BY CUSTOMERS"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
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
                  d="M0 0L300 12"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EC4899" />
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
              itemProp="description"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Main Content - Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Testimonial - Large Card */}
          {config?.testimonials && config.testimonials.length > 0 && (
            <div
              className="lg:col-span-2 lg:row-span-2 bg-linear-to-br from-amber-500 to-pink-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="text-8xl text-white/20 font-serif mb-4">"</div>

                {/* Testimonial Text */}
                <blockquote className="text-2xl font-light leading-relaxed mb-6 flex-1">
                  {config.testimonials[activeIndex].testimonial}
                </blockquote>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {renderStars(config.testimonials[activeIndex].rating)}
                </div>

                {/* Author & Company */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white/30">
                    <img
                      src={config.testimonials[activeIndex].authorImage}
                      alt={config.testimonials[activeIndex].authorName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {config.testimonials[activeIndex].authorName}
                    </h4>
                    <p className="text-amber-100">
                      {config.testimonials[activeIndex].authorTitle}, {config.testimonials[activeIndex].companyName}
                    </p>
                    <div className="flex items-center mt-1 text-sm text-amber-100">
                      <HiOutlineLocationMarker className="w-4 h-4 mr-1" />
                      {config.testimonials[activeIndex].location}
                    </div>
                  </div>
                </div>

                {/* Key Results */}
                {config.testimonials[activeIndex].results && (
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="grid grid-cols-3 gap-4">
                      {config.testimonials[activeIndex].results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-white">
                            {result.value}
                          </div>
                          <div className="text-xs text-amber-100">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-3xl" />
            </div>
          )}

          {/* Testimonial Cards Grid */}
          {config?.testimonials?.slice(1).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Header with Avatar and Rating */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.authorImage}
                      alt={testimonial.authorName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.authorName}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {testimonial.authorTitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Company Info */}
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {testimonial.companyName}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500 block">
                  {testimonial.industry}
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                "{testimonial.testimonial}"
              </p>

              {/* Key Benefit Tag */}
              <div className="inline-flex items-center px-3 py-1 bg-linear-to-r from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-full text-xs font-medium text-amber-700 dark:text-amber-300 mb-4">
                <HiOutlineCheckCircle className="w-3 h-3 mr-1" />
                {testimonial.keyBenefit}
              </div>

              {/* Footer with Date and Interactions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                  <HiOutlineCalendar className="w-3 h-3 mr-1" />
                  {testimonial.date}
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleLike(testimonial.id)}
                    className="flex items-center space-x-1 text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <HiOutlineHeart className={`w-4 h-4 ${liked[testimonial.id] ? 'fill-current text-amber-500' : ''}`} />
                    <span className="text-xs">{liked[testimonial.id] ? testimonial.likes + 1 : testimonial.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-400 hover:text-amber-500 transition-colors">
                    <HiOutlineShare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        {config?.videoTestimonials?.show && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Watch Video Testimonials
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {config.videoTestimonials.items.map((video, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                  onClick={() => window.open(video.link, '_blank')}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-8 h-8 text-amber-600 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <h4 className="mt-3 font-semibold text-gray-900 dark:text-white">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {video.authorName}, {video.companyName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trust Signals */}
        {config?.trustSignals?.show && (
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-8 bg-gray-50 dark:bg-gray-800/50 rounded-full px-8 py-4">
              <div className="flex items-center space-x-2">
                <HiOutlineEmojiHappy className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {config.trustSignals.satisfiedCustomers}+ Satisfied Customers
                </span>
              </div>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-700" />
              <div className="flex items-center space-x-2">
                <HiOutlineTrendingUp className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {config.trustSignals.netPromoterScore} NPS Score
                </span>
              </div>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-700" />
              <div className="flex items-center space-x-2">
                <HiOutlineChat className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {config.trustSignals.reviews}+ Reviews
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              <span>{config.bottomCta.text}</span>
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
        .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #9ca3af 1px, transparent 0);
          background-size: 40px 40px;
        }
        .dark .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #4b5563 1px, transparent 0);
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection3;