/**
 * CMS_Badge Component - A highly customizable badge component with dark mode support
 * Now with full customization priority - custom values always override defaults
 */

import React, { useMemo, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
import * as GiIcons from 'react-icons/gi';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import * as VscIcons from 'react-icons/vsc';
import * as IoIcons from 'react-icons/io5';
import * as GrIcons from 'react-icons/gr';
import * as BiIcons from 'react-icons/bi';
import * as ImIcons from 'react-icons/im';
import * as CgIcons from 'react-icons/cg';

// Icon library mappings
const iconLibraries = {
  fa: FaIcons,
  hi: HiIcons,
  md: MdIcons,
  ai: AiIcons,
  bs: BsIcons,
  ri: RiIcons,
  tb: TbIcons,
  gi: GiIcons,
  fi: FiIcons,
  si: SiIcons,
  vsc: VscIcons,
  io: IoIcons,
  gr: GrIcons,
  bi: BiIcons,
  im: ImIcons,
  cg: CgIcons
};

// Default configuration
const defaultConfig = {
  text: "Badge",
  variant: "default",
  size: "md",
  shape: "rounded",
  position: "relative",

  // Colors
  color: "text-gray-700",
  darkColor: "dark:text-gray-300",
  bgColor: "bg-gray-100",
  darkBgColor: "dark:bg-gray-700",

  // Border
  border: "border border-transparent",
  borderColor: "",
  darkBorderColor: "",

  // Shadow
  shadow: "",
  darkShadow: "",

  // Icon support
  icon: null,
  iconLibrary: 'fa',
  iconPosition: "left",
  iconOnly: false,
  iconSize: null,

  // Count support
  count: null,
  maxCount: 99,
  showZero: false,

  // Dot indicator
  dot: false,
  dotSize: "w-2 h-2",
  dotColor: "",
  pulse: false,

  // Interactive states
  clickable: false,
  href: null,
  onClick: null,

  // Hover effects
  hover: {
    scale: "",
    bgColor: "",
    darkBgColor: "",
    shadow: "",
    transition: "transition-all duration-200",
    customStyles: {}
  },

  // Z-Layer support
  zLayer: "auto",
  zLayerMobile: null,
  zLayerTablet: null,
  zLayerDesktop: null,

  // Accessibility
  ariaLabel: "",
  role: "status",

  // Additional styling - NOW FULLY CUSTOMIZABLE
  padding: null,      // Custom padding (e.g., "px-3 py-4")
  margin: null,       // Custom margin (e.g., "m-2 mt-4")
  className: "",
  style: {}
};

// Size mappings - these will be used as fallbacks only
const sizeStyles = {
  sm: {
    padding: "px-1.5 py-0.5",
    fontSize: "text-xs",
    gap: "gap-0.5",
    iconSize: "w-3 h-3",
    minWidth: "min-w-[1.5rem]",
    height: "h-4"
  },
  md: {
    padding: "px-2 py-1",
    fontSize: "text-xs",
    gap: "gap-1",
    iconSize: "w-3.5 h-3.5",
    minWidth: "min-w-[2rem]",
    height: "h-5"
  },
  lg: {
    padding: "px-2.5 py-1.5",
    fontSize: "text-sm",
    gap: "gap-1.5",
    iconSize: "w-4 h-4",
    minWidth: "min-w-[2.5rem]",
    height: "h-6"
  }
};

// Shape mappings
const shapeStyles = {
  rounded: "rounded",
  pill: "rounded-full",
  square: "rounded-none"
};

// Default variant mappings
const defaultVariantStyles = {
  default: {
    bgColor: "bg-gray-100",
    darkBgColor: "dark:bg-gray-700",
    color: "text-gray-700",
    darkColor: "dark:text-gray-300",
    border: "border border-transparent"
  },
  primary: {
    bgColor: "bg-blue-100",
    darkBgColor: "dark:bg-blue-900/30",
    color: "text-blue-700",
    darkColor: "dark:text-blue-300",
    border: "border border-transparent"
  },
  success: {
    bgColor: "bg-green-100",
    darkBgColor: "dark:bg-green-900/30",
    color: "text-green-700",
    darkColor: "dark:text-green-300",
    border: "border border-transparent"
  },
  warning: {
    bgColor: "bg-yellow-100",
    darkBgColor: "dark:bg-yellow-900/30",
    color: "text-yellow-700",
    darkColor: "dark:text-yellow-300",
    border: "border border-transparent"
  },
  danger: {
    bgColor: "bg-red-100",
    darkBgColor: "dark:bg-red-900/30",
    color: "text-red-700",
    darkColor: "dark:text-red-300",
    border: "border border-transparent"
  },
  info: {
    bgColor: "bg-cyan-100",
    darkBgColor: "dark:bg-cyan-900/30",
    color: "text-cyan-700",
    darkColor: "dark:text-cyan-300",
    border: "border border-transparent"
  },
  outline: {
    bgColor: "bg-transparent",
    darkBgColor: "dark:bg-transparent",
    color: "text-gray-700",
    darkColor: "dark:text-gray-300",
    border: "border",
    borderColor: "border-gray-300",
    darkBorderColor: "dark:border-gray-600"
  },
  online: {
    bgColor: "bg-green-500",
    darkBgColor: "dark:bg-green-600",
    color: "text-white",
    darkColor: "dark:text-white",
    dot: true,
    dotColor: "bg-green-500",
    pulse: true
  },
  offline: {
    bgColor: "bg-gray-400",
    darkBgColor: "dark:bg-gray-600",
    color: "text-white",
    darkColor: "dark:text-white",
    dot: true,
    dotColor: "bg-gray-400"
  },
  busy: {
    bgColor: "bg-red-500",
    darkBgColor: "dark:bg-red-600",
    color: "text-white",
    darkColor: "dark:text-white",
    dot: true,
    dotColor: "bg-red-500"
  },
  away: {
    bgColor: "bg-yellow-500",
    darkBgColor: "dark:bg-yellow-600",
    color: "text-white",
    darkColor: "dark:text-white",
    dot: true,
    dotColor: "bg-yellow-500"
  }
};

// Z-index mapping
const zIndexMap = {
  'auto': 'z-auto',
  '0': 'z-0',
  '10': 'z-10',
  '20': 'z-20',
  '30': 'z-30',
  '40': 'z-40',
  '50': 'z-50'
};

/**
 * Main Badge Component - CUSTOM VALUES ALWAYS TAKE PRIORITY
 */
const CMS_Badge = ({
  config = {},
  customVariants = {},
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Merge default variants with custom variants
  const variantStyles = useMemo(() => ({
    ...defaultVariantStyles,
    ...customVariants
  }), [customVariants]);

  // Merge config with defaults and apply variant styles
  // CUSTOM VALUES ALWAYS TAKE PRIORITY
  const mergedConfig = useMemo(() => {
    // Start with default config
    const baseConfig = {
      ...defaultConfig,
      ...config
    };

    // Apply variant styles if variant exists
    let variantApplied = {};
    if (baseConfig.variant && variantStyles[baseConfig.variant]) {
      variantApplied = variantStyles[baseConfig.variant];
    }

    // Get size-based styles (will be used as fallbacks)
    const sizeApplied = sizeStyles[baseConfig.size] || sizeStyles.md;

    // Apply shape styles
    const shapeApplied = shapeStyles[baseConfig.shape] || shapeStyles.rounded;

    // Merge hover config - custom hover takes priority
    const hoverConfig = {
      ...defaultConfig.hover,
      ...(variantApplied.hover || {}),
      ...(baseConfig.hover || {})
    };

    // Return merged config with CUSTOM VALUES TAKING PRIORITY
    return {
      ...baseConfig,

      // SHAPE - custom shape takes priority
      shape: shapeApplied,

      // FONT SIZE - custom fontSize takes priority over size-based
      fontSize: baseConfig.fontSize || sizeApplied.fontSize,

      // GAP - custom gap takes priority
      gap: baseConfig.gap || sizeApplied.gap,

      // ICON SIZE - custom iconSize takes priority
      iconSize: baseConfig.iconSize || sizeApplied.iconSize,

      // MIN WIDTH - custom minWidth takes priority
      minWidth: baseConfig.minWidth || sizeApplied.minWidth,

      // HEIGHT - custom height takes priority
      height: baseConfig.height || sizeApplied.height,

      // PADDING - CUSTOM PADDING ALWAYS TAKES PRIORITY
      // If custom padding is provided, use it. Otherwise use size-based padding
      padding: baseConfig.padding !== null && baseConfig.padding !== undefined
        ? baseConfig.padding
        : sizeApplied.padding,

      // MARGIN - CUSTOM MARGIN ALWAYS TAKES PRIORITY
      margin: baseConfig.margin !== null && baseConfig.margin !== undefined
        ? baseConfig.margin
        : (baseConfig.margin || defaultConfig.margin),

      // COLORS - custom colors take priority over variant
      bgColor: baseConfig.bgColor !== defaultConfig.bgColor
        ? baseConfig.bgColor
        : (variantApplied.bgColor || baseConfig.bgColor),
      darkBgColor: baseConfig.darkBgColor !== defaultConfig.darkBgColor
        ? baseConfig.darkBgColor
        : (variantApplied.darkBgColor || baseConfig.darkBgColor),
      color: baseConfig.color !== defaultConfig.color
        ? baseConfig.color
        : (variantApplied.color || baseConfig.color),
      darkColor: baseConfig.darkColor !== defaultConfig.darkColor
        ? baseConfig.darkColor
        : (variantApplied.darkColor || baseConfig.darkColor),

      // BORDER - custom border takes priority
      border: baseConfig.border !== defaultConfig.border
        ? baseConfig.border
        : (variantApplied.border || baseConfig.border),
      borderColor: baseConfig.borderColor || variantApplied.borderColor || "",
      darkBorderColor: baseConfig.darkBorderColor || variantApplied.darkBorderColor || "",

      // SHADOW - custom shadow takes priority
      shadow: baseConfig.shadow || variantApplied.shadow || "",
      darkShadow: baseConfig.darkShadow || variantApplied.darkShadow || "",

      // DOT - custom dot settings take priority
      dot: baseConfig.dot !== undefined ? baseConfig.dot : (variantApplied.dot || false),
      dotColor: baseConfig.dotColor || variantApplied.dotColor || "",
      pulse: baseConfig.pulse !== undefined ? baseConfig.pulse : (variantApplied.pulse || false),

      // HOVER - custom hover takes priority
      hover: hoverConfig
    };
  }, [config, variantStyles]);

  /**
   * Get icon component from React Icons library
   */
  const getIconComponent = () => {
    const { icon, iconLibrary } = mergedConfig;

    if (!icon) return null;

    const library = iconLibraries[iconLibrary];
    if (!library) return null;

    const IconComponent = library[icon];
    return IconComponent || null;
  };

  /**
   * Format count for display
   */
  const formatCount = () => {
    const { count, maxCount, showZero } = mergedConfig;

    if (count === null || count === undefined) return null;
    if (count === 0 && !showZero) return null;
    if (count > maxCount) return `${maxCount}+`;
    return count.toString();
  };

  /**
   * Build hover classes
   */
  const getHoverClasses = useMemo(() => {
    if (!mergedConfig.clickable || !mergedConfig.hover) return '';

    const hoverClasses = [];
    const hover = mergedConfig.hover;

    if (hover.scale) hoverClasses.push(`hover:${hover.scale}`);
    if (hover.bgColor) hoverClasses.push(`hover:${hover.bgColor}`);
    if (hover.darkBgColor) hoverClasses.push(`hover:${hover.darkBgColor}`);
    if (hover.shadow) hoverClasses.push(`hover:${hover.shadow}`);
    if (hover.transition) hoverClasses.push(hover.transition);

    return hoverClasses.join(' ');
  }, [mergedConfig.clickable, mergedConfig.hover]);

  /**
   * Build z-index classes
   */
  const getZLayerClasses = (zLayer, zMobile, zTablet, zDesktop) => {
    const classes = [];

    if (zLayer) {
      if (zIndexMap[zLayer]) {
        classes.push(zIndexMap[zLayer]);
      } else if (zLayer.startsWith('z-')) {
        classes.push(zLayer);
      } else if (!isNaN(zLayer)) {
        classes.push(`z-${zLayer}`);
      }
    }

    if (zMobile) {
      const mobileClass = zIndexMap[zMobile] || (zMobile.startsWith('z-') ? zMobile : `z-${zMobile}`);
      classes.push(mobileClass);
    }

    if (zTablet) {
      const tabletClass = zIndexMap[zTablet] || (zTablet.startsWith('z-') ? zTablet : `z-${zTablet}`);
      classes.push(`md:${tabletClass}`);
    }

    if (zDesktop) {
      const desktopClass = zIndexMap[zDesktop] || (zDesktop.startsWith('z-') ? zDesktop : `z-${zDesktop}`);
      classes.push(`lg:${desktopClass}`);
    }

    return classes;
  };

  /**
   * Render icon
   */
  const renderIcon = () => {
    const IconComponent = getIconComponent();
    if (!IconComponent) return null;

    return (
      <IconComponent className={mergedConfig.iconSize} />
    );
  };

  /**
   * Render dot indicator
   */
  const renderDot = () => {
    if (!mergedConfig.dot) return null;

    const dotColor = mergedConfig.dotColor || mergedConfig.bgColor;
    const pulseClass = mergedConfig.pulse ? 'animate-pulse' : '';

    return (
      <span
        className={`
          ${mergedConfig.dotSize}
          ${dotColor}
          rounded-full
          ${pulseClass}
          inline-block
        `}
      />
    );
  };

  /**
   * Render content
   */
  const renderContent = () => {
    if (mergedConfig.iconOnly) {
      return renderIcon();
    }

    const displayText = formatCount() || mergedConfig.text;
    const icon = renderIcon();
    const dot = renderDot();

    // If dot indicator, show dot with optional text
    if (mergedConfig.dot) {
      return (
        <>
          {dot}
          {displayText && <span className="ml-1">{displayText}</span>}
        </>
      );
    }

    // Icon with text
    if (mergedConfig.iconPosition === 'right') {
      return (
        <>
          <span>{displayText}</span>
          {icon && <span className="ml-1">{icon}</span>}
        </>
      );
    }

    return (
      <>
        {icon && <span className="mr-1">{icon}</span>}
        <span>{displayText}</span>
      </>
    );
  };

  /**
   * Build final classes - CUSTOM VALUES ALWAYS INCLUDED
   */
  const badgeClasses = useMemo(() => {
    const zLayerClasses = getZLayerClasses(
      mergedConfig.zLayer,
      mergedConfig.zLayerMobile,
      mergedConfig.zLayerTablet,
      mergedConfig.zLayerDesktop
    );

    const classes = [
      // Base styles
      'inline-flex items-center justify-center',
      mergedConfig.position,
      mergedConfig.shape,

      // PADDING - custom padding will be used here
      mergedConfig.padding,

      // TYPOGRAPHY
      mergedConfig.fontSize,
      mergedConfig.gap,
      mergedConfig.minWidth,
      mergedConfig.height,

      // COLORS
      mergedConfig.bgColor,
      mergedConfig.darkBgColor,
      mergedConfig.color,
      mergedConfig.darkColor,

      // BORDER
      mergedConfig.border,
      mergedConfig.borderColor,
      mergedConfig.darkBorderColor,

      // SHADOW
      mergedConfig.shadow,
      mergedConfig.darkShadow,

      // Z-INDEX
      ...zLayerClasses,

      // HOVER EFFECTS
      mergedConfig.clickable ? 'cursor-pointer' : '',
      getHoverClasses,

      // MARGIN - custom margin will be used here
      mergedConfig.margin,

      // ADDITIONAL CLASSES
      mergedConfig.className
    ].filter(className => className && className.trim() !== '');

    return classes.join(' ');
  }, [mergedConfig, getHoverClasses]);

  /**
   * Accessibility props
   */
  const accessibilityProps = {
    ...(mergedConfig.ariaLabel && { 'aria-label': mergedConfig.ariaLabel }),
    ...(mergedConfig.role && { role: mergedConfig.role }),
    ...(mergedConfig.clickable && { tabIndex: 0 })
  };

  /**
   * Event handlers
   */
  const eventHandlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    ...(mergedConfig.onClick && { onClick: mergedConfig.onClick })
  };

  /**
   * Render as link if href provided
   */
  if (mergedConfig.href) {
    return (
      <a
        href={mergedConfig.href}
        className={badgeClasses}
        style={{
          ...mergedConfig.style,
          ...(isHovered && mergedConfig.hover?.customStyles ? mergedConfig.hover.customStyles : {})
        }}
        {...accessibilityProps}
        {...eventHandlers}
      >
        {renderContent()}
        {children}
      </a>
    );
  }

  /**
   * Render as button if clickable
   */
  if (mergedConfig.clickable) {
    return (
      <button
        className={badgeClasses}
        style={{
          ...mergedConfig.style,
          ...(isHovered && mergedConfig.hover?.customStyles ? mergedConfig.hover.customStyles : {})
        }}
        {...accessibilityProps}
        {...eventHandlers}
      >
        {renderContent()}
        {children}
      </button>
    );
  }

  /**
   * Render as span (default)
   */
  return (
    <span
      className={badgeClasses}
      style={{
        ...mergedConfig.style,
        ...(isHovered && mergedConfig.hover?.customStyles ? mergedConfig.hover.customStyles : {})
      }}
      {...accessibilityProps}
    >
      {renderContent()}
      {children}
    </span>
  );
};

export default CMS_Badge;