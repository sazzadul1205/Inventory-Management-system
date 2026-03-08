import { HiArrowRight, HiPlay } from 'react-icons/hi';

const HeroSection1 = () => {
  return (
    <div className="relative bg-linear-to-r from-blue-900 to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 dark:bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 dark:bg-blue-700 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-blue-800/50 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/30 dark:border-gray-700">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-medium text-white dark:text-gray-200">Trusted by 500+ Businesses</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white dark:text-gray-100">
              Streamline Your{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-500 dark:from-yellow-400 dark:to-yellow-600">
                Supply Chain
              </span>{' '}
              with Sazzad
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-blue-100 dark:text-gray-300 max-w-lg">
              End-to-end inventory management and logistics solutions that drive efficiency, reduce costs, and accelerate your business growth.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-white dark:text-gray-200">Real-time Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-white dark:text-gray-200">Warehouse Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-white dark:text-gray-200">Express Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-white dark:text-gray-200">Inventory Optimization</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-500 text-blue-900 dark:text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                Get Started
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="bg-transparent border-2 border-white dark:border-gray-300 hover:bg-white/10 dark:hover:bg-gray-700/50 text-white dark:text-gray-200 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center">
                <HiPlay className="mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6 border-t border-blue-700/50 dark:border-gray-700">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-linear-to-br from-yellow-300 to-yellow-500 dark:from-yellow-400 dark:to-yellow-600 border-2 border-blue-800 dark:border-gray-700"
                  ></div>
                ))}
              </div>
              <p className="text-sm text-blue-200 dark:text-gray-400">
                <span className="font-bold text-white dark:text-gray-200">10,000+</span> shipments delivered
              </p>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Logistics Warehouse"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-blue-900/50 dark:from-gray-900/70 to-transparent"></div>

              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 bg-white/10 dark:bg-gray-800/80 backdrop-blur-md rounded-lg p-4 border border-white/20 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 dark:text-gray-300">Live Shipment</p>
                    <p className="text-sm font-bold text-white dark:text-gray-100">Delivered in 2h</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/10 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 dark:border-gray-700">
                <p className="text-sm font-semibold text-white dark:text-gray-100">⭐ 4.9/5 Rating</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 animate-pulse delay-700"></div>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-white dark:fill-gray-900"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;