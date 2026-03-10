/**
 * CMS_Button Component – Fully customizable button with dark mode and Inertia.js support
 *
 * Features:
 * - No hardcoded variants – you control every style via the `config` prop.
 * - Supports 16+ icon libraries from `react-icons`.
 * - Built‑in loading spinner, disabled state, and full‑width option.
 * - Seamless Inertia.js `<Link>` integration when `href` is provided.
 * - Dark mode with `dark:` variants.
 * - Gradient backgrounds with multiple directions and hover support (inside `hover` object).
 * - Hover effects: scale, shadow, background color, gradient change, custom styles.
 * - Accessible (ARIA attributes) and touch friendly.
 *
 * Usage example:
 *   <CMS_Button
 *     config={{
 *       text: "Save",
 *       gradient: "from-blue-600 to-purple-600",
 *       gradientDirection: "to-r",
 *       hover: {
 *         gradient: "from-blue-700 to-purple-700",   // gradient on hover
 *         bgColor: "bg-blue-700",                     // solid background on hover (overrides gradient)
 *         darkBgColor: "dark:bg-blue-800",            // dark mode hover background
 *         scale: "scale-105",
 *         shadow: "shadow-lg"
 *       },
 *       icon: "FaSave",
 *       iconLibrary: "fa",
 *       onClick: () => console.log("Clicked")
 *     }}
 *   />
 */

import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
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

// ----------------------------------------------------------------------
// Icon library registry
// ----------------------------------------------------------------------
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
  cg: CgIcons,
};

// ----------------------------------------------------------------------
// Default configuration
// ----------------------------------------------------------------------
const defaultConfig = {
  // Content
  text: 'Button',
  icon: null,               // e.g. 'FaBeer'
  iconLibrary: 'fa',         // one of the keys above
  iconPosition: 'left',      // 'left' or 'right'
  iconOnly: false,           // if true, only the icon is shown (text becomes aria-label)

  // Sizing & spacing
  size: 'md',                // 'sm', 'md', 'lg' – controls padding, font, gap, icon size
  padding: '',               // optional custom padding (overrides size preset)
  fullWidth: false,
  alignment: 'center',       // 'left', 'center', 'right'

  // Colors (Tailwind classes) - used when gradient is not applied
  color: 'text-white',
  darkColor: 'dark:text-white',
  bgColor: 'bg-blue-600',
  darkBgColor: 'dark:bg-blue-500',

  border: '',                // e.g. 'border border-gray-300'
  darkBorder: '',            // e.g. 'dark:border-gray-600'

  // Gradients - main gradient
  gradient: null,            // e.g. 'from-blue-600 to-purple-600'
  gradientDirection: 'to-r', // 'to-r', 'to-l', 'to-t', 'to-b', 'to-tr', 'to-tl', 'to-br', 'to-bl'
  darkGradient: null,        // e.g. 'dark:from-blue-800 dark:to-purple-800'

  // Borders & shape
  rounded: 'rounded-md',

  // State
  type: 'button',
  disabled: false,
  loading: false,

  // Inertia.js props (only used if href is provided)
  href: null,
  method: 'get',
  preserveState: true,
  preserveScroll: false,
  replace: false,
  only: [],
  headers: {},
  data: {},
  onStart: null,
  onFinish: null,
  onSuccess: null,
  onError: null,
  onCancelToken: null,

  // Hover effects (all hover-related properties are inside this object)
  hover: {
    gradient: null,          // hover gradient (overrides main gradient on hover)
    darkGradient: null,      // dark mode hover gradient
    color: null,             // hover text color
    darkColor: null,         // dark mode hover text color
    scale: null,             // e.g. 'scale-105'
    bgColor: null,           // e.g. 'bg-blue-700' (solid background on hover, overrides gradient)
    darkBgColor: null,       // dark mode hover background
    shadow: null,            // e.g. 'shadow-lg'
    transition: 'transition-all duration-300',
    customStyles: {},        // inline styles applied on hover
  },

  // Accessibility
  ariaLabel: '',
  ariaExpanded: null,
  ariaControls: null,

  // Events
  onClick: null,
  onHover: null,
  onLeave: null,

  // Additional inline styles
  style: {},
};

