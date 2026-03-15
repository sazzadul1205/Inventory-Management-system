// Pages/frontend/Home/HeroSection/HeroSection3.jsx

// React
import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

// Icons
import {
  HiPlay,
  HiX,
  HiCheckCircle,
  HiLightningBolt
} from 'react-icons/hi';

const HeroSection3 = ({ config, pageConfig }) => {

  // Video modal
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Icon mapping function
  const getIcon = (iconName, className = "w-5 h-5") => {
    switch (iconName) {
      case 'lightningBolt':
        return <HiLightningBolt className={`${className} text-yellow-500 dark:text-yellow-400`} aria-hidden="true" />;
      case 'play':
        return <HiPlay className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" aria-hidden="true" />;
      default:
        return null;
    }
  };

  // Render stars for rating
  const renderStars = (count) => {
    return [...Array(count)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-yellow-400 dark:text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Get SEO data from config
  const seo = config?.seo || {};
  const siteConfig = pageConfig?.siteConfig || {};
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : siteConfig.url || '';

  // Build structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": seo.structuredData?.["@type"] || "Product",
    "name": seo.structuredData?.name || config?.brand?.name || "Sazzad Inventory & Logistics",
    "description": config?.description,
    "brand": {
      "@type": "Brand",
      "name": seo.structuredData?.brand || "Sazzad"
    },
    "offers": {
      "@type": "Offer",
      "url": config?.buttons?.primary?.url,
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "USD"
    },
    ...(seo.structuredData?.aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": seo.structuredData.aggregateRating.ratingValue || "4.9",
        "ratingCount": seo.structuredData.aggregateRating.ratingCount || "1000",
        "bestRating": "5",
        "worstRating": "1"
      }
    }),
    "featureList": config?.benefits?.map(b => b.text).join(", ")
  };

  // Video structured data for SEO
  const videoStructuredData = config?.video?.youtubeId ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": seo.videoStructuredData?.name || config?.video?.title || "Company Overview Video",
    "description": config?.description,
    "thumbnailUrl": seo.videoStructuredData?.thumbnailUrl || config?.video?.thumbnailUrl || config?.dashboard?.image?.src,
    "uploadDate": seo.videoStructuredData?.uploadDate || config?.video?.uploadDate || "2024-01-01",
    "embedUrl": seo.videoStructuredData?.embedUrl || `https://www.youtube.com/embed/${config?.video.youtubeId}`,
    "contentUrl": seo.videoStructuredData?.contentUrl || `https://www.youtube.com/watch?v=${config?.video.youtubeId}`
  } : null;

  return (
    <>
      {/* SEO Meta Tags using Inertia's Head component */}
      <Head>
        {/* Primary Meta Tags */}
        <title>{seo.title || config?.seo?.title || "Sazzad Inventory & Logistics - Your Partner in Precision Logistics"}</title>
        <meta name="description" content={seo.description || config?.seo?.description || config?.description} />
        <meta name="keywords" content={seo.keywords || "inventory management, logistics, warehouse, supply chain, last-mile delivery, real-time tracking"} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title || config?.seo?.title || "Sazzad Inventory & Logistics"} />
        <meta property="og:description" content={seo.description || config?.seo?.description || config?.description} />
        <meta property="og:image" content={seo.ogImage || config?.dashboard?.image?.src} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={siteConfig.name || "Sazzad Inventory & Logistics"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title || config?.seo?.title || "Sazzad Inventory & Logistics"} />
        <meta name="twitter:description" content={seo.description || config?.seo?.description || config?.description} />
        <meta name="twitter:image" content={seo.ogImage || config?.dashboard?.image?.src} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={currentUrl} />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {videoStructuredData && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }} />
        )}
      </Head>

      <div
        className="relative bg-linear-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen"
        role="region"
        aria-label="Hero section - Inventory and Logistics Solutions"
        itemScope
        itemType="https://schema.org/Product"
      >
        {/* Video Modal */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 dark:bg-gray-900/95"
            role="dialog"
            aria-modal="true"
            aria-label="Video player modal"
          >
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label="Close video"
              >
                <HiX className="w-8 h-8" aria-hidden="true" />
              </button>
              <div className="aspect-video bg-black dark:bg-gray-800 rounded-2xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${config?.video.youtubeId}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={config?.video.title}
                ></iframe>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Brand Highlight */}
              <div
                className={`inline-flex items-center space-x-2 ${config?.brand.backgroundColor} rounded-lg px-4 py-2 shadow-sm dark:shadow-gray-900/50`}
                aria-label="Brand highlight"
              >
                {getIcon(config?.brand.icon)}
                <span className={`text-sm font-semibold ${config?.brand.textColor}`}>
                  {config?.brand.name}
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                itemProp="name"
              >
                {config?.heading.prefix}{' '}
                <span className={`${config?.heading.highlightColor} relative`}>
                  {config?.heading.highlightedText}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    aria-hidden="true"
                  >
                    <line x1="0" y1="4" x2="200" y2="4"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeDasharray="6 6"
                      className={config?.heading.highlightColor}
                    />
                  </svg>
                </span>{' '}
                {config?.heading.suffix}
              </h1>

              {/* Description */}
              <p
                className="text-lg text-gray-600 dark:text-gray-300"
                itemProp="description"
              >
                {config?.description}
              </p>

              {/* Benefits List */}
              <div
                className="space-y-4"
                itemProp="featureList"
                aria-label="Key benefits"
              >
                {config?.benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-start space-x-3">
                    <HiCheckCircle className="w-6 h-6 text-green-500 dark:text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700 dark:text-gray-300" itemProp="feature">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="flex flex-wrap gap-4 pt-4" role="group" aria-label="Call to action buttons">
                <Link
                  href={config?.buttons.primary.url}
                  className={`${config?.buttons.primary.backgroundColor} ${config?.buttons.primary.textColor} px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  aria-label="Get started now"
                >
                  {config?.buttons.primary.text}
                </Link>

                <button
                  onClick={() => setIsVideoOpen(true)}
                  className={`flex items-center px-6 py-4 ${config?.buttons.secondary.backgroundColor} ${config?.buttons.secondary.hoverColor} ${config?.buttons.secondary.textColor} rounded-lg font-semibold transition-all duration-300 shadow-lg dark:shadow-gray-900/50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`}
                  aria-label="Watch overview video"
                >
                  {getIcon(config?.buttons.secondary.icon)}
                  {config?.buttons.secondary.text}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-6 pt-6">
                <div className="flex -space-x-2" aria-hidden="true">
                  {config?.trustBadges.avatars.map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 border-2 border-white dark:border-gray-800"
                      role="img"
                      aria-label="Customer avatar"
                    ></div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center" aria-label={`${config?.trustBadges.rating.stars} star rating`}>
                    {renderStars(config?.trustBadges.rating.stars)}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {config?.trustBadges.rating.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Interactive Dashboard Preview */}
            <div className="relative" aria-label="Dashboard preview">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                <img
                  src={config?.dashboard.image.src}
                  alt={config?.dashboard.image.alt}
                  className="w-full h-auto"
                  loading="lazy"
                  itemProp="image"
                />

                {/* Overlay Stats - decorative */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent dark:from-gray-900/80" aria-hidden="true"></div>

                {/* Live Stats Cards */}
                <div
                  className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4"
                  role="complementary"
                  aria-label="Live statistics"
                >
                  {config?.dashboard.stats.map((stat) => (
                    <div
                      key={stat.id}
                      className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-xl dark:shadow-gray-900/50"
                      itemProp="metric"
                    >
                      <p className="text-xs text-gray-500 dark:text-gray-400" itemProp="name">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white" itemProp="value">{stat.value}</p>
                      {stat.trend && (
                        <div className="flex items-center mt-1 text-xs">
                          <span className={stat.trendColor}>{stat.trend}</span>
                          <span className="text-gray-400 dark:text-gray-500 ml-1">{stat.trendLabel}</span>
                        </div>
                      )}
                      {stat.showProgressBar && (
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2" aria-hidden="true">
                          <div
                            className="bg-green-600 dark:bg-green-500 h-1.5 rounded-full"
                            style={{ width: `${stat.progressValue}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Top Right Badge */}
                <div
                  className={`absolute top-6 right-6 ${config?.dashboard.badge.backgroundColor} text-white px-4 py-2 rounded-lg shadow-lg ${config?.dashboard.badge.animation}`}
                  role="status"
                  aria-label="Live tracking status"
                >
                  <p className="text-sm font-semibold">{config?.dashboard.badge.text}</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-2xl" aria-hidden="true"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-20 blur-2xl" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection3;