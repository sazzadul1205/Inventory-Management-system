import React from 'react';
import {
  HiArrowRight, HiPlay, HiOutlineTruck, HiOutlineClock,
  HiOutlineGlobe, HiCheckCircle, HiLightningBolt, HiStar,
  HiMail, HiPhone, HiLocationMarker, HiUserGroup
} from 'react-icons/hi';

const HeroSectionCustom = ({ config = defaultConfig, theme = 'light' }) => {
  const {
    // Layout settings
    layout = 'split',
    alignment = 'left',

    // Theme colors (direct color values instead of Tailwind classes)
    lightTheme = {
      background: '#ffffff',
      text: '#111827',
      textSecondary: '#4b5563',
      accent: '#2563eb',
      badgeBg: '#eff6ff',
      badgeText: '#1d4ed8',
      cardBg: '#ffffff',
      border: '#e5e7eb',
      featureIcon: '#eab308',
      overlay: 'from-black/60',
      primaryBtnBg: '#eab308',
      primaryBtnHover: '#fbbf24',
      primaryBtnText: '#1e3a8a',
      secondaryBtnBorder: '#111827',
      secondaryBtnText: '#111827',
    },

    darkTheme = {
      background: '#111827',
      text: '#ffffff',
      textSecondary: '#d1d5db',
      accent: '#60a5fa',
      badgeBg: '#1f2937',
      badgeText: '#93c5fd',
      cardBg: '#1f2937',
      border: '#374151',
      featureIcon: '#fbbf24',
      overlay: 'from-gray-900/80',
      primaryBtnBg: '#ca8a04',
      primaryBtnHover: '#eab308',
      primaryBtnText: '#ffffff',
      secondaryBtnBorder: '#ffffff',
      secondaryBtnText: '#ffffff',
    },

    // Gradient settings
    useGradient = false,
    gradientLight = { from: '#1e3a8a', to: '#1e40af' }, // blue-900 to blue-800
    gradientDark = { from: '#1f2937', to: '#111827' }, // gray-800 to gray-900

    // Content settings
    showBadge = true,
    badgeText = 'Trusted by 500+ Businesses',
    badgeIcon = true,

    title = 'Streamline Your Supply Chain with Sazzad',
    titleHighlight = 'Supply Chain',
    titleHighlightLight = 'linear-gradient(135deg, #fbbf24, #eab308)',
    titleHighlightDark = 'linear-gradient(135deg, #fbbf24, #ca8a04)',

    description = 'End-to-end inventory management and logistics solutions that drive efficiency, reduce costs, and accelerate your business growth.',

    showFeatures = true,
    features = [
      'Real-time Tracking',
      'Warehouse Management',
      'Express Delivery',
      'Inventory Optimization'
    ],
    featuresColumns = 2,

    showCTA = true,
    primaryCTA = { text: 'Get Started', icon: 'arrow' },
    secondaryCTA = { text: 'Watch Demo', icon: 'play' },

    showStats = true,
    stats = [
      { value: '10,000+', label: 'shipments delivered' }
    ],

    showImage = true,
    imageLight = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    imageDark = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    imagePosition = 'right',
    showFloatingElements = true,

    showTrustBadges = true,
    trustBadgeAvatars = 4,

    // Spacing settings
    paddingY = 'py-20 md:py-28',
    paddingX = 'px-4 sm:px-6 lg:px-8',
    containerWidth = 'max-w-7xl',

    // Text sizing
    titleSize = 'text-4xl md:text-5xl lg:text-6xl',
    descriptionSize = 'text-lg md:text-xl',

    // Animation settings
    animations = true,

    // Custom classes
    customClasses = '',
  } = config;

  // Get current theme colors
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  const isDark = theme === 'dark';

  // Dynamic class generators
  const getAlignmentClasses = () => {
    switch (alignment) {
      case 'center': return 'text-center mx-auto';
      case 'right': return 'text-right ml-auto';
      default: return 'text-left';
    }
  };

  const getBackgroundStyle = () => {
    if (useGradient) {
      const gradient = isDark ? gradientDark : gradientLight;
      return {
        background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
        color: currentTheme.text
      };
    }
    return {
      backgroundColor: currentTheme.background,
      color: currentTheme.text
    };
  };

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'arrow': return HiArrowRight;
      case 'play': return HiPlay;
      case 'truck': return HiOutlineTruck;
      case 'clock': return HiOutlineClock;
      case 'globe': return HiOutlineGlobe;
      case 'check': return HiCheckCircle;
      case 'bolt': return HiLightningBolt;
      case 'star': return HiStar;
      case 'mail': return HiMail;
      case 'phone': return HiPhone;
      case 'location': return HiLocationMarker;
      case 'users': return HiUserGroup;
      default: return null;
    }
  };

  const renderFeatures = () => {
    if (!showFeatures) return null;

    const gridCols = featuresColumns === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2';

    return (
      <div className={`grid ${gridCols} gap-4 py-4`}>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <svg
              style={{ color: currentTheme.featureIcon }}
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span style={{ color: currentTheme.textSecondary }} className="text-sm md:text-base">
              {feature}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const renderCTA = () => {
    if (!showCTA) return null;

    const PrimaryIcon = primaryCTA?.icon ? getIconComponent(primaryCTA.icon) : null;
    const SecondaryIcon = secondaryCTA?.icon ? getIconComponent(secondaryCTA.icon) : null;

    return (
      <div className="flex flex-wrap gap-4 pt-4">
        {primaryCTA?.text && (
          <button
            style={{
              backgroundColor: currentTheme.primaryBtnBg,
              color: currentTheme.primaryBtnText
            }}
            className="group font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = currentTheme.primaryBtnHover}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = currentTheme.primaryBtnBg}
          >
            {primaryCTA.text}
            {PrimaryIcon && <PrimaryIcon className="ml-2 group-hover:translate-x-1 transition-transform" />}
          </button>
        )}

        {secondaryCTA?.text && (
          <button
            style={{
              borderColor: currentTheme.secondaryBtnBorder,
              color: currentTheme.secondaryBtnText
            }}
            className="bg-transparent border-2 hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center"
          >
            {SecondaryIcon && <SecondaryIcon className="mr-2" />}
            {secondaryCTA.text}
          </button>
        )}
      </div>
    );
  };

  const renderStats = () => {
    if (!showStats) return null;

    return (
      <div style={{ borderColor: currentTheme.border }} className="flex items-center space-x-6 pt-6 border-t">
        {showTrustBadges && (
          <div className="flex -space-x-2">
            {[...Array(trustBadgeAvatars)].map((_, i) => (
              <div
                key={i}
                style={{ borderColor: currentTheme.cardBg }}
                className="w-8 h-8 rounded-full bg-linear-to-br from-yellow-300 to-yellow-500 border-2"
              ></div>
            ))}
          </div>
        )}
        {stats.map((stat, index) => (
          <p key={index} style={{ color: currentTheme.textSecondary }} className="text-sm opacity-80">
            <span className="font-bold" style={{ color: currentTheme.text }}>{stat.value}</span> {stat.label}
          </p>
        ))}
      </div>
    );
  };

  const renderImage = () => {
    if (!showImage) return null;

    const imageUrl = isDark ? imageDark : imageLight;

    if (imagePosition === 'background') {
      return (
        <div className="absolute inset-0 -z-10">
          <img src={imageUrl} alt="Hero Background" className="w-full h-full object-cover" />
          <div style={{ backgroundColor: isDark ? 'rgba(17, 24, 39, 0.5)' : 'rgba(0, 0, 0, 0.5)' }} className="absolute inset-0"></div>
        </div>
      );
    }

    return (
      <div className="relative">
        <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'shadow-gray-900/50' : ''}`}>
          <img src={imageUrl} alt="Hero" className="w-full h-auto object-cover" />

          {showFloatingElements && (
            <>
              {/* Floating Stats Card */}
              <div className={`absolute bottom-6 left-6 ${isDark ? 'bg-gray-800/80' : 'bg-white/10'} backdrop-blur-md rounded-lg p-4 border`}
                style={{ borderColor: isDark ? currentTheme.border : 'rgba(255,255,255,0.2)' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-blue-200'}`}>Live Shipment</p>
                    <p className={`text-sm font-bold text-white`}>Delivered in 2h</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className={`absolute top-6 right-6 ${isDark ? 'bg-gray-800/80' : 'bg-white/10'} backdrop-blur-md rounded-full px-4 py-2 border`}
                style={{ borderColor: isDark ? currentTheme.border : 'rgba(255,255,255,0.2)' }}
              >
                <p className="text-sm font-semibold text-white">⭐ 4.9/5 Rating</p>
              </div>
            </>
          )}
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

  const renderContent = () => (
    <div className={`space-y-8 ${getAlignmentClasses()}`}>
      {showBadge && (
        <div
          style={{
            backgroundColor: currentTheme.badgeBg,
            borderColor: currentTheme.border,
            color: currentTheme.badgeText
          }}
          className={`inline-flex items-center backdrop-blur-sm rounded-full px-4 py-2 border ${alignment === 'center' ? 'mx-auto' : ''}`}
        >
          {badgeIcon && <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>}
          <span className="text-sm font-medium">{badgeText}</span>
        </div>
      )}

      <h1 className={`font-bold leading-tight ${titleSize}`}>
        {title.split(titleHighlight).map((part, index, array) => (
          <React.Fragment key={index}>
            <span style={{ color: currentTheme.text }}>{part}</span>
            {index < array.length - 1 && (
              <span
                style={{
                  background: isDark ? titleHighlightDark : titleHighlightLight,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {titleHighlight}
              </span>
            )}
          </React.Fragment>
        ))}
      </h1>

      <p
        style={{ color: currentTheme.textSecondary }}
        className={`max-w-lg ${descriptionSize} opacity-90 ${alignment === 'center' ? 'mx-auto' : ''}`}
      >
        {description}
      </p>

      {renderFeatures()}
      {renderCTA()}
      {renderStats()}
    </div>
  );

  // Layout renderer
  const renderLayout = () => {
    if (layout === 'centered') {
      return (
        <div className={`${containerWidth} mx-auto ${paddingX} ${paddingY}`}>
          <div className="max-w-4xl mx-auto">
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
            <img src={isDark ? imageDark : imageLight} alt="Hero" className="w-full h-full object-cover" />
            <div style={{ backgroundColor: isDark ? 'rgba(17, 24, 39, 0.5)' : 'rgba(0, 0, 0, 0.5)' }} className="absolute inset-0"></div>
          </div>
          <div className={`relative z-10 ${containerWidth} mx-auto ${paddingX} ${paddingY} text-white`}>
            {renderContent()}
          </div>
        </div>
      );
    }

    // Split layout
    const imageOnLeft = imagePosition === 'left';

    return (
      <div className={`${containerWidth} mx-auto ${paddingX} ${paddingY}`}>
        <div className={`grid md:grid-cols-2 gap-12 items-center`}>
          {imageOnLeft ? (
            <>
              <div>{renderImage()}</div>
              <div>{renderContent()}</div>
            </>
          ) : (
            <>
              <div>{renderContent()}</div>
              <div>{renderImage()}</div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      style={getBackgroundStyle()}
      className={`relative overflow-hidden ${customClasses}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{ backgroundColor: currentTheme.accent }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl"
        ></div>
        <div
          style={{ backgroundColor: currentTheme.accent }}
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl"
        ></div>
      </div>

      {renderLayout()}
    </div>
  );
};

// Default configuration with hex colors
const defaultConfig = {
  layout: 'split',
  alignment: 'left',
  useGradient: true,

  // Light theme colors (fully customizable)
  lightTheme: {
    background: '#ffffff',
    text: '#111827',
    textSecondary: '#4b5563',
    accent: '#2563eb',
    badgeBg: '#eff6ff',
    badgeText: '#1d4ed8',
    cardBg: '#ffffff',
    border: '#e5e7eb',
    featureIcon: '#eab308',
    overlay: 'from-black/60',
    primaryBtnBg: '#eab308',
    primaryBtnHover: '#fbbf24',
    primaryBtnText: '#1e3a8a',
    secondaryBtnBorder: '#111827',
    secondaryBtnText: '#111827',
  },

  // Dark theme colors (fully customizable)
  darkTheme: {
    background: '#111827',
    text: '#ffffff',
    textSecondary: '#d1d5db',
    accent: '#60a5fa',
    badgeBg: '#1f2937',
    badgeText: '#93c5fd',
    cardBg: '#1f2937',
    border: '#374151',
    featureIcon: '#fbbf24',
    overlay: 'from-gray-900/80',
    primaryBtnBg: '#ca8a04',
    primaryBtnHover: '#eab308',
    primaryBtnText: '#ffffff',
    secondaryBtnBorder: '#ffffff',
    secondaryBtnText: '#ffffff',
  },

  gradientLight: { from: '#1e3a8a', to: '#1e40af' },
  gradientDark: { from: '#1f2937', to: '#111827' },

  showBadge: true,
  badgeText: 'Trusted by 500+ Businesses',
  badgeIcon: true,

  title: 'Streamline Your Supply Chain with Sazzad',
  titleHighlight: 'Supply Chain',
  titleHighlightLight: 'linear-gradient(135deg, #fbbf24, #eab308)',
  titleHighlightDark: 'linear-gradient(135deg, #fbbf24, #ca8a04)',

  description: 'End-to-end inventory management and logistics solutions that drive efficiency, reduce costs, and accelerate your business growth.',

  showFeatures: true,
  features: ['Real-time Tracking', 'Warehouse Management', 'Express Delivery', 'Inventory Optimization'],
  featuresColumns: 2,

  showCTA: true,
  primaryCTA: { text: 'Get Started', icon: 'arrow' },
  secondaryCTA: { text: 'Watch Demo', icon: 'play' },

  showStats: true,
  stats: [{ value: '10,000+', label: 'shipments delivered' }],

  showImage: true,
  imageLight: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  imageDark: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  imagePosition: 'right',
  showFloatingElements: true,

  showTrustBadges: true,
  trustBadgeAvatars: 4,

  paddingY: 'py-20 md:py-28',
  paddingX: 'px-4 sm:px-6 lg:px-8',
  containerWidth: 'max-w-7xl',
  titleSize: 'text-4xl md:text-5xl lg:text-6xl',
  descriptionSize: 'text-lg md:text-xl',
  animations: true,
  customClasses: '',
};

export default HeroSectionCustom;