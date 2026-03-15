// page/frontend/Home/ServicesSection/ServicesSectionSkeleton.jsx

const ServicesSectionSkeleton = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
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
            <div className="h-5 w-4/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
          </div>
        </div>

        {/* Services Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((card) => (
            <div
              key={card}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 p-8"
            >
              {/* Icon Skeleton */}
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-6 animate-pulse"></div>

              {/* Title Skeleton */}
              <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 animate-pulse"></div>

              {/* Description Skeleton */}
              <div className="space-y-2 mb-6">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>

              {/* Features List Skeleton */}
              <div className="space-y-2 mb-6">
                {[1, 2, 3].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                    <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Link Skeleton */}
              <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Divider Skeleton */}
        <div className="my-16">
          <div className="h-px w-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>

        {/* CTA Skeleton */}
        <div className="bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* CTA Content Skeleton */}
            <div className="flex-1 text-center md:text-left">
              <div className="h-8 w-3/4 bg-white/30 dark:bg-gray-600/50 rounded-lg mb-2 animate-pulse mx-auto md:mx-0"></div>
              <div className="h-5 w-2/3 bg-white/30 dark:bg-gray-600/50 rounded animate-pulse mx-auto md:mx-0"></div>
            </div>

            {/* CTA Button Skeleton */}
            <div className="h-14 w-48 bg-white/50 dark:bg-gray-600/50 rounded-xl animate-pulse"></div>
          </div>
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[1, 2, 3, 4].map((stat) => (
            <div key={stat} className="text-center">
              <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto mb-2"></div>
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionSkeleton;