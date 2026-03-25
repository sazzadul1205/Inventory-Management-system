// resources/js/components/SectionSkeleton.jsx

// ============================================
// UTILITIES & HELPERS
// ============================================

const generateItems = (count) => Array.from({ length: count });

// Enhanced Shimmer Effect Component with reduced motion support
const Shimmer = ({ className = "" }) => (
  <div
    className={`absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] motion-reduce:animate-none bg-linear-to-r from-transparent via-white/20 to-transparent ${className}`}
    aria-hidden="true"
  />
);

// ============================================
// SECTION HEADER PARTS
// ============================================

export const SectionBadge = ({ className = "" }) => (
  <div className={`flex justify-center mb-6 ${className}`}>
    <div className="relative">
      <div className="h-8 w-32 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full animate-pulse" />
      <Shimmer className="h-8 w-32 rounded-full" />
    </div>
  </div>
);

export const SectionTitle = ({ className = "" }) => (
  <div className={`space-y-4 mb-6 ${className}`}>
    <div className="relative">
      <div className="h-14 w-3/4 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
      <Shimmer className="h-14 w-3/4 mx-auto rounded-xl" />
    </div>
    <div className="relative">
      <div className="h-14 w-2/3 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
      <Shimmer className="h-14 w-2/3 mx-auto rounded-xl" />
    </div>
  </div>
);

export const SectionDescription = ({ className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    <div className="relative">
      <div className="h-5 w-full bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-5 w-full rounded" />
    </div>
    <div className="relative">
      <div className="h-5 w-5/6 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-5 w-5/6 mx-auto rounded" />
    </div>
  </div>
);

export const SectionHeader = ({
  showBadge = true,
  showTitle = true,
  showDescription = true,
  className = ""
}) => (
  <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
    {showBadge && <SectionBadge />}
    {showTitle && <SectionTitle />}
    {showDescription && <SectionDescription />}
  </div>
);

// ============================================
// STATS & METRICS PARTS
// ============================================

export const StatCard = ({ className = "" }) => (
  <div className={`text-center group ${className}`}>
    <div className="relative inline-block">
      <div className="h-12 w-24 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse mb-3" />
      <Shimmer className="h-12 w-24 mx-auto rounded-xl" />
    </div>
    <div className="relative">
      <div className="h-4 w-28 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-4 w-28 mx-auto rounded" />
    </div>
  </div>
);

export const StatsBar = ({ count = 4, className = "" }) => (
  <div
    className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${className}`}
    role="list"
    aria-label="Statistics loading"
  >
    {generateItems(count).map((_, idx) => (
      <div key={idx} role="listitem">
        <StatCard />
      </div>
    ))}
  </div>
);

export const MetricCard = ({ className = "" }) => (
  <div className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center ${className}`}>
    <div className="relative inline-block mb-2">
      <div className="h-8 w-20 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-8 w-20 mx-auto rounded" />
    </div>
    <div className="relative">
      <div className="h-4 w-24 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-4 w-24 mx-auto rounded" />
    </div>
  </div>
);

export const MetricsGrid = ({ count = 4, className = "" }) => (
  <div
    className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 ${className}`}
    role="list"
    aria-label="Metrics loading"
  >
    {generateItems(count).map((_, idx) => (
      <div key={idx} role="listitem">
        <MetricCard />
      </div>
    ))}
  </div>
);

// ============================================
// CARD COMPONENTS (Multiple Variants)
// ============================================

// Variant 1: Service Card (with icon, title, description, features, link)
export const ServiceCard = ({ className = "" }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
    {/* Icon */}
    <div className="relative mb-6">
      <div className="w-16 h-16 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
      <Shimmer className="w-16 h-16 rounded-xl" />
    </div>

    {/* Title */}
    <div className="relative mb-3">
      <div className="h-6 w-3/4 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-6 w-3/4 rounded" />
    </div>

    {/* Description */}
    <div className="space-y-2 mb-6">
      <div className="relative">
        <div className="h-4 w-full bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="h-4 w-full rounded" />
      </div>
      <div className="relative">
        <div className="h-4 w-5/6 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="h-4 w-5/6 rounded" />
      </div>
    </div>

    {/* Features List */}
    <div className="space-y-3 mb-6">
      {generateItems(3).map((_, i) => (
        <div key={i} className="flex items-start gap-2">
          <div className="relative shrink-0 mt-1">
            <div className="w-4 h-4 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full animate-pulse" />
            <Shimmer className="w-4 h-4 rounded-full" />
          </div>
          <div className="relative flex-1">
            <div className="h-4 w-32 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
            <Shimmer className="h-4 w-32 rounded" />
          </div>
        </div>
      ))}
    </div>

    {/* Link */}
    <div className="relative">
      <div className="h-5 w-24 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-5 w-24 rounded" />
    </div>
  </div>
);

// Variant 2: Feature Card (with icon, title, description, link)
export const FeatureCard = ({ className = "" }) => (
  <div className={`bg-linear-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
    <div className="relative mb-6">
      <div className="w-16 h-16 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
      <Shimmer className="w-16 h-16 rounded-xl" />
    </div>
    <div className="relative mb-4">
      <div className="h-7 w-40 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-7 w-40 rounded" />
    </div>
    <div className="space-y-3 mb-6">
      <div className="relative">
        <div className="h-4 w-full bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="h-4 w-full rounded" />
      </div>
      <div className="relative">
        <div className="h-4 w-5/6 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="h-4 w-5/6 rounded" />
      </div>
    </div>
    <div className="relative">
      <div className="h-5 w-28 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-5 w-28 rounded" />
    </div>
  </div>
);

// Variant 3: Minimal Card (icon + title only)
export const MinimalCard = ({ className = "" }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 ${className}`}>
    <div className="relative mb-4">
      <div className="w-12 h-12 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg animate-pulse" />
      <Shimmer className="w-12 h-12 rounded-lg" />
    </div>
    <div className="relative">
      <div className="h-5 w-32 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-5 w-32 rounded" />
    </div>
  </div>
);

// Variant 4: Industry Card (icon + label)
export const IndustryCard = ({ className = "" }) => (
  <div className={`text-center group ${className}`}>
    <div className="relative inline-block mb-3">
      <div className="w-20 h-20 mx-auto bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl animate-pulse" />
      <Shimmer className="w-20 h-20 mx-auto rounded-2xl" />
    </div>
    <div className="relative">
      <div className="h-4 w-24 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-4 w-24 mx-auto rounded" />
    </div>
  </div>
);

// Variant 5: Technology Card (icon + name + category)
export const TechnologyCard = ({ className = "" }) => (
  <div className={`text-center group ${className}`}>
    <div className="relative inline-block mb-3">
      <div className="w-20 h-20 mx-auto bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl animate-pulse" />
      <Shimmer className="w-20 h-20 mx-auto rounded-2xl" />
    </div>
    <div className="relative mb-1">
      <div className="h-4 w-24 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-4 w-24 mx-auto rounded" />
    </div>
    <div className="relative">
      <div className="h-3 w-16 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
      <Shimmer className="h-3 w-16 mx-auto rounded" />
    </div>
  </div>
);

// ============================================
// GRID CONTAINERS
// ============================================

export const CardsGrid = ({ cardType = "service", count = 6, className = "" }) => {
  const getCardComponent = () => {
    switch (cardType) {
      case "service": return ServiceCard;
      case "feature": return FeatureCard;
      case "minimal": return MinimalCard;
      case "industry": return IndustryCard;
      case "technology": return TechnologyCard;
      default: return ServiceCard;
    }
  };

  const CardComponent = getCardComponent();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ${className}`}
      role="list"
      aria-label={`${cardType} cards loading`}
    >
      {generateItems(count).map((_, idx) => (
        <div key={idx} role="listitem">
          <CardComponent />
        </div>
      ))}
    </div>
  );
};

// ============================================
// PROCESS FLOW PARTS
// ============================================

export const ProcessStep = ({ showConnector = false, className = "" }) => (
  <div className={`relative ${className}`}>
    {showConnector && (
      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 -translate-y-1/2 z-0 animate-pulse" />
    )}
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-lg z-10">
      <div className="relative inline-block mb-4">
        <div className="w-14 h-14 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full animate-pulse" />
        <Shimmer className="w-14 h-14 rounded-full" />
      </div>
      <div className="relative mb-2">
        <div className="h-5 w-28 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="h-5 w-28 mx-auto rounded" />
      </div>
      <div className="space-y-2">
        <div className="relative">
          <div className="h-4 w-full bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
          <Shimmer className="h-4 w-full rounded" />
        </div>
        <div className="relative">
          <div className="h-4 w-3/4 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
          <Shimmer className="h-4 w-3/4 mx-auto rounded" />
        </div>
      </div>
      <div className="relative mt-3">
        <div className="h-3 w-20 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="h-3 w-20 mx-auto rounded" />
      </div>
    </div>
  </div>
);

export const ProcessFlow = ({ steps = 4, showTitle = true, className = "" }) => (
  <div className={`mb-20 ${className}`}>
    {showTitle && (
      <div className="relative mb-12" aria-label="Process steps title loading">
        <div className="h-10 w-64 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
        <Shimmer className="h-10 w-64 mx-auto rounded-xl" />
      </div>
    )}
    <div
      className="grid md:grid-cols-4 gap-6 relative"
      role="list"
      aria-label="Process steps loading"
    >
      {generateItems(steps).map((_, idx) => (
        <div key={idx} role="listitem">
          <ProcessStep showConnector={idx < steps - 1} />
        </div>
      ))}
    </div>
  </div>
);

// ============================================
// TECHNOLOGY & INDUSTRY SECTIONS
// ============================================

export const TechnologyStack = ({ count = 8, showTitle = true, className = "" }) => (
  <div className={`bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 mb-20 shadow-inner ${className}`}>
    {showTitle && (
      <div className="relative mb-8" aria-label="Technology stack title loading">
        <div className="h-10 w-56 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
        <Shimmer className="h-10 w-56 mx-auto rounded-xl" />
      </div>
    )}
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-8"
      role="list"
      aria-label="Technologies loading"
    >
      {generateItems(count).map((_, idx) => (
        <div key={idx} role="listitem">
          <TechnologyCard />
        </div>
      ))}
    </div>
  </div>
);

export const IndustriesSection = ({ count = 8, showTitle = true, className = "" }) => (
  <div className={`bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 shadow-inner ${className}`}>
    {showTitle && (
      <div className="relative mb-10" aria-label="Industries title loading">
        <div className="h-10 w-56 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
        <Shimmer className="h-10 w-56 mx-auto rounded-xl" />
      </div>
    )}
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-8"
      role="list"
      aria-label="Industries loading"
    >
      {generateItems(count).map((_, idx) => (
        <div key={idx} role="listitem">
          <IndustryCard />
        </div>
      ))}
    </div>
  </div>
);

// ============================================
// INTEGRATION & DASHBOARD PARTS
// ============================================

export const IntegrationFeature = ({ className = "" }) => (
  <div className={`flex gap-4 ${className}`}>
    <div className="relative shrink-0">
      <div className="w-10 h-10 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
      <Shimmer className="w-10 h-10 rounded-xl" />
    </div>
    <div className="flex-1 space-y-2">
      <div className="relative">
        <div className="h-5 w-40 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="h-5 w-40 rounded" />
      </div>
      <div className="relative">
        <div className="h-4 w-full bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="h-4 w-full rounded" />
      </div>
    </div>
  </div>
);

export const ApiMockup = ({ className = "" }) => (
  <div className={`relative bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700 ${className}`}>
    <div className="flex items-center gap-3 mb-6">
      <div className="relative">
        <div className="w-8 h-8 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="w-8 h-8 rounded" />
      </div>
      <div className="relative">
        <div className="h-6 w-32 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="h-6 w-32 rounded" />
      </div>
    </div>
    <div className="space-y-4 mb-8">
      {generateItems(3).map((_, idx) => (
        <div key={idx} className="bg-white/20 dark:bg-gray-800/20 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex gap-3 mb-2">
            <div className="relative">
              <div className="h-5 w-16 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
              <Shimmer className="h-5 w-16 rounded" />
            </div>
            <div className="relative flex-1">
              <div className="h-5 w-40 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
              <Shimmer className="h-5 w-40 rounded" />
            </div>
          </div>
          <div className="relative">
            <div className="h-4 w-48 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
            <Shimmer className="h-4 w-48 rounded" />
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-between">
      <div className="relative">
        <div className="h-5 w-32 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="h-5 w-32 rounded" />
      </div>
      <div className="relative">
        <div className="h-5 w-28 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
        <Shimmer className="h-5 w-28 rounded" />
      </div>
    </div>
  </div>
);

export const IntegrationSection = ({ showTitle = true, className = "" }) => (
  <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${className}`}>
    <div className="space-y-6">
      {showTitle && (
        <div className="relative">
          <div className="h-10 w-80 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
          <Shimmer className="h-10 w-80 rounded-xl" />
        </div>
      )}
      <div className="space-y-3">
        <div className="relative">
          <div className="h-5 w-full bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
          <Shimmer className="h-5 w-full rounded" />
        </div>
        <div className="relative">
          <div className="h-5 w-5/6 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
          <Shimmer className="h-5 w-5/6 rounded" />
        </div>
      </div>
      <div className="space-y-5">
        {generateItems(3).map((_, idx) => (
          <IntegrationFeature key={idx} />
        ))}
      </div>
      <div className="relative">
        <div className="h-14 w-56 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
        <Shimmer className="h-14 w-56 rounded-xl" />
      </div>
    </div>
    <div className="relative">
      <ApiMockup />
      <div className="absolute -top-5 -right-5 flex gap-2">
        {generateItems(2).map((_, idx) => (
          <div key={idx} className="relative">
            <div className="w-14 h-14 bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse shadow-lg" />
            <Shimmer className="w-14 h-14 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ============================================
// CTA BANNER PARTS
// ============================================

export const CtaBanner = ({ showButtons = true, className = "" }) => (
  <div
    className={`relative overflow-hidden bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-3xl p-12 text-center shadow-xl ${className}`}
    aria-label="Call to action loading"
  >
    {/* Animated background elements */}
    <div className="absolute inset-0 opacity-30" aria-hidden="true">
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-400 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-pulse delay-700" />
    </div>

    <div className="relative z-10">
      <div className="relative mb-5">
        <div className="h-10 w-80 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
        <Shimmer className="h-10 w-80 mx-auto rounded-xl" />
      </div>
      <div className="space-y-3 mb-10 max-w-2xl mx-auto">
        <div className="relative">
          <div className="h-5 w-full bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
          <Shimmer className="h-5 w-full rounded" />
        </div>
        <div className="relative">
          <div className="h-5 w-5/6 mx-auto bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded animate-pulse" />
          <Shimmer className="h-5 w-5/6 mx-auto rounded" />
        </div>
      </div>
      {showButtons && (
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="relative">
            <div className="h-14 w-44 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
            <Shimmer className="h-14 w-44 rounded-xl" />
          </div>
          <div className="relative">
            <div className="h-14 w-44 bg-linear-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-pulse" />
            <Shimmer className="h-14 w-44 rounded-xl" />
          </div>
        </div>
      )}
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT (Composable)
// ============================================

const SectionSkeleton = ({
  variant = "default",
  className = "",
  // Visibility toggles
  showHeader = true,
  showStats = false,
  showMetrics = false,
  showCards = true,
  showProcess = false,
  showTechnology = false,
  showIndustries = false,
  showIntegration = false,
  showCta = true,
  // Counts
  cardCount = 6,
  statCount = 4,
  metricCount = 4,
  processCount = 4,
  techCount = 8,
  industryCount = 8,
  // Card type
  cardType = "service",
  // Header options
  headerOptions = {
    showBadge: true,
    showTitle: true,
    showDescription: true,
  },
  // Accessibility props
  "aria-label": ariaLabel,
}) => {
  const finalAriaLabel = ariaLabel || `${variant} section loading`;

  return (
    <section
      className={`py-16 md:py-24 bg-white dark:bg-gray-900 ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={finalAriaLabel}
    >
      <span className="sr-only">Loading content...</span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-hidden="true">
        {showHeader && (
          <SectionHeader
            showBadge={headerOptions.showBadge}
            showTitle={headerOptions.showTitle}
            showDescription={headerOptions.showDescription}
          />
        )}

        {showStats && <StatsBar count={statCount} />}
        {showMetrics && <MetricsGrid count={metricCount} />}
        {showCards && <CardsGrid cardType={cardType} count={cardCount} />}
        {showProcess && <ProcessFlow steps={processCount} />}
        {showTechnology && <TechnologyStack count={techCount} />}
        {showIndustries && <IndustriesSection count={industryCount} />}
        {showIntegration && <IntegrationSection />}
        {showCta && <CtaBanner />}
      </div>

      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default SectionSkeleton;
