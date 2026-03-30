// page/frontend/Home/SuccessStoriesSection/SuccessStoriesSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineStar,
  HiOutlineUserCircle,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineArrowRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi';

const SuccessStoriesSection1 = ({ config }) => {
  // State for active testimonial (for carousel)
  const [activeIndex, setActiveIndex] = useState(0);

  // State for filter category
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

  const filteredStories = getFilteredStories();

  // Navigation functions
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % filteredStories.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-blue-600 dark:text-blue-400`;

    switch (iconName) {
      case 'user':
        return <HiOutlineUserCircle className={iconClasses} aria-hidden="true" />;
      case 'calendar':
        return <HiOutlineCalendar className={iconClasses} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineUserCircle className={iconClasses} aria-hidden="true" />;
    }
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
      aria-label="Success stories section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern - decorative */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Gradient Orbs - decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          {config?.badge?.show && (
            <div
              className={`inline-flex items-center ${config.badge.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config.badge.borderColor}`}
              aria-label="Success stories badge"
            >
              {config.badge.showPulse && (
                <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
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
              All Stories
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

        {/* Main Success Stories */}
        {filteredStories.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Testimonial Content */}
            <div className="space-y-6">
              {/* Company Info */}
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {filteredStories[activeIndex].companyInitials}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {filteredStories[activeIndex].companyName}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {filteredStories[activeIndex].industry} • {filteredStories[activeIndex].location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                {renderStars(filteredStories[activeIndex].rating)}
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-500">
                  ({filteredStories[activeIndex].reviewCount} reviews)
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "{filteredStories[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <img
                    src={filteredStories[activeIndex].authorImage}
                    alt={filteredStories[activeIndex].authorName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {filteredStories[activeIndex].authorName}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {filteredStories[activeIndex].authorTitle}, {filteredStories[activeIndex].companyName}
                  </p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {filteredStories[activeIndex].metrics.map((metric, idx) => (
                  <div key={idx} className="text-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Read Full Story Link */}
              <Link
                href={filteredStories[activeIndex].link}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
              >
                <span>Read full story</span>
                <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Side - Image/Video */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={filteredStories[activeIndex].image}
                  alt={filteredStories[activeIndex].companyName}
                  className="w-full h-auto object-cover"
                />

                {/* Play Button Overlay (if video) */}
                {filteredStories[activeIndex].hasVideo && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-blue-600 ml-1"
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
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous story"
              >
                <HiOutlineChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next story"
              >
                <HiOutlineChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {filteredStories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                        ? 'w-8 bg-blue-600'
                        : 'bg-white/50 hover:bg-white'
                      }`}
                    aria-label={`Go to story ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* No Results Message */}
        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No success stories found in this category.
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
      `}</style>
    </section>
  );
};

export default SuccessStoriesSection1;