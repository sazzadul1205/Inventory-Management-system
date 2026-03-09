//  page/frontend/Home/HeroSection/components/getIconComponent.jsx

// getIconComponent

import { motion } from 'framer-motion';

// Icon libraries
import * as Icons from 'react-icons/hi2';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';

// Icon mapping helper
const getIconComponent = (iconName) => {
  // Try different icon libraries
  const allIcons = { ...Icons, ...FaIcons, ...BsIcons };
  return allIcons[iconName] || allIcons['HiCheckCircle'];
};

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
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.02,
    x: 5,
    transition: { duration: 0.2 }
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
      damping: 20
    }
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { duration: 0.2 }
  }
};

const FeaturesSection = ({
  // Visibility
  showFeatures,
  features,

  // Layout
  columns = 2,
  layout = 'grid', // grid, list, masonry, carousel
  gap = 'md',

  // Styling
  iconSize = 'md',
  iconColor = 'text-blue-500',
  iconColorDark = 'dark:text-blue-400',
  textColor = 'text-gray-600',
  textColorDark = 'dark:text-gray-400',

  // Interactive
  interactive = false,
  onFeatureClick,

  // Animation Props
  animation = 'fade', // fade, slide, scale, none
  animationType = 'entrance', // entrance, continuous, hover
  staggerDelay = 0.1,
  viewportOnce = true,

  // Card styling
  cardStyle = false,
  cardBg = 'bg-white',
  cardBgDark = 'dark:bg-gray-800',
  cardRadius = 'rounded-lg',
  cardPadding = 'p-3 md:p-4',
  cardShadow = 'shadow-sm',
  cardHoverEffect = true,

  // Divider
  showDividers = false,
  dividerColor = 'border-gray-200',
  dividerColorDark = 'dark:border-gray-700',

  // Additional
  className = '',
  ...props
}) => {
  if (!showFeatures || !features?.length) return null;

  const gridCols = FEATURES_COLUMNS[columns] || FEATURES_COLUMNS[2];
  const gapClass = FEATURES_GAPS[gap] || FEATURES_GAPS.md;
  const iconSizeClass = ICON_SIZES[iconSize] || ICON_SIZES.md;

  // Layout classes
  const getLayoutClasses = () => {
    switch (layout) {
      case 'grid':
        return `grid ${gridCols} ${gapClass}`;
      case 'list':
        return `flex flex-col ${gapClass === 'gap-0' ? 'space-y-2' : `space-y-${gap}`}`;
      case 'masonry':
        return `columns-1 md:columns-2 lg:columns-${columns} ${gapClass}`;
      case 'carousel':
        return 'flex overflow-x-auto snap-x snap-mandatory pb-4';
      default:
        return `grid ${gridCols} ${gapClass}`;
    }
  };

  // Item classes
  const getItemClasses = (index) => {
    const baseClasses = cardStyle
      ? `${cardBg} ${cardBgDark} ${cardRadius} ${cardPadding} ${cardShadow} ${cardHoverEffect ? 'transition-all duration-300 hover:shadow-md' : ''}`
      : '';

    const dividerClasses = showDividers && index < features.length - 1
      ? layout === 'list'
        ? `border-b ${dividerColor} ${dividerColorDark} pb-${gap} mb-${gap}`
        : ''
      : '';

    return `${baseClasses} ${dividerClasses} ${layout === 'carousel' ? 'snap-start flex-shrink-0 w-64 md:w-72' : ''}`;
  };

  // Animation variants based on animation type
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
            transition: { staggerChildren: staggerDelay }
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
          visible: { opacity: 1 }
        };
      case 'slide':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 260, damping: 20 }
          }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 260, damping: 20 }
          }
        };
      default:
        return {};
    }
  };

  const containerVariants = getContainerVariants();
  const itemVariants = getItemVariants();

  // Hover and tap animations
  const hoverProps = interactive || cardHoverEffect ? {
    whileHover: "hover",
    whileTap: "tap"
  } : {};

  return (
    <motion.div
      className={`${getLayoutClasses()} ${className}`}
      initial={animationType === 'entrance' ? "hidden" : false}
      whileInView={animationType === 'entrance' ? "visible" : false}
      viewport={{ once: viewportOnce, amount: 0.2 }}
      variants={containerVariants}
      {...props}
    >
      {features.map((feature, index) => {
        const featureText = typeof feature === 'string' ? feature : feature.text;
        const featureIcon = feature.icon || (typeof feature === 'object' && feature.icon);
        const featureDescription = feature.description;
        const featureBadge = feature.badge;

        const Icon = featureIcon ? getIconComponent(featureIcon) : null;

        // Continuous animation for icons
        const iconAnimation = animationType === 'continuous' ? {
          animate: {
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }
        } : {};

        // Masonry layout needs special handling
        if (layout === 'masonry') {
          return (
            <motion.div
              key={index}
              className={`${getItemClasses(index)} break-inside-avoid mb-${gap}`}
              variants={itemVariants}
              {...hoverProps}
              onClick={() => onFeatureClick?.(feature, index)}
              custom={index}
            >
              <motion.div
                className="flex items-start space-x-3"
                variants={ITEM_VARIANTS}
              >
                {Icon ? (
                  <motion.div
                    variants={ICON_VARIANTS}
                    {...iconAnimation}
                  >
                    <Icon className={`${iconSizeClass} ${iconColor} ${iconColorDark} shrink-0`} />
                  </motion.div>
                ) : (
                  <motion.svg
                    className={`${iconSizeClass} ${iconColor} ${iconColorDark} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    variants={ICON_VARIANTS}
                    {...iconAnimation}
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </motion.svg>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm md:text-base ${textColor} ${textColorDark}`}>
                      {featureText}
                    </span>
                    {featureBadge && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="px-1.5 py-0.5 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                      >
                        {featureBadge}
                      </motion.span>
                    )}
                  </div>
                  {featureDescription && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1"
                    >
                      {featureDescription}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        }

        // Regular grid/list/carousel layout
        return (
          <motion.div
            key={index}
            className={getItemClasses(index)}
            variants={itemVariants}
            {...hoverProps}
            onClick={() => onFeatureClick?.(feature, index)}
            custom={index}
            whileInView={animationType === 'continuous' ? {
              scale: [1, 1.02, 1],
              transition: { duration: 2, repeat: Infinity }
            } : {}}
          >
            <motion.div
              className="flex items-center space-x-2"
              variants={ITEM_VARIANTS}
            >
              {Icon ? (
                <motion.div
                  variants={ICON_VARIANTS}
                  {...iconAnimation}
                >
                  <Icon className={`${iconSizeClass} ${iconColor} ${iconColorDark} shrink-0`} />
                </motion.div>
              ) : (
                <motion.svg
                  className={`${iconSizeClass} ${iconColor} ${iconColorDark} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  variants={ICON_VARIANTS}
                  {...iconAnimation}
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </motion.svg>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-sm md:text-base ${textColor} ${textColorDark}`}>
                    {featureText}
                  </span>
                  {featureBadge && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="px-1.5 py-0.5 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                    >
                      {featureBadge}
                    </motion.span>
                  )}
                </div>
                {featureDescription && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1"
                  >
                    {featureDescription}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// Preset configurations for common use cases
FeaturesSection.presets = {
  // Feature grid with cards
  cardGrid: {
    columns: 3,
    layout: 'grid',
    gap: 'md',
    cardStyle: true,
    cardBg: 'bg-white',
    cardBgDark: 'dark:bg-gray-800',
    cardRadius: 'rounded-xl',
    cardShadow: 'shadow-md',
    cardHoverEffect: true,
    animation: 'slide',
    animationType: 'entrance',
    interactive: true
  },

  // Simple checklist
  checklist: {
    columns: 1,
    layout: 'list',
    gap: 'sm',
    iconSize: 'sm',
    iconColor: 'text-green-500',
    textColor: 'text-gray-700',
    textColorDark: 'dark:text-gray-300',
    animation: 'fade',
    showDividers: false
  },

  // Feature list with dividers
  dividedList: {
    columns: 1,
    layout: 'list',
    gap: 'md',
    showDividers: true,
    dividerColor: 'border-gray-200',
    dividerColorDark: 'dark:border-gray-700',
    iconColor: 'text-blue-500',
    animation: 'slide'
  },

  // Masonry layout
  masonry: {
    columns: 3,
    layout: 'masonry',
    gap: 'md',
    cardStyle: true,
    cardBg: 'bg-white',
    cardBgDark: 'dark:bg-gray-800',
    animation: 'scale'
  },

  // Carousel for mobile
  carousel: {
    columns: 1,
    layout: 'carousel',
    gap: 'md',
    cardStyle: true,
    cardPadding: 'p-4',
    cardRadius: 'rounded-2xl',
    animation: 'slide'
  },

  // Icon-only features
  iconOnly: {
    columns: 4,
    layout: 'grid',
    iconSize: 'xl',
    iconColor: 'text-purple-500',
    textColor: 'text-gray-900',
    textColorDark: 'dark:text-white',
    cardStyle: true,
    cardPadding: 'p-4 text-center',
    animation: 'scale'
  }
};

// Example usage component
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
      description: "Enterprise-grade security built-in"
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
      description: "Grows with your business needs"
    }
  ];

  return (
    <div className="space-y-12 p-8">
      {/* Card grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Card Grid with Hover Effects</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures}
          {...FeaturesSection.presets.cardGrid}
        />
      </div>

      {/* Simple checklist */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Checklist Style</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures.slice(0, 4)}
          {...FeaturesSection.presets.checklist}
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

      {/* Masonry layout */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Masonry Layout</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures}
          {...FeaturesSection.presets.masonry}
        />
      </div>

      {/* Carousel */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Carousel (Mobile-friendly)</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures}
          {...FeaturesSection.presets.carousel}
        />
      </div>

      {/* Interactive with click handlers */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Features</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures.slice(0, 3)}
          columns={3}
          layout="grid"
          cardStyle={true}
          interactive={true}
          onFeatureClick={(feature, index) => alert(`Clicked: ${feature.text}`)}
          animation="scale"
          animationType="entrance"
        />
      </div>

      {/* Continuous icon animation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Continuous Icon Animation</h3>
        <FeaturesSection
          showFeatures={true}
          features={sampleFeatures.slice(0, 3)}
          columns={3}
          layout="grid"
          animationType="continuous"
          iconColor="text-purple-500"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;