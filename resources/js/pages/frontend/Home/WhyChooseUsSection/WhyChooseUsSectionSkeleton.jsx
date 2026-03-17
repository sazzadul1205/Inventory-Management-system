// page/frontend/Home/WhyChooseUsSection/WhyChooseUsSectionSkeleton.jsx

import React from 'react';

const WhyChooseUsSectionSkeleton = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
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

        {/* Features Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div
              key={item}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon Skeleton */}
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-xl mb-6 animate-pulse"></div>

              {/* Title Skeleton */}
              <div className="h-7 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 animate-pulse"></div>

              {/* Description Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>

              {/* Stats Skeleton */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Skeleton */}
        <div className="text-center mt-16">
          <div className="h-14 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSectionSkeleton;