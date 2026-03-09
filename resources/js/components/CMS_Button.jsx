/**
 * CMS_Button Component - A highly customizable button component with dark mode support
 * 
 * This component renders a button with configurable styling, icon support (including React Icons),
 * and hover effects. Fully compatible with Inertia.js for seamless navigation.
 * Uses Tailwind CSS for styling with dark mode support via the 'dark:' modifier.
 */

import React, { useMemo, useState } from 'react';
import { Link } from '@inertiajs/react';
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

// Default configuration - defined outside component to prevent recreation
const defaultConfig = {
  text: "Button",
  variant: "primary",              // Predefined variants: "primary", "secondary", "outline", "ghost", "danger"
  size: "md",                      // "sm", "md", "lg"
  alignment: "center",
  color: "text-white",
  darkColor: "dark:text-white",
  bgColor: "bg-blue-600",
  darkBgColor: "dark:bg-blue-500",
  margin: "m-0",
  padding: "",                     // Will be set by size
  wrapping: "normal",
  overflow: "visible",
  highlightParts: [],
  // Gradient support
  gradient: null,
  darkGradient: null,
  gradientDirection: "to-r",
  // Z-Layer support
  zLayer: "auto",
  zLayerMobile: null,
  zLayerTablet: null,
  zLayerDesktop: null,
  // Positioning context
  position: "relative",

  // Button specific properties
  type: "button",                  // "button", "submit", "reset"
  disabled: false,
  loading: false,
  fullWidth: false,

  // Icon support (React Icons)
  icon: null,                      // Icon name from library (e.g., "FaBeer", "HiHome")
  iconLibrary: 'fa',                // Icon library: 'fa', 'hi', 'md', 'ai', 'bs', 'ri', 'tb', 'gi', 'fi', 'si', 'vsc', 'io', 'gr', 'bi', 'im', 'cg'
  iconPosition: "left",            // "left", "right"
  iconOnly: false,                 // If true, only show icon (text becomes aria-label)
  iconSize: null,                  // Override icon size (e.g., "w-6 h-6")

  // Inertia.js specific props
  href: null,                      // URL for Inertia link
  method: 'get',                   // HTTP method: 'get', 'post', 'put', 'patch', 'delete'
  preserveState: true,             // Preserve state during navigation
  preserveScroll: false,           // Preserve scroll position
  replace: false,                  // Replace history state
  only: [],                        // Only update specific props
  headers: {},                     // Additional headers
  data: {},                        // Data to send with request
  onStart: null,                   // Callback when navigation starts
  onFinish: null,                  // Callback when navigation finishes
  onSuccess: null,                 // Callback on success
  onError: null,                   // Callback on error
  onCancelToken: null,             // Cancel token for request

  // Hover effects - fully configurable
  hover: {
    scale: null,                   // e.g., "scale-105", "scale-110"
    translateX: null,              // e.g., "translate-x-1", "-translate-x-1"
    translateY: null,              // e.g., "translate-y-1", "-translate-y-1"
    rotate: null,                  // e.g., "rotate-3", "-rotate-3"
    bgColor: null,                 // e.g., "bg-blue-700"
    darkBgColor: null,             // e.g., "dark:bg-blue-600"
    textColor: null,               // e.g., "text-white"
    darkTextColor: null,           // e.g., "dark:text-gray-100"
    borderColor: null,             // e.g., "border-blue-700"
    borderWidth: null,             // e.g., "border-2"
    shadow: null,                  // e.g., "shadow-lg", "shadow-xl"
    opacity: null,                 // e.g., "opacity-90", "opacity-80"
    brightness: null,              // e.g., "brightness-110", "brightness-90"
    contrast: null,                // e.g., "contrast-125"
    animation: null,               // e.g., "animate-pulse", "animate-bounce"
    transition: "transition-all duration-300",
    customClasses: null,
    customStyles: {}
  },

  // Focus effects
  focus: {
    ring: "ring-2 ring-offset-2",
    ringColor: "ring-blue-500",
    darkRingColor: "dark:ring-blue-400"
  },

  // Active/pressed effects
  active: {
    scale: "scale-95",
    transform: null
  },

  // Accessibility
  ariaLabel: "",
  ariaExpanded: null,
  ariaControls: null,

  // Event handlers
  onClick: null,
  onHover: null,
  onLeave: null
};

// Size mappings
const sizeStyles = {
  sm: {
    padding: "px-3 py-1.5",
    fontSize: "text-sm",
    gap: "gap-1",
    iconSize: "w-4 h-4"
  },
  md: {
    padding: "px-4 py-2",
    fontSize: "text-base",
    gap: "gap-2",
    iconSize: "w-5 h-5"
  },
  lg: {
    padding: "px-6 py-3",
    fontSize: "text-lg",
    gap: "gap-3",
    iconSize: "w-6 h-6"
  }
};

// Default variant mappings
const defaultVariantStyles = {
  primary: {
    bgColor: "bg-blue-600",
    darkBgColor: "dark:bg-blue-500",
    color: "text-white",
    darkColor: "dark:text-white",
    border: "border border-transparent",
    hover: {
      bgColor: "bg-blue-700",
      darkBgColor: "dark:bg-blue-600",
      scale: "scale-105",
      shadow: "shadow-lg"
    }
  },
  secondary: {
    bgColor: "bg-gray-200",
    darkBgColor: "dark:bg-gray-700",
    color: "text-gray-900",
    darkColor: "dark:text-gray-100",
    border: "border border-transparent",
    hover: {
      bgColor: "bg-gray-300",
      darkBgColor: "dark:bg-gray-600",
      scale: "scale-105"
    }
  },
  outline: {
    bgColor: "bg-transparent",
    darkBgColor: "dark:bg-transparent",
    color: "text-blue-600",
    darkColor: "dark:text-blue-400",
    border: "border-2 border-blue-600",
    darkBorder: "dark:border-blue-400",
    hover: {
      bgColor: "bg-blue-50",
      darkBgColor: "dark:bg-blue-900/20",
      scale: "scale-105"
    }
  },
  ghost: {
    bgColor: "bg-transparent",
    darkBgColor: "dark:bg-transparent",
    color: "text-gray-700",
    darkColor: "dark:text-gray-300",
    border: "border border-transparent",
    hover: {
      bgColor: "bg-gray-100",
      darkBgColor: "dark:bg-gray-800",
      scale: "scale-105"
    }
  },
  danger: {
    bgColor: "bg-red-600",
    darkBgColor: "dark:bg-red-500",
    color: "text-white",
    darkColor: "dark:text-white",
    border: "border border-transparent",
    hover: {
      bgColor: "bg-red-700",
      darkBgColor: "dark:bg-red-600",
      scale: "scale-105",
      animation: "animate-pulse"
    }
  },
  gradient: {
    gradient: "from-purple-500 to-pink-500",
    darkGradient: "dark:from-purple-400 dark:to-pink-400",
    gradientDirection: "to-r",
    color: "text-white",
    darkColor: "dark:text-white",
    border: "border border-transparent",
    hover: {
      scale: "scale-105",
      shadow: "shadow-lg",
      brightness: "brightness-110"
    }
  }
};

// Allowed HTML tags for button
const allowedTags = ['button', 'a'];

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
 * Main Button Component
 */
const CMS_Button = ({
  config = defaultConfig,
  customVariants = {},
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);

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

    return {
      ...baseConfig,
      ...variantApplied,
      ...sizeApplied,
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
   * Build hover classes based on config
   */
  const getHoverClasses = useMemo(() => {
    if (!mergedConfig.hover) return '';

    const hoverClasses = [];
    const hover = mergedConfig.hover;

    if (hover.scale) hoverClasses.push(`hover:${hover.scale}`);
    if (hover.translateX) hoverClasses.push(`hover:${hover.translateX}`);
    if (hover.translateY) hoverClasses.push(`hover:${hover.translateY}`);
    if (hover.rotate) hoverClasses.push(`hover:${hover.rotate}`);
    if (hover.bgColor) hoverClasses.push(`hover:${hover.bgColor}`);
    if (hover.darkBgColor) hoverClasses.push(`hover:${hover.darkBgColor}`);
    if (hover.textColor) hoverClasses.push(`hover:${hover.textColor}`);
    if (hover.darkTextColor) hoverClasses.push(`hover:${hover.darkTextColor}`);
    if (hover.borderColor) hoverClasses.push(`hover:${hover.borderColor}`);
    if (hover.borderWidth) hoverClasses.push(`hover:${hover.borderWidth}`);
    if (hover.shadow) hoverClasses.push(`hover:${hover.shadow}`);
    if (hover.opacity) hoverClasses.push(`hover:${hover.opacity}`);
    if (hover.brightness) hoverClasses.push(`hover:${hover.brightness}`);
    if (hover.contrast) hoverClasses.push(`hover:${hover.contrast}`);
    if (hover.animation) hoverClasses.push(`hover:${hover.animation}`);
    if (hover.transition) hoverClasses.push(hover.transition);
    if (hover.customClasses) hoverClasses.push(`hover:${hover.customClasses}`);

    return hoverClasses.join(' ');
  }, [mergedConfig.hover]);

  /**
   * Build focus classes
   */
  const getFocusClasses = useMemo(() => {
    if (!mergedConfig.focus) return '';

    const focusClasses = [];
    const focus = mergedConfig.focus;

    if (focus.ring) focusClasses.push(`focus:${focus.ring}`);
    if (focus.ringColor) focusClasses.push(`focus:${focus.ringColor}`);
    if (focus.darkRingColor) focusClasses.push(`focus:${focus.darkRingColor}`);

    return focusClasses.join(' ');
  }, [mergedConfig.focus]);

  /**
   * Build active classes
   */
  const getActiveClasses = useMemo(() => {
    if (!mergedConfig.active) return '';

    const activeClasses = [];
    const active = mergedConfig.active;

    if (active.scale) activeClasses.push(`active:${active.scale}`);
    if (active.transform) activeClasses.push(`active:${active.transform}`);

    return activeClasses.join(' ');
  }, [mergedConfig.active]);

  /**
   * Converts alignment prop to Tailwind class
   */
  const getAlignmentClass = (alignment) => {
    switch (alignment) {
      case 'center': return 'justify-center';
      case 'right': return 'justify-end';
      case 'left': default: return 'justify-start';
    }
  };

  /**
   * Builds gradient classes
   */
  const getGradientClasses = (gradient, darkGradient, direction = 'to-r') => {
    if (!gradient) return '';

    const gradientClasses = [
      `bg-gradient-${direction}`,
      gradient
    ];

    if (darkGradient) {
      gradientClasses.push(darkGradient);
    }

    return gradientClasses.join(' ');
  };

  /**
   * Builds z-index classes
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
   * Handle Inertia navigation
   */
  const handleInertiaClick = (e) => {
    if (mergedConfig.disabled || mergedConfig.loading) {
      e.preventDefault();
      return;
    }

    if (mergedConfig.onClick) {
      mergedConfig.onClick(e);
    }

    // If href is provided, Inertia Link will handle navigation
    // This function is for any pre-navigation logic
  };

  /**
   * Build final classes
   */
  const buttonClasses = useMemo(() => {
    const alignment = getAlignmentClass(mergedConfig.alignment);

    const zLayerClasses = getZLayerClasses(
      mergedConfig.zLayer,
      mergedConfig.zLayerMobile,
      mergedConfig.zLayerTablet,
      mergedConfig.zLayerDesktop
    );

    const gradientClasses = mergedConfig.gradient
      ? getGradientClasses(mergedConfig.gradient, mergedConfig.darkGradient, mergedConfig.gradientDirection)
      : '';

    const classes = [
      'inline-flex items-center',
      alignment,
      mergedConfig.position,
      mergedConfig.padding,
      mergedConfig.fontSize,
      mergedConfig.fontWeight,
      mergedConfig.letterSpacing,
      mergedConfig.rounded || 'rounded-md',
      mergedConfig.border,
      mergedConfig.darkBorder,
      mergedConfig.fullWidth ? 'w-full' : '',
      ...(mergedConfig.gradient ? [gradientClasses] : [
        mergedConfig.bgColor,
        mergedConfig.darkBgColor,
        mergedConfig.color,
        mergedConfig.darkColor
      ]),
      mergedConfig.gap,
      mergedConfig.overflow === 'hidden' ? 'overflow-hidden' : '',
      mergedConfig.wrapping === 'truncate' ? 'truncate' : '',
      ...zLayerClasses,
      getHoverClasses,
      getFocusClasses,
      getActiveClasses,
      mergedConfig.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      mergedConfig.className
    ].filter(Boolean).join(' ');

    return classes;
  }, [mergedConfig, getHoverClasses, getFocusClasses, getActiveClasses]);

  /**
   * Render icon from React Icons
   */
  const renderIcon = () => {
    const IconComponent = getIconComponent();
    if (!IconComponent) return null;

    const iconSize = mergedConfig.iconSize || mergedConfig.iconSize || 'w-5 h-5';

    return (
      <IconComponent className={iconSize} />
    );
  };

  /**
   * Render content
   */
  const renderContent = () => {
    if (mergedConfig.iconOnly) {
      return renderIcon();
    }

    const icon = renderIcon();
    const text = mergedConfig.text;

    if (mergedConfig.iconPosition === 'right') {
      return (
        <>
          <span>{text}</span>
          {icon && <span className="ml-2">{icon}</span>}
        </>
      );
    }

    return (
      <>
        {icon && <span className="mr-2">{icon}</span>}
        <span>{text}</span>
      </>
    );
  };

  /**
   * Loading spinner
   */
  const renderLoading = () => {
    if (!mergedConfig.loading) return null;

    return (
      <svg
        className={`animate-spin ${mergedConfig.iconSize || 'w-5 h-5'} ${mergedConfig.text ? 'mr-2' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );
  };

  /**
   * Accessibility props
   */
  const accessibilityProps = {
    ...(mergedConfig.ariaLabel && { 'aria-label': mergedConfig.ariaLabel }),
    ...(mergedConfig.ariaExpanded && { 'aria-expanded': mergedConfig.ariaExpanded }),
    ...(mergedConfig.ariaControls && { 'aria-controls': mergedConfig.ariaControls }),
    ...(mergedConfig.iconOnly && { 'aria-label': mergedConfig.text }),
    ...(mergedConfig.disabled && { 'aria-disabled': true }),
    ...(mergedConfig.loading && { 'aria-busy': true })
  };

  /**
   * Event handlers
   */
  const eventHandlers = {
    onMouseEnter: (e) => {
      setIsHovered(true);
      mergedConfig.onHover?.(e);
    },
    onMouseLeave: (e) => {
      setIsHovered(false);
      mergedConfig.onLeave?.(e);
    },
    onFocus: (e) => {
      setIsFocused(true);
    },
    onBlur: (e) => {
      setIsFocused(false);
    },
    onMouseDown: (e) => {
      setIsActive(true);
    },
    onMouseUp: (e) => {
      setIsActive(false);
    }
  };

  /**
   * Inertia Link props
   */
  const inertiaProps = {
    href: mergedConfig.href,
    method: mergedConfig.method,
    preserveState: mergedConfig.preserveState,
    preserveScroll: mergedConfig.preserveScroll,
    replace: mergedConfig.replace,
    only: mergedConfig.only,
    headers: mergedConfig.headers,
    data: mergedConfig.data,
    onStart: mergedConfig.onStart,
    onFinish: mergedConfig.onFinish,
    onSuccess: mergedConfig.onSuccess,
    onError: mergedConfig.onError,
    onCancelToken: mergedConfig.onCancelToken,
    onClick: handleInertiaClick,
    disabled: mergedConfig.disabled || mergedConfig.loading,
    className: buttonClasses,
    style: {
      ...mergedConfig.style,
      ...(isHovered ? mergedConfig.hover?.customStyles : {})
    },
    ...accessibilityProps,
    ...eventHandlers
  };

  /**
   * Render button or Inertia Link
   */
  if (mergedConfig.href) {
    // Use Inertia Link for navigation
    return (
      <Link {...inertiaProps}>
        <span className="inline-flex items-center justify-center">
          {mergedConfig.loading ? renderLoading() : renderContent()}
          {children}
        </span>
      </Link>
    );
  }

  // Render regular button
  return (
    <button
      type={mergedConfig.type}
      disabled={mergedConfig.disabled || mergedConfig.loading}
      className={buttonClasses}
      style={{
        ...mergedConfig.style,
        ...(isHovered ? mergedConfig.hover?.customStyles : {})
      }}
      onClick={mergedConfig.onClick}
      {...accessibilityProps}
      {...eventHandlers}
    >
      <span className="inline-flex items-center justify-center">
        {mergedConfig.loading ? renderLoading() : renderContent()}
        {children}
      </span>
    </button>
  );
};

export default CMS_Button;