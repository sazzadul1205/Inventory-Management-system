/**
 * CMS_Badge Component - A highly customizable badge component with dark mode support
 * 
 * This component renders a badge with configurable styling, icon support (including React Icons),
 * and hover effects. Perfect for labels, status indicators, counts, and tags.
 * Uses Tailwind CSS for styling with dark mode support via the 'dark:' modifier.
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
  variant: "default",              // Predefined variants: "default", "primary", "success", "warning", "danger", "info", "outline"
  size: "md",                      // "sm", "md", "lg"
  shape: "rounded",                // "rounded", "pill", "square"
  position: "relative",

  // Colors
  color: "text-gray-700",
  darkColor: "dark:text-gray-300",
  bgColor: "bg-gray-100",
  darkBgColor: "dark:bg-gray-700",

  // Border
  border: "border border-transparent",
  borderColor: null,
  darkBorderColor: null,

  // Shadow
  shadow: null,
  darkShadow: null,

  // Icon support (React Icons)
  icon: null,                      // Icon name from library (e.g., "FaBeer", "HiHome")
  iconLibrary: 'fa',                // Icon library: 'fa', 'hi', 'md', etc.
  iconPosition: "left",            // "left", "right"
  iconOnly: false,                 // If true, only show icon
  iconSize: null,                  // Override icon size

  // Count/Number support
  count: null,                      // Number to display (overrides text)
  maxCount: 99,                     // Maximum count before showing 99+
  showZero: false,                  // Whether to show 0 or hide

  // Dot indicator (for status badges)
  dot: false,                       // Show as colored dot
  dotSize: "w-2 h-2",               // Size of dot
  dotColor: null,                   // Override dot color
  pulse: false,                      // Add pulse animation to dot

  // Interactive states
  clickable: false,                 // Whether badge is clickable
  href: null,                       // URL for link
  onClick: null,                    // Click handler

  // Hover effects (if clickable)
  hover: {
    scale: null,
    bgColor: null,
    darkBgColor: null,
    shadow: null,
    transition: "transition-all duration-200"
  },

  // Z-Layer support
  zLayer: "auto",
  zLayerMobile: null,
  zLayerTablet: null,
  zLayerDesktop: null,

  // Accessibility
  ariaLabel: "",
  role: "status",

  // Additional styling
  margin: "m-0",
  className: "",
  style: {}
};

// Size mappings
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
    padding: "px-2.5 py-1",
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
    darkColor: "dark:text-gray-300"
  },
  primary: {
    bgColor: "bg-blue-100",
    darkBgColor: "dark:bg-blue-900",
    color: "text-blue-700",
    darkColor: "dark:text-blue-300"
  },
  success: {
    bgColor: "bg-green-100",
    darkBgColor: "dark:bg-green-900",
    color: "text-green-700",
    darkColor: "dark:text-green-300"
  },
  warning: {
    bgColor: "bg-yellow-100",
    darkBgColor: "dark:bg-yellow-900",
    color: "text-yellow-700",
    darkColor: "dark:text-yellow-300"
  },
  danger: {
    bgColor: "bg-red-100",
    darkBgColor: "dark:bg-red-900",
    color: "text-red-700",
    darkColor: "dark:text-red-300"
  },
  info: {
    bgColor: "bg-cyan-100",
    darkBgColor: "dark:bg-cyan-900",
    color: "text-cyan-700",
    darkColor: "dark:text-cyan-300"
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
  // Status variants
  online: {
    bgColor: "bg-green-500",
    color: "text-white",
    dot: true,
    dotColor: "bg-green-500",
    pulse: true
  },
  offline: {
    bgColor: "bg-gray-400",
    color: "text-white",
    dot: true,
    dotColor: "bg-gray-400"
  },
  busy: {
    bgColor: "bg-red-500",
    color: "text-white",
    dot: true,
    dotColor: "bg-red-500"
  },
  away: {
    bgColor: "bg-yellow-500",
    color: "text-white",
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
 * Main Badge Component
 */
const CMS_Badge = ({
  config = defaultConfig,
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
  const mergedConfig = useMemo(() => {
    const baseConfig = {
      ...defaultConfig,
      ...config
    };

    // Apply variant styles if variant exists
    let variantApplied = {};
    if (baseConfig.variant && variantStyles[baseConfig.variant]) {
      variantApplied = variantStyles[baseConfig.variant];
    }

    // Apply size styles
    const sizeApplied = sizeStyles[baseConfig.size] || sizeStyles.md;

    // Apply shape styles
    const shapeApplied = shapeStyles[baseConfig.shape] || shapeStyles.rounded;

    return {
      ...baseConfig,
      ...variantApplied,
      ...sizeApplied,
      shape: shapeApplied,
      // Merge hover config
      hover: {
        ...defaultConfig.hover,
        ...variantApplied.hover,
        ...baseConfig.hover
      }
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

    if (count === null) return null;
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

    const iconSize = mergedConfig.iconSize || mergedConfig.iconSize;

    return (
      <IconComponent className={iconSize} />
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
          {displayText && <span>{displayText}</span>}
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
   * Build final classes
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
      mergedConfig.padding,
      mergedConfig.fontSize,
      mergedConfig.gap,
      mergedConfig.minWidth,
      mergedConfig.height,

      // Colors
      mergedConfig.bgColor,
      mergedConfig.darkBgColor,
      mergedConfig.color,
      mergedConfig.darkColor,

      // Border
      mergedConfig.border,
      mergedConfig.borderColor,
      mergedConfig.darkBorderColor,

      // Shadow
      mergedConfig.shadow,
      mergedConfig.darkShadow,

      // Z-index
      ...zLayerClasses,

      // Hover effects (if clickable)
      mergedConfig.clickable ? 'cursor-pointer' : '',
      getHoverClasses,

      // Margin
      mergedConfig.margin,

      // Additional classes
      mergedConfig.className
    ].filter(Boolean).join(' ');

    return classes;
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
    onClick: mergedConfig.onClick
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
          ...(isHovered ? mergedConfig.hover?.customStyles : {})
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
          ...(isHovered ? mergedConfig.hover?.customStyles : {})
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
        ...(isHovered ? mergedConfig.hover?.customStyles : {})
      }}
      {...accessibilityProps}
    >
      {renderContent()}
      {children}
    </span>
  );
};

export default CMS_Badge;