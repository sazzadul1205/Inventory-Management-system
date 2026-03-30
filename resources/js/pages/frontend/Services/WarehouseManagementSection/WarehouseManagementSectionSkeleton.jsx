// page/frontend/Home/WarehouseManagementSection/WarehouseManagementSectionSkeleton.jsx

const WarehouseManagementSectionSkeleton = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          </div>

          {/* Title Skeleton */}
          <div className="space-y-3 mb-6">
            <div className="h-12 w-3/4 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            <div className="h-12 w-2/3 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
          </div>

          {/* Description Skeleton */}
          <div className="space-y-2">
            <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-5 w-5/6 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-5 w-4/6 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>
        </div>

        {/* Main Features Grid Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content Skeleton */}
          <div className="space-y-8">
            {/* Features Title Skeleton */}
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />

            {/* Feature Items Skeleton */}
            <div className="space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex gap-4">
                  {/* Icon Skeleton */}
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse shrink-0" />

                  {/* Text Content Skeleton */}
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button Skeleton */}
            <div className="pt-4">
              <div className="h-14 w-40 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
            </div>
          </div>

          {/* Right Content - Image Skeleton */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 animate-pulse" />

              {/* Stats Cards Skeleton */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                {[1, 2].map((stat) => (
                  <div key={stat} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4">
                    <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded mb-2 animate-pulse" />
                    <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge Skeleton */}
            <div className="absolute -top-4 -right-4">
              <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>

        {/* Key Metrics Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[1, 2, 3, 4].map((metric) => (
            <div key={metric} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
              <div className="h-8 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
              <div className="h-4 w-24 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Technology Stack Skeleton */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="h-8 w-64 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
            <div className="h-4 w-96 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((tech) => (
              <div key={tech} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
                <div className="h-4 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Skeleton */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800 animate-pulse" />
              ))}
            </div>
            <div className="h-5 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehouseManagementSectionSkeleton;