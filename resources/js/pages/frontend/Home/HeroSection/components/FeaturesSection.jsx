// =============================================
// SECTION 5: FEATURES COMPONENT WITH MOTION
// =============================================

import { motion } from 'framer-motion';
import React from 'react';
import * as Icons from 'react-icons/hi2';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

// Icon mapping helper
const getIconComponent = (iconName) => {
  if (!iconName) return null;

  // Try different icon libraries
  const allIcons = {
    ...Icons,
    ...FaIcons,
    ...BsIcons,
    ...MdIcons,
    // Common aliases
    HiCheckCircle: Icons.HiCheckCircle,
    HiStar: Icons.HiStar,
    HiSparkles: Icons.HiSparkles,
    HiFire: Icons.HiFire,
    HiRocketLaunch: Icons.HiRocketLaunch,
    HiShieldCheck: Icons.HiShieldCheck,
    HiBellAlert: Icons.HiBellAlert,
    HiLightBulb: Icons.HiLightBulb,
    FaCrown: FaIcons.FaCrown,
    FaGem: FaIcons.FaGem,
    FaBolt: FaIcons.FaBolt,
    FaMedal: FaIcons.FaMedal,
    BsHeartFill: BsIcons.BsHeartFill,
    MdNewReleases: MdIcons.MdNewReleases,
    MdVerified: MdIcons.MdVerified
  };

  return allIcons[iconName] || allIcons['HiCheckCircle'];
};

// Layout configurations
const FEATURES_COLUMNS = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
  6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
};

const FEATURES_GAPS = {
  none: 'gap-0',
  xs: 'gap-1 md:gap-2',
  sm: 'gap-2 md:gap-3',
  md: 'gap-3 md:gap-4',
  lg: 'gap-4 md:gap-6',
  xl: 'gap-6 md:gap-8',
  '2xl': 'gap-8 md:gap-12'
};

const ICON_SIZES = {
  xs: 'w-3 h-3 md:w-4 md:h-4',
  sm: 'w-4 h-4 md:w-5 md:h-5',
  md: 'w-5 h-5 md:w-6 md:h-6',
  lg: 'w-6 h-6 md:w-7 md:h-7',
  xl: 'w-7 h-7 md:w-8 md:h-8',
  '2xl': 'w-8 h-8 md:w-10 md:h-10'
};

// Animation variants
const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  },
  hover: {
    scale: 1.02,
    x: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  },
  tap: { scale: 0.98 }
};

const ICON_VARIANTS = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.1
    }
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const TEXT_VARIANTS = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      delay: 0.2
    }
  }
};

// Continuous animation variants
const CONTINUOUS_ANIMATIONS = {
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  bounce: {
    y: [0, -5, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  rotate: {
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  shake: {
    x: [0, -3, 3, -3, 3, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  glow: {
    filter: [
      'drop-shadow(0 0 0px currentColor)',
      'drop-shadow(0 0 5px currentColor)',
      'drop-shadow(0 0 0px currentColor)'
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const FeaturesSection = ({
  // Visibility
  showFeatures,
  features,

  // Layout
  featuresColumns = 2,
  featuresLayout = 'grid',
  featuresGap = 'gap-4',

  // Styling
  featureIconSize = 'w-5 h-5 md:w-6 md:h-6',
  featureIconColor = 'text-blue-500',
  featureIconColorDark = 'dark:text-blue-400',
  textSecondaryColor = 'text-gray-600',
  textSecondaryColorDark = 'dark:text-gray-400',

  // Card styling
  cardStyle = false,
  cardBg = 'bg-white',
  cardBgDark = 'dark:bg-gray-800',
  cardRadius = 'rounded-lg',
  cardPadding = 'p-3 md:p-4',
  cardShadow = 'shadow-sm',
  cardBorder = false,
  cardBorderColor = 'border border-gray-200',
  cardBorderColorDark = 'dark:border-gray-700',

  // Animation Props
  animation = 'fade', // fade, slide, scale, none
  animationType = 'entrance', // entrance, continuous, hover
  continuousAnimation = 'pulse', // pulse, bounce, rotate, shake, glow
  staggerDelay = 0.1,
  viewportOnce = true,
  viewportAmount = 0.2,

  // Interactive
  interactive = false,
  onFeatureClick,
  hoverEffect = true,

  // Additional features
  showDividers = false,
  dividerColor = 'border-gray-200',
  dividerColorDark = 'dark:border-gray-700',

  // Alignment
  align = 'left', // left, center, right

  // Custom content rendering
  renderFeature,

  // Additional
  className = '',
  ...props
}) => {
  if (!showFeatures || !features?.length) return null;

  // Parse gap value (could be string like 'gap-4' or number)
  const gapClass = FEATURES_GAPS[featuresGap] || featuresGap;

  // Parse columns
  const gridCols = FEATURES_COLUMNS[featuresColumns] || FEATURES_COLUMNS[2];

  // Layout classes
  const getLayoutClasses = () => {
    const baseLayout = featuresLayout === 'grid'
      ? `grid ${gridCols} ${gapClass}`
      : 'flex flex-col';

    const spacing = featuresLayout === 'list'
      ? gapClass.replace('gap-', 'space-y-')
      : '';

    return `${baseLayout} ${spacing}`;
  };

  // Alignment classes for items
  const getAlignmentClasses = () => {
    switch (align) {
      case 'center':
        return 'justify-center text-center';
      case 'right':
        return 'justify-end text-right';
      default:
        return 'justify-start text-left';
    }
  };

  // Get animation variants based on type
  const getContainerVariants = () => {
    if (animationType !== 'entrance') return {};

    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: staggerDelay }
          }
        };
      case 'slide':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: staggerDelay }
          }
        };
      case 'scale':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: staggerDelay * 1.5 }
          }
        };
      default:
        return {};
    }
  };

  const getItemVariants = () => {
    if (animationType !== 'entrance') return {};

    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.5 }
          }
        };
      case 'slide':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 24
            }
          }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 24
            }
          }
        };
      default:
        return ITEM_VARIANTS;
    }
  };

  const containerVariants = getContainerVariants();
  const itemVariants = getItemVariants();

  // Hover and tap animations
  const getHoverProps = () => {
    if (!hoverEffect && !interactive) return {};

    return {
      whileHover: "hover",
      whileTap: "tap",
      variants: ITEM_VARIANTS
    };
  };

  // Get continuous animation for icons
  const getIconContinuousAnimation = () => {
    if (animationType !== 'continuous') return {};

    return {
      animate: CONTINUOUS_ANIMATIONS[continuousAnimation] || CONTINUOUS_ANIMATIONS.pulse
    };
  };

  // Render a single feature item
  const renderFeatureItem = (feature, index) => {
    // Handle different feature formats
    const featureText = typeof feature === 'string' ? feature : feature.text;
    const featureIcon = feature.icon || (typeof feature === 'object' && feature.icon);
    const featureDescription = feature.description;
    const featureBadge = feature.badge;
    const featureHighlight = feature.highlight;

    const Icon = featureIcon ? getIconComponent(featureIcon) : null;

    // Custom render function
    if (renderFeature) {
      return renderFeature(feature, index);
    }

    // Card classes
    const cardClasses = cardStyle
      ? `${cardBg} ${cardBgDark} ${cardRadius} ${cardPadding} ${cardShadow} ${cardBorder ? cardBorderColor : ''} ${cardBorder ? cardBorderColorDark : ''}`
      : '';

    // Divider classes for list layout
    const dividerClasses = showDividers && index < features.length - 1 && featuresLayout === 'list'
      ? `border-b ${dividerColor} ${dividerColorDark} pb-${gapClass.replace('gap-', '')} mb-${gapClass.replace('gap-', '')}`
      : '';

    return (
      <motion.div
        key={index}
        className={`${cardClasses} ${dividerClasses} ${getAlignmentClasses()}`}
        variants={itemVariants}
        custom={index}
        {...getHoverProps()}
        onClick={() => onFeatureClick?.(feature, index)}
        style={{
          cursor: interactive ? 'pointer' : 'default',
          ...(featureHighlight ? {
            borderLeft: '3px solid currentColor',
            paddingLeft: '0.75rem'
          } : {})
        }}
      >
        <motion.div
          className={`flex items-center ${align === 'center' ? 'justify-center' : ''} space-x-2`}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.1 } }
          }}
        >
          {/* Icon with animations */}
          {Icon ? (
            <motion.div
              variants={ICON_VARIANTS}
              {...getIconContinuousAnimation()}
            >
              <Icon className={`${featureIconSize} ${featureIconColor} ${featureIconColorDark} shrink-0`} />
            </motion.div>
          ) : (
            <motion.svg
              className={`${featureIconSize} ${featureIconColor} ${featureIconColorDark} shrink-0`}
              fill="currentColor"
              viewBox="0 0 20 20"
              variants={ICON_VARIANTS}
              {...getIconContinuousAnimation()}
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </motion.svg>
          )}

          {/* Text content with animations */}
          <motion.div
            className="flex-1"
            variants={TEXT_VARIANTS}
          >
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-sm md:text-base ${textSecondaryColor} ${textSecondaryColorDark}`}>
                {featureText}
              </span>

              {/* Badge */}
              {featureBadge && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    delay: 0.3
                  }}
                  className="px-1.5 py-0.5 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full whitespace-nowrap"
                >
                  {featureBadge}
                </motion.span>
              )}
            </div>

            {/* Description */}
            {featureDescription && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ delay: 0.2 }}
                className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1"
              >
                {featureDescription}
              </motion.p>
            )}
          </motion.div>

          {/* Optional chevron for interactive items */}
          {interactive && (
            <motion.div
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className={`${getLayoutClasses()} py-4 ${className}`}
      initial={animationType === 'entrance' ? "hidden" : false}
      whileInView={animationType === 'entrance' ? "visible" : false}
      viewport={{ once: viewportOnce, amount: viewportAmount }}
      variants={containerVariants}
      {...props}
    >
      {features.map((feature, index) => renderFeatureItem(feature, index))}
    </motion.div>
  );
};

// Preset configurations for common use cases
FeaturesSection.presets = {
  // Basic feature list
  basic: {
    featuresLayout: 'list',
    featuresGap: 'sm',
    animation: 'slide',
    animationType: 'entrance',
    featureIconSize: 'w-5 h-5',
    featureIconColor: 'text-green-500'
  },

  // Feature grid with cards
  cardGrid: {
    featuresLayout: 'grid',
    featuresColumns: 3,
    featuresGap: 'md',
    cardStyle: true,
    cardBg: 'bg-white',
    cardBgDark: 'dark:bg-gray-800',
    cardRadius: 'rounded-xl',
    cardShadow: 'shadow-md',
    cardBorder: true,
    hoverEffect: true,
    interactive: true,
    animation: 'scale',
    animationType: 'entrance'
  },

  // Centered feature grid
  centered: {
    featuresLayout: 'grid',
    featuresColumns: 2,
    featuresGap: 'lg',
    align: 'center',
    cardStyle: true,
    cardPadding: 'p-6',
    animation: 'fade',
    featureIconSize: 'w-8 h-8'
  },

  // Checklist style
  checklist: {
    featuresLayout: 'list',
    featuresGap: 'md',
    featureIconSize: 'w-5 h-5',
    featureIconColor: 'text-green-500',
    featureIconColorDark: 'dark:text-green-400',
    showDividers: false,
    animation: 'slide'
  },

  // Divided list
  dividedList: {
    featuresLayout: 'list',
    featuresGap: 'md',
    showDividers: true,
    dividerColor: 'border-gray-200',
    dividerColorDark: 'dark:border-gray-700',
    animation: 'fade'
  },

  // Continuous animation
  animated: {
    featuresLayout: 'grid',
    featuresColumns: 4,
    featuresGap: 'md',
    animationType: 'continuous',
    continuousAnimation: 'pulse',
    featureIconColor: 'text-purple-500',
    featureIconSize: 'w-7 h-7'
  },

  // With badges
  withBadges: {
    featuresLayout: 'grid',
    featuresColumns: 2,
    featuresGap: 'md',
    cardStyle: true,
    cardPadding: 'p-4',
    animation: 'slide',
    hoverEffect: true
  },

  // Minimal
  minimal: {
    featuresLayout: 'list',
    featuresGap: 'sm',
    featureIconSize: 'w-4 h-4',
    featureIconColor: 'text-gray-400',
    textSecondaryColor: 'text-gray-500',
    animation: 'fade'
  }
};

// Example usage component with sample data
export const FeaturesShowcase = () => {
  const sampleFeatures = [
    {
      text: "Fast Performance",
      icon: "HiRocketLaunch",
      description: "Lightning fast load times and optimizations",
      badge: "New"
    },
    {
      text: "Secure by Default",
      icon: "HiShieldCheck",
      description: "Enterprise-grade security built-in",
      badge: "Popular"
    },
    {
      text: "Easy Integration",
      icon: "HiCog",
      description: "Connect with your favorite tools"
    },
    {
      text: "24/7 Support",
      icon: "HiChatBubbleLeftRight",
      description: "Round-the-clock customer support"
    },
    {
      text: "Regular Updates",
      icon: "HiArrowPath",
      description: "Constant improvements and new features"
    },
    {
      text: "Scalable Solution",
      icon: "HiChartBar",
      description: "Grows with your business needs",
      badge: "Enterprise"
    }
  ];

  return (
    <div className="space-y-12 p-8 max-w-7xl mx-auto">
      {/* Basic list */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Feature List</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures.slice(0, 4)}
          {...FeaturesSection.presets.basic}
        />
      </div>

      {/* Card grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Card Grid with Hover</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures}
          {...FeaturesSection.presets.cardGrid}
        />
      </div>

      {/* Centered grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Centered Cards</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures.slice(0, 4)}
          {...FeaturesSection.presets.centered}
        />
      </div>

      {/* Divided list */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Divided List</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures.slice(0, 4)}
          {...FeaturesSection.presets.dividedList}
        />
      </div>

      {/* Continuous animation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Continuous Icon Animation</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures.slice(0, 4)}
          {...FeaturesSection.presets.animated}
        />
      </div>

      {/* Interactive with click handler */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Features (Clickable)</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures.slice(0, 3)}
          featuresColumns={3}
          featuresLayout="grid"
          featuresGap="md"
          cardStyle={true}
          interactive={true}
          hoverEffect={true}
          onFeatureClick={(feature, index) => alert(`Clicked: ${feature.text}`)}
          animation="scale"
        />
      </div>

      {/* With badges */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Features with Badges</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures}
          {...FeaturesSection.presets.withBadges}
        />
      </div>

      {/* Minimal style */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Minimal Style</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures.slice(0, 3).map(f => f.text)}
          {...FeaturesSection.presets.minimal}
        />
      </div>

      {/* Custom columns */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">4 Columns Grid</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures}
          featuresColumns={4}
          featuresLayout="grid"
          featuresGap="md"
          cardStyle={true}
          cardPadding="p-3"
          animation="fade"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;