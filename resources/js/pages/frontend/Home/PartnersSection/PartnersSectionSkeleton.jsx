// page/frontend/Home/PartnersSection/PartnersSectionSkeleton.jsx

const PartnersSectionSkeleton = () => {
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

        {/* Stats Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[1, 2, 3, 4].map((stat) => (
            <div key={stat} className="text-center">
              <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-2 animate-pulse" />
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
            </div>
          ))}
        </div>

        {/* Featured Partner Skeleton */}
        <div className="mb-20">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
                  <div>
                    <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>

                <div className="flex flex-wrap gap-4">
                  {[1, 2, 3].map((badge) => (
                    <div key={badge} className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                  ))}
                </div>

                <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              {/* Right Side Metrics */}
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((metric) => (
                  <div key={metric} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
                    <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-2 animate-pulse" />
                    <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
            <div
              key={partner}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              {/* Logo Skeleton */}
              <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 animate-pulse" />

              {/* Name Skeleton */}
              <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-2 animate-pulse" />

              {/* Type Skeleton */}
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-3 animate-pulse" />

              {/* Description Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
              </div>

              {/* Link Skeleton */}
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
            </div>
          ))}
        </div>

        {/* CTA Section Skeleton */}
        <div className="text-center mt-20">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="h-8 w-64 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-4 animate-pulse" />
              <div className="h-4 w-96 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-8 animate-pulse" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="h-14 w-48 bg-gray-300 dark:bg-gray-600 rounded-xl animate-pulse" />
                <div className="h-14 w-48 bg-gray-300 dark:bg-gray-600 rounded-xl animate-pulse" />
              </div>
              <div className="h-4 w-64 bg-gray-300 dark:bg-gray-600 rounded mx-auto mt-6 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Testimonials Section Skeleton */}
        <div className="mt-20">
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-12 animate-pulse" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mr-3 animate-pulse" />
                  <div>
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse" />
                    <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSectionSkeleton;