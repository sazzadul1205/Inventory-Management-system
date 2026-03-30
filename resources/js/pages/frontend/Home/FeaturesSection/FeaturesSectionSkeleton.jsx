// page/frontend/Home/FeaturesSection/FeaturesSectionSkeleton.jsx

const FeaturesSectionSkeleton = () => {
  return (
    <section className="w-full bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        {/* Section Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          {/* Badge Skeleton */}
          <div className="flex justify-center mb-4">
            <div className="h-8 w-28 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          </div>

          {/* Title Skeleton */}
          <div className="space-y-3 mb-4">
            <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto" />
            <div className="h-10 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto" />
          </div>

          {/* Description Skeleton */}
          <div className="space-y-2 max-w-2xl mx-auto">
            <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-5 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
            <div className="h-5 w-4/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
          </div>
        </div>

        {/* Features Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <div
              key={card}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon Skeleton */}
              <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4 animate-pulse" />

              {/* Title Skeleton */}
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 animate-pulse" />

              {/* Description Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              {/* Stats Skeleton */}
              <div className="flex justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mr-1" />
                  <div className="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mr-1" />
                  <div className="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Skeleton */}
        <div className="px-4 mt-16 sm:mt-20 md:mt-24 lg:mt-28">
          <div className="bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 sm:p-10 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* CTA Text Skeleton */}
              <div className="text-center md:text-left flex-1">
                <div className="h-8 w-3/4 bg-white/50 dark:bg-gray-600/50 rounded-lg mb-2 animate-pulse mx-auto md:mx-0" />
                <div className="h-5 w-2/3 bg-white/50 dark:bg-gray-600/50 rounded animate-pulse mx-auto md:mx-0" />
              </div>

              {/* CTA Button Skeleton */}
              <div className="h-12 w-40 bg-white/50 dark:bg-gray-600/50 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>

        {/* Divider Skeleton */}
        <div className="px-4 mt-12 sm:mt-16 md:mt-20">
          <div className="h-px w-full bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 mt-8 sm:mt-12 md:mt-16">
          {[1, 2, 3, 4].map((stat) => (
            <div key={stat} className="text-center">
              <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto mb-2" />
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionSkeleton;