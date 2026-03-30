// frontend/Testimonials/CustomerReviewsSection/CustomerReviewsSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

// Icons
import {
  HiOutlineStar,
  HiOutlineChatAlt,
  HiOutlineCheckCircle,
  HiArrowRight,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi';

const CustomerReviewsSection1 = ({ config }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredStar, setHoveredStar] = useState(null);
  const carouselRef = useRef(null);

  const testimonials = config?.testimonials || [];
  const stats = config?.stats || [];
  const currentTestimonial = testimonials[activeTestimonial];

  useEffect(() => {
    let interval;
    if (isPlaying && testimonials.length > 1) {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <HiOutlineStar
            key={i}
            className={`w-4 h-4 ${i < rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
              }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Customer Reviews"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* Rating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial Carousel */}
        {currentTestimonial && (
          <div className="relative mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Testimonial Content */}
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <div className="flex items-center gap-2 mb-4">
                    {renderStars(currentTestimonial.rating)}
                    <span className="text-sm text-gray-500 ml-2">
                      {currentTestimonial.rating}.0 / 5.0
                    </span>
                  </div>

                  <div className="text-3xl text-blue-400 mb-3">"</div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                    {currentTestimonial.quote}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xl">
                      {currentTestimonial.avatar || currentTestimonial.icon}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {currentTestimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </div>
                    </div>
                  </div>

                  {currentTestimonial.result && (
                    <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                      <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-green-700 dark:text-green-400">
                        Result: {currentTestimonial.result}
                      </span>
                    </div>
                  )}
                </div>

                {/* Quote Visual */}
                <div className={`bg-linear-to-br ${currentTestimonial.gradient || 'from-blue-600 to-indigo-600'} p-8 flex flex-col items-center justify-center text-white`}>
                  <div className="text-6xl mb-4">{currentTestimonial.icon}</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">{currentTestimonial.company}</div>
                    <div className="text-sm opacity-90">{currentTestimonial.industry}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            {testimonials.length > 1 && (
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full shadow-lg px-4 py-2">
                <button
                  onClick={prevTestimonial}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-all"
                >
                  <HiOutlineChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <div className="flex gap-1">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveTestimonial(idx);
                        setIsPlaying(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${activeTestimonial === idx
                          ? 'w-4 bg-blue-600'
                          : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-all"
                >
                  {isPlaying ? (
                    <HiOutlinePause className="w-3 h-3 text-gray-600" />
                  ) : (
                    <HiOutlinePlay className="w-3 h-3 text-gray-600" />
                  )}
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-all"
                >
                  <HiOutlineChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 group"
              onMouseEnter={() => setHoveredStar(index)}
              onMouseLeave={() => setHoveredStar(null)}
            >
              <div className="flex items-center justify-between mb-4">
                {renderStars(testimonial.rating)}
                <span className="text-xs text-gray-400">{testimonial.date}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-4">
                "{testimonial.quote.substring(0, 150)}..."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-lg">
                  {testimonial.avatar || testimonial.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>
              <Link
                href={testimonial.link || "#"}
                className="mt-4 inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:gap-2 transition-all"
              >
                Read Full Review
                <HiArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* Video Testimonials */}
        {config?.showVideo && config?.videoTestimonials?.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {config?.videoTitle || "Video Testimonials"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.videoTestimonials.map((video, index) => (
                <div key={index} className="relative group rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <HiOutlinePlay className="w-6 h-6 text-blue-600 ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/70 to-transparent">
                    <div className="text-white font-semibold">{video.title}</div>
                    <div className="text-white/80 text-sm">{video.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trust Badges */}
        {config?.showTrustBadges && (
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 mb-4">
              {config?.trustText || "Trusted by industry leaders worldwide"}
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {config?.trustBadges?.map((badge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <span className="text-xs text-gray-500">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
              <HiOutlineChatAlt className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to join our satisfied customers?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Get Started Today"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default CustomerReviewsSection1;