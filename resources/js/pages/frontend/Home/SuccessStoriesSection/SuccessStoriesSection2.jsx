// page/frontend/Home/SuccessStoriesSection/SuccessStoriesSection2.jsx

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
  HiOutlineLocationMarker
} from 'react-icons/hi';

const SuccessStoriesSection2 = ({ config }) => {
  // State for active story (for detailed view)
  const [activeStory, setActiveStory] = useState(
    config?.stories?.[0]?.id || null
  );

  // Get active story data
  const activeStoryData = config?.stories?.find(
    story => story.id === activeStory
  ) || config?.stories?.[0];

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
      className="relative py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Success stories section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10" aria-hidden="true" />

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-2 mb-4 shadow-lg shadow-blue-500/30">
            <HiOutlineTrendingUp className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "SUCCESS STORIES"}
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

        {/* Main Content - Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Story List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Featured Stories
            </h3>
            <div className="space-y-3">
              {config?.stories?.map((story) => (
                <button
                  key={story.id}
                  onClick={() => setActiveStory(story.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${activeStory === story.id
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-[1.02]'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-100 dark:border-gray-700'
                    }`}
                  aria-label={`View story from ${story.companyName}`}
                  aria-current={activeStory === story.id ? 'true' : undefined}
                >
                  <div className="flex items-center">
                    {/* Company Logo/Initials */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-3 font-bold text-lg ${activeStory === story.id
                        ? 'bg-white/20 text-white'
                        : 'bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400'
                      }`}>
                      {story.companyInitials}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold truncate ${activeStory === story.id ? 'text-white' : 'text-gray-900 dark:text-white'
                        }`}>
                        {story.companyName}
                      </h4>
                      <p className={`text-sm truncate ${activeStory === story.id ? 'text-blue-100' : 'text-gray-500 dark:text-gray-500'
                        }`}>
                        {story.industry}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center ml-2">
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
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* Header with Company Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-4 shadow-lg">
                      {activeStoryData.companyInitials}
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                        itemProp="name"
                      >
                        {activeStoryData.companyName}
                      </h3>
                      <div className="flex items-center flex-wrap gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                          <HiOutlineLocationMarker className="w-4 h-4 mr-1" />
                          {activeStoryData.location}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-500">•</span>
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          {activeStoryData.industry}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 bg-gray-50 dark:bg-gray-700/50 px-3 py-2 rounded-lg">
                    {renderStars(activeStoryData.rating)}
                    <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {activeStoryData.rating}.0
                    </span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {activeStoryData.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6 p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                  "{activeStoryData.quote}"
                </blockquote>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Challenge */}
                  <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5">
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center">
                      <span className="w-1 h-4 bg-red-500 rounded-full mr-2" />
                      The Challenge
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activeStoryData.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-5">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center">
                      <span className="w-1 h-4 bg-green-500 rounded-full mr-2" />
                      The Solution
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activeStoryData.solution}
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-3">
                      <img
                        src={activeStoryData.authorImage}
                        alt={activeStoryData.authorName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {activeStoryData.authorName}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {activeStoryData.authorTitle}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={activeStoryData.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                  >
                    <span>Read case study</span>
                    <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
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
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40' stroke='%23999' stroke-width='0.5' fill='none' stroke-opacity='0.2' /%3E%3C/svg%3E");
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default SuccessStoriesSection2;