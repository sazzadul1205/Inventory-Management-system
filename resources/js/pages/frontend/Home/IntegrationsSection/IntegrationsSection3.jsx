// page/frontend/Home/IntegrationsSection/IntegrationsSection3.jsx

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
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineCode,
  HiOutlineBookOpen,
  HiOutlineTerminal,
  HiOutlineServer
} from 'react-icons/hi';

const IntegrationsSection3 = ({ config }) => {

  // State for active category
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Icon mapping
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className} text-amber-600 dark:text-amber-400`;

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
      case 'code':
        return <HiOutlineCode className={iconClasses} />;
      case 'terminal':
        return <HiOutlineTerminal className={iconClasses} />;
      case 'server':
        return <HiOutlineServer className={iconClasses} />;
      default:
        return <HiOutlineCube className={iconClasses} />;
    }
  };

  // Filter integrations
  const filteredIntegrations = config?.integrations?.filter(integration => {
    const matchesSearch = searchQuery === '' ||
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || integration.category === activeCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All', count: config?.integrations?.length || 0 },
    ...(config?.categories || [])
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#9ca3af_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,#4b5563_1px,transparent_0)] bg-size-[40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Badge */}
          {config?.badge?.text && (
            <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-lg shadow-amber-500/30">
              <HiOutlineSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.heading?.prefix}{' '}
            <span className="bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
              {config?.heading?.highlightedText}
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
              <HiOutlineSearch className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={config?.search?.placeholder || "Search integrations..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-9 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-md"
            />
          </div>
        </div>

        {/* Category Sidebar and Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">

          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Categories
              </h3>

              <ul className="space-y-1.5 sm:space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition-all duration-200 text-sm sm:text-base ${activeCategory === category.id
                          ? 'bg-linear-to-r from-amber-500 to-pink-500 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${activeCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}>
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Popular Tags */}
              {config?.popularTags?.show && config?.popularTags?.items && (
                <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Popular Tags
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {config.popularTags.items.map((tag, idx) => (
                      <button
                        key={idx}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] sm:text-xs rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Content - Integrations Grid */}
          <div className="lg:col-span-9">

            {/* Active Category Header */}
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                {activeCategory === 'all' ? 'All Integrations' : categories.find(c => c.id === activeCategory)?.name}
                <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm font-normal text-gray-500">
                  ({filteredIntegrations.length} tools)
                </span>
              </h3>

              {/* Sort Dropdown */}
              <select className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Most Popular</option>
                <option>Alphabetical</option>
                <option>Newest</option>
              </select>
            </div>

            {/* Integrations Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {filteredIntegrations.map((integration, index) => (
                <div
                  key={integration.id || index}
                  className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">

                    {/* Logo/Icon */}
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getIcon(integration.icon, "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7")}
                      </div>

                      {/* Verified Badge */}
                      {integration.verified && (
                        <div className="absolute -top-1 -right-1">
                          <div className="bg-green-500 rounded-full p-0.5">
                            <HiOutlineCheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1 sm:mb-2">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white truncate">
                          {integration.name}
                        </h3>

                        {/* Rating */}
                        {integration.rating && (
                          <div className="flex items-center shrink-0">
                            <HiOutlineStar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                            <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 ml-0.5 sm:ml-1">
                              {integration.rating}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 line-clamp-2">
                        {integration.description}
                      </p>

                      {/* Category Tag */}
                      <div className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-[10px] sm:text-xs rounded-full mb-2 sm:mb-3">
                        {integration.category}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <a
                          href={integration.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-amber-600 dark:text-amber-400 text-[10px] sm:text-xs font-medium hover:text-amber-700 dark:hover:text-amber-300 group/link"
                        >
                          View Integration
                          <HiOutlineArrowRight className="ml-0.5 sm:ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover/link:translate-x-1 transition-transform" />
                        </a>

                        {/* Like Button */}
                        <button className="text-gray-400 hover:text-pink-500 transition-colors">
                          <HiOutlineHeart className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredIntegrations.length === 0 && (
              <div className="text-center py-10 sm:py-12 md:py-16 bg-gray-50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <HiOutlineSearch className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  No integrations found
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-lg sm:rounded-xl font-semibold hover:from-amber-600 hover:to-pink-600 transition-all duration-300 text-sm sm:text-base"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Load More Button */}
            {filteredIntegrations.length > 0 && filteredIntegrations.length >= 12 && (
              <div className="text-center mt-6 sm:mt-8">
                <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm sm:text-base">
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        {/* API Section */}
        {config?.api?.show && (
          <div className="mt-16 sm:mt-20 bg-linear-to-br from-amber-500 to-pink-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative grid md:grid-cols-2 gap-6 sm:gap-8 items-center">

              {/* Left Content */}
              <div>
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 mb-3 sm:mb-4">
                  <HiOutlineCode className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium">API Access</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {config.api.title}
                </h3>
                <p className="text-amber-100 text-sm sm:text-base mb-4 sm:mb-6">
                  {config.api.description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Link
                    href={config.api.docsUrl}
                    className="inline-flex items-center bg-white text-amber-600 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-amber-50 transition-colors group text-sm sm:text-base"
                  >
                    <HiOutlineBookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    Read Docs
                    <HiOutlineArrowRight className="ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={config.api.consoleUrl}
                    className="inline-flex items-center bg-transparent border border-white text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-colors group text-sm sm:text-base"
                  >
                    <HiOutlineTerminal className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    Try API Console
                  </Link>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">100+</div>
                  <div className="text-[10px] sm:text-xs text-amber-100">Endpoints</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">99.9%</div>
                  <div className="text-[10px] sm:text-xs text-amber-100">Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">50ms</div>
                  <div className="text-[10px] sm:text-xs text-amber-100">Response</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">24/7</div>
                  <div className="text-[10px] sm:text-xs text-amber-100">Support</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
};

export default IntegrationsSection3;