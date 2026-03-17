// page/frontend/Home/FAQSection/FAQSectionSkeleton.jsx

import React from 'react';

const FAQSectionSkeleton = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
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

        {/* Search Bar Skeleton */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="h-14 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
        </div>

        {/* Category Tabs Skeleton */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* FAQ Accordion Skeleton */}
        <div className="space-y-4 mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Question Skeleton */}
              <div className="px-6 py-5 flex items-center justify-between">
                <div className="flex-1 pr-4">
                  <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
                <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Skeleton */}
        <div className="mt-16 text-center">
          <div className="bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
            <div className="h-8 w-64 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto mb-4 animate-pulse"></div>
            <div className="h-5 w-96 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-8 animate-pulse"></div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse"></div>
            </div>

            <div className="h-4 w-48 bg-gray-300 dark:bg-gray-700 rounded mx-auto mt-4 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionSkeleton;