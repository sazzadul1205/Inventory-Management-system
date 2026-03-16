// page/frontend/Home/TestimonialsSection/TestimonialsSectionSkeleton.jsx

import React from 'react';

const TestimonialsSectionSkeleton = () => {
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

        {/* Category Filters Skeleton */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-10 w-28 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* Featured Testimonial Skeleton */}
        <div className="bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left Side Skeleton */}
            <div className="md:col-span-3 space-y-6">
              {/* Quote Icon Skeleton */}
              <div className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>

              {/* Rating Skeleton */}
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                ))}
              </div>

              {/* Testimonial Text Skeleton */}
              <div className="space-y-3">
                <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-6 w-4/5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>

              {/* Author Info Skeleton */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="flex items-center mt-1">
                    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full mr-1 animate-pulse"></div>
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Date Skeleton */}
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full mr-1 animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Right Side Skeleton */}
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                {/* Company Initials Skeleton */}
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse"></div>

                {/* Company Name Skeleton */}
                <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>

                {/* Industry Skeleton */}
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>

                {/* Key Benefit Skeleton */}
                <div className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto">
                  <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full mr-1 animate-pulse"></div>
                  <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700"
            >
              {/* Header Skeleton */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  <div>
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse"></div>
                    <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>

              {/* Company Info Skeleton */}
              <div className="mb-3">
                <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse"></div>
                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>

              {/* Quote Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>

              {/* Benefit Tag Skeleton */}
              <div className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                <div className="w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-full mr-1 animate-pulse"></div>
                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
              </div>

              {/* Footer Skeleton */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mr-1 animate-pulse"></div>
                  <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
                <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots Skeleton */}
        <div className="flex justify-center mt-8 space-x-2">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div
              key={dot}
              className={`h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse ${dot === 1 ? 'w-8' : 'w-2.5'
                }`}
            ></div>
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

export default TestimonialsSectionSkeleton;