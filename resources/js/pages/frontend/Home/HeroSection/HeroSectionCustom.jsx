// pages/frontend/Home/HeroSection/HeroSectionCustom.jsx

// React
import React from 'react';
import { Link } from '@inertiajs/react';

// Icons
import {
  HiArrowRight, HiPlay, HiOutlineTruck, HiOutlineClock,
  HiOutlineGlobe, HiCheckCircle, HiLightningBolt, HiStar,
  HiMail, HiPhone, HiLocationMarker, HiUserGroup, HiOutlineCube,
  HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineRefresh,
  HiOutlineCurrencyDollar, HiOutlineUserGroup, HiOutlineMap,
  HiOutlineCloud, HiOutlineCog, HiOutlineSparkles
} from 'react-icons/hi';

// =============================================
// SECTION 1: UTILITY FUNCTIONS & HELPERS
// =============================================

const getIconComponent = (iconName) => {
  const icons = {
    arrow: HiArrowRight,
    play: HiPlay,
    truck: HiOutlineTruck,
    clock: HiOutlineClock,
    globe: HiOutlineGlobe,
    check: HiCheckCircle,
    bolt: HiLightningBolt,
    star: HiStar,
    mail: HiMail,
    phone: HiPhone,
    location: HiLocationMarker,
    users: HiUserGroup,
    cube: HiOutlineCube,
    chart: HiOutlineChartBar,
    shield: HiOutlineShieldCheck,
    refresh: HiOutlineRefresh,
    dollar: HiOutlineCurrencyDollar,
    userGroup: HiOutlineUserGroup,
    map: HiOutlineMap,
    cloud: HiOutlineCloud,
    cog: HiOutlineCog,
    sparkles: HiOutlineSparkles
  };
  return icons[iconName] || null;
};

const getAlignmentClasses = (alignment) => {
  switch (alignment) {
    case 'center': return 'text-center mx-auto';
    case 'right': return 'text-right ml-auto';
    default: return 'text-left';
  }
};

const getVerticalAlignment = (verticalAlignment) => {
  switch (verticalAlignment) {
    case 'top': return 'items-start';
    case 'bottom': return 'items-end';
    default: return 'items-center';
  }
};

const getBackgroundClasses = ({
  useGradient,
  gradientDirection,
  gradientFrom,
  gradientTo,
  gradientFromDark,
  gradientToDark,
  gradientVia,
  gradientViaDark,
  bgColor,
  bgColorDark,
  bgOpacity,
  bgOpacityDark
}) => {
  let classes = '';

  if (useGradient) {
    classes = `bg-gradient-${gradientDirection} ${gradientFrom} ${gradientTo}`;
    if (gradientVia) classes += ` ${gradientVia}`;
    classes += ` ${gradientFromDark} ${gradientToDark}`;
    if (gradientViaDark) classes += ` ${gradientViaDark}`;
  } else {
    classes = `${bgColor} ${bgColorDark}`;
    if (bgOpacity !== '100') classes += ` bg-opacity-${bgOpacity}`;
    if (bgOpacityDark !== '100') classes += ` dark:bg-opacity-${bgOpacityDark}`;
  }

  return classes;
};

const getContainerWidth = (containerPadding, containerWidth, paddingX, paddingY) => {
  if (!containerPadding) return '';
  return `${containerWidth} mx-auto ${paddingX} ${paddingY}`;
};


// =============================================
// SECTION 5: FEATURES COMPONENT
// =============================================

const FeaturesSection = ({
  showFeatures,
  features,
  featuresColumns,
  featuresLayout,
  featuresGap,
  featureIconSize,
  featureIconColor,
  featureIconColorDark,
  textSecondaryColor,
  textSecondaryColorDark
}) => {
  if (!showFeatures || !features?.length) return null;

  const gridCols = featuresColumns === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2';
  const layoutClasses = featuresLayout === 'grid' ? `grid ${gridCols} ${featuresGap}` : 'flex flex-col space-y-2';

  return (
    <div className={`${layoutClasses} py-4`}>
      {features.map((feature, index) => {
        const Icon = feature.icon ? getIconComponent(feature.icon) : null;

        return (
          <div key={index} className="flex items-center space-x-2">
            {Icon ? (
              <Icon className={`${featureIconSize} ${featureIconColor} ${featureIconColorDark}`} />
            ) : (
              <svg
                className={`${featureIconSize} ${featureIconColor} ${featureIconColorDark}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
            <span className={`text-sm md:text-base ${textSecondaryColor} ${textSecondaryColorDark}`}>
              {typeof feature === 'string' ? feature : feature.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

// =============================================
// SECTION 6: CTA BUTTONS COMPONENT
// =============================================

const CTASection = ({
  showCTA,
  primaryCTA,
  secondaryCTA,
  primaryBtnIconPosition,
  primaryBtnSize,
  primaryBtnRadius,
  primaryBtnBg,
  primaryBtnBgDark,
  primaryBtnBgHover,
  primaryBtnBgHoverDark,
  primaryBtnTextColor,
  primaryBtnTextColorDark,
  primaryBtnBorder,
  primaryBtnBorderDark,
  primaryBtnBorderHover,
  primaryBtnBorderHoverDark,
  primaryBtnShadow,
  primaryBtnShadowDark,
  primaryBtnShadowHover,
  primaryBtnShadowHoverDark,
  primaryBtnAnimation,
  primaryBtnFullWidth,

  secondaryBtnIconPosition,
  secondaryBtnSize,
  secondaryBtnRadius,
  secondaryBtnBg,
  secondaryBtnBgDark,
  secondaryBtnBgHover,
  secondaryBtnBgHoverDark,
  secondaryBtnTextColor,
  secondaryBtnTextColorDark,
  secondaryBtnBorder,
  secondaryBtnBorderDark,
  secondaryBtnBorderHover,
  secondaryBtnBorderHoverDark,
  secondaryBtnShadow,
  secondaryBtnShadowDark,
  secondaryBtnAnimation,
  secondaryBtnFullWidth
}) => {

  if (!showCTA) return null;

  const PrimaryIcon = primaryCTA?.icon ? getIconComponent(primaryCTA.icon) : null;
  const SecondaryIcon = secondaryCTA?.icon ? getIconComponent(secondaryCTA.icon) : null;

  const primaryBtnClasses = `
    group font-semibold ${primaryBtnSize} ${primaryBtnRadius}
    ${primaryBtnBg} ${primaryBtnBgDark}
    ${primaryBtnBgHover} ${primaryBtnBgHoverDark}
    ${primaryBtnTextColor} ${primaryBtnTextColorDark}
    ${primaryBtnBorder} ${primaryBtnBorderDark}
    ${primaryBtnBorderHover} ${primaryBtnBorderHoverDark}
    ${primaryBtnShadow} ${primaryBtnShadowDark}
    ${primaryBtnShadowHover} ${primaryBtnShadowHoverDark}
    ${primaryBtnAnimation ? 'transition-all duration-300 transform hover:scale-105' : ''}
    ${primaryBtnFullWidth ? 'w-full' : ''}
    flex items-center justify-center
    cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-yellow-500
  `.replace(/\s+/g, ' ').trim();


  const secondaryBtnClasses = `
    group font-semibold ${secondaryBtnSize} ${secondaryBtnRadius}
    ${secondaryBtnBg} ${secondaryBtnBgDark}
    ${secondaryBtnBgHover} ${secondaryBtnBgHoverDark}
    ${secondaryBtnTextColor} ${secondaryBtnTextColorDark}
    ${secondaryBtnBorder} ${secondaryBtnBorderDark}
    ${secondaryBtnBorderHover} ${secondaryBtnBorderHoverDark}
    ${secondaryBtnShadow} ${secondaryBtnShadowDark}
    ${secondaryBtnAnimation ? 'transition-all duration-300 hover:scale-105' : ''}
    ${secondaryBtnFullWidth ? 'w-full' : ''}
    flex items-center justify-center
    cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-gray-500
  `.replace(/\s+/g, ' ').trim();


  const renderLink = (cta, classes, Icon, iconPosition) => {

    if (!cta?.text) return null;

    const content = (
      <>
        {iconPosition === "left" && Icon && (
          <Icon className="mr-2 transition-transform group-hover:translate-x-1" />
        )}

        {cta.text}

        {iconPosition === "right" && Icon && (
          <Icon className="ml-2 transition-transform group-hover:translate-x-1" />
        )}
      </>
    );

    // External link
    if (cta.href?.startsWith("http")) {
      return (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }

    // Laravel/Inertia internal link
    return (
      <Link href={cta.href || "#"} className={classes}>
        {content}
      </Link>
    );
  };


  return (
    <div className="flex flex-wrap gap-4 pt-4">
      {renderLink(primaryCTA, primaryBtnClasses, PrimaryIcon, primaryBtnIconPosition)}
      {renderLink(secondaryCTA, secondaryBtnClasses, SecondaryIcon, secondaryBtnIconPosition)}
    </div>
  );
};
// =============================================
// SECTION 7: STATS COMPONENT
// =============================================

const StatsSection = ({
  showStats,
  stats,
  statsLayout,
  statsColumns,
  statsDivider,
  statsBorder,
  statsBorderDark,
  statsText,
  statsTextDark,
  textSecondaryColor,
  textSecondaryColorDark,
  accentColor,
  accentColorDark,
  showTrustBadges,
  trustBadgeAvatars,
  trustBadgeText,
  trustBadgeImages,
  cardBg,
  cardBgDark,
  textMutedColor,
  textMutedColorDark
}) => {
  if (!showStats) return null;

  const statsLayoutClasses = statsLayout === 'grid'
    ? `grid grid-cols-${statsColumns} gap-6`
    : statsLayout === 'vertical'
      ? 'flex flex-col space-y-4'
      : 'flex flex-wrap items-center gap-6';

  return (
    <div className={`pt-6 ${statsDivider ? `border-t ${statsBorder} ${statsBorderDark}` : ''}`}>
      <div className={`${statsLayoutClasses}`}>
        {showTrustBadges && (
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-2">
              {trustBadgeImages?.length > 0 ? (
                trustBadgeImages.map((img, i) => (
                  <img key={i} src={img} alt={`Avatar ${i + 1}`} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" />
                ))
              ) : (
                [...Array(trustBadgeAvatars || 4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-linear-to-br from-yellow-300 to-yellow-500 border-2 ${cardBg} ${cardBgDark}`}
                  ></div>
                ))
              )}
            </div>
            {trustBadgeText && (
              <span className={`text-sm ${textMutedColor} ${textMutedColorDark}`}>{trustBadgeText}</span>
            )}
          </div>
        )}

        {stats?.map((stat, index) => {
          const Icon = stat.icon ? getIconComponent(stat.icon) : null;

          return (
            <div key={index} className="flex items-center space-x-2">
              {Icon && <Icon className={`w-5 h-5 ${accentColor} ${accentColorDark}`} />}
              <div>
                <p className={`text-sm ${textSecondaryColor} ${textSecondaryColorDark}`}>
                  <span className={`font-bold ${statsText} ${statsTextDark}`}>{stat.value}</span> {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// =============================================
// SECTION 8: FLOATING ELEMENTS COMPONENT
// =============================================

const FloatingElementsSection = ({ showFloatingElements, floatingElements }) => {
  if (!showFloatingElements || !floatingElements?.length) return null;

  const positionClasses = {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };

  return (
    <>
      {floatingElements.map((element, index) => {
        const Icon = element.content?.icon ? getIconComponent(element.content.icon) : null;

        if (element.type === 'card') {
          return (
            <div
              key={index}
              className={`absolute ${positionClasses[element.position]} backdrop-blur-md rounded-lg p-4 border ${element.bg} ${element.bgDark} ${element.border} ${element.borderDark}`}
            >
              <div className="flex items-center space-x-3">
                {Icon && (
                  <div className={`w-10 h-10 ${element.content.iconBg} rounded-full flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                )}
                <div>
                  <p className={`text-xs ${element.content.titleColor || 'text-blue-200 dark:text-gray-300'}`}>
                    {element.content.title}
                  </p>
                  <p className={`text-sm font-bold ${element.content.valueColor || 'text-white'}`}>
                    {element.content.value}
                  </p>
                </div>
              </div>
            </div>
          );
        }

        if (element.type === 'badge') {
          return (
            <div
              key={index}
              className={`absolute ${positionClasses[element.position]} backdrop-blur-md rounded-full px-4 py-2 border ${element.bg} ${element.bgDark} ${element.border} ${element.borderDark}`}
            >
              <p className={`text-sm font-semibold ${element.content.textColor || 'text-white'}`}>
                {element.content.text}
              </p>
            </div>
          );
        }

        return null;
      })}
    </>
  );
};

// =============================================
// SECTION 9: IMAGE COMPONENT
// =============================================

const ImageSection = ({
  showImage,
  imageUrl,
  imageDarkUrl,
  imageAlt,
  imagePosition,
  imageShadow,
  imageShadowDark,
  imageObjectFit,
  imageOverlay,
  imageOverlayColor,
  imageOverlayColorDark,
  imageOverlayDirection,
  imageBorder,
  imageBorderDark,
  imageZoom,
  customImageClasses,
  showFloatingElements,
  floatingElements,
  animations,
  isDark
}) => {
  if (!showImage) return null;

  const imageSrc = imageDarkUrl && isDark ? imageDarkUrl : imageUrl;

  if (imagePosition === 'background') {
    return (
      <div className="absolute inset-0 -z-10">
        <img src={imageSrc} alt={imageAlt} className={`w-full h-full ${imageObjectFit}`} />
        <div className={`absolute inset-0 bg-gradient-${imageOverlayDirection} ${imageOverlayColor} ${imageOverlayColorDark}`}></div>
      </div>
    );
  }

  const imageClasses = `
    relative rounded-2xl overflow-hidden ${imageShadow} ${imageShadowDark}
    ${imageBorder} ${imageBorderDark}
    ${imageZoom ? 'hover:scale-105 transition-transform duration-700' : ''}
    ${customImageClasses}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className="relative">
      <div className={imageClasses}>
        <img src={imageSrc} alt={imageAlt} className={`w-full h-full ${imageObjectFit}`} />

        {imageOverlay && (
          <div className={`absolute inset-0 bg-gradient-${imageOverlayDirection} ${imageOverlayColor} ${imageOverlayColorDark}`}></div>
        )}

        <FloatingElementsSection
          showFloatingElements={showFloatingElements}
          floatingElements={floatingElements}
        />
      </div>

      {/* Decorative Elements */}
      {animations && (
        <>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-700"></div>
        </>
      )}
    </div>
  );
};

// =============================================
// SECTION 10: CONTENT COMPOSER
// =============================================

const ContentSection = ({
  // Badge props
  showBadge,
  badgeText,
  badgeIcon,
  badgeIconType,
  badgeRadius,
  badgeBg,
  badgeBgDark,
  badgeTextColor,
  badgeTextColorDark,
  badgeBorder,
  badgeBorderDark,
  badgeIconColor,
  badgeIconColorDark,

  // Title props
  title,
  titleHighlight,
  titleHighlightType,
  titleHighlightGradient,
  titleHighlightGradientDark,
  titleHighlightColor,
  titleHighlightColorDark,
  titleHighlightUnderline,
  titleHighlightUnderlineDark,
  titleSize,
  titleWeight,
  titleLeading,
  titleTracking,
  titleMaxWidth,

  // Description props
  description,
  descriptionSize,
  descriptionWeight,
  descriptionLeading,
  descriptionMaxWidth,

  // Features props
  showFeatures,
  features,
  featuresColumns,
  featuresLayout,
  featuresGap,
  featureIconSize,
  featureIconColor,
  featureIconColorDark,

  // CTA props
  showCTA,
  primaryCTA,
  secondaryCTA,
  primaryBtnIconPosition,
  primaryBtnSize,
  primaryBtnRadius,
  primaryBtnBg,
  primaryBtnBgDark,
  primaryBtnBgHover,
  primaryBtnBgHoverDark,
  primaryBtnTextColor,
  primaryBtnTextColorDark,
  primaryBtnBorder,
  primaryBtnBorderDark,
  primaryBtnBorderHover,
  primaryBtnBorderHoverDark,
  primaryBtnShadow,
  primaryBtnShadowDark,
  primaryBtnShadowHover,
  primaryBtnShadowHoverDark,
  primaryBtnAnimation,
  primaryBtnFullWidth,
  secondaryBtnIconPosition,
  secondaryBtnSize,
  secondaryBtnRadius,
  secondaryBtnBg,
  secondaryBtnBgDark,
  secondaryBtnBgHover,
  secondaryBtnBgHoverDark,
  secondaryBtnTextColor,
  secondaryBtnTextColorDark,
  secondaryBtnBorder,
  secondaryBtnBorderDark,
  secondaryBtnBorderHover,
  secondaryBtnBorderHoverDark,
  secondaryBtnShadow,
  secondaryBtnShadowDark,
  secondaryBtnAnimation,
  secondaryBtnFullWidth,

  // Stats props
  showStats,
  stats,
  statsLayout,
  statsColumns,
  statsDivider,
  statsBorder,
  statsBorderDark,
  statsText,
  statsTextDark,
  showTrustBadges,
  trustBadgeAvatars,
  trustBadgeText,
  trustBadgeImages,

  // Shared props
  textColor,
  textColorDark,
  textSecondaryColor,
  textSecondaryColorDark,
  textMutedColor,
  textMutedColorDark,
  accentColor,
  accentColorDark,
  cardBg,
  cardBgDark,
  alignment,
  sectionSpacing,
  customContentClasses
}) => {
  return (
    <div className={`${sectionSpacing} ${getAlignmentClasses(alignment)} ${customContentClasses}`}>

      {/* Badge Section */}
      <BadgeSection
        showBadge={showBadge}
        badgeText={badgeText}
        badgeIcon={badgeIcon}
        badgeIconType={badgeIconType}
        badgeRadius={badgeRadius}
        badgeBg={badgeBg}
        badgeBgDark={badgeBgDark}
        badgeTextColor={badgeTextColor}
        badgeTextColorDark={badgeTextColorDark}
        badgeBorder={badgeBorder}
        badgeBorderDark={badgeBorderDark}
        badgeIconColor={badgeIconColor}
        badgeIconColorDark={badgeIconColorDark}
        featureIconColor={featureIconColor}
        featureIconColorDark={featureIconColorDark}
        alignment={alignment}
      />

      {/* Title Section */}
      <TitleSection
        title={title}
        titleHighlight={titleHighlight}
        titleHighlightType={titleHighlightType}
        titleHighlightGradient={titleHighlightGradient}
        titleHighlightGradientDark={titleHighlightGradientDark}
        titleHighlightColor={titleHighlightColor}
        titleHighlightColorDark={titleHighlightColorDark}
        titleHighlightUnderline={titleHighlightUnderline}
        titleHighlightUnderlineDark={titleHighlightUnderlineDark}
        titleSize={titleSize}
        titleWeight={titleWeight}
        titleLeading={titleLeading}
        titleTracking={titleTracking}
        titleMaxWidth={titleMaxWidth}
        textColor={textColor}
        textColorDark={textColorDark}
      />

      {/* Description Section */}
      <DescriptionSection
        description={description}
        descriptionSize={descriptionSize}
        descriptionWeight={descriptionWeight}
        descriptionLeading={descriptionLeading}
        descriptionMaxWidth={descriptionMaxWidth}
        textSecondaryColor={textSecondaryColor}
        textSecondaryColorDark={textSecondaryColorDark}
        alignment={alignment}
      />

      {/* Features Section */}
      <FeaturesSection
        showFeatures={showFeatures}
        features={features}
        featuresColumns={featuresColumns}
        featuresLayout={featuresLayout}
        featuresGap={featuresGap}
        featureIconSize={featureIconSize}
        featureIconColor={featureIconColor}
        featureIconColorDark={featureIconColorDark}
        textSecondaryColor={textSecondaryColor}
        textSecondaryColorDark={textSecondaryColorDark}
      />

      {/* CTA Section */}
      <CTASection
        showCTA={showCTA}
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
        primaryBtnIconPosition={primaryBtnIconPosition}
        primaryBtnSize={primaryBtnSize}
        primaryBtnRadius={primaryBtnRadius}
        primaryBtnBg={primaryBtnBg}
        primaryBtnBgDark={primaryBtnBgDark}
        primaryBtnBgHover={primaryBtnBgHover}
        primaryBtnBgHoverDark={primaryBtnBgHoverDark}
        primaryBtnTextColor={primaryBtnTextColor}
        primaryBtnTextColorDark={primaryBtnTextColorDark}
        primaryBtnBorder={primaryBtnBorder}
        primaryBtnBorderDark={primaryBtnBorderDark}
        primaryBtnBorderHover={primaryBtnBorderHover}
        primaryBtnBorderHoverDark={primaryBtnBorderHoverDark}
        primaryBtnShadow={primaryBtnShadow}
        primaryBtnShadowDark={primaryBtnShadowDark}
        primaryBtnShadowHover={primaryBtnShadowHover}
        primaryBtnShadowHoverDark={primaryBtnShadowHoverDark}
        primaryBtnAnimation={primaryBtnAnimation}
        primaryBtnFullWidth={primaryBtnFullWidth}
        secondaryBtnIconPosition={secondaryBtnIconPosition}
        secondaryBtnSize={secondaryBtnSize}
        secondaryBtnRadius={secondaryBtnRadius}
        secondaryBtnBg={secondaryBtnBg}
        secondaryBtnBgDark={secondaryBtnBgDark}
        secondaryBtnBgHover={secondaryBtnBgHover}
        secondaryBtnBgHoverDark={secondaryBtnBgHoverDark}
        secondaryBtnTextColor={secondaryBtnTextColor}
        secondaryBtnTextColorDark={secondaryBtnTextColorDark}
        secondaryBtnBorder={secondaryBtnBorder}
        secondaryBtnBorderDark={secondaryBtnBorderDark}
        secondaryBtnBorderHover={secondaryBtnBorderHover}
        secondaryBtnBorderHoverDark={secondaryBtnBorderHoverDark}
        secondaryBtnShadow={secondaryBtnShadow}
        secondaryBtnShadowDark={secondaryBtnShadowDark}
        secondaryBtnAnimation={secondaryBtnAnimation}
        secondaryBtnFullWidth={secondaryBtnFullWidth}
      />

      {/* Stats Section */}
      <StatsSection
        showStats={showStats}
        stats={stats}
        statsLayout={statsLayout}
        statsColumns={statsColumns}
        statsDivider={statsDivider}
        statsBorder={statsBorder}
        statsBorderDark={statsBorderDark}
        statsText={statsText}
        statsTextDark={statsTextDark}
        textSecondaryColor={textSecondaryColor}
        textSecondaryColorDark={textSecondaryColorDark}
        accentColor={accentColor}
        accentColorDark={accentColorDark}
        showTrustBadges={showTrustBadges}
        trustBadgeAvatars={trustBadgeAvatars}
        trustBadgeText={trustBadgeText}
        trustBadgeImages={trustBadgeImages}
        cardBg={cardBg}
        cardBgDark={cardBgDark}
        textMutedColor={textMutedColor}
        textMutedColorDark={textMutedColorDark}
      />
    </div>
  );
};

// =============================================
// SECTION 11: LAYOUT RENDERER
// =============================================

const LayoutRenderer = ({
  layout,
  baseClasses,
  verticalAlign,
  contentMaxWidth,
  imagePosition,
  renderContent,
  renderImage,
  showImage,
  containerWidth,
  paddingX,
  paddingY,
  imageUrl,
  imageAlt,
  imageOverlayDirection,
  imageOverlayColor,
  imageOverlayColorDark,
  cardBg,
  cardBgDark,
  cardShadow,
  cardShadowDark,
  cardHover,
  cardHoverDark,
  cardRadius,
  cardPadding,
  borderColor,
  borderColorDark,
  gapSize,
  animations,
  animationType,
  animationDuration,
  animationDelay,
  animationEasing,
  imageOnLeft,
  contentOrder
}) => {
  if (layout === 'centered') {
    return (
      <div className={baseClasses}>
        <div className={`max-w-4xl mx-auto ${contentMaxWidth}`}>
          {renderContent()}
        </div>
        {imagePosition === 'background' && renderImage()}
      </div>
    );
  }

  if (layout === 'full-image') {
    return (
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-${imageOverlayDirection} ${imageOverlayColor} ${imageOverlayColorDark}`}></div>
        </div>
        <div className={`relative z-10 ${containerWidth} mx-auto ${paddingX} ${paddingY} text-white`}>
          <div className={contentMaxWidth}>
            {renderContent()}
          </div>
        </div>
      </div>
    );
  }

  if (layout === 'overlay') {
    return (
      <div className={`relative ${baseClasses}`}>
        <div className="absolute inset-0">
          <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-${imageOverlayDirection} ${imageOverlayColor} ${imageOverlayColorDark}`}></div>
        </div>
        <div className="relative z-10">
          {renderContent()}
        </div>
        {showImage && imagePosition === 'background' && renderImage()}
      </div>
    );
  }

  if (layout === 'card') {
    return (
      <div className={baseClasses}>
        <div className={`${cardBg} ${cardBgDark} ${cardShadow} ${cardShadowDark} ${cardHover} ${cardHoverDark} ${cardRadius} ${cardPadding} ${borderColor} ${borderColorDark} border`}>
          <div className={`grid md:grid-cols-2 ${gapSize} ${verticalAlign}`}>
            <div>{renderContent()}</div>
            <div>{renderImage()}</div>
          </div>
        </div>
      </div>
    );
  }

  if (layout === 'magazine') {
    return (
      <div className={baseClasses}>
        <div className={`grid md:grid-cols-3 ${gapSize}`}>
          <div className="md:col-span-2">
            {renderContent()}
          </div>
          <div className="md:col-span-1">
            {renderImage()}
          </div>
        </div>
      </div>
    );
  }

  // Split layout (default)
  const imageShouldBeOnLeft = imagePosition === 'left' || (contentOrder === 'reversed' && imagePosition === 'right');

  return (
    <div className={baseClasses}>
      <div className={`grid md:grid-cols-2 ${gapSize} ${verticalAlign}`}>
        {imageShouldBeOnLeft ? (
          <>
            <div className={animations ? `animate-${animationType} ${animationDuration} ${animationDelay} ${animationEasing}` : ''}>
              {renderImage()}
            </div>
            <div className={animations ? `animate-${animationType} ${animationDuration} ${animationDelay} ${animationEasing}` : ''}>
              {renderContent()}
            </div>
          </>
        ) : (
          <>
            <div className={animations ? `animate-${animationType} ${animationDuration} ${animationDelay} ${animationEasing}` : ''}>
              {renderContent()}
            </div>
            <div className={animations ? `animate-${animationType} ${animationDuration} ${animationDelay} ${animationEasing}` : ''}>
              {renderImage()}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// =============================================
// SECTION 12: MAIN COMPONENT
// =============================================

const HeroSectionCustom = ({ config = {}, isDark = false }) => {
  const {
    // Layout
    layout = 'split',
    alignment = 'left',
    contentWidth = 'default',
    contentOrder = 'normal',
    verticalAlignment = 'center',
    containerWidth = 'max-w-7xl',
    containerPadding = true,
    paddingY = 'py-20 md:py-28',
    paddingX = 'px-4 sm:px-6 lg:px-8',
    gapSize = 'gap-12',

    // Theme
    useGradient = false,
    gradientDirection = 'to-r',
    gradientFrom = 'from-blue-900',
    gradientTo = 'to-blue-800',
    gradientFromDark = 'dark:from-gray-800',
    gradientToDark = 'dark:to-gray-900',
    gradientVia = '',
    gradientViaDark = '',
    bgColor = 'bg-white',
    bgColorDark = 'dark:bg-gray-900',
    bgOpacity = '100',
    bgOpacityDark = '100',
    textColor = 'text-gray-900',
    textColorDark = 'dark:text-white',
    textSecondaryColor = 'text-gray-600',
    textSecondaryColorDark = 'dark:text-gray-300',
    textMutedColor = 'text-gray-400',
    textMutedColorDark = 'dark:text-gray-500',
    accentColor = 'text-blue-600',
    accentColorDark = 'dark:text-blue-400',
    accentBg = 'bg-blue-100',
    accentBgDark = 'dark:bg-blue-900/30',

    // Badge
    badgeBg = 'bg-blue-50',
    badgeBgDark = 'dark:bg-gray-800',
    badgeTextColor = 'text-blue-700',
    badgeTextColorDark = 'dark:text-blue-300',
    badgeBorder = 'border-blue-100',
    badgeBorderDark = 'dark:border-gray-700',
    badgeIconColor = 'bg-green-400',
    badgeIconColorDark = 'dark:bg-green-500',

    // Card
    cardBg = 'bg-white',
    cardBgDark = 'dark:bg-gray-800',
    cardShadow = 'shadow-lg',
    cardShadowDark = 'dark:shadow-gray-900/50',
    cardHover = 'hover:shadow-xl',
    cardHoverDark = 'dark:hover:shadow-gray-800/50',
    cardPadding = 'p-6',
    cardRadius = 'rounded-xl',
    borderColor = 'border-gray-200',
    borderColorDark = 'dark:border-gray-700',

    // Feature icon
    featureIconColor = 'text-yellow-500',
    featureIconColorDark = 'dark:text-yellow-400',
    featureIconSize = 'w-5 h-5',

    // Stats
    statsText = 'text-gray-900',
    statsTextDark = 'dark:text-white',
    statsBorder = 'border-gray-200',
    statsBorderDark = 'dark:border-gray-700',
    statsDivider = true,
    statsLayout = 'horizontal',
    statsColumns = 2,

    // Primary Button
    primaryBtnText = 'Get Started',
    primaryBtnIcon = 'arrow',
    primaryBtnIconPosition = 'right',
    primaryBtnBg = 'bg-yellow-500',
    primaryBtnBgDark = 'dark:bg-yellow-600',
    primaryBtnBgHover = 'hover:bg-yellow-400',
    primaryBtnBgHoverDark = 'dark:hover:bg-yellow-500',
    primaryBtnTextColor = 'text-blue-900',
    primaryBtnTextColorDark = 'dark:text-white',
    primaryBtnBorder = 'border-transparent',
    primaryBtnBorderDark = 'dark:border-transparent',
    primaryBtnBorderHover = 'hover:border-transparent',
    primaryBtnBorderHoverDark = 'dark:hover:border-transparent',
    primaryBtnSize = 'px-8 py-4',
    primaryBtnRadius = 'rounded-lg',
    primaryBtnShadow = 'shadow-lg',
    primaryBtnShadowDark = 'dark:shadow-gray-900/50',
    primaryBtnShadowHover = 'hover:shadow-xl',
    primaryBtnShadowHoverDark = 'dark:hover:shadow-gray-800/50',
    primaryBtnAnimation = true,
    primaryBtnFullWidth = false,

    // Secondary Button
    secondaryBtnText = 'Watch Demo',
    secondaryBtnIcon = 'play',
    secondaryBtnIconPosition = 'left',
    secondaryBtnBg = 'bg-transparent',
    secondaryBtnBgDark = 'dark:bg-transparent',
    secondaryBtnBgHover = 'hover:bg-gray-100',
    secondaryBtnBgHoverDark = 'dark:hover:bg-gray-800',
    secondaryBtnTextColor = 'text-gray-900',
    secondaryBtnTextColorDark = 'dark:text-white',
    secondaryBtnBorder = 'border-2 border-gray-900',
    secondaryBtnBorderDark = 'dark:border-white',
    secondaryBtnBorderHover = 'hover:border-gray-700',
    secondaryBtnBorderHoverDark = 'dark:hover:border-gray-300',
    secondaryBtnSize = 'px-8 py-4',
    secondaryBtnRadius = 'rounded-lg',
    secondaryBtnShadow = '',
    secondaryBtnShadowDark = '',
    secondaryBtnAnimation = true,
    secondaryBtnFullWidth = false,

    // Image
    showImage = true,
    imageUrl = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    imageDarkUrl = '',
    imageAlt = 'Hero',
    imagePosition = 'right',
    imageShadow = 'shadow-2xl',
    imageShadowDark = 'dark:shadow-gray-900/50',
    imageObjectFit = 'object-cover',
    imageOverlay = true,
    imageOverlayColor = 'from-black/60',
    imageOverlayColorDark = 'dark:from-gray-900/80',
    imageOverlayDirection = 'to-t',
    imageBorder = '',
    imageBorderDark = '',
    imageZoom = false,

    // Floating Elements
    showFloatingElements = true,
    floatingElements = [],

    // Content
    showBadge = true,
    badgeText = 'Trusted by 500+ companies',
    badgeIcon = true,
    badgeIconType = 'dot',
    badgeRadius = 'rounded-full',
    title = 'Streamline Your Supply Chain with Sazzad',
    titleHighlight = 'Supply Chain',
    titleHighlightType = 'gradient',
    titleHighlightGradient = 'from-yellow-300 to-yellow-500',
    titleHighlightGradientDark = 'dark:from-yellow-400 dark:to-yellow-600',
    titleHighlightColor = 'text-yellow-500',
    titleHighlightColorDark = 'dark:text-yellow-400',
    titleHighlightUnderline = 'border-b-4 border-yellow-500',
    titleHighlightUnderlineDark = 'dark:border-yellow-400',
    titleSize = 'text-4xl md:text-5xl lg:text-6xl',
    titleWeight = 'font-bold',
    titleLeading = 'leading-tight',
    titleTracking = 'tracking-normal',
    titleMaxWidth = 'max-w-4xl',
    description = 'End-to-end inventory management and logistics solutions that drive efficiency, reduce costs, and accelerate your business growth.',
    descriptionSize = 'text-lg md:text-xl',
    descriptionWeight = 'font-normal',
    descriptionLeading = 'leading-relaxed',
    descriptionMaxWidth = 'max-w-lg',

    // CTA
    showCTA = true,
    primaryCTA = {
      text: primaryBtnText,
      icon: primaryBtnIcon,
      href: '#',
      onClick: null
    },
    secondaryCTA = {
      text: secondaryBtnText,
      icon: secondaryBtnIcon,
      href: '#',
      onClick: null
    },

    // Features
    showFeatures = true,
    features = [],
    featuresColumns = 2,
    featuresLayout = 'grid',
    featuresGap = 'gap-4',
    featuresIconType = 'default',
    featuresIconSize = 'w-5 h-5',

    // Stats
    showStats = true,
    stats = [],

    // Trust badges
    showTrustBadges = true,
    trustBadgeAvatars = 4,
    trustBadgeText = 'Trusted by industry leaders',
    trustBadgeImages = [],

    // Animation
    animations = true,
    animationType = 'fade-up',
    animationDuration = 'duration-1000',
    animationDelay = 'delay-0',
    animationEasing = 'ease-out',
    hoverEffects = true,
    parallaxSpeed = 'slow',

    // Spacing
    sectionSpacing = 'space-y-8',
    elementSpacing = 'space-y-4',
    contentMaxWidth = '',
    contentMinHeight = '',

    // Custom classes
    customContainerClasses = '',
    customContentClasses = '',
    customImageClasses = '',
    customClasses = '',

    // SEO
    seoTitle = '',
    seoDescription = '',
    seoKeywords = '',
  } = config;

  // Compute base classes
  const baseClasses = `${getContainerWidth(containerPadding, containerWidth, paddingX, paddingY)} ${customContainerClasses}`;
  const verticalAlign = getVerticalAlignment(verticalAlignment);
  const backgroundClasses = getBackgroundClasses({
    useGradient,
    gradientDirection,
    gradientFrom,
    gradientTo,
    gradientFromDark,
    gradientToDark,
    gradientVia,
    gradientViaDark,
    bgColor,
    bgColorDark,
    bgOpacity,
    bgOpacityDark
  });

  // Render content function
  const renderContent = () => (
    <ContentSection
      // Badge props
      showBadge={showBadge}
      badgeText={badgeText}
      badgeIcon={badgeIcon}
      badgeIconType={badgeIconType}
      badgeRadius={badgeRadius}
      badgeBg={badgeBg}
      badgeBgDark={badgeBgDark}
      badgeTextColor={badgeTextColor}
      badgeTextColorDark={badgeTextColorDark}
      badgeBorder={badgeBorder}
      badgeBorderDark={badgeBorderDark}
      badgeIconColor={badgeIconColor}
      badgeIconColorDark={badgeIconColorDark}

      // Title props
      title={title}
      titleHighlight={titleHighlight}
      titleHighlightType={titleHighlightType}
      titleHighlightGradient={titleHighlightGradient}
      titleHighlightGradientDark={titleHighlightGradientDark}
      titleHighlightColor={titleHighlightColor}
      titleHighlightColorDark={titleHighlightColorDark}
      titleHighlightUnderline={titleHighlightUnderline}
      titleHighlightUnderlineDark={titleHighlightUnderlineDark}
      titleSize={titleSize}
      titleWeight={titleWeight}
      titleLeading={titleLeading}
      titleTracking={titleTracking}
      titleMaxWidth={titleMaxWidth}

      // Description props
      description={description}
      descriptionSize={descriptionSize}
      descriptionWeight={descriptionWeight}
      descriptionLeading={descriptionLeading}
      descriptionMaxWidth={descriptionMaxWidth}

      // Features props
      showFeatures={showFeatures}
      features={features}
      featuresColumns={featuresColumns}
      featuresLayout={featuresLayout}
      featuresGap={featuresGap}
      featureIconSize={featureIconSize}
      featureIconColor={featureIconColor}
      featureIconColorDark={featureIconColorDark}

      // CTA props
      showCTA={showCTA}
      primaryCTA={primaryCTA}
      secondaryCTA={secondaryCTA}
      primaryBtnIconPosition={primaryBtnIconPosition}
      primaryBtnSize={primaryBtnSize}
      primaryBtnRadius={primaryBtnRadius}
      primaryBtnBg={primaryBtnBg}
      primaryBtnBgDark={primaryBtnBgDark}
      primaryBtnBgHover={primaryBtnBgHover}
      primaryBtnBgHoverDark={primaryBtnBgHoverDark}
      primaryBtnTextColor={primaryBtnTextColor}
      primaryBtnTextColorDark={primaryBtnTextColorDark}
      primaryBtnBorder={primaryBtnBorder}
      primaryBtnBorderDark={primaryBtnBorderDark}
      primaryBtnBorderHover={primaryBtnBorderHover}
      primaryBtnBorderHoverDark={primaryBtnBorderHoverDark}
      primaryBtnShadow={primaryBtnShadow}
      primaryBtnShadowDark={primaryBtnShadowDark}
      primaryBtnShadowHover={primaryBtnShadowHover}
      primaryBtnShadowHoverDark={primaryBtnShadowHoverDark}
      primaryBtnAnimation={primaryBtnAnimation}
      primaryBtnFullWidth={primaryBtnFullWidth}
      secondaryBtnIconPosition={secondaryBtnIconPosition}
      secondaryBtnSize={secondaryBtnSize}
      secondaryBtnRadius={secondaryBtnRadius}
      secondaryBtnBg={secondaryBtnBg}
      secondaryBtnBgDark={secondaryBtnBgDark}
      secondaryBtnBgHover={secondaryBtnBgHover}
      secondaryBtnBgHoverDark={secondaryBtnBgHoverDark}
      secondaryBtnTextColor={secondaryBtnTextColor}
      secondaryBtnTextColorDark={secondaryBtnTextColorDark}
      secondaryBtnBorder={secondaryBtnBorder}
      secondaryBtnBorderDark={secondaryBtnBorderDark}
      secondaryBtnBorderHover={secondaryBtnBorderHover}
      secondaryBtnBorderHoverDark={secondaryBtnBorderHoverDark}
      secondaryBtnShadow={secondaryBtnShadow}
      secondaryBtnShadowDark={secondaryBtnShadowDark}
      secondaryBtnAnimation={secondaryBtnAnimation}
      secondaryBtnFullWidth={secondaryBtnFullWidth}

      // Stats props
      showStats={showStats}
      stats={stats}
      statsLayout={statsLayout}
      statsColumns={statsColumns}
      statsDivider={statsDivider}
      statsBorder={statsBorder}
      statsBorderDark={statsBorderDark}
      statsText={statsText}
      statsTextDark={statsTextDark}
      showTrustBadges={showTrustBadges}
      trustBadgeAvatars={trustBadgeAvatars}
      trustBadgeText={trustBadgeText}
      trustBadgeImages={trustBadgeImages}

      // Shared props
      textColor={textColor}
      textColorDark={textColorDark}
      textSecondaryColor={textSecondaryColor}
      textSecondaryColorDark={textSecondaryColorDark}
      textMutedColor={textMutedColor}
      textMutedColorDark={textMutedColorDark}
      accentColor={accentColor}
      accentColorDark={accentColorDark}
      cardBg={cardBg}
      cardBgDark={cardBgDark}
      alignment={alignment}
      sectionSpacing={sectionSpacing}
      customContentClasses={customContentClasses}
    />
  );

  // Render image function
  const renderImage = () => (
    <ImageSection
      showImage={showImage}
      imageUrl={imageUrl}
      imageDarkUrl={imageDarkUrl}
      imageAlt={imageAlt}
      imagePosition={imagePosition}
      imageShadow={imageShadow}
      imageShadowDark={imageShadowDark}
      imageObjectFit={imageObjectFit}
      imageOverlay={imageOverlay}
      imageOverlayColor={imageOverlayColor}
      imageOverlayColorDark={imageOverlayColorDark}
      imageOverlayDirection={imageOverlayDirection}
      imageBorder={imageBorder}
      imageBorderDark={imageBorderDark}
      imageZoom={imageZoom}
      customImageClasses={customImageClasses}
      showFloatingElements={showFloatingElements}
      floatingElements={floatingElements}
      animations={animations}
      isDark={isDark}
    />
  );

  return (
    <section
      className={`relative overflow-hidden ${backgroundClasses} ${customClasses}`}
      style={{ minHeight: contentMinHeight }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl ${accentBg} ${accentBgDark}`}
        ></div>
        <div
          className={`absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl ${accentBg} ${accentBgDark}`}
        ></div>
      </div>

      {/* Layout Renderer */}
      <LayoutRenderer
        layout={layout}
        baseClasses={baseClasses}
        verticalAlign={verticalAlign}
        contentMaxWidth={contentMaxWidth}
        imagePosition={imagePosition}
        renderContent={renderContent}
        renderImage={renderImage}
        showImage={showImage}
        containerWidth={containerWidth}
        paddingX={paddingX}
        paddingY={paddingY}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        imageOverlayDirection={imageOverlayDirection}
        imageOverlayColor={imageOverlayColor}
        imageOverlayColorDark={imageOverlayColorDark}
        cardBg={cardBg}
        cardBgDark={cardBgDark}
        cardShadow={cardShadow}
        cardShadowDark={cardShadowDark}
        cardHover={cardHover}
        cardHoverDark={cardHoverDark}
        cardRadius={cardRadius}
        cardPadding={cardPadding}
        borderColor={borderColor}
        borderColorDark={borderColorDark}
        gapSize={gapSize}
        animations={animations}
        animationType={animationType}
        animationDuration={animationDuration}
        animationDelay={animationDelay}
        animationEasing={animationEasing}
        contentOrder={contentOrder}
      />
    </section>
  );
};

export default HeroSectionCustom;