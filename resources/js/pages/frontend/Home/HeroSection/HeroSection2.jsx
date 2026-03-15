// page/frontend/Home/HeroSection/HeroSection2.jsx

// Icons
import {
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineGlobe,
  HiArrowRight
} from 'react-icons/hi';
import { Head, Link } from '@inertiajs/react';

const HeroSection2 = ({ config, pageConfig }) => {
  // Icon mapping function
  const getFeatureIcon = (iconName) => {
    const iconClasses = "w-5 h-5 mr-2 text-blue-600 dark:text-blue-400";

    switch (iconName) {
      case 'truck':
        return <HiOutlineTruck className={iconClasses} aria-hidden="true" />;
      case 'clock':
        return <HiOutlineClock className={iconClasses} aria-hidden="true" />;
      case 'globe':
        return <HiOutlineGlobe className={iconClasses} aria-hidden="true" />;
      default:
        return null;
    }
  };

  // Get primary button icon
  const getButtonIcon = (iconName) => {
    switch (iconName) {
      case 'arrowRight':
        return <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />;
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
    "@type": seo.structuredData?.["@type"] || "Organization",
    "name": seo.structuredData?.name || "Sazzad Logistics",
    "description": config?.description,
    "slogan": seo.structuredData?.slogan || "Smart Logistics for Modern Business",
    "areaServed": seo.structuredData?.areaServed || "Worldwide",
    "numberOfEmployees": seo.structuredData?.numberOfEmployees || "500+",
    "foundingDate": seo.structuredData?.foundingDate || "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    },
    "offers": {
      "@type": "Offer",
      "description": "AI-powered inventory management and real-time tracking",
      "availability": "https://schema.org/InStock",
      "url": config?.buttons?.primary?.url
    },
    ...(seo.structuredData?.aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": seo.structuredData.aggregateRating.ratingValue || "4.8",
        "ratingCount": seo.structuredData.aggregateRating.ratingCount || "1500",
        "bestRating": "5",
        "worstRating": "1"
      }
    })
  };

  return (
    <>
      {/* SEO Meta Tags using Inertia's Head component */}
      <Head>
        {/* Primary Meta Tags */}
        <title>{seo.title || "Smart Logistics for Modern Business | Sazzad Logistics"}</title>
        <meta name="description" content={seo.description || config?.description} />
        <meta name="keywords" content={seo.keywords || "AI logistics, supply chain, inventory management, real-time tracking, global logistics, express delivery"} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title || "Smart Logistics for Modern Business | Sazzad Logistics"} />
        <meta property="og:description" content={seo.description || config?.description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={siteConfig.name || "Sazzad Logistics"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title || "Smart Logistics for Modern Business | Sazzad Logistics"} />
        <meta name="twitter:description" content={seo.description || config?.description} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={currentUrl} />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div
        className="relative bg-white dark:bg-gray-900 overflow-hidden"
        role="region"
        aria-label="Hero section - Smart Logistics Solutions"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* Background Grid Pattern - decorative only */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>

        {/* Animated Lines - decorative only */}
        <div className="absolute top-20 left-0 w-40 h-40 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true"></div>
        <div className="absolute top-40 right-0 w-60 h-60 bg-yellow-200 dark:bg-yellow-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Badge */}
            <div
              className={`inline-flex items-center ${config?.badge.backgroundColor} rounded-full px-4 py-2 mb-8 border ${config?.badge.borderColor}`}
              aria-label="Global presence indicator"
            >
              {config?.badge.showPulse && (
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              )}
              <span className={`ml-2 text-sm font-medium ${config?.badge.textColor}`}>
                {config?.badge.text}
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              itemProp="name"
            >
              {config?.heading.prefix}{' '}
              <span className="relative">
                <span className={`relative z-10 bg-linear-to-r ${config?.heading.highlightGradient} bg-clip-text text-transparent`}>
                  {config?.heading.highlightedText}
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M0 0L300 12" stroke="url(#gradient)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              {config?.heading.suffix}
            </h1>

            {/* Description */}
            <p
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
              itemProp="description"
            >
              {config?.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-16" role="group" aria-label="Call to action buttons">
              <Link
                href={config?.buttons.primary.url}
                className={`group ${config?.buttons.primary.backgroundColor} ${config?.buttons.primary.hoverColor} ${config?.buttons.primary.textColor} px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                aria-label="Start free trial"
              >
                {config?.buttons.primary.text}
                {getButtonIcon(config?.buttons.primary.icon)}
              </Link>

              <Link
                href={config?.buttons.secondary.url}
                className={`${config?.buttons.secondary.backgroundColor} ${config?.buttons.secondary.borderColor} ${config?.buttons.secondary.hoverBorderColor} ${config?.buttons.secondary.textColor} font-semibold px-8 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`}
                aria-label="View pricing plans"
              >
                {config?.buttons.secondary.text}
              </Link>
            </div>

            {/* Stats Cards */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              itemProp="metrics"
              aria-label="Company statistics"
            >
              {config?.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center backdrop-blur-sm"
                  itemProp="metric"
                >
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1" itemProp="value">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400" itemProp="name">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Icons */}
            <div
              className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
              itemProp="featureList"
              aria-label="Key features"
            >
              {config?.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center text-gray-600 dark:text-gray-400"
                  itemProp="feature"
                >
                  {getFeatureIcon(feature.icon)}
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <nav
          className="absolute bottom-4 right-4 text-xs text-gray-500 dark:text-gray-500 space-x-4"
          aria-label="Footer navigation"
        >
          <Link
            href={config?.links.privacy}
            className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded"
          >
            Privacy
          </Link>
          <Link
            href={config?.links.terms}
            className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded"
          >
            Terms
          </Link>
          <Link
            href={config?.links.contact}
            className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded"
          >
            Contact
          </Link>
          <Link
            href={config?.links.blog}
            className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded"
          >
            Blog
          </Link>
        </nav>

        {/* Required CSS for animations - add to your global CSS file */}
        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .bg-grid-pattern {
            background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
            background-size: 50px 50px;
          }
          .dark .bg-grid-pattern {
            background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                              linear-gradient(to bottom, #374151 1px, transparent 1px);
          }
        `}</style>
      </div>
    </>
  );
};

export default HeroSection2;