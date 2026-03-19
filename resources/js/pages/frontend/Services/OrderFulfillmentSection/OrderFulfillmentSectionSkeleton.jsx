// page/frontend/Home/OrderFulfillmentSection/OrderFulfillmentSectionSkeleton.jsx

const OrderFulfillmentSectionSkeleton = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          </div>

          {/* Title Skeleton */}
          <div className="space-y-3 mb-6">
            <div className="h-12 w-3/4 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
            <div className="h-12 w-2/3 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          </div>

          {/* Description Skeleton */}
          <div className="space-y-2">
            <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-5 w-5/6 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Stats Bar Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[1, 2, 3, 4].map((stat) => (
            <div key={stat} className="text-center">
              <div className="h-8 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-24 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Main Features Grid Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Process Flow Skeleton */}
          <div className="space-y-8">
            {/* Process Title Skeleton */}
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>

            {/* Process Steps Skeleton */}
            <div className="space-y-6">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex gap-4">
                  {/* Step Number Skeleton */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                    {step < 4 && (
                      <div className="absolute top-12 left-6 w-0.5 h-12 bg-gray-200 dark:bg-gray-700"></div>
                    )}
                  </div>

                  {/* Step Content Skeleton */}
                  <div className="flex-1 space-y-2 pb-6">
                    <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button Skeleton */}
            <div className="pt-4">
              <div className="h-14 w-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview Skeleton */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

              {/* Floating Stats Cards Skeleton */}
              <div className="absolute top-4 right-4">
                <div className="w-48 h-20 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                      <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((stat) => (
                  <div key={stat} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-3">
                    <div className="h-3 w-12 bg-gray-300 dark:bg-gray-600 rounded mb-2 animate-pulse"></div>
                    <div className="h-5 w-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Icon Skeleton */}
            <div className="absolute -bottom-6 -left-6">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Features Grid Skeleton */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[1, 2, 3, 4, 5, 6].map((feature) => (
            <div key={feature} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              {/* Icon Skeleton */}
              <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-xl mb-6 animate-pulse"></div>

              {/* Title Skeleton */}
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-3 animate-pulse"></div>

              {/* Description Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>

              {/* Link Skeleton */}
              <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Integration Partners Skeleton */}
        <div className="text-center">
          <div className="h-5 w-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8"></div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div key={partner} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderFulfillmentSectionSkeleton;