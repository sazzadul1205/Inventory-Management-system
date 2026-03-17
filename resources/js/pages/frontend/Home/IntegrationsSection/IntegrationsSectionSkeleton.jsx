// page/frontend/Home/IntegrationsSection/IntegrationsSectionSkeleton.jsx

const IntegrationsSectionSkeleton = () => {
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

        {/* Stats Row Skeleton */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {[1, 2, 3, 4].map((stat) => (
            <div key={stat} className="text-center">
              <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Integrations Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div
              key={item}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon Skeleton */}
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mx-auto mb-4 animate-pulse"></div>

              {/* Name Skeleton */}
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>

              {/* Category Skeleton */}
              <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* View All Button Skeleton */}
        <div className="text-center mb-20">
          <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
        </div>

        {/* Featured Integration Skeleton */}
        <div className="bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content Skeleton */}
            <div>
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>
              <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>
              <div className="space-y-2 mb-6">
                <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>

              {/* Features List Skeleton */}
              <div className="space-y-3 mb-8">
                {[1, 2, 3].map((feature) => (
                  <div key={feature} className="flex items-start">
                    <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full mr-3 animate-pulse"></div>
                    <div className="h-4 w-48 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Buttons Skeleton */}
              <div className="flex gap-4">
                <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              </div>
            </div>

            {/* Right Image Skeleton */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-300 dark:bg-gray-700 h-64 animate-pulse"></div>

              {/* Floating Badge Skeleton */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl w-48">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse"></div>
                  <div>
                    <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Section Skeleton */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 w-96 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-6 animate-pulse"></div>
            <div className="flex justify-center gap-4">
              <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSectionSkeleton;