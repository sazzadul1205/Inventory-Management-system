// Page/frontend/Home/HeroSection/HeroSectionSkeleton.jsx

const HeroSectionSkeleton = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content Skeleton */}
          <div className="space-y-8">
            {/* Badge Skeleton */}
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            </div>

            {/* Title Skeleton - More realistic with multiple lines */}
            <div className="space-y-3">
              <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              <div className="h-12 w-5/6 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              <div className="h-12 w-4/6 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-4/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Features Grid Skeleton */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* CTA Buttons Skeleton */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="h-14 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              <div className="h-14 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
            </div>

            {/* Trust Badges Skeleton */}
            <div className="flex items-center space-x-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Right Image Skeleton */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-125 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse">
                {/* Floating Elements Skeleton */}
                <div className="absolute bottom-6 left-6">
                  <div className="w-48 h-20 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700 animate-pulse">
                    <div className="flex items-center space-x-3 p-4">
                      <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-3 w-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                        <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6">
                  <div className="w-32 h-10 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700 animate-pulse">
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements Skeleton */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full opacity-20 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSkeleton;