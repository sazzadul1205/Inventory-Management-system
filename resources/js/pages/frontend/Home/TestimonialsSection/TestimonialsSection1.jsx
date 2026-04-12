// page/frontend/Home/TestimonialsSection/TestimonialsSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
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
  
  // State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Get filtered testimonials
  const filteredTestimonials = getFilteredTestimonials();

  // Navigation functions - Next
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  // Navigation functions - Previous
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  // Render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <HiOutlineStar
          key={i}
          className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="text-blue-600 dark:text-blue-400 relative inline-block">
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

        {/* Category Filters */}
        {config?.categories && config.categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveIndex(0);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === 'all'
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
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeCategory === category.id
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
            <div className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">

                {/* Left Side - Content */}
                <div className="md:col-span-3 space-y-4 sm:space-y-6">

                  {/* Quote Icon */}
                  <div className="text-4xl sm:text-5xl md:text-6xl text-blue-200 dark:text-blue-900/30 font-serif">"</div>

                  {/* Rating */}
                  <div className="flex items-center flex-wrap gap-0.5 sm:gap-1">
                    {renderStars(filteredTestimonials[activeIndex].rating)}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    "{filteredTestimonials[activeIndex].testimonial}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <img
                        src={filteredTestimonials[activeIndex].authorImage}
                        alt={filteredTestimonials[activeIndex].authorName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                        {filteredTestimonials[activeIndex].authorName}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {filteredTestimonials[activeIndex].authorTitle}, {filteredTestimonials[activeIndex].companyName}
                      </p>
                      <div className="flex items-center mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                        <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                        {filteredTestimonials[activeIndex].location}
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                    <HiOutlineCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                    {filteredTestimonials[activeIndex].date}
                  </div>
                </div>

                {/* Right Side - Company Info */}
                <div className="md:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl">
                      {filteredTestimonials[activeIndex].companyInitials}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {filteredTestimonials[activeIndex].companyName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      {filteredTestimonials[activeIndex].industry}
                    </p>

                    {/* Key Benefit */}
                    <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs sm:text-sm">
                      <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                      {filteredTestimonials[activeIndex].keyBenefit}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 md:-translate-x-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous testimonial"
            >
              <HiOutlineChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 md:translate-x-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next testimonial"
            >
              <HiOutlineChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-1.5 sm:space-x-2">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${idx === activeIndex
                      ? 'w-4 sm:w-6 md:w-8 h-1.5 sm:h-2 bg-blue-600'
                      : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              No testimonials found in this category.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection1;