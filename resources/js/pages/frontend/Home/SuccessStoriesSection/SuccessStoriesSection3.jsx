// page/frontend/Home/SuccessStoriesSection/SuccessStoriesSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// React Icons
import {
  HiOutlineStar,
  HiOutlineArrowRight,
  HiOutlineClock,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineHeart,
  HiOutlineShare
} from 'react-icons/hi';

const SuccessStoriesSection3 = ({ config }) => {
  // State for active story
  const [liked, setLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStory, setActiveStory] = useState(0);

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (isPlaying && config?.stories?.length) {
      interval = setInterval(() => {
        setActiveStory((prev) => (prev + 1) % config.stories.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, config?.stories?.length]);

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
              <HiOutlineHeart className="w-3 h-3 sm:w-4 sm:h-4" />
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

        {/* Featured Story */}
        {config?.stories && config.stories.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl border border-gray-100 dark:border-gray-700">

              {/* Left Side - Image */}
              <div className="relative">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl aspect-video">
                  <img
                    src={config.stories[activeStory].featuredImage}
                    alt={config.stories[activeStory].companyName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <HiOutlinePlay className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-amber-600 ml-0.5 sm:ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm flex items-center">
                    <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                    {config.stories[activeStory].videoDuration}
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 bg-white dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                  {config.stories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveStory(idx);
                        setIsPlaying(false);
                      }}
                      className={`rounded-full transition-all duration-300 ${idx === activeStory
                          ? 'w-4 sm:w-6 h-1.5 sm:h-2 bg-linear-to-r from-amber-500 to-pink-500'
                          : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                      aria-label={`Go to story ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side - Story Content */}
              <div className="space-y-4 sm:space-y-6">

                {/* Company & Industry */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-linear-to-br from-amber-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-2xl shadow-lg">
                      {config.stories[activeStory].companyInitials}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                        {config.stories[activeStory].companyName}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {config.stories[activeStory].industry}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <button
                      onClick={() => setLiked(!liked)}
                      className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Like"
                    >
                      <HiOutlineHeart className={`w-4 h-4 sm:w-5 sm:h-5 ${liked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                    </button>
                    <button
                      className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Share"
                    >
                      <HiOutlineShare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center flex-wrap gap-1">
                  {renderStars(config.stories[activeStory].rating)}
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                    ({config.stories[activeStory].reviewCount} reviews)
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{config.stories[activeStory].quote}"
                </blockquote>

                {/* Results Grid */}
                {config.stories[activeStory].results && (
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {config.stories[activeStory].results.map((result, idx) => (
                      <div key={idx} className="text-center p-2 sm:p-3 bg-linear-to-br from-amber-50 to-pink-50 dark:from-amber-900/20 dark:to-pink-900/20 rounded-lg sm:rounded-xl">
                        <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-amber-600 dark:text-amber-400">
                          {result.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Author & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-2 sm:mr-3">
                      <img
                        src={config.stories[activeStory].authorImage}
                        alt={config.stories[activeStory].authorName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                        {config.stories[activeStory].authorName}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                        {config.stories[activeStory].authorTitle}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={config.stories[activeStory].link}
                    className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium text-xs sm:text-sm hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
                  >
                    <span>Watch story</span>
                    <HiOutlineArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Auto-play Controls */}
                <div className="flex items-center justify-end space-x-1 sm:space-x-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center space-x-0.5 sm:space-x-1 px-2 sm:px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-[10px] sm:text-sm"
                  >
                    {isPlaying ? (
                      <>
                        <HiOutlinePause className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <HiOutlinePlay className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Auto</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Story Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {config?.stories?.map((story) => (
            <div
              key={story.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.companyName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                {/* Company Initials Badge */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-amber-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                  {story.companyInitials}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-0.5 sm:py-1 flex items-center space-x-0.5 sm:space-x-1 shadow-lg">
                  <HiOutlineStar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  <span className="text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                    {story.rating}.0
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                  {story.companyName}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-2 sm:mb-3">
                  {story.industry}
                </p>

                {/* Key Result */}
                {story.keyResult && (
                  <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-linear-to-br from-amber-50 to-pink-50 dark:from-amber-900/20 dark:to-pink-900/20 rounded-lg sm:rounded-xl">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-amber-600 dark:text-amber-400">
                      {story.keyResult.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                      {story.keyResult.label}
                    </div>
                  </div>
                )}

                {/* Quote Preview */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                  "{story.quotePreview}"
                </p>

                {/* Author & Link */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-1.5 sm:mr-2">
                      <img
                        src={story.authorImage}
                        alt={story.authorName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-700 dark:text-gray-300 truncate max-w-15 sm:max-w-20">
                      {story.authorName.split(' ')[0]}
                    </span>
                  </div>

                  <Link
                    href={story.link}
                    className="inline-flex items-center text-amber-600 dark:text-amber-400 text-[10px] sm:text-sm font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors group/link"
                  >
                    <span>Read more</span>
                    <HiOutlineArrowRight className="ml-0.5 sm:ml-1 w-2 h-2 sm:w-3 sm:h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

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

export default SuccessStoriesSection3;