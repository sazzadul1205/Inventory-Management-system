// page/frontend/Home/ContactSection/ContactSectionSkeleton.jsx

import React from 'react';

const ContactSectionSkeleton = () => {
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

        {/* Contact Grid Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info Skeleton */}
          <div className="space-y-8">
            {/* Info Cards Grid Skeleton */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((card) => (
                <div
                  key={card}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700"
                >
                  {/* Icon Skeleton */}
                  <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4 animate-pulse"></div>

                  {/* Title Skeleton */}
                  <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>

                  {/* Description Skeleton */}
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-3 animate-pulse"></div>

                  {/* Link Skeleton */}
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Social Section Skeleton */}
            <div className="bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <div className="h-5 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-4 animate-pulse"></div>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((social) => (
                  <div key={social} className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* Map Skeleton */}
            <div className="rounded-2xl overflow-hidden h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          </div>

          {/* Right Side - Contact Form Skeleton */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            {/* Form Title Skeleton */}
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>

            {/* Form Fields Skeleton */}
            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              </div>

              {/* Email Field */}
              <div>
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              </div>

              {/* Company Field */}
              <div>
                <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              </div>

              {/* Message Field */}
              <div>
                <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                <div className="h-32 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              </div>

              {/* Submit Button Skeleton */}
              <div className="h-14 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>

              {/* Privacy Notice Skeleton */}
              <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded mx-auto mt-4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionSkeleton;