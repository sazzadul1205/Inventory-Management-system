// page/frontend/Home/SupplyChainConsultingSection/SupplyChainConsultingSectionSkeleton.jsx

const SupplyChainConsultingSectionSkeleton = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Skeleton */}
        <div className="max-w-3xl mx-auto text-center mb-16">
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

        {/* Value Proposition Cards Skeleton */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[1, 2, 3].map((card) => (
            <div key={card} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              {/* Icon Skeleton */}
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-6 animate-pulse"></div>

              {/* Title Skeleton */}
              <div className="h-7 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-3 animate-pulse"></div>

              {/* Description Skeleton */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Consulting Areas Grid Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content Skeleton */}
          <div className="space-y-8">
            {/* Section Title Skeleton */}
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>

            {/* Consulting Areas List Skeleton */}
            <div className="space-y-6">
              {[1, 2, 3, 4].map((area) => (
                <div key={area} className="flex gap-4">
                  {/* Icon Skeleton */}
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse shrink-0"></div>

                  {/* Content Skeleton */}
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>

                    {/* Sub-areas Tags Skeleton */}
                    <div className="flex gap-2 mt-3">
                      {[1, 2, 3].map((tag) => (
                        <div key={tag} className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button Skeleton */}
            <div className="pt-4">
              <div className="h-14 w-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
            </div>
          </div>

          {/* Right Content - Results Card Skeleton */}
          <div className="relative">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-3xl p-8 h-96 animate-pulse">
              {/* Card Content Skeleton */}
              <div className="space-y-6">
                <div className="h-7 w-40 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>

                {/* Progress Bars Skeleton */}
                {[1, 2, 3].map((bar) => (
                  <div key={bar} className="space-y-2">
                    <div className="flex justify-between">
                      <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                      <div className="h-4 w-12 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    </div>
                    <div className="h-2 w-full bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Testimonial Skeleton */}
            <div className="absolute -bottom-6 -left-6 w-64 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Methodology Section Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-64 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-12"></div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                  {/* Step Number Skeleton */}
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>

                  {/* Title Skeleton */}
                  <div className="h-5 w-24 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>

                  {/* Description Skeleton */}
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section Skeleton */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12">
          <div className="h-8 w-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((industry) => (
              <div key={industry} className="text-center">
                {/* Icon Skeleton */}
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"></div>

                {/* Label Skeleton */}
                <div className="h-4 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainConsultingSectionSkeleton;