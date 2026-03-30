// page/frontend/Home/IndustriesSection/IndustriesSectionSkeleton.jsx

const IndustriesSectionSkeleton = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          </div>

          {/* Title Skeleton */}
          <div className="space-y-3 mb-6">
            <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto" />
            <div className="h-12 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto" />
          </div>

          {/* Description Skeleton */}
          <div className="space-y-2">
            <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-5 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
            <div className="h-5 w-4/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
          </div>
        </div>

        {/* Industries Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon Skeleton */}
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-xl mb-6 animate-pulse" />

              {/* Title Skeleton */}
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 animate-pulse" />

              {/* Description Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              {/* Features Skeleton */}
              <div className="space-y-2 mb-4">
                {[1, 2, 3].map((feature) => (
                  <div key={feature} className="flex items-start">
                    <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mr-2 mt-1 animate-pulse" />
                    <div className="h-3 w-4/5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                ))}
              </div>

              {/* Link Skeleton */}
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Skeleton */}
        <div className="text-center mt-16">
          <div className="h-14 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto" />
        </div>

        {/* Trust Indicators Skeleton */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto mb-2" />
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSectionSkeleton;