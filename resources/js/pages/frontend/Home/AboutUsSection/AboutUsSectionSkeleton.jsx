// page/frontend/Home/AboutUsSection/AboutUsSectionSkeleton.jsx

const AboutUsSectionSkeleton = () => {
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

        {/* Main Content - Two Column Layout Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image Skeleton */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-700 h-96 animate-pulse"></div>

            {/* Experience Badge Skeleton */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 w-32 h-32 animate-pulse"></div>
          </div>

          {/* Right Side - Content Skeleton */}
          <div className="space-y-6">
            <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>

            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Key Points List Skeleton */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[1, 2, 3, 4].map((point) => (
                <div key={point} className="flex items-start">
                  <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full mr-2 animate-pulse"></div>
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* CTA Button Skeleton */}
            <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Stats Section Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200 dark:border-gray-800">
          {[1, 2, 3, 4].map((stat) => (
            <div key={stat} className="text-center">
              <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Values Section Skeleton */}
        <div className="mt-20">
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-12 animate-pulse"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((value) => (
              <div key={value} className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto mb-4 animate-pulse"></div>
                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-3 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section Skeleton */}
        <div className="mt-20">
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-12 animate-pulse"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-4 animate-pulse"></div>
                <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSectionSkeleton;