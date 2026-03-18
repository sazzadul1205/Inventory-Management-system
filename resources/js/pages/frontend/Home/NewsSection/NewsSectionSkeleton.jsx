// page/frontend/Home/NewsSection/NewsSectionSkeleton.jsx

const NewsSectionSkeleton = () => {
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

        {/* Category Filter Skeleton */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
            ></div>
          ))}
        </div>

        {/* Main Content Grid Skeleton */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column Skeleton */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Article Skeleton */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Featured Image Skeleton */}
                <div className="h-64 md:h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

                {/* Featured Content Skeleton */}
                <div className="p-8 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                    <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                  <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest News List Skeleton */}
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Thumbnail Skeleton */}
                    <div className="sm:w-32 h-32 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

                    {/* Content Skeleton */}
                    <div className="flex-1 p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          {/* Type and Date */}
                          <div className="flex items-center mb-2">
                            <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded-full mr-3 animate-pulse"></div>
                            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                          </div>

                          {/* Title */}
                          <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>

                          {/* Excerpt */}
                          <div className="space-y-1">
                            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                          </div>
                        </div>

                        {/* Bookmark Button Skeleton */}
                        <div className="ml-4 w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                          <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                          <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                          <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1 space-y-8">
            {/* About Card Skeleton */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Categories Skeleton */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2 animate-pulse"></div>
                      <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Archive Skeleton */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Press Kit Skeleton */}
            <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl p-6">
              <div className="h-6 w-24 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-4"></div>
              <div className="h-10 w-32 bg-gray-300 dark:bg-gray-600 rounded-xl animate-pulse"></div>
            </div>

            {/* Media Contacts Skeleton */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
              <div className="space-y-3">
                <div>
                  <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1"></div>
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
                <div>
                  <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1"></div>
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Social Share Skeleton */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
              <div className="flex justify-center space-x-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View All Button Skeleton */}
        <div className="text-center mt-16">
          <div className="h-14 w-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsSectionSkeleton;