// page/frontend/Home/OrderFulfillmentSection/OrderFulfillmentSection3.jsx

// React
import { Link } from '@inertiajs/react';

// Icons
import { GoPackage } from "react-icons/go";
import {
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineRefresh,
  HiOutlineDocumentText,
  HiOutlineUser,
  HiArrowRight,
  HiOutlineCash,
  HiOutlineDeviceMobile,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiOutlineStar,
  HiOutlineBell
} from 'react-icons/hi';

const OrderFulfillmentSection3 = ({ config }) => {
  // Icon mapping function
  const getIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'bag':
        return <HiOutlineShoppingBag className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'clock':
        return <HiOutlineClock className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'check':
        return <HiOutlineCheckCircle className={className} />;
      case 'refresh':
        return <HiOutlineRefresh className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'user':
        return <HiOutlineUser className={className} />;
      case 'package':
        return <GoPackage className={className} />;
      case 'cash':
        return <HiOutlineCash className={className} />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bolt':
        return <HiOutlineLightningBolt className={className} />;
      case 'globe':
        return <HiOutlineGlobe className={className} />;
      case 'star':
        return <HiOutlineStar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      default:
        return <GoPackage className={className} />;
    }
  };

  return (
    <section
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Order Fulfillment Solutions"
    >
      {/* Hero Background with Overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={config?.backgroundImage}
          alt=""
          className="w-full h-full object-cover opacity-5 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white to-white dark:via-gray-900 dark:to-gray-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Floating Elements */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full mb-8 shadow-lg">
            <HiOutlineLightningBolt className="w-4 h-4" />
            <span className="text-sm font-medium">{config?.badge}</span>
          </div>

          {/* Main Title with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
            {config?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {config?.title?.highlight}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {config?.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={config?.primaryCta?.link}
              className="group bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              {config?.primaryCta?.text}
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={config?.secondaryCta?.link}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 shadow-lg hover:shadow-xl"
            >
              {config?.secondaryCta?.text}
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-indigo-600 border-2 border-white dark:border-gray-800"
                   />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{config?.trustText}</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <HiOutlineStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{config?.ratingText}</span>
            </div>
          </div>
        </div>

        {/* Main Dashboard Preview */}
        <div className="relative mb-32">
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl" aria-hidden="true" />

          {/* Dashboard Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
            <img
              src={config?.dashboardImage}
              alt="Order Fulfillment Dashboard"
              className="w-full h-auto"
              loading="lazy"
            />

            {/* Floating Cards */}
            <div className="absolute top-8 left-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <HiOutlineCheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Today's Fulfilled</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{config?.todayFulfilled}</p>
                </div>
              </div>
            </div>

            <div className="absolute top-8 right-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 animate-float delay-1000">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <HiOutlineClock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Avg. Fulfillment</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{config?.avgFulfillment}</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-gray-200 dark:border-gray-700 animate-float delay-2000">
              <div className="flex items-center gap-6">
                {config?.liveStats?.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid with Icons */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {config?.features?.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Icon with Gradient */}
              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                {getIcon(feature.icon, "w-8 h-8 text-white")}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>

              {/* Feature List */}
              <ul className="space-y-2 mb-6">
                {feature.highlights?.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={feature.link}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group/link"
              >
                Learn more
                <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>

              {/* Decorative Number */}
              <span className="absolute top-4 right-4 text-6xl font-bold text-gray-100 dark:text-gray-800 group-hover:text-blue-100 dark:group-hover:text-blue-900/30 transition-colors duration-300">
                {String(feature.id).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        {/* Global Stats Section */}
        <div className="bg-linear-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 rounded-3xl p-12 text-white mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">{config?.globalStats?.title}</h3>
              <p className="text-gray-300 mb-8">{config?.globalStats?.description}</p>
              <Link
                href={config?.globalStats?.link}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                {config?.globalStats?.buttonText}
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {config?.globalStats?.stats?.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {config?.testimonials?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <HiOutlineStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default OrderFulfillmentSection3;