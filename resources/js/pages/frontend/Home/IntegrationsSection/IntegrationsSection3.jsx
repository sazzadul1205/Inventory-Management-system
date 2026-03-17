// page/frontend/Home/IntegrationsSection/IntegrationsSection3.jsx

// React
import { useState } from 'react';
import { Link } from '@inertiajs/react';

// Icons
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
  const [activeCategory, setActiveCategory] = useState('all');

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const getIcon = (iconName, className = "w-6 h-6") => {
    const iconClasses = `${className} text-amber-600 dark:text-amber-400`;

    switch (iconName) {
      case 'cloud':
        return <HiOutlineCloud className={iconClasses} aria-hidden="true" />;
      case 'cart':
        return <HiOutlineShoppingCart className={iconClasses} aria-hidden="true" />;
      case 'credit':
        return <HiOutlineCreditCard className={iconClasses} aria-hidden="true" />;
      case 'mail':
        return <HiOutlineMail className={iconClasses} aria-hidden="true" />;
      case 'chart':
        return <HiOutlineChartBar className={iconClasses} aria-hidden="true" />;
      case 'database':
        return <HiOutlineDatabase className={iconClasses} aria-hidden="true" />;
      case 'cube':
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobeAlt className={iconClasses} aria-hidden="true" />;
      case 'cog':
        return <HiOutlineCog className={iconClasses} aria-hidden="true" />;
      case 'users':
        return <HiOutlineUsers className={iconClasses} aria-hidden="true" />;
      case 'document':
        return <HiOutlineDocumentText className={iconClasses} aria-hidden="true" />;
      case 'code':
        return <HiOutlineCode className={iconClasses} aria-hidden="true" />;
      case 'terminal':
        return <HiOutlineTerminal className={iconClasses} aria-hidden="true" />;
      case 'server':
        return <HiOutlineServer className={iconClasses} aria-hidden="true" />;
      default:
        return <HiOutlineCube className={iconClasses} aria-hidden="true" />;
    }
  };

  // Filter integrations based on search and category
  const filteredIntegrations = config?.integrations?.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || integration.category === activeCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  // Get unique categories with counts
  const categories = [
    { id: 'all', name: 'All', count: config?.integrations?.length || 0 },
    ...(config?.categories || [])
  ];

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900"
      role="region"
      aria-label="Integrations section"
    >
      {/* Background Pattern - Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge with Icon */}
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-full px-4 py-2 mb-6 shadow-lg shadow-amber-500/30">
            <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">
              {config?.badge?.text || "INTEGRATIONS"}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.heading?.prefix}{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                {config?.heading?.highlightedText}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 0L300 12"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            {config?.heading?.suffix}
          </h2>

          {/* Description */}
          {config?.description && (
            <p
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              {config.description}
            </p>
          )}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiOutlineSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={config?.search?.placeholder || "Search integrations..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-lg"
            />
          </div>
        </div>

        {/* Category Sidebar and Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Categories
              </h3>

              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${activeCategory === category.id
                          ? 'bg-linear-to-r from-amber-500 to-pink-500 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${activeCategory === category.id
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
              {config?.popularTags?.show && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Popular Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {config.popularTags.items.map((tag, idx) => (
                      <button
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
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
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {activeCategory === 'all' ? 'All Integrations' : categories.find(c => c.id === activeCategory)?.name}
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({filteredIntegrations.length} tools)
                </span>
              </h3>

              {/* Sort Dropdown */}
              <select className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Most Popular</option>
                <option>Alphabetical</option>
                <option>Newest</option>
              </select>
            </div>

            {/* Integrations Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredIntegrations.map((integration, index) => (
                <div
                  key={integration.id || index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    {/* Logo/Icon */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {integration.logo ? (
                          <img src={integration.logo} alt={integration.name} className="w-10 h-10 object-contain" />
                        ) : (
                          getIcon(integration.icon, "w-8 h-8")
                        )}
                      </div>

                      {/* Verified Badge */}
                      {integration.verified && (
                        <div className="absolute -top-2 -right-2">
                          <div className="bg-green-500 rounded-full p-1">
                            <HiOutlineCheckCircle className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {integration.name}
                        </h3>

                        {/* Rating */}
                        {integration.rating && (
                          <div className="flex items-center">
                            <HiOutlineStar className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                              {integration.rating}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {integration.description}
                      </p>

                      {/* Category Tag */}
                      <div className="inline-flex items-center px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs rounded-full mb-3">
                        {integration.category}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <a
                          href={integration.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-amber-600 dark:text-amber-400 text-sm font-medium hover:text-amber-700 dark:hover:text-amber-300 group/link"
                        >
                          View Integration
                          <HiOutlineArrowRight className="ml-1 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                        </a>

                        {/* Like Button */}
                        <button className="text-gray-400 hover:text-pink-500 transition-colors">
                          <HiOutlineHeart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredIntegrations.length === 0 && (
              <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <div className="w-20 h-20 bg-linear-to-br from-amber-100 to-pink-100 dark:from-amber-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HiOutlineSearch className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  No integrations found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="inline-flex items-center px-6 py-3 bg-linear-to-r from-amber-500 to-pink-500 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-pink-600 transition-all duration-300"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Load More Button */}
            {filteredIntegrations.length > 0 && filteredIntegrations.length >= 12 && (
              <div className="text-center mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        {/* API Section */}
        {config?.api?.show && (
          <div className="mt-20 bg-linear-to-br from-amber-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <HiOutlineCode className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">API Access</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {config.api.title}
                </h3>
                <p className="text-amber-100 mb-6">
                  {config.api.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={config.api.docsUrl}
                    className="inline-flex items-center bg-white text-amber-600 px-6 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors group"
                  >
                    <HiOutlineBookOpen className="w-5 h-5 mr-2" />
                    Read Docs
                    <HiOutlineArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={config.api.consoleUrl}
                    className="inline-flex items-center bg-transparent border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors group"
                  >
                    <HiOutlineTerminal className="w-5 h-5 mr-2" />
                    Try API Console
                  </Link>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-1">100+</div>
                  <div className="text-sm text-amber-100">Endpoints</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-1">99.9%</div>
                  <div className="text-sm text-amber-100">Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-1">50ms</div>
                  <div className="text-sm text-amber-100">Response</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-amber-100">Support</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Request Integration */}
        {config?.request?.show && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full px-6 py-3">
              <span className="text-gray-700 dark:text-gray-300">
                Don't see what you need?
              </span>
              <Link
                href={config.request.url}
                className="text-amber-600 dark:text-amber-400 font-semibold hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
              >
                Request an Integration
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #9ca3af 1px, transparent 0);
          background-size: 40px 40px;
        }
        .dark .bg-dot-pattern {
          background-image: radial-gradient(circle at 1px 1px, #4b5563 1px, transparent 0);
        }
      `}</style>
    </section>
  );
};

export default IntegrationsSection3;