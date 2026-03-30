// page/frontend/Home/SuccessStoriesSection/SuccessStoriesSection3.jsx

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
  HiOutlineTrendingUp,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineHeart,
  HiOutlineShare
} from 'react-icons/hi';

const SuccessStoriesSection3 = ({ config }) => {
  // State for active story (for featured)
  const [activeStory, setActiveStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  // Auto-play effect
  const startAutoPlay = () => {
    setIsPlaying(true);
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % (config?.stories?.length || 4));
    }, 5000);
    return () => clearInterval(interval);
  };

  const stopAutoPlay = () => {
    setIsPlaying(false);
  };

  // Icon mapping
  const getIcon = (iconName, className = "w-5 h-5") => {
    const iconClasses = `${className} text-current`;

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
      case 'trending':
        return <HiOutlineTrendingUp className={iconClasses} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      case 'location':
        return <HiOutlineLocationMarker className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineUserCircle className={iconClasses} aria-hidden="true" />;
    }
  };

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
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Success stories section"
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
            <HiOutlineHeart className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "CUSTOMER LOVE"}
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

        {/* Featured Story - Hero Layout */}
        {config?.stories && config.stories.length > 0 && (
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
              {/* Left Side - Video/Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                  <img
                    src={config.stories[activeStory].featuredImage}
                    alt={config.stories[activeStory].companyName}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <HiOutlinePlay className="w-8 h-8 text-amber-600 ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <HiOutlineClock className="w-4 h-4 mr-1" />
                    {config.stories[activeStory].videoDuration}
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                  {config.stories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveStory(idx);
                        setIsPlaying(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeStory
                          ? 'w-8 bg-linear-to-r from-amber-500 to-pink-500'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                      aria-label={`Go to story ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side - Story Content */}
              <div className="space-y-6">
                {/* Company & Industry */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-linear-to-br from-amber-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {config.stories[activeStory].companyInitials}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {config.stories[activeStory].companyName}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {config.stories[activeStory].industry}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setLiked(!liked)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Like"
                    >
                      <HiOutlineHeart className={`w-5 h-5 ${liked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                    </button>
                    <button
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Share"
                    >
                      <HiOutlineShare className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {renderStars(config.stories[activeStory].rating)}
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-500">
                    ({config.stories[activeStory].reviewCount} reviews)
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{config.stories[activeStory].quote}"
                </blockquote>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {config.stories[activeStory].results.map((result, idx) => (
                    <div key={idx} className="text-center p-3 bg-linear-to-br from-amber-50 to-pink-50 dark:from-amber-900/20 dark:to-pink-900/20 rounded-xl">
                      <div className="text-xl font-bold text-amber-600 dark:text-amber-400">
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-3">
                      <img
                        src={config.stories[activeStory].authorImage}
                        alt={config.stories[activeStory].authorName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {config.stories[activeStory].authorName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {config.stories[activeStory].authorTitle}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={config.stories[activeStory].link}
                    className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
                  >
                    <span>Watch story</span>
                    <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Auto-play Controls */}
                <div className="flex items-center justify-end space-x-2">
                  <button
                    onClick={() => {
                      if (isPlaying) {
                        stopAutoPlay();
                      } else {
                        startAutoPlay();
                      }
                    }}
                    className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                  >
                    {isPlaying ? (
                      <>
                        <HiOutlinePause className="w-4 h-4" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <HiOutlinePlay className="w-4 h-4" />
                        <span>Auto-play</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config?.stories?.map((story, index) => (
            <div
              key={story.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.companyName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                {/* Company Initials Badge */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-linear-to-br from-amber-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {story.companyInitials}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                  <HiOutlineStar className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {story.rating}.0
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {story.companyName}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                  {story.industry}
                </p>

                {/* Key Result */}
                <div className="mb-4 p-3 bg-linear-to-br from-amber-50 to-pink-50 dark:from-amber-900/20 dark:to-pink-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                    {story.keyResult.value}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {story.keyResult.label}
                  </div>
                </div>

                {/* Quote Preview */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  "{story.quotePreview}"
                </p>

                {/* Author & Link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-2">
                      <img
                        src={story.authorImage}
                        alt={story.authorName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {story.authorName.split(' ')[0]}
                    </span>
                  </div>

                  <Link
                    href={story.link}
                    className="inline-flex items-center text-amber-600 dark:text-amber-400 text-sm font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors group/link"
                  >
                    <span>Read more</span>
                    <HiOutlineArrowRight className="ml-1 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

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
      <style >{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
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

export default SuccessStoriesSection3;