// ----------------------------------------------------------------------
// Size presets (used unless overridden by custom padding)
// ----------------------------------------------------------------------
const sizePresets = {
  sm: {
    padding: 'px-3 py-1.5',
    fontSize: 'text-sm',
    gap: 'gap-1',
    iconSize: 'w-4 h-4',
  },
  md: {
    padding: 'px-4 py-2',
    fontSize: 'text-base',
    gap: 'gap-2',
    iconSize: 'w-5 h-5',
  },
  lg: {
    padding: 'px-6 py-3',
    fontSize: 'text-lg',
    gap: 'gap-3',
    iconSize: 'w-6 h-6',
  },
};

// ----------------------------------------------------------------------
// Gradient direction mapping to Tailwind classes
// ----------------------------------------------------------------------
const gradientDirections = {
  'to-r': 'bg-gradient-to-r',
  'to-l': 'bg-gradient-to-l',
  'to-t': 'bg-gradient-to-t',
  'to-b': 'bg-gradient-to-b',
  'to-tr': 'bg-gradient-to-tr',
  'to-tl': 'bg-gradient-to-tl',
  'to-br': 'bg-gradient-to-br',
  'to-bl': 'bg-gradient-to-bl',
};

// ----------------------------------------------------------------------
// Helper: resolves an icon component from name and library prefix
// ----------------------------------------------------------------------
const getIconComponent = (iconName, libraryPrefix) => {
  if (!iconName || !libraryPrefix) return null;
  const library = iconLibraries[libraryPrefix];
  return library?.[iconName] || null;
};

// ----------------------------------------------------------------------
// Helper: returns an array of Tailwind classes for the button background
// (handles gradient vs solid, hover overrides, dark mode)
// ----------------------------------------------------------------------
const getBackgroundClasses = (merged, isHovered) => {
  if (merged.disabled || merged.loading) return [];

  // Priority: hover solid > hover gradient > base gradient > base solid
  if (isHovered) {
    if (merged.hover.bgColor) {
      // Solid hover background (overrides any gradient)
      const classes = [merged.hover.bgColor];
      if (merged.hover.darkBgColor) classes.push(merged.hover.darkBgColor);
      return classes;
    }
    if (merged.hover.gradient) {
      // Gradient hover background
      const direction = gradientDirections[merged.gradientDirection] || 'bg-gradient-to-r';
      const classes = [direction, merged.hover.gradient];
      if (merged.hover.darkGradient) classes.push(merged.hover.darkGradient);
      return classes;
    }
  }

  // Not hovered, or no hover overrides
  if (merged.gradient) {
    const direction = gradientDirections[merged.gradientDirection] || 'bg-gradient-to-r';
    const classes = [direction, merged.gradient];
    if (merged.darkGradient) classes.push(merged.darkGradient);
    return classes;
  }

  // Default solid background
  const classes = [merged.bgColor];
  if (merged.darkBgColor) classes.push(merged.darkBgColor);
  return classes;
};

// ----------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------
const CMS_Button = ({ config = {}, children }) => {
  // Merge user config with defaults, then apply size presets
  const merged = useMemo(() => {
    const base = { ...defaultConfig, ...config };
    const sizePreset = sizePresets[base.size] || sizePresets.md;

    // Allow custom padding to override the size preset
    const finalPadding = base.padding || sizePreset.padding;

    return {
      ...base,
      ...sizePreset,
      padding: finalPadding,
      hover: { ...defaultConfig.hover, ...base.hover },
    };
  }, [config]);

  // Local hover state for customStyles and background changes
  const [isHovered, setIsHovered] = useState(false);

  // Icon component (if any)
  const IconComponent = useMemo(
    () => getIconComponent(merged.icon, merged.iconLibrary),
    [merged.icon, merged.iconLibrary]
  );

  // --------------------------------------------------------------------
  // Render helpers
  // --------------------------------------------------------------------
  const renderIcon = () => {
    if (!IconComponent) return null;
    return <IconComponent className={merged.iconSize} />;
  };

  const renderContent = () => {
    if (merged.loading) return null; // loading spinner replaces everything
    if (merged.iconOnly) return renderIcon();

    const icon = renderIcon();
    const text = <span>{merged.text}</span>;

    if (merged.iconPosition === 'right') {
      return (
        <>
          {text}
          {icon && <span className="ml-2">{icon}</span>}
        </>
      );
    }
    return (
      <>
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </>
    );
  };

  const renderLoading = () => {
    if (!merged.loading) return null;
    return (
      <svg
        className={`animate-spin ${merged.iconSize} ${merged.text && !merged.iconOnly ? 'mr-2' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );
  };

  // --------------------------------------------------------------------
  // Build class list
  // --------------------------------------------------------------------
  const alignmentClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[merged.alignment] || 'justify-center';

  // Get background classes based on hover state and config
  const backgroundClasses = getBackgroundClasses(merged, isHovered);

  // Base classes that are always present
  const baseClasses = [
    'inline-flex items-center',
    alignmentClass,
    merged.padding,
    merged.fontSize,
    merged.rounded,
    merged.gap,
    merged.fullWidth ? 'w-full' : '',
    merged.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    merged.hover.transition, // e.g. 'transition-all duration-300'
  ];

  // Add background classes (gradient or solid)
  baseClasses.push(...backgroundClasses);

  // Text colors
  baseClasses.push(merged.color);
  baseClasses.push(merged.darkColor);

  // Border classes
  if (merged.border) baseClasses.push(merged.border);
  if (merged.darkBorder) baseClasses.push(merged.darkBorder);

  // Hover classes for non‑background effects (only if not disabled)
  if (!merged.disabled && !merged.loading) {
    // Hover text color
    if (merged.hover.color) baseClasses.push(`hover:${merged.hover.color}`);
    if (merged.hover.darkColor) baseClasses.push(`dark:hover:${merged.hover.darkColor}`);

    // Scale and shadow
    if (merged.hover.scale) baseClasses.push(`hover:${merged.hover.scale}`);
    if (merged.hover.shadow) baseClasses.push(`hover:${merged.hover.shadow}`);
  }

  const buttonClasses = baseClasses.filter(Boolean).join(' ');

  // --------------------------------------------------------------------
  // Event handlers
  // --------------------------------------------------------------------
  const handleMouseEnter = (e) => {
    setIsHovered(true);
    merged.onHover?.(e);
  };
  const handleMouseLeave = (e) => {
    setIsHovered(false);
    merged.onLeave?.(e);
  };
  const handleClick = (e) => {
    if (merged.disabled || merged.loading) {
      e.preventDefault();
      return;
    }
    merged.onClick?.(e);
  };

  // --------------------------------------------------------------------
  // Accessibility props
  // --------------------------------------------------------------------
  const accessibilityProps = {
    'aria-label': merged.ariaLabel || (merged.iconOnly ? merged.text : undefined),
    'aria-expanded': merged.ariaExpanded,
    'aria-controls': merged.ariaControls,
    'aria-disabled': merged.disabled || undefined,
    'aria-busy': merged.loading || undefined,
  };

  // --------------------------------------------------------------------
  // Inertia Link props (only used if href exists)
  // --------------------------------------------------------------------
  const inertiaProps = {
    href: merged.href,
    method: merged.method,
    preserveState: merged.preserveState,
    preserveScroll: merged.preserveScroll,
    replace: merged.replace,
    only: merged.only,
    headers: merged.headers,
    data: merged.data,
    onStart: merged.onStart,
    onFinish: merged.onFinish,
    onSuccess: merged.onSuccess,
    onError: merged.onError,
    onCancelToken: merged.onCancelToken,
    onClick: handleClick,
    disabled: merged.disabled || merged.loading,
    className: buttonClasses,
    style: { ...merged.style, ...(isHovered ? merged.hover.customStyles : {}) },
    ...accessibilityProps,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  // --------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------
  const inner = (
    <span className="inline-flex items-center justify-center">
      {merged.loading ? renderLoading() : renderContent()}
      {children}
    </span>
  );

  if (merged.href) {
    return <Link {...inertiaProps}>{inner}</Link>;
  }

  return (
    <button
      type={merged.type}
      disabled={merged.disabled || merged.loading}
      className={buttonClasses}
      style={{ ...merged.style, ...(isHovered ? merged.hover.customStyles : {}) }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...accessibilityProps}
    >
      {inner}
    </button>
  );
};

// ----------------------------------------------------------------------
// PropTypes (optional but helpful)
// ----------------------------------------------------------------------
CMS_Button.propTypes = {
  config: PropTypes.object,
  children: PropTypes.node,
};

export default CMS_Button;