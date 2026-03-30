// page/frontend/Home/EventsSection/EventsSectionSkeleton.jsx

const EventsSectionSkeleton = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          </div>

          {/* Title Skeleton */}
          <div className="space-y-3 mb-6">
            <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto" />
            <div className="h-12 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto" />
          </div>

          {/* Description Skeleton */}
          <div className="space-y-2">
            <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-5 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
          </div>
        </div>

        {/* Featured Event Skeleton */}
        <div className="mb-20">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-3xl p-8 md:p-12 h-64 animate-pulse" />
        </div>

        {/* Events Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[1, 2, 3, 4, 5, 6].map((event) => (
            <div
              key={event}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
            >
              {/* Image Skeleton */}
              <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse" />

              {/* Content Skeleton */}
              <div className="p-6">
                {/* Title Skeleton */}
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />

                {/* Location and Time Skeletons */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded mr-2 animate-pulse" />
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded mr-2 animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>

                {/* Description Skeleton */}
                <div className="space-y-2 mb-4">
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>

                {/* Footer Skeleton */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded mr-1 animate-pulse" />
                    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Skeleton */}
        <div className="mb-16">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-8 animate-pulse" />

          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4].map((category) => (
              <div
                key={category}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 min-w-30"
              >
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl mb-3 animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Skeleton */}
        <div className="text-center">
          <div className="h-14 w-48 bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default EventsSectionSkeleton;