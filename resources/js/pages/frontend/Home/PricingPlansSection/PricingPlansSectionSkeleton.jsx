// page/frontend/Home/PricingPlansSection/PricingPlansSectionSkeleton.jsx

const PricingPlansSectionSkeleton = () => {
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

        {/* Billing Toggle Skeleton */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center space-x-4">
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Pricing Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((plan) => (
            <div
              key={plan}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700"
            >
              {/* Popular Badge Skeleton (for one card) */}
              {plan === 2 && (
                <div className="flex justify-center mb-4">
                  <div className="h-6 w-32 bg-yellow-200 dark:bg-yellow-900/30 rounded-full animate-pulse"></div>
                </div>
              )}

              {/* Plan Header Skeleton */}
              <div className="text-center mb-6">
                <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-2 animate-pulse"></div>
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
              </div>

              {/* Price Skeleton */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center">
                  <div className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded ml-2 animate-pulse"></div>
                </div>
              </div>

              {/* Features List Skeleton */}
              <div className="space-y-4 mb-8">
                {[1, 2, 3, 4, 5, 6].map((feature) => (
                  <div key={feature} className="flex items-start">
                    <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full mr-3 animate-pulse"></div>
                    <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* CTA Button Skeleton */}
              <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Enterprise Section Skeleton */}
        <div className="mt-20 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content Skeleton */}
            <div>
              <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded-full mb-4 animate-pulse"></div>
              <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>
              <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>

              {/* Features List Skeleton */}
              <div className="space-y-2 mb-8">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full mr-3 animate-pulse"></div>
                    <div className="h-4 w-48 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Link Skeleton */}
              <div className="h-5 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Right Image Skeleton */}
            <div className="bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
                <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((logo) => (
                    <div key={logo} className="h-12 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Link Skeleton */}
        <div className="text-center mt-12">
          <div className="h-5 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSectionSkeleton;