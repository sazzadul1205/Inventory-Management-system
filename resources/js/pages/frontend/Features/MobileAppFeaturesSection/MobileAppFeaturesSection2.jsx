// page/frontend/Features/MobileAppFeaturesSection/MobileAppFeaturesSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineDeviceMobile,
  HiOutlineQrcode,
  HiOutlineCamera,
  HiOutlineBell,
  HiOutlineChartBar,
  HiOutlineRefresh,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineLocationMarker,
  HiOutlineClipboardList,
  HiOutlineTruck,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineMenu
} from 'react-icons/hi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const MobileAppFeaturesSection2 = ({ config }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [scannedBarcode, setScannedBarcode] = useState('');
  const [scanResult, setScanResult] = useState(null);

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} />;
      case 'qrcode':
        return <HiOutlineQrcode className={className} />;
      case 'camera':
        return <HiOutlineCamera className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'sync':
        return <HiOutlineRefresh className={className} />;
      case 'shield':
        return <HiOutlineShieldCheck className={className} />;
      case 'users':
        return <HiOutlineUserGroup className={className} />;
      case 'location':
        return <HiOutlineLocationMarker className={className} />;
      case 'inventory':
        return <HiOutlineClipboardList className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'search':
        return <HiOutlineSearch className={className} />;
      case 'home':
        return <HiOutlineHome className={className} />;
      case 'cart':
        return <HiOutlineShoppingCart className={className} />;
      case 'user':
        return <HiOutlineUser className={className} />;
      case 'menu':
        return <HiOutlineMenu className={className} />;
      default:
        return <HiOutlineDeviceMobile className={className} />;
    }
  };

  const handleScan = () => {
    if (scannedBarcode) {
      // Simulate product lookup
      const products = {
        '8901234567890': { name: 'Wireless Headphones', price: '$89.99', stock: 245 },
        '5901234123457': { name: 'Smart Watch', price: '$199.99', stock: 128 },
        '4006381333931': { name: 'Bluetooth Speaker', price: '$59.99', stock: 312 }
      };

      const product = products[scannedBarcode];
      if (product) {
        setScanResult({
          success: true,
          product: product,
          barcode: scannedBarcode
        });
      } else {
        setScanResult({
          success: false,
          message: 'Product not found',
          barcode: scannedBarcode
        });
      }
      setScannedBarcode('');
    }
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Mobile App Features Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-200 dark:bg-orange-900/20 rounded-full filter blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-200 dark:bg-amber-900/20 rounded-full filter blur-3xl" aria-hidden="true"></div>

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
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

        {/* Split Layout: Left - Features, Right - Mobile Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Features List */}
          <div className="space-y-6">
            {config?.features?.map((feature, index) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 p-6 rounded-2xl ${activeTab === feature.id
                  ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-orange-500 dark:border-orange-400'
                  : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                onClick={() => setActiveTab(feature.id)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveTab(feature.id)}
                role="button"
                tabIndex={0}
                aria-label={`View ${feature.title} details`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${activeTab === feature.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-400 group-hover:bg-orange-200 dark:group-hover:bg-gray-600'
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
                    {activeTab === feature.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                        <ul className="space-y-2">
                          {feature.details?.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                              <HiOutlineCheckCircle className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-2 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={feature.link}
                          className="inline-flex items-center mt-4 text-orange-600 dark:text-orange-400 font-semibold hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
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

          {/* Right Side - Mobile Phone Simulator */}
          <div className="sticky top-24 flex justify-center">
            <div className="relative w-[320px] bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
              {/* Phone Frame */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>

              {/* Screen Content */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden m-1">
                {/* Status Bar */}
                <div className="bg-gray-100 dark:bg-gray-900 px-4 pt-6 pb-2 flex justify-between text-xs text-gray-600 dark:text-gray-400">
                  <span>9:41</span>
                  <span>📶 🔋 100%</span>
                </div>

                {/* App Header */}
                <div className="bg-linear-to-r from-orange-500 to-amber-500 text-white px-4 py-3">
                  <div className="flex items-center justify-between">
                    <HiOutlineMenu className="w-5 h-5" />
                    <span className="font-semibold">Inventory Pro</span>
                    <HiOutlineBell className="w-5 h-5" />
                  </div>
                </div>

                {/* Dynamic Content based on Active Tab */}
                <div className="p-4 min-h-125">
                  {activeTab === 'dashboard' && (
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">Dashboard</h3>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">245</div>
                          <div className="text-xs text-gray-600">Total Orders</div>
                        </div>
                        <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">128</div>
                          <div className="text-xs text-gray-600">Low Stock</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Today's Revenue</span>
                          <span className="font-bold text-orange-600">$1,245</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'scan' && (
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">Barcode Scanner</h3>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 text-center">
                        <div className="w-32 h-32 mx-auto border-2 border-orange-400 rounded-lg flex items-center justify-center mb-2">
                          <HiOutlineCamera className="w-12 h-12 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600">Position barcode in frame</p>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={scannedBarcode}
                          onChange={(e) => setScannedBarcode(e.target.value)}
                          placeholder="Enter barcode"
                          className="flex-1 px-3 py-2 border rounded-lg text-sm"
                        />
                        <button
                          onClick={handleScan}
                          className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm"
                        >
                          Scan
                        </button>
                      </div>
                      {scanResult && (
                        <div className={`mt-3 p-3 rounded-lg text-sm ${scanResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {scanResult.success ? (
                            <div>
                              <p className="font-semibold">✓ Product Found</p>
                              <p>{scanResult.product.name}</p>
                              <p>Price: {scanResult.product.price}</p>
                              <p>Stock: {scanResult.product.stock}</p>
                            </div>
                          ) : (
                            <p>✗ {scanResult.message}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'orders' && (
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">Recent Orders</h3>
                      <div className="space-y-2">
                        {[
                          { id: 'ORD-001', status: 'Shipped', total: '$129.99' },
                          { id: 'ORD-002', status: 'Processing', total: '$89.99' },
                          { id: 'ORD-003', status: 'Delivered', total: '$199.99' }
                        ].map((order, i) => (
                          <div key={i} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <div className="flex justify-between">
                              <span className="font-medium">{order.id}</span>
                              <span className={`text-xs px-2 py-1 rounded-full ${order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-green-100 text-green-800'
                                }`}>{order.status}</span>
                            </div>
                            <div className="flex justify-between mt-1 text-sm text-gray-600">
                              <span>{order.total}</span>
                              <button className="text-orange-500">Track →</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'inventory' && (
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">Inventory</h3>
                      <div className="space-y-2">
                        {[
                          { name: 'Wireless Headphones', stock: 245, location: 'A-12' },
                          { name: 'Smart Watch', stock: 128, location: 'B-05' },
                          { name: 'Bluetooth Speaker', stock: 312, location: 'C-08' }
                        ].map((item, i) => (
                          <div key={i} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            <div className="flex justify-between">
                              <span className="font-medium text-sm">{item.name}</span>
                              <span className="text-sm font-bold text-orange-600">{item.stock}</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">Location: {item.location}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Navigation */}
                <div className="border-t border-gray-200 dark:border-gray-700 flex justify-around py-2">
                  <button onClick={() => setActiveTab('dashboard')} className={`p-2 ${activeTab === 'dashboard' ? 'text-orange-500' : 'text-gray-400'}`}>
                    <HiOutlineHome className="w-5 h-5" />
                  </button>
                  <button onClick={() => setActiveTab('scan')} className={`p-2 ${activeTab === 'scan' ? 'text-orange-500' : 'text-gray-400'}`}>
                    <HiOutlineQrcode className="w-5 h-5" />
                  </button>
                  <button onClick={() => setActiveTab('orders')} className={`p-2 ${activeTab === 'orders' ? 'text-orange-500' : 'text-gray-400'}`}>
                    <HiOutlineShoppingCart className="w-5 h-5" />
                  </button>
                  <button onClick={() => setActiveTab('inventory')} className={`p-2 ${activeTab === 'inventory' ? 'text-orange-500' : 'text-gray-400'}`}>
                    <HiOutlineClipboardList className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Store Badges */}
        {config?.showAppBadges && (
          <div className="flex justify-center gap-4 mt-12">

            <Link
              href={config?.iosLink || "/app-store"}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg transition-transform hover:scale-105"
            >
              <FaApple className="text-xl" />
              <span className="text-xs leading-tight">
                Download on the <br /> <strong>App Store</strong>
              </span>
            </Link>

            <Link
              href={config?.androidLink || "/play-store"}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg transition-transform hover:scale-105"
            >
              <FaGooglePlay className="text-xl" />
              <span className="text-xs leading-tight">
                Get it on <br /> <strong>Google Play</strong>
              </span>
            </Link>

          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to take your operations mobile?"}
              </span>
              <div className="flex gap-3">
                <Link
                  href={config?.ctaPrimaryLink || "/download"}
                  className={`${config?.ctaButton?.primaryBackground || "bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-white`}
                >
                  {config?.ctaButton?.primaryText || "Download App"}
                  <HiOutlineDownload aria-hidden="true" />
                </Link>
                <Link
                  href={config?.ctaSecondaryLink || "/demo"}
                  className="px-6 py-3 bg-transparent border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 inline-flex items-center gap-2"
                >
                  {config?.ctaButton?.secondaryText || "Watch Demo"}
                </Link>
              </div>
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

export default MobileAppFeaturesSection2;