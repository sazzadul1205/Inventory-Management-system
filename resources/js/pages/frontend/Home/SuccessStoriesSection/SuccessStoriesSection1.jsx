// page/frontend/Home/SuccessStoriesSection/SuccessStoriesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineStar,
  HiOutlineArrowRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi';

const SuccessStoriesSection1 = ({ config }) => {
  // State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter stories by category
  const getFilteredStories = () => {
    if (activeCategory === 'all') {
      return config?.stories || [];
    }
    return config?.stories?.filter(
      story => story.category === activeCategory
    ) || [];
  };

  // Get filtered stories
  const filteredStories = getFilteredStories();

  // Navigation functions - Next
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % filteredStories.length);
  };

  // Navigation functions - Previous
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
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
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" />

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
              All Stories
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

        {/* Main Success Stories */}
        {filteredStories.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">

            {/* Left Side - Content */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">

              {/* Company Info */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg">
                  {filteredStories[activeIndex].companyInitials}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {filteredStories[activeIndex].companyName}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {filteredStories[activeIndex].industry} • {filteredStories[activeIndex].location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center flex-wrap gap-1">
                {renderStars(filteredStories[activeIndex].rating)}
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                  ({filteredStories[activeIndex].reviewCount} reviews)
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "{filteredStories[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <img
                    src={filteredStories[activeIndex].authorImage}
                    alt={filteredStories[activeIndex].authorName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {filteredStories[activeIndex].authorName}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                    {filteredStories[activeIndex].authorTitle}, {filteredStories[activeIndex].companyName}
                  </p>
                </div>
              </div>

              {/* Key Metrics */}
              {filteredStories[activeIndex].metrics && (
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4">
                  {filteredStories[activeIndex].metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 dark:text-blue-400">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Read Full Story Link */}
              <Link
                href={filteredStories[activeIndex].link}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group text-sm sm:text-base"
              >
                <span>Read full story</span>
                <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={filteredStories[activeIndex].image}
                  alt={filteredStories[activeIndex].companyName}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />

                {/* Play Button Overlay */}
                {filteredStories[activeIndex].hasVideo && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600 ml-0.5 sm:ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous story"
              >
                <HiOutlineChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next story"
              >
                <HiOutlineChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                {filteredStories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${idx === activeIndex
                        ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-blue-600'
                        : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white'
                      }`}
                    aria-label={`Go to story ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredStories.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              No success stories found in this category.
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

export default SuccessStoriesSection1;