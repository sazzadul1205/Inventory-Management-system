// page/frontend/Home/TestimonialsSection/TestimonialsSection1.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
import {
  HiOutlineStar,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineArrowRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineCheckCircle
} from 'react-icons/hi';

const TestimonialsSection1 = ({ config }) => {
  // State for active testimonial (for carousel)
  const [activeIndex, setActiveIndex] = useState(0);

  // State for filter category
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter testimonials by category
  const getFilteredTestimonials = () => {
    if (activeCategory === 'all') {
      return config?.testimonials || [];
    }
    return config?.testimonials?.filter(
      testimonial => testimonial.category === activeCategory
    ) || [];
  };

  const filteredTestimonials = getFilteredTestimonials();

  // Navigation functions
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  // Render stars for rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <HiOutlineStar
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
          }`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Testimonials section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern - decorative */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      {/* Gradient Orbs - decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Testimonials badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
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
            itemProp="name"
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
              itemProp="description"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Category Filters */}
        {config?.categories && config.categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveIndex(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              All Testimonials
            </button>
            {config.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setActiveIndex(0);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Main Testimonial Carousel */}
        {filteredTestimonials.length > 0 && (
          <div className="relative">
            {/* Main Testimonial Card */}
            <div
              className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="grid md:grid-cols-5 gap-8 items-center">
                {/* Left Side - Quote & Content */}
                <div className="md:col-span-3 space-y-6">
                  {/* Quote Icon */}
                  <div className="text-6xl text-blue-200 dark:text-blue-900/30 font-serif">"</div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {renderStars(filteredTestimonials[activeIndex].rating)}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    "{filteredTestimonials[activeIndex].testimonial}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <img
                        src={filteredTestimonials[activeIndex].authorImage}
                        alt={filteredTestimonials[activeIndex].authorName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {filteredTestimonials[activeIndex].authorName}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {filteredTestimonials[activeIndex].authorTitle}, {filteredTestimonials[activeIndex].companyName}
                      </p>
                      <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-500">
                        <HiOutlineLocationMarker className="w-4 h-4 mr-1" />
                        {filteredTestimonials[activeIndex].location}
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                    <HiOutlineCalendar className="w-4 h-4 mr-1" />
                    {filteredTestimonials[activeIndex].date}
                  </div>
                </div>

                {/* Right Side - Company Logo/Image */}
                <div className="md:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">
                      {filteredTestimonials[activeIndex].companyInitials}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {filteredTestimonials[activeIndex].companyName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {filteredTestimonials[activeIndex].industry}
                    </p>

                    {/* Key Benefit */}
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                      <HiOutlineCheckCircle className="w-4 h-4 mr-1" />
                      {filteredTestimonials[activeIndex].keyBenefit}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous testimonial"
            >
              <HiOutlineChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next testimonial"
            >
              <HiOutlineChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex
                    ? 'w-8 bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* No Results Message */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No testimonials found in this category.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && (
          <div className="text-center mt-16">
            <Link
              href={config.bottomCta.url}
              className={`inline-flex items-center ${config.bottomCta.backgroundColor} ${config.bottomCta.textColor} ${config.bottomCta.hoverColor} px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Styles */}
      <style >{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection1;