// page/frontend/Home/CareerSection/CareerSectionSkeleton.jsx

const CareerSectionSkeleton = () => {
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

        {/* Why Join Us Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-12 animate-pulse" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4 animate-pulse" />
                <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions Skeleton */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((job) => (
              <div
                key={job}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                  <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded mr-2 animate-pulse" />
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded mr-2 animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded mr-2 animate-pulse" />
                    <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>

                <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Life at Company Skeleton */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-4 animate-pulse" />
              <div className="space-y-2 mb-6">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              <div className="space-y-3 mb-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start">
                    <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded mr-3 animate-pulse" />
                    <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                ))}
              </div>

              <div className="h-12 w-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="row-span-2 h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
              <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
              <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* Perks & Benefits Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-12 animate-pulse" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((perk) => (
              <div key={perk} className="text-center">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mx-auto mb-4 animate-pulse" />
                <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-2 animate-pulse" />
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Skeleton */}
        <div className="bg-gray-200 dark:bg-gray-700 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="h-8 w-64 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-4 animate-pulse" />
            <div className="h-4 w-96 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-8 animate-pulse" />
            <div className="h-14 w-48 bg-gray-300 dark:bg-gray-600 rounded-xl mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSectionSkeleton;