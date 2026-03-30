// page/frontend/Home/CustomSolutionsSection/CustomSolutionsSectionSkeleton.jsx

const CustomSolutionsSectionSkeleton = () => {
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

        {/* Solutions Grid Skeleton */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[1, 2, 3, 4, 5, 6].map((solution) => (
            <div key={solution} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              {/* Icon Skeleton */}
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-6 animate-pulse" />

              {/* Title Skeleton */}
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-3 animate-pulse" />

              {/* Description Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              {/* Features List Skeleton */}
              <div className="space-y-2 mb-6">
                {[1, 2, 3].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                ))}
              </div>

              {/* Link Skeleton */}
              <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Integration Capabilities Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content Skeleton */}
          <div className="space-y-6">
            {/* Title Skeleton */}
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />

            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-5 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>

            {/* Feature Items Skeleton */}
            <div className="space-y-4">
              {[1, 2, 3].map((feature) => (
                <div key={feature} className="flex gap-3">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>

            {/* Button Skeleton */}
            <div className="h-12 w-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
          </div>

          {/* Right Content - API Showcase Skeleton */}
          <div className="relative">
            <div className="bg-linear-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl p-8">
              {/* Header Skeleton */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>

              {/* Code Examples Skeleton */}
              <div className="space-y-4 mb-8">
                {[1, 2, 3].map((example) => (
                  <div key={example} className="bg-white/10 rounded-xl p-4">
                    <div className="flex gap-2 mb-2">
                      <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </div>
                    <div className="h-3 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                ))}
              </div>

              {/* Footer Skeleton */}
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>

            {/* Floating Tech Icons Skeleton */}
            <div className="absolute -top-4 -right-4 flex gap-2">
              {[1, 2].map((icon) => (
                <div key={icon} className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
        </div>

        {/* Development Process Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-64 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-12" />

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  {/* Step Number Skeleton */}
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />

                  {/* Title Skeleton */}
                  <div className="h-5 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />

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

        {/* Technology Stack Skeleton */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12 mb-20">
          <div className="h-8 w-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((tech) => (
              <div key={tech} className="text-center">
                {/* Icon Skeleton */}
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />

                {/* Name Skeleton */}
                <div className="h-4 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse" />

                {/* Category Skeleton */}
                <div className="h-3 w-12 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Skeleton */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[1, 2].map((study) => (
            <div key={study} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Image Skeleton */}
              <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse" />

              <div className="p-6">
                {/* Description Skeleton */}
                <div className="space-y-2 mb-4">
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>

                {/* Results Grid Skeleton */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3].map((result) => (
                    <div key={result} className="text-center">
                      <div className="h-5 w-12 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse" />
                      <div className="h-3 w-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </div>
                  ))}
                </div>

                {/* Link Skeleton */}
                <div className="h-5 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner Skeleton */}
        <div className="bg-linear-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl p-12 text-center">
          {/* Title Skeleton */}
          <div className="h-8 w-64 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />

          {/* Description Skeleton */}
          <div className="space-y-2 mb-8 max-w-2xl mx-auto">
            <div className="h-5 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-5 w-5/6 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          {/* Buttons Skeleton */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="h-14 w-40 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
            <div className="h-14 w-40 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutionsSectionSkeleton;