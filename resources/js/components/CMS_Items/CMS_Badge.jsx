/**
 * CMS_Badge Component - Editor-friendly badge with flat class structure
 * 
 * Features:
 * - Flat class structure for easy editing
 * - Multiple variants (default, primary, success, warning, danger, etc.)
 * - Icon support from 16+ libraries
 * - Count/notification badges with max count
 * - Dot indicators with pulse animation
 * - Interactive states (clickable, links)
 * - Hover effects with classes
 * - Dark mode support
 */

import React, { forwardRef, useMemo, useState } from 'react';
import clsx from 'clsx';
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

// ============================================================================
// Icon Libraries Registry
// ============================================================================

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

// ============================================================================
// Default Classes Structure
// ============================================================================

const defaultClasses = {
  // Base badge styles
  base: '',

  // Interactive states
  hover: '',
  focus: '',
  active: '',

  // Theme states
  dark: '',
  darkHover: '',
  darkFocus: '',

  // Responsive breakpoints
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',

  // Icon specific classes
  icon: '',
  iconLeft: '',
  iconRight: '',

  // Dot indicator classes
  dot: '',
  dotPulse: '',

  // Count/number classes
  count: '',

  // Custom override
  custom: '',
};

// Default props (non-class properties)
const defaultProps = {
  // Content
  text: 'Badge',
  icon: null,
  iconLibrary: 'fa',
  iconPosition: 'left',
  iconOnly: false,

  // Size
  size: 'md', // 'sm', 'md', 'lg'

  // Count support
  count: null,
  maxCount: 99,
  showZero: false,

  // Dot indicator
  dot: false,
  dotSize: 'w-2 h-2',
  pulse: false,

  // Interactive
  clickable: false,
  href: null,

  // Accessibility
  ariaLabel: '',
  role: 'status',

  // Events
  onClick: null,
  onHover: null,
  onLeave: null,
};

// Size presets (can be overridden by classes)
const sizePresets = {
  sm: {
    base: 'px-1.5 py-0.5 text-xs gap-0.5',
    icon: 'w-3 h-3',
    dot: 'w-1.5 h-1.5',
    count: 'text-xs',
  },
  md: {
    base: 'px-2 py-1 text-xs gap-1',
    icon: 'w-3.5 h-3.5',
    dot: 'w-2 h-2',
    count: 'text-xs',
  },
  lg: {
    base: 'px-2.5 py-1.5 text-sm gap-1.5',
    icon: 'w-4 h-4',
    dot: 'w-2.5 h-2.5',
    count: 'text-sm',
  },
};

// Pre-defined variant presets (can be used with classes)
const variantPresets = {
  default: {
    base: 'bg-gray-100 text-gray-700',
    dark: 'dark:bg-gray-700 dark:text-gray-300',
  },
  primary: {
    base: 'bg-blue-100 text-blue-700',
    dark: 'dark:bg-blue-900/30 dark:text-blue-300',
  },
  success: {
    base: 'bg-green-100 text-green-700',
    dark: 'dark:bg-green-900/30 dark:text-green-300',
  },
  warning: {
    base: 'bg-yellow-100 text-yellow-700',
    dark: 'dark:bg-yellow-900/30 dark:text-yellow-300',
  },
  danger: {
    base: 'bg-red-100 text-red-700',
    dark: 'dark:bg-red-900/30 dark:text-red-300',
  },
  info: {
    base: 'bg-cyan-100 text-cyan-700',
    dark: 'dark:bg-cyan-900/30 dark:text-cyan-300',
  },
  outline: {
    base: 'bg-transparent border border-gray-300 text-gray-700',
    dark: 'dark:border-gray-600 dark:text-gray-300',
  },
  online: {
    base: 'bg-green-500 text-white',
    dot: 'bg-green-500',
    pulse: 'animate-pulse',
  },
  offline: {
    base: 'bg-gray-400 text-white',
    dot: 'bg-gray-400',
  },
  busy: {
    base: 'bg-red-500 text-white',
    dot: 'bg-red-500',
  },
  away: {
    base: 'bg-yellow-500 text-white',
    dot: 'bg-yellow-500',
  },
};

// Shape presets
const shapePresets = {
  rounded: 'rounded',
  pill: 'rounded-full',
  square: 'rounded-none',
};

// Metadata for visual editor
const componentMetadata = {
  name: 'Badge',
  description: 'Status indicator, label, or notification badge',
  category: 'display',
  icon: '🏷️',
  editable: ['base', 'hover', 'dark', 'dot', 'icon'],
  controls: [
    { type: 'text', target: 'text', label: 'Badge Text' },
    { type: 'select', target: 'size', label: 'Size', options: ['sm', 'md', 'lg'] },
    { type: 'select', target: 'variant', label: 'Variant', options: Object.keys(variantPresets) },
    { type: 'select', target: 'shape', label: 'Shape', options: ['rounded', 'pill', 'square'] },
    { type: 'toggle', target: 'dot', label: 'Dot Indicator' },
    { type: 'toggle', target: 'pulse', label: 'Pulse Animation' },
    { type: 'number', target: 'count', label: 'Count' },
    { type: 'number', target: 'maxCount', label: 'Max Count' },
    { type: 'select', target: 'iconLibrary', label: 'Icon Library', options: Object.keys(iconLibraries) },
    { type: 'text', target: 'icon', label: 'Icon Name' },
    { type: 'select', target: 'iconPosition', label: 'Icon Position', options: ['left', 'right'] },
    { type: 'toggle', target: 'clickable', label: 'Clickable' },
    { type: 'class-editor', target: 'base', label: 'Base Styles' },
    { type: 'class-editor', target: 'hover', label: 'Hover Styles' },
    { type: 'class-editor', target: 'dark', label: 'Dark Mode Styles' },
  ]
};

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Build final class string from config
 */
const buildClasses = (classes = {}, extraClassName) => {
  return clsx(
    // Base styles
    classes.base,

    // Interactive states
    classes.hover,
    classes.focus,
    classes.active,

    // Theme states
    classes.dark,
    classes.darkHover,
    classes.darkFocus,

    // Responsive
    classes.sm,
    classes.md,
    classes.lg,
    classes.xl,
    classes['2xl'],

    // Custom override
    classes.custom,

    // Emergency override
    extraClassName
  );
};

/**
 * Get icon component from library
 */
const getIconComponent = (iconName, libraryPrefix) => {
  if (!iconName || !libraryPrefix) return null;
  const library = iconLibraries[libraryPrefix];
  return library?.[iconName] || null;
};

/**
 * Format count with max
 */
const formatCount = (count, maxCount, showZero) => {
  if (count === null || count === undefined) return null;
  if (count === 0 && !showZero) return null;
  if (count > maxCount) return `${maxCount}+`;
  return count.toString();
};

// ============================================================================
// Main Component
// ============================================================================

const CMS_Badge = forwardRef(({
  // Component identification
  uid,
  component = 'CMS_Badge',

  // Main styling - flat class structure
  classes = defaultClasses,

  // Content
  text = 'Badge',
  icon,
  iconLibrary = 'fa',
  iconPosition = 'left',
  iconOnly = false,

  // Size
  size = 'md',

  // Shape
  shape = 'rounded',

  // Count support
  count,
  maxCount = 99,
  showZero = false,

  // Dot indicator
  dot = false,
  dotSize,
  pulse = false,

  // Interactive
  clickable = false,
  href,

  // Accessibility
  ariaLabel,
  role = 'status',

  // Events
  onClick,
  onHover,
  onLeave,

  // Debug
  debug = false,

  // Extra
  className,
  style,
  children,
  ...props
}, ref) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Get icon component
  const IconComponent = useMemo(
    () => getIconComponent(icon, iconLibrary),
    [icon, iconLibrary]
  );

  // Apply size preset
  const sizePreset = useMemo(() => {
    return sizePresets[size] || sizePresets.md;
  }, [size]);

  // Apply shape preset
  const shapePreset = useMemo(() => {
    return shapePresets[shape] || shapePresets.rounded;
  }, [shape]);

  // Format count for display
  const displayCount = useMemo(() => {
    return formatCount(count, maxCount, showZero);
  }, [count, maxCount, showZero]);

  // Build base classes with size preset and shape
  const baseClasses = useMemo(() => {
    return clsx(
      'inline-flex items-center justify-center',
      shapePreset,
      sizePreset.base,
      buildClasses(classes, className),
      clickable && 'cursor-pointer',
      className
    );
  }, [classes, sizePreset, shapePreset, clickable, className]);

  // Build icon classes
  const iconClasses = useMemo(() => {
    return clsx(
      sizePreset.icon,
      classes.icon,
      iconOnly ? '' : (iconPosition === 'left' ? 'mr-1' : 'ml-1')
    );
  }, [sizePreset.icon, classes.icon, iconOnly, iconPosition]);

  // Build dot classes
  const dotClasses = useMemo(() => {
    return clsx(
      dotSize || sizePreset.dot,
      'rounded-full',
      classes.dot,
      pulse && (classes.dotPulse || 'animate-pulse')
    );
  }, [dotSize, sizePreset.dot, classes.dot, classes.dotPulse, pulse]);

  // Build count classes
  const countClasses = useMemo(() => {
    return clsx(
      sizePreset.count,
      classes.count
    );
  }, [sizePreset.count, classes.count]);

  // Render icon
  const renderIcon = () => {
    if (!IconComponent) return null;
    return <IconComponent className={iconClasses} />;
  };

  // Render dot
  const renderDot = () => {
    if (!dot) return null;
    return <span className={dotClasses} />;
  };

  // Render content
  const renderContent = () => {
    if (iconOnly && IconComponent) {
      return renderIcon();
    }

    const contentText = displayCount || text;
    const iconEl = renderIcon();
    const dotEl = renderDot();

    // Dot with optional text
    if (dot) {
      return (
        <>
          {dotEl}
          {contentText && <span className="ml-1">{contentText}</span>}
        </>
      );
    }

    // Icon with text
    if (iconPosition === 'right') {
      return (
        <>
          <span>{contentText}</span>
          {iconEl}
        </>
      );
    }

    return (
      <>
        {iconEl}
        <span>{contentText}</span>
      </>
    );
  };

  // Event handlers
  const handleMouseEnter = (e) => {
    setIsHovered(true);
    onHover?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    onLeave?.(e);
  };

  const handleFocus = (e) => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  // Accessibility props
  const accessibilityProps = {
    'aria-label': ariaLabel || (iconOnly ? text : undefined),
    'role': role,
    'tabIndex': clickable ? 0 : undefined,
    ...props,
  };

  // Common props for all elements
  const commonProps = {
    ref,
    className: baseClasses,
    style,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleClick,
    'data-uid': uid,
    'data-component': component,
    'data-hovered': isHovered ? 'true' : undefined,
    'data-focused': isFocused ? 'true' : undefined,
    ...accessibilityProps,
  };

  // Render as link if href provided
  if (href) {
    return (
      <a href={href} {...commonProps}>
        {renderContent()}
        {children}
      </a>
    );
  }

  // Render as button if clickable
  if (clickable) {
    return (
      <button type="button" {...commonProps}>
        {renderContent()}
        {children}
      </button>
    );
  }

  // Render as span (default)
  return (
    <span {...commonProps}>
      {renderContent()}
      {children}
    </span>
  );
});

CMS_Badge.displayName = 'CMS_Badge';
CMS_Badge.metadata = componentMetadata;
CMS_Badge.defaultProps = defaultProps;
CMS_Badge.variants = variantPresets;

// ============================================================================
// Pre-configured Badge Components
// ============================================================================

export const CMS_PrimaryBadge = forwardRef((props, ref) => (
  <CMS_Badge
    ref={ref}
    classes={{
      base: clsx('bg-blue-100 text-blue-700', props.classes?.base),
      dark: clsx('dark:bg-blue-900/30 dark:text-blue-300', props.classes?.dark),
      ...props.classes
    }}
    {...props}
  />
));
CMS_PrimaryBadge.displayName = 'CMS_PrimaryBadge';

export const CMS_SuccessBadge = forwardRef((props, ref) => (
  <CMS_Badge
    ref={ref}
    classes={{
      base: clsx('bg-green-100 text-green-700', props.classes?.base),
      dark: clsx('dark:bg-green-900/30 dark:text-green-300', props.classes?.dark),
      ...props.classes
    }}
    {...props}
  />
));
CMS_SuccessBadge.displayName = 'CMS_SuccessBadge';

export const CMS_WarningBadge = forwardRef((props, ref) => (
  <CMS_Badge
    ref={ref}
    classes={{
      base: clsx('bg-yellow-100 text-yellow-700', props.classes?.base),
      dark: clsx('dark:bg-yellow-900/30 dark:text-yellow-300', props.classes?.dark),
      ...props.classes
    }}
    {...props}
  />
));
CMS_WarningBadge.displayName = 'CMS_WarningBadge';

export const CMS_DangerBadge = forwardRef((props, ref) => (
  <CMS_Badge
    ref={ref}
    classes={{
      base: clsx('bg-red-100 text-red-700', props.classes?.base),
      dark: clsx('dark:bg-red-900/30 dark:text-red-300', props.classes?.dark),
      ...props.classes
    }}
    {...props}
  />
));
CMS_DangerBadge.displayName = 'CMS_DangerBadge';

export const CMS_InfoBadge = forwardRef((props, ref) => (
  <CMS_Badge
    ref={ref}
    classes={{
      base: clsx('bg-cyan-100 text-cyan-700', props.classes?.base),
      dark: clsx('dark:bg-cyan-900/30 dark:text-cyan-300', props.classes?.dark),
      ...props.classes
    }}
    {...props}
  />
));
CMS_InfoBadge.displayName = 'CMS_InfoBadge';

export const CMS_OutlineBadge = forwardRef((props, ref) => (
  <CMS_Badge
    ref={ref}
    classes={{
      base: clsx('bg-transparent border border-gray-300 text-gray-700', props.classes?.base),
      dark: clsx('dark:border-gray-600 dark:text-gray-300', props.classes?.dark),
      ...props.classes
    }}
    {...props}
  />
));
CMS_OutlineBadge.displayName = 'CMS_OutlineBadge';

export const CMS_CountBadge = forwardRef(({ count, ...props }, ref) => (
  <CMS_Badge
    ref={ref}
    count={count}
    classes={{
      base: clsx('bg-red-500 text-white', props.classes?.base),
      dark: clsx('dark:bg-red-600', props.classes?.dark),
      ...props.classes
    }}
    {...props}
  />
));
CMS_CountBadge.displayName = 'CMS_CountBadge';

export const CMS_DotBadge = forwardRef(({ color, ...props }, ref) => (
  <CMS_Badge
    ref={ref}
    dot={true}
    classes={{
      base: clsx('bg-transparent', props.classes?.base),
      dot: clsx(color || 'bg-green-500', props.classes?.dot),
      ...props.classes
    }}
    {...props}
  />
));
CMS_DotBadge.displayName = 'CMS_DotBadge';

// ============================================================================
// Export
// ============================================================================

export default CMS_Badge;