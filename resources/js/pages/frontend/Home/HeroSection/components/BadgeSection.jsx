// page/frontend/Home/HeroSection/components/BadgeSection.jsx

import { motion } from 'framer-motion';
import * as HiIcons from "react-icons/hi2";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

// Icon mapping object to dynamically load icons
const ICON_LIBRARIES = {
  hi2: HiIcons,
  bs: BsIcons,
  md: MdIcons,
  fa: FaIcons
};

const BadgeSection = ({ config }) => {
  // If no config or badge not visible, return null
  if (!config || !config.showBadge) return null;

  // Destructure config with defaults
  const {
    // Content
    badgeText = '',

    // Visual
    variant = 'filled',
    size = 'md',
    icon = null,
    customIcon = null,

    // Colors & Styling - Enhanced dark mode control
    colors = {},
    darkMode = {}, // Separate dark mode config for complete control
    radius = 'rounded-full',
    alignment = 'left',

    // Animation
    animation = null,
    hoverAnimation = null,
    tapAnimation = null,

    // Interactions
    onClick = null,
    href = null,
    tooltip = null,

    // Drag
    drag = false,
    dragConstraints = {},

    // Dark mode toggle (can be used to force light/dark mode regardless of system)
    forceTheme = null, // 'light', 'dark', or null (follow system)

    // Custom classes
    className = '',

    // Any other custom props
    ...customProps
  } = config;

  // Helper function to combine light and dark classes
  const combineClasses = (lightClass, darkClass) => {
    if (!darkClass) return lightClass;
    if (!lightClass) return darkClass;

    // If forceTheme is set, only return the appropriate class
    if (forceTheme === 'light') return lightClass;
    if (forceTheme === 'dark') return darkClass.replace('dark:', '');

    // Otherwise return both (for system dark mode)
    return `${lightClass} ${darkClass}`;
  };

  // Styles based on variant with enhanced dark mode control
  const variantStyles = {
    filled: {
      container: combineClasses(
        colors.bg || 'bg-blue-500',
        darkMode.bg || colors.bgDark || 'dark:bg-blue-600'
      ),
      icon: combineClasses(
        colors.icon || 'text-white',
        darkMode.icon || colors.iconDark || 'dark:text-white'
      ),
      text: combineClasses(
        colors.text || 'text-white',
        darkMode.text || colors.textDark || 'dark:text-white'
      ),
      border: combineClasses(
        colors.border || '',
        darkMode.border || colors.borderDark || ''
      )
    },
    outlined: {
      container: combineClasses(
        `bg-transparent border-2 ${colors.border || 'border-blue-500'}`,
        `dark:bg-transparent ${darkMode.border || colors.borderDark || 'dark:border-blue-400'}`
      ),
      icon: combineClasses(
        colors.icon || 'text-blue-500',
        darkMode.icon || colors.iconDark || 'dark:text-blue-400'
      ),
      text: combineClasses(
        colors.text || 'text-blue-500',
        darkMode.text || colors.textDark || 'dark:text-blue-400'
      ),
      border: combineClasses(
        colors.border || 'border-blue-500',
        darkMode.border || colors.borderDark || 'dark:border-blue-400'
      )
    },
    subtle: {
      container: combineClasses(
        `${colors.bg || 'bg-blue-500'} bg-opacity-10 border border-opacity-20 ${colors.border || 'border-blue-500'}`,
        `${darkMode.bg || colors.bgDark || 'dark:bg-blue-600'} dark:bg-opacity-10 dark:border-opacity-20 ${darkMode.border || colors.borderDark || 'dark:border-blue-400'}`
      ),
      icon: combineClasses(
        colors.icon || 'text-blue-500',
        darkMode.icon || colors.iconDark || 'dark:text-blue-400'
      ),
      text: combineClasses(
        colors.text || 'text-blue-600',
        darkMode.text || colors.textDark || 'dark:text-blue-400'
      ),
      border: combineClasses(
        colors.border || 'border-blue-500',
        darkMode.border || colors.borderDark || 'dark:border-blue-400'
      )
    },
    gradient: {
      container: combineClasses(
        `bg-gradient-to-r ${colors.bg || 'from-blue-500 to-purple-600'}`,
        `dark:bg-gradient-to-r ${darkMode.bg || colors.bgDark || 'dark:from-blue-600 dark:to-purple-700'}`
      ),
      icon: combineClasses(
        colors.icon || 'text-white',
        darkMode.icon || colors.iconDark || 'dark:text-white'
      ),
      text: combineClasses(
        colors.text || 'text-white',
        darkMode.text || colors.textDark || 'dark:text-white'
      ),
      border: combineClasses(
        colors.border || '',
        darkMode.border || colors.borderDark || ''
      )
    },
    glass: {
      container: combineClasses(
        `backdrop-blur-md bg-white/10 border ${colors.border || 'border-white/20'}`,
        `dark:backdrop-blur-md dark:bg-black/10 ${darkMode.border || colors.borderDark || 'dark:border-black/20'}`
      ),
      icon: combineClasses(
        colors.icon || 'text-gray-800',
        darkMode.icon || colors.iconDark || 'dark:text-gray-200'
      ),
      text: combineClasses(
        colors.text || 'text-gray-800',
        darkMode.text || colors.textDark || 'dark:text-gray-200'
      ),
      border: combineClasses(
        colors.border || 'border-white/20',
        darkMode.border || colors.borderDark || 'dark:border-black/20'
      )
    }
  };

  // Size classes
  const sizeClasses = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
    xl: 'px-6 py-3 text-lg'
  };

  // Animation variants (unchanged)
  const animationVariants = {
    // Entrance animations
    fadeIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    },
    slideDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 }
    },
    slideLeft: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.5 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 260, damping: 20 }
      }
    },
    rotateIn: {
      initial: { opacity: 0, rotate: -180 },
      animate: { opacity: 1, rotate: 0 }
    },

    // Continuous animations
    pulse: {
      animate: {
        scale: [1, 1.05, 1],
        transition: { duration: 1.5, repeat: Infinity }
      }
    },
    bounce: {
      animate: {
        y: [0, -5, 0],
        transition: { duration: 0.5, repeat: Infinity }
      }
    },
    spin: {
      animate: {
        rotate: 360,
        transition: { duration: 2, repeat: Infinity, ease: 'linear' }
      }
    },
    ping: {
      animate: {
        scale: [1, 1.2, 1],
        opacity: [1, 0.5, 1],
        transition: { duration: 1, repeat: Infinity }
      }
    },
    wiggle: {
      animate: {
        rotate: [0, 5, -5, 5, 0],
        transition: { duration: 0.5, repeat: Infinity }
      }
    },
    shimmer: {
      animate: {
        backgroundPosition: ['200% 0', '-200% 0'],
        transition: { duration: 3, repeat: Infinity, ease: 'linear' }
      }
    },
    glow: {
      animate: {
        boxShadow: [
          '0 0 0px currentColor',
          '0 0 10px currentColor',
          '0 0 0px currentColor'
        ],
        transition: { duration: 1.5, repeat: Infinity }
      }
    }
  };

  // Hover animations
  const hoverAnimations = {
    scale: { scale: 1.1 },
    lift: { y: -4, scale: 1.05 },
    glow: { boxShadow: '0 0 15px currentColor', scale: 1.05 },
    rotate: { rotate: 5 },
    bounce: { y: [0, -4, 0], transition: { duration: 0.3 } },
    pulse: { scale: [1, 1.1, 1], transition: { duration: 0.3 } },
    none: {}
  };

  // Tap animations
  const tapAnimations = {
    scale: { scale: 0.95 },
    shrink: { scale: 0.9 },
    bounce: { scale: 0.95, y: 2 },
    none: {}
  };

  // Helper to render icon with dark mode support
  const renderIcon = () => {
    // If custom icon element provided
    if (customIcon) {
      return <span className="mr-2">{customIcon}</span>;
    }

    // If no icon specified
    if (!icon) return null;

    // If icon is a string, try to load from icon libraries
    if (typeof icon === 'string') {
      // Check if it's a dot special case
      if (icon === 'dot') {
        const dotColor = combineClasses(
          colors.icon || 'bg-current',
          darkMode.icon || colors.iconDark || ''
        );

        return (
          <motion.span
            animate={animation?.type === 'continuous' ? animationVariants[animation.name]?.animate : {}}
            className={`w-2 h-2 ${dotColor} rounded-full mr-2`}
          />
        );
      }

      // Parse icon string format: "library:IconName" (e.g., "hi2:HiStar")
      const [library, iconName] = icon.split(':');

      if (library && iconName && ICON_LIBRARIES[library]) {
        const IconComponent = ICON_LIBRARIES[library][iconName];

        if (IconComponent) {
          const iconColor = combineClasses(
            variantStyles[variant].icon,
            variantStyles[variant].icon
          );

          return (
            <motion.div
              animate={animation?.type === 'continuous' ? animationVariants[animation.name]?.animate : {}}
              className="inline-flex mr-2"
            >
              <IconComponent className={`w-4 h-4 ${iconColor}`} />
            </motion.div>
          );
        }
      }
    }

    return null;
  };

  // Get current styles based on variant
  const currentStyles = variantStyles[variant] || variantStyles.filled;

  // Determine alignment class
  const alignmentClass = alignment === 'center' ? 'mx-auto' :
    alignment === 'right' ? 'ml-auto' : '';

  // Determine container component
  const ContainerComponent = href ? motion.a : motion.div;
  const containerProps = href ? { href } : {};

  // Build animation props
  const getAnimationProps = () => {
    if (!animation) return {};

    const props = {};

    // Handle entrance animations
    if (animation.type === 'entrance' && animation.name) {
      const variant = animationVariants[animation.name];
      if (variant) {
        props.initial = variant.initial || 'hidden';
        props.animate = variant.animate || 'visible';
        props.variants = variant;
        props.transition = {
          duration: animation.duration || 0.3,
          delay: animation.delay || 0,
          ...animation.transition
        };
      }
    }

    // Handle continuous animations
    if (animation.type === 'continuous' && animation.name) {
      const variant = animationVariants[animation.name];
      if (variant) {
        props.animate = variant.animate;
      }
    }

    return props;
  };

  // Build hover props
  const getHoverProps = () => {
    if (!hoverAnimation) return {};

    return {
      whileHover: hoverAnimations[hoverAnimation] || hoverAnimations.scale
    };
  };

  // Build tap props
  const getTapProps = () => {
    if (!tapAnimation) return {};

    return {
      whileTap: tapAnimations[tapAnimation] || tapAnimations.scale
    };
  };

  // Add force theme class if specified
  const forceThemeClass = forceTheme === 'light' ? 'light' :
    forceTheme === 'dark' ? 'dark' : '';

  return (
    <ContainerComponent
      className={`
        inline-flex items-center justify-center
        ${radius}
        ${sizeClasses[size] || sizeClasses.md}
        ${currentStyles.container}
        ${currentStyles.border ? `border-2 ${currentStyles.border}` : ''}
        ${alignmentClass}
        ${onClick || href ? 'cursor-pointer' : ''}
        ${forceThemeClass}
        ${className}
      `}
      onClick={onClick}
      drag={drag}
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      dragMomentum={false}
      {...getHoverProps()}
      {...getTapProps()}
      {...getAnimationProps()}
      {...containerProps}
      {...customProps}
    >
      {renderIcon()}

      <span className={`font-medium ${currentStyles.text}`}>
        {badgeText}
      </span>

      {/* Tooltip with dark mode support */}
      {tooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-gray-900 dark:bg-gray-700 text-white rounded whitespace-nowrap"
        >
          {tooltip}
        </motion.div>
      )}
    </ContainerComponent>
  );
};

export default BadgeSection;