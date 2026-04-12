// page/frontend/Home/SuccessStoriesSection/SuccessStoriesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineStar,
  HiOutlineArrowRight,
  HiOutlineTrendingUp,
  HiOutlineLocationMarker
} from 'react-icons/hi';

const SuccessStoriesSection2 = ({ config }) => {
  // State for active story
  const [activeStory, setActiveStory] = useState(
    config?.stories?.[0]?.id || null
  );

  // Get active story data
  const activeStoryData = config?.stories?.find(
    story => story.id === activeStory
  ) || config?.stories?.[0];

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
              <HiOutlineTrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Left Side - Story List */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4">
              Featured Stories
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {config?.stories?.map((story) => (
                <button
                  key={story.id}
                  onClick={() => setActiveStory(story.id)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${activeStory === story.id
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-[1.02]'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-100 dark:border-gray-700'
                    }`}
                  aria-label={`View story from ${story.companyName}`}
                >
                  <div className="flex items-center">
                    {/* Logo/Initials */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3 font-bold text-base sm:text-lg ${activeStory === story.id
                        ? 'bg-white/20 text-white'
                        : 'bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400'
                      }`}>
                      {story.companyInitials}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold text-sm sm:text-base truncate ${activeStory === story.id ? 'text-white' : 'text-gray-900 dark:text-white'
                        }`}>
                        {story.companyName}
                      </h4>
                      <p className={`text-xs sm:text-sm truncate ${activeStory === story.id ? 'text-blue-100' : 'text-gray-500 dark:text-gray-500'
                        }`}>
                        {story.industry}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center ml-1 sm:ml-2">
                      {renderStars(story.rating)}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Detailed Story View */}
          <div className="lg:col-span-2">
            {activeStoryData && (
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl mr-3 sm:mr-4 shadow-lg">
                      {activeStoryData.companyInitials}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                        {activeStoryData.companyName}
                      </h3>
                      <div className="flex items-center flex-wrap gap-1 sm:gap-2">
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 flex items-center">
                          <HiOutlineLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                          {activeStoryData.location}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">•</span>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                          {activeStoryData.industry}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 bg-gray-50 dark:bg-gray-700/50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg self-start">
                    {renderStars(activeStoryData.rating)}
                    <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      {activeStoryData.rating}.0
                    </span>
                  </div>
                </div>

                {/* Key Metrics */}
                {activeStoryData.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                    {activeStoryData.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-2 sm:p-3 md:p-4 bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg sm:rounded-xl">
                        <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-0.5 sm:mb-1">
                          {metric.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Quote */}
                <blockquote className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4 sm:mb-6 p-4 sm:p-5 md:p-6 bg-gray-50 dark:bg-gray-700/30 rounded-lg sm:rounded-xl">
                  "{activeStoryData.quote}"
                </blockquote>

                {/* Challenge & Solution */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">

                  {/* Challenge */}
                  <div className="bg-red-50 dark:bg-red-900/10 rounded-lg sm:rounded-xl p-4 sm:p-5">
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                      <span className="w-1 h-3 sm:h-4 bg-red-500 rounded-full mr-2" />
                      The Challenge
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {activeStoryData.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-green-50 dark:bg-green-900/10 rounded-lg sm:rounded-xl p-4 sm:p-5">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                      <span className="w-1 h-3 sm:h-4 bg-green-500 rounded-full mr-2" />
                      The Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {activeStoryData.solution}
                    </p>
                  </div>
                </div>

                {/* Author & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-2 sm:mr-3">
                      <img
                        src={activeStoryData.authorImage}
                        alt={activeStoryData.authorName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {activeStoryData.authorName}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                        {activeStoryData.authorTitle}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={activeStoryData.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                  >
                    <span>Read case study</span>
                    <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
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
    </section>
  );
};

export default SuccessStoriesSection2;