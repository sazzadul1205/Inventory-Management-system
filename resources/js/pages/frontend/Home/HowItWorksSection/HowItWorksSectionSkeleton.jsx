// page/frontend/Home/HowItWorksSection/HowItWorksSectionSkeleton.jsx

const HowItWorksSectionSkeleton = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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

        {/* Steps Grid Skeleton - For Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="relative group">
              {/* Large Background Number Skeleton */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-100 dark:bg-gray-800/30 rounded-full animate-pulse"></div>

              {/* Step Card Skeleton */}
              <div className="relative z-10 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                {/* Icon Skeleton */}
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-xl mb-6 animate-pulse"></div>

                {/* Step Number Badge Skeleton */}
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 animate-pulse"></div>

                {/* Title Skeleton */}
                <div className="h-7 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 animate-pulse"></div>

                {/* Description Skeleton */}
                <div className="space-y-2 mb-4">
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>

                {/* Duration Skeleton */}
                <div className="flex items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full mr-2 animate-pulse"></div>
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>

              {/* Connector Arrow Skeleton (hidden on mobile) */}
              {step < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Skeleton */}
        <div className="text-center mt-16">
          <div className="h-14 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto"></div>
        </div>

        {/* Highlights Section Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full shrink-0 animate-pulse"></div>
              <div className="flex-1">
                <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSectionSkeleton;