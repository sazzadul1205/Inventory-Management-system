// page/frontend/Home/GlobalPresenceSection/GlobalPresenceSectionSkeleton.jsx

const GlobalPresenceSectionSkeleton = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
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
          </div>
        </div>

        {/* World Map Skeleton */}
        <div className="relative mb-20">
          <div className="relative mx-auto max-w-4xl">
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />

            {/* Location Pins Skeleton */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
            <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
            <div className="absolute top-2/3 left-3/4 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[1, 2, 3, 4].map((stat) => (
            <div key={stat} className="text-center">
              <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-2 animate-pulse" />
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
            </div>
          ))}
        </div>

        {/* Regions Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[1, 2, 3, 4].map((region) => (
            <div
              key={region}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              {/* Icon Skeleton */}
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-4 animate-pulse" />

              {/* Name Skeleton */}
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />

              {/* Details Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded mr-2 animate-pulse" />
                  <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded mr-2 animate-pulse" />
                  <div className="h-4 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded mr-2 animate-pulse" />
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>

              {/* Footer Skeleton */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Offices List Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-8 animate-pulse" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((office) => (
              <div
                key={office}
                className="flex items-start p-4 bg-gray-100 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg mr-3 shrink-0 animate-pulse" />
                <div className="flex-1">
                  <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse" />
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Skeleton */}
        <div className="bg-gray-200 dark:bg-gray-700 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="h-8 w-64 bg-gray-300 dark:bg-gray-600 rounded mb-4 animate-pulse" />
              <div className="h-4 w-96 bg-gray-300 dark:bg-gray-600 rounded mb-6 animate-pulse" />
              <div className="h-12 w-40 bg-gray-300 dark:bg-gray-600 rounded-xl animate-pulse" />
            </div>
            <div className="lg:w-80 bg-gray-300 dark:bg-gray-600 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="text-center">
                    <div className="h-8 w-16 bg-gray-400 dark:bg-gray-500 rounded mx-auto mb-2 animate-pulse" />
                    <div className="h-3 w-12 bg-gray-400 dark:bg-gray-500 rounded mx-auto animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSectionSkeleton;