// page/frontend/Home/SuccessStoriesSection/SuccessStoriesSectionSkeleton.jsx

const SuccessStoriesSectionSkeleton = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          </div>

          {/* Title Skeleton */}
          <div className="space-y-3 mb-6">
            <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto"></div>
            <div className="h-12 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto"></div>
          </div>

          {/* Description Skeleton */}
          <div className="space-y-2">
            <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-5 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
          </div>
        </div>

        {/* Category Filters Skeleton */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* Main Featured Story Skeleton */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Side - Image Skeleton */}
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"></div>

            {/* Navigation Dots Skeleton */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Right Side - Content Skeleton */}
          <div className="space-y-6">
            {/* Company Info Skeleton */}
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"></div>
              <div className="flex-1">
                <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Rating Skeleton */}
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              ))}
            </div>

            {/* Quote Skeleton */}
            <div className="space-y-2">
              <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Metrics Grid Skeleton */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="text-center p-3 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
                  <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-1 animate-pulse"></div>
                  <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Author & CTA Skeleton */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full mr-3 animate-pulse"></div>
                <div>
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse"></div>
                  <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Story Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Image Skeleton */}
              <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

              {/* Content Skeleton */}
              <div className="p-6">
                {/* Title & Industry Skeleton */}
                <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-3 animate-pulse"></div>

                {/* Key Result Skeleton */}
                <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700/30 rounded-xl">
                  <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-1 animate-pulse"></div>
                  <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
                </div>

                {/* Quote Preview Skeleton */}
                <div className="space-y-2 mb-4">
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>

                {/* Author & Link Skeleton */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full mr-2 animate-pulse"></div>
                    <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                  <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Skeleton */}
        <div className="text-center mt-16">
          <div className="h-14 w-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSectionSkeleton;