// page/frontend/Home/TestimonialsSection/TestimonialsSection2.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
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
  // State for active testimonial (for featured)
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  // Render stars for rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <HiOutlineStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
          }`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <section
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Testimonials section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-blue-500/30">
            <HiOutlineUsers className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "CUSTOMER STORIES"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            itemProp="name"
          >
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-600 dark:text-gray-400"
            itemProp="description"
          >
            {config?.description}
          </p>
        </div>

        {/* Stats Row */}
        {config?.stats?.show && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {config.stats.items.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main Content - Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Featured Testimonial */}
          <div className="lg:col-span-2">
            {config?.testimonials && config.testimonials.length > 0 && (
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 h-full flex flex-col"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Quote Icon */}
                <div className="text-6xl text-blue-200 dark:text-blue-900/30 font-serif mb-4">"</div>

                {/* Testimonial Text */}
                <blockquote className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                  {config.testimonials[activeIndex].testimonial}
                </blockquote>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {renderStars(config.testimonials[activeIndex].rating)}
                </div>

                {/* Author & Company */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <img
                        src={config.testimonials[activeIndex].authorImage}
                        alt={config.testimonials[activeIndex].authorName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {config.testimonials[activeIndex].authorName}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {config.testimonials[activeIndex].authorTitle}
                      </p>
                      <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-500">
                        <HiOutlineLocationMarker className="w-4 h-4 mr-1" />
                        {config.testimonials[activeIndex].location}
                      </div>
                    </div>
                  </div>

                  {/* Company Initials */}
                  <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    {config.testimonials[activeIndex].companyInitials}
                  </div>
                </div>

                {/* Date & Interactions */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                    <HiOutlineCalendar className="w-4 h-4 mr-1" />
                    {config.testimonials[activeIndex].date}
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setLiked(!liked)}
                      className="flex items-center space-x-1 text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <HiOutlineThumbUp className={`w-4 h-4 ${liked ? 'text-blue-600 fill-current' : ''}`} />
                      <span className="text-sm">{liked ? '1' : '0'}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <HiOutlineShare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Testimonial Grid */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              More Testimonials
            </h3>

            {config?.testimonials?.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${activeIndex === index
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-[1.02]'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-100 dark:border-gray-700'
                  }`}
                aria-label={`View testimonial from ${testimonial.authorName}`}
                aria-current={activeIndex === index ? 'true' : undefined}
              >
                <div className="flex items-start space-x-3">
                  {/* Author Image */}
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <img
                      src={testimonial.authorImage}
                      alt={testimonial.authorName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Author Name */}
                    <h4 className={`font-semibold truncate ${activeIndex === index ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}>
                      {testimonial.authorName}
                    </h4>

                    {/* Company */}
                    <p className={`text-sm truncate ${activeIndex === index ? 'text-blue-100' : 'text-gray-500 dark:text-gray-500'
                      }`}>
                      {testimonial.companyName}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mt-1">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Preview */}
                    <p className={`text-xs mt-2 line-clamp-2 ${activeIndex === index ? 'text-blue-100' : 'text-gray-500 dark:text-gray-500'
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
        {config?.bottomCta?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
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
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection2;