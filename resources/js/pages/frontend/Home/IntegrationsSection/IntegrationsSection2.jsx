// page/frontend/Home/IntegrationsSection/IntegrationsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineCloud,
  HiOutlineShoppingCart,
  HiOutlineCreditCard,
  HiOutlineMail,
  HiOutlineChartBar,
  HiOutlineDatabase,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineGlobeAlt,
  HiOutlineCog,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineSparkles
} from 'react-icons/hi';

const IntegrationsSection2 = ({ config }) => {

  // State for search and category filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Icon mapping
  const getIcon = (iconName, className = "w-8 h-8") => {
    const iconClasses = `${className} text-blue-600 dark:text-blue-400`;

    switch (iconName) {
      case 'cloud':
        return <HiOutlineCloud className={iconClasses} />;
      case 'cart':
        return <HiOutlineShoppingCart className={iconClasses} />;
      case 'credit':
        return <HiOutlineCreditCard className={iconClasses} />;
      case 'mail':
        return <HiOutlineMail className={iconClasses} />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} />;
      case 'database':
        return <HiOutlineDatabase className={iconClasses} />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} />;
      case 'cog':
        return <HiOutlineCog className={iconClasses} />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} />;
      case 'document':
        return <HiOutlineDocumentText className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  // Filter integrations based on search and category
  const filteredIntegrations = config?.integrations?.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  // Get unique categories
  const categories = ['all', ...new Set(config?.integrations?.map(i => i.category) || [])];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 L30 50 M10 30 L50 30 M20 20 L40 40 M40 20 L20 40\' stroke=\'%23999\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')] bg-size-[30px_30px]" />
      </div>

      {/* Animated Lines */}
      <div className="absolute top-40 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 shadow-lg shadow-blue-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {config?.heading?.line1}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {config?.heading?.highlighted}
            </span>
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">

          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={config?.search?.placeholder || "Search integrations..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative sm:w-48 md:w-56">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineFilter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-9 sm:pl-10 pr-8 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none w-full"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${selectedCategory === category
                ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
          {filteredIntegrations.map((integration, index) => (
            <a
              key={integration.id || index}
              href={integration.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center"
            >
              {/* Logo/Icon */}
              <div className="relative mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(integration.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7")}
                </div>

                {/* Popular Badge */}
                {integration.popular && (
                  <div className="absolute -top-1 -right-1">
                    <span className="flex h-3 w-3 sm:h-4 sm:w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-green-500" />
                    </span>
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                {integration.name}
              </h3>

              {/* Category */}
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                {integration.category}
              </p>
            </a>
          ))}
        </div>

        {/* No Results */}
        {filteredIntegrations.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              No integrations found matching your criteria.
            </p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mb-16 sm:mb-20">
          <Link
            href={config?.viewAll?.url || "/integrations"}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group text-sm sm:text-base"
          >
            <span>{config?.viewAll?.text || "Browse All Integrations"}</span>
            <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Partners */}
        {config?.partners?.show && config?.partners?.items && (
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-6 sm:mb-8">
              {config.partners.title || "Trusted Partners"}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {config.partners.items.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <span className="text-gray-400 dark:text-gray-600 font-medium text-sm sm:text-base">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* API Section with Code Sample */}
        {config?.api?.show && (
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-gray-700">

            {/* Left Content */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                {config.api.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                {config.api.description}
              </p>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {config.api.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 mr-2 sm:mr-3 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href={config.api.docsUrl}
                  className="inline-flex items-center bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group text-sm sm:text-base"
                >
                  Read API Docs
                  <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={config.api.consoleUrl}
                  className="inline-flex items-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  Try API Console
                </Link>
              </div>
            </div>

            {/* Right - Code Sample */}
            <div className="bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 overflow-x-auto">
              <pre className="text-[10px] sm:text-xs text-gray-300">
                <code>
                  {`// Example API Request
                  
const response = await fetch('https://api.example.com/v1/inventory', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`
                  }
                </code>
              </pre>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {config?.bottomCta?.show && config?.bottomCta?.text && (
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href={config.bottomCta.url}
              className="inline-flex items-center bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group text-sm sm:text-base"
              aria-label={config.bottomCta.ariaLabel || config.bottomCta.text}
            >
              {config.bottomCta.text}
              <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default IntegrationsSection2;