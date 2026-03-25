// page/frontend/Features/IntegrationCapabilitiesSection/IntegrationCapabilitiesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineCloud,
  HiOutlineDatabase,
  HiOutlineRefresh,
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineLockClosed,
  HiOutlineChartBar,
  HiOutlineBell,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineServer,
  HiOutlineShare,
  HiOutlineDocumentText,
  HiOutlineTerminal,
  HiOutlinePlay,
} from 'react-icons/hi';
import { FaPlug } from "react-icons/fa";

const IntegrationCapabilitiesSection2 = ({ config }) => {
  const [selectedFeature, setSelectedFeature] = useState('api');
  const [apiEndpoint, setApiEndpoint] = useState('/api/v1/inventory');
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'cloud':
        return <HiOutlineCloud className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'sync':
        return <HiOutlineRefresh className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'code':
        return <HiOutlineCode className={className} />;
      case 'lock':
        return <HiOutlineLockClosed className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'plug':
        return <FaPlug className={className} />;
      case 'server':
        return <HiOutlineServer className={className} />;
      case 'share':
        return <HiOutlineShare className={className} />;
      case 'document':
        return <HiOutlineDocumentText className={className} />;
      case 'terminal':
        return <HiOutlineTerminal className={className} />;
      default:
        return <FaPlug className={className} />;
    }
  };

  const handleApiCall = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const responses = {
        '/api/v1/inventory': {
          status: 200,
          data: {
            products: [
              { id: 1, name: "Wireless Headphones", stock: 245, location: "WH-A-12" },
              { id: 2, name: "Smart Watch", stock: 128, location: "WH-B-05" },
              { id: 3, name: "Bluetooth Speaker", stock: 312, location: "WH-C-08" }
            ],
            total: 685,
            lastUpdated: new Date().toISOString()
          }
        },
        '/api/v1/orders': {
          status: 200,
          data: {
            orders: [
              { id: "ORD-001", status: "shipped", total: 129.99, date: "2024-01-15" },
              { id: "ORD-002", status: "processing", total: 89.99, date: "2024-01-16" },
              { id: "ORD-003", status: "delivered", total: 199.99, date: "2024-01-14" }
            ],
            totalOrders: 3
          }
        },
        '/api/v1/warehouses': {
          status: 200,
          data: {
            warehouses: [
              { id: "WH-001", name: "North America Hub", capacity: 50000, utilization: 78 },
              { id: "WH-002", name: "Europe Distribution", capacity: 35000, utilization: 65 },
              { id: "WH-003", name: "Asia Pacific Center", capacity: 45000, utilization: 82 }
            ]
          }
        }
      };
      setApiResponse(responses[apiEndpoint] || { status: 404, error: "Endpoint not found" });
      setIsLoading(false);
    }, 800);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Integration Capabilities Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-200 dark:bg-teal-900/20 rounded-full filter blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full filter blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Feature badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p
            className="text-xl text-gray-600 dark:text-gray-300"
            itemProp="description"
          >
            {config?.description}
          </p>
        </div>

        {/* Split Layout: Left - Features, Right - API Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Features List */}
          <div className="space-y-6">
            {config?.features?.map((feature, index) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 p-6 rounded-2xl ${selectedFeature === feature.id
                  ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-teal-500 dark:border-teal-400'
                  : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                onClick={() => setSelectedFeature(feature.id)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedFeature(feature.id)}
                role="button"
                tabIndex={0}
                aria-label={`View ${feature.title} details`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${selectedFeature === feature.id
                    ? 'bg-teal-500 text-white'
                    : 'bg-teal-100 dark:bg-gray-700 text-teal-600 dark:text-teal-400 group-hover:bg-teal-200 dark:group-hover:bg-gray-600'
                    }`}>
                    {getFeatureIcon(feature.icon)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>

                    {/* Expanded Details - Show when active */}
                    {selectedFeature === feature.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                        <ul className="space-y-2">
                          {feature.details?.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                              <HiOutlineCheckCircle className="w-5 h-5 text-teal-500 dark:text-teal-400 mr-2 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={feature.link}
                          className="inline-flex items-center mt-4 text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                        >
                          <span>Learn more</span>
                          <HiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Interactive API Explorer */}
          <div className="sticky top-24">
            <div className="bg-linear-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">API Explorer</span>
              </div>

              {/* API Endpoint Selector */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Endpoint
                  </label>
                  <select
                    value={apiEndpoint}
                    onChange={(e) => setApiEndpoint(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="/api/v1/inventory">GET /api/v1/inventory</option>
                    <option value="/api/v1/orders">GET /api/v1/orders</option>
                    <option value="/api/v1/warehouses">GET /api/v1/warehouses</option>
                  </select>
                </div>

                {/* Code Sample */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <HiOutlineTerminal className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-400">cURL Example</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`curl -X GET https://api.example.com${apiEndpoint} \\\n  -H "Authorization: Bearer YOUR_API_KEY"`)}
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  <pre className="text-xs text-green-400 overflow-x-auto">
                    {`curl -X GET https://api.example.com${apiEndpoint} \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                  </pre>
                </div>

                {/* Try it Button */}
                <button
                  onClick={handleApiCall}
                  disabled={isLoading}
                  className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <HiOutlinePlay className="w-4 h-4" />
                      Try it Now
                    </>
                  )}
                </button>

                {/* Response Display */}
                {apiResponse && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Response
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${apiResponse.status === 200
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                        Status: {apiResponse.status}
                      </span>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 max-h-64 overflow-auto">
                      <pre className="text-xs text-green-400 whitespace-pre-wrap">
                        {JSON.stringify(apiResponse.data || apiResponse, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}

                {/* API Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">99.99%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">&lt;100ms</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-teal-600 dark:text-teal-400">10K/min</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Rate Limit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Partners Grid */}
        {config?.showPartners && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.partnersTitle || "Trusted by Leading Platforms"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.partnersDescription || "Connect with 200+ pre-built integrations"}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {config?.integrationPartners?.map((partner, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    {partner.icon}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-medium text-center">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Metrics Row */}
        {config?.showMetrics && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            {config?.metrics?.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{metric.description}</div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-1 bg-gray-50 dark:bg-gray-800/50 rounded-full pl-6 pr-2 py-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to integrate your stack?"}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className={`${config?.ctaButton?.backgroundColor} ${config?.ctaButton?.textColor} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2`}
                aria-label="Start integrating now"
              >
                {config?.ctaButton?.text || "Get Started"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .bg-dots-pattern {
          background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .dark .bg-dots-pattern {
          background-image: radial-gradient(circle, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default IntegrationCapabilitiesSection2;