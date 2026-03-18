// page/frontend/Home/NewsletterSection/NewsletterSectionSkeleton.jsx

const NewsletterSectionSkeleton = () => {
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

        {/* Main Content Grid Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Skeleton */}
          <div className="space-y-6">
            {/* Badge Skeleton (duplicate for layout) */}
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>

            {/* Heading Skeleton */}
            <div className="space-y-3">
              <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-10 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Benefits List Skeleton */}
            <div className="space-y-3 pt-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-start">
                  <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded mr-3 animate-pulse"></div>
                  <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Social Proof Skeleton */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
                ))}
              </div>
              <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Right Content - Form Skeleton */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              {/* Form Title Skeleton */}
              <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-6 animate-pulse"></div>

              {/* Name Field Skeleton */}
              <div>
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              </div>

              {/* Email Field Skeleton */}
              <div>
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              </div>

              {/* Interests/Checkboxes Skeleton */}
              <div>
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-3 animate-pulse"></div>
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center">
                      <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded mr-3 animate-pulse"></div>
                      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button Skeleton */}
              <div className="h-14 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>

              {/* Privacy Text Skeleton */}
              <div className="h-3 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Trust Badges Skeleton */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          {[1, 2, 3, 4].map((badge) => (
            <div key={badge} className="flex items-center">
              <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded mr-2 animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSectionSkeleton;