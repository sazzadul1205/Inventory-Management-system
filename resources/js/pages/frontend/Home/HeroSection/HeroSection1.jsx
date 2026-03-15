// page/frontend/Home/HeroSection/HeroSection1.jsx

// Icons
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import { Head, Link } from '@inertiajs/react';

const HeroSection1 = ({ config, pageConfig }) => {
  // Icon mapping
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'arrowRight':
        return <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />;
      case 'play':
        return <HiPlay className="mr-2" aria-hidden="true" />;
      default:
        return null;
    }
  };

  // Get SEO data from config
  const seo = config?.seo || {};
  const siteConfig = pageConfig?.siteConfig || {};
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : siteConfig.url || '';

  // Build structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": seo.structuredData?.["@type"] || "Product",
    "name": seo.structuredData?.name || "Sazzad Inventory & Logistics",
    "description": config?.description,
    "brand": {
      "@type": "Brand",
      "name": seo.structuredData?.brand || "Sazzad"
    },
    ...(seo.structuredData?.aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": seo.structuredData.aggregateRating.ratingValue || "4.9",
        "ratingCount": seo.structuredData.aggregateRating.ratingCount || "500",
        "bestRating": "5",
        "worstRating": "1"
      }
    }),
    "offers": {
      "@type": "Offer",
      "url": config?.buttons?.primary?.url,
      "availability": "https://schema.org/InStock"
    },
    "featureList": config?.features?.map(f => f.text).join(", ")
  };

  return (
    <>
      {/* SEO Meta Tags using Inertia's Head component */}
      <Head>
        {/* Primary Meta Tags */}
        <title>{seo.title || "Sazzad Inventory & Logistics - Streamline Your Supply Chain"}</title>
        <meta name="description" content={seo.description || config?.description} />
        <meta name="keywords" content={seo.keywords || "inventory management, logistics, supply chain, warehouse management, real-time tracking"} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title || "Sazzad Inventory & Logistics - Streamline Your Supply Chain"} />
        <meta property="og:description" content={seo.description || config?.description} />
        <meta property="og:image" content={seo.ogImage || config?.image?.src} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={siteConfig.name || "Sazzad Inventory & Logistics"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title || "Sazzad Inventory & Logistics - Streamline Your Supply Chain"} />
        <meta name="twitter:description" content={seo.description || config?.description} />
        <meta name="twitter:image" content={seo.ogImage || config?.image?.src} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={currentUrl} />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div
        className="relative bg-linear-to-r from-blue-900 to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white overflow-hidden"
        role="region"
        aria-label="Hero section - Supply Chain Management Solutions"
        itemScope
        itemType="https://schema.org/Product"
      >
        {/* Background Pattern - decorative only, hidden from screen readers */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 dark:bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 dark:bg-blue-700 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div
                className="inline-flex items-center bg-blue-800/50 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/30 dark:border-gray-700"
                aria-label="Trust indicator"
              >
                {config?.trustBadge.showPulse && (
                  <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                )}
                <span className="text-sm font-medium text-white dark:text-gray-200">
                  {config?.trustBadge.text}
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white dark:text-gray-100"
                itemProp="name"
              >
                {config?.heading.prefix}{' '}
                <span
                  className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-500 dark:from-yellow-400 dark:to-yellow-600"
                  aria-label={`${config?.heading.highlightedText} - highlighted`}
                >
                  {config?.heading.highlightedText}
                </span>{' '}
                {config?.heading.suffix}
              </h1>

              {/* Description */}
              <p
                className="text-lg md:text-xl text-blue-100 dark:text-gray-300 max-w-lg"
                itemProp="description"
              >
                {config?.description}
              </p>

              {/* Features List */}
              <div
                className="grid grid-cols-2 gap-4 py-4"
                itemProp="featureList"
                aria-label="Key features"
              >
                {config?.features.map((feature) => (
                  <div key={feature.id} className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-yellow-400 dark:text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base text-white dark:text-gray-200">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4" role="group" aria-label="Call to action buttons">
                <Link
                  href={config?.buttons.primary.url}
                  className="group bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-500 text-blue-900 dark:text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-900"
                  aria-label={`Get started with ${config?.heading.highlightedText}`}
                >
                  {config?.buttons.primary.text}
                  {getIcon(config?.buttons.primary.icon)}
                </Link>

                <Link
                  href={config?.buttons.secondary.url}
                  className="bg-transparent border-2 border-white dark:border-gray-300 hover:bg-white/10 dark:hover:bg-gray-700/50 text-white dark:text-gray-200 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                  aria-label="Watch demo video"
                >
                  {getIcon(config?.buttons.secondary.icon)}
                  {config?.buttons.secondary.text}
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-6 border-t border-blue-700/50 dark:border-gray-700">
                <div className="flex -space-x-2" aria-hidden="true">
                  {config?.trustIndicators.avatars.map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-linear-to-br from-yellow-300 to-yellow-500 dark:from-yellow-400 dark:to-yellow-600 border-2 border-blue-800 dark:border-gray-700"
                      role="img"
                      aria-label="Customer avatar"
                    ></div>
                  ))}
                </div>
                <p className="text-sm text-blue-200 dark:text-gray-400">
                  <span className="font-bold text-white dark:text-gray-200">
                    {config?.trustIndicators.stats.number}
                  </span>{' '}
                  {config?.trustIndicators.stats.text}
                </p>
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div className="relative hidden md:block" aria-label="Warehouse illustration">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                <img
                  src={config?.image.src}
                  alt={config?.image.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-blue-900/50 dark:from-gray-900/70 to-transparent" aria-hidden="true"></div>

                {/* Floating Stats Card */}
                <div
                  className="absolute bottom-6 left-6 bg-white/10 dark:bg-gray-800/80 backdrop-blur-md rounded-lg p-4 border border-white/20 dark:border-gray-700"
                  role="complementary"
                  aria-label="Live shipment status"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center" aria-hidden="true">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 dark:text-gray-300">
                        {config?.floatingCards.stats.label}
                      </p>
                      <p className="text-sm font-bold text-white dark:text-gray-100">
                        {config?.floatingCards.stats.value}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div
                  className="absolute top-6 right-6 bg-white/10 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 dark:border-gray-700"
                  role="complementary"
                  aria-label="Rating"
                >
                  <p className="text-sm font-semibold text-white dark:text-gray-100">
                    {config?.floatingCards.rating}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-20 animate-pulse" aria-hidden="true"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 animate-pulse delay-700" aria-hidden="true"></div>
            </div>
          </div>

          {/* Footer Links */}
          <nav className="absolute bottom-4 right-4 text-xs text-blue-200 dark:text-gray-500 space-x-4" aria-label="Footer navigation">
            <Link href={config?.links.privacy} className="hover:text-white dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 rounded">
              Privacy
            </Link>
            <Link href={config?.links.terms} className="hover:text-white dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 rounded">
              Terms
            </Link>
            <Link href={config?.links.contact} className="hover:text-white dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 rounded">
              Contact
            </Link>
          </nav>

          {/* Bottom Wave Effect - decorative only */}
          <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                className="fill-white dark:fill-gray-900"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection1;