// page/frontend/Features/BarcodeScanningSection/BarcodeScanningSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// React Icons
import {
  HiOutlineQrcode,
  HiOutlineCamera,
  HiOutlineDatabase,
  HiOutlineRefresh,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineChip,
  HiOutlineDeviceMobile,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
  HiOutlineTruck,
  HiOutlineLightBulb
} from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import { MdOutlineScanner } from "react-icons/md";

const BarcodeScanningSection2 = ({ config }) => {

  // State variables
  const [scanInput, setScanInput] = useState('');
  const [scanResult, setScanResult] = useState(null);

  // Selected feature
  const [selectedFeature, setSelectedFeature] = useState(config?.features?.[0]?.id || 'camera');

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
        return <MdOutlineScanner className={className} />;
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
  const productDatabase = config?.sampleProducts || {
    '8901234567890': { name: 'Wireless Headphones', price: '$89.99', stock: 245, location: 'Aisle 3, Bin B12' },
    '5901234123457': { name: 'Smart Watch', price: '$199.99', stock: 128, location: 'Aisle 2, Bin A05' },
    '4006381333931': { name: 'Bluetooth Speaker', price: '$59.99', stock: 312, location: 'Aisle 4, Bin C08' },
    '7891234567890': { name: 'USB-C Cable', price: '$12.99', stock: 856, location: 'Aisle 1, Bin D03' },
    '1234567890123': { name: 'Phone Case', price: '$24.99', stock: 423, location: 'Aisle 1, Bin E02' }
  };

  // Simulate product lookup
  const handleScanSimulation = (e) => {
    e.preventDefault();
    const barcode = scanInput.trim();
    const product = productDatabase[barcode];

    if (product) {
      setScanResult({
        success: true,
        barcode,
        product,
        timestamp: new Date().toLocaleTimeString()
      });
    } else {
      setScanResult({
        success: false,
        barcode,
        message: 'Product not found in inventory',
        timestamp: new Date().toLocaleTimeString()
      });
    }
    setScanInput('');
  };

  // Simulate quick scan
  const handleQuickScan = (barcode) => {
    setScanInput(barcode);
    const product = productDatabase[barcode];

    if (product) {
      setScanResult({
        success: true,
        barcode,
        product,
        timestamp: new Date().toLocaleTimeString()
      });
    } else {
      setScanResult({
        success: false,
        barcode,
        message: 'Product not found in inventory',
        timestamp: new Date().toLocaleTimeString()
      });
    }
    setScanInput('');
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle,#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#374151_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">

          {/* Section Badge */}
          {config?.badge?.show && config?.badge?.text && (
            <div className="inline-flex items-center bg-cyan-100 dark:bg-gray-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-cyan-200 dark:border-gray-700">
              {config?.badge?.showPulse && (
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
              )}
              <span className="text-xs sm:text-sm font-medium text-cyan-700 dark:text-gray-300">
                {config.badge.text}
              </span>
            </div>
          )}

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            {config?.title?.prefix}{' '}
            <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          {config?.description && (
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {config.description}
            </p>
          )}
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Side - Features List */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {config?.features?.map((feature) => (
              <div
                key={feature.id}
                className={`group cursor-pointer transition-all duration-300 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl ${selectedFeature === feature.id
                  ? 'bg-white dark:bg-gray-800 shadow-xl border-2 border-cyan-500 dark:border-cyan-400'
                  : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                onClick={() => setSelectedFeature(feature.id)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedFeature(feature.id)}
                role="button"
                tabIndex={0}
                aria-label={`View ${feature.title} details`}
              >
                <div className="flex items-start gap-3 sm:gap-4">

                  {/* Icon */}
                  <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ${selectedFeature === feature.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-cyan-100 dark:bg-gray-700 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-200 dark:group-hover:bg-gray-600'
                    }`}>
                    {getFeatureIcon(feature.icon, "w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6")}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>

                    {/* Expanded Details - Show when active */}
                    {selectedFeature === feature.id && (
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                        <ul className="space-y-1.5 sm:space-y-2">
                          {feature.details?.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                              <HiOutlineCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500 dark:text-cyan-400 mr-1.5 sm:mr-2 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={feature.link}
                          className="inline-flex items-center mt-2 sm:mt-3 text-cyan-600 dark:text-cyan-400 font-semibold hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors text-[10px] sm:text-xs"
                        >
                          <span>Learn more</span>
                          <HiOutlineArrowRight className="ml-1 sm:ml-2" />
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
            <div className="bg-linear-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200 dark:border-gray-700 shadow-2xl">

              {/* Demo Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Barcode Scanner Simulator</span>
              </div>

              {/* Scanner Interface */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">

                {/* Camera View Simulation */}
                <div className="relative bg-black rounded-lg sm:rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20" />
                  <div className="relative text-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-2 border-cyan-400 rounded-lg mx-auto mb-3 sm:mb-4 relative">
                      <div className="absolute top-0 left-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-t-2 border-l-2 border-cyan-400" />
                      <div className="absolute top-0 right-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-t-2 border-r-2 border-cyan-400" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-b-2 border-l-2 border-cyan-400" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-b-2 border-r-2 border-cyan-400" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-cyan-400/20 rounded-full animate-ping" />
                        <HiOutlineCamera className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-8 text-cyan-400 absolute" />
                      </div>
                    </div>
                    <p className="text-white text-[10px] sm:text-xs">Position barcode in frame</p>
                  </div>
                </div>

                {/* Manual Input Form */}
                <form onSubmit={handleScanSimulation} className="space-y-2 sm:space-y-3">
                  <label className="block text-[10px] sm:text-xs font-medium text-gray-700 dark:text-gray-300">
                    Manual Barcode Entry
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={scanInput}
                      onChange={(e) => setScanInput(e.target.value)}
                      placeholder="Enter or scan barcode number"
                      className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm sm:text-base"
                    >
                      Scan
                    </button>
                  </div>
                </form>

                {/* Quick Scan Buttons */}
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-1.5 sm:mb-2">Try these sample barcodes:</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {Object.keys(productDatabase).map((barcode, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickScan(barcode)}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[10px] bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors"
                      >
                        {barcode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scan Result Display */}
                {scanResult && (
                  <div className={`p-3 sm:p-4 rounded-lg ${scanResult.success
                    ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                    }`}>
                    <div className="flex items-start gap-2 sm:gap-3">
                      {scanResult.success ? (
                        <HiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 mt-0.5" />
                      ) : (
                        <HiOutlineBell className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className={`text-[10px] sm:text-xs font-semibold ${scanResult.success ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'
                          }`}>
                          {scanResult.success ? 'Product Found!' : 'Scan Failed'}
                        </p>
                        <p className="text-[8px] sm:text-[10px] text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1">
                          Barcode: {scanResult.barcode}
                        </p>
                        {scanResult.success ? (
                          <>
                            <p className="text-[10px] sm:text-xs font-medium text-gray-900 dark:text-white mt-1 sm:mt-2">
                              {scanResult.product.name}
                            </p>
                            <p className="text-[8px] sm:text-[10px] text-gray-600 dark:text-gray-400">
                              Price: {scanResult.product.price} | Stock: {scanResult.product.stock} units
                            </p>
                            <p className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500 mt-0.5 sm:mt-1">
                              Location: {scanResult.product.location}
                            </p>
                          </>
                        ) : (
                          <p className="text-[8px] sm:text-[10px] text-red-600 dark:text-red-400 mt-0.5 sm:mt-1">
                            {scanResult.message}
                          </p>
                        )}
                        <p className="text-[6px] sm:text-[8px] text-gray-400 dark:text-gray-500 mt-1 sm:mt-2">
                          Scanned at: {scanResult.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Real-Time Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-sm sm:text-base md:text-lg font-bold text-cyan-600 dark:text-cyan-400">0.2s</div>
                    <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Scan Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-base md:text-lg font-bold text-cyan-600 dark:text-cyan-400">99.9%</div>
                    <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-base md:text-lg font-bold text-cyan-600 dark:text-cyan-400">50+</div>
                    <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">Formats</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Row */}
        {config?.showMetrics && config?.metrics && (
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {config.metrics.map((metric, index) => (
              <div key={index} className="text-center p-4 sm:p-5 md:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1 sm:mb-2">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-0.5 sm:mb-1">
                  {metric.label}
                </div>
                <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-500">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Supported Barcode Types */}
        {config?.showBarcodeTypes && config?.barcodeTypes && (
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {config?.barcodeTypesTitle || "Supported Barcode Formats"}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {config?.barcodeTypesDescription || "Compatible with all major barcode standards"}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {config.barcodeTypes.map((type, index) => (
                <div
                  key={index}
                  className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-cyan-600 dark:text-cyan-400 text-2xl sm:text-3xl mb-1 sm:mb-2">
                    {getFeatureIcon(type.icon, "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8")}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-900 dark:text-white">{type.name}</div>
                  <div className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">{type.format}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        {config?.showCta && config?.ctaText && (
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-2 sm:p-2.5 md:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-full pl-4 sm:pl-5 md:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2">
              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                {config.ctaText}
              </span>
              <Link
                href={config?.ctaLink || "/contact"}
                className="bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                aria-label="Start scanning now"
              >
                {config?.ctaButton?.text || "Get Started"}
                <HiOutlineArrowRight />
              </Link>
            </div>
          </div>
        )}
      </div>

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
      `}</style>
    </section>
  );
};

export default BarcodeScanningSection2;