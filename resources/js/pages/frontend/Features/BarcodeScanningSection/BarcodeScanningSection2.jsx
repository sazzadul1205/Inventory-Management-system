// page/frontend/Features/BarcodeScanningSection/BarcodeScanningSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
  HiOutlineQrcode,
  HiOutlineCamera,
  HiOutlineDatabase,
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineChip,
  HiOutlineDeviceMobile,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineScanner,
  HiOutlineClipboardList,
  HiOutlineTruck,
  HiOutlineLightBulb
} from 'react-icons/hi';

const BarcodeScanningSection2 = ({ config }) => {
  const [selectedFeature, setSelectedFeature] = useState('camera');
  const [scanInput, setScanInput] = useState('');
  const [scanResult, setScanResult] = useState(null);

  // Icon mapping function
  const getFeatureIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'barcode':
        return <HiOutlineQrcode className={className} />;
      case 'camera':
        return <HiOutlineCamera className={className} />;
      case 'database':
        return <HiOutlineDatabase className={className} />;
      case 'sync':
        return <HiOutlineRefresh className={className} />;
      case 'chart':
        return <HiOutlineChartBar className={className} />;
      case 'bell':
        return <HiOutlineBell className={className} />;
      case 'chip':
        return <HiOutlineChip className={className} />;
      case 'mobile':
        return <HiOutlineDeviceMobile className={className} />;
      case 'scanner':
        return <HiOutlineScanner className={className} />;
      case 'inventory':
        return <HiOutlineClipboardList className={className} />;
      case 'truck':
        return <HiOutlineTruck className={className} />;
      case 'bulb':
        return <HiOutlineLightBulb className={className} />;
      default:
        return <HiOutlineQrcode className={className} />;
    }
  };

  // Sample product database for simulation
  const productDatabase = {
    '8901234567890': { name: 'Wireless Headphones', price: '$89.99', stock: 245, location: 'Aisle 3, Bin B12' },
    '5901234123457': { name: 'Smart Watch', price: '$199.99', stock: 128, location: 'Aisle 2, Bin A05' },
    '4006381333931': { name: 'Bluetooth Speaker', price: '$59.99', stock: 312, location: 'Aisle 4, Bin C08' },
    '7891234567890': { name: 'USB-C Cable', price: '$12.99', stock: 856, location: 'Aisle 1, Bin D03' },
    '1234567890123': { name: 'Phone Case', price: '$24.99', stock: 423, location: 'Aisle 1, Bin E02' }
  };

  const handleScanSimulation = (e) => {
    e.preventDefault();
    const barcode = scanInput.trim();
    const product = productDatabase[barcode];

    if (product) {
      setScanResult({
        success: true,
        barcode: barcode,
        product: product,
        timestamp: new Date().toLocaleTimeString()
      });
    } else {
      setScanResult({
        success: false,
        barcode: barcode,
        message: 'Product not found in inventory',
        timestamp: new Date().toLocaleTimeString()
      });
    }
    setScanInput('');
  };

  const handleQuickScan = (barcode) => {
    setScanInput(barcode);
    const product = productDatabase[barcode];

    if (product) {
      setScanResult({
        success: true,
        barcode: barcode,
        product: product,
        timestamp: new Date().toLocaleTimeString()
      });
    } else {
      setScanResult({
        success: false,
        barcode: barcode,
        message: 'Product not found in inventory',
        timestamp: new Date().toLocaleTimeString()
      });
    }
    setScanInput('');
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Barcode Scanning Section"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full filter blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl" aria-hidden="true"></div>

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
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

        {/* Split Layout: Left - Features, Right - Scanner Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Features List */}
          <div className="space-y-6">
            {config?.features?.map((feature, index) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 p-6 rounded-2xl ${selectedFeature === feature.id
                    ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-cyan-500 dark:border-cyan-400'
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
                      ? 'bg-cyan-500 text-white'
                      : 'bg-cyan-100 dark:bg-gray-700 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-200 dark:group-hover:bg-gray-600'
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
                              <HiOutlineCheckCircle className="w-5 h-5 text-cyan-500 dark:text-cyan-400 mr-2 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={feature.link}
                          className="inline-flex items-center mt-4 text-cyan-600 dark:text-cyan-400 font-semibold hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
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

          {/* Right Side - Interactive Scanner Simulator */}
          <div className="sticky top-24">
            <div className="bg-linear-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Barcode Scanner Simulator</span>
              </div>

              {/* Scanner Interface */}
              <div className="space-y-6">
                {/* Camera View Simulation */}
                <div className="relative bg-black rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20"></div>
                  <div className="relative text-center">
                    <div className="w-32 h-32 border-2 border-cyan-400 rounded-lg mx-auto mb-4 relative">
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-cyan-400/20 rounded-full animate-ping"></div>
                        <HiOutlineCamera className="w-8 h-8 text-cyan-400 absolute" />
                      </div>
                    </div>
                    <p className="text-white text-sm">Position barcode in frame</p>
                  </div>
                </div>

                {/* Manual Input Form */}
                <form onSubmit={handleScanSimulation} className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Manual Barcode Entry
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={scanInput}
                      onChange={(e) => setScanInput(e.target.value)}
                      placeholder="Enter or scan barcode number"
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                    >
                      Scan
                    </button>
                  </div>
                </form>

                {/* Quick Scan Buttons */}
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Try these sample barcodes:</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(productDatabase).map((barcode, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickScan(barcode)}
                        className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors"
                      >
                        {barcode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scan Result Display */}
                {scanResult && (
                  <div className={`p-4 rounded-lg ${scanResult.success
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                    }`}>
                    <div className="flex items-start gap-3">
                      {scanResult.success ? (
                        <HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                      ) : (
                        <HiOutlineBell className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className={`text-sm font-semibold ${scanResult.success ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'
                          }`}>
                          {scanResult.success ? 'Product Found!' : 'Scan Failed'}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          Barcode: {scanResult.barcode}
                        </p>
                        {scanResult.success ? (
                          <>
                            <p className="text-sm font-medium text-gray-900 dark:text-white mt-2">
                              {scanResult.product.name}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Price: {scanResult.product.price} | Stock: {scanResult.product.stock} units
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                              Location: {scanResult.product.location}
                            </p>
                          </>
                        ) : (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                            {scanResult.message}
                          </p>
                        )}
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                          Scanned at: {scanResult.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Real-Time Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">0.2s</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Scan Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">99.9%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">50+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Formats</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Row */}
        {config?.showMetrics && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            {config?.metrics?.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{metric.description}</div>
              </div>
            ))}
          </div>
        )}

        {/* Supported Barcode Types */}
        {config?.showBarcodeTypes && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {config?.barcodeTypesTitle || "Supported Barcode Formats"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.barcodeTypesDescription || "Compatible with all major barcode standards"}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {config?.barcodeTypes?.map((type, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{type.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{type.format}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-1 bg-gray-50 dark:bg-gray-800/50 rounded-full pl-6 pr-2 py-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {config?.ctaText || "Ready to streamline your inventory operations?"}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className={`${config?.ctaButton?.backgroundColor} ${config?.ctaButton?.textColor} px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2`}
                aria-label="Start scanning now"
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

export default BarcodeScanningSection2;