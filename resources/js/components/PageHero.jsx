// Shared Page Hero Component

const PageHero = ({ heroData = {}, defaults = {} }) => {
  const merged = { ...defaults, ...heroData };
  const stats = heroData?.stats ?? defaults?.stats ?? [];
  const breadcrumb = { ...(defaults?.breadcrumb || {}), ...(heroData?.breadcrumb || {}) };
  const theme = { ...(defaults?.theme || {}), ...(heroData?.theme || {}) };
  const primaryCta = heroData?.primaryCta ?? defaults?.primaryCta;
  const secondaryCta = heroData?.secondaryCta ?? defaults?.secondaryCta;

  const renderCta = (cta, className, fallbackAria) => {
    if (!cta?.label) return null;
    if (cta.href) {
      return (
        <a
          href={cta.href}
          className={className}
          aria-label={cta.ariaLabel || fallbackAria}
        >
          {cta.label}
        </a>
      );
    }
    return (
      <button
        type="button"
        className={className}
        aria-label={cta.ariaLabel || fallbackAria}
      >
        {cta.label}
      </button>
    );
  };

  return (
    <section
      id={merged.sectionId}
      className={
        theme.wrapperClass ||
        "relative bg-linear-to-r from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-purple-900 text-white overflow-hidden"
      }
      aria-label={merged.ariaLabel || "Page hero section"}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className={
              theme.breadcrumbClass ||
              "flex items-center justify-center gap-2 text-sm text-indigo-100 dark:text-indigo-200 mb-6"
            }
          >
            <a
              href={breadcrumb.homeHref || "/"}
              className="hover:text-white dark:hover:text-indigo-100 transition-colors"
            >
              {breadcrumb.homeLabel || "Home"}
            </a>
            <span aria-hidden="true">&bull;</span>
            <span className="text-white dark:text-white" aria-current="page">
              {breadcrumb.currentLabel || merged.breadcrumbLabel || "Page"}
            </span>
          </nav>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {merged.title || "Page"}{" "}
            <span className={theme.highlightClass || "text-yellow-300 dark:text-yellow-400"}>
              {merged.highlightedText || "Hero"}
            </span>
          </h1>

          {/* Description */}
          <p className={theme.descriptionClass || "text-indigo-100 dark:text-indigo-200 mb-8 max-w-2xl mx-auto"}>
            {merged.description || ""}
          </p>

          {/* Stats/Highlights */}
          {stats.length > 0 && (
            <div
              className={merged.statsGridClass || "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"}
              role="list"
              aria-label={merged.statsAriaLabel || "Page statistics"}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 dark:border-white/5"
                  role="listitem"
                >
                  <div className={theme.statValueClass || "text-3xl font-bold text-yellow-300 dark:text-yellow-400 mb-1"}>
                    {stat.value}
                  </div>
                  <div className={theme.statLabelClass || "text-sm text-indigo-100 dark:text-indigo-200"}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              {renderCta(
                primaryCta,
                theme.primaryBtnClass ||
                  "px-8 py-3 bg-yellow-400 dark:bg-yellow-500 text-indigo-900 dark:text-indigo-950 font-semibold rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200",
                "Primary action"
              )}
              {renderCta(
                secondaryCta,
                theme.secondaryBtnClass ||
                  "px-8 py-3 bg-transparent border-2 border-white dark:border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-white/20 transition-colors transform hover:scale-105 duration-200",
                "Secondary action"
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto" aria-hidden="true">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            className="fill-white dark:fill-gray-900"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
