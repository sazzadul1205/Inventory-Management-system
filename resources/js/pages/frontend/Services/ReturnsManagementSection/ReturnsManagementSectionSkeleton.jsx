// page/frontend/Home/ReturnsManagementSection/ReturnsManagementSectionSkeleton.jsx

const ReturnsManagementSectionSkeleton = () => {
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
          </div>
        </div>

        {/* Stats Bar Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[1, 2, 3, 4].map((stat) => (
            <div key={stat} className="text-center">
              <div className="h-8 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
              <div className="h-4 w-24 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Process Flow Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-64 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-12" />

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  {/* Step Number Skeleton */}
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />

                  {/* Title Skeleton */}
                  <div className="h-5 w-24 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />

                  {/* Description Skeleton */}
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 w-3/4 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>

                  {/* Duration Skeleton */}
                  <div className="h-3 w-16 mx-auto mt-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Features Grid Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Dashboard Preview Skeleton */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 animate-pulse" />

              {/* Returns Stats Overlay Skeleton */}
              <div className="absolute top-4 left-4">
                <div className="w-40 h-20 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-3 w-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
                      <div className="h-5 w-20 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Processing Status Skeleton */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((stat) => (
                  <div key={stat} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-3">
                    <div className="h-3 w-12 bg-gray-300 dark:bg-gray-600 rounded mb-2 animate-pulse" />
                    <div className="h-5 w-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge Skeleton */}
            <div className="absolute -top-4 -right-4">
              <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            </div>
          </div>

          {/* Right Content - Returns Features Skeleton */}
          <div className="space-y-8">
            {/* Features Title Skeleton */}
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />

            {/* Feature Items Skeleton */}
            <div className="space-y-6">
              {[1, 2, 3, 4].map((feature) => (
                <div key={feature} className="flex gap-4">
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
              <div className="h-14 w-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* Returns Methods Skeleton */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[1, 2, 3].map((method) => (
            <div key={method} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              {/* Icon Skeleton */}
              <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-xl mb-6 animate-pulse" />

              {/* Title Skeleton */}
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-3 animate-pulse" />

              {/* Description Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              {/* Timeframe Skeleton */}
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Inspection & Restocking Skeleton */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {[1, 2].map((card) => (
            <div key={card} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              {/* Header Skeleton */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
                <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              {/* Description Skeleton */}
              <div className="space-y-2 mb-6">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              {/* Steps/Stats Skeleton */}
              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid Skeleton */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[1, 2, 3, 4].map((benefit) => (
            <div key={benefit} className="text-center">
              {/* Icon Skeleton */}
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />

              {/* Value Skeleton */}
              <div className="h-5 w-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse" />

              {/* Label Skeleton */}
              <div className="h-4 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* CTA Banner Skeleton */}
        <div className="bg-linear-to-r from-orange-600/20 to-yellow-600/20 dark:from-orange-500/20 dark:to-yellow-500/20 rounded-3xl p-12 text-center">
          {/* Title Skeleton */}
          <div className="h-8 w-64 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />

          {/* Description Skeleton */}
          <div className="space-y-2 mb-8 max-w-2xl mx-auto">
            <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-5 w-5/6 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          {/* Button Skeleton */}
          <div className="h-14 w-40 mx-auto bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ReturnsManagementSectionSkeleton;