// page/frontend/Home/TransportationManagementSection/TransportationManagementSectionSkeleton.jsx

const TransportationManagementSectionSkeleton = () => {
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

        {/* Main Features Grid Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content Skeleton */}
          <div className="space-y-8">
            {/* Features Title Skeleton */}
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            
            {/* Feature Items Skeleton */}
            <div className="space-y-6">
              {[1, 2, 3, 4].map((feature) => (
                <div key={feature} className="flex gap-4">
                  {/* Icon Skeleton */}
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse shrink-0" />
                  
                  {/* Text Content Skeleton */}
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button Skeleton */}
            <div className="pt-4">
              <div className="h-14 w-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
            </div>
          </div>

          {/* Right Content - Map Preview Skeleton */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              
              {/* Live Tracking Overlay Skeleton */}
              <div className="absolute top-4 left-4">
                <div className="w-32 h-10 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl animate-pulse" />
              </div>

              {/* Vehicle Stats Skeleton */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((stat) => (
                  <div key={stat} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-3">
                    <div className="h-3 w-12 bg-gray-300 dark:bg-gray-600 rounded mb-2 animate-pulse" />
                    <div className="h-5 w-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge Skeleton */}
            <div className="absolute -top-4 -right-4">
              <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>

        {/* Service Modes Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-64 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-12" />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((mode) => (
              <div key={mode} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                {/* Icon Skeleton */}
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
                
                {/* Title Skeleton */}
                <div className="h-5 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
                
                {/* Description Skeleton */}
                <div className="h-4 w-24 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Grid Skeleton */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[1, 2, 3, 4, 5, 6].map((feature) => (
            <div key={feature} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                {/* Icon Skeleton */}
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                
                {/* Title Skeleton */}
                <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
              
              {/* Description Skeleton */}
              <div className="space-y-2 mb-3">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
              
              {/* Benefit Skeleton */}
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Carrier Network Skeleton */}
        <div className="bg-linear-to-r from-blue-600/20 to-green-600/20 dark:from-blue-500/20 dark:to-green-500/20 rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              {/* Title Skeleton */}
              <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
              
              {/* Description Skeleton */}
              <div className="space-y-2 mb-6">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
              
              {/* Stats Skeleton */}
              <div className="flex flex-wrap gap-4">
                {[1, 2, 3].map((stat) => (
                  <div key={stat} className="flex items-center gap-2">
                    <div className="h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carriers Grid Skeleton */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((carrier) => (
                <div key={carrier} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="w-8 h-8 mx-auto mb-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-3 w-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportationManagementSectionSkeleton;