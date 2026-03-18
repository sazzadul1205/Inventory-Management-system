// page/frontend/Home/MobileAppSection/MobileAppSectionSkeleton.jsx

const MobileAppSectionSkeleton = () => {
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
          </div>
        </div>

        {/* Main Content Grid Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Skeleton */}
          <div className="space-y-6">
            {/* Badge Skeleton (duplicate for layout) */}
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>

            {/* Heading Skeleton */}
            <div className="space-y-3">
              <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-10 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Features Grid Skeleton */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[1, 2, 3, 4, 5, 6].map((feature) => (
                <div key={feature} className="flex items-start">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg mr-3 animate-pulse"></div>
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* App Buttons Skeleton */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="h-14 w-36 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              <div className="h-14 w-36 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
            </div>

            {/* QR Code Skeleton */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup Skeleton */}
          <div className="relative">
            <div className="relative mx-auto max-w-75">
              {/* Phone Frame Skeleton */}
              <div className="relative bg-gray-200 dark:bg-gray-700 rounded-[40px] p-3 shadow-2xl">
                <div className="bg-gray-300 dark:bg-gray-600 rounded-4xl h-150 animate-pulse"></div>

                {/* Dynamic Island Skeleton */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"></div>
              </div>

              {/* Floating Screenshots Skeleton */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse hidden lg:block"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse hidden lg:block"></div>

              {/* Rating Badge Skeleton */}
              <div className="absolute -bottom-6 -left-6 bg-gray-200 dark:bg-gray-700 rounded-2xl p-4 w-32 h-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Stats Section Skeleton */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          {[1, 2, 3, 4].map((stat) => (
            <div key={stat} className="text-center">
              <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppSectionSkeleton;